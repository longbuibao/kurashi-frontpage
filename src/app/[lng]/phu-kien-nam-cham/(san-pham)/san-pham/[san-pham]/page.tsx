import React, { Suspense } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import prisma from '@/lib/prisma'
import { LeftArrow } from '@/components/svg-icons'
import { OnlineStore } from '@/components/online-store-card'
import { ProductAccessoryCard } from '@/components/product'

import { formatCurrency } from '@/utils'

interface SanPhamPageProps {
  params: { 'san-pham': string }
}

const RelatedProduct: React.FC = async () => {
  const products = await prisma.product.findMany({ take: 5, where: { isAccessoryProduct: true } })
  return <div className='grid grid-rows-1 grid-cols-5 gap-20 max-md:grid-cols-2 max-md:gap-5'>{products.map(x => <ProductAccessoryCard product={x} key={x.id} />)}</div>
}

const SanPhamPage: React.FC<SanPhamPageProps> = async ({ params }) => {
  const productName = params['san-pham']
  const accessoryProduct = await prisma.product.findUnique({
    where: {
      uniqueName: productName,
      isAccessoryProduct: true
    },
    include: {
      productIntro: true,
      category: true,
      ProductColor: true
    }
  })

  const mainIntro = accessoryProduct?.productIntro.find(x => x.isMainIntro)
  const secondaryIntros = accessoryProduct?.productIntro.filter(x => !x.isMainIntro)

  return (
    <div className='mx-auto w-full mb-36'>
      <div className='w-full bg-main-phu-kien'>
        <div className='flex flex-row gap-28 w-4/5 mx-auto max-md:flex-col max-md:gap-5'>
          <div className='flex flex-col gap-16 w-1/2 mx-auto justify-center text-secondary pt-28 pb-40 pl-28 max-md:pb-0 max-md:w-full max-md:pt-5 max-md:pl-5 max-md:text-center'>
            <div className='font-bold text-4xl'>
              {mainIntro?.title}
            </div>
            <div className='text-xl'>{mainIntro?.content}</div>
          </div>
          <div className='w-1/2 mx-auto relative max-md:w-full'>
            <Image className='w-[70%] mt-10 absolute top-1 max-md:w-full max-md:static max-md:mt-5 max-md:top-0' src={mainIntro?.introImg ?? '#'} width={656} height={656} alt={mainIntro?.title ?? ''} />
          </div>
        </div>
      </div>
      <div className='w-4/5 mx-auto my-10'>
        <Link className='w-fit' href={`/phu-kien-nam-cham/${accessoryProduct?.category?.categoryUniqueName ?? ''}`}>
          <LeftArrow width='30' height='30' />
        </Link>
      </div>
      <div className='flex flex-row gap-28 w-4/5 mx-auto mb-10 max-md:flex-col'>
        <div className='w-1/2 flex flex-col gap-14 max-md:w-full'>
          {secondaryIntros?.sort((x, y) => x.order - y.order).filter(y => !y.isProductInfo).map(x => (
            <div key={x.id} className='flex flex-col gap-2'>
              <Image src={x.introImg} width={800} height={800} alt={x.title} />
              <div>{x.content}</div>
            </div>
          ))}
        </div>
        <div className='w-1/2 max-md:w-full'>
          <div className='sticky top-10'>
            <div className='bg-[#F4F6FA] p-10 rounded-lg flex-col flex gap-20 w-[70%] mt-14 max-md:w-full'>
              <div className='w-full flex flex-col gap-2'>
                <div className='text-2xl font-bold'>{accessoryProduct?.name.toUpperCase()}</div>
                <div className='text-text-phu-kien'>Mã số: {accessoryProduct?.idToShowUser}</div>
              </div>
              <div className='flex flex-col gap-4 text-text-phu-kien'>
                <div className='flex flex-row gap-3'>
                  <div>Màu sắc: </div>
                  {accessoryProduct?.ProductColor.map(x => {
                    const className = `w-5 h-5 rounded-full bg-[${x.colorHex}] border-blog border`
                    return <div key={x.id} className={className} />
                  })}
                </div>
                <div className='flex flex-col gap-2'>
                  {accessoryProduct?.productIntro.filter(x => x.isProductInfo).map(y => {
                    return (
                      <div key={y.id} className='flex flex-row gap-2'>
                        <div>{y.title}:</div>
                        <div>{y.content}</div>
                      </div>
                    )
                  })}
                </div>
                <div className='flex flex-row gap-2 my-10 text-xl relative'>
                  <div>ĐƠN GIÁ: </div>
                  <div>{formatCurrency(accessoryProduct?.price ?? 0)} <sub className='absolute top-1'>₫</sub></div>
                </div>
                <OnlineStore isCenter />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='text-2xl mt-24 mx-auto w-4/5'>Phụ kiện liên quan</div>
      <div className='flex flex-col gap-10 w-4/5 mx-auto mt-10'>
        <Suspense>
          <RelatedProduct />
        </Suspense>
      </div>
    </div>
  )
}

export default SanPhamPage
