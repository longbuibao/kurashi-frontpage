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
    <div className='flex flex-col gap-10' ref={ref} id={`${transKey.thepTrangMen}`}>
      <div>
        Tấm ốp tường bếp thép tráng men Nhật Bản, chống ố, xước, cháy vượt trội. Tích hợp phụ kiện nam châm, dễ vệ sinh, bền đẹp. Giải pháp tiện lợi cho bếp hiện đại.
      </div>
      <div className='flex flex-row gap-5 max-md:flex-col'>
        <Image src='https://storage.googleapis.com/kurashi_frontpage_files/images/thep-trang-men-page/homepage_ttm2.png' width={353} height={441} alt='Ứng dụng thép tráng men' />
        <Image src='https://storage.googleapis.com/kurashi_frontpage_files/images/thep-trang-men-page/homepage_ttm1.png' width={786} height={442} alt='Ứng dụng thép tráng men' />
      </div>
      <div className='flex flex-row gap-16 my-10'>
        <Image src='https://storage.googleapis.com/kurashi_frontpage_files/images/thep-trang-men-page/intro_structure.png' width={450} height={289} alt='cấu tạo thép tráng men' />
        <div className='flex flex-col w-1/2 gap-10'>
          <div className='font-gtFont text-3xl'>MADE IN JAPAN</div>
          <div>Thép tráng men là vật liệu gồm 6 lớp tích hợp giữa men kính và kim loại. Riêng lớp mặt gồm 2 lớp men kính (dual coating). Vật liệu được nung ở nhiệt độ cao và được  sản xuất 100% tại Nhật Bản</div>
        </div>
      </div>
    </div>
  )
}

export default PartIntroThepTrangMen
