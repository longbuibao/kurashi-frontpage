import React, { Suspense } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Image from 'next/image'

import prisma from '@/lib/prisma'
import { useTranslation } from '@/i18n'
import { BlogSkeleton, BlogCard } from '@/components/blog-card'
import { AboutKurashiCard } from '@/components/about-kurashi-card'
import { KurashiCategories, KurashiCategoriesSkeleton } from '@/components/kurashi-categories'
import { products } from '@/i18n/translation-key'
import { carouselSliderImages } from '@/constants'
import EmblaCarousel from '@/components/embla-carousel/embla-carousel'

interface PageParam {
  params: { lng: string }
}

export const metadata = {
  title: 'Kurashi Corp'
}

const createCarouselItemImage = (imageSrc: string): { key: string, content: React.ReactElement } => {
  return {
    key: uuidv4(),
    content: <Image src={imageSrc} width={1920} height={1080} alt='picture' quality={100} />
  }
}

const Page = async ({ params: { lng } }: PageParam): Promise<React.ReactElement> => {
  const { t } = await useTranslation(lng)
  const carouselSliders = carouselSliderImages.map(createCarouselItemImage)
  const blogs = await prisma.post.findMany({ take: 3, where: { published: true } })

  return (
    <main className='mt-5'>
      <div className='w-4/5 mx-auto max-lg:w-full relative'>
        <EmblaCarousel slides={carouselSliders} options={{ loop: true }} />
      </div>
      <div className='mx-auto mt-10 mb-5 w-fit flex flex-col gap-5 items-center'>
        <div className='text-5xl'>
          {t(products).toUpperCase()}
        </div>
        <div className='font-semibold'>
          Các giải pháp nội thất từ Nhật Bản
        </div>
        <div className='flex flex-row gap-5 items-center'>
          <div>phòng bếp</div>
          <div className='font-bold text-main text-2xl'> | </div>
          <div>phòng tắm</div>
        </div>
      </div>
      <Suspense fallback={<KurashiCategoriesSkeleton />}>
        <div className='mx-auto w-4/5'>
          {/* @ts-expect-error } */}
          <KurashiCategories lng={lng} />
        </div>
      </Suspense>
      <div className='bg-secondary mt-5 pb-10'>
        <div className='w-4/5 mx-auto max-lg:w-full'>
          <div className='flex flex-col items-center mb-10 gap-5'>
            <div className='mx-auto w-fit mt-10 flex-row flex items-center gap-3'>
              <div className='mt-auto text-xl'>
                KURASHI
              </div>
              <div className='text-5xl'>
                BLOG
              </div>
            </div>
            <div>
              Xu hướng, công nghệ và vật liệu tốt nhất cho không gian sống đẹp và tiện nghi
            </div>
          </div>
          <Suspense fallback={<BlogSkeleton />}>
            <div className='flex flex-row gap-5'>
              {blogs.map(blog => (
                <div className='w-full' key={blog.id}>
                  <BlogCard url={`/blogs/view/${blog.id}`} summary={blog.summary} imgSrc={blog.thumbnail} title={blog.title} dateUpload={blog.createdAt.toLocaleDateString()} />
                </div>))}
            </div>
          </Suspense>
        </div>
      </div>
      <div className='w-4/5 mx-auto mt-24 max-lg:w-full'>
        <div className='w-fit my-10'>
          <AboutKurashiCard lng={lng} />
        </div>
      </div>
    </main>
  )
}

export default Page
