'use client'
import React from 'react'
import Link from 'next/link'

import { useTranslationClient } from '@/i18n/client-side'
import { defaultNS } from '@/i18n/settings'
import { SectionTitle } from '@/components/section-title'
import { KurashiDiv } from '@/components/kurashi-div'
import { aboutKurashi, readMore, aboutContent, aboutContentTitle } from '@/i18n/translation-key'

interface AboutKurashiCardProps {
  lng: string
}

const AboutKurashiCard: React.FC<AboutKurashiCardProps> = ({ lng }) => {
  const { t } = useTranslationClient(lng, defaultNS, {})
  return (
    <div className='flex flex-row gap-20 bg-secondary p-3 max-lg:flex-col max-lg:w-full max-lg:mx-1'>
      <img src='/assets/logo/about-kurashi.png' alt='' />
      <div className='flex flex-col'>
        <div className='w-fit mb-20 text-wrap max-lg:mx-auto'>
          <SectionTitle title={t(aboutKurashi)} />
        </div>
        <div className='mb-10 text-3xl font-semibold max-lg:mx-auto'>{t(aboutContentTitle)}</div>
        <div className='text-wrap text-lg max-lg:mx-auto'>{t(aboutContent)}</div>
        <div className='w-fit mt-auto ml-auto max-lg:mx-auto max-lg:mt-5'>
          <KurashiDiv>
            <Link href='#link-to-read-more'>{t(readMore)}</Link>
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
