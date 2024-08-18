import React from 'react'

const MainTitle: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className='text-2xl hover:cursor-default pb-2 border-b-2 border-b-main max-lg:px-0'>
      <h1 className='border-b-main px-2'>
        {title}
      </h1>
    </div>
  )
}

export default MainTitle
