import React, { Suspense } from 'react'
import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid'

import { ImageGallery } from '@/components/image-gallery'
import { Breadcrumb } from '@/components/breadcrumb'
import { useTranslation } from '@/i18n'
import * as transKey from '@/i18n/product-gallery-trans-key'
import { SectionTitle } from '@/components/section-title'
import prisma from '@/lib/prisma'
import ProductGallerySkeleton from './skeleton'

export const metadata = {
  title: 'Thư viện hình ảnh'
}

interface PageParam {
  params: { lng: string, id: string }
}

interface GalleryProps {
  id: string
  lng: string
}

const Gallery: React.FC<GalleryProps> = async ({ id, lng }) => {
  const { t } = await useTranslation(lng, transKey.namespace)
  const product = await prisma.product.findUnique({
    where: { id },
    include: {
      productImages: {
        select: {
          imageUrl: true
        }
      }
    }
  })

  const breadcrumb = [
    <Link href='/' key={uuidv4()}>{t(transKey.home)}</Link>,
    <Link href='/products' key={uuidv4()}>{t(transKey.allProducts)}</Link>,
    <Link href={`/products/product-detail/${id}`} key={uuidv4()}>{product?.name ?? 'null'}</Link>,
    <Link href={`/products/product-gallery/${id}`} key={uuidv4()}>{transKey.imageGallery}</Link>
  ]

  return (
    <>
      <div className='my-10 mx-auto flex flex-row max-lg:my-5'>
        <div>
          <div className='flex flex-row gap-5 items-center justify-center self-start ml-auto max-lg:hidden'>
            <Breadcrumb items={breadcrumb} separator={<i className='fa-solid fa-chevron-right' />} />
          </div>
        </div>
      </div>
      <div className='my-10'>
        <div className='mx-auto w-fit my-10'>
          <SectionTitle title={t(transKey.imageGalleryTitle)} />
        </div>
      </div>
      <ImageGallery imgSrc={product?.productImages.map(img => img.imageUrl) ?? []} />
    </>
  )
}

const ProductGallery: React.FC<PageParam> = async ({ params: { id, lng } }) => {
  return (
    <div className='w-4/5 mx-auto my-10'>
      <Suspense fallback={<ProductGallerySkeleton />}>
        <Gallery id={id} lng={lng} />
      </Suspense>
    </div>
  )
}

export default ProductGallery
