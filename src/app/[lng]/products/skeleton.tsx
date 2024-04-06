import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const AllProductsSkeleton: React.FC = () => {
  return (
    <div className='flex flex-col gap-10 w-[100vh] h-[25vh] mx-auto'>
      <div>
        <Skeleton width={400} height={40} />
      </div>
      <div className='flex flex-row w-[100vh] h-[25vh] gap-10'>
        <div className='flex flex-col'>
          <Skeleton width={200} height={40} />
          <Skeleton width={200} height={40} />
          <Skeleton width={200} height={40} />
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
