import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import prisma from '@/lib/prisma'
import { SecondaryCategory } from '@prisma/client'

const SubCategoryCard: React.FC<{ subCategory: SecondaryCategory }> = ({ subCategory }) => {
  return (
    <div className='flex flex-row gap-3 bg-blog p-3'>
      <div className='flex flex-col gap-5 justify-center'>
        <div className='font-bold'>{subCategory.content}</div>
        <Link className='w-fit mx-auto p-2 rounded-lg text-secondary bg-main mt-5' href={subCategory.url}>Shop now</Link>
      </div>
      <div className='w-1/2'>
        <Image src={subCategory.thumbnail} width={300} height={400} alt='Phụ kiện nam châm' />
      </div>
    </div>
  )
}

const SubCategories: React.FC = async () => {
  const subCategories = await prisma.secondaryCategory.findMany({
    take: 3
  })
  return <div className='flex flex-row gap-10 my-10'>{subCategories.map(x => <SubCategoryCard key={x.id} subCategory={x} />)}</div>
}

export default SubCategories
