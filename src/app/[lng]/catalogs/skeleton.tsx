import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const CatalogsSkeleton: React.FC = () => {
  return (
    <div className='w-full flex flex-row gap-10 justify-center max-sm:flex-col items-center'>
      <div className='w-52 h-72'>
        <Skeleton height={288} />
      </div>
      <div className='w-52 h-72'>
        <Skeleton height={288} />
      </div>
      <div className='w-52 h-72'>
        <Skeleton height={288} />
      </div>
    </div>
  )
}

export default CatalogsSkeleton
