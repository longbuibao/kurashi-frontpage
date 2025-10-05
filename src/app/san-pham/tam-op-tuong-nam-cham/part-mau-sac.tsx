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
    <div ref={ref} id={`${c.mauSac}`} className='mt-40'>
      <div className='text-3xl mt-10'>{'Màu sắc sang trọng'.toUpperCase()}</div>
      <div className='my-10 w-4/5'>Sonic Silver, Champagne Gold, Cement Gray, Matte Black – bốn sắc màu cao cấp giúp tấm ốp tường hút nam châm hòa hợp hoàn hảo với mọi không gian hiện đại.</div>
      <div className='grid grid-cols-[300px_auto] grid-rows-[auto_auto_auto] h-screen gap-10'>
        <div className='relative'>
          <Image
            src='https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua/mau_sac_1.png'
            alt='Tấm ốp tường nam châm màu cement gray'
            fill
            className='object-cover'
          />
        </div>
        <div className='relative row-span-3'>
          <Image
            src='https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua/mau_sac_4.png'
            alt='Tấm ốp tường nam châm màu cement gray'
            fill
            className='object-cover'
          />
        </div>
        <div className='relative'>
          <Image
            src='https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua/mau_sac_2.png'
            alt='Tấm ốp tường nam châm màu cement gray'
            fill
            className='object-cover'
          />
        </div>
        <div className='relative'>
          <Image
            src='https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua/mau_sac_3.png'
            alt='Tấm ốp tường nam châm màu cement gray'
            fill
            className='object-cover'
          />
        </div>
      </div>

    </div>
  )
}

export default PartMauSac
