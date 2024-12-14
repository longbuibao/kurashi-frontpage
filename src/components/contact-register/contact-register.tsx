'use client'

import React, { useState, useTransition } from 'react'
import { ClipLoader } from 'react-spinners'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { ContactRegisterSchema } from '@/schema'
import { contactRegister } from '@/actions/contact-register'
import { FormError, FormSuccess } from '@/components/form'

const ContactRegister: React.FC = () => {
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')
  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof ContactRegisterSchema>>({
    resolver: zodResolver(ContactRegisterSchema),
    defaultValues: {
      email: '',
      message: '',
      name: '',
      phoneNumber: ''
    }
  })

  const onSubmit = (values: z.infer<typeof ContactRegisterSchema>): void => {
    setError('')
    setSuccess('')
    startTransition(() => {
      contactRegister(values)
        .then((data) => {
          setError(data.error)
          setSuccess(data.success)
        })
        .catch((e) => console.log(e))
    })
  }

  return (
    <form className='w-full flex flex-col gap-5 flex-1' onSubmit={form.handleSubmit(onSubmit)}>
      <input disabled={isPending} className='p-1 border-b rounded-sm border-secondary' placeholder='Tên' {...form.register('name', { required: true })} />
      <input disabled={isPending} className='p-1 border-b rounded-sm border-secondary' placeholder='Email' type='email' {...form.register('email', { required: true })} />
      <input disabled={isPending} className='p-1 border-b rounded-sm border-secondary' placeholder='Số điện thoại' type='tel' {...form.register('phoneNumber', { required: true })} />
      <textarea disabled={isPending} rows={15} className='p-1 rounded-sm border-b border-secondary w-full h-70' id='' placeholder='Nội dung tin nhắn' {...form.register('message', { required: true })} />
      <FormError message={error} />
      <FormSuccess message={success} />
      <div className='w-fit mb-2 flex flex-row'>
        <button type='submit' aria-disabled={isPending}>
          <div className='p-2'>
            {!isPending
              ? (
                <div className='flex flex-row'>
                  <div>Gửi</div>
                  <div className='ml-3 inline-block text-main'>
                    <i className='fa-solid fa-chevron-right' />
                  </div>
                </div>)
              : <div className='w-full h-full'><ClipLoader color='#437254' loading speedMultiplier={2} size={15} /></div>}
          </div>
        </button>
      </div>
    </form>
  )
}

export default ContactRegister
