import React from 'react'

import { SectionTitle } from '@/components/section-title'
import { Logo } from '@/components/logo'
import { pageTitle } from './constants'
import { Metadata } from 'next'
import prisma from '@/lib/prisma'

export async function generateMetadata (): Promise<Metadata> {
  const title = await prisma.pageMetadata.findFirst({
    where: {
      pageName: pageTitle
    },
    include: {
      pageTitle: {
        select: { id: true, page: true, title: true }
      }
    }
  })

  if (title !== null) {
    return {
      title: title.pageTitle?.title ?? 'Về Kurashi'
    }
  }

  return {
    title: 'Về Kurashi'
  }
}

const AboutPage: React.FC = () => {
  return (
    <div>
      <div className='w-4/5 mx-auto'>
        <div className='w-fit my-10 max-lg:mx-auto'>
          <SectionTitle title='Về Kurashi' />
        </div>
      </div>
      <div className='grid-rows-2 grid-cols-2 grid w-4/5 mx-auto max-lg:flex max-lg:flex-col max-lg:gap-5 max-lg:justify-center'>
        <div className='flex flex-col gap-2 place-items-center place-content-end'>
          <div><Logo imgSrc='/assets/logo/kurashi-logo.png' width={450} height={157} /></div>
          <div className='font-semibold max-lg:text-center'>
            Kiến tạo không gian sống bằng các giải pháp nội thất tiên tiến
          </div>
        </div>
        <div className='place-content-start'>
          <img src='/assets/IMG_7739-CROPED.jpg' alt='about Kurashi' />
        </div>
        <div className='my-10 col-start-2 mt-5 flex flex-col gap-5 place-content-start'>
          <div>
            Công ty cổ phần Kurashi cung cấp các giải pháp về nội thất phòng tắm tiên tiến nhất từ Nhật Bản. Kurashi hướng đến mục tiêu góp phần nâng cao chất lượng cuộc sống của mỗi gia đình Việt Nam, với sự tập trung vào ba yêu cầu chính của sản phẩm là: tính thẩm mĩ, tính công năng và tính an toàn.
          </div>
          <div>
            Kurashi cam kết mang đến các giải pháp tiên tiến và mới nhất về công nghệ vật liệu, thiết kế và công nghệ gia công với chất lượng 100% ‘made in Japan’.
          </div>
          <div>
            Cùng với sự phát triển của nền kinh tế Việt Nam và sự thay đổi không ngừng của phong cách sống theo thời đại, Kurashi tin rằng mình có thể tạo ra nhiều giá trị mới cho căn nhà hiện tại nếu đi sâu vào các chi tiết và tỉ mỉ như người Nhật.
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
