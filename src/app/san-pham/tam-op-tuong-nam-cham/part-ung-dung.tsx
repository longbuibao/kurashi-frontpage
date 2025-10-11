import React from 'react'
import { useInView } from 'react-intersection-observer'

import { imageUrls, ungDung } from './const'
import { EmblaCarousel } from '@/components/embla-carousel'

interface PartPartPhuKienNamChamProps {
  setCurrentInViewDivId: (id: string) => void
}

const PartUngDungTamOp: React.FC<PartPartPhuKienNamChamProps> = ({ setCurrentInViewDivId }) => {
  const { ref } = useInView({
    threshold: 1,
    onChange: (inView, _) => {
      if (inView) {
        setCurrentInViewDivId(`${ungDung}`)
      }
    },
    root: null
  })

  return (
    <div ref={ref} id={`${ungDung}`} className='mt-40 max-md:mt-20 max-md:text-center'>
      <div className='text-3xl'>ỨNG DỤNG ĐA DẠNG</div>
      <div className='my-5'>
        Tấm ốp tường hút nam châm Nhật Bản không chỉ phù hợp làm tấm ốp bếp gọn gàng, tiện nghi mà còn được sử dụng cho tấm ốp lavabo, tường ngay lối vào để treo phụ kiện hàng ngày. Sản phẩm còn dễ dàng ứng dụng cho nhiều khu vực nội thất khác như phòng khách, phòng ngủ, góc làm việc, thậm chí cả trong công trình công cộng. Nhờ tính năng từ tính và bảng màu hiện đại, tấm ốp mang đến giải pháp lưu trữ và trang trí thông minh cho mọi không gian.
      </div>
      <EmblaCarousel biggerSlider useFlatControlButton slides={imageUrls} />
    </div>
  )
}

export default PartUngDungTamOp
