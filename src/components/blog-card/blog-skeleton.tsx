import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const BlogSkeleton: React.FC = () => {
  return (
    <div className='flex flex-row gap-5 justify-center'>
      <Skeleton containerClassName='flex-1' height={250} />
      <Skeleton containerClassName='flex-1' height={250} />
    </div>
  )
}

export default BlogSkeleton
