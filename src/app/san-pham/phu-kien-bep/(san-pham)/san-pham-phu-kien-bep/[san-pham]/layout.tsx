import React, { Suspense } from 'react'

import { getCategories } from '../../../get-categories'
import ShopByCategory from '../../../shop-by-category'

interface SanPhamLayoutProps {
  children: React.ReactNode
  params: Promise<{ 'san-pham': string }>
}

const SanPhamLayout: React.FC<SanPhamLayoutProps> = async ({ children }) => {
  const categories = await getCategories()
  return (
    <Suspense>
      {children}
      <div className='w-4/5 max-md:w-[90%] mx-auto mb-36'>
        <div className='text-2xl my-10 max-md:text-center'>Mua hàng theo loại phụ kiện</div>
        <ShopByCategory categories={categories} />
      </div>
    </Suspense>
  )
}

export default SanPhamLayout
