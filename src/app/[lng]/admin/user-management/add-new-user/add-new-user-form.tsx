'use client'

import * as z from 'zod'
import React, { useState, useTransition } from 'react'
import { ClipLoader } from 'react-spinners'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { RegisterSchema } from '@/schema'
import { createNewUser } from '@/actions/user'
import { FormError, FormSuccess } from '@/components/form'

const AddNewUserForm: React.FC = () => {
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')
  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: '',
      password: '',
      userId: '',
      userName: ''
    }
  })

  const onSubmit = (values: z.infer<typeof RegisterSchema>): void => {
    setError('')
    setSuccess('')
    startTransition(() => {
      createNewUser(values)
        .then((data) => {
          setError(data.error)
          setSuccess(data.success)
        })
        .catch((e) => console.log(e))
    })
  }

  return (
    <form className='w-full flex flex-col gap-5 flex-1' onSubmit={form.handleSubmit(onSubmit)}>
      <input className='p-1 border-b rounded-sm border-secondary' disabled={isPending} placeholder='Tên' {...form.register('userName', { required: true })} />
      <input className='p-1 border-b rounded-sm border-secondary' disabled={isPending} placeholder='Email' type='email' {...form.register('email', { required: true })} />
      <input className='p-1 border-b rounded-sm border-secondary' disabled={isPending} placeholder='User iD' type='text' {...form.register('userId', { required: true })} />
      <input className='p-1 border-b rounded-sm border-secondary' disabled={isPending} placeholder='Mật khẩu' type='text' {...form.register('password', { required: true })} />
      <FormError message={error} />
      <FormSuccess message={success} />
      <button type='submit' aria-disabled={isPending} className='w-fit'>
        <div>
          {!isPending
            ? (
              <div className='flex flex-row text-secondary bg-main px-3 py-2 rounded-lg'>
                <div>Tạo</div>
              </div>)
            : <div className='w-full h-full'><ClipLoader color='#437254' loading speedMultiplier={2} size={15} /></div>}
        </div>
      </button>
      <div className='w-fit mb-2 flex flex-row' />
    </form>

  )
}

export default AddNewUserForm
