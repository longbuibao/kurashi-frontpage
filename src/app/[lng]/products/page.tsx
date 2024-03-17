import React from 'react'

interface PageParam {
  params: { lng: string }
}

const ProductPage: React.FC<PageParam> = ({ params: { lng } }: PageParam) => {
  return <div> ALL PRODUCTS {lng}</div>
}

export default ProductPage
