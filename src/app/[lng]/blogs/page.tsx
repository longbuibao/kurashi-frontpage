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

// @ts-expect-error
const AllBlogs: React.FC<{ lng: string, numOfBlogs: number, searchParams: PageParam['searchParams'] }> = async ({ lng, searchParams, numOfBlogs }): React.ReactElement => {
  const { t } = await useTranslation(lng, transKey.namespace)
  if (parseInt(searchParams?.blogPage ?? '0') < 0) return notFound()
  const toSkip = numOfBlogs * parseInt(searchParams?.blogPage ?? '0')
  const blogs = await prisma.post.findMany({ where: { published: true }, skip: toSkip, take: numOfBlogs, include: { postCategory: true, author: true } })
  const numberOfBlogs = await prisma.post.count()
  if (blogs.length > 0) {
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
            <div className='flex flex-row gap-5 max-md:flex-wrap max-md:pt-0 pt-10 pb-16 items-center justify-between'>{blogs.map(x => <BlogCardHomepage blog={x} key={x.id} />)}</div>
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
        <div className='flex w-full'>
          <Suspense fallback={<skeleton.AllBlogsSkeleton />}>
            <AllBlogs lng={lng} numOfBlogs={4} searchParams={searchParams} />
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
