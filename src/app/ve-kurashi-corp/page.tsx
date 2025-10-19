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
      <div className='flex flex-col gap-10 w-4/5 mx-auto max-md:w-full max-md:text-center'>
        <div className='flex flex-row gap-5 max-md:flex-col items-center'>
          <div className='flex flex-col gap-5 w-1/2 p-10 max-md:p-0 border-r-[1px] border-[rgba(0,0,0,0.3)] max-md:border-none max-md:w-full max-md:flex-col-reverse'>
            <Image src='https://storage.googleapis.com/kurashi_frontpage_files/images/rework-homepage/IconMenuBig.png' width={300} height={300} alt='' />
            <div className='pr-[3rem] max-md:pr-0'>
              Công ty cổ phần Kurashi cung cấp các giải pháp về nội thất tiên tiến nhất từ Nhật Bản. Kurashi hướng đến mục tiêu góp phần nâng cao chất lượng cuộc sống của mỗi gia đình Việt thông qua những sản phẩm đạt tính thẩm mỹ, công năng và tính bền vững.
            </div>
          </div>
          <div className='flex flex-col gap-5 w-1/2 p-10 max-md:w-full max-md:p-0 max-md:gap-3'>
            <div className='text-3xl max-md:text-2xl font-gtFont'>{'MADE IN JAPAN'.toUpperCase()}</div>
            <div className='mt-5 pr-[3rem] max-md:pr-0 max-md:mt-2'>KURASHI mang đến các giải pháp tiên tiến và mới nhất về công nghệ, thiết kế và gia công với chất lượng 100% 'made in Japan', đặc biệt là công nghệ vật liệu mới, kim loại và gia công thủ công truyền thống.</div>
          </div>
        </div>
        <div className='flex flex-row max-md:flex-col max-md:h-full gap-5 h-[29rem]'>
          <div className='w-[60%] max-md:w-full relative aspect-[715/459]'>
            <Image className='object-fill' alt='Về Kurashi' fill src='https://storage.googleapis.com/kurashi_frontpage_files/images/about_1_with_text.png' />
          </div>
          <div className='w-[40%] max-md:w-full relative aspect-[715/459]'>
            <Image className='object-fill' alt='Về Kurashi' fill src='https://storage.googleapis.com/kurashi_frontpage_files/images/about_2_with_text.png' />
          </div>
        </div>
        <div className='flex flex-row gap-5 max-md:flex-col max-md:gap-10'>
          <div className='flex flex-col gap-5 max-md:gap-3 w-1/2 border-r-[1px] border-[rgba(0,0,0,0.56)] max-md:border-none max-md:w-full max-md:p-0 pr-10'>
            <div className='text-2xl max-md:text-2xl max-md:mt-10'>{'HỢP TÁC VIỆT-NHẬT'.toUpperCase()}</div>
            <div className='flex flex-col gap-5 mt-5 pr-[3rem] max-md:pr-0 max-md:mt-10'>
              <div>Kurashi hợp tác toàn diện và nhập trực tiếp từ các tập đoàn tiên phong, lâu đời trong ngành hàng vật tư và thiết bị nhà ở tại Nhật Bản.</div>
              <div>Lựa chọn và phát triển các dòng sản phẩm theo tiêu chí  hài hòa giữa 2 yếu tố <span className='font-bold'>「chất lượng Nhật Bản」</span>và <span className='font-bold'>「phù hợp với người Việt 」</span></div>
            </div>
          </div>
          <div className='flex flex-col gap-5 w-1/2 max-md:p-0 max-md:w-full pl-32 max-md:mt-10'>
            <div className='text-3xl max-md:text-2xl'>{'GIÁ TRỊ CỐT LÕI'.toUpperCase()}</div>
            <div className='flex flex-col gap-3 mt-5 max-md:mt-0'>
              <div>Gia đình là số 1</div>
              <div>Bền vững</div>
              <div>Đẹp có gu</div>
              <div>Nhà là nơi thoải mái nhất</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
