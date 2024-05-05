import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const KurashiCategoriesSkeleton: React.FC = () => {
  return (
    <div className='flex flex-col gap-5 my-5 w-1/2 mx-auto h'>
      <div className='flex flex-row flex-1 gap-5'>
        <Skeleton containerClassName='flex-1' className='w-40 h-12' />
        <Skeleton containerClassName='flex-1' className='w-40 h-12' />
        <Skeleton containerClassName='flex-1' className='w-40 h-12' />
      </div>
      <div className='flex gap-5 flex-col'>
        <div className='flex gap-5 flex-row max-sm:flex-col'>
          <Skeleton containerClassName='flex-1' className='w-64 h-52' />
          <Skeleton containerClassName='flex-1' className='w-64 h-52' />
          <Skeleton containerClassName='flex-1' className='w-64 h-52 max-sm:hidden' />
          <Skeleton containerClassName='flex-1' className='w-64 h-52 max-sm:hidden' />
        </div>
        <div className='flex gap-5 flex-row max-sm:hidden'>
          <Skeleton containerClassName='flex-1' className='w-64 h-52' />
          <Skeleton containerClassName='flex-1' className='w-64 h-52' />
          <Skeleton containerClassName='flex-1' className='w-64 h-52' />
          <Skeleton containerClassName='flex-1' className='w-64 h-52' />
        </div>
      </div>
    </div>
  )
}

export default KurashiCategoriesSkeleton
