import React from 'react'

import BlogCard from './blog-card'

import prisma from '@/lib/prisma'

// @ts-expect-error
const KurashiBlogs: Promise<React.JSX.Element> = async () => {
  const blogs = await prisma.post.findMany({ take: 2, where: { published: true } })
  return (
    <div className='flex flex-row gap-3 max-lg:w-4/5 max-lg:mx-auto'>
      {blogs?.map(blog =>
        <div key={blog.id} className='w-1/2 max-lg:w-full'>
          <BlogCard url={`/blogs/view/${blog.id}`} summary={blog.summary} imgSrc={blog.thumbnail} title={blog.title} dateUpload={blog.createdAt.toLocaleDateString()} />
        </div>)}
    </div>
  )
}

export default KurashiBlogs
