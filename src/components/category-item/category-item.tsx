'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface CategoryItemProps {
  thumbnail: string
  name: string
  numberOfProducts: number
  url: string
  noBg?: boolean
}

const CategoryItem: React.FC<CategoryItemProps> = ({ name, thumbnail, numberOfProducts, url, noBg = false }) => {
  const pathname = usePathname()
  const splittedPaths = pathname.split('/')
  const currentCategoryInPath = splittedPaths[splittedPaths.length - 1]
  const className = currentCategoryInPath !== url
    ? 'border border-kurashi-border rounded-lg flex flex-row gap-5 justify-between p-2 items-center group hover:bg-main-phu-kien'
    : `border border-kurashi-border rounded-lg flex flex-row gap-5 justify-between p-2 items-center group ${noBg ? '' : 'bg-main-phu-kien'}`
  return (
    <Link href={`/phu-kien-nam-cham/${url}`} className={className}>
      <div className='flex flex-row gap-3 items-center'>
        <Image src={thumbnail} alt={`Phụ kiện ${name}`} width={40} height={40} />
        <div>{name}</div>
      </div>
      <div className='w-[30px] h-[30px] rounded-full flex flex-col justify-center group-hover:bg-count-bg bg-count-bg text-center text-count-text'>{numberOfProducts}</div>
    </Link>
  )
}

export default CategoryItem
