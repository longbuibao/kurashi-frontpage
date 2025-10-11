import React from 'react'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

import * as c from './const'

interface Props {
  setCurrentInViewDivId: (id: string) => void
}

const PartMauSac: React.FC<Props> = ({ setCurrentInViewDivId }) => {
  const { ref } = useInView({
    threshold: 0.5,
    onChange: (inView, _) => {
      if (inView) {
        setCurrentInViewDivId(`${c.mauSac}`)
      }
    },
    root: null
  })

  return (
    <div ref={ref} id={`${c.mauSac}`} className='mt-40 max-md:mt-20 max-md:text-center'>
      <div className='text-3xl mt-10'>{'Màu sắc sang trọng'.toUpperCase()}</div>
      <div className='my-10 w-4/5 max-md:w-full'>Sonic Silver, Champagne Gold, Cement Gray, Matte Black - bốn sắc màu cao cấp giúp tấm ốp tường hút nam châm hòa hợp hoàn hảo với mọi không gian hiện đại.</div>
      <div className='grid grid-cols-[400px_auto] grid-rows-[auto_auto_auto] h-screen gap-10 max-md:flex-col max-md:gap-5'>
        <div className='relative'>
          <Image
            src='https://storage.googleapis.com/kurashi_frontpage_files/images/tam-op-tuong-nam-cham/mau-champagne-gold.webp'
            alt='Tấm ốp tường nam châm màu champagne gold'
            fill
            className='object-fill'
          />
        </div>
        <div className='relative row-span-3'>
          <Image
            src='https://storage.googleapis.com/kurashi_frontpage_files/images/tam-op-tuong-nam-cham/mau-matte-black.webp'
            alt='Tấm ốp tường nam châm màu matte black'
            width={700}
            height={1001}
            className='object-center'
          />
        </div>
        <div className='relative'>
          <Image
            src='https://storage.googleapis.com/kurashi_frontpage_files/images/tam-op-tuong-nam-cham/mau-sonic-silver.webp'
            alt='Tấm ốp tường nam châm màu sonic silver'
            fill
            className='object-fill'
          />
        </div>
        <div className='relative'>
          <Image
            src='https://storage.googleapis.com/kurashi_frontpage_files/images/tam-op-tuong-nam-cham/mau-cement-gray.webp'
            alt='Tấm ốp tường nam châm màu cement gray'
            fill
            className='object-fill'
          />
        </div>
      </div>

    </div>
  )
}

export default PartMauSac
