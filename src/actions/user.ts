'use server'

import bcrypt from 'bcryptjs'
import * as z from 'zod'
import { RegisterSchema } from '@/schema'
import prisma from '@/lib/prisma'

const userRegisterReturnType = z.object({
  success: z.string().optional(),
  error: z.string().optional()
})

export const createNewUser = async (values: z.infer<typeof RegisterSchema>): Promise<z.infer<typeof userRegisterReturnType>> => {
  const validatedFields = RegisterSchema.safeParse(values)
  if (!validatedFields.success) {
    return { error: 'Invalid fields!' }
  }
  const { email, password, userId, userName } = validatedFields.data
  const hashedPassword = await bcrypt.hash(password, 10)

  const existingUser = await prisma.user.findFirst({
    where: { OR: [{ userId }, { email }] }
  })

  if (existingUser !== null) {
    return { error: 'email or userName already exists!' }
  }

  await prisma.user.create({
    data: {
      email,
      name: userName,
      password: hashedPassword,
      userId
    }
  })

  return { success: 'User created' }
}
