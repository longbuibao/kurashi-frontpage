'use client'

import React, { useState } from 'react'
import { useFormState, useFormStatus } from 'react-dom'
import { createNewUser } from '@/actions/action'
import { ClipLoader } from 'react-spinners'

const initialState = {
  email: '',
  name: '',
  password: '',
  userName: ''
}

const SubmitButton: React.FC = () => {
  const { pending } = useFormStatus()

  return (
    <button type='submit' aria-disabled={pending} className='w-fit'>
      <div>
        {!pending
          ? (
            <div className='flex flex-row text-secondary bg-main px-3 py-2 rounded-lg'>
              <div>Tạo</div>
            </div>)
          : <div className='w-full h-full'><ClipLoader color='#437254' loading speedMultiplier={2} size={15} /></div>}
      </div>
    </button>
  )
}

const AddNewUserForm: React.FC = () => {
  const [state, formAction] = useFormState<{ email: string, name: string, password: string, userName: string }, FormData>(createNewUser, initialState)
  const [result, setResult] = useState(state)
  return (
    <div>
      <form className='w-full flex flex-col gap-5 flex-1' action={formAction}>
        <input className='p-1 border-b rounded-sm border-secondary' placeholder='Tên' name='userName' content={result.userName} required />
        <input className='p-1 border-b rounded-sm border-secondary' placeholder='Email' type='email' name='email' content={result.email} required />
        <input className='p-1 border-b rounded-sm border-secondary' placeholder='User iD' type='text' name='userId' content={result.email} required />
        <input className='p-1 border-b rounded-sm border-secondary' placeholder='Mật khẩu' type='text' name='password' content={result.password} required />
        <SubmitButton />
        <div className='w-fit mb-2 flex flex-row' />
      </form>
    </div>
  )
}

export default AddNewUserForm
