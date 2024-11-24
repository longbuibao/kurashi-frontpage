'use server'
import prisma from '@/lib/prisma'
import { signIn } from '@/auth'

import { sussesEmailRegistration, existedEmailRegistration, failEmailRegistration } from '@/constants'

export interface LoginResult {
  isLoggedIn: boolean
  message: string
  userId: string
  password: string
}

export const doLogin = async (_: any, formData: FormData): Promise<LoginResult> => {
  try {
    const userId = formData.get('userId')
    const password = formData.get('password')
    if (userId !== null && password !== null) {
      const userIdReal = userId.valueOf()
      const passwordReal = password.valueOf()
      await signIn('credentials', {
        userId: userIdReal,
        password: passwordReal,
        redirect: false
      })

      return {
        isLoggedIn: true,
        message: 'ok',
        password: '',
        userId: ''
      }
    } else {
      return {
        isLoggedIn: false,
        message: 'Please provide me your password and user id or contact us as: dien-vo@kurashi.com.vn',
        password: '',
        userId: ''
      }
    }
  } catch (error) {
    const hack = error as any
    if (hack.type === 'CredentialsSignin') {
      return {
        isLoggedIn: false,
        message: 'Who are you?',
        password: '',
        userId: ''
      }
    }

    return {
      isLoggedIn: false,
      message: 'Something wrong...',
      password: '',
      userId: ''
    }
  }
}

export const createBlogRegister = async (_: any, formData: FormData): Promise<{ email: string }> => {
  try {
    const userEmail = formData.get('email')
    if (userEmail !== null) {
      const email = userEmail.valueOf()
      const isEmailExist = (await prisma.blogRegistrationList.findFirst({ where: { email } })) !== null
      if (!isEmailExist) {
        // @ts-expect-error
        await prisma.blogRegistrationList.create({ data: { email } })
        return { email: sussesEmailRegistration }
      }
    }

    return { email: existedEmailRegistration }
  } catch (error) {
    return { email: failEmailRegistration }
  }
}

export const createContactRegister = async (_: any, formData: FormData): Promise<{ email: string
  name: string
  phoneNumber: string
  message: string }> => {
  try {
    await prisma.contactRegistrationList.create({
      data: {
        // @ts-expect-error
        email: formData.get('email')?.valueOf() ?? 'default@email.com',
        // @ts-expect-error
        name: formData.get('name')?.valueOf() ?? 'name@default',
        // @ts-expect-error
        message: formData.get('message')?.valueOf() ?? 'default@message',
        // @ts-expect-error
        phoneNumber: formData.get('phoneNumber')?.valueOf() ?? 'default@phoneNumber'
      }
    })

    return { email: sussesEmailRegistration, name: '', phoneNumber: '', message: '' }
  } catch (error) {
    return { email: failEmailRegistration, name: '', phoneNumber: '', message: '' }
  }
}

export const doLoginAdmin = async (_: any, formData: FormData): Promise<LoginResult> => {
  return {
    isLoggedIn: true,
    message: 'sasas',
    password: 'sasas',
    userId: 'asas'
  }
}
