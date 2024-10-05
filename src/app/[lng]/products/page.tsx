import React, { Suspense } from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import { Product } from '@prisma/client'

import prisma from '@/lib/prisma'
import { getMetadata } from '@/utils'
import { ProductCard } from '@/components/product'
import { Breadcrumb } from '@/components/breadcrumb'
import { useTranslation } from '@/i18n'
import { v4 as uuidv4 } from 'uuid'
import * as transKey from '@/i18n/all-products-trans-key'
import AllProductsSkeleton from './skeleton'

interface PageParam {
  params: { lng: string }
}

export async function generateMetadata (): Promise<Metadata> {
  const defaultTitle = 'Tất cả sản phẩm'
  const pageName = 'all-products'
  return await getMetadata(pageName, defaultTitle)
}

const AllProducts: React.FC<{ lng: string }> = async ({ lng }) => {
  const products = await prisma.product.findMany({
    where: { isAvailable: true },
    take: 20,
    include: {
      category: {
        select: {
          name: true, id: true
        }
      },
      ProductColor: true,
      ProductTag: true
    }
  })

  return (
    <div className='w-4/5 mx-auto'>
      <div className='w-full border-b-2 border-main'>
        <div className='text-3xl font-bold w-[30%] max-md:w-full pb-10'>GIẢI PHÁP NỘI THẤT TIÊN TIẾN TỪ NHẬT BẢN</div>
      </div>
      <div className='w-1/2 pt-10 max-md:w-full'>
        <div>Các giải pháp nội thất tiên tiến nhất về công nghệ vật liệu, thiết kế và gia công với chất lượng made in Japan để ngôi nhà luôn là nơi thoải mái nhất cho cả gia đình bạn.</div>
      </div>
      <div className='my-5 flex flex-row max-lg:flex-col'>
        <div className='flex-1 my-10'>
          <div className='flex flex-row gap-5 justify-center items-center max-md:flex-col'>
            {products.sort((x, y) => x.order - y.order).map(x => {
              const dummy = x as Product
              const url = dummy.hasLandingPage ? x.landingPageUrl : `/products/product-detail/${dummy.id}`
              return (
                <Link key={uuidv4()} href={url}>
                  <ProductCard lng='vi' product={x} />
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

const ProductPage: React.FC<PageParam> = async ({ params: { lng } }: PageParam) => {
  const { t } = await useTranslation(lng, transKey.namespace)
  const breadcrumb = [
    <Link href='/' key='a'>{t(transKey.home)}</Link>,
    <Link href='/products' key='b'>{t(transKey.allProducts)}</Link>
  ]

  return (
    <div>
      <div className='w-4/5 mx-auto flex flex-row my-10'>
        <div className='max-lg:flex-1'>
          <div className='flex flex-row gap-5 items-center justify-center self-start ml-auto'>
            <Breadcrumb items={breadcrumb} separator={<i className='fa-solid fa-chevron-right' />} />
          </div>
        </div>
      </div>
      <Suspense fallback={<AllProductsSkeleton />}>
        <AllProducts lng={lng} />
      </Suspense>
    </div>
  )
}

export default ProductPage
