import React from 'react'

const SectionTitle: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className='text-5xl hover:cursor-default pb-5 border-b-2 border-x-main max-lg:px-0'>
      <h3>
        {title}
      </h3>
    </div>
  )
}

export default SectionTitle
