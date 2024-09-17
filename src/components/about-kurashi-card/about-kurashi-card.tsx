'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { useTranslationClient } from '@/i18n/client-side'
import { defaultNS } from '@/i18n/settings'
import { aboutKurashi, readMore, aboutContentTitle } from '@/i18n/translation-key'

interface AboutKurashiCardProps {
  lng: string
}

const AboutKurashiCard: React.FC<AboutKurashiCardProps> = ({ lng }) => {
  const { t } = useTranslationClient(lng, defaultNS, {})
  return (
    <div className='flex flex-row gap-8 max-lg:flex-col max-lg:w-full max-lg:mx-1'>
      <div className='w-2/3'>
        <Image width={640} height={521} className='w-full' src='https://storage.googleapis.com/kurashi_frontpage_files/images/about_image.png' alt='' />
      </div>
      <div className='flex flex-col gap-5 w-1/2 justify-center'>
        <div className='w-fit text-wrap max-lg:mx-auto text-4xl font-semibold text-main'>
          {t(aboutKurashi).toUpperCase()}
        </div>
        <div className='text-2xl max-lg:mx-auto'>{t(aboutContentTitle)}</div>
        <div className='text-wrap text-lg max-lg:mx-auto flex flex-col gap-5'>
          <div>Công ty cổ phần Kurashi cung cấp các giải pháp về nội thất tiên tiến nhất từ Nhật Bản. Kurashi hướng đến mục tiêu góp phần nâng cao chất lượng cuộc sống của mỗi gia đình Việt Nam, với sự tập trung vào ba yêu cầu chính của sản phẩm là: tính thẩm mĩ, tính công năng và tính an toàn.</div>
        </div>
        <div className='w-fit'>
          <Link href='/about'>
            <div className='flex flex-row px-2 py-2 text-main bg-secondary border border-main hover:bg-main hover:text-secondary transition rounded'>
              <div>{t(readMore)}</div>
              <div className='ml-3 inline-block'>
                <i className='fa-solid fa-chevron-right' />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AboutKurashiCard
