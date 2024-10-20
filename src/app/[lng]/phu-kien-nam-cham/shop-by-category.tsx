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
    <Link href={`/phu-kien-nam-cham/${category.url ?? '#'}`} className='flex flex-col gap-10 items-center p-10 rounded-lg bg-secondary-lg-opacity'>
      <div className='w-20'><Image src={category.thumbnail ?? '#'} width={100} height={100} alt='Phụ kiện thép tráng men' /></div>
      <div className='font-bold'>{category.name}</div>
    </Link>
  )
}

const ShopByCategory: React.FC<ShopByCategoryProps> = ({ categories }) => {
  return <div className='flex flex-row justify-between'>{categories.map(x => <ShopByCategoryCard key={x.key} category={x} />)}</div>
}

export default ShopByCategory
