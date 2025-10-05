import React from 'react'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

import { FeatureCardProps, featuresDataDauMo } from './const'
import * as transKey from '@/i18n/thep-trang-men'

interface PartThuNghiemDauMoProps {
  setCurrentInViewDivId: (id: string) => void
}

const FeatureCard: React.FC<FeatureCardProps> = ({ content, title, imageUrl }) => {
  return (
    <div className='w-full'>
      <div className='text-xl mb-10 max-md:mb-5'>{title}</div>
      <Image width={2792} height={1500} className='w-full' alt='chống dầu mỡ thép tráng men' src={imageUrl} />
      <div className='mt-10 max-md:mt-5'>{content.map(x => <div className='my-3' key={x}>{x}</div>)}</div>
    </div>
  )
}

const PartThuNghiemDauMo: React.FC<PartThuNghiemDauMoProps> = ({ setCurrentInViewDivId }) => {
  const { ref } = useInView({
    threshold: 1,
    onChange: (inView, _) => {
      if (inView) {
        setCurrentInViewDivId(transKey.ungDungLauDauMo)
      }
    },
    root: null
  })

  return (
    <>
      <div className='my-20 flex flex-col gap-5'>
        <div className='text-3xl'>THÍ NGHIỆM SO SÁNH</div>
        <div className='my-3'>Dưới đây là thí nghiệm so sánh khả năng chống dầu mỡ và chống cháy của thép tráng men và vật liệu khác. </div>
      </div>
      <div ref={ref} id={transKey.ungDungLauDauMo} className='flex flex-row justify-between max-md:flex-col max-md:gap-10'>
        <div key={featuresDataDauMo[0].imageUrl} className='w-[45%] max-md:w-full'>
          <FeatureCard content={featuresDataDauMo[0].content} imageUrl={featuresDataDauMo[0].imageUrl} title={featuresDataDauMo[0].title} />
        </div>
        <div className='w-[0.25px] bg-kurashi-black max-md:hidden' />
        <div key={featuresDataDauMo[1].imageUrl} className='w-[45%] max-md:w-full'>
          <FeatureCard content={featuresDataDauMo[1].content} imageUrl={featuresDataDauMo[1].imageUrl} title={featuresDataDauMo[1].title} />
        </div>
      </div>
    </>
  )
}

export default PartThuNghiemDauMo
