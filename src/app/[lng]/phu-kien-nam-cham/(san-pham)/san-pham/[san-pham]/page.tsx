import React, { Suspense } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import prisma from '@/lib/prisma'
import { LeftArrow } from '@/components/svg-icons'
import { OnlineStore } from '@/components/online-store-card'
import { ProductAccessoryCard } from '@/components/product'

interface SanPhamPageProps {
  params: { 'san-pham': string }
}

const RelatedProduct: React.FC = async () => {
  const products = await prisma.product.findMany({ take: 4, where: { isAccessoryProduct: true } })
  return <div className='grid grid-rows-2 grid-cols-2 gap-5'>{products.map(x => <ProductAccessoryCard product={x} key={x.id} />)}</div>
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
    <div className='mx-auto w-full'>
      <div className='flex flex-row gap-10 bg-main-phu-kien'>
        <div className='flex flex-col gap-20 w-1/3 mx-auto justify-center text-secondary pt-28 pb-40 pl-28'>
          <div className='font-bold text-4xl'>
            {mainIntro?.title}
          </div>
          <div>{mainIntro?.content}</div>
        </div>
        <div className='w-[25%] mx-auto relative'>
          <Image className='w-full mt-10 absolute top-2' src={mainIntro?.introImg ?? '#'} width={656} height={656} alt={mainIntro?.title ?? ''} />
        </div>
      </div>
      <div className='w-4/5 mx-auto my-10'>
        <Link href={`/phu-kien-nam-cham/${accessoryProduct?.category?.categoryUniqueName ?? ''}`}>
          <LeftArrow width='30' height='30' />
        </Link>
      </div>
      <div className='flex flex-row gap-28 w-1/2 mx-auto mb-10'>
        <div className='w-1/2 flex flex-col gap-10'>
          {secondaryIntros?.filter(y => !y.isProductInfo).map(x => (
            <div key={x.id} className='flex flex-col gap-5'>
              <Image src={x.introImg} width={800} height={800} alt={x.title} />
              <div>{x.content}</div>
            </div>
          ))}
        </div>
        <div className='w-1/2'>
          <div className='sticky top-20'>
            <div className='bg-[#F4F6FA] p-5 rounded-lg flex-col flex gap-20'>
              <div className='w-full flex flex-col gap-2'>
                <div className='text-2xl font-bold'>{accessoryProduct?.name}</div>
                <div>Mã số: {accessoryProduct?.uniqueName}</div>
              </div>
              <div className='flex flex-col gap-4'>
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
                <div className='flex flex-row gap-2 my-10 text-xl'>
                  <div>Giá: </div>
                  <div>{accessoryProduct?.price}</div>
                  <div>VND</div>
                </div>
                <OnlineStore isCenter />
              </div>
            </div>
            <div className='flex flex-col gap-10 w-4/5'>
              <div className='text-2xl mt-10 pb-5 border-b-main border-b-[0.5px] w-fit'>Phụ kiện liên quan</div>
              <Suspense>
                <RelatedProduct />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SanPhamPage
