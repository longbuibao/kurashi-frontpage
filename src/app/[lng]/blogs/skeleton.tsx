import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const AllBlogsSkeleton: React.FC = () => {
  return (
    <div className='flex flex-col flex-1 mb-20'>
      <div className='flex flex-row max-lg:flex-col gap-5 flex-1 max-lg:mx-1'>
        <Skeleton containerClassName='flex-1' className='h-[25vh]' />
        <Skeleton containerClassName='flex-1' className='h-[25vh]' />
      </div>
      <div className='flex flex-row max-lg:flex-col gap-5 flex-1'>
        <Skeleton containerClassName='flex-1' className='h-[25vh]' />
        <Skeleton containerClassName='flex-1' className='h-[25vh]' />
      </div>
    </div>
  )
}

const AllCategoriesSkeleton: React.FC = () => {
  return (
    <div className='flex flex-col flex-1 mb-20 max-lg:flex-col max-lg:mx-1'>
      <Skeleton containerClassName='flex-1' className='h-16' />
      <Skeleton containerClassName='flex-1' className='h-16' />
      <Skeleton containerClassName='flex-1' className='h-16' />
    </div>
  )
}

export { AllBlogsSkeleton, AllCategoriesSkeleton }
