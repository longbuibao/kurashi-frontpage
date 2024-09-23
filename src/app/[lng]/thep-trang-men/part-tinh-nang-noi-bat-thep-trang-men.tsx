import React from 'react'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

import { ThepTrangMenFeatureCard } from '@/components/thep-trang-men-feature-card'
import * as transKey from '@/i18n/thep-trang-men'
import { features } from './const'

interface Props {
  setCurrentInViewDivId: (id: string) => void
}

const PartTinhNangNoiBatThepTrangMen: React.FC<Props> = ({ setCurrentInViewDivId }) => {
  const { ref } = useInView({
    threshold: 0.5,
    onChange: (inView, _) => {
      if (inView) {
        setCurrentInViewDivId(`${transKey.standoutFeatures}`)
      }
    },
    root: null
  })

  return (
    <div ref={ref} className='mt-10' id={`${transKey.standoutFeatures}`}>
      <div className='grid grid-cols-3 grid-rows-1 gap-20'>
        <ThepTrangMenFeatureCard content={features[0].content} imgUrl={features[0].thumbnail} title={features[0].title} />
        <ThepTrangMenFeatureCard content={features[1].content} imgUrl={features[1].thumbnail} title={features[1].title} />
        <ThepTrangMenFeatureCard stt content={features[2].content} imgUrl={features[2].thumbnail} title={features[2].title} />
      </div>
      <div className='w-4/5 mx-auto flex flex-row gap-5 mt-10 p-10'>
        <div>
          <Image className='w-full' width={116} height={258} src={features[3].thumbnail} alt='' />
        </div>
        <div className='flex flex-col w-[80%]'>
          <div className='w-fit'>
            <div className='text-xl'>{features[3].title.toUpperCase()}</div>
          </div>
          <div className='mt-5'>
            {features[3].content}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PartTinhNangNoiBatThepTrangMen
