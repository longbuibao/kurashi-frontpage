import React from 'react'
import Image from 'next/image'
import { Post } from '@prisma/client'
import Link from 'next/link'

interface BlogCardHomepageProps {
  blog: Post
}

const BlogCardHomepage: React.FC<BlogCardHomepageProps> = ({ blog }) => {
  const month = blog.createdAt.toLocaleString('default', { month: 'short' }).toUpperCase()
  const date = blog.createdAt.getDate()
  return (
    <Link href={blog.url}>
      <div className='flex flex-col w-[290px] shadow-lg rounded-3xl p-5 bg-[#fff] border border-opacity-20 border-[#000]'>
        <Image className='shadow-md rounded-xl' src={blog.thumbnail} alt='phụ kiện nam châm bếp' width={400} height={471} />
        <div className='flex flex-col w-16 h-16 rounded-lg shadow-lg items-center justify-center self-end mt-[-2.5rem] bg-count-bg'>
          <div className='text-2xl font-bold'>{date}</div>
          <div>{month}</div>
        </div>
        <div className='mt-7'>
          <div className='font-thin'>{blog.summary}</div>
        </div>
        <div className='flex flex-row gap-5 my-3'>
          <div className='w-8 h-8 rounded-full p-2 border border-opacity-20 border-[#000] flex flex-row justify-center items-center'>
            <i className='fa-solid fa-share text-[#000] text-opacity-50' />
          </div>
          <div className='w-8 h-8 rounded-full p-2 border border-opacity-20 border-[#000] flex flex-row justify-center items-center'>
            <i className='fa-solid fa-bookmark text-[#000] text-opacity-50' />
          </div>
        </div>
      </div>
    </Link>

  )
}

export default BlogCardHomepage
