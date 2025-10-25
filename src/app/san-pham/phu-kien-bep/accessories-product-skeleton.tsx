import { ReactElement } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const LoadingSpinner = (): ReactElement => {
  return (
    <div className='flex flex-col flex-1 mb-20'>
      <div className='grid grid-cols-4 gap-10 max-md:grid-cols-2 max-md:gap-3'>
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className='flex flex-col space-y-3'>
            <Skeleton className='h-[25vh] w-full rounded-xl' />
            <Skeleton className='h-4 w-3/4 rounded' />
            <Skeleton className='h-4 w-1/2 rounded' />
          </div>
        ))}
      </div>
    </div>
  )
}

export default LoadingSpinner
