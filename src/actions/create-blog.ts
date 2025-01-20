'use server'
import { Storage } from '@google-cloud/storage'
import { CreateBlogSchema } from '@/schema'
import * as z from 'zod'
import prisma from '@/lib/prisma'
import mime from 'mime-types'

const allowedMimeType = new Set(['image/gif', 'image/jpeg', 'image/png', 'image/webp'])
const createBlogReturnType = z.object({
  success: z.string().optional(),
  error: z.string().optional()
})

export const createBlog = async (htmlString: string, values: z.infer<typeof CreateBlogSchema>): Promise<z.infer<typeof createBlogReturnType>> => {
  const validatedFields = CreateBlogSchema.safeParse(values)
  if (!validatedFields.success) {
    return { error: 'Invalid fields!' }
  }
  const { thumbnail, authorName, fileName, title } = validatedFields.data
  const mimeType = mime.lookup(thumbnail)
  if (typeof mimeType === 'boolean') {
    return {
      error: `Kiểm tra lại đuôi file ảnh. Chỉ hỗ trợ: ${allowedMimeType.values().toArray().join(', ') as any as string}`
    }
  }

  if (!allowedMimeType.has(mimeType)) {
    return {
      error: `Kiểm tra lại đuôi file ảnh. Chỉ hỗ trợ: ${allowedMimeType.values().toArray().join(', ') as any as string}`
    }
  }
  const post = await prisma.post.findFirst({
    where: {
      fileName: {
        equals: fileName
      }
    }
  })
  if (post !== null) {
    return {
      error: 'File đã tồn tại, đặt tên file khác'
    }
  }

  const author = await prisma.user.findFirst({
    where: {
      name: authorName
    }
  })

  if (author === null) {
    return {
      error: 'Tên tác giả không tồn tại'
    }
  }
  const storage = new Storage({ projectId: 'kurashi-frontpage-419616' })
  const bucketName = 'kurashi-bucket'
  try {
    const bucket = storage.bucket(bucketName)
    const file = bucket.file(ensureHtmlExtension(fileName))
    await storage.bucket(bucketName).upload(thumbnail, {
      destination: `images/${thumbnail}`,
      metadata: {
        contentType: mimeType
      }
    })
    await file.save(htmlString, { metadata: { contentType: 'text/html' } })
    await prisma.post.create({
      data: {
        thumbnail,
        title,
        fileName,
        cloudUrl: '',
        author: {
          connect: {
            id: author.id
          }
        }
      }
    })

    return {
      success: 'Tạo thành công'
    }
  } catch (error) {
    return {
      error: 'Lỗi?'
    }
  }
}

const ensureHtmlExtension = (filename: string): string => {
  const regex = /\.html$/i
  if (!regex.test(filename)) {
    return filename + '.html'
  }
  return filename
}
