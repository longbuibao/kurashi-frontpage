import React from 'react'
import { useInView } from 'react-intersection-observer'

import * as transKey from '@/i18n/thep-trang-men'
import { SizeCard } from '@/components/thep-trang-men-feature-card'

interface PartKichThuocMauSacProps {
  setCurrentInViewDivId: (id: string) => void
}

const QuyCach: React.FC<PartKichThuocMauSacProps> = ({ setCurrentInViewDivId }) => {
  const { ref } = useInView({
    threshold: 0.5,
    onChange: (inView, _) => {
      if (inView) {
        setCurrentInViewDivId(`${transKey.quyCach}`)
      }
    },
    root: null
  })

  return (
    <div ref={ref} id={`${transKey.quyCach}`}>
      <div className='text-3xl mb-10'>QUY CÁCH</div>
      <div>Tấm ốp có các kích thước khác nhau tùy vào màu sắc bao gồm 3 khổ chính 900x600, 600x300 và 900x2400. Phần ốp góc chuyên dụng có 2 khổ 600x (18+18) và 300x (18+18).</div>
      <div className='w-4/5 mx-auto max-md:w-full my-10'>
        <div className='flex flex-row justify-between items-end max-md:mt-10'>
          <SizeCard size='m' />
        </div>
      </div>
    </div>

  )
}

export default QuyCach
