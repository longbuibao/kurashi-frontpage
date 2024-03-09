import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const ProductIdSkeleton: React.FC = () => {
  return (
    <div className='flex flex-col items-center w-4/5 mx-auto my-10'>
      <div className='flex flex-row gap-5 w-full h-[50vh]'>
        <Skeleton containerClassName='flex-1' className='w-1/2 h-full' />
        <Skeleton count={4} containerClassName='flex-1' className='w-1/2 h-8' />
      </div>
    </div>

  )
}

export default ProductIdSkeleton
