import React from 'react'

import BlogCard from './blog-card'
import { kurashiFetcher } from '@/utils/kurashi-fetcher'
import { KurashiBlog } from '@/types/kurashi-blog'

interface KurashiBlogsProps {
  lng: string
  kurashiBlogsUrl: string
}

// @ts-expect-error
const KurashiBlogs: Promise<React.JSX.Element> = async ({ kurashiBlogsUrl, lng }: KurashiBlogsProps) => {
  const blogs = await kurashiFetcher(kurashiBlogsUrl) as KurashiBlog[]
  await kurashiFetcher(kurashiBlogsUrl) as KurashiBlog[]
  return (
    <div className='flex flex-row gap-5 justify-center'>
      {blogs?.map(blog => <BlogCard url={blog.url} key={blog.content} content={blog.content} imgSrc={blog.thumbnail} title={blog.title} dateUpload={blog.date} />)}
    </div>
  )
}

export default KurashiBlogs
