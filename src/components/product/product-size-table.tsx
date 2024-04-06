'use client'

import React from 'react'
import { Prisma } from '@prisma/client'
import { v4 as uuidv4 } from 'uuid'
import { Table, Column, HeaderCell, Cell } from 'rsuite-table'
import 'rsuite-table/dist/css/rsuite-table.css'

import { cellRenderer, columnsKey } from '@/utils/cell-renderer-helper'
import { useTranslationClient } from '@/i18n/client-side'
import { tableHeaderRow } from '@/utils'
import * as transKey from '@/i18n/product-table-trans-keys'

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

const ProductSizeTable: React.FC<ProductSizeTableProps> = ({ variants, lng }) => {
  const { t } = useTranslationClient(lng, transKey.namespace, {})
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
          dimensions.set(tableHeaderRow.manualLink, x.size?.productManual ?? '#')
          dimensions.set(tableHeaderRow.productId, x.size?.productId ?? '#')
          dimensions.set(tableHeaderRow.xdfLink, x.size?.twoDimCad ?? '#')
          dimensions.set(t(tableHeaderRow.productQuantity), x.size?.quantity.toString() ?? '#')
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
        <div className='flex flex-row gap-1 items-center justify-center my-2'>
          <i className='fa-solid fa-up-right-and-down-left-from-center' />
          {variants.variantName}
        </div>
        <div>
          {t(transKey.unit)} {variants.unit}
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
            const label = t(cellRenderer.get(x)?.label)
            return (
              <Column key={uuidv4()} flexGrow={1}>
                <HeaderCell style={{ background: '#437254' }} align='center' className='text-secondary font-semibold'>
                  {label !== '' ? label : x}
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
