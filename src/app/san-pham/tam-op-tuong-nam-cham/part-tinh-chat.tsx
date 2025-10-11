import React from 'react'
import { useInView } from 'react-intersection-observer'
import { KurashiSlider } from '@/components/kurashi-slider'

import * as c from './const'

interface PartThuNghiemDauMoProps {
  setCurrentInViewDivId: (id: string) => void
}

const PartTinhChat: React.FC<PartThuNghiemDauMoProps> = ({ setCurrentInViewDivId }) => {
  const { ref } = useInView({
    threshold: 1,
    onChange: (inView, _) => {
      if (inView) {
        setCurrentInViewDivId(c.tinhChat)
      }
    },
    root: null
  })

  const steps = [
    { summary: 'Tích hợp phụ kiện', thumbnail: 'https://storage.googleapis.com/kurashi_frontpage_files/images/tam-op-tuong-nam-cham/tich-hop-phu-kien.webp', label: 'TÍCH HỢP PHỤ KIỆN', title: 'PHỤ KIỆN NAM CHÂM, KHÔNG CẦN KHOAN', content: 'Tấm ốp tường hút nam châm cho phép gắn, tháo và di chuyển phụ kiện từ tính tự do mà không cần khoan, giúp bề mặt tường luôn nguyên vẹn.' },
    { summary: 'chống ố', thumbnail: 'https://storage.googleapis.com/kurashi_frontpage_files/images/tam-op-tuong-nam-cham/chong-o.webp', label: 'CHỐNG Ố', title: 'KHÓ BÁM BẨN VÀ DỄ VỆ SINH', content: 'Bề mặt hard coating chống bám dầu mỡ và bụi bẩn, giúp lau chùi nhanh chóng, đặc biệt phù hợp cho khu bếp thường xuyên có nhiều vết bẩn.' },
    { summary: 'Dễ thi công', thumbnail: 'https://storage.googleapis.com/kurashi_frontpage_files/images/tam-op-tuong-nam-cham/de-thi-cong.webp', label: 'DỄ THI CÔNG', title: 'DỄ CẮT GHÉP VÀ THI CÔNG NHANH CHÓNG', content: 'Tấm ốp tường hút nam châm có trọng lượng nhẹ hơn nhiều so với ốp đá tự nhiên, dễ cắt ghép và thi công, giúp giảm đáng kể chi phí nhân công và thời gian lắp đặt.' }
  ]

  return (
    <>
      <div ref={ref} id={c.tinhChat} className='mt-40 max-md:mt-20 max-md:text-center flex flex-col gap-5'>
        <div className='text-3xl'>TÍNH CHẤT ƯU VIỆT</div>
        <div className='my-10'>Tấm ốp tường hút nam châm Nhật Bản không chỉ sang trọng mà còn sở hữu những tính chất vượt trội: dễ dàng gắn phụ kiện từ tính, chống bám bẩn và dễ vệ sinh, đồng thời nhẹ và dễ thi công hơn so với ốp đá truyền thống.</div>
      </div>
      <KurashiSlider steps={steps} />
    </>
  )
}

export default PartTinhChat
