import React from 'react'
import { useInView } from 'react-intersection-observer'
import { EmblaCarousel } from '@/components/embla-carousel'
import Image from 'next/image'

import * as transKey from '@/i18n/thep-trang-men'

interface PartUngDungThepTrangMenProps {
  setCurrentInViewDivId: (id: string) => void
}

const imageUrls = [
  'https://storage.googleapis.com/kurashi_frontpage_files/images/rework-thep-trang-men/ung-dung-op-bep.webp',
  'https://storage.googleapis.com/kurashi_frontpage_files/images/rework-thep-trang-men/ung-dung-op-lavabo.webp',
  'https://storage.googleapis.com/kurashi_frontpage_files/images/rework-thep-trang-men/ung-dung-op-tuong-phong-lam-viec.webp'
].map(x => {
  return {
    key: x,
    content: (
      <Image src={x} width={1281} height={701} alt='Ứng dụng của tấm ốp tường nam châm' />
    )
  }
})

const PartUngDungThepTrangMen: React.FC<PartUngDungThepTrangMenProps> = ({ setCurrentInViewDivId }) => {
  const { ref } = useInView({
    threshold: 0.5,
    onChange: (inView, _) => {
      if (inView) {
        setCurrentInViewDivId(`${transKey.application}`)
      }
    },
    root: null
  })

  return (
    <div ref={ref} id={`${transKey.application}`} className='flex flex-col gap-5 my-44'>
      <div className='text-3xl'>ỨNG DỤNG ỐP TƯỜNG</div>
      <div>Thép tráng men được sử dụng để làm tấm ốp tường như ốp tường bếp, ốp tường lavabo phòng tắm hoặc ốp tường văn phòng.</div>
      <div className='flex flex-col gap-10'>
        <EmblaCarousel biggerSlider useFlatControlButton slides={imageUrls} />
      </div>
    </div>

  )
}

export default PartUngDungThepTrangMen
