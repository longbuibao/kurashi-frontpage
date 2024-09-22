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
    <div ref={ref} id={`${transKey.colorAndSize}`}>
      <div className='flex flex-row gap-10 mt-14 justify-center'>
        <div><ColorCard color='kurashiT' colorName='Màu trắng' /></div>
        <div><ColorCard color='kurashiX' colorName='Màu xám nhạt' /></div>
        <div><ColorCard color='kurashiB' colorName='Màu be' /></div>
      </div>
      <div className='flex flex-row gap-10 mt-14 justify-center items-end'>
        <div><SizeCard size='s' /></div>
        <div><SizeCard size='m' /></div>
        <div><SizeCard size='l' /></div>
      </div>
    </div>
  )
}

export default PartKichThuocMauSac
