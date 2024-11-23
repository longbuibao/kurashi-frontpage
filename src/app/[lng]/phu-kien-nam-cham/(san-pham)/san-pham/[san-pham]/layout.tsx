import React, { Suspense } from 'react'

import { getCategories } from '../../../get-categories'
import ShopByCategory from '../../../shop-by-category'
import { auth } from '@/auth'
import { LoginPage } from '@/components/login'

interface SanPhamLayoutProps {
  children: React.ReactNode
  params: { 'san-pham': string }
}

const SanPhamLayout: React.FC<SanPhamLayoutProps> = async ({ params, children }) => {
  const session = await auth()
  if (session === null) {
    return <LoginPage />
  }

  const categories = await getCategories()
  return (
    <Suspense>
      {children}
      <div className='w-4/5 mx-auto mb-36'>
        <div className='text-2xl my-10 max-md:text-center'>Mua hàng theo loại phụ kiện</div>
        <ShopByCategory categories={categories} />
      </div>
    </Suspense>
  )
}

export default SanPhamLayout
