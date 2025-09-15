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
    <div ref={ref} id={`${c.intro}`}>
      <div className='flex flex-row gap-5 max-md:flex-col'>
        <Image className='w-1/2 max-md:w-full' src='https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua/mo_ta1.png' width={1003} height={741} alt='Thép tráng men' />
        <div>Tấm ốp tường có vân đá, màu sắc đa dạng, bề mặt sần tự nhiên nên mang đến sự sang trọng và tinh tế cho không gian sống. </div>
      </div>
    </div>
  )
}

export default PartIntro
