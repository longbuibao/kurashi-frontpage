import React, { Suspense } from 'react'
import { Metadata } from 'next'
import * as fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'
import Image from 'next/image'
import { v4 as uuidv4 } from 'uuid'
import { Post } from '@prisma/client'
import Link from 'next/link'
import { UrlObject } from 'url'

import { BlogCardHomepage } from '@/components/blog-card'
import { BlogRegister } from '@/components/blog-register'
import * as skeleton from './skeleton'
import { getMetadata } from '@/utils'
import { Chip } from '@/components/blog-sub-category-chip'

const RibbonBadge = ({ number = 1, color = 'bg-orange-500', textColor = 'text-white' }): React.ReactElement => {
  return (
    <div
      className='w-6 h-10 bg-main text-kurashiX text-center text-sm font-bold relative'
      style={{ clipPath: 'polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%)' }}
    >
      <div className='flex items-center justify-center h-full'>{number}</div>
    </div>
  )
}

export async function generateMetadata (): Promise<Metadata> {
  const defaultTitle = 'Tất cả bài viết'
  const pageName = 'all-blogs'
  return await getMetadata(pageName, defaultTitle)
}

interface Hack extends Post {
  subcategroy: string[]
}

interface BlogPost {
  slug: string
  category: string[]
  subcategroy: string[]
  title: string
  excerpt: string
  coverImage: string
  date: Date
  author: {
    name: string
    picture: string
  }
  ogImage: {
    url: string
  }
  content: string
  fileName: string
}

const MainBlogCard: React.FC<BlogPost> = ({ author, date, title, subcategroy, excerpt, fileName }) => {
  return (
    <div className='flex flex-col gap-8'>
      <div className='flex flex-row gap-5 items-center'>
        <Image src={author.picture.replace('/public', '')} width={30} height={30} alt='tác giả' />
        <div>viết bởi <span className='font-semibold'>{author.name}</span> vào ngày <span className='font-semibold'>{date.toLocaleDateString('vi-VN')}</span></div>
      </div>
      <div>
        <Link className='font-extrabold text-3xl hover:text-main duration-150 ease-in-out' href={`/blog/${fileName}`}>
          {title}
        </Link>
        <div className='flex flex-row gap-2 my-3'>
          {subcategroy.map(x => <Chip key={x} label={x} />)}
        </div>
      </div>
      <div>{excerpt}</div>
      <Link href={`/blog/${fileName}`} className='transition-colors duration-300 group border border-main text-gray-800 text-sm px-3 py-1 rounded-full w-fit hover:bg-main hover:text-kurashiX'>
        <div className='transition-colors duration-300 group-hover:text-kurashiX'>
          <i className='fa-regular fa-circle-right mr-3' />
          Tiếp tục đọc
        </div>
      </Link>
    </div>
  )
}

// @ts-expect-error
const AllBlogs: React.FC = async (): React.ReactElement => {
  const postsDirectory = path.join(process.cwd(), '_posts')
  const fileNames = await fs.readdir(postsDirectory)
  const posts = await Promise.all(
    fileNames
      .filter((file) => file.endsWith('.md'))
      .map(async (fileName) => {
        const slug = fileName.replace(/\.md$/, '')
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = await fs.readFile(fullPath, 'utf8')
        const { data, content } = matter(fileContents)
        return {
          slug,
          ...data,
          content
        }
      })
  )

  const postsByCategory = posts
    .map(x => {
      return {
        ...x,
        url: `/blog/${x.slug}`,
        thumbnail: (x as any).coverImage.replace('/public', ''),
        summary: (x as any).excerpt
      }
    })
    .reduce<Record<string, BlogPost[]>>((acc, post) => {
    const hack = post as any
    const category = hack.category || 'Uncategorized'
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(post as any as BlogPost)
    return acc
  }, {})

  const blogs = posts.map(x => {
    return {
      url: `/blog/${x.slug}`,
      thumbnail: (x as any).coverImage.replace('/public', ''),
      title: (x as any).title,
      summary: (x as any).excerpt,
      id: (x as any).title,
      category: (x as any).category
    }
  })

  const firstBlog = posts[0] as any as BlogPost
  const firstTwoBlogs = blogs.splice(0, 3)

  return (
    <div className='w-4/5 mx-auto py-10'>
      <div className='max-md:w-full flex flex-col max-md:flex-col max-md:gap-10'>
        <Suspense>
          <div className='flex flex-col max-md:w-full max-md:p-5'>
            <div className='flex flex-col gap-5 mb-10 max-md:mb-5'>
              <div className='flex-row flex gap-3 border-b-[1px] border-main pb-5'>
                <div className='mt-auto text-xl leading-9'>KURASHI</div>
                <div className='text-7xl text-main font-bold'>BLOG</div>
              </div>
              <p className='font-thin'>
                Xu hướng, công nghệ và vật liệu về nội thất mới nhất từ Nhật Bản
              </p>
            </div>
          </div>
          <div className='flex flex-row gap-14 mt-5 max-md:flex-col'>
            <div className='pr-16'>
              <MainBlogCard {...firstBlog} />
            </div>
            <div className='flex flex-col gap-6 w-1/3 max-md:w-full'>
              <div className='text-xl text-center text-kurashiX bg-main p-3'>
                <i className='fa-regular fa-star' />Top bài viết dành cho bạn
              </div>
              <div className='flex flex-col items-center justify-between h-full max-md:gap-5'>
                {firstTwoBlogs.map((x, y) => {
                  return (
                    <div key={uuidv4()} className='flex flex-row gap-3'>
                      <RibbonBadge number={y + 1} />
                      <div className='flex flex-col'>
                        <Link className='font-semibold hover:text-main duration-150 ease-in-out' href={x.url as any as UrlObject}>
                          {x.title}
                        </Link>
                        <div className='w-fit'>
                          <Chip label={x.category} />
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-5 items-center justify-between mt-10'>
            {Object.entries(postsByCategory).map(([category, posts]) => (
              <div key={category} className='w-full'>
                <h2 className='text-2xl font-semibold text-gray-800 my-10'>
                  {category}
                </h2>
                <div className='flex flex-row gap-5 max-md:flex-wrap max-md:pt-0 items-center justify-between'>
                  {posts.map((post) => (
                    <BlogCardHomepage blog={post as any as Hack} key={post.slug} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Suspense>
      </div>
    </div>
  )
}

const BlogsPage: React.FC = async () => {
  return (
    <div className='mx-auto mb-10'>
      <div className='flex flex-col gap-5'>
        <div className='flex w-full'>
          <Suspense fallback={<skeleton.AllBlogsSkeleton />}>
            <AllBlogs />
          </Suspense>
        </div>
        <div className='flex flex-col gap-10 items-center mx-auto'>
          <BlogRegister />
        </div>
      </div>
    </div>
  )
}

export default BlogsPage
