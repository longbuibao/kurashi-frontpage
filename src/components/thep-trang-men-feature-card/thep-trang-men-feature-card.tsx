import React from 'react'
import Image from 'next/image'

import { KurashiLeftBorder } from '@/components/kurashi-div'

export interface ThepTrangMenFeatureCardProps {
  title: string
  p: string
  imgUrl: string
}

const ThepTrangMenFeatureCard: React.FC<ThepTrangMenFeatureCardProps> = ({ imgUrl, p, title }) => {
  return (
    <div className='flex flex-col gap-10 items-center h-fit justify-center'>
      <div>
        <Image width={500} height={500} src={imgUrl} alt='' />
      </div>
      <div className='flex flex-col'>
        <div className='w-fit'>
          <KurashiLeftBorder>
            <div className='text-xl'>{title}</div>
          </KurashiLeftBorder>
        </div>
        <div className='mt-5'>
          {p}
        </div>
      </div>
    </div>
  )
}

export default ThepTrangMenFeatureCard
