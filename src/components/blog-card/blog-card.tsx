import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface BlogCardProps {
  imgSrc: string
  title: string
  summary: React.ReactNode
  dateUpload: string
  url: string
}

const BlogCard: React.FC<BlogCardProps> = ({ imgSrc, summary, title, dateUpload, url }) => {
  return (
    <div className='h-full border-2 flex flex-col border-main p-2 rounded-3xl'>
      <Link href={url}>
        <div className='my-3 text-2xl font-semibold hover:text-main pb-2 border-b-2 hover:border-b-main w-fit mx-auto'>{title}</div>
      </Link>
      <div className='flex flex-row mx-3 mt-3'>
        <div className='text-wrap w-1/2 pb-5 pl-5 pr-5'>{summary}</div>
        <Image width={500} height={500} src={imgSrc} alt='Blog Image' className='w-1/2 max-lg:w-full mb-auto rounded-3xl' />
      </div>
    </div>

  )
}

export default BlogCard
