import React, { Suspense } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Image from 'next/image'

import prisma from '@/lib/prisma'
import { useTranslation } from '@/i18n'
import { BlogSkeleton, BlogCard } from '@/components/blog-card'
import { SectionTitle } from '@/components/section-title'
import { AboutKurashiCard } from '@/components/about-kurashi-card'
import { KurashiCategories, KurashiCategoriesSkeleton } from '@/components/kurashi-categories'
import { products, blog } from '@/i18n/translation-key'
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
  const blogs = await prisma.post.findMany({ take: 2, where: { published: true } })

  return (
    <main className='mt-5'>
      <div className='w-4/5 mx-auto max-lg:w-full relative'>
        <EmblaCarousel slides={carouselSliders} options={{ loop: true }} />
      </div>
      <div className='mx-auto mt-0 mb-10 w-fit'>
        <SectionTitle title={t(products)} />
      </div>
      <Suspense fallback={<KurashiCategoriesSkeleton />}>
        <div className='mt-5 w-1/2 mx-auto'>
          {/* @ts-expect-error } */}
          <KurashiCategories lng={lng} />
        </div>
      </Suspense>
      <div className='w-4/5 mx-auto border-main border-t-2 my-10 max-lg:w-full'>
        <div className='mx-auto w-fit my-10'>
          <SectionTitle title={t(blog)} />
        </div>
        <Suspense fallback={<BlogSkeleton />}>
          <div className='flex flex-row gap-10 w-3/4 mx-auto'>
            {blogs.map(blog => (
              <div className='' key={blog.id}>
                <BlogCard url={`/blogs/view/${blog.id}`} summary={blog.summary} imgSrc={blog.thumbnail} title={blog.title} dateUpload={blog.createdAt.toLocaleDateString()} />
              </div>))}
          </div>
        </Suspense>
      </div>
      <div className='w-4/5 mx-auto border-main border-t-2 my-10 max-lg:w-full'>
        <div className='w-fit my-10'>
          <AboutKurashiCard lng={lng} />
        </div>
      </div>
    </main>
  )
}

export default Page
