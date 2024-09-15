'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { useTranslationClient } from '@/i18n/client-side'
import { defaultNS } from '@/i18n/settings'
import { SectionTitle } from '@/components/section-title'
import { aboutKurashi, readMore, aboutContentTitle } from '@/i18n/translation-key'

interface AboutKurashiCardProps {
  lng: string
}

const AboutKurashiCard: React.FC<AboutKurashiCardProps> = ({ lng }) => {
  const { t } = useTranslationClient(lng, defaultNS, {})
  return (
    <div className='flex flex-row gap-8 bg-secondary max-lg:flex-col max-lg:w-full max-lg:mx-1'>
      <div className='w-full'>
        <Image width={640} height={521} src='https://storage.googleapis.com/kurashi_frontpage_files/images/about.jpg' alt='' />
      </div>
      <div className='flex flex-col m-5'>
        <div className='w-fit mb-10 text-wrap max-lg:mx-auto'>
          <SectionTitle title={t(aboutKurashi)} />
        </div>
        <div className='mb-5 text-2xl font-semibold max-lg:mx-auto'>{t(aboutContentTitle)}</div>
        <div className='text-wrap text-lg max-lg:mx-auto flex flex-col gap-5'>
          <div>Công ty cổ phần Kurashi cung cấp các giải pháp về nội thất phòng tắm tiên tiến nhất từ Nhật Bản. Kurashi hướng đến mục tiêu góp phần nâng cao chất lượng cuộc sống của mỗi gia đình Việt Nam, với sự tập trung vào ba yêu cầu chính của sản phẩm là: tính thẩm mĩ, tính công năng và tính an toàn.</div>
        </div>
        <div className='w-fit mt-auto ml-auto max-lg:mx-auto max-lg:mt-5'>
          <div className='hover:bg-main rounded-lg hover:text-secondary border-2 border-main transition'>
            <Link href='/about'>
              <div className='flex flex-row px-2 py-2'>
                <div>{t(readMore)}</div>
                <div className='ml-3 inline-block'>
                  <i className='fa-solid fa-chevron-right' />
                </div>
              </div>
            </Link>
          </div>

        </div>

      </div>
    </div>
  )
}

export default AboutKurashiCard
