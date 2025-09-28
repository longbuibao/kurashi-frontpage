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
      <div className='text-3xl top-[-100px] mt-10'>{'Tấm ốp tường nam châm'.toUpperCase()}</div>
      <div className='my-10'>META Tấm ốp tường vân đá sang trọng, sản xuất bằng công nghệ in nhiều lớp từ Nhật Bản. Tấm ốp tường vân đá sang trọng, sản xuất bằng công nghệ in nhiều lớp từ Nhật Bản</div>
      <div className='flex flex-row gap-28 max-md:flex-col mt-10'>
        <Image className='w-1/2 max-md:w-full' src='https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua/mo_ta1.png' width={1003} height={741} alt='Thép tráng men' />
        <div className='w-1/3'>Tấm ốp tường có vân đá, màu sắc đa dạng, bề mặt sần tự nhiên nên mang đến sự sang trọng và tinh tế cho không gian sống. </div>
      </div>
    </div>
  )
}

export default PartIntro
