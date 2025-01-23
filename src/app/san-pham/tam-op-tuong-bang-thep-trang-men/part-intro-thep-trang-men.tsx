'use client'

import React from 'react'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

import * as transKey from '@/i18n/thep-trang-men'

interface Props {
  setCurrentInViewDivId: (id: string) => void
}

const PartIntroThepTrangMen: React.FC<Props> = ({ setCurrentInViewDivId }) => {
  const { ref } = useInView({
    root: null,
    threshold: 0.8,
    onChange: (inView, _) => {
      if (inView) {
        setCurrentInViewDivId(`${transKey.thepTrangMen}`)
      }
    }
  })
  return (
    <div ref={ref} id={`${transKey.thepTrangMen}`}>
      <div className='flex flex-row gap-5 max-md:flex-col'>
        <Image className='w-1/2 max-md:w-full' src='https://storage.googleapis.com/kurashi_frontpage_files/phu-kien-thep-trang-men/thep-trang-men/ttm_landing_page.png' width={1003} height={741} alt='Thép tráng men' />
        <iframe
          src='https://www.youtube.com/embed/PPpMjHjyWuo'
          allowFullScreen
          className='w-1/2 max-md:w-full'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          title='video'
        />
      </div>
    </div>
  )
}

export default PartIntroThepTrangMen
