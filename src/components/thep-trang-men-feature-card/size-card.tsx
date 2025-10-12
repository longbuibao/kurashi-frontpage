import React from 'react'

interface SizeCardProps {
  size: 's' | 'm' | 'l'
  orient: 'horizontal' | 'vertical'
}

const availableCssClassesVertical: Map<string, string> = new Map([
  ['s', 'w-[150px] h-[300px] max-md:w-[75px] max-md:h-[125px] border p-5 border-opacity-25 border-[#000] '],
  ['m', 'w-[150px] h-[400px] max-md:w-[75px] max-md:h-[175px] border p-5 border-opacity-25 border-[#000] '],
  ['l', 'w-[220px] h-[400px] max-md:w-[100px] max-md:h-[175px] border p-5 border-opacity-25 border-[#000] ']
])

const sizesVertical: Map<string, string> = new Map([
  ['s', '890x1800mm'],
  ['m', '890x2400mm'],
  ['l', '1219x2400mm']
])

const availableCssClassesHorizontal: Map<string, string> = new Map([
  ['m', 'w-[600px] h-[220px] max-md:w-[75px] max-md:h-[175px] border p-5 border-opacity-25 border-[#000] '],
  ['l', 'w-[400px] h-[220px] max-md:w-[100px] max-md:h-[175px] border p-5 border-opacity-25 border-[#000] ']
])

const sizesHorizontal: Map<string, string> = new Map([
  ['m', '910x2400mm'],
  ['l', '910x1820mm']
])

const SizeCard: React.FC<SizeCardProps> = ({ size, orient }) => {
  const className = orient === 'horizontal' ? availableCssClassesHorizontal.get(size) : availableCssClassesVertical.get(size)
  const text = orient === 'horizontal' ? sizesHorizontal.get(size) : sizesVertical.get(size)
  return (
    <div className='w-fit'>
      <div className={className}>
        <div className='rounded-lg w-full h-full flex flex-row items-center justify-center'>
          {`${text ?? ''}`}
        </div>
      </div>
    </div>
  )
}

export default SizeCard
