import React, { Suspense } from 'react'
import { Metadata } from 'next'
import * as fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'

import { BlogCardHomepage } from '@/components/blog-card'
import { BlogRegister } from '@/components/blog-register'
import * as skeleton from './skeleton'
import { getMetadata } from '@/utils'
import { Post } from '@prisma/client'

export async function generateMetadata (): Promise<Metadata> {
  const defaultTitle = 'Tất cả bài viết'
  const pageName = 'all-blogs'
  return await getMetadata(pageName, defaultTitle)
}

// @ts-expect-error
const AllBlogs: React.FC = async (): React.ReactElement => {
  const postsDirectory = path.join(process.cwd(), '_posts')
  const fileNames = await fs.readdir(postsDirectory)
  const posts = await Promise.all(
    fileNames
      .filter((file) => file.endsWith('.md'))
      .map(async (fileName) => {
        const slug = fileName.replace(/\.md$/, '')
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = await fs.readFile(fullPath, 'utf8')
        const { data, content } = matter(fileContents)
        return {
          slug,
          ...data,
          content
        }
      })
  )
  const blogs = posts.map(x => {
    return {
      url: `/blog/${x.slug}`,
      thumbnail: (x as any).coverImage.replace('/public', ''),
      title: (x as any).title,
      summary: (x as any).excerpt,
      id: (x as any).title
    }
  })

  return (
    <div className='w-4/5 mx-auto py-10'>
      <div className='max-md:w-full flex flex-col max-md:flex-col max-md:gap-10'>
        <Suspense>
          <div className='flex flex-col max-md:w-full max-md:p-5'>
            <div className='flex flex-col gap-5 mb-10 max-md:mb-5'>
              <div className='flex-row flex gap-3 border-b-[1px] border-main pb-5'>
                <div className='mt-auto text-xl leading-9'>KURASHI</div>
                <div className='text-7xl text-main font-bold'>BLOG</div>
              </div>
              <p className='font-thin'>
                Xu hướng, công nghệ và vật liệu về nội thất mới nhất từ Nhật Bản
              </p>
            </div>
          </div>
          <div className='flex flex-row gap-5 max-md:flex-wrap max-md:pt-0 pt-10 pb-16 items-center justify-between'>
            {blogs.map(x => <BlogCardHomepage blog={x as any as Post} key={x.id} />)}
          </div>
        </Suspense>
      </div>
    </div>
  )
}

const BlogsPage: React.FC = async () => {
  return (
    <div className='mx-auto mb-10'>
      <div className='flex flex-col gap-5'>
        <div className='flex w-full'>
          <Suspense fallback={<skeleton.AllBlogsSkeleton />}>
            <AllBlogs />
          </Suspense>
        </div>
        <div className='flex flex-col gap-10 items-center mx-auto'>
          <BlogRegister />
        </div>
      </div>
    </div>
  )
}

export default BlogsPage
