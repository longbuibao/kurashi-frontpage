'use client'

import React from 'react'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import CauTaoVatLieuTTM from '@/components/svg-images/cau-tao-vat-lieu-ttm'

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
    <div className='flex flex-col gap-10 max-md:mt-10' ref={ref} id={`${transKey.thepTrangMen}`}>
      <div>
        Tấm ốp tường bếp thép tráng men Nhật Bản, chống ố, xước, cháy vượt trội. Tích hợp phụ kiện nam châm, dễ vệ sinh, bền đẹp. Giải pháp tiện lợi cho bếp hiện đại.
      </div>
      <div className='flex flex-row gap-5 max-md:flex-col max-md:w-full'>
        <Image src='https://storage.googleapis.com/kurashi_frontpage_files/images/rework-thep-trang-men/thep-trang-men-op-bep.webp' width={353} height={441} alt='Ứng dụng thép tráng men' />
        <Image className='w-4/5 max-md:w-full' src='https://storage.googleapis.com/kurashi_frontpage_files/images/rework-thep-trang-men/thep-trang-men-it-mau.webp' width={1440} height={700} alt='Ứng dụng thép tráng men' />
      </div>
      <div className='flex flex-row gap-16 my-10 max-md:flex-col'>
        <div className='max-md:hidden'>
          <CauTaoVatLieuTTM width='500' height='390' />
        </div>
        <div className='hidden max-md:block mx-auto'>
          <CauTaoVatLieuTTM width='300' height='234' />
        </div>
        <div className='flex flex-col w-1/2 gap-10 items-center justify-center max-md:w-full'>
          <div className='font-gtFont text-3xl max-md:text-center'>MADE IN JAPAN</div>
          <div className='w-4/5 self-center max-md:text-center'>Thép tráng men là vật liệu gồm 6 lớp tích hợp giữa men kính và kim loại. Riêng lớp mặt gồm 2 lớp men kính (dual coating). Vật liệu được nung ở nhiệt độ cao và được  sản xuất 100% tại Nhật Bản</div>
        </div>
      </div>
    </div>
  )
}

export default PartIntroThepTrangMen
