import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const ContactPageSkeleton: React.FC = () => {
  return (
    <div className='flex flex-row w-3/4 mx-auto gap-2 h-[50vh] max-lg:flex-col mb-10'>
      <div className='flex flex-col w-full flex-1 h-full'>
        <div className='flex flex-col flex-1'>
          <Skeleton containerClassName='flex-1' className='w-1/2 h-16' />
          <Skeleton containerClassName='flex-1' className='w-1/2 h-16' />
          <Skeleton containerClassName='flex-1' className='w-1/2 h-16' />
        </div>
        <Skeleton containerClassName='flex-1' className='w-1/2 h-60 max-lg:h-32' />
        <Skeleton containerClassName='flex-1' className='w-1/2 h-14' />
      </div>
      <div className='flex flex-col w-full flex-1 h-full'>
        <Skeleton containerClassName='flex-1' className='h-full' />
      </div>
    </div>
  )
}

export default ContactPageSkeleton
