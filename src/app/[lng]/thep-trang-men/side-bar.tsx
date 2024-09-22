'use client'

import React from 'react'
import Link from 'next/link'
import { useTranslationClient } from '@/i18n/client-side'

interface LinkToDivIdProps {
  currentDivId: string
  sectionTitles: string[]
}

const SideBar: React.FC<LinkToDivIdProps> = ({ currentDivId, sectionTitles }) => {
  const { t } = useTranslationClient('vi', 'thep-trang-men', {})
  return (
    <div className='flex flex-col pr-3 h-fit border-r-2 gap-5 py-5 sticky top-32'>
      {sectionTitles.map(x => {
        const className = currentDivId === x ? 'w-fit p5 font-semibold' : 'w-fit p5'
        return (
          <Link href={`#${x}`} scroll key={x}>
            <div className={className}>
              {t(x)}
            </div>
          </Link>
        )
      }
      )}
    </div>
  )
}

export default SideBar
