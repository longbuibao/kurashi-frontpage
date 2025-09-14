import React from 'react'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

import * as transKey from '@/i18n/thep-trang-men'

interface PartSpecTableProps {
  setCurrentInViewDivId: (id: string) => void
}

const CauTao: React.FC<PartSpecTableProps> = ({ setCurrentInViewDivId }) => {
  const { ref } = useInView({
    threshold: 1,
    onChange: (inView, _) => {
      if (inView) {
        setCurrentInViewDivId(`${transKey.cauTao}`)
      }
    },
    root: null
  })

  return (
    <div ref={ref} className='max-md:mt-5' id={`${transKey.cauTao}`}>
      <div className='text-3xl mb-10'>Cấu tạo</div>
      <div className='flex flex-row gap-10'>
        <div className='w-1/3'>Tấm ốp có các kích thước khác nhau tùy vào màu sắc bao gồm 3 khổ chính 900x600, 600x300 và 900x2400. Phần ốp góc chuyên dụng có 2 khổ 600x (18+18) và 300x (18+18).</div>
        <Image width={607} height={300} alt='Cấu tạo thép tráng men' src='https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua/cau_tao.png' />
      </div>
    </div>
  )
}

export default CauTao
