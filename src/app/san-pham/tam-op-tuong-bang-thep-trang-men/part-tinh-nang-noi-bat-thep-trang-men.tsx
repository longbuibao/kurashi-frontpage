import React from 'react'
import { useInView } from 'react-intersection-observer'
import { KurashiSlider } from '@/components/kurashi-slider'

import * as transKey from '@/i18n/thep-trang-men'

const steps =
  [
    {
      summary: 'CHỐNG Ố',
      thumbnail: 'https://storage.googleapis.com/kurashi_frontpage_files/images/rework-thep-trang-men/chong-o.webp',
      title: 'CHỐNG Ố VÀ DỄ VỆ SINH',
      content: 'Chống ố vượt trội với các loại thực phẩm, gia vị, hóa chất, sản phẩm chăm sóc cá nhân và các vết dầu mỡ văng ra khi nấu ăn. Vệ sinh lau chùi đơn giản.'
    },
    {
      summary: 'CHỐNG XƯỚC',
      thumbnail: 'https://storage.googleapis.com/kurashi_frontpage_files/images/rework-thep-trang-men/chong-xuoc.webp',
      label: 'CHỐNG XƯỚC',
      title: 'CHỐNG XƯỚC',
      content: 'Thép tráng men không xước kể cả khi chà bằng bùi nhùi kim loại, nên bếp bền, duy trì sự sạch sẽ và vẻ đẹp lâu.'
    },
    {
      summary: 'CHỐNG CHÁY',
      thumbnail: 'https://storage.googleapis.com/kurashi_frontpage_files/images/rework-thep-trang-men/chong-chay.webp',
      label: 'CHỐNG CHÁY',
      title: 'CHỐNG CHÁY',
      content: 'Thép tráng men chống cháy, kể cả khi đốt trực tiếp. Đảm bảo an toàn phòng chống cháy nổ theo pháp luật.'
    }
  ]

interface Props {
  setCurrentInViewDivId: (id: string) => void
}

const PartTinhNangNoiBatThepTrangMen: React.FC<Props> = ({ setCurrentInViewDivId }) => {
  const { ref } = useInView({
    threshold: 0.5,
    onChange: (inView, _) => {
      if (inView) {
        setCurrentInViewDivId(`${transKey.standoutFeatures}`)
      }
    },
    root: null
  })

  return (
    <div ref={ref} id={`${transKey.standoutFeatures}`}>
      <div className='text-xl mt-10 max-md:text-center'>{'tính chất ưu việt'.toUpperCase()}</div>
      <div className='my-10 max-md:text-center max-md:px-5 max-md:my-5'>Nhờ cấu trúc vật liệu tích hợp giữa lõi kim loại và phủ men sứ, thép trang men có nhiều ưu điểm nổi bật hơn so với các vật liệu ốp tường khác về khả năng chống xước, chống cháy, chống ố và dễ thi công.</div>
      <KurashiSlider steps={steps} />
    </div>
  )
}

export default PartTinhNangNoiBatThepTrangMen
