'use client'

import { Table, Column, HeaderCell, Cell } from 'rsuite-table'
import 'rsuite-table/dist/css/rsuite-table.css'
import { v4 as uuidv4 } from 'uuid'

import { useMediaQuery } from '@/hooks/useMediaQuery'

const SpecTable: React.FC = () => {
  const data = [{
    size: '890x1800mm',
    thick: '0.5mm',
    kindOfSurface: 'bóng mờ',
    area: '2.1m2',
    weight: '5.1kg',
    color: 'T,X,B'
  }, {
    size: '890x2400mm',
    thick: '0.5mm',
    kindOfSurface: 'bóng mờ',
    area: '1.6m2',
    weight: '6.8kg',
    color: 'T,X,B'
  }, {
    size: '1219x2400mm',
    thick: '0.5mm',
    kindOfSurface: 'bóng mờ',
    area: '2.1m2',
    weight: '6.7kg',
    color: 'T,X,B'
  }]
  const isMobile = useMediaQuery(768)
  const keys = Object.keys(data[0])

  return (
    <Table
      autoHeight
      bordered
      cellBordered
      defaultExpandAllRows
      data={data}
      headerHeight={isMobile ? 70 : 40}

    >
      {keys.map(y =>
        <Column key={uuidv4()} flexGrow={1}>
          <HeaderCell align='center' style={{ background: '#437254' }}>
            <div className='text-secondary font-semibold max-lg:text-wrap text-center flex justify-center items-center'>
              {y}
            </div>
          </HeaderCell>
          <Cell align='center' dataKey={y} />
        </Column>
      )}

    </Table>
  )
}

export default SpecTable
