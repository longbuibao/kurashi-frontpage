import React from 'react'
import Image from 'next/image'

import prisma from '@/lib/prisma'

const PhuKienNew: React.FC = async () => {
  const newAccessories = await prisma.product.findMany({
    where: {
      isTrendingProduct: true
    },
    take: 3,
    select: {
      price: true,
      name: true,
      thumbnail: true,
      id: true
    }
  })
  return (
    <div className='flex flex-col gap-10'>
      {newAccessories.map(x => (
        <div key={x.id} className='flex flex-row gap-3 border-b-[0.5px] border-kurashi-border border-dashed w-fit pb-3'>
          <div className='w-12'>
            <Image src={x.thumbnail} alt='Phụ kiện thép tráng men' width={1080} height={1080} />
          </div>
          <div className='flex flex-col justify-center'>
            <div className='text-main font-bold'>{x.name}</div>
            <div className='text-opacity-10 text-black'>$ {x.price}</div>
          </div>
        </div>))}
    </div>
  )
}

export default PhuKienNew
