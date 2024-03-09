import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const ProductIdSkeleton: React.FC = () => {
  return (
    <div className='flex flex-row gap-5 w-3/4 mx-auto h-[30vh]'>
      <Skeleton containerClassName='flex-1' className='w-1/2 h-full' />
      <Skeleton containerClassName='flex-1' className='w-1/2 h-full' />
    </div>
  )
}

export default ProductIdSkeleton
