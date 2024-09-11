import React, { Suspense } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid'
import { Metadata } from 'next'

import { BlogCard } from '@/components/blog-card'
import { KurashiLeftBorder, KurashiDiv } from '@/components/kurashi-div'
import * as transKey from '@/i18n/blog-page-trans-key'
import { blogPageNs } from '@/i18n/settings'
import { BlogRegister } from '@/components/blog-register'
import { PaginationBar } from '@/components/pagination-bar'
import * as skeleton from './skeleton'
import prisma from '@/lib/prisma'
import { useTranslation } from '@/i18n'
import { Breadcrumb } from '@/components/breadcrumb'
import { defaultBlogsLink, defaultBlogViewLink, homeLink } from '@/constants'
import { getMetadata } from '@/utils'

interface PageParam {
  params: { lng: string }
  searchParams?: { [key: string]: string }
}

export async function generateMetadata (): Promise<Metadata> {
  const defaultTitle = 'Tất cả bài viết'
  const pageName = 'all-blogs'
  return await getMetadata(pageName, defaultTitle)
}

const AllCategories: React.FC<{ lng: string }> = async ({ lng }) => {
  const categories = await prisma.postCategory.findMany({ where: { published: true } })
  const { t } = await useTranslation(lng, transKey.namespace)
  return (
    <div className='flex flex-row gap-3 max-lg:flex-col'>
      {categories.map(category => <div key={category.id} className='hover:cursor-pointer'><KurashiDiv>{t(category.categoryName)}</KurashiDiv></div>)}
    </div>
  )
}

// @ts-expect-error
const AllBlogs: React.FC<{ lng: string, numOfBlogs: number, searchParams: PageParam['searchParams'] }> = async ({ lng, searchParams, numOfBlogs }): React.ReactElement => {
  const { t } = await useTranslation(lng, transKey.namespace)
  if (parseInt(searchParams?.blogPage ?? '0') < 0) return notFound()
  const toSkip = numOfBlogs * parseInt(searchParams?.blogPage ?? '0')
  const blogs = await prisma.post.findMany({ where: { published: true }, skip: toSkip, take: numOfBlogs, include: { postCategory: true, author: true } })
  const numberOfBlogs = await prisma.post.count()
  if (blogs.length > 0) {
    return (
      <div className='flex-1'>
        <div className='grid grid-cols-2 grid-rows-2 max-lg:grid-cols-2 max-lg:grid-rows-2 max-sm:grid-cols-1 gap-3'>
          {blogs.map(blog => (
            <BlogCard
              url={`${defaultBlogViewLink}${blog.id}`}
              summary={blog.summary}
              imgSrc={blog.thumbnail}
              title={blog.title}
              key={blog.id}
              dateUpload={blog.createdAt.toLocaleDateString()}
            />
          ))}
        </div>
        <div className='w-4/5 mx-auto my-10'>
          <PaginationBar maxPages={Math.round(numberOfBlogs / 4)} baseLink={defaultBlogsLink} lng={lng} />
        </div>
      </div>
    )
  }
  return (
    <div className='my-10 w-4/5 flex flex-col items-center justify-center mx-auto'>
      <div className='text-center mx-auto my-10 flex flex-row gap-1 items-center justify-center'>
        <i className='fa-solid fa-wrench' />
        <div>{t(transKey.weAreUpdating)}</div>
      </div>
      <div className='mx-auto my-10'>
        <PaginationBar maxPages={Math.round(numberOfBlogs / 4)} baseLink={defaultBlogsLink} lng={lng} />
      </div>
    </div>
  )
}

const BlogsPage: React.FC<PageParam> = async ({ params: { lng }, searchParams }: PageParam) => {
  const { t } = await useTranslation(lng, blogPageNs)
  const breadcrumb = [
    <Link href={homeLink} key={uuidv4()}>{t(transKey.home)}</Link>,
    <Link href={defaultBlogsLink} key={uuidv4()}>{t(transKey.allBlogs)}</Link>
  ]
  return (
    <div className='w-4/5 mx-auto mb-10'>
      <div>
        <div className='mx-auto flex flex-row my-10 max-lg:justify-center'>
          <div>
            <div className='flex flex-row gap-5 items-center justify-center self-start ml-auto'>
              <Breadcrumb items={breadcrumb} separator={<i className='fa-solid fa-chevron-right' />} />
            </div>
          </div>
        </div>
        <div className='flex flex-row gap-5 max-2xl:flex-col'>
          <div className='flex w-full'>
            <Suspense fallback={<skeleton.AllBlogsSkeleton />}>
              <AllBlogs lng={lng} numOfBlogs={4} searchParams={searchParams} />
            </Suspense>
          </div>
          <div className='flex flex-col gap-10'>
            <div>
              <BlogRegister />
            </div>
            <Suspense fallback={<skeleton.AllCategoriesSkeleton />}>
              <div className='ml-4'>
                <KurashiLeftBorder>
                  {t(transKey.allCategories)}
                </KurashiLeftBorder>
              </div>
              <div className='w-fit max-lg:mx-auto'>
                <AllCategories lng={lng} />
              </div>
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogsPage
