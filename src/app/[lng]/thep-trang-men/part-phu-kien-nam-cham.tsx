import React from 'react'
import { useInView } from 'react-intersection-observer'

import * as transKey from '@/i18n/thep-trang-men'
import { imageUrls } from './const'
import { EmblaCarousel } from '@/components/embla-carousel'

interface PartPartPhuKienNamChamProps {
  setCurrentInViewDivId: (id: string) => void
}

const PartPhuKienNamCham: React.FC<PartPartPhuKienNamChamProps> = ({ setCurrentInViewDivId }) => {
  const { ref } = useInView({
    threshold: 1,
    onChange: (inView, _) => {
      if (inView) {
        setCurrentInViewDivId(`${transKey.magnetAccessories}`)
      }
    },
    root: null
  })

  return (
    <div ref={ref} className='my-10' id={`${transKey.magnetAccessories}`}>
      <EmblaCarousel useFlatControlButton slides={imageUrls} />
    </div>
  )
}

export default PartPhuKienNamCham
