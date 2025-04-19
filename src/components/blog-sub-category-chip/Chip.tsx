import React from 'react'

interface ChipProps {
  label: string
  className?: string
}

const Chip: React.FC<ChipProps> = ({ label, className = '' }) => {
  return (
    <div className='inline-flex items-center bg-[#F5F7F8] text-gray-800 text-xs px-2 py-1 rounded-full'>
      <span>{label}</span>
    </div>
  )
}

export default Chip
