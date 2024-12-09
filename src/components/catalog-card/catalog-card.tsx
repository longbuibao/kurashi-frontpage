import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { KurashiLeftBorder } from '@/components/kurashi-div'

interface CatalogCardProps {
  thumbnail: string
  catalogName: string
  fileSize: string
  pdfLink: string
  isShowName?: boolean
}

const CatalogCard: React.FC<CatalogCardProps> = ({ thumbnail, catalogName, fileSize, pdfLink, isShowName = true }) => {
  return (
    <div className='flex flex-col gap-3'>
      <div className='relative'>
        <Image width={640} height={905} src={thumbnail} alt='' />
        <Link href={pdfLink} target='_blank' rel='noreferrer'>
          <div className='bg-[#000] bg-opacity-30 opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold'>
            <i className='fa-solid fa-arrow-down' />
          </div>
        </Link>
      </div>
      {isShowName &&
        <div>
          <div className='mt-5'>
            <KurashiLeftBorder>
              <div className='text-xl'>
                {catalogName}
              </div>
            </KurashiLeftBorder>
          </div>
        </div>}
    </div>
  )
}

export default CatalogCard
