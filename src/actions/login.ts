'use server'

import * as z from 'zod'

import { signIn } from '@/auth'
import { LoginSchema } from '@/schema'
import { DoLoginReturnType } from './types'

export const doLogin = async (values: z.infer<typeof LoginSchema>): Promise<z.infer<typeof DoLoginReturnType>> => {
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

export const doLoginAdmin = async (values: z.infer<typeof LoginSchema>): Promise<z.infer<typeof DoLoginReturnType>> => {
  const validatedFields = LoginSchema.safeParse(values)
  if (!validatedFields.success) {
    return {
      error: 'Invalid fields'
    }
  }
  const { password, userId } = validatedFields.data

  try {
    if (userId === 'kurashi-demo') {
      await signIn('credentials', { userId, password, redirect: false })
    }
    return { success: 'Đăng nhập thành công!' }
  } catch (error) {
    return { error: 'Sai tài khoản hoặc mật khẩu' }
  }
}
