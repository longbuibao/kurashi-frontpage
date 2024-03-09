import React, { Suspense } from 'react'

import { ProductInfo } from '@/components/product'
import { kurashiFetcher } from '@/utils/kurashi-fetcher'
import ProductIdSkeleton from './product-id-skeleton'

interface PageParam {
  params: { lng: string, id: string }
}

const GetProductPage = async ({ id, lng }: PageParam['params']): Promise<React.ReactElement> => {
  const product = await kurashiFetcher(`http://localhost:3001/${id}`)
  return (
    <>
      <ProductInfo kurashiProductInformation={product} lng={lng} />
    </>
  )
}

const ProductPage: React.FC<PageParam> = ({ params: { lng, id } }: PageParam) => {
  return (
    <Suspense fallback={<ProductIdSkeleton />}>
      <GetProductPage id={id} lng={lng} />
    </Suspense>
  )
}

export default ProductPage
