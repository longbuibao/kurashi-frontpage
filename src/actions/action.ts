'use server'
import prisma from '@/lib/prisma'
import { signIn } from '@/auth'

import { sussesEmailRegistration, existedEmailRegistration, failEmailRegistration } from '@/constants'

export const doLogin = async (_: any, formData: FormData): Promise<any> => {
  await signIn('credentials', formData)
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
