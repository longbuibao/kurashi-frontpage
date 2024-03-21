import React from 'react'
import Link from 'next/link'

import { KurashiLink } from '@/components/kurashi-link'

interface BlogCardProps {
  imgSrc: string
  title: string
  content: React.ReactNode
  dateUpload: string
  url: string
}

const BlogCard: React.FC<BlogCardProps> = ({ imgSrc, content, title, dateUpload, url }) => {
  return (
    <div className='flex flex-row gap-3 bg-secondary max-lg:flex-col w-1/2 max-lg:w-full'>
      <img src={imgSrc} alt='Blog Image' className='w-1/2 max-lg:w-full' />
      <div className='flex flex-col justify-center items-center gap-5 hover:cursor-default mx-auto text-wrap'>
        <KurashiLink>
          <Link href={url}>
            <div className='text-2xl font-semibold text-center'>{title.toLocaleUpperCase()}</div>
          </Link>
        </KurashiLink>
        <div className='text-center'>{content}</div>
        <div className='text-center mt-5'>{dateUpload}</div>
      </div>
    </div>
  )
}

export default BlogCard
