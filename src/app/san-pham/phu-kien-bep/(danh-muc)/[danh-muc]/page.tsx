import React, { Suspense } from 'react'

import prisma from '@/lib/prisma'
import { ProductAccessoryCard } from '@/components/product'
import { Metadata } from 'next'

interface PageParam {
  params: Promise<{ 'danh-muc': string }>
}

export async function generateMetadata ({ params }: PageParam): Promise<Metadata> {
  const category = (await params)['danh-muc']
  const cate = await prisma.category.findFirst({
    where: {
      categoryUniqueName: category
    }
  })

  return {
    title: `Phụ kiện ${cate?.name.toLowerCase() ?? 'nam châm'}`
  }
}

export async function generateStaticParams (): Promise<any> {
  const categories = await prisma.category.findMany({ where: { isCategoryOfKitchenAccessories: true } })
  return categories.map(x => { return { 'danh-muc': x.categoryUniqueName } })
}

const CategoryPhuKienPage: React.FC<PageParam> = async props => {
  const params = await props.params
  const allProducts = await prisma.product.findMany({
    where: {
      isAccessoryProduct: true,
      category: {
        categoryUniqueName: params['danh-muc']
      }
    },
    include: {
      category: true,
      ProductColor: true
    }
  })
  return (
    <Suspense>
      <div className='grid grid-cols-4 gap-10 my-10 max-md:grid-cols-2'>
        {allProducts.map(x => {
          return <ProductAccessoryCard key={x.id} product={x} />
        })}
      </div>
    </Suspense>
  )
}

export default CategoryPhuKienPage
