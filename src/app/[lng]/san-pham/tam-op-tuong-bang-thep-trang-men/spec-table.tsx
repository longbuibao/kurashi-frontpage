'use client'

import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import './SuperResponsiveTableStyle.css'

import { specData } from './const'

const SpecTable: React.FC = () => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Tính chất</Th>
          <Th>Kết quả</Th>
        </Tr>
      </Thead>
      <Tbody>
        {specData.map(x => (
          <Tr key={x.chars}>
            <Td>{x.chars}</Td>
            <Td>{x.result}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}

export default SpecTable
