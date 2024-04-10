import React from 'react'
import dynamic from 'next/dynamic'

const ImageGallery = dynamic(async () => (await import('@/components/image-gallery')).ImageGallery, { ssr: false })

export const metadata = {
  title: 'Thư viện hình ảnh'
}

const ProductGallery: React.FC = () => {
  return (
    <div className='w-4/5 mx-auto my-10'>
      <ImageGallery />
    </div>
  )
}

export default ProductGallery
