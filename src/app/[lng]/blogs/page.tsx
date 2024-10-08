import React, { Suspense } from 'react'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

import { BlogCardHomepage } from '@/components/blog-card'
import { KurashiDiv } from '@/components/kurashi-div'
import * as transKey from '@/i18n/blog-page-trans-key'
import { BlogRegister } from '@/components/blog-register'
import { PaginationBar } from '@/components/pagination-bar'
import * as skeleton from './skeleton'
import prisma from '@/lib/prisma'
import { useTranslation } from '@/i18n'
import { defaultBlogsLink } from '@/constants'
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
      <div className='w-[50%] mx-auto p-10'>
        <div className='max-md:w-full flex flex-row gap-36 max-md:flex-col max-md:gap-10'>
          <Suspense>
            <div className='w-1/2 flex flex-col max-md:w-full max-md:p-5'>
              <div className='flex flex-col gap-5 mb-10'>
                <div className='flex-row flex gap-3 border-b-[1px] border-main pb-5'>
                  <div className='mt-auto text-xl leading-9'>KURASHI</div>
                  <div className='text-7xl text-main font-bold'>BLOG</div>
                </div>
                <p className='font-thin'>
                  Xu hướng, công nghệ và vật liệu về nội thất mới nhất từ Nhật Bản
                </p>
              </div>
              <BlogCardHomepage blog={blogs[1]} />
            </div>
            <div className='w-1/2 max-md:w-full max-md:p-5'>
              <div className='flex flex-col items-center gap-14 overflow-hidden'>
                <BlogCardHomepage blog={blogs[2]} />
                <BlogCardHomepage blog={blogs[0]} />
              </div>
            </div>
          </Suspense>
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
  return (
    <div className='mx-auto mb-10'>
      <div className='flex flex-col gap-5'>
        <div className='flex w-full bg-[#C0CCD4]'>
          <Suspense fallback={<skeleton.AllBlogsSkeleton />}>
            <AllBlogs lng={lng} numOfBlogs={4} searchParams={searchParams} />
          </Suspense>
        </div>
        <div className='flex flex-col gap-10 items-center mx-auto'>
          <BlogRegister />
          <Suspense fallback={<skeleton.AllCategoriesSkeleton />}>
            <div className='w-fit max-lg:mx-auto'>
              <AllCategories lng={lng} />
            </div>
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default BlogsPage
