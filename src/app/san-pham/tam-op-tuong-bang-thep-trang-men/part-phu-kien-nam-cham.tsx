import React from 'react'
import { useInView } from 'react-intersection-observer'

import * as transKey from '@/i18n/thep-trang-men'
import { imageUrls } from './const'
import { EmblaCarousel } from '@/components/embla-carousel'
import Link from 'next/link'

interface PartPartPhuKienNamChamProps {
  setCurrentInViewDivId: (id: string) => void
}

const PartPhuKienNamCham: React.FC<PartPartPhuKienNamChamProps> = ({ setCurrentInViewDivId }) => {
  const { ref } = useInView({
    threshold: 0.4,
    onChange: (inView, _) => {
      if (inView) {
        setCurrentInViewDivId(`${transKey.magnetAccessories}`)
      }
    },
    root: null
  })

  return (
    <div ref={ref} id={`${transKey.magnetAccessories}`} className='my-32'>
      <div className='text-3xl'>PHỤ KIỆN BẾP HÚT NAM CHÂM</div>
      <div className='my-10'>Do tấm ốp bếp bằng thép tráng men có lớp thép kim loại bên trong nên có thể kết hợp được các loại phụ kiện bếp hút nam châm. Bạn không cần phải khoan tường bếp và sử dụng ốc vít để treo phụ kiện. Đặc biệt bạn có thể di chuyển tự do các loại phụ kiện này đến bất kì vị trí nào mong muốn, giúp mang lại sự tiện lợi và gọn gàng cho gian bếp.Kurashi cung cấp nhiều loại <><Link className='text-main' href='/san-pham/phu-kien-bep'>phụ kiện bếp hút nam châm</Link></> thông minh và đa năng như kệ bếp, kệ đựng gia vị, hũ đựng gia vị, móc treo và giá treo dao thớt.</div>
      <EmblaCarousel biggerSlider useFlatControlButton slides={imageUrls} />
      <div className='flex flex-row gap-5 max-md:flex-col my-32'>
        <iframe
          src='https://www.youtube.com/embed/PPpMjHjyWuo'
          allowFullScreen
          className='w-full max-md:w-full h-96'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          title='video'
        />
        <div className='flex flex-col gap-10 items-center justify-center w-4/5'>
          <div className='text-2xl'>
            SỰ KHÁC BIỆT
          </div>
          <div className='text-center'>
            Thép tráng men là vật liệu gồm 6 lớp tích hợp giữa men kính và kim loại. Riêng lớp mặt gồm 2 lớp men kính (dual coating). Vật liệu được nung ở nhiệt độ cao và được  sản xuất 100% tại Nhật Bản
          </div>
        </div>
      </div>
    </div>
  )
}

export default PartPhuKienNamCham
