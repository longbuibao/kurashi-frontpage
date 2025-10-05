import React from 'react'
import { useInView } from 'react-intersection-observer'
import { KurashiSlider } from '@/components/kurashi-slider'

import * as transKey from '@/i18n/thep-trang-men'

const steps =
  [
    {
      summary: 'CHỐNG Ố',
      thumbnail: 'https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua/thumb_feature_1.png',
      title: 'CHỐNG Ố VÀ DỄ VỆ SINH',
      content: 'Chống ố vượt trội với các loại thực phẩm, gia vị, hóa chất, sản phẩm chăm sóc cá nhân và các vết dầu mỡ văng ra khi nấu ăn. Vệ sinh lau chùi đơn giản.'
    },
    {
      summary: 'chống ố',
      thumbnail: 'https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua/thumb_feature_1.png',
      label: 'CHỐNG Ố',
      title: 'KHÓ BÁM BẨN VÀ DỄ VỆ SINH',
      content: 'Bề mặt hard coating chống bám dầu mỡ và bụi bẩn, giúp lau chùi nhanh chóng, đặc biệt phù hợp cho khu bếp thường xuyên có nhiều vết bẩn.'
    },
    {
      summary: 'Dễ thi công',
      thumbnail: 'https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua/thumb_feature_1.png',
      label: 'DỄ THI CÔNG',
      title: 'DỄ CẮT GHÉP VÀ THI CÔNG NHANH CHÓNG',
      content: 'Tấm ốp tường hút nam châm có trọng lượng nhẹ hơn nhiều so với ốp đá tự nhiên, dễ cắt ghép và thi công, giúp giảm đáng kể chi phí nhân công và thời gian lắp đặt.'
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
      <div className='text-3xl mt-10'>{'tính chất ưu việt'.toUpperCase()}</div>
      <div className='my-10'>Nhờ cấu trúc vật liệu tích hợp giữa lõi kim loại và phủ men sứ, thép trang men có nhiều ưu điểm nổi bật hơn so với các vật liệu ốp tường khác về khả năng chống xước, chống cháy, chống ố và dễ thi công.</div>
      <KurashiSlider steps={steps} />
    </div>
  )
}

export default PartTinhNangNoiBatThepTrangMen
