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
  const keys = new Map<string, string>()
  keys.set('productId', 'product-id')
  keys.set('manualLink', 'manual-link')
  keys.set('xdfLink', 'xdf-link')
  keys.set('productQuantity', 'quantity')

  const columnsKey = new Set<string>()
  columnsKey.add('productId')
  columnsKey.add('manualLink')
  columnsKey.add('xdfLink')
  columnsKey.add('productQuantity')

  const toRenderLink = new Set<string>()
  toRenderLink.add('productId')
  toRenderLink.add('xdfLink')
  toRenderLink.add('manualLink')

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
    .filter(x => x !== undefined)
    .map(x => Object.fromEntries(x))

  return (
    <div>
      <div>
        {variants.variantName}
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
                <HeaderCell style={{ background: '#437254' }} align='center' className='text-secondary font-semibold'>{keys.get(x) ?? x}</HeaderCell>
                {toRenderLink.has(x)
                  ? (
                    <Cell align='center'>
                      {(rowData, rowIndex) => {
                        const hack = rowData as any as { [key: string]: string }
                        const download = <div><a href={`/${hack[x]}`}><i className='fa-solid fa-file-arrow-down' /></a></div>
                        return download
                      }}
                    </Cell>)
                  : <Cell align='center' dataKey={x} />}
              </Column>
            )
          })}
        </Table>
      </div>
    </div>

  )
}

export default ProductSizeTable
