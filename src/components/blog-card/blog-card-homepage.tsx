import React from 'react'
import Image from 'next/image'
import { Post } from '@prisma/client'

interface BlogCardHomepageProps {
  blog: Post
}

const BlogCardHomepage: React.FC<BlogCardHomepageProps> = ({ blog }) => {
  return (
    <div className='blog-card-homepage--hover overflow-hidden'>
      <div><Image className='w-full transform transition-transform duration-500 hover:shadow-md' src={blog.thumbnail} alt='phụ kiện nam châm bếp' width={400} height={471} /></div>
      <div className='mt-7 text-lg'>
        <div>{blog.summary}</div>
        <div className='mt-5'>{blog.createdAt.toLocaleDateString()}</div>
      </div>
    </div>
  )
}

export default BlogCardHomepage
