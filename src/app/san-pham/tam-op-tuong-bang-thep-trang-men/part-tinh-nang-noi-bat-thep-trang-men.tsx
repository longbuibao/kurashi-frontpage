import React from 'react'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

import * as transKey from '@/i18n/thep-trang-men'

interface Props {
  setCurrentInViewDivId: (id: string) => void
}

const PartTinhNangNoiBatThepTrangMen: React.FC<Props> = ({ setCurrentInViewDivId }) => {
  const { ref } = useInView({
    threshold: 0.5,
    onChange: (inView, _) => {
      if (inView) {
        setCurrentInViewDivId(`${transKey.color}`)
      }
    },
    root: null
  })

  const imageUrls = [
    { url: 'https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua/mau_sac_1.png', width: 414, height: 414 },
    { url: 'https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua/mau_sac_2.png', width: 414, height: 302 },
    { url: 'https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua/mau_sac_3.png', width: 414, height: 358 }
  ]

  return (
    <div ref={ref} id={`${transKey.color}`}>
      <div className='text-3xl mt-10'>Màu sắc</div>
      <div className='flex flex-row gap-10 my-10'>
        <div className='flex flex-col gap-5'>
          {imageUrls.map(x => <Image key={x.url} width={x.width} height={x.height} src={x.url} alt='Thép tráng men' />)}
        </div>
        <Image className='self-stretch' alt='Thép tráng men' src='https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua/mau_sac_4.png' width={779} height={1134} />
      </div>
    </div>
  )
}

export default PartTinhNangNoiBatThepTrangMen
