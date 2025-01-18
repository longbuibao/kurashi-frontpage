import React from 'react'
import { useInView } from 'react-intersection-observer'

import * as transKey from '@/i18n/thep-trang-men'
import { ApplicationCard } from '@/components/thep-trang-men-feature-card'
import { applications } from './const'

interface PartUngDungThepTrangMenProps {
  setCurrentInViewDivId: (id: string) => void
}

const PartUngDungThepTrangMen: React.FC<PartUngDungThepTrangMenProps> = ({ setCurrentInViewDivId }) => {
  const { ref } = useInView({
    threshold: 0.5,
    onChange: (inView, _) => {
      if (inView) {
        setCurrentInViewDivId(`${transKey.application}`)
      }
    },
    root: null
  })

  return (
    <div ref={ref} id={`${transKey.application}`} className='flex flex-col gap-5'>
      <div className='text-3xl'>ỨNG DỤNG ỐP TƯỜNG</div>
      <div>Thép tráng men được sử dụng để làm tấm ốp tường như ốp tường bếp, ốp tường lavabo phòng tắm hoặc ốp tường văn phòng.</div>
      <div className='flex flex-col gap-10 bg-secondary'>
        {applications.map(application => (
          <div key={application.key}>
            <ApplicationCard content={application.content} key='' thumbnail={application.thumbnail} title={application.title} />
          </div>))}
      </div>
    </div>

  )
}

export default PartUngDungThepTrangMen
