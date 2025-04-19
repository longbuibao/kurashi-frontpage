import React from 'react'
import Image from 'next/image'
import { Post } from '@prisma/client'
import Link from 'next/link'
import { UrlObject } from 'url'
import { Chip } from '@/components/blog-sub-category-chip'

interface Hack extends Post {
  subcategroy: string[]
}

interface BlogCardHomepageProps {
  blog: Hack
}

const BlogCardHomepage: React.FC<BlogCardHomepageProps> = ({ blog }) => {
  return (
    <Link href={blog.url as any as UrlObject} className='size-96'>
      <div className='flex flex-col justify-center shadow-lg bg-[#fff] border border-opacity-20 border-[#000] group w-full h-full'>
        <Image className='h-1/2' src={blog.thumbnail} alt='phụ kiện nam châm bếp' width={700} height={450} />
        <div className='flex flex-col group-hover:bg-main p-3 duration-150 ease-in-out h-full'>
          <div className='flex flex-col gap-3'>
            <div className='font-bold line-clamp-2 group-hover:text-kurashiX'>{blog.title}</div>
            <div className='flex flex-row gap-2'>
              {blog.subcategroy.map(x => <Chip key={x} label={x} />)}
            </div>
            <p className='font-thin line-clamp-1 group-hover:text-kurashiX mt-3'>{blog.summary}</p>
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
