import React from 'react'
import { useInView } from 'react-intersection-observer'

import * as c from './const'
import { SizeCard } from '@/components/thep-trang-men-feature-card'

interface PartKichThuocMauSacProps {
  setCurrentInViewDivId: (id: string) => void
}

const PartQuyCach: React.FC<PartKichThuocMauSacProps> = ({ setCurrentInViewDivId }) => {
  const { ref } = useInView({
    threshold: 0.5,
    onChange: (inView, _) => {
      if (inView) {
        setCurrentInViewDivId(`${c.quyCach}`)
      }
    },
    root: null
  })

  return (
    <div ref={ref} id={`${c.quyCach}`} className='mt-40 max-md:mt-20 max-md:text-center'>
      <div className='text-3xl mb-10 max-md:mb-5 max-md:text-2xl'>QUY CÁCH TẤM</div>
      <div className='max-md:px-10'>Tấm ốp tường hút nam châm Nhật Bản có 2 kích thước tiêu chuẩn: 910 x 1820mm tiện dụng và 910 x 2400mm cho mảng tường lớn. Cả hai đều dày 3.4mm với cấu tạo 3 lớp bền chắc.</div>
      <div className='flex flex-row justify-around gap-10 mt-20 items-end max-md:mt-10 w-[70%] mx-auto max-md:w-[90%] max-md:gap-5 max-md:justify-center'>
        <SizeCard size='m' orient='vertical' />
        <SizeCard size='l' orient='vertical' />
      </div>
    </div>

  )
}

export default PartQuyCach
