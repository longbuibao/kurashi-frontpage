import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const ProductGallerySkeleton: React.FC = () => {
  return (
    <div>
      <div>
        <div className='w-1/2'>
          <Skeleton height={40} />
        </div>
        <div className='flex flex-row max-lg:flex-col max-lg:mx-1 mx-auto gap-5 my-10'>
          <Skeleton containerClassName='flex-1' className='h-[25vh]' />
          <Skeleton containerClassName='flex-1' className='h-[25vh]' />
          <Skeleton containerClassName='flex-1' className='h-[25vh]' />
          <Skeleton containerClassName='flex-1' className='h-[25vh]' />
          <Skeleton containerClassName='flex-1' className='h-[25vh]' />
          <Skeleton containerClassName='flex-1' className='h-[25vh]' />
        </div>
      </div>
    </div>
  )
}

export default ProductGallerySkeleton
