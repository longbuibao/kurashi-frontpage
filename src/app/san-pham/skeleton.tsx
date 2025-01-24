import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const AllProductsSkeleton: React.FC = () => {
  return (
    <div className='flex flex-col gap-10 w-4/5 mx-auto mb-10'>
      <div className='w-1/3'>
        <Skeleton height={40} />
      </div>
      <div className='flex flex-row flex-1 h-[25vh] gap-10 max-lg:gap-5'>
        <div className='flex flex-col w-1/6'>
          <Skeleton height={40} />
          <Skeleton height={40} />
          <Skeleton height={40} />
        </div>
        <div className='flex flex-row max-lg:flex-col gap-5 flex-1'>
          <Skeleton containerClassName='flex-1' className='h-[25vh]' />
          <Skeleton containerClassName='flex-1' className='h-[25vh]' />
        </div>
      </div>
    </div>
  )
}

export default AllProductsSkeleton
