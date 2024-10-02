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
      <div className='flex flex-row gap-5'>
        <div className='w-1/2'>
          <Image src='https://storage.googleapis.com/kurashi_frontpage_files/images/thep-trang-men-page/homepage_1.jpg' width={730} height={558} alt='Thép tráng men' />
        </div>
        <div className='w-1/2'>
          <Image src='https://storage.googleapis.com/kurashi_frontpage_files/images/thep-trang-men-page/homepage_2.jpg' width={730} height={558} alt='Thép tráng men' />
        </div>
      </div>
      <div className='flex flex-row gap-10 mt-5 bg-secondary p-10 max-md:p-3 max-md:flex-col max-md:items-center justify-center'>
        <div>
          <Image src='https://storage.googleapis.com/kurashi_frontpage_files/images/thep_trang_men_layer_without_bg.png' width={648} height={308} alt='Cấu trúc của thép tráng men' />
        </div>
        <div className='w-1/2 max-md:w-full max-md:p-3 max-md:mx-auto flex flex-row items-center'>
          Thép tráng men là vật liệu gồm 6 lớp tích hợp giữa men kính và kim loại, chỉ dày 0.5mm.  Riêng lớp mặt gồm 2 lớp men kính (dual coating). Vật liệu được nung ở nhiệt độ cao, và sản xuất 100% tại Nhật Bản
        </div>
      </div>
    </div>
  )
}

export default PartIntroThepTrangMen
