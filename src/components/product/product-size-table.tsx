'use client'

import React from 'react'
import { Prisma } from '@prisma/client'
import { v4 as uuidv4 } from 'uuid'
import { Table, Column, HeaderCell, Cell } from 'rsuite-table'
import 'rsuite-table/dist/css/rsuite-table.css'

interface ProductSizeTableProps {
  variants: Prisma.ProductVariantsGetPayload<{
    select: {
      product: {
        select: {
          id: true
          name: true
          size: {
            include: {
              dimension: {
                select: {
                  name: true
                  id: true
                  value: true
                }
              }
            }
          }
        }
      }
      id: true
      thumbnail: true
      variantName: true
    }
  }>
  lng: string
}

const ProductSizeTable: React.FC<ProductSizeTableProps> = async ({ variants, lng }) => {
  const columnsKey = new Set<string>()
  columnsKey.add('productId')
  columnsKey.add('pdfLink')
  columnsKey.add('xdfLink')
  const columns = variants.product.reduce((result, x) => {
    x.size?.dimension.forEach(y => {
      if (!result.has(y.name)) {
        result.add(y.name)
        return result
      } else return result.add(y.name)
    })
    return result
  }, columnsKey)

  return (
    <Table data={variants.product.map(x => x.size?.dimension.reduce((result, y) => {
      result.set(y.name, y.value.toString())
      return result
    }, new Map<string, string>())).filter(x => x !== undefined).map(x => Object.fromEntries(x))}
    >
      {Array.from(columns).map(x => {
        const key = x
        return (
          <Column key={uuidv4()}>
            <HeaderCell>{key}</HeaderCell>
            <Cell dataKey={key} />
          </Column>
        )
      })}
    </Table>
  )
}

export default ProductSizeTable
