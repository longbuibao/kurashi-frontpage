import React from 'react'
import Link from 'next/link'

import { KurashiLeftBorder } from '@/components/kurashi-div'

interface CatalogCardProps {
  thumbnail: string
  catalogName: string
  fileSize: string
  pdfLink: string
}

const CatalogCard: React.FC<CatalogCardProps> = ({ thumbnail, catalogName, fileSize, pdfLink }) => {
  return (
    <div className='w-52 flex flex-col gap-3'>
      <Link href={pdfLink} target='_blank' rel='noreferrer'>
        <img src={thumbnail} alt='' />
      </Link>
      <div>
        <div>
          <KurashiLeftBorder>
            <div>
              {catalogName}
            </div>
            <div className='flex flex-row gap-3 items-center'>
              <Link href={pdfLink} target='_blank' rel='noreferrer'>
                <i className='fa-solid fa-file-arrow-down' />
              </Link>
              {fileSize}
            </div>
          </KurashiLeftBorder>
        </div>
      </div>
    </div>
  )
}

export default CatalogCard
