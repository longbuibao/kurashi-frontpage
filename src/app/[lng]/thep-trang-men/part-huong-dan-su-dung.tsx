'use client'

import React from 'react'
import { useInView } from 'react-intersection-observer'
import { CatalogCard } from '@/components/catalog-card'
import Link from 'next/link'

import * as transKey from '@/i18n/thep-trang-men'

interface Props {
  setCurrentInViewDivId: (id: string) => void
}

const PartHuongDanSuDung: React.FC<Props> = ({ setCurrentInViewDivId }) => {
  const { ref } = useInView({
    root: null,
    threshold: 0.8,
    onChange: (inView, _) => {
      if (inView) {
        setCurrentInViewDivId(`${transKey.huongDanSuDung}`)
      }
    }
  })
  return (
    <div ref={ref} id={`${transKey.huongDanSuDung}`}>
      <div className='my-10 text-center w-fit text-xl'>{'Hướng dẫn sử dụng và vệ sinh tấm ốp'.toUpperCase()}</div>
      <div className='w-60 max-md:w-[80%] max-md:mx-auto my-10'>
        <CatalogCard isShowName={false} fileSize='100kb' catalogName='Hướng dẫn sử dụng' thumbnail='https://storage.googleapis.com/kurashi_frontpage_files/phu-kien-thep-trang-men/thep-trang-men/huong-dan-su-dung/huong_dan_su_dung_thumbnail.png' pdfLink='https://storage.googleapis.com/kurashi_frontpage_files/phu-kien-thep-trang-men/thep-trang-men/huong-dan-su-dung/huong_dan_su_dung_ttm.pdf' />
      </div>
      <div className='max-md:mb-10'>
        <div className='my-5 text-center w-fit text-xl'>{'Liên hệ'.toUpperCase()}</div>
        <div>Vui lòng liên hệ để được tư vấn chi tiết <span className='text-main'><Link href='/contact'>tại đây</Link></span></div>
      </div>
    </div>
  )
}

export default PartHuongDanSuDung
