import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const ProductIdSkeleton: React.FC = () => {
  return (
    <div className='flex flex-col items-center w-3/4 mx-auto my-10 h-screen'>
      <div className='flex flex-row gap-5 w-full flex-1 max-lg:flex-col'>
        <Skeleton containerClassName='flex-1' className='w-1/2 h-full max-lg:h-32' />
        <div className='flex flex-col flex-1'>
          <Skeleton containerClassName='flex-1' className='w-1/2 h-16' />
          <Skeleton containerClassName='flex-1' className='w-1/2 h-16' />
          <Skeleton containerClassName='flex-1' className='w-1/2 h-16' />
          <Skeleton containerClassName='flex-1' className='w-1/2 h-16' />
        </div>
      </div>
      <div className='w-full flex flex-col h-full my-10 gap-10'>
        <Skeleton containerClassName='flex-1' className='w-1/2 h-full' />
        <Skeleton containerClassName='flex-1' className='w-1/2 h-full' />
        <Skeleton containerClassName='flex-1' className='w-1/2 h-full' />
      </div>
    </div>
  )
}

export default ProductIdSkeleton
