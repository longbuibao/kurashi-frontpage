import React from 'react'
import { useInView } from 'react-intersection-observer'

import { CauTaoVatLieu } from '@/components/svg-images'
import * as c from './const'

interface PartSpecTableProps {
  setCurrentInViewDivId: (id: string) => void
}

const PartCauTao: React.FC<PartSpecTableProps> = ({ setCurrentInViewDivId }) => {
  const { ref } = useInView({
    threshold: 0.6,
    onChange: (inView, _) => {
      if (inView) {
        setCurrentInViewDivId(`${c.cauTao}`)
      }
    },
    root: null
  })

  return (
    <div ref={ref} className='max-md:mt-5 mt-40' id={`${c.cauTao}`}>
      <div className='text-3xl mb-10'>CẤU TẠO VẬT LIỆU</div>
      <div className='flex flex-col gap-10 items-center'>
        <div>Cấu tạo gồm 3 lớp: lớp thép trung tâm tạo khả năng hút nam châm, lớp board nền phía dưới gia tăng độ ổn định, và lớp hard coating bề mặt giúp chống trầy, giữ màu sắc và hoa văn tinh tế. Độ dày tổng thể 3.4 mm – mỏng nhẹ nhưng bền chắc.</div>
        <CauTaoVatLieu />
      </div>
    </div>
  )
}

export default PartCauTao
