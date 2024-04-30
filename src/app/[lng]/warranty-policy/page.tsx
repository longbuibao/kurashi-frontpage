import React from 'react'

import { KurashiLeftBorder } from '@/components/kurashi-div'

export const metadata = {
  title: 'Chính sách bảo hành'
}

const WarrantyPolicy: React.FC = () => {
  return (
    <div className='w-4/5 mx-auto my-10'>
      <KurashiLeftBorder>
        <div>
          Chính sách bảo hành
        </div>
      </KurashiLeftBorder>
      <div className='my-10 flex flex-col gap-3'>
        <div>
          Tất cả sản phẩm được phân phối bởi KURASHI sẽ được bảo hành chính hãng.
        </div>
        <div className='flex flex-col gap-3'>
          <div>
            <div className='font-semibold'>1. Thời hạn bảo hành</div>
            <div className='ml-5 mt-3'>Thời gian bảo hành sẽ tùy thuộc vào từng sản phẩm và theo chính sách chung của từng hãng. Đã nêu chi tiết trong hoá đơn bán hàng.</div>
          </div>
          <div>
            <div className='font-semibold'>2. Điều kiện bảo hành</div>
            <div className='ml-5 mt-3 flex flex-col gap-2'>
              <div>- Sản phẩm còn trong hạn bảo hành.</div>
              <div>- Phiếu bảo hành đầy đủ thông tin, còn nguyên vẹn, không bị rách rời hay tẩy xóa. Đối với các sản phẩm không áp dụng phiếu bảo hành, thời gian bảo hành sẽ căn cứ vào ngày sản xuất trên hóa đơn.</div>
              <div>- Lỗi do nhà sản xuất, không đúng với spec ban đầu.</div>
            </div>
          </div>
          <div>
            <div className='font-semibold'>3. Trường hợp không được bảo hành</div>
            <div className='ml-5 mt-3 flex flex-col gap-2'>
              <div>- Sản phẩm hư hỏng do vận chuyển, lắp đặt sai quy cách.</div>
              <div>- Khách Hàng sử dụng sản phẩm không đúng theo hướng dẫn, có tác động lên sản phẩm.</div>
              <div>- Sử dụng các chất tẩy rửa có chứa axit, dầu bóng, các dung dịch có tính ăn mòn tiếp xúc lên trên sản phẩm gây ra vết ố hoặc bong tróc, hư hại.</div>
              <div>- Sản phẩm được sử dụng trong môi trường có yếu tố gây ăn mòn (ăn mòn do môi trường kiềm, muối, axit..)</div>
              <div>- Những lỗi phát sinh do sử dụng nguồn nước có chất lượng không đạt tiêu chuẩn về nước sinh hoạt.</div>
              <div>- Bị mất hoặc rách phiếu bảo hành (đối với các sản phẩm có cung cấp phiếu bảo hành).</div>
              <div>- Hết thời hạn bảo hành theo quy định từng sản phẩm.</div>
              <div>- Lỗi phát sinh do có dị vật bám và kẹt bên trong sản phẩm.</div>
              <div>- Hư hỏng do tự ý tháo lắp sửa chữa hoặc thay thế các linh kiện, bộ phận không đúng sản phẩm chính hãng.</div>
              <div>- Các bộ phận phụ như: Ron, gioăng cao su, ốc vít…</div>
              <div>- Các sản phẩm đèn, điện lắp sai nguồn điện, mối tiếp điện. Nguồn điện sử dụng không ổn định, vào nước.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WarrantyPolicy
