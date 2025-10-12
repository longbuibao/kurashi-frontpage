import React from 'react'
import Image from 'next/image'

import { ProductQueryResult } from '@/types'

interface ProductCardProps {
  product: Partial<ProductQueryResult>
  lng: string
}

const ProductCard: React.FC<ProductCardProps> = ({ product, lng }) => {
  return (
    <div className='product-card--hover w-60 h-96 group flex flex-col items-center max-sm:w-full relative'>
      <div className='bg-secondary overflow-hidden z-10 h-full'>
        <Image className='transform transition-transform duration-500 h-full' src={product.thumbnail ?? '#'} alt='product thumbnail' width={640} height={360} />
      </div>
      <div className='font-bold max-md:text-base mt-5'>
        {product.name?.toUpperCase() ?? '#'}
      </div>
    </div>
  )
}

export default ProductCard
