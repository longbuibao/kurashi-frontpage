import React, { Suspense } from 'react'

import prisma from '@/lib/prisma'
import { ProductAccessoryCard } from '@/components/product'

interface PageParam {
  params: Promise<{ 'danh-muc': string }>
}

const CategoryPhuKienPage: React.FC<PageParam> = async props => {
  const params = await props.params
  const allProducts = await prisma.product.findMany({
    where: {
      isAccessoryProduct: true,
      category: {
        categoryUniqueName: params['danh-muc']
      }
    },
    include: {
      category: true,
      ProductColor: true
    }
  })
  return (
    <Suspense>
      <div className='grid grid-cols-4 gap-10 my-10 max-md:grid-cols-2'>
        {allProducts.map(x => {
          return <ProductAccessoryCard key={x.id} product={x} />
        })}
      </div>
    </Suspense>
  )
}

export default CategoryPhuKienPage
