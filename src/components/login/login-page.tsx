import React from 'react'
import Image from 'next/image'

import { LoginForm } from '@/components/login'
import { doLogin } from '@/actions/login'

const LoginPage: React.FC = () => {
  return (
    <div className='flex flex-row gap-14 w-[65%] max-md:w-4/5 items-center mx-auto my-10 max-md:flex-col py-20'>
      <div className='max-md:w-full items-stretch'>
        <LoginForm title='THẾ GIỚI PHỤ KIỆN NAM CHÂM' loginFunc={doLogin} href='/phu-kien-nam-cham' />
      </div>
      <div className='w-[60%] max-md:w-full'>
        <div className='h-full'>
          <Image className='h-full' width={840} height={530} alt='Phụ kiện nam châm cho thép tráng men' src='https://storage.googleapis.com/kurashi_frontpage_files/login_page/login_phu_kien_nam_cham.jpg' />
        </div>
      </div>
    </div>
  )
}

export default LoginPage
