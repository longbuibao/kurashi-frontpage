import { Cell } from 'rsuite-table'

const cellRenderer = new Map<string, { label: string, renderer: React.ReactElement }>()
cellRenderer.set('productId', (
  {
    label: 'product-id',
    renderer: (
      <Cell align='center'>
        {(rowData, rowIndex) => {
          const hack = rowData as any as { [key: string]: string }
          const download = <div><a href={`/${hack.productId}`}>{hack.productId}</a></div>
          return download
        }}
      </Cell>
    )
  }
))

cellRenderer.set('xdfLink', (
  {
    label: 'xdf-link',
    renderer: (
      <Cell align='center'>
        {(rowData, rowIndex) => {
          const hack = rowData as any as { [key: string]: string }
          const download = <div><a href={`/${hack.xdfLink}`}><i className='fa-solid fa-file-arrow-down' /></a></div>
          return download
        }}
      </Cell>
    )
  }
))

cellRenderer.set('manualLink', (
  {
    label: 'manual-link',
    renderer: (
      <Cell align='center'>
        {(rowData, rowIndex) => {
          const hack = rowData as any as { [key: string]: string }
          const download = <div><a href={`/${hack.xdfLink}`}><i className='fa-solid fa-file-arrow-down' /></a></div>
          return download
        }}
      </Cell>
    )
  }
))

cellRenderer.set('productQuantity', (
  {
    label: 'product-quantity',
    renderer: (
      <Cell align='center'>
        {(rowData, rowIndex) => {
          const hack = rowData as any as { [key: string]: string }
          const download = <div>{`productQuantity ${hack.productQuantity ?? 0}`}</div>
          return download
        }}
      </Cell>
    )
  }
))

const columnsKey = new Set<string>()
columnsKey.add('productId')
columnsKey.add('manualLink')
columnsKey.add('xdfLink')
columnsKey.add('productQuantity')

export { cellRenderer, columnsKey }
