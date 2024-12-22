import React from 'react'
import Image from 'next/image'
import { Post } from '@prisma/client'
import Link from 'next/link'

interface BlogCardHomepageProps {
  blog: Post
}

const BlogCardHomepage: React.FC<BlogCardHomepageProps> = ({ blog }) => {
  return (
    <Link href={blog.url}>
      <div className='flex flex-col w-[290px] shadow-lg bg-[#fff] border border-opacity-20 border-[#000]'>
        <Image src={blog.thumbnail} alt='phụ kiện nam châm bếp' width={400} height={471} />
        <div className='flex flex-col hover:bg-main hover:text-kurashiX p-3 duration-150 ease-in-out'>
          <div>
            <div className='font-bold line-clamp-1'>{blog.title}</div>
            <div className='font-thin line-clamp-3'>{blog.summary}</div>
          </div>
          <div className='mt-10 self-end'><i className='fa-solid fa-arrow-right' /></div>
        </div>
      </div>
    </Link>

  )
}

export default BlogCardHomepage
