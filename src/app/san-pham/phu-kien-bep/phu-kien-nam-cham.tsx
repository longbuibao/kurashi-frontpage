import { CategoryItem } from '@/components/category-item'
import React, { Suspense } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import prisma from '@/lib/prisma'
import { FilterCard, PriceFilter } from '@/components/filter-card'
import { OnlineStore } from '@/components/online-store-card'
import PhuKienNew from './phu-kien-new'
import AllAccessoriesProducts from './all-accessories-product'
import SubCategories from './sub-categories'
import ShopByCategory from './shop-by-category'
import FilterCardSkeleton from './filter-card-skeleton'
import LoadingSpinner from './accessories-product-skeleton'

const relatedProducts = [
  {
    url: '/san-pham/tam-op-tuong-bang-thep-trang-men',
    thumb: 'https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua/thep-trang-men.png',
    alt: 'Thép tráng men'
  },
  {
    url: '/san-pham/phu-kien-bep',
    thumb: 'https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua/phu-kien-nam-cham.png',
    alt: 'Phụ kiện bếp'
  },
  {
    url: '/san-pham/tam-op-tuong-van-da',
    thumb: 'https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua/tam-op-van-da.png',
    alt: 'Tấm ốp tường vân đá'
  }
]

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
    <div className='w-4/5 mx-auto my-10 max-md:w-full'>
      <div className='flex flex-row gap-10 w-full max-md:flex-col max-md:px-3'>
        <div className='w-[20%] flex-col flex gap-10 max-md:w-full'>
          <div className='w-full hidden max-md:block'>
            <div className='bg-main-phu-kien w-full flex flex-row rounded-xl max-md:flex-col-reverse'>
              <div className='flex flex-col gap-10 w-full py-10 pl-10 justify-center'>
                <div className='text-4xl font-semibold max-md:text-2xl'>
                  PHỤ KIỆN BẾP NAM CHÂM KURASHI
                </div>
                <div className='text-2xl'>Đa chủng loại, tự do xê dịch</div>
              </div>
              <div className='w-[60%] p-5 max-md:w-full'>
                <Image className='rounded-xl' src='https://storage.googleapis.com/kurashi_frontpage_files/images/thep_trang_men_slider/10.jpg' alt='Phụ kiện thép tráng men' width={1080} height={1080} />
              </div>
            </div>
          </div>
          <Suspense fallback={<FilterCardSkeleton />}>
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
              <Suspense fallback={<FilterCardSkeleton />}>
                <PhuKienNew />
              </Suspense>
            </div>
          </FilterCard>
        </div>
        <div className='w-[80%] max-md:w-full'>
          <div className='w-full block max-md:hidden'>
            <div className='bg-main-phu-kien text-text-phu-kien w-full flex flex-row rounded-xl max-md:flex-col-reverse'>
              <div className='flex flex-col gap-10 w-full py-10 pl-10 justify-center'>
                <div className='text-4xl font-semibold max-md:text-2xl'>
                  PHỤ KIỆN BẾP NAM CHÂM KURASHI
                </div>
                <div className='text-2xl'>THIẾT KẾ HIỆN ĐẠI, TINH GIẢN KIỂU NHẬT</div>
                <div className='mt-10'>
                  Bộ sưu tập phụ kiện bếp nam châm Nhật Bản Kurashi. Thiết kế sang trọng, công năng và chất lượng Nhật Bản. Dễ gắn, dễ di chuyển, không cần khoan tường.
                </div>
              </div>
              <div className='w-[60%] p-5 max-md:w-full'>
                <Image
                  className='rounded-xl'
                  src='https://storage.googleapis.com/kurashi_frontpage_files/images/rework-phu-kien-nam-cham/dev-images/hero-image.png'
                  alt='Phụ kiện thép tráng men' width={1080} height={1080}
                />
              </div>
            </div>
          </div>
          <div className='text-2xl mt-28 mb-10'>Phụ kiện thông dụng</div>
          <Suspense fallback={<LoadingSpinner />}>
            <AllAccessoriesProducts />
          </Suspense>
        </div>
      </div>
      <Suspense fallback='loading'>
        <SubCategories />
      </Suspense>
      <div className='text-2xl my-10 max-md:text-center'>Mua hàng theo loại phụ kiện</div>
      <ShopByCategory categories={categories} />
      <div className='max-md:text-center text-2xl mb-10 mt-16 pb-5'>Online store</div>
      <OnlineStore />
      <div className='my-40 max-md:mt-40 max-md:text-center'>
        <div className='text-3xl my-16'>SẢN PHẨM LIÊN QUAN</div>
        <div className='flex flex-row gap-20 max-md:flex-col max-md:gap-10'>
          {relatedProducts.map(x =>
            <Link key={x.thumb} href={x.url as any}>
              <div className='flex flex-col gap-5 justify-center w-fit'>
                <Image src={x.thumb} width={300} height={300} alt={x.alt} className='transition-shadow hover:shadow-lg' />
                <div className='text-center'>{x.alt}</div>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default PhuKienNamCham
