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
    <Link href={`/blog/${blog.fileName}` as any as UrlObject} className='size-[30rem] max-md:size-[20rem]'>
      <div className='flex flex-col justify-center group w-full h-full'>
        <Image className='h-full' src={blog.coverImage.coverImage.replace('/public', '')} alt='phụ kiện nam châm bếp' width={700} height={450} />
        <div className='flex flex-col py-3 max-md:py-1 duration-150 h-full'>
          <div className='flex flex-col gap-5 text-lg'>
            <div className='font-bold line-clamp-1 mt-5'>{blog.category.toUpperCase()}</div>
            <p className='font-thin line-clamp-3 mt-3 max-md:mt-0'>{blog.title}</p>
          </div>
        </div>
      </div>
    </Link>

  )
}

export default BlogCardHomepage
