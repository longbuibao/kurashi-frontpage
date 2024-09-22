import React from 'react'

interface ColorCardProps {
  color: 'kurashiX' | 'kurashiT' | 'kurashiB'
  colorName: string
}

const ColorCard: React.FC<ColorCardProps> = ({ color, colorName }) => {
  const availableCssClasses: Map<string, string> = new Map([
    ['kurashiX', 'w-80 h-40 bg-kurashiX rounded-lg'],
    ['kurashiT', 'w-80 h-40 bg-kurashiT rounded-lg'],
    ['kurashiB', 'w-80 h-40 bg-kurashiB rounded-lg']
  ])
  const className = availableCssClasses.get(color)
  return (
    <div className='shadow-xl rounded-lg h-fit border border-opacity-25 border-[#000]'>
      <div className={className}>
        <div className='rounded-lg w-full h-full'>
          <div className='flex flex-col justify-center w-full h-full items-center'>
            {colorName}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ColorCard
