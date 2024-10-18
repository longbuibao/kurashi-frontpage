import { CategoryItem } from '@/components/category-item'
import React, { Suspense } from 'react'
import Image from 'next/image'

import prisma from '@/lib/prisma'
import { FilterCard, PriceFilter } from '@/components/filter-card'
import PhuKienNew from './phu-kien-new'
import AllHotProducts from './all-hot-product'
import SubCategories from './sub-categories'
import ShopByCategory from './shop-by-category'

const PhuKienNamCham: React.FC = async () => {
  const allCategoriesWithCount = await prisma.product.groupBy({
    by: ['categoryId'],
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
      id: true
    }
  })

  const categories = allCategoriesWithCount.map(x => {
    const count = x._count._all
    const category = categoriesWithNameAndThumbnail.find(y => y.id === x.categoryId)

    return {
      count,
      name: category?.name,
      thumbnail: category?.thumbnail,
      key: category?.id
    }
  })

  return (
    <Suspense>
      <div className='w-4/5 mx-auto my-10'>
        <div className='flex flex-row gap-10 w-full'>
          <div className='w-[20%] flex-col flex gap-10'>
            <FilterCard title='Danh mục'>
              <div className='flex flex-col gap-5'>
                {categories.map(category =>
                  <CategoryItem name={category.name ?? ''} numberOfProducts={category.count ?? 0} thumbnail={category.thumbnail ?? ''} key={category.key} />)}
              </div>
            </FilterCard>
            <FilterCard title='Lọc sản phẩm'>
              {/* todo: count the color here */}
              <PriceFilter colors={[{ color: 'Trắng', quantity: 54 }, { color: 'Đen', quantity: 54 }, { color: 'Bạc', quantity: 54 }]} />
            </FilterCard>
            <FilterCard title='Phụ kiện mới'>
              <div className='flex flex-col gap-5'>
                <Suspense>
                  <PhuKienNew />
                </Suspense>
              </div>
            </FilterCard>
          </div>
          <div className='w-[80%]'>
            <div className='bg-main w-full flex flex-row text-secondary'>
              <div className='flex flex-col gap-10 w-full py-10 pl-10'>
                <div className='text-4xl font-bold'>BẾP SIÊU TIỆN LỢI VỚI PHỤ KIỆN NAM CHÂM</div>
                <div className='text-2xl'>Đa chủng loại, tự do xê dịch</div>
              </div>
              <div className='w-[60%] p-5'>
                <Image src='https://storage.googleapis.com/kurashi_frontpage_files/images/thep_trang_men_slider/10.jpg' alt='Phụ kiện thép tráng men' width={1080} height={1080} />
              </div>
            </div>
            <div className='text-2xl my-10'>Phụ kiện hot</div>
            <Suspense>
              <AllHotProducts />
            </Suspense>
          </div>
        </div>
        <Suspense>
          <SubCategories />
        </Suspense>
        <div className='text-2xl my-10'>Mua hàng theo loại phụ kiện</div>
        <ShopByCategory categories={categories} />
      </div>
    </Suspense>
  )
}

export default PhuKienNamCham
