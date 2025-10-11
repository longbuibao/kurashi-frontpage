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
      <div className='text-3xl mb-10'>QUY CÁCH TẤM</div>
      <div>Tấm ốp tường hút nam châm Nhật Bản có 2 kích thước tiêu chuẩn: 910 x 1820mm tiện dụng và 910 x 2400mm cho mảng tường lớn. Cả hai đều dày 3.4mm với cấu tạo 3 lớp bền chắc.</div>
      <div className='w-4/5 mx-auto max-md:w-full my-10'>
        <div className='flex flex-row justify-between items-end max-md:mt-10'>
          <SizeCard size='l' />
          <SizeCard size='m' />
        </div>
      </div>
    </div>

  )
}

export default PartQuyCach
