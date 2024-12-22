'use client'

import React from 'react'
import Link from 'next/link'
import { useTranslationClient } from '@/i18n/client-side'

interface LinkToDivIdProps {
  currentDivId: string
  sectionTitles: string[]
  ns: string
}

const SideBar: React.FC<LinkToDivIdProps> = ({ currentDivId, sectionTitles, ns }) => {
  const { t } = useTranslationClient('vi', ns, {})
  return (
    <div className='flex flex-col pr-3 h-fit border-r-[0.5px] gap-5 w-48 sticky top-32'>
      {sectionTitles.map(x => {
        const className = currentDivId === x ? 'font-semibold' : 'font-normal'
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
