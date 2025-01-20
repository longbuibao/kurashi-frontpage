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

export const ContactRegisterSchema = z.object({
  name: z.string(),
  email: z.string().email({ message: 'Phải là email name@example.com' }),
  phoneNumber: z.string().min(10, { message: 'Số điện thoại phải là 10 số' }),
  message: z.string()
})

export const BlogRegisterSchema = z.object({
  email: z.string().email()
})

export const LoginSchema = z.object({
  userId: z.string(),
  password: z.string().min(6, { message: 'Password must has minimum of six' })
})

export const CreateBlogSchema = z.object({
  authorName: z.string({ message: 'authorName' }),
  content: z.string({ message: 'content' }),
  fileName: z.string({ message: 'fileName' }),
  thumbnail: z.any({ message: 'thumbnail' }),
  title: z.string({ message: 'title' })
})
