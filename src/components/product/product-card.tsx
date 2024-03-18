import React from 'react'

import { useTranslation } from '@/i18n'

import { Product } from '@prisma/client'

interface ProductCardProps {
  product: Product
  lng: string
}

const ProductCard: React.FC<ProductCardProps> = async ({ product, lng }) => {
  const { t } = await useTranslation(lng)
  return (
    <div className='flex flex-col items-center bg-secondary bg-opacity-[0.7] rounded-md hover:shadow-xl'>
      <div className='p-5 rounded-md'>
        <img className='w-64' src={product.thumbnail} alt='product thumbnail' />
      </div>
      <div className='my-3 hover:cursor-pointer font-semibold hover:text-main'>{t(product.name)}</div>
    </div>
  )
}

export default ProductCard
