import React from 'react'

interface FilterCardProps {
  title: string
  children: React.ReactNode
}

const FilterCard: React.FC<FilterCardProps> = ({ title, children }) => {
  return (
    <div className='border h-fit p-5 w-full rounded-lg border-kurashi-border'>
      <div className='text-3xl mb-6 border-b-2 border-b-count-text pb-3 w-fit'>{title}</div>
      <div className='flex flex-col gap-5'>
        {children}
      </div>
    </div>
  )
}

export default FilterCard
