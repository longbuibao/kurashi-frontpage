import React from 'react'
import { useInView } from 'react-intersection-observer'
import dynamic from 'next/dynamic'

import * as transKey from '@/i18n/thep-trang-men'
const SpecTable = dynamic(
  async () => await import('./spec-table').then(module => module.default),
  { ssr: false }
)

interface PartSpecTableProps {
  setCurrentInViewDivId: (id: string) => void
}

const PartSpecTable: React.FC<PartSpecTableProps> = ({ setCurrentInViewDivId }) => {
  const { ref } = useInView({
    threshold: 1,
    onChange: (inView, _) => {
      if (inView) {
        setCurrentInViewDivId(`${transKey.specInfo}`)
      }
    },
    root: null
  })

  return (
    <div ref={ref} className='max-md:mt-5' id={`${transKey.specInfo}`}>
      <div className='text-3xl mb-10'>THÔNG SỐ KỸ THUẬT</div>
      <SpecTable />
    </div>
  )
}

export default PartSpecTable
