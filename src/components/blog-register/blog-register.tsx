'use client'

import React, { useState, useTransition } from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { ClipLoader } from 'react-spinners'
import * as z from 'zod'

import { Logo } from '@/components/logo'
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
    <div className='flex flex-row justify-center gap-20 items-center p-2 max-md:flex-col max-md:gap-10'>
      <div className='flex flex-col gap-3 w-1/3 max-md:w-full max-md:text-center'>
        <div className='font-bold'>Đăng kí để nhận email</div>
        <div className='max-lg:text-center max-lg:my-5'>
          <div>Thông tin về công nghệ vật liệu, công nghệ gia công và kinh nghiệm thiết kế nội thất từ Nhật Bản</div>
        </div>
      </div>
      <div className='flex flex-row gap-5 justify-center items-center mt-auto'>
        <div className='flex flex-row items-center'>
          <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-row border-b-[1px] border-main'>
            <input disabled={isPending} placeholder='Email' type='email' className='p-2' {...form.register('email', { required: true })} />
            <button type='submit' aria-disabled={isPending}>
              <div className='text-secondary bg-main border pb-1 px-3'>
                {!isPending
                  ? <div>đăng kí</div>
                  : <div className='w-full h-full'><ClipLoader color='#e5e5e5' loading speedMultiplier={2} size={15} /></div>}
              </div>
            </button>
          </form>
        </div>
      </div>
      <FormSuccess message={success} />
      <FormError message={error} />
    </div>
  )
}

export default BlogRegister
