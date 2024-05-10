import { Cell } from 'rsuite-table'
import Link from 'next/link'

import { tableHeaderRow } from '.'

const cellRenderer = new Map<string, { label: string, renderer: React.ReactElement }>([
  [
    tableHeaderRow.productId,
    {
      label: 'product-id',
      renderer: (
        <Cell align='center'>
          {(rowData, rowIndex) => {
            const hack = rowData as any as { [key: string]: string }
            return <Link href={`/${hack.productId}`}>{hack.productId}</Link>
          }}
        </Cell>
      )
    }],
  [
    tableHeaderRow.xdfLink,
    {
      label: 'xdf-link',
      renderer: (
        <Cell align='center'>
          {(rowData, rowIndex) => {
            const hack = rowData as any as { [key: string]: string }
            return <Link href={`${hack.xdfLink}`} target='_blank' rel='noreferrer'><i className='fa-solid fa-file-arrow-down' /></Link>
          }}
        </Cell>
      )
    }],
  [
    tableHeaderRow.manualLink,
    {
      label: 'manual-link',
      renderer: (
        <Cell align='center'>
          {(rowData, rowIndex) => {
            const hack = rowData as any as { [key: string]: string }
            return <Link href={`${hack.manualLink}`} target='_blank' rel='noreferrer'><i className='fa-solid fa-file-arrow-down' /></Link>
          }}
        </Cell>
      )
    }],
  [
    tableHeaderRow.productQuantity,
    {
      label: 'product-quantity',
      renderer: (
        <Cell align='center'>
          {(rowData, rowIndex) => {
            const hack = rowData as any as { [key: string]: string }
            return <div>{`${hack.productQuantity ?? 0} cái/thùng`}</div>
          }}
        </Cell>
      )
    }]
])

const columnsKey = new Set<string>([tableHeaderRow.productId, tableHeaderRow.manualLink, tableHeaderRow.xdfLink, tableHeaderRow.productQuantity])

export { cellRenderer, columnsKey }
