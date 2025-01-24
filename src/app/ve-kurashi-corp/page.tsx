import React from 'react'
import { Metadata } from 'next'
import Image from 'next/image'

import { getMetadata } from '@/utils'

export async function generateMetadata (): Promise<Metadata> {
  const defaultTitle = 'Về Kurashi'
  const pageName = 'about-page'
  return await getMetadata(pageName, defaultTitle)
}

const AboutPage: React.FC = () => {
  return (
    <div className='w-4/5 mx-auto pb-10 my-10 max-md:my-3'>
      <div className='flex flex-col gap-10'>
        <div className='flex flex-row gap-5 max-md:flex-col'>
          <div className='flex flex-col gap-5 w-1/2 p-10 max-md:p-0 border-r-[1px] border-[rgba(0,0,0,0.56)] max-md:border-none max-md:w-full max-md:flex-col-reverse'>
            <div className='pr-[3rem] max-md:pr-0'>Công ty cổ phần Kurashi cung cấp các giải pháp về nội thất tiên tiến nhất từ Nhật Bản. Kurashi hướng đến mục tiêu góp phần nâng cao chất lượng cuộc sống của mỗi gia đình Việt thông qua những sản phẩm đạt tính thẩm mỹ, công năng và tính bền vững.</div>
            <div className='text-7xl text-main font-bold mt-8 max-md:text-3xl max-md:font-normal'>{'KURASHI CORP'.toUpperCase()}</div>
          </div>
          <div className='flex flex-col gap-5 w-1/2 p-10 max-md:w-full max-md:p-0 max-md:gap-3'>
            <div className='text-3xl text-main max-md:text-2xl'>{'MADE IN JAPAN'.toUpperCase()}</div>
            <div className='mt-5 pr-[3rem] max-md:pr-0 max-md:mt-2'>Chúng tôi cam kết mang đến các giải pháp tiên tiến và mới nhất về công nghệ, thiết kế và gia công với chất lượng 100% ‘made in Japan’, đặc biệt là công nghệ vật liệu mới.</div>
          </div>
        </div>
        <div className='grid grid-cols-2 grid-rows-1 gap-20 p-10 max-md:flex max-md:flex-col max-md:p-0 max-md:gap-10'>
          <div className='relative pr-3'>
            <Image alt='Về Kurashi' width={715} height={459} src='https://storage.googleapis.com/kurashi_frontpage_files/images/about_1_with_text.png' />
          </div>
          <div className='relative'>
            <Image alt='Về Kurashi' width={715} height={459} src='https://storage.googleapis.com/kurashi_frontpage_files/images/about_2_with_text.png' />
          </div>
        </div>
        <div className='flex flex-row gap-5 max-md:flex-col'>
          <div className='flex flex-col gap-5 max-md:gap-3 w-1/2 p-10 border-r-[1px] border-[rgba(0,0,0,0.56)] max-md:border-none max-md:w-full max-md:p-0'>
            <div className='text-3xl text-main max-md:text-2xl'>{'HỢP TÁC VIỆT-NHẬT'.toUpperCase()}</div>
            <div className='flex flex-col gap-5 mt-5 pr-[3rem] max-md:pr-0 max-md:mt-0'>
              <div>Kurashi hợp tác toàn diện và nhập trực tiếp từ các tập đoàn tiên phong, lâu đời trong ngành hàng vật tư và thiết bị nhà ở tại Nhật Bản.</div>
              <div>Lựa chọn và phát triển các dòng sản phẩm theo tiêu chí  hài hòa giữa 2 yếu tố 「chất lượng Nhật Bản」và 「phù hợp với người Việt 」</div>
            </div>
          </div>
          <div className='flex flex-col gap-5 w-1/2 p-10 max-md:p-0 max-md:w-full'>
            <div className='text-3xl text-main max-md:text-2xl'>{'GIÁ TRỊ CỐT LÕI'.toUpperCase()}</div>
            <div className='flex flex-col gap-3 mt-5 max-md:mt-0'>
              <div>【Gia đình là số 1】</div>
              <div>【Bền vững】</div>
              <div>【Đẹp có gu】</div>
              <div>【Nhà là nơi thoải mái nhất】</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
