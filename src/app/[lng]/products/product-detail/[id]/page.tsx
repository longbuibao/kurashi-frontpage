import React, { Suspense } from 'react'
import type { Metadata, ResolvingMetadata } from 'next'

import ProductInfo from './product-info'
import ProductIdSkeleton from './product-id-skeleton'
import { useTranslation } from '@/i18n'
import { kurashiProduct } from '@/i18n/translation-key'

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
      title: t(kurashiProduct)
    }
  } else {
    const title = t(metadata?.Product.name)
    return {
      title
    }
  }
}

const ProductPage: React.FC<PageParam> = ({ params: { lng, id } }: PageParam) => {
  return (
    <div className='my-10 mx-auto w-full max-lg:my-0'>
      <Suspense fallback={<ProductIdSkeleton />}>
        <ProductInfo id={id} lng={lng} />
      </Suspense>
    </div>
  )
}

export default ProductPage
