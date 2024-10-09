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
    <div ref={ref} className='pt-10 bg-secondary' id={`${transKey.application}`}>
      <div className='flex flex-col gap-10'>
        {applications.map(application => (
          <div key={application.key}>
            <ApplicationCard content={application.content} key='' thumbnail={application.thumbnail} title={application.title} />
          </div>))}
      </div>
    </div>
  )
}

export default PartUngDungThepTrangMen
