import React from 'react'
import { BeatLoader } from 'react-spinners'

const Loading: React.FC = () => {
  return (
    <div className='w-full flex items-center justify-center flex-col h-screen'>
      <BeatLoader color='#437254' loading speedMultiplier={2} />
    </div>
  )
}

export default Loading
