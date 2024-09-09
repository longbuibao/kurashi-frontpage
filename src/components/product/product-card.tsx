import React from 'react'
import Image from 'next/image'

import { useTranslation } from '@/i18n'
import { ProductQueryResult } from '@/types'

interface ProductCardProps {
  product: Partial<ProductQueryResult>
  lng: string
}

const ProductCard: React.FC<ProductCardProps> = async ({ product, lng }) => {
  const { t } = await useTranslation(lng)
  return (
    <div className='flex flex-col items-center rounded-md w-96 max-sm:w-full'>
      <div className='rounded-md bg-secondary'>
        <Image src={product.thumbnail ?? '#'} alt='product thumbnail' className='object-center' width={400} height={400} />
      </div>
      <div className='hover:cursor-pointer hover:text-main mt-5'>{t(product.name ?? '#')}</div>
    </div>
  )
}

export default ProductCard
