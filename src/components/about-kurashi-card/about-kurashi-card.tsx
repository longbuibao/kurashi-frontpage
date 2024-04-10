'use client'
import React from 'react'
import Link from 'next/link'

import { useTranslationClient } from '@/i18n/client-side'
import { defaultNS } from '@/i18n/settings'
import { SectionTitle } from '@/components/section-title'
import { KurashiDiv } from '@/components/kurashi-div'
import { aboutKurashi, readMore, aboutContentTitle } from '@/i18n/translation-key'

interface AboutKurashiCardProps {
  lng: string
}

const AboutKurashiCard: React.FC<AboutKurashiCardProps> = ({ lng }) => {
  const { t } = useTranslationClient(lng, defaultNS, {})
  return (
    <div className='flex flex-row gap-20 bg-secondary max-lg:flex-col max-lg:w-full max-lg:mx-1'>
      <div className='w-1/2'>
        <img src='/assets/logo/about-kurashi.png' alt='' />
      </div>
      <div className='flex flex-col m-5'>
        <div className='w-fit mb-10 text-wrap max-lg:mx-auto'>
          <SectionTitle title={t(aboutKurashi)} />
        </div>
        <div className='mb-5 text-2xl font-semibold max-lg:mx-auto'>{t(aboutContentTitle)}</div>
        <div className='text-wrap text-lg max-lg:mx-auto flex flex-col gap-5'>
          <div>
            Kiến tạo không gian sống bằng các giải pháp nội thất tiên tiến
          </div>
          <div>
            Công ty cổ phần Kurashi cung cấp các giải pháp về nội thất phòng tắm tiên tiến nhất từ Nhật Bản. Kurashi hướng đến mục tiêu góp phần nâng cao chất lượng cuộc sống của mỗi gia đình Việt Nam, với sự tập trung vào ba yêu cầu chính của sản phẩm là: tính thẩm mĩ, tính công năng và tính an toàn.
          </div>
        </div>
        <div className='w-fit mt-auto ml-auto max-lg:mx-auto max-lg:mt-5'>
          <KurashiDiv>
            <Link href='/about'>{t(readMore)}</Link>
            <div className='ml-3 inline-block'>
              <i className='fa-solid fa-chevron-right' />
            </div>
          </KurashiDiv>
        </div>

      </div>
    </div>
  )
}

export default AboutKurashiCard
