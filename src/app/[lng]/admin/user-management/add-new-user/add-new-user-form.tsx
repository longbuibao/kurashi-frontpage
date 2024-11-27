'use client'

import React, { useState } from 'react'
import { useFormState } from 'react-dom'
import { createNewUser } from '@/actions/action'

const initialState = {
  email: '',
  name: '',
  password: ''
}

const AddNewUserForm: React.FC = () => {
  const [state, formAction] = useFormState<{ email: string, name: string, password: string }, FormData>(createNewUser, initialState)
  const [result, setResult] = useState(state)
  return (
    <div>
      <form className='w-full flex flex-col gap-5 flex-1' action={formAction}>
        <input className='p-1 border-b rounded-sm border-secondary' placeholder='Tên' name='name' content={result.name} required />
        <input className='p-1 border-b rounded-sm border-secondary' placeholder='Email' type='email' name='email' content={result.email} required />
        <div className='w-fit mb-2 flex flex-row' />
      </form>
    </div>
  )
}

export default AddNewUserForm
