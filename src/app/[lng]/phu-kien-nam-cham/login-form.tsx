'use client'
import React from 'react'
import { useFormState, useFormStatus } from 'react-dom'
import { ClipLoader } from 'react-spinners'

import { doLogin, LoginResult } from '@/actions/action'
import UserIcon from '@/components/svg-icons/user'

interface LoginFormProps {
  title: string
}

const initialState = {
  userId: '',
  password: ''
}

const SubmitButton: React.FC = () => {
  const { pending } = useFormStatus()

  return (
    <button type='submit' aria-disabled={pending}>
      <div className='text-secondary bg-main border p-2 border-main'>
        {!pending
          ? <div>Đăng nhập</div>
          : <div className='w-full h-full'><ClipLoader color='#e5e5e5' loading speedMultiplier={2} size={15} /></div>}
      </div>
    </button>
  )
}

const LoginForm: React.FC<LoginFormProps> = ({ title }) => {
  const [state, formAction] = useFormState<Partial<LoginResult>, FormData>(doLogin, initialState)
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
        <form action={formAction} className='flex flex-col gap-5 w-full'>
          <div className='border-b-[1px] border-black'>
            <label htmlFor='userId'>
              <div>ID</div>
            </label>
            <input name='userId' id='userId' className='bg-kurashi-bg-main w-full' content={state.userId} required />
          </div>
          <div className='border-b-[1px] border-black'>
            <label htmlFor='password'>
              <div>Password</div>
            </label>
            <input type='password' id='password' className='bg-kurashi-bg-main w-full' name='password' content={state.password} required />
          </div>
          <SubmitButton />
        </form>
      </div>
    </div>
  )
}

export default LoginForm
