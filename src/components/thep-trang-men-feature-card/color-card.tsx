import Image from 'next/image'
import React from 'react'

interface ColorCardProps {
  color: 'kurashiX' | 'kurashiT' | 'kurashiB'
  colorName: string
}

const ColorCard: React.FC<ColorCardProps> = ({ color, colorName }) => {
  const availableCssClasses: Map<string, { size: string, imageUrl: string }> = new Map([
    ['kurashiX', { size: 'w-full h-40', imageUrl: 'https://storage.googleapis.com/kurashi_frontpage_files/images/thep-trang-men-page/thep_trang_men_xam.png' }],
    ['kurashiT', { size: 'w-full h-40', imageUrl: 'https://storage.googleapis.com/kurashi_frontpage_files/images/thep-trang-men-page/thep_trang_men_trang.png' }],
    ['kurashiB', { size: 'w-full h-40', imageUrl: 'https://storage.googleapis.com/kurashi_frontpage_files/images/thep-trang-men-page/thep_trang_men_be.png' }]
  ])
  const className = availableCssClasses.get(color)
  return (
    <div className='h-fit'>
      <div className={className?.size}>
        <div className='w-full h-full'>
          <Image className='w-full h-full' alt='Màu sắp thép tráng men' src={className?.imageUrl ?? ''} width={282} height={143} />
          <div className='flex flex-col mt-3 w-full h-full items-center max-md:text-xs'>
            {colorName}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ColorCard
