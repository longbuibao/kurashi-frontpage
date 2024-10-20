import React, { Suspense } from 'react'

interface SanPhamLayoutProps {
  children: React.ReactNode
  params: { 'san-pham': string }
}

const SanPhamLayout: React.FC<SanPhamLayoutProps> = ({ params, children }) => {
  return <Suspense>{children}</Suspense>
}

export default SanPhamLayout
