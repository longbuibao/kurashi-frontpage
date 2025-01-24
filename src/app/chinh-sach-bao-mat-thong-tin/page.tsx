import React from 'react'
import Link from 'next/link'

import { KurashiLeftBorder } from '@/components/kurashi-div'
import { phoneNumber, email } from '@/constants'
import { Metadata } from 'next'
import { getMetadata } from '@/utils'

export async function generateMetadata (): Promise<Metadata> {
  const defaultTitle = 'Chính sách bảo mật thông tin'
  const pageName = 'policy-page'
  return await getMetadata(pageName, defaultTitle)
}

const PolicyPage: React.FC = () => {
  return (
    <div className='w-4/5 mx-auto my-10'>
      <KurashiLeftBorder>
        <div>
          Chính sách bảo mật thông tin
        </div>
      </KurashiLeftBorder>
      <div className='my-10 flex flex-col gap-3'>
        <div>
          Chính sách bảo mật này áp dụng cho trang web <span className='text-[blue]'><a href='https://www.kurashi.com.vn'>https://www.kurashi.com.vn</a></span> và các kênh truyền thông do công ty cổ phần KURASHI sở hữu.Công ty cổ phần Kurashi tuân thủ các quy định hiện hành về bảo vệ dữ liệu thông tin khách hàng khi khách hàng truy cập vào trang web <span className='text-[blue]'><a href='https://www.kurashi.com.vn'>https://www.kurashi.com.vn</a></span> hoặc khi khách hàng mua các sản phẩm của Kurashi.
        </div>
        <div>
          Mục đích của chính sách này là mô tả cách chúng tôi xử lý thông tin cá nhân và thông báo cho bạn về quyền của bạn.
        </div>
        <div>
          Nếu bạn có bất kỳ câu hỏi hoặc ý kiến liên quan đến việc xử lý dữ liệu cá nhân của bạn, bạn luôn được hoan nghênh để liên hệ với chúng tôi. Bạn có thể tìm thông tin liên hệ của chúng tôi trong phần cuối cùng.
        </div>
      </div>

      <div>
        <div className='underline underline-offset-3'>Về việc thu thập dữ liệu cá nhân</div>
        <div className='my-3'>Khi bạn truy cập vào trang web hoặc liên hệ với chúng tôi qua trang web, điện thoại, email, Facebook, Youtube hoặc Zalo, chúng tôi sẽ biết được thông tin liên hệ của bạn.</div>
      </div>
      <div>
        <div className='underline underline-offset-3'>Những loại thông tin được thu thập</div>
        <div className='w-11/12 mx-auto my-3'>
          <ul className='list-disc'>
            <li>Thông tin liên hệ bao gồm tên, địa chỉ email, địa chỉ công ty, số điện thoại, ngôn ngữ</li>
            <li>Thông tin về sản phẩm bạn quan tâm hoặc những câu hỏi của bạn</li>
            <li>Thông tin về lượng truy cập vào trang web, lịch sử truy cập</li>
          </ul>
        </div>
      </div>
      <div>
        <div className='underline underline-offset-3'>Các thời điểm thông tin được thu thập</div>
        <div className='w-11/12 mx-auto my-3'>
          <ul className='list-disc'>
            <li>Khi bạn truy cập vào website</li>
            <li>Khi bạn đăng kí nhận tin tức</li>
            <li>Khi bạn trao đổi qua lại với chúng tôi</li>
          </ul>
        </div>
      </div>
      <div>
        <div className='underline underline-offset-3'>Mục đích thu thập và lưu trữ thông tin</div>
        <div className='w-11/12 mx-auto my-3'>
          <ul className='list-disc'>
            <li>Trả lời các câu hỏi và yêu cầu của bạn</li>
            <li>Quản lý độ hài lòng của khách hàng và chất lượng phục vụ khách hàng</li>
            <li>Gửi bản tin, thông tin sản phẩm đến khách hàng</li>
            <li>Phục vụ các hoạt động marketing sản phẩm</li>
            <li>Thống kê và phân tích để cải thiện hoạt động kinh doanh</li>
          </ul>
        </div>
      </div>
      <div>
        <div className='underline underline-offset-3'>Mục đích thu thập và lưu trữ thông tin</div>
        <div className='w-11/12 mx-auto my-3'>
          <ul className='list-disc'>
            <li>Trả lời các câu hỏi và yêu cầu của bạn</li>
            <li>Quản lý độ hài lòng của khách hàng và chất lượng phục vụ khách hàng</li>
            <li>Gửi bản tin, thông tin sản phẩm đến khách hàng</li>
            <li>Phục vụ các hoạt động marketing sản phẩm</li>
            <li>Thống kê và phân tích để cải thiện hoạt động kinh doanh</li>
          </ul>
        </div>
      </div>
      <div>
        <div className='underline underline-offset-3'>Xử lý các thông tin thu thập</div>
        <div className='my-3'>
          Hạn chế tối đa việc xử lý các thông tin của khách hàng, nếu có chỉ xử lý các thông tin này trên cơ sở có sự đồng ý của cả phía khách hàng và phía Kurashi. Chỉ gửi các thông tin liên quan đến sản phẩm khi có sự đồng ý của bạn hoặc bạn chủ động đăng kí. Bạn có thể hủy bỏ nhận thông tin bất kì lúc nào. Ví dụ bỏ theo dõi và nhận bản tin qua email.
        </div>
      </div>
      <div>
        <div className='underline underline-offset-3'>Chia sẻ các thông tin thu thập</div>
        <div className='flex flex-col gap-3 my-3'>
          <div>
            Dữ liệu thu thập và dữ liệu của website được lưu trữ trên Server của nhà cung cấp dịch vụ lưu trữ. Họ xử lý thông tin thay mặt cho Kurashi và theo chỉ đạo của Kurashi.
          </div>
          <div>
            Chúng tôi không bán hàng qua trang web nên không thu thập và chia sẻ các thông tin liên quan đến thẻ ngân hàng và thông tin thanh toán của khách hàng.
          </div>
          <div>
            Trong một số trường hợp đặt biệt, khi có yêu cầu của cơ quan pháp luật, chúng tôi có thể chuyển các thông tin thu thập cho các cơ quan này như cơ quan chính phủ, tòa án.
          </div>
        </div>
      </div>
      <div>
        <div className='underline underline-offset-3'>Bảo mật thông tin</div>
        <div className='my-3'>
          Chúng tôi bảo vệ thông tin cá nhân của bạn và có các quy định nội bộ để giữ thông tin của bạn an toàn. Chúng tôi cũng có các quy định nội bộ để bảo vệ thông tin cá nhân của bạn khỏi việc bị hủy hoại, mất mát hoặc thay đổi, khỏi việc phát hành không được ủy quyền và khỏi việc truy cập hoặc nhìn thấy không được ủy quyền.
        </div>
      </div>
      <div>
        <div className='underline underline-offset-3'>Quyền lợi của bạn</div>
        <div className='my-3'>
          <div>
            Bất cứ lúc nào, bạn có quyền biết thông tin cá nhân chúng tôi đã ghi lại về bạn, nguồn gốc của nó là gì và chúng tôi sử dụng nó để làm gì. Bạn cũng có thể yêu cầu chúng tôi cho bạn biết chúng tôi lưu trữ thông tin cá nhân của bạn trong bao lâu, và ai khác cũng có thể biết được nó. Bạn cũng có quyền yêu cầu điều chỉnh hoặc xóa thông tin cá nhân của mình hoặc nhận thông tin giới hạn về việc xử lý dữ liệu của bạn.
          </div>
          <div>
            Nếu bạn muốn thực hiện quyền của mình, vui lòng liên hệ với chúng tôi, sử dụng thông tin liên hệ trong phần cuối cùng của chính sách này.
          </div>
        </div>
      </div>
      <div>
        <div className='underline underline-offset-3'>Thay đổi chính sách bảo mật thông tin</div>
        <div className='my-3'>
          Công ty Kurashi có quyền bổ sung và thay đổi các nội dung trong chính sách bảo mật thông tin này.
        </div>
      </div>
      <div>
        <div className='underline underline-offset-3'>Góp ý và khiếu nại</div>
        <div className='my-3'>
          Nếu bạn muốn góp ý hoặc khiếu nại liên quan đến chính sách bảo mật thông tin, vui lòng gửi email hoặc gọi điện thoại.
        </div>
      </div>
      <div>
        <div className='underline underline-offset-3'>Thông tin liên hệ</div>
        <div className='my-3'>
          Công ty cổ phần Kurashi, <Link href={`mailto:${email}`}>email: <span className='text-[blue]'>{email}</span> </Link> hoặc số điện thoại <Link href={`tel:${phoneNumber}`}> {phoneNumber} </Link>
        </div>
      </div>
      <div className='my-5'>
        Ngày 06 tháng 04 năm 2024
      </div>
    </div>
  )
}

export default PolicyPage
