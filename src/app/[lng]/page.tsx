import React, { Suspense } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Image from 'next/image'

import prisma from '@/lib/prisma'
import { BlogSkeleton, BlogCardHomepage } from '@/components/blog-card'
import { AboutKurashiCard } from '@/components/about-kurashi-card'
import { KurashiCategories, KurashiCategoriesSkeleton } from '@/components/kurashi-categories'
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
  const carouselSliders = carouselSliderImages.map(createCarouselItemImage)
  const blogs = await prisma.post.findMany({ take: 3, where: { published: true } })

  return (
    <main className='mt-0'>
      <div className='max-lg:w-full relative w-4/5 mx-auto'>
        <EmblaCarousel slides={carouselSliders} options={{ loop: true }} />
      </div>
      <div className='w-4/5 mx-auto my-16 max-md:mt-5 max-md:mb-0'>
        <div className='w-full border-b-2 border-main'>
          <div className='text-3xl max-md:text-xl max-md:text-left font-bold w-[30%] max-md:w-full max-md:pb-5 pb-10'>GIẢI PHÁP NỘI THẤT TIÊN TIẾN TỪ NHẬT BẢN</div>
        </div>
        <div className='w-1/2 max-md:py-5 pt-10 max-md:w-full'>
          <div>Các giải pháp nội thất tiên tiến nhất về công nghệ vật liệu, thiết kế và gia công với chất lượng made in Japan để ngôi nhà luôn là nơi thoải mái nhất cho cả gia đình bạn.</div>
        </div>
      </div>
      <Suspense fallback={<KurashiCategoriesSkeleton />}>
        <div className='mx-auto w-4/5'>
          {/* @ts-expect-error } */}
          <KurashiCategories lng={lng} />
        </div>
      </Suspense>
      <div className='w-4/5 mx-auto mt-24 max-lg:w-full'>
        <div className='my-10 overflow-hidden'>
          <AboutKurashiCard lng={lng} />
        </div>
      </div>
      <div className='bg-secondary mt-20 pb-10 block max-md:hidden'>
        <div className='w-[60%] mx-auto max-lg:w-full flex flex-row gap-36 py-20'>
          <Suspense fallback={<BlogSkeleton />}>
            <div className='w-1/2 flex flex-col justify-center'>
              <div className='flex flex-col gap-5 mb-10'>
                <div className='flex-row flex gap-3'>
                  <div className='mt-auto text-xl leading-9'>KURASHI</div>
                  <div className='text-7xl text-main font-bold'>BLOG</div>
                </div>
                <div className='text-lg'>
                  Xu hướng, công nghệ và vật liệu về nội thất mới nhất từ Nhật Bản
                </div>
              </div>
              <BlogCardHomepage blog={blogs[1]} />
            </div>
            <div className='w-1/2'>
              <div className='flex flex-col items-center gap-14 overflow-hidden'>
                <BlogCardHomepage blog={blogs[2]} />
                <BlogCardHomepage blog={blogs[0]} />
              </div>
            </div>
          </Suspense>
        </div>
      </div>
      <div className='hidden max-md:block w-4/5 mx-auto'>
        <div className='my-10'>
          <BlogCardHomepage blog={blogs[1]} />
        </div>
        <div className='my-10'>
          <BlogCardHomepage blog={blogs[2]} />
        </div>
        <div className='my-10'>
          <BlogCardHomepage blog={blogs[0]} />
        </div>
      </div>
    </main>
  )
}

export default Page
