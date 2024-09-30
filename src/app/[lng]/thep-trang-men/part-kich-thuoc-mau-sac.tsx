import React from 'react'
import { useInView } from 'react-intersection-observer'

import * as transKey from '@/i18n/thep-trang-men'
import { ColorCard, SizeCard } from '@/components/thep-trang-men-feature-card'

interface PartKichThuocMauSacProps {
  setCurrentInViewDivId: (id: string) => void
}

const PartKichThuocMauSac: React.FC<PartKichThuocMauSacProps> = ({ setCurrentInViewDivId }) => {
  const { ref } = useInView({
    threshold: 0.5,
    onChange: (inView, _) => {
      if (inView) {
        setCurrentInViewDivId(`${transKey.colorAndSize}`)
      }
    },
    root: null
  })

  return (
    <div ref={ref} id={`${transKey.colorAndSize}`} className='w-4/5 mx-auto'>
      <div className='flex flex-row justify-between mt-14 items-end'>
        <SizeCard size='s' />
        <SizeCard size='m' />
        <SizeCard size='l' />
      </div>
      <div className='flex flex-row mt-14 justify-between gap-[0.5px]'>
        <div className='w-1/3'><ColorCard color='kurashiT' colorName='Màu trắng' /></div>
        <div className='w-1/3'><ColorCard color='kurashiX' colorName='Màu xám nhạt' /></div>
        <div className='w-1/3'><ColorCard color='kurashiB' colorName='Màu be' /></div>
      </div>
    </div>
  )
}

export default PartKichThuocMauSac
