import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import Image from 'next/image'

interface ApplicationCardProps {
  title: string
  content: string[]
  thumbnail: string
  key: string
}

const ApplicationCard: React.FC<ApplicationCardProps> = ({ title, content, thumbnail, key }) => {
  return (
    <div className='flex flex-row gap-20 p-10 max-md:p-5 max-md:flex-col max-md:gap-10'>
      <div className='w-1/2 max-md:w-full'>
        <div className='text-xl max-md:text-center'>{title.toUpperCase()}</div>
        <div className='flex flex-col mt-10 gap-10 max-md:mt-5 max-md:text-center'>
          {content.map(cnt => <div key={uuidv4()}>{cnt}</div>)}
        </div>
      </div>
      <div className='w-full'>
        <Image src={thumbnail} width={663} height={435} alt='Ứng dụng của thép tráng men' />
      </div>
    </div>
  )
}

export default ApplicationCard
