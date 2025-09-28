import React from 'react'

interface SizeCardProps {
  size: 's' | 'm' | 'l'
}

const SizeCard: React.FC<SizeCardProps> = ({ size }) => {
  const availableCssClasses: Map<string, string> = new Map([
    ['s', 'w-[200px] h-[250px] max-md:w-[75px] max-md:h-[125px] border p-5 border-opacity-25 border-[#000] '],
    ['m', 'w-[350px] h-[200px] max-md:w-[75px] max-md:h-[175px] border p-5 border-opacity-25 border-[#000] '],
    ['l', 'w-[273px] h-[350px] max-md:w-[100px] max-md:h-[175px] border p-5 border-opacity-25 border-[#000] ']
  ])
  const sizes: Map<string, string> = new Map([
    ['s', '890x1800mm'],
    ['m', '910x2400mm'],
    ['l', '1219x2400mm']
  ])
  const className = availableCssClasses.get(size)
  return (
    <div className='w-fit'>
      <div className={className}>
        <div className='rounded-lg w-full h-full flex flex-row items-center justify-center'>
          {`${sizes.get(size) ?? ''}`}
        </div>
      </div>
    </div>
  )
}

export default SizeCard
