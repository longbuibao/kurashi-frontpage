import React from 'react'
import Image from 'next/image'

import { LinkIcon, LogoFacebook, LogoZalo } from '@/components/svg-icons'
import { imageUrls, blogImageUrls } from './const'
import { EmblaCarousel } from '@/components/embla-carousel'

const BlogPhuKienNamCham: React.FC = () => {
  return (
    <div className='w-4/5 mx-auto my-10'>
      <div className='w-[70%] mx-auto'>
        <div className='flex flex-row gap-10 text-black'>
          <div className='w-3/5 md:w-full flex justify-between flex-col'>
            <div>
              <div className='flex flex-row gap-5 items-center'>
                <i className='fa-solid fa-square-full text-main' />
                <p className='text-black'>Kurashi blog</p>
              </div>
              <h2 className='text-2xl font-bold mt-10'>BẾP TIỆN LỢI VỚI PHỤ KIỆN NAM CHÂM, DI CHUYỂN TỰ DO</h2>
            </div>
            <div>
              <p>Bởi Diện Võ</p>
              <p className='text-black'>17/9/2024</p>
              <div className='flex flex-row gap-3 flex-nowrap items-center mt-3'>
                <LogoFacebook />
                <LogoZalo />
                <LinkIcon />
              </div>
            </div>
          </div>
          <div className='md:w-full'>
            <Image className='h-full' alt='blog phụ kiện nam châm' src='https://storage.googleapis.com/kurashi_frontpage_files/images/thep_trang_men_slider/10.jpg' width={640} height={640} />
          </div>
        </div>
        <div className='flex flex-col gap-5 mt-20'>
          <div>
            <p>Phụ kiện nam châm sử dụng trên tấm ốp bếp bằng thép tráng men là giải pháp lưu trữ mới nhất có nhiều điểm ưu việt hơn các giải pháp lưu trữ truyền thống trong không gian bếp.</p>
          </div>
          <div>
            <p>Các phụ kiện nam châm này không chỉ mang đến hiệu quả sử dụng không gian trong bếp mà còn mang đến sự tiện lợi cho người nội trợ trong công việc nấu ăn hàng ngày.</p>
          </div>
        </div>
        <div className='my-10'>
          <EmblaCarousel useFlatControlButton slides={imageUrls} />
        </div>
        <div>
          <h2 className='text-2xl font-bold mt-10'>TĂNG HIỆU QUẢ SỬ DỤNG KHÔNG GIAN BẾP</h2>
          <div className='flex flex-col gap-5 mt-10'>
            <div><p>Mảng tường ốp bếp thường có diện tích lớn. Ví dụ bếp chữ I với mảng tường 700x2700 có diện tích khoảng 1.9 m2. Mảng tường này thông thường được ốp kính hoặc đá với mục đích trang trí, chống ố hoặc khoan ổ điện. Nghĩa là diện tích khoảng 1.9 m2 đó gần như chưa được sử dụng hiệu quả để phục vụ công năng của bếp. Trong khi gian bếp thường có diện tích nhỏ, người nội trợ thường có nhu cầu lưu trữ dụng cụ nấu ăn ngay trước mặt, trong tầm tay để dễ thao tác. </p></div>
            <div><p>Vì nhu cầu đó, trên thị trường có nhiều phụ kiện để treo, nhất là phụ kiện inox để gắn lên khu ốp bếp. Tuy nhiên lại phải khoan tường, khó thay thế khi cũ hoặc hư hỏng, đôi khi phải thay cả khu ốp bếp tốn kém.</p></div>
            <div><p>Với phụ kiện nam châm gắn trên tấm ốp thép tráng men, diện tích tấm ốp bếp được sử dụng với hiệu quả tối đa, tăng tính công năng nhờ các giải pháp lưu trữ mới nhất, với giá cả hợp lý.</p></div>
          </div>
        </div>
        <div className='mx-auto flex flex-row gap-10 items-center my-10'>
          <div className='w-1/2 flex flex-col gap-5'>
            <div>Ví dụ mẫu</div>
            <div>Giải pháp kệ nam châm hoàn toàn khác biết để đựng gia vị hoặc để đồ decor trên tấm ốp bếp bằng thép tráng men. </div>
          </div>
          <div className='w-1/2'>
            <Image alt='blog phụ kiện nam châm' src='https://storage.googleapis.com/kurashi_frontpage_files/images/blogs/blog_phu_kien_nam_cham.jpg' width={640} height={640} />
          </div>
        </div>
        <div className='flex flex-col gap-5 p-10 bg-blog'>
          <h2 className='text-2xl font-bold'>KHẢ NĂNG DI CHUYỂN TỰ DO, DỄ DÀNG</h2>
          <div className='flex flex-col gap-5'>
            <div>
              <p>Chỉ với theo tác đơn giản là gỡ ra và gắn lên là bạn đã có thể di chuyển phụ kiện nam châm một cách dễ dàng. Điều này sẽ rất tiện lợi khi tất cả những thứ bạn cần lúc nấu ăn đều nằm trong tầm với.</p>
            </div>
            <div>
              <p>Nếu để trong hộc tủ cabinet sẽ tốn công mở tủ, còn với tấm ốp bằng đá thì không thể di chuyển tự do vì phụ kiện được khoan bắn vít gắn cố định.</p>
            </div>
          </div>
        </div>
        <div className='my-10 flex flex-col gap-5'>
          <div className='text-2xl font-bold'><h2>SỰ ĐA DẠNG CỦA PHỤ KIỆN NAM CHÂM</h2></div>
          <div><p>Kurashi cung cấp nhiều loại phụ kiện nam châm từ Nhật Bản gồm 3 nhóm chính: nhóm hũ đựng gia vị, nhóm kệ bếp và nhóm phụ kiện để treo. Trong đó có nhiều lựa chọn phụ kiện thông minh và là các giải pháp lưu trữ hoàn toàn mới và tiện lợi nhất.</p></div>
        </div>
        <div className='my-10 flex flex-row gap-10 justify-between items-center'>
          {blogImageUrls.map(x => (
            <div key={x.key} className='w-1/3'>
              <div>{x.image}</div>
              <div className='my-3'>{x.title}</div>
              <div className='my-3'>{x.content}</div>
            </div>
          ))}
        </div>
        <div className='my-10 flex flex-col gap-5 p-10 bg-blog'>
          <div className='text-2xl font-bold'><h2>TIÊU CHUẨN KĨ THUẬT CẦN LƯU Ý</h2></div>
          <div><p>Mỗi loại phụ kiện nam châm có một tiêu chuẩn kĩ thuật quan trọng là tải trọng, ví dụ tải trọng chịu lực là 500 hoặc 1kg được ghi rõ trên bao bì sản phẩm.</p></div>
          <div><p>Chỉ cần sử dụng đúng tải trọng qui định là bạn có thể an tâm về độ bám dính và thời gian sử dụng lâu dài.</p></div>
        </div>
        <div><p>Với nhiều loại phụ kiện nam châm đa năng được thiết kế kĩ lưỡng, dễ dàng di chuyển bạn có thể tối ưu diện tích sử dụng và nâng cao độ tiện lợi cho căn bếp của gia đình.</p></div>
      </div>

    </div>
  )
}

export default BlogPhuKienNamCham
