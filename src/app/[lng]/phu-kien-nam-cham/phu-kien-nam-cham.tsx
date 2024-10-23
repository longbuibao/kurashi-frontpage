import { CategoryItem } from '@/components/category-item'
import React, { Suspense } from 'react'
import Image from 'next/image'

import prisma from '@/lib/prisma'
import { FilterCard, PriceFilter } from '@/components/filter-card'
import { OnlineStore } from '@/components/online-store-card'
import PhuKienNew from './phu-kien-new'
import AllAccessoriesProducts from './all-accessories-product'
import SubCategories from './sub-categories'
import ShopByCategory from './shop-by-category'

const PhuKienNamCham: React.FC = async () => {
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
      name: category?.name,
      thumbnail: category?.thumbnail,
      key: category?.id,
      order: category?.order ?? 0,
      url: category?.categoryUniqueName ?? ''
    }
  })

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
          <div className='hidden'>
            <FilterCard title='Lọc sản phẩm'>
              <PriceFilter colors={[{ color: 'Trắng', quantity: 54 }, { color: 'Đen', quantity: 54 }, { color: 'Bạc', quantity: 54 }]} />
            </FilterCard>
          </div>
          <FilterCard title='Phụ kiện mới'>
            <div className='flex flex-col gap-5'>
              <Suspense>
                <PhuKienNew />
              </Suspense>
            </div>
          </FilterCard>
        </div>
        <div className='w-[80%]'>
          <div className='bg-main-phu-kien w-full flex flex-row text-secondary rounded-xl'>
            <div className='flex flex-col gap-10 w-full py-10 pl-10 justify-center'>
              <div className='text-4xl font-bold'>BẾP SIÊU TIỆN LỢI <br /><div className='mt-3'>VỚI PHỤ KIỆN NAM CHÂM</div></div>
              <div className='text-2xl'>Đa chủng loại, tự do xê dịch</div>
            </div>
            <div className='w-[60%] p-5'>
              <Image className='rounded-xl' src='https://storage.googleapis.com/kurashi_frontpage_files/images/thep_trang_men_slider/10.jpg' alt='Phụ kiện thép tráng men' width={1080} height={1080} />
            </div>
          </div>
          <div className='text-2xl my-10'>Phụ kiện thông dụng</div>
          <Suspense>
            <AllAccessoriesProducts />
          </Suspense>
        </div>
      </div>
      <Suspense>
        <SubCategories />
      </Suspense>
      <div className='text-2xl my-10'>Mua hàng theo loại phụ kiện</div>
      <ShopByCategory categories={categories} />
      <div className='text-2xl mb-10 mt-16 pb-5 border-b-main border-b-[0.5px]'>Online store</div>
      <div className='mb-36'>
        <OnlineStore />
      </div>
    </div>
  )
}

export default PhuKienNamCham
