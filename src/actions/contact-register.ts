'use server'
import * as z from 'zod'

import { ContactRegisterSchema } from '@/schema'
import prisma from '@/lib/prisma'

const contactRegisterReturnType = z.object({
  success: z.string().optional(),
  error: z.string().optional()
})

export const contactRegister = async (values: z.infer<typeof ContactRegisterSchema>): Promise<z.infer<typeof contactRegisterReturnType>> => {
  try {
    const validatedFields = ContactRegisterSchema.safeParse(values)
    if (!validatedFields.success) {
      return { error: 'Invalid fields!' }
    }

    const { email, message, name, phoneNumber } = validatedFields.data
    const isEmailExist = (await prisma.contactRegistrationList.findFirst({ where: { email } })) !== null

    if (!isEmailExist) {
      await prisma.contactRegistrationList.create({ data: { email, message, name, phoneNumber } })
      return { success: 'Đăng kí thành công!' }
    }
    return { error: 'Email đã được đăng kí!' }
  } catch (error) {
    return { error: 'Không thể đăng kí!' }
  }
}
