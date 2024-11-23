import React, { Suspense } from 'react'
import Link from 'next/link'

import { CategoryItem } from '@/components/category-item'
import { FilterCard } from '@/components/filter-card'
import { OnlineStore } from '@/components/online-store-card'
import ShopByCategory from '../../shop-by-category'
import { getCategories } from '../../get-categories'
import { auth } from '@/auth'
import LoginPage from '../../login-page'

interface PhuKienNamChamCategoryLayoutProps {
  children: React.ReactNode
  params: { 'danh-muc': string }
}

const PhuKienNamChamLayout: React.FC<PhuKienNamChamCategoryLayoutProps> = async ({ params, children }) => {
  const session = await auth()
  if (session === null) {
    return <LoginPage />
  }

  const categoryToSearch = params['danh-muc']
  const categories = await getCategories()

  const currentCategory = categories.filter(x => x.url === categoryToSearch)[0]

  return (
    <div className='w-4/5 mx-auto my-10 max-md:w-full'>
      <div className='flex flex-row gap-10 w-full max-md:flex-col'>
        <div className='w-[20%] flex-col flex gap-10 max-md:w-full max-md:px-3'>
          <Suspense>
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
              <Link href='/phu-kien-nam-cham' className='w-full flex flex-row items-center justify-end gap-5'>
                <div className='text-main'>tất cả sản phẩm</div>
                <div><i className='fa-solid fa-arrow-left' /></div>
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
