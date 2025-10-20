import React, { Suspense } from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import prisma from '@/lib/prisma'
import { getMetadata } from '@/utils'
import { ProductCard } from '@/components/product'
import { v4 as uuidv4 } from 'uuid'
import AllProductsSkeleton from './skeleton'
import { lng } from '@/app/const'
import { UrlObject } from 'url'

export async function generateMetadata (): Promise<Metadata> {
  const defaultTitle = 'Tất cả sản phẩm'
  const pageName = 'all-products'
  return await getMetadata(pageName, defaultTitle)
}

const AllProducts: React.FC<{ lng: string }> = async () => {
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
    <div className='w-4/5 mx-auto my-10'>
      <div className='w-full border-b-2 border-main'>
        <div className='text-3xl font-bold w-[30%] max-md:w-full pb-10'>GIẢI PHÁP NỘI THẤT TIÊN TIẾN TỪ NHẬT BẢN</div>
      </div>
      <div className='w-1/2 pt-10 max-md:w-full'>
        <div>Các giải pháp nội thất tiên tiến nhất về công nghệ vật liệu, thiết kế và gia công với chất lượng made in Japan để ngôi nhà luôn là nơi thoải mái nhất cho cả gia đình bạn.</div>
      </div>
      <div className='my-5 flex flex-row max-lg:flex-col'>
        <div className='flex-1 my-10'>
          <div className='grid grid-cols-3 grid-rows-2 gap-10 mx-auto place-items-center w-full max-md:grid-cols-1'>
            {products.sort((x, y) => x.order - y.order).map(x => {
              const url = x.landingPageUrl as any as UrlObject
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

const ProductPage: React.FC = async () => {
  return (
    <Suspense fallback={<AllProductsSkeleton />}>
      <AllProducts lng={lng} />
    </Suspense>
  )
}

export default ProductPage
