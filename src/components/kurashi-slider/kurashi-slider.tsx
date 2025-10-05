'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const steps = [
  { thumbnail: 'https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua/thumb_feature_1.png', label: 'TÍCH HỢP PHỤ KIỆN', title: 'PHỤ KIỆN NAM CHÂM, KHÔNG CẦN KHOAN', content: 'Tấm ốp tường hút nam châm cho phép gắn, tháo và di chuyển phụ kiện từ tính tự do mà không cần khoan, giúp bề mặt tường luôn nguyên vẹn.' },
  { thumbnail: 'https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua/thumb_feature_1.png', label: 'CHỐNG Ố', title: 'KHÓ BÁM BẨN VÀ DỄ VỆ SINH', content: 'Bề mặt hard coating chống bám dầu mỡ và bụi bẩn, giúp lau chùi nhanh chóng, đặc biệt phù hợp cho khu bếp thường xuyên có nhiều vết bẩn.' },
  { thumbnail: 'https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua/thumb_feature_1.png', label: 'DỄ THI CÔNG', title: 'DỄ CẮT GHÉP VÀ THI CÔNG NHANH CHÓNG', content: 'Tấm ốp tường hút nam châm có trọng lượng nhẹ hơn nhiều so với ốp đá tự nhiên, dễ cắt ghép và thi công, giúp giảm đáng kể chi phí nhân công và thời gian lắp đặt.' }
]

const KurashiSlider = (): React.ReactElement => {
  const [index, setIndex] = useState(0)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const startAutoSlide = (): void => {
    timerRef.current = setInterval(() => {
      setIndex(prev => (prev + 1) % steps.length)
    }, 3000)
  }

  const stopAutoSlide = (): void => {
    if (timerRef.current != null) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }

  useEffect(() => {
    startAutoSlide()
    return () => stopAutoSlide()
  }, [])

  const handleClick = (y: number): void => {
    stopAutoSlide()
    setIndex(y)
    startAutoSlide()
  }

  return (
    <div>
      <div className='w-full flex-col items-center justify-center mt-14 h-80'>
        <div key={steps[index].title} className='flex flex-row gap-10 w-4/5 mx-auto animate-fade-in'>
          <Image src={steps[index].thumbnail} width={308} height={191} alt={steps[index].content} />
          <div className='flex flex-col gap-5'>
            <div>{steps[index].title}</div>
            <div>{steps[index].content}</div>
          </div>
        </div>
      </div>
      <div className='w-full bg-secondary h-[1px] relative -mt-10]'>
        <div className='w-4/5 mx-auto flex flex-row justify-between absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'>
          {steps.map((x, y) => {
            const isActive = index === y
            const className = `size-9 rounded-full transition-colors ${isActive ? 'bg-main text-secondary' : 'bg-secondary border-black'}`
            return (
              <button onClick={() => handleClick(y)} key={x.title} className={className}>
                <i className='fa-solid fa-chevron-right' />
              </button>
            )
          })}
        </div>
      </div>
    </div>

  )
}

export default KurashiSlider
