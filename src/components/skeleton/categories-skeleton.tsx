import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

interface CategoriesSkeletonProps {
  numsOfCategories: number
  hasCollection: boolean
}

const KurashiCategoriesSkeleton: React.FC<CategoriesSkeletonProps> = ({ numsOfCategories, hasCollection }): React.ReactElement => {
  return (
    <div className='flex flex-col w-8/12 mx-auto'>
      <div className='flex flex-row w-full'>
        <Skeleton containerClassName='flex-1' count={numsOfCategories} />
      </div>
      {hasCollection && <div className='w-3.5'><Skeleton /></div>}
      <div>
        <Skeleton count={numsOfCategories} />
      </div>
    </div>

  )
}

export default KurashiCategoriesSkeleton
