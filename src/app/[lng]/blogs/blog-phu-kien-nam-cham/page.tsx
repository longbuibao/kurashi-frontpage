import { LinkIcon, LogoFacebook, LogoZalo } from '@/components/svg-icons'
import Image from 'next/image'
import React from 'react'

const BlogPhuKienNamCham: React.FC = () => {
  return (
    <div className='w-4/5 mx-auto'>
      <div className='flex flex-row gap-5'>
        <div className='w-3/5 md:w-full flex justify-between flex-col'>
          <div>
            <i className='fa-solid fa-square-full text-main' />
            <p className='text-black'>Kurashi blog</p>
            <h2>BẾP TIỆN LỢI VỚI PHỤ KIỆN NAM CHÂM, DI CHUYỂN TỰ DO</h2>
          </div>
          <div>
            <p className='text-black'>Bởi Diện Võ</p>
            <p>17/9/2024</p>
            <div className='flex flex-row gap-3 flex-nowrap'>
              <LogoFacebook />
              <LogoZalo />
              <LinkIcon />
            </div>
          </div>
        </div>
        <div className='w-2/5 md:w-full'>
          <div className='w-full h-96'>
            <Image className='w-full h-full' alt='blog phụ kiện nam châm' src='https://storage.googleapis.com/kurashi_frontpage_files/images/thep_trang_men_slider/10.jpg' width={640} height={640} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPhuKienNamCham
