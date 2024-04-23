import React, { Suspense } from 'react'
import Link from 'next/link'

import prisma from '@/lib/prisma'
import { createCategoryMapToProducts } from '@/utils'
import { ProductCard } from '@/components/product'
import { SectionTitle } from '@/components/section-title'
import { Breadcrumb } from '@/components/breadcrumb'
import { useTranslation } from '@/i18n'
import { v4 as uuidv4 } from 'uuid'
import { KurashiDiv, KurashiLeftBorder } from '@/components/kurashi-div'
import * as transKey from '@/i18n/all-products-trans-key'
import AllProductsSkeleton from './skeleton'

interface PageParam {
  params: { lng: string }
}

export const metadata = {
  title: 'Tất cả sản phẩm'
}

const AllProducts: React.FC<{ lng: string }> = async ({ lng }) => {
  const { t } = await useTranslation(lng, transKey.namespace)
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
  const productsWithCategory = createCategoryMapToProducts(products)

  return (
    <div>
      <div className='w-4/5 mx-auto my-8 flex flex-row max-lg:flex-col'>
        <div>
          <div className='mb-5 max-lg:w-fit max-lg:mx-auto'>
            <KurashiLeftBorder>
              {t(transKey.categories)}
            </KurashiLeftBorder>
          </div>
          <div className='flex flex-col max-lg:flex-row max-lg:items-center max-lg:flex-wrap gap-5 max-lg:w-fit max-lg:mx-auto'>
            {Array.from(productsWithCategory.keys()).map(x => (
              <div className='w-fit hover:cursor-default' key={uuidv4()}>
                <KurashiDiv>
                  {t(x)}
                </KurashiDiv>
              </div>
            ))}
          </div>
        </div>
        <div className='flex-1 my-10'>
          {Array.from(productsWithCategory).map(category => (
            <div key={category[0]} className='mb-10'>
              <div className='mx-auto w-fit'>
                <SectionTitle title={t(category[0])} />
              </div>
              <div className='flex flex-wrap gap-5 justify-center items-center my-5'>
                {category[1].map(product => (
                  <Link key={product.id} href={`/products/product-detail/${product.id}`}>
                    <ProductCard product={product} lng={lng} />
                  </Link>))}
              </div>
            </div>
          ))}
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
