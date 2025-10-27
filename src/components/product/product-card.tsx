import React from 'react'
import Image from 'next/image'

import { ProductQueryResult } from '@/types'

interface ProductCardProps {
  product: Partial<ProductQueryResult>
  lng: string
}

const ProductCard: React.FC<ProductCardProps> = ({ product, lng }) => {
  return (
    <div className='product-card--hover w-96 h-[35rem] max-md:w-auto max-md:h-auto group flex flex-col items-center max-sm:w-full relative'>
      <div className='bg-secondary overflow-hidden z-10 h-full'>
        <Image className='transform transition-transform duration-500 h-full' src={product.thumbnail ?? '#'} alt='product thumbnail' width={640} height={360} />
      </div>
      <div className='font-semibold mt-5 max-md:text-[0.75rem] max-md:font-normal max-md:text-left max-md:w-full'>
        {product.name?.toUpperCase() ?? '#'}
      </div>
    </div>
  )
}

export default ProductCard
