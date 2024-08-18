import React from 'react'

import { SectionTitle } from '@/components/section-title'

export interface ThepTrangMenFeatureCardProps {
  title: string
  p: string
  imgUrl: string
}

const ThepTrangMenFeatureCard: React.FC<ThepTrangMenFeatureCardProps> = ({ imgUrl, p, title }) => {
  return (
    <div className='flex flex-row gap-10 items-center'>
      <div>
        <img src={imgUrl} alt='' />
      </div>
      <div className='flex flex-col'>
        <div className='w-fit'>
          <SectionTitle title={title} />
        </div>
        <div>
          {p}
        </div>
      </div>
    </div>
  )
}

export default ThepTrangMenFeatureCard
