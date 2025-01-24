import React from 'react'
import Image from 'next/image'
import './table-style.css'

const SpecTable: React.FC = () => {
  return (
    <div className='flex flex-col gap-5'>
      <table>
        <thead>
          <tr>
            <th rowSpan={2}>Quy cách</th>
            <th rowSpan={1} className='text-nowrap'>Kích thước<br /><small className='font-extrabold'>Độ dày 3mm</small></th>
            <th colSpan={1}>900×600</th>
            <th colSpan={1}>600×300</th>
            <th>900×2400</th>
            <th colSpan={1}>600×(18+18)</th>
            <th colSpan={1}>300×(18+18)</th>
          </tr>
          <tr>
            <th>Đóng gói</th>
            <th>4 tấm/thùng</th>
            <th>8 tấm/thùng</th>
            <th>1 tấm/thùng</th>
            <th>4 thanh/thùng</th>
            <th>8 thanh/thùng</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowSpan={8}>Mã màu</td>
            <td className='cell-image'><Image width={170} height={70} src='https://storage.googleapis.com/kurashi_frontpage_files/images/tam-op-da/table/xam-traverine.png' alt='Xám travertine' /></td>
            <td><i className='fa-solid fa-o' /></td>
            <td><i className='fa-solid fa-o' /></td>
            <td><i className='fa-solid fa-xmark' /></td>
            <td><i className='fa-solid fa-o' /></td>
            <td><i className='fa-solid fa-o' /></td>
          </tr>
          <tr>
            <td className='cell-image'><Image width={170} height={70} src='https://storage.googleapis.com/kurashi_frontpage_files/images/tam-op-da/table/den-traverine.png' alt='Đen travertine' /></td>
            <td><i className='fa-solid fa-o' /></td>
            <td><i className='fa-solid fa-o' /></td>
            <td><i className='fa-solid fa-xmark' /></td>
            <td><i className='fa-solid fa-o' /></td>
            <td><i className='fa-solid fa-o' /></td>
          </tr>
          <tr>
            <td className='cell-image'><Image width={170} height={70} src='https://storage.googleapis.com/kurashi_frontpage_files/images/tam-op-da/table/be-slate.png' alt='Be slate' /></td>
            <td><i className='fa-solid fa-o' /></td>
            <td><i className='fa-solid fa-o' /></td>
            <td><i className='fa-solid fa-o' /></td>
            <td><i className='fa-solid fa-o' /></td>
            <td><i className='fa-solid fa-o' /></td>
          </tr>
          <tr>
            <td className='cell-image'><Image width={170} height={70} src='https://storage.googleapis.com/kurashi_frontpage_files/images/tam-op-da/table/den-slate.png' alt='Đen slate' /></td>
            <td><i className='fa-solid fa-o' /></td>
            <td><i className='fa-solid fa-o' /></td>
            <td><i className='fa-solid fa-o' /></td>
            <td><i className='fa-solid fa-o' /></td>
            <td><i className='fa-solid fa-o' /></td>
          </tr>
          <tr>
            <td className='cell-image'><Image width={170} height={70} src='https://storage.googleapis.com/kurashi_frontpage_files/images/tam-op-da/table/gi-sat.png' alt='Gỉ sắt' /></td>
            <td><i className='fa-solid fa-xmark' /></td>
            <td><i className='fa-solid fa-xmark' /></td>
            <td><i className='fa-solid fa-o' /></td>
            <td><i className='fa-solid fa-o' /></td>
            <td><i className='fa-solid fa-xmark' /></td>
          </tr>
          <tr>
            <td className='cell-image'><Image width={170} height={70} src='https://storage.googleapis.com/kurashi_frontpage_files/images/tam-op-da/table/gi-den.png' alt='Gỉ đen' /></td>
            <td><i className='fa-solid fa-xmark' /></td>
            <td><i className='fa-solid fa-xmark' /></td>
            <td><i className='fa-solid fa-o' /></td>
            <td><i className='fa-solid fa-o' /></td>
            <td><i className='fa-solid fa-xmark' /></td>
          </tr>
          <tr>
            <td className='cell-image'><Image width={170} height={70} src='https://storage.googleapis.com/kurashi_frontpage_files/images/tam-op-da/table/xam-xi-mang.png' alt='Xám xi măng' /></td>
            <td><i className='fa-solid fa-o' /></td>
            <td><i className='fa-solid fa-o' /></td>
            <td><i className='fa-solid fa-o' /></td>
            <td><i className='fa-solid fa-o' /></td>
            <td><i className='fa-solid fa-xmark' /></td>
          </tr>
          <tr>
            <td className='cell-image'><Image width={170} height={70} src='https://storage.googleapis.com/kurashi_frontpage_files/images/tam-op-da/table/den-xi-mang.png' alt='Đen xi măng' /></td>
            <td><i className='fa-solid fa-o' /></td>
            <td><i className='fa-solid fa-o' /></td>
            <td><i className='fa-solid fa-o' /></td>
            <td><i className='fa-solid fa-o' /></td>
            <td><i className='fa-solid fa-xmark' /></td>
          </tr>
        </tbody>
      </table>
      <div className='self-end'>
        <div className='flex flex-row gap-2'>
          <div><i className='fa-solid fa-o' /></div>
          <div>Có sản xuất</div>
        </div>
        <div className='flex flex-row gap-2'>
          <div><i className='fa-solid fa-xmark' /></div>
          <div>Không sản xuất</div>
        </div>
      </div>
    </div>

  )
}

export default SpecTable
