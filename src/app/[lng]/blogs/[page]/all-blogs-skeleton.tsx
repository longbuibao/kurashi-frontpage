import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const AllBlogsSkeleton: React.FC = () => {
  return (
    <div className='flex flex-col w-[100vh] h-[25vh]'>
      <div className='flex flex-row max-lg:flex-col gap-5 flex-1'>
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

export default AllBlogsSkeleton
