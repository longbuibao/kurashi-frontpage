'use client'

import React from 'react'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import * as c from './const'

interface Props {
  setCurrentInViewDivId: (id: string) => void
}

const PartIntro: React.FC<Props> = ({ setCurrentInViewDivId }) => {
  const { ref } = useInView({
    root: null,
    threshold: 0.8,
    onChange: (inView, _) => {
      if (inView) {
        setCurrentInViewDivId(`${c.intro}`)
      }
    }
  })
  return (
    <div ref={ref} id={`${c.intro}`} className='relative'>
      <div className='my-10'>Vật liệu ốp tường Nhật Bản có lớp thép từ tính, không cần khoan khi gắn phụ kiện. Giải pháp sang trọng cho bếp, lavabo, lối ra vào và các mảng tường nội thất.</div>
      <div className='flex flex-row gap-20 max-md:flex-col mt-10'>
        <Image className='w-1/2 max-md:w-full' src='https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua/mo_ta1.png' width={1003} height={741} alt='Thép tráng men' />
        <div className='w-1/3 flex flex-col gap-10'>
          <div className='font-gtFont'><span className='text-3xl'>{'Made in Japan'.toUpperCase()}</span></div>
          <div>Tấm ốp tường hút nam châm Nhật Bản với phụ kiện nam châm đi kèm, gắn không cần khoan. Đa dạng bảng màu trendy như bạc, vàng, xám và đen, mang đến không gian sang trọng và hiện đại.</div>
        </div>
      </div>
    </div>
  )
}

export default PartIntro
