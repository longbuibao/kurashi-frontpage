import React from 'react'
import { SectionTitle } from '@/components/section-title'

const AboutPage: React.FC = () => {
  return (
    <div>

      <div className='w-4/5 mx-auto'>
        <div className='w-fit my-10'>
          <SectionTitle title='Về Kurashi' />
        </div>
      </div>

      <div>
        <div className='w-fit mx-auto font-semibold my-10'>
          Kiến tạo không gian sống bằng các giải pháp nội thất tiên tiến
        </div>
        <div className='w-4/5 mx-auto'>
          <img src='/assets/IMG_7739.jpg' alt='about Kurashi' />
        </div>
        <div className='w-4/5 mx-auto my-10'>
          <div>
            Công ty cổ phần Kurashi cung cấp các giải pháp về nội thất phòng tắm tiên tiến nhất từ Nhật Bản. Kurashi hướng đến mục tiêu góp phần nâng cao chất lượng cuộc sống của mỗi gia đình Việt Nam, với sự tập trung vào ba yêu cầu chính của sản phẩm là: tính thẩm mĩ, tính công năng và tính an toàn.
          </div>
          <div>
            Kurashi cam kết mang đến các giải pháp tiên tiến và mới nhất về công nghệ vật liệu, thiết kế và công nghệ gia công với chất lượng 100% ‘made in Japan’.
          </div>
          <div>
            Cùng với sự phát triển của nền kinh tế Việt Nam và sự thay đổi không ngừng của phong cách sống theo thời đại, Kurashi tin rằng mình có thể tạo ra nhiều giá trị mới cho căn nhà hiện tại nếu đi sâu vào các chi tiết và tỉ mỉ như người Nhật.
          </div>
        </div>

      </div>
    </div>
  )
}

export default AboutPage
