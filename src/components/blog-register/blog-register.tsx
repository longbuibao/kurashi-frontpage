'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useFormState, useFormStatus } from 'react-dom'
import { ClipLoader } from 'react-spinners'

import { Logo } from '@/components/logo'
import { createBlogRegister } from '@/actions/action'
import { SussesNotification, FailNotification, InfoNotification } from '@/components/notification'
import { sussesEmailRegistration, failEmailRegistration, existedEmailRegistration } from '@/constants'

const SubmitButton: React.FC = () => {
  const { pending } = useFormStatus()

  return (
    <button type='submit' aria-disabled={pending}>
      <div className='text-secondary bg-main border p-2 border-main'>
        {!pending
          ? <i className='fa-solid fa-arrow-right' />
          : <div className='w-full h-full'><ClipLoader color='#e5e5e5' loading speedMultiplier={2} size={15} /></div>}
      </div>
    </button>
  )
}

const initialState = {
  email: ''
}

const BlogRegister: React.FC = () => {
  const [state, formAction] = useFormState<{ email: string }, FormData>(createBlogRegister, initialState)
  const [emailRegistrationResult, setEmailRegistrationResult] = useState(state)
  useEffect(() => {
    setEmailRegistrationResult(state)
    setTimeout(function () {
      setEmailRegistrationResult({ email: '' })
    }, 3000)
  }, [state])

  return (
    <div className='flex flex-col justify-center items-center p-2'>
      <Link href='/' className='mx-auto flex flex-row justify-center'>
        <Logo width={450} height={157} />
      </Link>
      <div className='max-lg:text-center max-lg:my-5'>Công nghệ và kinh nghiệm nội thất mới nhất từ Nhật Bản</div>
      <div className='flex flex-row gap-5 justify-center items-center'>
        <div className='mt-5 flex flex-row items-center'>
          <form action={formAction} className='flex flex-row'>
            <input placeholder='Nhập địa chỉ email' type='email' name='email' id='' className='border border-main p-2' content={state.email} required />
            <SubmitButton />
          </form>
        </div>
      </div>
      {emailRegistrationResult.email === sussesEmailRegistration
        ? <div className='mt-3'> <SussesNotification label='Đăng kí thành công' /> </div>
        : emailRegistrationResult.email === failEmailRegistration
          ? <div className='mt-3'><FailNotification label='Đăng kí thất bại' /></div>
          : emailRegistrationResult.email === existedEmailRegistration
            ? <div className='mt-3'><InfoNotification label='Email này đã được đăng kí' /></div>
            : <div />}
    </div>
  )
}

export default BlogRegister
