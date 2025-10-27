import React, { Suspense } from 'react'
import Link from 'next/link'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Image from 'next/image'

import { CategoryItem } from '@/components/category-item'
import { FilterCard } from '@/components/filter-card'
import { OnlineStore } from '@/components/online-store-card'
import ShopByCategory from '../../shop-by-category'
import { getCategories } from '../../get-categories'
import { sleep } from '@/utils'

interface PhuKienNamChamCategoryLayoutProps {
  children: React.ReactNode
  params: Promise<{ 'danh-muc': string }>
}

const FilterCardSkeleton: React.FC = () => {
  return (
    <div className='border h-fit p-5 w-full rounded-lg border-kurashi-border animate-pulse'>
      <Skeleton className='h-7 w-32 mb-6' />
      <div className='flex flex-col gap-5'>
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className='flex items-center gap-3'>
            <Skeleton className='w-10 h-10 rounded-md' /> {/* thumbnail */}
            <div className='flex flex-col flex-1 gap-2'>
              <Skeleton className='h-4 w-2/3' /> {/* category name */}
              <Skeleton className='h-3 w-1/3' /> {/* product count */}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const PhuKienNamChamLayout: React.FC<PhuKienNamChamCategoryLayoutProps> = async props => {
  const params = await props.params
  await sleep(10000)
  const {
    children
  } = props

  const categoryToSearch = params['danh-muc']
  const categories = await getCategories()

  const currentCategory = categories.filter(x => x.url === categoryToSearch)[0]

  return (
    <div className='w-4/5 mx-auto my-10 max-md:w-full'>
      <div className='flex flex-row gap-10 w-full max-md:flex-col'>
        <div className='w-[20%] flex-col flex gap-10 max-md:w-full max-md:px-3'>
          <Suspense fallback={<FilterCardSkeleton />}>
            <FilterCard title='Danh mục'>
              <div className='flex flex-col gap-5'>
                {categories.sort((x, y) => y.order - x.order).map(category =>
                  <CategoryItem url={category.url} name={category.name ?? ''} numberOfProducts={category.count ?? 0} thumbnail={category.thumbnail ?? ''} key={category.key} />)}
              </div>
            </FilterCard>
          </Suspense>
        </div>
        <div className='w-[80%] max-md:w-full max-md:px-3'>
          <div className='w-full flex flex-row justify-between items-center max-md:justify-around'>
            <div className='w-[20%] max-md:w-4/5'>
              <CategoryItem noBg name={currentCategory.name} numberOfProducts={currentCategory.count} thumbnail={currentCategory.thumbnail} url={currentCategory.url} />
            </div>
            <div className='w-[20%] max-md:w-full'>
              <Link href='/san-pham/phu-kien-bep' className='w-full flex flex-row items-center justify-end gap-5'>
                <div className=''>tất cả sản phẩm</div>
                <Image src='/images/LeftArrow.svg' width={10} height={10} alt='Trở về' />
              </Link>
            </div>
          </div>
          {children}
          <div className='text-2xl mb-10 mt-16 pb-5 border-b-main border-b-[0.5px] max-md:text-center'>Online store</div>
          <div className='mb-10'>
            <OnlineStore />
          </div>
        </div>
      </div>
      <div className='mb-36 mt-20'>
        <div className='text-2xl my-10 max-md:text-center'>Mua hàng theo loại phụ kiện</div>
        <ShopByCategory categories={categories} />
      </div>
    </div>
  )
}

export default PhuKienNamChamLayout
