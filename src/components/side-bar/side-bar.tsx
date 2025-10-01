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
    <div className='flex flex-col pr-3 h-fit gap-5 w-60 sticky top-32'>
      {sectionTitles.map(x => {
        const className = currentDivId === x ? 'font-bold text-main border-r-main border-r-[2px]' : 'font-normal'
        return (
          <Link href={`#${x}`} scroll key={x}>
            <div className={className}>
              {t(x)}
            </div>
          </Link>
        )
      }
      )}
      <Link href='/lien-he'>
        <div className='flex flex-col gap-3'>
          <div className='flex flex-row gap-5 bg-main text-secondary justify-center p-3 mt-10'>
            <div className='text-center'>
              Liên hệ
            </div>
            <div>
              <i className='fa-solid fa-chevron-right' />
            </div>
          </div>
          <div className='opacity-55 text-sm'>
            nhận mẫu, tư vấn, báo giá nhanh
          </div>
        </div>
      </Link>
    </div>
  )
}

export default SideBar
