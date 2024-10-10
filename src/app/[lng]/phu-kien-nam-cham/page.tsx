import React from 'react'
import Image from 'next/image'

import LoginForm from './login-form'

const PhuKienNamCham: React.FC = () => {
  return (
    <div className='flex flex-row gap-20 w-[60%] max-md:w-4/5 mx-auto my-10 max-md:flex-col'>
      <div className='w-1/2 max-md:w-full items-stretch'>
        <LoginForm title='THẾ GIỚI PHỤ KIỆN NAM CHÂM' />
      </div>
      <div className='w-[40%] max-md:w-full'>
        <div className='h-full'>
          <Image className='h-full' width={840} height={530} alt='Phụ kiện nam châm cho thép tráng men' src='https://storage.googleapis.com/kurashi_frontpage_files/login_page/login_phu_kien_nam_cham.jpg' />
        </div>
      </div>
    </div>

  )
}

export default PhuKienNamCham
