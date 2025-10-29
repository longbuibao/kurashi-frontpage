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
    <div ref={ref} className='max-md:mt-5 my-10' id={`${transKey.specInfo}`}>
      <div className='text-3xl mb-10 max-md:text-center max-md:text-xl'>THÔNG SỐ KỸ THUẬT</div>
      <div className='max-md:w-4/5 max-md:mx-auto'>
        <SpecTable />
      </div>
    </div>
  )
}

export default PartSpecTable
