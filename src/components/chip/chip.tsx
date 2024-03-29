import React from 'react'

interface ChipProps {
  text: string
}

const Chip: React.FC<ChipProps> = ({ text }) => {
  return <div className='bg-main text-secondary w-fit p-2 rounded-full text-xs'>{text}</div>
}

export default Chip
