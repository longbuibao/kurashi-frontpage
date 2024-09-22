import React from 'react'
import Image from 'next/image'
import { v4 as uuidv4 } from 'uuid'

interface AccessoryCardProps {
  imgUrl: string
  title: string
  colors: string[]
  size: string
  additionalText: string
}

const AccessoryTitle: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className='hover:cursor-default pb-2 border-b-2 border-b-main max-lg:px-0 w-fit'>
      <h3 className='border-b-main px-2'>
        {title}
      </h3>
    </div>
  )
}

const AccessoryCard: React.FC<AccessoryCardProps> = ({ additionalText, colors, imgUrl, size, title }) => {
  const availableCssClasses: Map<string, string> = new Map([
    ['black', 'w-[20px] h-[20px] rounded-xl bg-[#000] border border-opacity-25 border-[#000]'],
    ['white', 'w-[20px] h-[20px] rounded-xl bg-[#fff] border border-opacity-25 border-[#000]']
  ])

  return (
    <div className='w-[300px] shadow-xl rounded-lg border p-5 border-opacity-25 border-[#000]'>
      <div>
        <div>
          <Image height={500} width={500} src={imgUrl} alt='' />
        </div>
        <div className='flex flex-col gap-3'>
          <AccessoryTitle title={title} />
          <div className='flex flex-row gap-2'>
            {colors.map(x => {
              const className = availableCssClasses.get(x)
              return <div className={className ?? ''} key={uuidv4()} />
            })}
          </div>
          <div>{size}</div>
          <div>{additionalText}</div>
        </div>
      </div>
    </div>
  )
}

export default AccessoryCard
