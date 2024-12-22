import React, { Suspense } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Image from 'next/image'

import prisma from '@/lib/prisma'
import { BlogCardHomepage } from '@/components/blog-card'
import { AboutKurashiCard } from '@/components/about-kurashi-card'
import { KurashiCategories, KurashiCategoriesSkeleton } from '@/components/kurashi-categories'
import { carouselSliderImages, carouselSliderImagesMobile } from '@/constants'
import EmblaCarousel from '@/components/embla-carousel/embla-carousel'

interface PageParam {
  params: { lng: string }
}

export const metadata = {
  title: 'Kurashi Corp'
}

const createCarouselItemImage = (imageSrc: string, width = 1920, height = 1080): { key: string, content: React.ReactElement } => {
  return {
    key: uuidv4(),
    content: <Image src={imageSrc} width={width} height={height} alt='picture' quality={100} />
  }
}

const Page = async ({ params: { lng } }: PageParam): Promise<React.ReactElement> => {
  const carouselSliders = carouselSliderImages.map(x => createCarouselItemImage(x))
  const carouselSlidersMobile = carouselSliderImagesMobile.map(x => createCarouselItemImage(x, 4500, 5620))
  const blogs = await prisma.post.findMany({ take: 4, where: { published: true } })

  return (
    <main className='mt-0'>
      <div className='max-lg:w-full relative w-4/5 mx-auto max-md:hidden'>
        <EmblaCarousel slides={carouselSliders} options={{ loop: true }} />
      </div>
      <div className='max-lg:w-full relative w-4/5 mx-auto hidden max-md:block'>
        <EmblaCarousel slides={carouselSlidersMobile} options={{ loop: true }} />
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
        <div className='my-10 overflow-hidden max-md:my-0'>
          <AboutKurashiCard lng={lng} />
        </div>
      </div>
      <div className='w-4/5 mx-auto mt-10'>
        <div className='text-3xl'>Bài viết mới nhất</div>
        <div className='flex flex-row gap-5 p-10 items-center justify-center'>{blogs.map(x => <BlogCardHomepage blog={x} key={x.id} />)}</div>
      </div>
    </main>
  )
}

export default Page
