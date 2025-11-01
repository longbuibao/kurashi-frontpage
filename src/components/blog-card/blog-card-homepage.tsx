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
    <Link href={`/blog/${blog.fileName}` as any as UrlObject} className='size-[30rem] max-md:mx-2 max-md:h-fit'>
      <div className='flex flex-col justify-center group w-full h-full'>
        <div className='relative w-full h-[250px] sm:h-[400px] max-md:h-fit max-md:mb-3'>
          <Image
            src={blog.coverImage.coverImage.replace('/public', '')}
            alt='phụ kiện nam châm bếp'
            width={700} height={450}
            className='object-fill'
          />
        </div>

        <div className='flex flex-col py-3 max-md:py-1 duration-150 h-full'>
          <div className='flex flex-col gap-5 text-lg max-md:text-sm max-md:gap-3'>
            <div className='font-bold line-clamp-1 mt-5 max-md:mt-0'>{blog.category.toUpperCase()}</div>
            <p className='font-thin line-clamp-3 mt-3 max-md:mt-0 max-md:text-xs'>{blog.title}</p>
          </div>
        </div>
      </div>
    </Link>

  )
}

export default BlogCardHomepage
