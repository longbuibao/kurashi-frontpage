'use client'

import React, { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { ClipLoader } from 'react-spinners'
import * as z from 'zod'

import { BlogRegisterSchema } from '@/schema'
import { createBlogRegister } from '@/actions/blog-sub'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormError, FormSuccess } from '../form'

const BlogRegister: React.FC = () => {
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')
  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof BlogRegisterSchema>>({
    resolver: zodResolver(BlogRegisterSchema),
    defaultValues: {
      email: ''
    }
  })

  const onSubmit = (values: z.infer<typeof BlogRegisterSchema>): void => {
    setError('')
    setSuccess('')
    startTransition(() => {
      createBlogRegister(values)
        .then((data) => {
          setError(data.error)
          setSuccess(data.success)
        })
        .catch((e) => console.log(e))
    })
  }

  return (
    <div className='flex flex-col justify-center items-center p-2 max-md:flex-col max-md:gap-5'>
      <div className='flex flex-col gap-3 max-md:w-full max-md:text-center'>
        <div className='font-bold'>Đăng kí để nhận email</div>
        <div className='max-lg:text-center max-lg:my-5 text-sm'>
          <div>Thông tin về công nghệ vật liệu, công nghệ gia công và kinh nghiệm thiết kế nội thất từ Nhật Bản</div>
        </div>
      </div>
      <form onSubmit={form.handleSubmit(onSubmit)} className='border-b-[1px] border-main mt-5 max-md:mt-3 w-full flex flex-row justify-between'>
        <input disabled={isPending} placeholder='Email' type='email' className='p-2' {...form.register('email', { required: true })} />
        <button type='submit' aria-disabled={isPending}>
          <div className='text-secondary bg-main border pb-1 px-3'>
            {!isPending
              ? <div className='text-nowrap'>đăng kí</div>
              : <div className='w-full h-full'><ClipLoader color='#e5e5e5' loading speedMultiplier={2} size={15} /></div>}
          </div>
        </button>
      </form>
      <div className='w-full'>
        <div />
      </div>
      <FormSuccess message={success} />
      <FormError message={error} />
    </div>
  )
}

export default BlogRegister
