import React from 'react'

import prisma from '@/lib/prisma'
import { ProductAccessoryCard } from '@/components/product'

const AllAccessoriesProducts: React.FC = async () => {
  const products = await prisma.product.findMany({
    where: {
      isTrendingProduct: true,
      isAccessoryProduct: true
    },
    include: {
      category: true,
      ProductColor: true
    }
  })

  return (
    <div className='grid grid-cols-4 gap-10'>
      {products.map(x => <ProductAccessoryCard key={x.id} product={x} />)}
    </div>
  )
}

export default AllAccessoriesProducts
