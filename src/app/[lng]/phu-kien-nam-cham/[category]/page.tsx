import prisma from '@/lib/prisma'
import React, { Suspense } from 'react'

import { ProductAccessoryCard } from '@/components/product'

interface PageParam {
  params: { category: string }
}

const CategoryPhuKienPage: React.FC<PageParam> = async ({ params }) => {
  const allProducts = await prisma.product.findMany({
    where: {
      isAccessoryProduct: true,
      category: {
        categoryUniqueName: params.category
      }
    }
  })
  return (
    <Suspense>
      <div className='grid grid-cols-4 gap-10 my-10'>
        {allProducts.map(x => <ProductAccessoryCard key={x.id} product={x} />)}
      </div>
    </Suspense>
  )
}

export default CategoryPhuKienPage
