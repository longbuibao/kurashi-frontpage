import React, { Suspense } from 'react'

import { ProductInfo } from '@/components/product'
import ProductIdSkeleton from './product-id-skeleton'

import prisma from '@/lib/prisma'

interface PageParam {
  params: { lng: string, id: string }
}

const GetProductPage = async ({ id, lng }: PageParam['params']): Promise<React.ReactElement> => {
  const product = await prisma.product.findUnique({
    where: { id },
    include: {
      origin: true,
      component: { include: { material: { select: { name: true } } } }
    }
  })

  if (product !== null) {
    return (
      <div className='my-10'>
        <ProductInfo productInfo={product} lng={lng} />
      </div>
    )
  } else throw Error(`Not found this product: ${id}`)
}

const ProductPage: React.FC<PageParam> = ({ params: { lng, id } }: PageParam) => {
  return (
    <Suspense fallback={<ProductIdSkeleton />}>
      <GetProductPage id={id} lng={lng} />
    </Suspense>
  )
}

export default ProductPage
