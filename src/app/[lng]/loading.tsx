import React from 'react'

import { Loader } from '@/components/loading'

const Loading: React.FC = () => {
  return (
    <div className='w-full flex items-center justify-center flex-col h-screen'>
      <Loader />
    </div>
  )
}

export default Loading
