import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const KurashiCategoriesSkeleton: React.FC = () => {
  return (
    <div className='flex flex-col gap-5 my-5 w-4/5 mx-auto'>
      <Skeleton containerClassName='flex-1' height={50} />
      <Skeleton containerClassName='flex-1' height={100} />
    </div>
  )
}

export default KurashiCategoriesSkeleton
