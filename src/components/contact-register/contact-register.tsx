'use client'

import React, { useEffect, useState } from 'react'
import { useFormState, useFormStatus } from 'react-dom'
import { ClipLoader } from 'react-spinners'

import { createContactRegister } from '@/actions/action'
import { sussesEmailRegistration, failEmailRegistration } from '@/constants'
import { SussesNotification, FailNotification } from '@/components/notification'

const SubmitButton: React.FC = () => {
  const { pending } = useFormStatus()

  return (
    <button type='submit' aria-disabled={pending}>
      <div className='p-2'>
        {!pending
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
  )
}

const initialState = {
  email: '',
  name: '',
  phoneNumber: '',
  message: ''
}

const ContactRegister: React.FC = () => {
  const [state, formAction] = useFormState<{ email: string, name: string, phoneNumber: string, message: string }, FormData>(createContactRegister, initialState)
  const [contactRegistrationResult, setContactRegistrationResult] = useState(state)
  useEffect(() => {
    setContactRegistrationResult(state)
    setTimeout(function () {
      setContactRegistrationResult({ email: '', name: '', phoneNumber: '', message: '' })
    }, 3000)
  }, [state])

  return (
    <form className='w-full flex flex-col gap-5 flex-1' action={formAction}>
      <input className='p-1 border-b rounded-sm border-secondary' placeholder='Tên' name='name' content={contactRegistrationResult.name} required />
      <input className='p-1 border-b rounded-sm border-secondary' placeholder='Email' type='email' name='email' content={contactRegistrationResult.email} required />
      <input className='p-1 border-b rounded-sm border-secondary' placeholder='Số điện thoại' type='tel' name='phoneNumber' content={contactRegistrationResult.phoneNumber} required />
      <textarea rows={15} className='p-1 rounded-sm border-b border-secondary w-full h-70' name='message' id='' placeholder='Nội dung tin nhắn' content={contactRegistrationResult.message} required />
      <div className='w-fit mb-2 flex flex-row'>
        <SubmitButton />
        {contactRegistrationResult.email === sussesEmailRegistration
          ? <div className='w-fit'> <SussesNotification label='Đăng kí thành công' /> </div>
          : contactRegistrationResult.email === failEmailRegistration
            ? <div className='w-fit'><FailNotification label='Đăng kí thất bại' /></div>
            : <div />}
      </div>

    </form>
  )
}

export default ContactRegister
