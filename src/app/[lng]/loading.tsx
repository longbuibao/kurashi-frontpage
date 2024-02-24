import React from 'react'
import { BeatLoader } from 'react-spinners'

const Loading: React.FC = () => {
  return (
    <div className='w-full h-2/5 flex items-center justify-center flex-col'>
      <BeatLoader color='#437254' loading speedMultiplier={2} />
    </div>
  )
}

export default Loading
