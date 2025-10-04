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

  return (
    <>
      <div ref={ref} id={c.tinhChat} className='mt-40 flex flex-col gap-5'>
        <div className='text-3xl'>TÍNH CHẤT ƯU VIỆT</div>
        <div className='my-10'>Tấm ốp tường hút nam châm Nhật Bản không chỉ sang trọng mà còn sở hữu những tính chất vượt trội: dễ dàng gắn phụ kiện từ tính, chống bám bẩn và dễ vệ sinh, đồng thời nhẹ và dễ thi công hơn so với ốp đá truyền thống.</div>
      </div>
      <KurashiSlider />
    </>
  )
}

export default PartTinhChat
