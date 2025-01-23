import React from 'react'
import Image from 'next/image'

import prisma from '@/lib/prisma'
import { formatCurrency } from '@/utils'

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
        <div key={x.id} className='p-3 flex group flex-row gap-3 border-b-[0.5px] border-kurashi-border border-dashed w-[90%] pb-3 hover:bg-main-phu-kien hover:rounded-xl max-md:w-full'>
          <div className='w-12'>
            <Image src={x.thumbnail} alt='Phụ kiện thép tráng men' width={1080} height={1080} />
          </div>
          <div className='flex flex-col justify-center gap-2'>
            <div className='text-main font-bold group-hover:text-kurashiX text-nowrap'>{x.name}</div>
            <div className='text-opacity-10 text-black relative text-sm'>{formatCurrency(x.price)} <sub className='absolute top-1'>₫</sub></div>
          </div>
        </div>))}
    </div>
  )
}

export default PhuKienNew
