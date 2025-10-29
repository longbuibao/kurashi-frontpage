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
    <div ref={ref} id={`${transKey.colorAndSize}`} className='my-10'>
      <div className='text-3xl mb-10 max-md:text-2xl max-md:text-center'>QUY CÁCH VÀ MÀU SẮC</div>
      <div className='my-10 max-md:my-5 max-md: text-center max-md:px-5'>
        Tấm ốp tường bằng thép tráng men có 3 màu là trắng, xám và be với 3 khổ kích thước khác nhau là 890x1800, 890x2400 và 1210x2400 mm.
      </div>
      <div className='max-md:w-full'>
        <div className='flex flex-row justify-between mt-6 items-end max-md:mt-10 w-[70%] mx-auto max-md:w-[90%] max-md:gap-3'>
          <SizeCard size='s' orient='vertical' />
          <SizeCard size='m' orient='vertical' />
          <SizeCard size='l' orient='vertical' />
        </div>
        <div className='flex flex-row mt-14 justify-between gap-[0.5px] max-md:mt-10'>
          <div className='w-1/3'><ColorCard color='kurashiT' colorName='Màu trắng' /></div>
          <div className='w-1/3'><ColorCard color='kurashiX' colorName='Màu xám nhạt' /></div>
          <div className='w-1/3'><ColorCard color='kurashiB' colorName='Màu be' /></div>
        </div>
      </div>
    </div>

  )
}

export default PartKichThuocMauSac
