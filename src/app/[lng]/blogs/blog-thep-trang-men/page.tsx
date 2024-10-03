import React from 'react'
import Image from 'next/image'

import { LinkIcon, LogoFacebook, LogoZalo } from '@/components/svg-icons'
import { images } from './const'

const BlogThepTrangMen: React.FC = () => {
  return (
    <div className='w-4/5 mx-auto my-10 max-md:w-full'>
      <div className='w-[70%] mx-auto'>
        <div className='flex flex-row gap-10 text-black max-md:flex-col'>
          <div className='w-3/5 md:w-full flex justify-between flex-col max-md:w-full'>
            <div>
              <div className='flex flex-row gap-5 items-center'>
                <i className='fa-solid fa-square-full text-main' />
                <p className='text-black'>Kurashi blog</p>
              </div>
              <h2 className='text-2xl font-bold mt-10'>CẤU TẠO 6 LỚP VÀ TÍNH CHẤT ĐẶC BIỆT CỦA THÉP TRÁNG MEN KURASHI</h2>
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
        <div className='flex flex-col gap-5 my-10'>
          <div><p>Vật liệu thép tráng men Kurashi có cấu tạo 6 lớp đặc biệt, chỉ dày 0.5mm. Do đó ngoài những đặc điểm cơ bản của vật liệu như khả năng chống xước, chống cháy, chống ố và chống bám bẩn dầu mỡ; thép tráng men Kurashi được bán dạng tấm, có thể cuộn lại, giá cả hợp lý.</p></div>
          <div><p>Đặc biệt, dễ cắt bằng máy cắt cầm tay hoặc kéo nên có thể ốp tường với các góc cạnh, hình dáng phức tạp ngay tại công trình. Đặc biệt có thể ốp được các góc tường uốn cong.</p></div>
        </div>
        <div className='flex flex-row gap-10 my-10 p-10 bg-blog max-md:flex-col'>
          <Image className='h-full' alt='blog phụ kiện nam châm' src='https://storage.googleapis.com/kurashi_frontpage_files/images/thep_trang_men_layer_without_bg.png' width={640} height={640} />
          <div className='w-1/2 flex flex-col gap-10 max-md:w-full'>
            <div>
              <h2 className='text-2xl font-bold'>CẤU TẠO 6 LỚP</h2>
            </div>
            <div>
              <p>Thép tráng men Kurashi có cấu tạo đa tầng, được tích hợp 6 lớp vật liệu khác nhau. Lớp mặt gồm 2 lớp men kính gọi là Dual Coating để tăng cường độ bền bề mặt sử dụng. Ở giữa là lớp kim loại nền được bao bọc bởi 2 lớp kim loại niken tạo nên khung nền vật liệu vững chắc. Phần mặt sau được phủ một lớp men kính nền chống ẩm mốc và rỉ sét, nhất là ở những nơi có khí hậu nóng ẩm và nồm.</p>
            </div>
          </div>
        </div>
        <div>
          <div className='text-2xl font-bold my-10'>
            <h2>TÍNH CHẤT RIÊNG CỦA VẬT LIỆU THÉP TRÁNG MEN KURASHI</h2>
          </div>
          <div>
            <p>
              Vật liệu thép tráng men Kurashi đảm bảo các tính chất ưu việt của vật liệu kết hợp thép và men kính như khả năng chống trầy xước, chống cháy và chống ố vượt trội, cũng như khả năng kết hợp dễ dàng, tiện lợi của phụ kiện nam châm.
            </p>
          </div>
          <div className='flex flex-row gap-10 my-10 justify-between max-md:grid max-md:grid-cols-2'>
            {images.map(x => (
              <div key={x.imageUrl} className='h-[30vh] flex flex-col items-center max-md:h-fit'>
                <Image src={x.imageUrl} width={834} height={775} alt='tính năng của thép tráng men' />
                <div className='mt-3 text-center italic'>
                  {x.title}
                </div>
              </div>
            ))}
          </div>
          <div className='max-md:mt-auto'>
            <p>Tại khu vực tường ốp bếp, vật liệu ốp phải đạt yêu cầu chống ố, nhất là vết dầu mỡ vì đây là khu vực thường xuyên chiên xào, nấu ăn nên vết ố và dầu mỡ dễ văng và bám bẩn. Nếu chọn phải vật liệu ốp dễ bám bẩn hoặc khó lau chùi vết dầu mỡ sẽ tạo cảm giác rất khó chịu khi nấu ăn vì đây là khu vực ngay trước mặt người nấu. Với vật liệu thép tráng men, nhờ 2 lớp men kính Dual phủ lớp bề mặt nên bạn chỉ cần dùng nước và khăn là đã có thể loại bỏ vết dầu mỡ dễ dàng. </p>
          </div>
          <div className='flex flex-row gap-10 my-10 items-center max-md:flex-col-reverse'>
            <Image className='h-full' alt='blog phụ kiện nam châm' src='https://storage.googleapis.com/kurashi_frontpage_files/images/blogs/thi_nghiem_ve_sinh_dau.png' width={640} height={640} />
            <div className='flex flex-col gap-5'>
              <div className='text-2xl font-bold my-10 max-md:my-5'><h2>THÍ NGHIỆM VỆ SINH VẾT DẦU</h2></div>
              <div>
                <p>Đổ vết dầu 180°C lên bề mặt trong 30 ngày, sau đó lau bằng nước và vải sạch.</p>
                <p>Với thép tráng men, chỉ cần lau 5 lần là sạch</p>
              </div>
            </div>
          </div>
          <div className='my-10'>
            <p>Ngoài ra, điểm khác biệt lớn nhất của thép tráng men Kurashi là được phân phối ở dạng tấm, với 3 tùy chọn kích thước tấm khác nhau. Thợ có thể dùng dụng cụ cắt cầm tay để cắt, ghép tùy ý theo kích thước và hình dáng yêu cầu một cách dễ dàng. Ví dụ có thể cắt ghép theo hình dáng bếp mong muốn, dán bao xung quanh cửa sổ hoặc dán bo cong theo bề mặt.</p>
          </div>
          <div className='p-10 flex flex-row gap-10 bg-blog max-md:flex-col max-md:p-5'>
            <div>
              <div className='text-2xl font-bold my-10 max-md:my-5'><h2>VẬN CHUYỂN TỚI CÔNG TRÌNH DỄ DÀNG</h2></div>
              <div>Hai tấm thép tráng men có thể cuộn trong một hộp carton dài dưới 1m nên vận chuyển đến công trình dễ dàng.</div>
            </div>
            <div>
              <Image className='h-full' alt='blog phụ kiện nam châm' src='https://storage.googleapis.com/kurashi_frontpage_files/images/blogs/easy_delivery.png' width={640} height={640} />
            </div>
          </div>
          <div className='flex flex-row gap-10 my-10 max-md:flex-col-reverse max-md:my-5'>
            <div className='flex flex-row gap-3 justify-between w-1/2 max-md:w-full max-md:flex-col'>
              <Image className='h-full w-1/2 object-cover max-md:w-full' alt='blog phụ kiện nam châm' src='https://storage.googleapis.com/kurashi_frontpage_files/images/blogs/easy_construct_1.png' width={640} height={640} />
              <Image className='h-full w-1/2 object-cover max-md:w-full' alt='blog phụ kiện nam châm' src='https://storage.googleapis.com/kurashi_frontpage_files/images/blogs/easy_construct_2.png' width={640} height={640} />
            </div>
            <div className='text-wrap w-1/2 max-md:w-full'>
              <div className='text-2xl font-bold my-10'><h2>DỄ THI CÔNG CẮT GHÉP</h2></div>
              <div>Dễ cắt bằng máy cắt cầm tay hoặc kéo nên có thể ốp tường với các góc cạnh, hình dáng phức tạp ngay tại công trình. Đặc biệt có thể ốp được các góc tường uốn cong theo mong muốn.</div>
            </div>
          </div>
          <div className='my-10'><p>Với giá cả phù hợp, vật liệu bền bỉ, dễ gia công vận chuyển và nhiều phụ kiện nam châm tích hợp, thép tráng men Kurashi là vật liệu tốt nhất để ốp bếp.</p></div>
        </div>
      </div>
    </div>
  )
}

export default BlogThepTrangMen
