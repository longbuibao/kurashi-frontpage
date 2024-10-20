import React, { Suspense } from 'react'
import Link from 'next/link'

import prisma from '@/lib/prisma'
import { CategoryItem } from '@/components/category-item'
import { FilterCard } from '@/components/filter-card'
import { OnlineStore } from '@/components/online-store-card'

interface PhuKienNamChamCategoryLayoutProps {
  children: React.ReactNode
  params: { 'danh-muc': string }
}

const PhuKienNamChamLayout: React.FC<PhuKienNamChamCategoryLayoutProps> = async ({ params, children }) => {
  const categoryToSearch = params['danh-muc']
  const allCategoriesWithCount = await prisma.product.groupBy({
    by: ['categoryId', 'order'],
    where: {
      isAccessoryProduct: true
    },
    _count: {
      _all: true
    }
  })

  const categoriesWithNameAndThumbnail = await prisma.category.findMany({
    select: {
      name: true,
      thumbnail: true,
      id: true,
      order: true,
      categoryUniqueName: true
    }
  })

  const categories = allCategoriesWithCount.map(x => {
    const count = x._count._all
    const category = categoriesWithNameAndThumbnail.find(y => y.id === x.categoryId)

    return {
      count,
      name: category?.name ?? '',
      thumbnail: category?.thumbnail ?? '#',
      key: category?.id,
      order: category?.order ?? 0,
      url: category?.categoryUniqueName ?? ''
    }
  })

  const currentCategory = categories.filter(x => x.url === categoryToSearch)[0]

  return (
    <div className='w-4/5 mx-auto my-10'>
      <div className='flex flex-row gap-10 w-full'>
        <div className='w-[20%] flex-col flex gap-10'>
          <Suspense>
            <FilterCard title='Danh mục'>
              <div className='flex flex-col gap-5'>
                {categories.sort((x, y) => y.order - x.order).map(category =>
                  <CategoryItem url={category.url} name={category.name ?? ''} numberOfProducts={category.count ?? 0} thumbnail={category.thumbnail ?? ''} key={category.key} />)}
              </div>
            </FilterCard>
          </Suspense>
        </div>
        <div className='w-[80%]'>
          <div className='w-full flex flex-row justify-between items-center'>
            <div className='w-[20%]'>
              <CategoryItem name={currentCategory.name} numberOfProducts={currentCategory.count} thumbnail={currentCategory.thumbnail} url={currentCategory.url} />
            </div>
            <div className='w-[20%]'>
              <Link href='/phu-kien-nam-cham' className='w-full flex flex-row items-center justify-end gap-5'>
                <div className='text-main'>tất cả sản phẩm</div>
                <div><i className='fa-solid fa-arrow-left' /></div>
              </Link>
            </div>
          </div>
          {children}
          <div className='text-2xl mb-10 mt-16 pb-5 border-b-main border-b-[0.5px]'>Online store</div>
          <div className='mb-36'>
            <OnlineStore />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PhuKienNamChamLayout
