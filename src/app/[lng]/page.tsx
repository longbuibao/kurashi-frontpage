import React, { Suspense } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Image from 'next/image'

import prisma from '@/lib/prisma'
import { useTranslation } from '@/i18n'
import { BlogSkeleton, BlogCard } from '@/components/blog-card'
import { AboutKurashiCard } from '@/components/about-kurashi-card'
import { KurashiCategories, KurashiCategoriesSkeleton } from '@/components/kurashi-categories'
import { blog, products } from '@/i18n/translation-key'
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
      <div className='w-4/5 mx-auto mt-24 max-lg:w-full'>
        <div className='my-10 about-card-bg'>
          <AboutKurashiCard lng={lng} />
        </div>
      </div>
      <div className='bg-secondary mt-20 pb-10'>
        <div className='w-[60%] mx-auto max-lg:w-full flex flex-row gap-36 py-20'>
          <Suspense fallback={<BlogSkeleton />}>
            <div className='w-1/2 flex flex-col justify-center'>
              <div className='flex flex-col gap-5 mb-10'>
                <div className='flex-row flex gap-3'>
                  <div className='mt-auto text-xl'>KURASHI</div>
                  <div className='text-7xl text-main font-bold'>BLOG</div>
                </div>
                <div className='text-lg'>
                  Xu hướng, công nghệ và vật liệu về nội thất mới nhất từ Nhật Bản
                </div>
              </div>
              <div>
                <div>
                  <div><Image className='w-full' src={blogs[1].thumbnail} alt='phụ kiện nam châm bếp' width={400} height={471} /></div>
                  <div className='mt-5 text-lg'>
                    <div>{blogs[1].summary}</div>
                    <div className='mt-5'>{blogs[1].createdAt.toLocaleDateString()}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-1/2'>
              <div className='flex flex-col items-center gap-14'>
                <div>
                  <div><Image className='w-full' src={blogs[2].thumbnail} alt='phụ kiện nam châm bếp' width={400} height={232} /></div>
                  <div className='mt-5 text-lg'>
                    <div>{blogs[2].summary}</div>
                    <div className='mt-5'>{blogs[2].createdAt.toLocaleDateString()}</div>
                  </div>
                </div>
                <div>
                  <div><Image className='w-full' src={blogs[0].thumbnail} alt='phụ kiện nam châm bếp' width={400} height={232} /></div>
                  <div className='mt-5 text-lg'>
                    <div>{blogs[0].summary}</div>
                    <div className='mt-5'>{blogs[0].createdAt.toLocaleDateString()}</div>
                  </div>
                </div>
              </div>
            </div>
          </Suspense>
        </div>
      </div>
    </main>
  )
}

export default Page
