import React from 'react'
import Image from 'next/image'
import { Prisma } from '@prisma/client'
import Link from 'next/link'
import { createTitleVoiRuaDetailPage } from '@/app/san-pham/voi-rua-cao-cap/utils'

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
  const productUniqueName = x.uniqueName === null || x.uniqueName === undefined ? '#' : x.uniqueName
  const productName = createTitleVoiRuaDetailPage(x)
  return (
    <Link href={`/san-pham/phu-kien-bep/san-pham-phu-kien-bep/${productUniqueName}`} key={x.id} className='rounded-lg w-full group'>
      <div className='mx-auto p-3'>
        <Image className='rounded-xl' src={x.thumbnail ?? '#'} width={1080} height={1080} alt={x.shortIntro ?? ''} />
      </div>
      <div className='m-3 flex flex-row justify-between mt-10 max-md:mt-3'>
        <div className='flex flex-col gap-2'>
          <div className='line-clamp-1 max-md:text-sm'>{productName}</div>
        </div>
        <div className='flex flex-col gap-3 justify-between'>
          <div className='flex flex-row gap-3 justify-end'>
            {x.ProductColor !== undefined
              ? x.ProductColor.map(y => {
                const className = y.colorHex === '#000' ? 'w-5 h-5 rounded-xl' : 'w-5 h-5 rounded-xl border border-kurashi-border'
                return <div style={{ background: y.colorHex }} className={className} key={y.id} />
              })
              : null}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default VoiRuaCard
