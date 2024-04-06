'use client'

import React from 'react'
import { Prisma } from '@prisma/client'
import { v4 as uuidv4 } from 'uuid'
import { Table, Column, HeaderCell, Cell } from 'rsuite-table'
import 'rsuite-table/dist/css/rsuite-table.css'

import { cellRenderer, columnsKey } from '@/utils/cell-renderer-helper'

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
      unit: true
    }
  }>
  lng: string
}

const ProductSizeTable: React.FC<ProductSizeTableProps> = async ({ variants, lng }) => {
  const columns = variants.product.reduce((result, x) => {
    x.size?.dimension.forEach(y => {
      if (!result.has(y.name)) {
        result.add(y.name)
        return result
      } else return result.add(y.name)
    })
    return result
  }, columnsKey)

  const toRender = variants.product
    .map(x => {
      if (x.size !== null) {
        const dimensions = x.size.dimension.reduce((result, y) => {
          result.set(y.name, y.value.toString())
          return result
        }, new Map<string, string>())

        if (dimensions !== undefined) {
          dimensions.set('manualLink', x.size?.productManual ?? '#')
          dimensions.set('productId', x.size?.productId ?? '#')
          dimensions.set('xdfLink', x.size?.twoDimCad ?? '#')
          dimensions.set('productQuantity', x.size?.quantity.toString() ?? '#')
        }

        return dimensions
      }

      return new Map<string, string>()
    })
    .filter(x => x.size > 0)
    .map(x => Object.fromEntries(x))

  return (
    <div>
      <div className='flex flex-row justify-between w-full'>
        <div>
          {variants.variantName}
        </div>
        <div>
          {variants.unit}
        </div>
      </div>
      <div>
        <Table
          autoHeight
          bordered
          cellBordered
          defaultExpandAllRows
          data={toRender}
        >
          {Array.from(columns).map(x => {
            return (
              <Column key={uuidv4()} flexGrow={1}>
                <HeaderCell style={{ background: '#437254' }} align='center' className='text-secondary font-semibold'>
                  {cellRenderer.get(x)?.label ?? x}
                </HeaderCell>
                {cellRenderer.get(x)?.renderer ?? <Cell align='center' dataKey={x} />}
              </Column>
            )
          })}
        </Table>
      </div>
    </div>

  )
}

export default ProductSizeTable
