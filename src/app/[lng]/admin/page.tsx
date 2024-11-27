import React from 'react'

import { LoginFormAdmin } from '@/components/login'
import { doLoginAdmin } from '@/actions/action'
import { auth } from '@/auth'

const AdminPage: React.FC = async () => {
  const session = await auth()
  if (session === null) {
    return <div className='w-1/2 mx-auto my-10'><LoginFormAdmin doLoginFunc={doLoginAdmin} title='Đăng nhập' /> </div>
  }

  return (
    <div>Some dashboard here?</div>
  )
}

export default AdminPage
