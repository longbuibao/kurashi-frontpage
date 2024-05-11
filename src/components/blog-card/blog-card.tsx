import React from 'react'
import Link from 'next/link'

import { KurashiLink } from '@/components/kurashi-link'

interface BlogCardProps {
  imgSrc: string
  title: string
  summary: React.ReactNode
  dateUpload: string
  url: string
}

const BlogCard: React.FC<BlogCardProps> = ({ imgSrc, summary, title, dateUpload, url }) => {
  return (
    <div className='flex flex-row gap-3 bg-secondary max-lg:flex-col h-full justify-between'>
      <img src={imgSrc} alt='Blog Image' className='w-1/2 max-lg:w-full mb-auto' />
      <div className='flex flex-col gap-3 mx-auto'>
        <div className='flex flex-col justify-center items-center gap-5 hover:cursor-default mx-auto text-wrap'>
          <KurashiLink>
            <Link href={url}>
              <div className='text-xl font-semibold text-center p-2 text-wrap max-sm:text-sm max-sm:p-0'>{title.toLocaleUpperCase()}</div>
            </Link>
          </KurashiLink>
          <div className='text-center max-sm:text-sm'>{summary}</div>
        </div>
        <div className='text-center mt-auto mb-2 max-sm:text-sm'><i className='fa-regular fa-calendar-days' /> {dateUpload}</div>
      </div>
    </div>
  )
}

export default BlogCard
