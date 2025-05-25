import React, { Suspense } from 'react'
import { Metadata } from 'next'
import * as fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'
import Image from 'next/image'
import Link from 'next/link'

import { BlogRegister } from '@/components/blog-register'
import * as skeleton from './skeleton'
import { getMetadata } from '@/utils'

import { BlogPost } from './interface'
import BlogCategoryFilter from './blog-by-category'

export async function generateMetadata (): Promise<Metadata> {
  const defaultTitle = 'Tất cả bài viết'
  const pageName = 'all-blogs'
  return await getMetadata(pageName, defaultTitle)
}

const Navigator: React.FC<{ label: string, isSelected: boolean }> = ({ label, isSelected }) => {
  const className = isSelected
    ? 'bg-blog text-black px-4 py-1 rounded-sm text-sm font-medium'
    : 'px-4 py-1 text-sm font-medium text-[rgb(134,135,135)]'
  return (
    <button className={className}>
      {label}
    </button>
  )
}

const MainBlogCard: React.FC<BlogPost> = ({ coverImage, title, category, author, date, fileName, excerpt, isSmallCard = false }) => {
  if (coverImage !== undefined && coverImage.coverImage) {
    return (
      <Link href={`/blog/${fileName}`}>
        <div className=''>
          <Image className='rounded-sm w-full' src={coverImage.coverImage.replace('/public', '')} alt='test' width={640} height={640} />
          <div className='w-4/5 mx-auto text-center flex flex-col gap-4 p-3 max-md:w-full'>
            <p className='font-extrabold text-2xl line-clamp-2 mx-auto mt-4'>{title}</p>
            <p className='line-clamp-1'>{excerpt}</p>
            <p className='uppercase text-[rgb(134,135,135)] font-semibold text-xs'>{date.toLocaleString('default', { month: 'short' })} {date.toLocaleString('default', { day: 'numeric' })} • {author.name}</p>
          </div>
        </div>
      </Link>
    )
  }
}

const RightSideBlogCard: React.FC<BlogPost> = ({ title, excerpt, date, author, coverImage, fileName }) => {
  if (coverImage !== undefined && coverImage.coverImage) {
    return (
      <Link href={`/blog/${fileName}`}>
        <div className='flex flex-row justify-between'>
          <div className='w-96'>
            <p className='font-bold text-lg'>{title}</p>
            <p className='text-sm my-3'>{excerpt}</p>
            <p className='uppercase text-[rgb(134,135,135)] font-semibold text-xs'>{date.toLocaleString('default', { month: 'short' })} {date.toLocaleString('default', { day: 'numeric' })} • {author.name}</p>
          </div>
          <div className='ml-2'>
            <Image className='object-cover flex-shrink-0 rounded-sm' src={coverImage.coverImage?.replace('/public', '')} alt='test' width={200} height={100} />
          </div>
        </div>
      </Link>

    )
  }
}

const createCategoriesNavigator = (posts: any[]): React.ReactElement[] => {
  const categoryMap: Record<string, Set<string>> = {}
  posts.forEach(post => {
    const hack = post as BlogPost
    if (!categoryMap[hack.category]) {
      categoryMap[hack.category] = new Set()
    }
    hack.subcategory?.forEach(sub => categoryMap[hack.category].add(sub))
  })

  const groupSubCategoriesByCategory: Record<string, string[]> = {}

  for (const [category, subSet] of Object.entries(categoryMap)) {
    groupSubCategoriesByCategory[category] = Array.from(subSet)
  }

  const categoryKeys = Object.keys(groupSubCategoriesByCategory)
  const navigators = [
    <Navigator isSelected label='Tất cả' key='all' />,
    ...categoryKeys.map((x, i) => (
      <Navigator isSelected={false} label={x} key={x} />
    ))
  ]

  return navigators
}

// @ts-expect-error
const AllBlogs: React.FC = async (): React.ReactElement => {
  const postsDirectory = path.join(process.cwd(), '_posts')
  const fileNames = await fs.readdir(postsDirectory)
  const posts = (
    await Promise.all(
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
    ))
    .sort((a, b) => (b as any).date - (a as any).date)
    .filter(x => (x as any).isReadyForPublish)

  const firstBlog = posts[0] as any as BlogPost

  return (
    <div className='w-[60%] mx-auto py-10 max-md:w-[90%]'>
      <div className='max-md:w-full flex flex-col max-md:flex-col max-md:gap-10'>
        <Suspense>
          <div className='flex flex-col max-md:w-full max-md:p-5'>
            <div className='flex flex-col gap-5 mb-10 max-md:mb-5'>
              <div className='flex-row flex gap-3 border-b-[1px] border-main pb-5 max-md:flex-col'>
                <div className='mt-auto text-xl leading-9'>KURASHI</div>
                <div className='text-7xl text-main font-bold'>BLOG</div>
              </div>
              <p className='font-thin'>
                Xu hướng, công nghệ và vật liệu về nội thất mới nhất từ Nhật Bản
              </p>
            </div>
          </div>
          <div className='flex flex-row gap-10 mt-3 max-md:flex-col'>
            <div className='w-1/2 max-md:w-full max-md:mx-auto'>
              <MainBlogCard {...firstBlog} />
            </div>
            <div className='w-[1px] bg-kurashi-border-color' />
            <div className='flex flex-col gap-14'>
              {posts.slice(0, 4).map(x => <RightSideBlogCard {...(x as any as BlogPost)} key={x.realFileName} />)}
            </div>
          </div>
          <BlogCategoryFilter posts={posts as any as BlogPost[]} />
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
      </div>
    </div>
  )
}

export default BlogsPage
