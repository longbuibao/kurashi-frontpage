'use server'

import bcrypt from 'bcrypt'
import * as z from 'zod'
import { RegisterSchema } from '@/schema'

export const createNewUser = async (_: any, formData: FormData): Promise<z.infer<typeof RegisterSchema>> => {
  return { email: '', userId: '', password: '', userName: '' }
}
