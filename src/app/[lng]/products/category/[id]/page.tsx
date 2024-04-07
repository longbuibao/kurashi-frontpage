import React, { Suspense } from 'react'
import { notFound } from 'next/navigation'
import { v4 as uuidv4 } from 'uuid'
import Link from 'next/link'

import prisma from '@/lib/prisma'
import { SectionTitle } from '@/components/section-title'
import { useTranslation } from '@/i18n'
import * as transKey from '@/i18n/all-product-in-category'
import { PaginationBar } from '@/components/pagination-bar'
import { ProductCard } from '@/components/product'
import { Breadcrumb } from '@/components/breadcrumb'
import { createDefaultCategoryProductsLink } from '@/constants'
import * as skeleton from './skeleton'
import { sleep } from '@/utils'

interface PageParam {
  params: { lng: string, id: string, page: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}

const Products: React.FC<{ lng: string, categoryId: string, searchParams: PageParam['searchParams'] }> = async ({ lng, categoryId, searchParams }) => {
  const { t } = await useTranslation(lng, transKey.namespace)
  await sleep(5000)
  const numOfProducts = await prisma.product.count({ where: { categoryId } })
  const products = await prisma.product.findMany({
    where: {
      categoryId
    },
    take: 4
  })

  if (products.length > 0) {
    return (
      <div className='flex-1'>
        <div className='flex flex-row flex-wrap items-center justify-center'>
          {products.map(x => (
            <div className='m-1' key={x.id}>
              <Link key={uuidv4()} href={`/products/product-detail/${x.id}`}>
                <ProductCard lng={lng} product={x} />
              </Link>
            </div>
          ))}
        </div>
        <div className='w-4/5 mx-auto my-10'>
          <PaginationBar maxPages={Math.round(numOfProducts / 4)} lng={lng} baseLink={createDefaultCategoryProductsLink(categoryId)} />
        </div>
      </div>
    )
  }

  return <div>{t(transKey.weAreUpdating)}</div>
}

const Category: React.FC<{ lng: string, id: string }> = async ({ lng, id }) => {
  await sleep(3000)
  const { t } = await useTranslation(lng, transKey.namespace)
  const category = await prisma.category.findUnique({
    where: { id },
    include: {
      intros: true
    }
  })
  const breadcrumb = [
    <Link href='/' key={uuidv4()}>{t(transKey.home)}</Link>,
    <Link href='/products' key={uuidv4()}>{t(transKey.allProducts)}</Link>,
    <Link href={`/products/category/${id}`} key={uuidv4()}>{category?.name}</Link>
  ]

  if (category != null) {
    return (
      <div>
        <div className='w-4/5 my-10 mx-auto flex flex-row'>
          <div>
            <div className='flex flex-row gap-5 items-center justify-center self-start ml-auto'>
              <Breadcrumb items={breadcrumb} separator={<i className='fa-solid fa-chevron-right' />} />
            </div>
          </div>
        </div>
        <div className='w-4/5 mx-auto flex flex-col gap-10 justify-center items-center max-lg:my-10'>
          {category.intros.map(x => (
            <div key={x.id}>
              <div className='w-fit mx-auto text-center'>
                <SectionTitle title={x.title} />
              </div>
              <div className='my-3'>{x.content}</div>
            </div>
          ))}
        </div>
      </div>

    )
  }

  return notFound()
}

const ProductCategoryPage: React.FC<PageParam> = async ({ params: { id, lng, page }, searchParams }) => {
  const { t } = await useTranslation(lng, transKey.namespace)
  return (
    <div className='my-10 mx-auto w-full max-lg:my-0'>
      <Suspense fallback={<skeleton.CategorySkeleton />}>
        <Category id={id} lng={lng} />
      </Suspense>
      <div className='w-fit mx-auto'>
        <SectionTitle title={t(transKey.allProducts)} />
      </div>
      <Suspense fallback={<skeleton.ProductSkeleton />}>
        <Products categoryId={id} lng={lng} searchParams={searchParams} />
      </Suspense>
    </div>
  )
}

export default ProductCategoryPage
