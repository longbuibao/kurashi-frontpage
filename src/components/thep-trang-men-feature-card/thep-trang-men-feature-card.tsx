import React from 'react'
import Image from 'next/image'

export interface ThepTrangMenFeatureCardProps {
  title: string
  content: string
  imgUrl: string
}

const ThepTrangMenFeatureCard: React.FC<ThepTrangMenFeatureCardProps> = ({ imgUrl, content, title }) => {
  return (
    <div className='flex flex-row gap-5'>
      <div>
        <Image width={116} height={258} src={imgUrl} alt='' />
      </div>
      <div className='flex flex-col w-[90%]'>
        <div className='w-fit'>
          <div className='text-xl'>{title.toUpperCase()}</div>
        </div>
        <div className='mt-5'>
          {content}
        </div>
      </div>
    </div>
  )
}

export default ThepTrangMenFeatureCard
