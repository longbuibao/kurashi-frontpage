import React from 'react'
import Image from 'next/image'

export interface ThepTrangMenFeatureCardProps {
  title: string
  content: string
  imgUrl: string
  stt?: boolean
}

const ThepTrangMenFeatureCard: React.FC<ThepTrangMenFeatureCardProps> = ({ imgUrl, content, title, stt = false }) => {
  return (
    <div className='flex flex-row gap-5 h-[20vh] max-md:h-fit'>
      <div>
        <Image className={stt ? 'h-auto' : 'h-full'} width={116} height={258} src={imgUrl} alt='' />
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
