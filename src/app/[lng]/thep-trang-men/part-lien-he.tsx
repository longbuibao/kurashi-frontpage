import React from 'react'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'

import * as transKey from '@/i18n/thep-trang-men'

interface PartLienHeProps {
  setCurrentInViewDivId: (id: string) => void
}

const PartLienHe: React.FC<PartLienHeProps> = ({ setCurrentInViewDivId }) => {
  const { ref } = useInView({
    threshold: 1,
    onChange: (inView, _) => {
      if (inView) {
        setCurrentInViewDivId(`${transKey.lienHe}`)
      }
    },
    root: null
  })

  return (
    <div ref={ref} id={`${transKey.lienHe}`}>
      <div className='my-5 text-center w-fit text-xl'>{'Liên hệ'.toUpperCase()}</div>
      <div>Vui lòng liên hệ để được tư vấn chi tiết <span className='text-main'><Link href='/contact'>tại đây</Link></span></div>
    </div>
  )
}

export default PartLienHe
