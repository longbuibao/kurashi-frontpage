'use server'

import * as z from 'zod'

import { BlogRegisterSchema } from '@/schema'
import prisma from '@/lib/prisma'

const blogRegisterReturnType = z.object({
  success: z.string().optional(),
  error: z.string().optional()
})

export const createBlogRegister = async (values: z.infer<typeof BlogRegisterSchema>): Promise<z.infer<typeof blogRegisterReturnType>> => {
  const validatedFields = BlogRegisterSchema.safeParse(values)
  if (!validatedFields.success) {
    return { error: 'Invalid fields' }
  }
  const { email } = validatedFields.data
  const isEmailExist = await prisma.blogRegistrationList.findFirst({ where: { email } })
  if (isEmailExist != null) {
    return { error: 'Email đã tồn tại' }
  }

  await prisma.blogRegistrationList.create({ data: { email } })
  return { success: 'Đăng kí thành công' }
}
