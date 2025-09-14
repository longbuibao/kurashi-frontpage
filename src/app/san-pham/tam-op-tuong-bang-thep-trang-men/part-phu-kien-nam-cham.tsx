import React from 'react'
import { useInView } from 'react-intersection-observer'

import * as transKey from '@/i18n/thep-trang-men'
import { imageUrls } from './const'
import { EmblaCarousel } from '@/components/embla-carousel'

interface PartPartPhuKienNamChamProps {
  setCurrentInViewDivId: (id: string) => void
}

const PartUngDungTamOp: React.FC<PartPartPhuKienNamChamProps> = ({ setCurrentInViewDivId }) => {
  const { ref } = useInView({
    threshold: 1,
    onChange: (inView, _) => {
      if (inView) {
        setCurrentInViewDivId(`${transKey.application}`)
      }
    },
    root: null
  })

  return (
    <div ref={ref} id={`${transKey.application}`} className='my-5'>
      <div className='text-3xl'>ỨNG DỤNG</div>
      <div className='my-5'>
        Tấm ốp được ứng dụng rộng rãi để ốp tường nội thất nhiều vị trí khác nhau như phòng khách, bếp, phòng tắm, lối vào, khách sạn, công trình công cộng, văn phòng...
      </div>
      <EmblaCarousel useFlatControlButton slides={imageUrls} />
    </div>
  )
}

export default PartUngDungTamOp
