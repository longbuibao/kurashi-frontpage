import React from 'react'
import Image from 'next/image'
import { Prisma } from '@prisma/client'
import Link from 'next/link'
import { createTitleVoiRuaDetailPageNormalized } from '@/app/san-pham/voi-rua-cao-cap/utils'
import { UrlObject } from 'url'

type ProductQueryType = Prisma.ProductGetPayload<{
  where: {
    isAvailable: true
    categoryId: {
      in: [
        'f051e783-1535-4822-a78c-341e28b92457'
      ]
    }
  }
  include: {
    ProductColor: true
    productImages: true
    productIntro: true
    category: true
    secondaryCategory: true
    finish: true
    material: true
    productInterface: true
  }
}>

interface ProductVoiRuaCardProps {
  product: ProductQueryType
}

const VoiRuaCard: React.FC<ProductVoiRuaCardProps> = ({ product: x }) => {
  const productUrl = createTitleVoiRuaDetailPageNormalized(x)
  const url = `/san-pham/voi-rua-cao-cap/${productUrl}`
  const title = `${x.category?.name ?? ''} ${x.secondaryCategory?.name ?? ''}`
    .trim()
    .toLowerCase()

  const finalTitle = title.charAt(0).toUpperCase() + title.slice(1)
  return (
    <Link href={url as unknown as UrlObject} key={x.id} className='max-md:h-64 max-md:px-3 rounded-lg w-full group hover:bg-[#F1E9DF] transition-colors duration-300'>
      <div className='mx-auto p-3'>
        <Image className='rounded-xl' src={x.thumbnail ?? '#'} width={1080} height={1080} alt={x.shortIntro ?? ''} />
      </div>
      <div className='text-center max-md:text-sm max-md:mt-3'>
        <div className='font-bold text-text-phu-kien'>{finalTitle}</div>
        <div className='flex flex-row justify-center max-md:mt-3'>
          {x.sku}
        </div>
      </div>

    </Link>
  )
}

export default VoiRuaCard
