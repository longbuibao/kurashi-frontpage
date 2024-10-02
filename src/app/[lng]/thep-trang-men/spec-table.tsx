'use client'

import { Table, Column, HeaderCell, Cell } from 'rsuite-table'
import 'rsuite-table/dist/css/rsuite-table.css'
import { v4 as uuidv4 } from 'uuid'

import { useMediaQuery } from '@/hooks/useMediaQuery'
import { useTranslationClient } from '@/i18n/client-side'

const SpecTable: React.FC = () => {
  const data = [{
    chars: 'Độ dày lớp thép tráng men bề mặt 130µm',
    result: '130µm'
  }, {
    chars: 'Độ dày lớp kim loại nền 0.3~0.35mm',
    result: '0.3~0.35mm'
  }, {
    chars: 'Độ dày lớp thép tráng men nền 30µm',
    result: '30µm'
  }, {
    chars: 'Độ lệch màu ∆Ε tiêu chuẩn dưới 0.5',
    result: 'dưới 0.5'
  }, {
    chars: 'Độ bóng bề mặt (GS45°)',
    result: '100%, 55%, 92%'
  }, {
    chars: 'Độ cứng Mohs',
    result: '5.5'
  }, {
    chars: 'Chống xước, Phương pháp Taber 1.3mg (Vòng ma sát CS-17/1kg 1000 vòng quay)',
    result: '1.3mg'
  }, {
    chars: 'Khả năng chống dung môi (Toluen, acetone, cồn, benzen, stiren)',
    result: 'không thay đổi'
  }, {
    chars: 'Độ nhám bề mặt (Chiều cao tối đa 2.5mm)',
    result: '1.2µm'
  }, {
    chars: 'Số chứng nhận chống cháy',
    result: 'NM-2744'
  }]
  const isMobile = useMediaQuery(768)
  const keys = Object.keys(data[0])

  const { t } = useTranslationClient('vi', 'thep-trang-men', {})

  return (
    <Table
      autoHeight
      bordered
      cellBordered
      defaultExpandAllRows
      data={data}
      wordWrap={isMobile ? 'break-word' : false}
      headerHeight={isMobile ? 70 : 40}
    >
      {keys.map(y =>
        <Column key={uuidv4()} flexGrow={y === 'chars' ? 1 : 0}>
          <HeaderCell align='center' style={{ background: '#437254' }}>
            <div className='text-secondary font-semibold max-lg:text-wrap text-center flex justify-center items-center'>
              {t(y)}
            </div>
          </HeaderCell>
          <Cell className='max-md:w-fit' align='center' dataKey={y} />
        </Column>
      )}

    </Table>
  )
}

export default SpecTable
