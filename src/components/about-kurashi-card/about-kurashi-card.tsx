'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { useTranslationClient } from '@/i18n/client-side'
import { defaultNS } from '@/i18n/settings'
import { aboutKurashi, readMore, aboutContentTitle } from '@/i18n/translation-key'

interface AboutKurashiCardProps {
  lng: string
}

const AboutKurashiCard: React.FC<AboutKurashiCardProps> = ({ lng }) => {
  const { t } = useTranslationClient(lng, defaultNS, {})
  return (
    <div className='max-lg:flex-col max-lg:w-full max-lg:mx-1 h-[45vh] relative bg-about'>
      <Image className='brightness-75 mx-auto hidden max-md:object-fill max-md:block' alt='về Kurashi' src='https://storage.googleapis.com/kurashi_frontpage_files/images/about_mobile.png' width={1080} height={1080} />
      <Image className='max-md:hidden h-full w-full max-md:object-cover' alt='về Kurashi' src='https://storage.googleapis.com/kurashi_frontpage_files/images/thep-trang-men-page/JFE.jpg' fill />
      <div className='flex flex-col max-md:gap-5 max-md:top-[20%] gap-7 justify-center items-center absolute top-1/2 right-1/2 translate-x-1/2 max-md:w-full max-md:translate-y-[-20%] translate-y-[-50%]'>
        <div className='text-wrap text-6xl font-semibold text-secondary max-md:text-2xl'>
          {t(aboutKurashi).toUpperCase()}
        </div>
        <div className='text-2xl max-lg:mx-auto text-secondary text-center flex flex-row justify-center max-md:flex-col'>
          <div>
            {t(aboutContentTitle)}
          </div>
          <div>&nbsp;made in Japan</div>
        </div>
        <div className='w-fit mt-20 max-md:mt-10'>
          <Link href='/about'>
            <div className='flex flex-row items-center px-2 py-2 bg-secondary border-main hover:bg-main hover:text-secondary transition'>
              <div className='px-3'>{t(readMore)}</div>
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
