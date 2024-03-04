'use client'
import React from 'react'
import useSWR from 'swr'

import BlogCard from './blog-card'
import { kurashiFetcher } from '@/utils/kurashi-fetcher'
import { KurashiBlog } from '@/types/kurashi-blog'
import Loading from '@/app/[lng]/loading'
import { useTranslationClient } from '@/i18n/client-side'
import { KurashiError } from '@/components/kurashi-error'
import { defaultNS } from '@/i18n/settings'
import { errorMessage } from '@/i18n/translation-key'

interface KurashiBlogsProps {
  lng: string
  kurashiBlogsUrl: string
}

const KurashiBlogs: React.FC<KurashiBlogsProps> = ({ kurashiBlogsUrl, lng }) => {
  const { t } = useTranslationClient(lng, defaultNS, {})
  const { data, isLoading, error } = useSWR<KurashiBlog[]>(kurashiBlogsUrl, kurashiFetcher)
  if (isLoading) return <Loading />
  console.log(error)
  if (error) return <KurashiError message={t(errorMessage)} />
  return (
    <div className='flex flex-row gap-5 justify-center'>
      {data?.map(blog => <BlogCard url={blog.url} key={blog.content} content={blog.content} imgSrc={blog.thumbnail} title={blog.title} dateUpload={blog.date} />)}
    </div>
  )
}

export default KurashiBlogs
