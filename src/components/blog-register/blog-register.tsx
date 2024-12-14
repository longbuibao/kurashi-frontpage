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
    <div className='flex flex-col justify-center items-center p-2'>
      <Link href='/' className='mx-auto flex flex-row justify-center'>
        <Logo width={450} height={157} />
      </Link>
      <div className='max-lg:text-center max-lg:my-5'>Công nghệ và kinh nghiệm nội thất mới nhất từ Nhật Bản</div>
      <div className='flex flex-row gap-5 justify-center items-center'>
        <div className='mt-5 flex flex-row items-center'>
          <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-row'>
            <input disabled={isPending} placeholder='Nhập địa chỉ email' type='email' className='border border-main p-2' {...form.register('email', { required: true })} />
            <button type='submit' aria-disabled={isPending}>
              <div className='text-secondary bg-main border p-2 border-main'>
                {!isPending
                  ? <i className='fa-solid fa-arrow-right' />
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
