'use client'

import React from 'react'
import Link from 'next/link'

import { Logo } from '@/components/logo'

const BlogRegister: React.FC = () => {
  return (
    <div className='flex flex-col justify-center items-center p-2'>
      <Link href='/' className='items-start mx-5'>
        <Logo imgSrc='/assets/logo/kurashi-logo.png' width={450} height={157} />
      </Link>
      <div>Công nghệ và kinh nghiệm nội thất mới nhất từ Nhật Bản</div>
      <div className='flex flex-row gap-5 justify-center items-center'>
        <div className='mt-5 flex flex-row items-center'>
          <input placeholder='Nhập địa chỉ email' type='email' name='' id='' className='border border-main p-2' />
          <div className='text-secondary bg-main p-2 border border-main' onClick={() => { console.log('dd') }}>
            <i className='fa-solid fa-arrow-right' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogRegister
