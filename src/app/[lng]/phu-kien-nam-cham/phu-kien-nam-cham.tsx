import { CategoryItem } from '@/components/category-item'
import React from 'react'
import Image from 'next/image'

import prisma from '@/lib/prisma'

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
    <div className='w-4/5 mx-auto'>
      <div className='flex flex-row gap-10'>
        <div className='border h-fit p-5 w-[20%]'>
          <div />
          <div>Danh mục</div>
          {categories.map(category =>
            <CategoryItem name={category.name ?? ''} numberOfProducts={category.count ?? 0} thumbnail={category.thumbnail ?? ''} key={category.key} />)}
        </div>
        <div className='w-[80%] flex flex-row'>
          <div className='flex flex-col gap-10 w-[20%]'>
            <div>BẾP SIÊU TIỆN LỢI
              VỚI PHỤ KIỆN NAM CHÂM
            </div>
            <div>
              Đa chủng loại, tự do xê dịch
            </div>
          </div>
          <Image className='' src='https://storage.googleapis.com/kurashi_frontpage_files/images/thep_trang_men_slider/10.jpg' alt='Phụ kiện thép tráng men' width={1080} height={1080} />
        </div>
      </div>

    </div>
  )
}

export default PhuKienNamCham
