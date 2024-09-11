import React from 'react'

const SectionTitle: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className='text-3xl hover:cursor-default pb-2 border-b-2 border-b-main max-lg:px-0'>
      <h3 className='border-b-main px-2'>
        {title}
      </h3>
    </div>
  )
}

export default SectionTitle
