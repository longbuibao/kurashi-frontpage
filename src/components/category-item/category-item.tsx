import React from 'react'
import Image from 'next/image'

interface CategoryItemProps {
  thumbnail: string
  name: string
  numberOfProducts: number
}

const CategoryItem: React.FC<CategoryItemProps> = ({ name, thumbnail, numberOfProducts }) => {
  return (
    <div className='border border-black flex flex-row gap-5 p-5'>
      <div>
        <Image src={thumbnail} alt={`Phụ kiện ${name}`} width={30} height={30} />
        <div>{name}</div>
      </div>
      <div>
        <div className='w-[30px] h-[30px] bg-main'>{numberOfProducts}</div>
      </div>
      <div />
    </div>
  )
}

export default CategoryItem
