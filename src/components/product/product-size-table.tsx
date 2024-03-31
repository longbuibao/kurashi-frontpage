import React from 'react'
import { Prisma } from '@prisma/client'

import * as transKey from '@/i18n/product-info-trans-key'
import { useTranslation } from '@/i18n'
import { productNs } from '@/i18n/settings'

interface ProductSizeTableProps {
  product: Partial<Prisma.ProductGetPayload<{ include: {
    size: {
      include: {
        dimension: {
          select: {
            name: true
            value: true
          }
        }
      }
    }
  } }>>
  lng: string
}

const ProductSizeTable: React.FC<ProductSizeTableProps> = async ({ product, lng }) => {
  const { t } = await useTranslation(lng, productNs)
  return (
    <table className='table-auto w-full'>
      <thead className='bg-main text-secondary'>
        <tr>
          <th>{t(transKey.productSizeKey)}</th>
          <th>{t(transKey.productSizeValue)}</th>
        </tr>
      </thead>
      <tbody>
        {product.size?.dimension.map(di => (
          <tr key={di.name} className='bg-opacity-[0.3] bg-main hover:bg-opacity-[0.7]'>
            <td className='text-center'>{di.name}</td>
            <td className='text-center'>
              <div className='flex flex-row w-1/2 mx-auto'>
                <div>{di.value}</div>
                <div className='ml-auto'>{product.size?.unit}</div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ProductSizeTable
