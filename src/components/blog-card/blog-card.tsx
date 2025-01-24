import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { UrlObject } from 'url'

interface BlogCardProps {
  imgSrc: string
  title: string
  summary: React.ReactNode
  dateUpload: string
  url: string
}

const BlogCard: React.FC<BlogCardProps> = ({ imgSrc, summary, title, dateUpload, url }) => {
  return (
    <div className='h-full flex flex-col shadow hover:shadow-xl relative blog-card--hover'>
      <Link href={url as any as UrlObject}>
        <div className='flex flex-row'>
          <Image width={300} height={207} src={imgSrc} alt='Blog Image' className='w-full h-full mb-auto' />
        </div>
        <div className='text-secondary p-2 flex flex-col justify-center items-center mx-auto absolute bottom-0 w-full bg-main h-[20%] opacity-70 text-center'>
          <div className='text-xl'>{title.toUpperCase()}</div>
          <div>{summary}</div>
        </div>
      </Link>
    </div>

  )
}

export default BlogCard
