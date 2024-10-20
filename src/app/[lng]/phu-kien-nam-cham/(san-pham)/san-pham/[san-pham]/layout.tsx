import React from 'react'

interface SanPhamLayoutProps {
  children: React.ReactNode
  params: { 'san-pham': string }
}

const SanPhamLayout: React.FC<SanPhamLayoutProps> = ({ params, children }) => {
  return <div>{params['san-pham']} {children}</div>
}

export default SanPhamLayout
