import React from 'react'
import Image from 'next/image'
import { Post } from '@prisma/client'
import Link from 'next/link'

interface BlogCardHomepageProps {
  blog: Post
}

const BlogCardHomepage: React.FC<BlogCardHomepageProps> = ({ blog }) => {
  return (
    <Link href={blog.url} className='size-96'>
      <div className='flex flex-col justify-center shadow-lg bg-[#fff] border border-opacity-20 border-[#000] group w-full h-full'>
        <Image className='h-1/2' src={blog.thumbnail} alt='phụ kiện nam châm bếp' width={700} height={450} />
        <div className='flex flex-col group-hover:bg-main group-hover:text-kurashiX p-3 duration-150 ease-in-out h-full'>
          <div className='flex flex-col gap-3'>
            <div className='font-bold line-clamp-2'>{blog.title}</div>
            <div className='font-thin line-clamp-3'>{blog.summary}</div>
          </div>
          <div className='mt-auto self-end text-main group-hover:text-kurashiX'>
            <i className='fa-solid fa-arrow-right' />
          </div>
        </div>
      </div>
    </Link>

  )
}

export default BlogCardHomepage
