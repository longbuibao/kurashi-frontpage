import React from 'react'
import Image from 'next/image'
import { Prisma } from '@prisma/client'
import Link from 'next/link'

type ProductQueryType = Prisma.ProductGetPayload<{
  where: {
    isTrendingProduct: true
    isAccessoryProduct: true
  }
  include: {
    category: true
    ProductColor: true
  }
}>

interface ProductAccessoryCardProps {
  product: Partial<ProductQueryType>
}

const ProductAccessoryCard: React.FC<ProductAccessoryCardProps> = ({ product: x }) => {
  const productUniqueName = x.uniqueName === null || x.uniqueName === undefined ? '#' : x.uniqueName
  const productUrl = `/phu-kien-nam-cham/san-pham/${productUniqueName}`
  return (
    <Link href={productUrl} key={x.id} className='border border-kurashi-border rounded-lg w-full shadow-lg'>
      <div className='mx-auto p-3'>
        <Image className='rounded-xl' src={x.thumbnail ?? '#'} width={1080} height={1080} alt='Phụ kiện nam châm' />
      </div>
      <div className='m-3'>
        <div className='flex flex-col gap-2'>
          <div className='text-opacity-20 text-black'>{x.category?.name}</div>
          <div className='font-bold'>{x.name}</div>
        </div>
        <div className='flex flex-row justify-between mt-3'>
          <div className='flex flex-row gap-3'>
            {x.ProductColor !== undefined
              ? x.ProductColor.map(y => {
                const className = `w-5 h-5 rounded-xl bg-[${y.colorHex}] border border-kurashi-border`
                return <div className={className} key={y.id} />
              })
              : null}
          </div>
          <div className='text-main font-bold'>$ <span>{x.price}</span></div>
        </div>
      </div>
    </Link>
  )
}

export default ProductAccessoryCard
