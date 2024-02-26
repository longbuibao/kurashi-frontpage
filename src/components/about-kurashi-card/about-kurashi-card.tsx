'use client'
import React from 'react'
import Link from 'next/link'

import { useTranslationClient } from '@/i18n/client-side'
import { defaultNS } from '@/i18n/settings'
import { SectionTitle } from '@/components/section-title'
import { KurashiDiv } from '@/components/kurashi-div'

interface AboutKurashiCardProps {
  lng: string
}

const AboutKurashiCard: React.FC<AboutKurashiCardProps> = ({ lng }) => {
  const { t } = useTranslationClient(lng, defaultNS, {})
  return (
    <div className='flex flex-row gap-20 bg-secondary p-3'>
      <img src='/assets/logo/about-kuarshi.png' alt='' />
      <div className='flex flex-col'>
        <div className='w-fit mb-20'>
          <SectionTitle title={t('about-kurashi')} />
        </div>
        <div className='mb-10 text-3xl font-semibold'>{t('about-content-title')}</div>
        <div className='text-wrap text-lg'>{t('about-content')}</div>
        <div className='w-fit mt-auto ml-auto'>
          <KurashiDiv>
            <Link href='#link-to-read-more'>{t('read-more')}</Link>
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
