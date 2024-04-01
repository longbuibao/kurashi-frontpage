import React from 'react'
import { Prisma } from '@prisma/client'
import { v4 as uuidv4 } from 'uuid'

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
            id: true
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
    <table className='table-auto'>
      <thead className='bg-main text-secondary'>
        <tr>
          <th>{t(transKey.productSizeKey)}</th>
          <th>{t(transKey.productSizeValue)}</th>
        </tr>
      </thead>
      <tbody>
        {product.size?.dimension.map(di => (
          <tr key={di.id ?? uuidv4()} className='bg-opacity-[0.3] bg-main hover:bg-opacity-[0.7]'>
            <td className='text-center'>{di.name}</td>
            <td className='text-center'>
              <div className='flex flex-row'>
                <div>{di.value}</div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ProductSizeTable
