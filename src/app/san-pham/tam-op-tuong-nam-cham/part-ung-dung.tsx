import React from 'react'
import { useInView } from 'react-intersection-observer'

import { imageUrls, ungDung } from './const'
import { EmblaCarousel } from '@/components/embla-carousel'

interface PartPartPhuKienNamChamProps {
  setCurrentInViewDivId: (id: string) => void
}

const PartUngDungTamOp: React.FC<PartPartPhuKienNamChamProps> = ({ setCurrentInViewDivId }) => {
  const { ref } = useInView({
    threshold: 1,
    onChange: (inView, _) => {
      if (inView) {
        setCurrentInViewDivId(`${ungDung}`)
      }
    },
    root: null
  })

  return (
    <div ref={ref} id={`${ungDung}`} className='mt-40 max-md:mt-20 max-md:text-center'>
      <div className='text-3xl max-md:text-2xl'>ỨNG DỤNG ĐA DẠNG</div>
      <div className='my-5 max-md:px-10'>
        Tấm ốp tường từ tính Nhật Bản tối ưu cho bếp gọn gàng, tiện nghi, đồng thời phù hợp cho lavabo, lối vào, phòng khách, phòng ngủ và góc làm việc.
      </div>
      <div className='max-md:my-14'>
        <EmblaCarousel biggerSlider useFlatControlButton slides={imageUrls} />
      </div>
    </div>
  )
}

export default PartUngDungTamOp
