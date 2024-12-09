import * as z from 'zod'

export const RegisterSchema = z.object({
  email: z.string().email({
    message: 'Email is required'
  }),
  password: z.string().min(6, {
    message: 'Minimum 6 characters required'
  }),
  userName: z.string().min(1, {
    message: 'userName is required'
  }),
  userId: z.string().min(1, {
    message: 'userId is required'
  })
})
