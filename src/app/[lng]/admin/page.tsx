import React from 'react'

import { LoginForm } from '@/components/login'
import { doLoginAdmin } from '@/actions/login'
import { auth } from '@/auth'

const AdminPage: React.FC = async () => {
  const session = await auth()
  if (session === null) {
    return <div className='w-1/2 mx-auto my-10'><LoginForm title='Đăng nhập' loginFunc={doLoginAdmin} href='/admin' /> </div>
  }

  return (
    <div>Some dashboard here?</div>
  )
}

export default AdminPage
