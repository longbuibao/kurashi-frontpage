import React from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Metadata } from 'next'

import { Breadcrumb } from '@/components/breadcrumb'
import prisma from '@/lib/prisma'
import { SectionTitle } from '@/components/section-title'
import { useTranslation } from '@/i18n'
import * as transKey from '@/i18n/blog-single-view-trans-key'
import { getMetadata } from '@/utils'

export async function generateMetadata (): Promise<Metadata> {
  const defaultTitle = 'Bài viết'
  const pageName = 'single-blog'
  return await getMetadata(pageName, defaultTitle)
}

interface PageProps {
  params: { lng: string, id: string }
}

const BlogViewPage: React.FC<PageProps> = async ({ params }) => {
  const blog = await prisma.post.findUnique({ where: { id: params.id } })
  const { t } = await useTranslation(params.lng, transKey.namespace)
  const breadcrumb = [
    <Link href='/' key='a'>{t(transKey.home)}</Link>,
    <Link href='/blogs' key='b'>{t(transKey.allBlogs)}</Link>
  ]
  if (blog !== null) {
    return (
      <div>
        <div className='mx-auto flex flex-row w-4/5 my-10 max-lg:justify-center'>
          <div>
            <div className='flex flex-row gap-5 items-center justify-center self-start ml-auto'>
              <Breadcrumb items={breadcrumb} separator={<i className='fa-solid fa-chevron-right' />} />
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center w-4/5 mx-auto mb-10'>
          <div className='mx-auto w-fit mb-10'>
            <SectionTitle title={blog.title} />
          </div>
          <div>{blog.content}</div>
        </div>
      </div>

    )
  }

  return notFound()
}

export default BlogViewPage
