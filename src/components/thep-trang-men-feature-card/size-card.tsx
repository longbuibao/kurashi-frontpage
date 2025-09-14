import React from 'react'

interface SizeCardProps {
  size: 's' | 'm' | 'l'
}

const SizeCard: React.FC<SizeCardProps> = ({ size }) => {
  const availableCssClasses: Map<string, string> = new Map([
    ['m', 'flex flex-row items-center justify-center w-[450px] h-[200px] max-md:w-[75px] max-md:h-[175px] border border-opacity-25 border-[#000]']
  ])
  const sizes: Map<string, string> = new Map([
    ['m', '910x2400mm']
  ])
  const className = availableCssClasses.get(size)
  return (
    <div className='w-fit'>
      <div className={className}>
        <div className=''>
          {`${sizes.get(size) ?? ''}`}
        </div>
      </div>
    </div>
  )
}

export default SizeCard
