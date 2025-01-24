import React from 'react'

import { KurashiLeftBorder } from '@/components/kurashi-div'
import { Metadata } from 'next'
import { getMetadata } from '@/utils'

export async function generateMetadata (): Promise<Metadata> {
  const defaultTitle = 'Chính sách giao/nhận hàng'
  const pageName = 'delivery-policy-page'
  return await getMetadata(pageName, defaultTitle)
}

const DeliveryPolicy: React.FC = () => {
  return (
    <div className='w-4/5 mx-auto my-10'>
      <KurashiLeftBorder>
        <div>
          Chính sách giao hàng & nhận hàng
        </div>
      </KurashiLeftBorder>
      <div className='my-10 flex flex-col gap-3'>
        <div>
          <div className='font-semibold'>1. Phạm vi áp dụng</div>
          <div className='ml-5 mt-3'>Tất cả các khách hàng mua sản phẩm của KURASHI có nhu cầu giao hàng tận nơi trên toàn quốc.</div>
        </div>
        <div>
          <div className='font-semibold'>2. Hình thức áp dụng</div>
          <div className='ml-5 mt-3 flex flex-col gap-2'>
            <div><span className='font-semibold'>Giao hàng miễn phí: </span> Giao hàng miễn phí trong phạm vi nội thành TPHCM - áp dụng cho đơn hàng giá trị từ xxx đồng trở lên.</div>
            <div><span className='font-semibold'>Giao hàng tính phí: </span> Ngoài trường hợp giao hàng miễn phí trên, các trường hợp còn lại sẽ được tính phí giao hàng theo bảng phí vận chuyển của hãng vận chuyển thứ 3 hoặc theo bảng phí của chúng tôi. Chi phí này sẽ được chúng tôi thông báo và xác nhận với quý khách trước khi quý khách tiến hành thanh toán và chúng tôi tiến hành gửi hàng.</div>
          </div>
        </div>
        <div>
          <div className='font-semibold'>3. Thời gian giao hàng</div>
          <div className='ml-5 mt-3 flex flex-col gap-2'>
            <div>Thời gian đặt hàng: 7 ngày và tùy vào số lượng đặt hàng.</div>
            <div>Thời gian giao hàng sẽ từ 1-5 ngày tùy vào khoảng cách và số lượng đặt hàng.</div>
            <div>Trong một số trường hợp khách quan chúng tôi có thể giao hàng chậm trễ do những điều kiện bất khả kháng như thời tiết xấu, điều kiện giao thông không thuận lợi, xe hỏng hóc trên đường giao hàng, trục trặc trong quá trình xuất hàng.</div>
            <div>Trong thời gian chờ đợi nhận hàng, Quý khách có bất cứ thắc mắc gì về thông tin vận chuyển xin vui lòng liên hệ hotline của chúng tôi để nhận trợ giúp.</div>
          </div>
        </div>
        <div>
          <div className='font-semibold'>4. Trách nhiệm với hàng hóa vận chuyển</div>
          <div className='ml-5 mt-3 flex flex-col gap-2'>
            <div>Dịch vụ vận chuyển của chúng tôi sẽ chịu trách nhiệm với hàng hóa và các rủi ro như mất mát hoặc hư hại của hàng hóa trong suốt quá trình vận chuyển hàng từ kho hàng chúng tôi đến khách hàng.</div>
            <div>Khách hàng có trách nhiệm kiểm tra hàng hóa khi nhận hàng. Khi phát hiện hàng hóa bị hư hại, trầy xước, bể vỡ, móp méo, hoặc sai hàng hóa thì ký xác nhận tình trạng hàng hóa với Nhân viên giao nhận và thông báo ngay cho chúng tôi. Trường hợp không xác nhận thì phía KURASHI sẽ không chịu trách nhiệm về vấn đề phát sinh khi vận chuyển.</div>
            <div>Nếu dịch vụ vận chuyển do khách hàng chỉ định và lựa chọn thì khách hàng sẽ chịu trách nhiệm với hàng hóa và các rủi ro như mất mát hoặc hư hại của hàng hóa trong suốt quá trình vận chuyển. Khách hàng sẽ chịu trách nhiệm cước phí và tổn thất liên quan.</div>
          </div>
        </div>
        <div>
          <div className='font-semibold'>5. Các điều kiện khác</div>
          <div className='ml-5 mt-3 flex flex-col gap-2'>
            <div>Chi phí cầu đường, phí vào thôn xã hoặc phí đỗ xe tại chung cư do khách hàng tự thanh toán.</div>
            <div>Chúng tôi chỉ giao hàng cho đúng người nhận hoặc người được ủy quyền mà khách hàng đã đăng ký khi mua. Trong quá trình giao hàng nếu có sự thay đổi người nhận một cách không rõ ràng, chúng tôi có quyền từ chối giao hàng và yêu cầu quý khách hàng nhận hàng tại địa điểm của bán hàng của chúng tôi.</div>
            <div>Nếu địa chỉ giao hàng không rõ ràng, nằm trong ngõ ngách, hoặc ở những nơi nguy hiểm, những vùng đồi núi hiểm trở, phương tiện giao thông đi lại khó khăn, chúng tôi có quyền từ chối vận chuyển, giao nhận hàng trực tiếp.</div>
            <div>Trường hợp chúng tôi đã vận chuyển hàng đến địa điểm giao nhận như thỏa thuận lúc mua hàng, nhưng vì một lý do nào đó khách hàng yêu cầu trả lại hàng thì lúc đó khách hàng phải chịu chi phí vận chuyển theo biểu giá quy định của chúng tôi.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeliveryPolicy
