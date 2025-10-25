import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const FilterCardSkeleton: React.FC = () => {
  return (
    <div className='border h-fit p-5 w-full rounded-lg border-kurashi-border animate-pulse'>
      <Skeleton className='h-7 w-32 mb-6' />
      <div className='flex flex-col gap-5'>
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className='flex items-center gap-3'>
            <Skeleton className='w-10 h-10 rounded-md' />
            <div className='flex flex-col flex-1 gap-2'>
              <Skeleton className='h-4 w-2/3' />
              <Skeleton className='h-3 w-1/3' />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FilterCardSkeleton
