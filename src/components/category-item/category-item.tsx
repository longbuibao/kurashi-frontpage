import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface CategoryItemProps {
  thumbnail: string
  name: string
  numberOfProducts: number
  url: string
}

const CategoryItem: React.FC<CategoryItemProps> = ({ name, thumbnail, numberOfProducts, url }) => {
  return (
    <Link href={`/phu-kien-nam-cham/${url}`} className='border border-kurashi-border rounded-lg flex flex-row gap-5 justify-between p-2 items-center'>
      <div className='flex flex-row gap-3 items-center'>
        <Image src={thumbnail} alt={`Phụ kiện ${name}`} width={40} height={40} />
        <div>{name}</div>
      </div>
      <div className='w-[25px] h-[25px] rounded-full flex flex-col justify-center bg-count-bg text-center text-count-text'>{numberOfProducts}</div>
    </Link>
  )
}

export default CategoryItem
