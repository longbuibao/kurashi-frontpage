import React, { Suspense } from 'react'
import { notFound } from 'next/navigation'

import { BlogCard } from '@/components/blog-card'
import { KurashiLeftBorder, KurashiDiv } from '@/components/kurashi-div'
import * as transKey from '@/i18n/blog-page-trans-key'
import { blogPageNs } from '@/i18n/settings'
import { BlogRegister } from '@/components/blog-register'
import { PaginationBar } from '@/components/pagination-bar'
import AllBlogsSkeleton from './all-blogs-skeleton'
import prisma from '@/lib/prisma'
import { useTranslation } from '@/i18n'

interface PageParam {
  params: { lng: string, page: string }
}

const AllCategories: React.FC = async () => {
  const categories = await prisma.postCategory.findMany({ where: { published: true } })
  return (
    <div>
      {categories.map(category => <div key={category.id} className='hover:cursor-pointer'><KurashiDiv>{category.categoryName}</KurashiDiv></div>)}
    </div>
  )
}

// @ts-expect-error
const AllBlogs: React.FC<{ lng: string, page: string, numOfBlogs: number }> = async ({ lng, page, numOfBlogs }): React.ReactElement => {
  const { t } = await useTranslation(lng, blogPageNs)
  if (parseInt(page) < 0) return notFound()
  const toSkip = numOfBlogs * parseInt(page)
  const blogs = await prisma.post.findMany({ where: { published: true }, skip: toSkip, take: numOfBlogs, include: { postCategory: true, author: true } })
  const numberOfBlogs = await prisma.post.count()
  if (blogs.length > 0) {
    return (
      <div className='my-10'>
        <div className='grid grid-cols-2 grid-rows-2 max-lg:grid-cols-1 max-lg:grid-rows-1'>
          {blogs.map(blog => (
            <div key={blog.id} className='m-1'>
              <BlogCard url={blog.url} key={blog.content} content={blog.content} imgSrc={blog.thumbnail} title={blog.title} dateUpload={blog.createdAt.toLocaleDateString()} />
            </div>
          ))}
        </div>
        <div className='w-4/5 mx-auto my-10'><PaginationBar maxPages={Math.round(numberOfBlogs / 4)} /></div>
      </div>
    )
  }
  return (
    <div className='my-10 w-4/5 flex flex-col items-center justify-center '>
      <div className='w-[100vh] text-center mx-auto my-10 flex flex-row gap-1 items-center justify-center'>
        <i className='fa-solid fa-wrench' />
        <div>{t(transKey.weAreUpdating)}</div>
      </div>
      <div className='w-[100vh] mx-auto my-10'><PaginationBar maxPages={Math.round(numberOfBlogs / 4)} /></div>
    </div>
  )
}

const BlogsPage: React.FC<PageParam> = async ({ params: { lng, page } }: PageParam) => {
  const { t } = await useTranslation(lng, blogPageNs)
  return (
    <div className='w-4/5 mx-auto max-lg:w-full'>
      <div>
        <div className='my-5 ml-4'>
          <KurashiLeftBorder>
            {t(transKey.allBlogsTitle)}
          </KurashiLeftBorder>
        </div>
        <div className='flex flex-row gap-10 max-lg:w-full max-lg:flex-col'>
          <div>
            <Suspense fallback={<AllBlogsSkeleton />}>
              <AllBlogs lng={lng} numOfBlogs={4} page={page} />
            </Suspense>
          </div>
          <div className='flex flex-col gap-10'>
            <div>
              <BlogRegister />
            </div>
            <Suspense>
              <div className='ml-4'>
                <KurashiLeftBorder>
                  {t(transKey.allCategories)}
                </KurashiLeftBorder>
              </div>
              <div>
                <AllCategories />
              </div>
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogsPage
