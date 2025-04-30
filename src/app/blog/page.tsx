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
import Dropdown from '@/components/dropdown/dropdown'
import DropdownItem from '@/components/dropdown/dropdown-item'

const RibbonBadge = ({ number = 1 }): React.ReactElement => {
  return (
    <div className='w-6 h-10 bg-[#F5F7F8] text-main font-semibold text-center text-sm relative max-md:px-2 px-5 rounded-md'>
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

const SimpleMainBlogCard: React.FC<BlogPost> = ({ coverImage, title, category, author, date, fileName, excerpt, isSmallCard = false }) => {
  console.log(excerpt)
  return (
    <Link href={`/blog/${fileName}`}>
      <div className='rounded-xl shadow-xl'>
        <Image className='rounded-tl-xl rounded-tr-xl w-full' src={coverImage.replace('/public', '')} alt='test' width={640} height={640} />
        <div className='p-5 flex flex-col gap-5'>
          <div className='w-fit'>
            <Chip label={category as any as string} />
          </div>
          {isSmallCard
            ? (
              <div className='flex flex-col gap-3'>
                <p className='line-clamp-1 text-lg font-semibold'>{title}</p>
                <p className='line-clamp-2'>{excerpt}</p>
              </div>)
            : <div className='text-2xl font-semibold'>{title}</div>}
          {isSmallCard
            ? <></>
            : (
              <div className='flex flex-row gap-5 items-center'>
                <i className='fa-solid fa-user text-main' />
                <div className='flex flex-row gap-3'>
                  <div>{author.name}</div>
                  <div>{date.toLocaleDateString('vi-VN')}</div>
                </div>
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

  const tags = new Set(posts.map(x => (x as any as BlogPost).subcategory).flat()).values()
  const firstBlog = posts[0] as any as BlogPost
  const topArticles = blogs.splice(0, 3)

  const categoryMap: Record<string, Set<string>> = {}
  posts.forEach(post => {
    const hack = post as any as BlogPost
    if (!categoryMap[hack.category]) {
      categoryMap[hack.category] = new Set()
    }
    hack.subcategory.forEach(sub => categoryMap[hack.category].add(sub))
  })

  const groupSubCategoriesByCategory: Record<string, string[]> = {}

  for (const [category, subSet] of Object.entries(categoryMap)) {
    groupSubCategoriesByCategory[category] = Array.from(subSet)
  }

  return (
    <div className='w-4/5 mx-auto py-10 max-md:w-[90%]'>
      <div className='max-md:w-full flex flex-col max-md:flex-col max-md:gap-10'>
        <Suspense>
          <div className='flex flex-col max-md:w-full max-md:p-5'>
            <div className='flex flex-col gap-5 mb-10 max-md:mb-5'>
              <div className='flex-row flex gap-3 border-b-[1px] border-main pb-5 max-md:flex-col'>
                <div className='mt-auto text-xl leading-9'>KURASHI</div>
                <div className='text-7xl text-main font-bold'>BLOG</div>
                <div className='flex flex-row gap-3 self-end justify-self-end ml-auto'>
                  {Object.entries(groupSubCategoriesByCategory).map(([buttonText, items]) => (
                    <Dropdown
                      key={buttonText} buttonText={buttonText} content={
                        <>
                          {items.map((item, index) => (
                            <DropdownItem key={index}>{item}</DropdownItem>
                          ))}
                        </>
                    }
                    />
                  ))}
                </div>
              </div>
              <p className='font-thin'>
                Xu hướng, công nghệ và vật liệu về nội thất mới nhất từ Nhật Bản
              </p>
            </div>
          </div>
          <div className='flex flex-row gap-14 mt-5 max-md:flex-col'>
            <div className='w-[50%] max-md:w-[90%] max-md:mx-auto'>
              <SimpleMainBlogCard {...firstBlog} />
            </div>
            <div className='flex flex-col gap-6 max-md:w-full w-1/3 ml-auto bg-[#fcfaf7] p-5 h-fit'>
              <div className='text-xl text-center text-main font-semibold'>
                {'Top bài viết dành cho bạn'.toUpperCase()}
              </div>
              <div className='flex flex-col items-center gap-10 h-full max-md:gap-5'>
                {topArticles.map((x, y) => {
                  return (
                    <div key={uuidv4()} className='flex flex-row gap-3 mx-auto'>
                      <RibbonBadge number={y + 1} />
                      <div className='flex flex-col items-center justify-center'>
                        <Link className='font-semibold hover:text-main duration-150 ease-in-out' href={x.url as any as UrlObject}>
                          <p className='text-wrap text-sm'>
                            {x.title}
                          </p>
                        </Link>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-5 items-center justify-between mt-10 max-md:mt-4'>
            <div className='flex flex-row gap-5 self-start my-6'>
              <div>Tags</div>
              {[...tags].map(x => <Link key={x} href='/'><Chip label={x} /></Link>)}
            </div>
            <div className='grid grid-cols-2 grid-rows-2 gap-10 max-md:grid-cols-2 max-md:grid-rows-3 max-md:gap-10 w-4/5 max-md:w-full'>
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
