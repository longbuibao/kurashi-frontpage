'use client'

import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Table, Column, HeaderCell, Cell } from 'rsuite-table'
import 'rsuite-table/dist/css/rsuite-table.css'

import { cellRenderer } from '@/utils/cell-renderer-helper'
import { useTranslationClient } from '@/i18n/client-side'
import * as transKey from '@/i18n/product-table-trans-keys'

import { useMediaQuery } from '@/hooks/useMediaQuery'

interface ProductSizeTableProps {
  columns: Set<string>
  toRender: any
  lng: string
}

const ProductSizeTable: React.FC<ProductSizeTableProps> = ({ columns, toRender, lng }) => {
  const { t } = useTranslationClient(lng, transKey.namespace, {})
  const isMobile = useMediaQuery(768)
  return (
    <Table
      autoHeight
      bordered
      cellBordered
      defaultExpandAllRows
      data={toRender}
      headerHeight={isMobile ? 70 : 40}
    >
      {Array.from(columns).map(x => {
        const label = t(cellRenderer.get(x)?.label)
        const width = (x === 'productQuantity') || (x === 'manualLink') ? { width: 150 } : { flexGrow: 1 }
        return (
          <Column key={uuidv4()} {...width}>
            <HeaderCell align='center' style={{ background: '#437254' }}>
              <div className='text-secondary font-semibold max-lg:text-wrap text-center flex justify-center items-center'>
                {label !== '' ? label : x}
              </div>
            </HeaderCell>
            {cellRenderer.get(x)?.renderer ?? <Cell align='center' dataKey={x} />}
          </Column>
        )
      })}
    </Table>
  )
}

export default ProductSizeTable
