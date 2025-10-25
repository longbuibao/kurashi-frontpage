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
    <div className='flex flex-col gap-5'>
      {newAccessories.map(x => (
        <div key={x.id} className='p-3 flex group flex-row gap-3 border-b-[0.5px] border-kurashi-border border-dashed w-[90%] pb-3 max-md:w-full'>
          <div className='w-12'>
            <Image src={x.thumbnail} alt='Phụ kiện thép tráng men' width={1080} height={1080} />
          </div>
          <div className='flex flex-col gap-2'>
            <div className='text-text-phu-kien font-bold text-nowrap'>{x.name}</div>
          </div>
        </div>))}
    </div>
  )
}

export default PhuKienNew
