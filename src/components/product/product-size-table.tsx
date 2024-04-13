'use client'

import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Table, Column, HeaderCell, Cell } from 'rsuite-table'
import 'rsuite-table/dist/css/rsuite-table.css'

import { cellRenderer } from '@/utils/cell-renderer-helper'
import { useTranslationClient } from '@/i18n/client-side'
import * as transKey from '@/i18n/product-table-trans-keys'

interface ProductSizeTableProps {
  columns: Set<string>
  toRender: any
  lng: string
}

const ProductSizeTable: React.FC<ProductSizeTableProps> = ({ columns, toRender, lng }) => {
  const { t } = useTranslationClient(lng, transKey.namespace, {})
  return (
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
  )
}

export default ProductSizeTable
