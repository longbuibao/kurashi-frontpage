import React from 'react'

const NotFoundPage: React.FC = async () => {
  return (
    <div className='w-full h-[50vh] flex flex-row justify-center items-center gap-5'>
      <i className='fa-solid fa-bug' />
      <h1>Not found this page.</h1>
      <div />
    </div>
  )
}

export default NotFoundPage
