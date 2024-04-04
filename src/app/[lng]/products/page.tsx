import React, { Suspense } from 'react'
import Link from 'next/link'

import prisma from '@/lib/prisma'
import { createCategoryMapToProducts } from '@/utils'
import { ProductCard } from '@/components/product'
import { SectionTitle } from '@/components/section-title'
import { Breadcrumb } from '@/components/breadcrumb'
import { useTranslation } from '@/i18n'
import * as transKey from '@/i18n/all-products-trans-key'

interface PageParam {
  params: { lng: string }
}

const ProductPage: React.FC<PageParam> = async ({ params: { lng } }: PageParam) => {
  const { t } = await useTranslation(lng, transKey.namespace)
  const products = await prisma.product.findMany({
    where: { isAvailable: true },
    take: 20,
    include: { category: { select: { name: true, id: true } }, ProductColor: true, ProductTag: true }
  })
  const productsWithCategory = createCategoryMapToProducts(products)

  const breadcrumb = [
    <Link href='/' key='a'>{t(transKey.home)}</Link>,
    <Link href='/products' key='b'>{t(transKey.allProducts)}</Link>
  ]

  return (
    <Suspense>
      <div>
        <div className='w-4/5 mx-auto flex flex-row my-10'>
          <div>
            <div className='flex flex-row gap-5 items-center justify-center self-start ml-auto'>
              <Breadcrumb items={breadcrumb} separator={<i className='fa-solid fa-chevron-right' />} />
            </div>
          </div>
        </div>
        <div className='w-4/5 mx-auto my-11 flex flex-col'>
          {Array.from(productsWithCategory).map(category => (
            <div key={category[0]}>
              <div className='mx-auto w-fit my-10'>
                <SectionTitle title={category[0]} />
              </div>
              <div className='flex flex-wrap gap-5 justify-center items-center'>
                {category[1].map(product => (
                  <Link key={product.id} href={`/products/product-detail/${product.id}`}>
                    <ProductCard product={product} lng={lng} />
                  </Link>))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Suspense>

  )
}

export default ProductPage
