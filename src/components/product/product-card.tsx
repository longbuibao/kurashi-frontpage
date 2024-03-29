import React from 'react'

import { useTranslation } from '@/i18n'
import { ProductQueryResult } from '@/types'
import { Chip } from '@/components/chip'

interface ProductCardProps {
  product: ProductQueryResult
  lng: string
}

const ProductCard: React.FC<ProductCardProps> = async ({ product, lng }) => {
  const { t } = await useTranslation(lng)
  return (
    <div className='flex flex-col items-center bg-secondary bg-opacity-[0.7] rounded-md hover:shadow-xl h-80'>
      <div className='p-5 rounded-md'>
        <img className='w-64' src={product.thumbnail} alt='product thumbnail' />
      </div>
      <div className='my-3 hover:cursor-pointer font-semibold hover:text-main mt-auto'>{t(product.name)}</div>
      <div className='flex flex-row gap-1 mr-auto pl-2 mb-2'>
        {product.ProductTag.map(tag => <Chip text={tag.name} key={tag.id} />)}
      </div>
    </div>
  )
}

export default ProductCard
