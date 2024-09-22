import React from 'react'

interface SizeCardProps {
  size: 's' | 'm' | 'l'
}

const SizeCard: React.FC<SizeCardProps> = ({ size }) => {
  const availableCssClasses: Map<string, string> = new Map([
    ['s', 'w-[200px] h-[250px] border p-5 border-opacity-25 border-[#000]'],
    ['m', 'w-[200px] h-[350px] border p-5 border-opacity-25 border-[#000]'],
    ['l', 'w-[273px] h-[350px] border p-5 border-opacity-25 border-[#000]']
  ])
  const sizes: Map<string, string> = new Map([
    ['s', '890x1800mm'],
    ['m', '890x2400mm'],
    ['l', '1219x2400mm']
  ])
  const className = availableCssClasses.get(size)
  return (
    <div>
      <div className={className}>
        <div className='rounded-lg w-full h-full'>
          <div className='flex flex-col justify-center w-full h-full items-center'>
            {`${sizes.get(size) ?? ''}`}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SizeCard
