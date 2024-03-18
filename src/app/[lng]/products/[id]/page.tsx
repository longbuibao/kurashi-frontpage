import React, { Suspense } from 'react'
import type { Metadata, ResolvingMetadata } from 'next'

import { ProductInfo } from '@/components/product'
import ProductIdSkeleton from './product-id-skeleton'
import { KurashiError } from '@/components/kurashi-error'
import { useTranslation } from '@/i18n'

import prisma from '@/lib/prisma'

interface Props {
  params: { id: string, lng: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

interface PageParam {
  params: { lng: string, id: string }
}

export async function generateMetadata ({ params, searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const lng = params.lng
  const { t } = await useTranslation(lng)
  const metadata = await prisma.productMetadata.findUnique({ where: { productId: params.id }, include: { Product: { select: { name: true } } } })

  if (metadata === null || metadata.Product === null) {
    return {
      title: 'Kurashi Product'
    }
  } else {
    const title = t(metadata?.Product.name)
    return {
      title
    }
  }
}

const GetProductPage = async ({ id, lng }: PageParam['params']): Promise<React.ReactElement> => {
  const product = await prisma.product.findUnique({
    where: { id },
    include: {
      origin: true,
      component: { include: { material: { select: { name: true } } } },
      size: {
        include: {
          dimension: {
            select: {
              name: true,
              value: true
            }
          }
        }
      },
      productIntro: true
    }
  })

  if (product !== null) {
    return (
      <div className='my-10 mx-auto w-full max-lg:my-0'>
        <ProductInfo productInfo={product} lng={lng} />
      </div>
    )
  } else return <KurashiError message={`Not found this product: ${id}`} />
}

const ProductPage: React.FC<PageParam> = ({ params: { lng, id } }: PageParam) => {
  return (
    <Suspense fallback={<ProductIdSkeleton />}>
      <GetProductPage id={id} lng={lng} />
    </Suspense>
  )
}

export default ProductPage
