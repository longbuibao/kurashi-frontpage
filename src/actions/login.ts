'use server'

import * as z from 'zod'

import { signIn } from '@/auth'
import { LoginSchema } from '@/schema'

const doLoginReturnType = z.object({
  success: z.string().optional(),
  error: z.string().optional()
})

export const doLogin = async (values: z.infer<typeof LoginSchema>): Promise<z.infer<typeof doLoginReturnType>> => {
  const validatedFields = LoginSchema.safeParse(values)
  if (!validatedFields.success) {
    return {
      error: 'Invalid fields'
    }
  }
  const { password, userId } = validatedFields.data

  try {
    await signIn('credentials', { userId, password, redirect: false })
    return { success: 'Đăng nhập thành công!' }
  } catch (error) {
    return { error: 'Sai tài khoản hoặc mật khẩu' }
  }
}
