import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import prisma from '@/lib/prisma'
import { SecondaryCategory } from '@prisma/client'
import { UrlObject } from 'url'

const SubCategoryCard: React.FC<{ subCategory: SecondaryCategory }> = ({ subCategory }) => {
  return (
    <div className='flex flex-row gap-3 bg-main-phu-kien p-3 rounded-xl w-1/3 max-md:w-full'>
      <div className='flex flex-col gap-5 justify-center w-1/2 ml-5'>
        <div className='text-xl'>{subCategory.content}</div>
        <Link className='p-2 rounded-lg flex flex-row items-center gap-5 mt-5' href={subCategory.url as any as UrlObject}>
          <Image src='/images/RightArrow.svg' width={20} height={20} alt='Khám phá phụ kiện bếp nam châm' />
          <div>Khám phá</div>
        </Link>
      </div>
      <div className='w-1/3 ml-auto'>
        <Image className='rounded-xl' src={subCategory.thumbnail} width={300} height={400} alt='Phụ kiện nam châm' />
      </div>
    </div>
  )
}

const SubCategories: React.FC = async () => {
  const subCategories = await prisma.secondaryCategory.findMany({
    take: 3
  })
  return (
    <div className='flex flex-row gap-10 mb-24 mt-40 max-md:flex-col max-md:px-3'>
      {subCategories.map(x => <SubCategoryCard key={x.id} subCategory={x} />)}
    </div>
  )
}

export default SubCategories
