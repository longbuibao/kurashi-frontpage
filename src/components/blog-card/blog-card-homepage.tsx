import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { UrlObject } from 'url'
import { BlogPost } from '@/app/blog/interface'

interface BlogCardHomepageProps {
  blog: BlogPost
}

const BlogCardHomepage: React.FC<BlogCardHomepageProps> = ({ blog }) => {
  return (
    <Link href={`/blog/${blog.fileName}` as any as UrlObject} className='size-96'>
      <div className='flex flex-col justify-center group w-full h-full'>
        <Image className='h-[90%]' src={blog.coverImage.coverImage.replace('/public', '')} alt='phụ kiện nam châm bếp' width={700} height={450} />
        <div className='flex flex-col group-hover:bg-main p-3 duration-150 ease-in-out h-full'>
          <div className='flex flex-col gap-10'>
            <div className='font-bold line-clamp-1 group-hover:text-kurashiX'>{blog.title}</div>
            <p className='font-thin line-clamp-3 group-hover:text-kurashiX mt-3'>{blog.excerpt}</p>
          </div>
        </div>
      </div>
    </Link>

  )
}

export default BlogCardHomepage
