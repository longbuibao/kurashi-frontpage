import React from 'react'
import Image from 'next/image'

import prisma from '@/lib/prisma'

const AllAccessoriesProducts: React.FC = async () => {
  const products = await prisma.product.findMany({
    where: {
      isTrendingProduct: true,
      isAccessoryProduct: true
    },
    include: {
      category: true,
      ProductColor: true
    }
  })
  return (
    <div className='grid grid-cols-4 gap-10'>
      {products.map(x => (
        <div key={x.id} className='border border-kurashi-border rounded-lg w-full'>
          <div className='mx-auto p-3'>
            <Image src={x.thumbnail} width={1080} height={1080} alt='Phụ kiện nam châm' />
          </div>
          <div className='m-3'>
            <div className='flex flex-col gap-2'>
              <div className='text-opacity-20 text-black'>{x.category?.name}</div>
              <div className='font-bold'>{x.name}</div>
            </div>
            <div className='flex flex-row justify-between mt-3'>
              <div className='flex flex-row gap-3'>
                {x.ProductColor.map(y => {
                  const className = `w-5 h-5 rounded-xl bg-[${y.colorHex}] border border-kurashi-border`
                  return <div className={className} key={y.id} />
                }
                )}
              </div>
              <div className='text-main font-bold'>$ <span>{x.price}</span></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AllAccessoriesProducts
