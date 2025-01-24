import React from 'react'

import { LoginForm } from '@/components/login'
import { doLoginAdmin } from '@/actions/login'

const Page: React.FC = () => {
  return <div className='w-1/2 mx-auto my-10'><LoginForm title='Đăng nhập' loginFunc={doLoginAdmin} href='/admin' /> </div>
}

export default Page
