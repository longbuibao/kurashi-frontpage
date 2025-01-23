import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const CategorySkeleton: React.FC = () => {
  return (
    <div className='w-4/5 mx-auto max-lg:w-full max-lg:mx-1 my-10'>
      <Skeleton containerClassName='flex-1' className='w-1/2 h-full max-lg:h-32' />
      <Skeleton containerClassName='flex-1' className='w-1/2 h-16' />
    </div>
  )
}

const ProductSkeleton: React.FC = () => {
  return (
    <div className='flex flex-row items-center w-4/5 mx-auto my-10 h-[200px] gap-5 justify-center'>
      <Skeleton containerClassName='flex-1' height={200} />
      <Skeleton containerClassName='flex-1' height={200} />
      <Skeleton containerClassName='flex-1' height={200} />
      <Skeleton containerClassName='flex-1' height={200} />
    </div>
  )
}

export { CategorySkeleton, ProductSkeleton }
