'use client'
import React, { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { ClipLoader } from 'react-spinners'
import * as z from 'zod'
import { doLogin } from '@/actions/login'

import { LoginSchema } from '@/schema'
import UserIcon from '@/components/svg-icons/user'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormError, FormSuccess } from '../form'

interface LoginFormProps {
  title: string
}

const LoginForm: React.FC<LoginFormProps> = ({ title }) => {
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')
  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      password: '',
      userId: ''
    }
  })

  const onSubmit = (values: z.infer<typeof LoginSchema>): void => {
    setError('')
    setSuccess('')
    startTransition(() => {
      doLogin(values)
        .then((data) => {
          setError(data.error)
          setSuccess(data.success)
        })
        .catch((e) => console.log(e))
    })
  }

  return (
    <div className='flex flex-col gap-10 h-full'>
      <div className='flex flex-col gap-10'>
        <div className='text-2xl'>
          {title.toUpperCase()}
        </div>
        <div className='flex flex-row gap-5'>
          <UserIcon width='20' height='20' />
          <div>Đăng nhập</div>
        </div>
      </div>
      <div className='flex flex-row items-center'>
        <form className='flex flex-col gap-5 w-full' onSubmit={form.handleSubmit(onSubmit)}>
          <div className='border-b-[1px] border-black'>
            <label htmlFor='userId'>
              <div>iD</div>
            </label>
            <input {...form.register('userId', { required: true })} id='userId' className='bg-kurashi-bg-main w-full' />
          </div>
          <div className='border-b-[1px] border-black'>
            <label htmlFor='password'>
              <div>Password</div>
            </label>
            <input type='password' id='password' className='bg-kurashi-bg-main w-full' {...form.register('password', { required: true })} />
          </div>
          <button type='submit' aria-disabled={isPending}>
            <div className='text-secondary bg-main border p-2 border-main'>
              {!isPending
                ? <div>Đăng nhập</div>
                : <div className='w-full h-full'><ClipLoader color='#e5e5e5' loading speedMultiplier={2} size={15} /></div>}
            </div>
          </button>
        </form>
      </div>
      <div className='w-full h-9'>
        <FormSuccess message={success} redirectTo='/phu-kien-nam-cham' />
        <FormError message={error} />
      </div>
    </div>
  )
}

export default LoginForm
