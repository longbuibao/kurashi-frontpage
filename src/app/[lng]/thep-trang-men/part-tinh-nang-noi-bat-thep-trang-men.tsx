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
    <div ref={ref} className='max-md:mt-5' id={`${transKey.standoutFeatures}`}>
      <div className='text-3xl'>ƯU ĐIỂM NỔI BẬT</div>
      <div className='flex flex-row gap-10 my-10 max-md:mt-10 bg-secondary p-10 max-md:p-3 max-md:flex-col max-md:items-center justify-center'>
        <div>
          <Image src='https://storage.googleapis.com/kurashi_frontpage_files/images/thep_trang_men_layer_without_bg.png' width={648} height={308} alt='Cấu trúc của thép tráng men' />
        </div>
        <div className='w-1/2 max-md:w-full max-md:p-3 max-md:mx-auto flex flex-row items-center'>
          Thép tráng men là vật liệu gồm 6 lớp tích hợp giữa men kính và kim loại, chỉ dày 0.5mm.  Riêng lớp mặt gồm 2 lớp men kính (dual coating). Vật liệu được nung ở nhiệt độ cao, và sản xuất 100% tại Nhật Bản
        </div>
      </div>
      <div className='my-10'>Nhờ cấu trúc vật liệu tích hợp giữa lõi kim loại và phủ men sứ, thép trang men có nhiều ưu điểm nổi bật hơn so với các vật liệu ốp tường khác về khả năng chống xước, chống cháy, chống ố và dễ thi công.</div>
      <div className='grid grid-cols-3 grid-rows-1 gap-20 max-md:flex max-md:flex-col max-md:gap-10 max-md:w-full'>
        <ThepTrangMenFeatureCard content={features[0].content} imgUrl={features[0].thumbnail} title={features[0].title} />
        <ThepTrangMenFeatureCard content={features[1].content} imgUrl={features[1].thumbnail} title={features[1].title} />
        <ThepTrangMenFeatureCard stt content={features[2].content} imgUrl={features[2].thumbnail} title={features[2].title} />
      </div>
      <div className='w-4/5 mx-auto flex flex-row gap-5 mt-10 p-10 max-md:flex-col max-md:p-0 max-md:mt-5'>
        <div>
          <Image className='w-full' width={116} height={258} src={features[3].thumbnail} alt='' />
        </div>
        <div className='flex flex-col w-[80%] max-md:mx-auto max-md:w-full max-md:items-center'>
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
