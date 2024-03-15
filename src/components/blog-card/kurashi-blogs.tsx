import React from 'react'

import BlogCard from './blog-card'

import prisma from '@/lib/prisma'

// @ts-expect-error
const KurashiBlogs: Promise<React.JSX.Element> = async () => {
  const blogs = await prisma.post.findMany({ take: 2, where: { published: true } })
  return (
    <div className='flex flex-row gap-5 justify-center max-lg:flex-wrap'>
      {blogs?.map(blog => <BlogCard url={blog.url} key={blog.content} content={blog.content} imgSrc={blog.thumbnail} title={blog.title} dateUpload={blog.createdAt.toLocaleDateString()} />)}
    </div>
  )
}

export default KurashiBlogs
