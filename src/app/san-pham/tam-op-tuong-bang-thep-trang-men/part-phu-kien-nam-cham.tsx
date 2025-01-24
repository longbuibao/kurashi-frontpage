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
    threshold: 1,
    onChange: (inView, _) => {
      if (inView) {
        setCurrentInViewDivId(`${transKey.magnetAccessories}`)
      }
    },
    root: null
  })

  return (
    <div ref={ref} id={`${transKey.magnetAccessories}`} className='my-10'>
      <div className='text-3xl'>PHỤ KIỆN BẾP HÚT NAM CHÂM</div>
      <div className='my-10'>Do tấm ốp bếp bằng thép tráng men có lớp thép kim loại bên trong nên có thể kết hợp được các loại phụ kiện bếp hút nam châm. Bạn không cần phải khoan tường bếp và sử dụng ốc vít để treo phụ kiện. Đặc biệt bạn có thể di chuyển tự do các loại phụ kiện này đến bất kì vị trí nào mong muốn, giúp mang lại sự tiện lợi và gọn gàng cho gian bếp.Kurashi cung cấp nhiều loại <><Link className='text-main' href='/phu-kien-nam-cham'>phụ kiện bếp hút nam châm</Link></> thông minh và đa năng như kệ bếp, kệ đựng gia vị, hũ đựng gia vị, móc treo và giá treo dao thớt.</div>
      <EmblaCarousel useFlatControlButton slides={imageUrls} />
    </div>
  )
}

export default PartPhuKienNamCham
