import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface CategoryProps {
  count: number
  name: string | undefined
  thumbnail: string | undefined
  key: string | undefined
  url: string | undefined
}

interface ShopByCategoryProps {
  categories: CategoryProps[]
}

interface ShopByCategoryCardProps {
  category: CategoryProps
}

const ShopByCategoryCard: React.FC<ShopByCategoryCardProps> = ({ category }) => {
  return (
    <Link href={`/san-pham/phu-kien-bep/${category.url ?? '#'}`} className='flex flex-col gap-10 items-center p-10 max-md:p-5 rounded-lg bg-main-phu-kien hover:bg-main-phu-kien'>
      <div className='w-20'><Image src={category.thumbnail ?? '#'} width={100} height={100} alt='Phụ kiện thép tráng men' /></div>
      <div className='font-bold'>{category.name}</div>
    </Link>
  )
}

const ShopByCategory: React.FC<ShopByCategoryProps> = ({ categories }) => {
  return (
    <div className='flex flex-row justify-between max-md:grid max-md:grid-cols-2 max-md:gap-10 max-md:w-4/5 max-md:mx-auto'>
      {categories.map(x => <ShopByCategoryCard key={x.key} category={x} />)}
    </div>
  )
}

export default ShopByCategory
