import React, { Suspense } from 'react'
import { Metadata } from 'next'
import * as fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'
import Image from 'next/image'
import { v4 as uuidv4 } from 'uuid'
import Link from 'next/link'
import { UrlObject } from 'url'

import { BlogRegister } from '@/components/blog-register'
import * as skeleton from './skeleton'
import { getMetadata } from '@/utils'
import { Chip } from '@/components/blog-sub-category-chip'

const RibbonBadge = ({ number = 1, color = 'bg-orange-500', textColor = 'text-white' }): React.ReactElement => {
  return (
    <div
      className='w-6 h-10 bg-main text-kurashiX text-center text-sm font-bold relative max-md:px-2 px-3'
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

interface BlogPost {
  slug: string
  category: string
  subcategory: string[]
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
  isSmallCard?: boolean
}

const SimpleMainBlogCard: React.FC<BlogPost> = ({ coverImage, title, category, author, date, fileName, isSmallCard = false }) => {
  return (
    <Link href={`/blog/${fileName}`}>
      <div className='rounded-xl shadow-xl'>
        <Image className='rounded-tl-xl rounded-tr-xl w-full' src={coverImage.replace('/public', '')} alt='test' width={640} height={640} />
        <div className='p-5 flex flex-col gap-5'>
          <div className='w-fit'>
            <Chip label={category as any as string} />
          </div>
          {isSmallCard ? <p className='line-clamp-1 text-lg font-semibold'>{title}</p> : <div className='text-2xl font-semibold'>{title}</div>}
          {isSmallCard
            ? <></>
            : (
              <div className='flex flex-row gap-5 items-center'>
                <Image src={author.picture.replace('/public', '')} width={30} height={30} alt='tác giả' />
                <div>viết bởi <span className='font-semibold'>{author.name}</span> vào ngày <span className='font-semibold'>{date.toLocaleDateString('vi-VN')}</span></div>
              </div>)}
        </div>
      </div>
    </Link>
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
          content,
          realFileName: fileName
        }
      })
  )

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
  const topArticles = blogs.splice(0, 3)

  return (
    <div className='w-[57%] mx-auto py-10 max-md:w-[90%]'>
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
            <div className='w-full max-md:w-[90%] max-md:mx-auto'>
              <SimpleMainBlogCard {...firstBlog} />
            </div>
            <div className='flex flex-col gap-6 max-md:w-full mx-auto'>
              <div className='text-xl text-center text-kurashiX bg-main p-3'>
                <i className='fa-regular fa-star' />Top bài viết dành cho bạn
              </div>
              <div className='flex flex-col items-center gap-10 h-full max-md:gap-5'>
                {topArticles.map((x, y) => {
                  return (
                    <div key={uuidv4()} className='flex flex-row gap-3'>
                      <RibbonBadge number={y + 1} />
                      <div className='flex flex-col'>
                        <Link className='font-semibold hover:text-main duration-150 ease-in-out' href={x.url as any as UrlObject}>
                          <p className='line-clamp-1'>
                            {x.title}
                          </p>
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
          <div className='flex flex-col gap-5 items-center justify-between mt-20 max-md:mt-4'>
            <div className='text-2xl font-semibold mb-5'>Các bài viết khác</div>
            <div className='grid grid-cols-3 grid-rows-2 gap-10 max-md:grid-cols-2 max-md:grid-rows-3 max-md:gap-5'>
              {posts.splice(0, 6).map(x => <SimpleMainBlogCard {...(x as any as BlogPost)} key={x.realFileName} isSmallCard />)}
            </div>
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
