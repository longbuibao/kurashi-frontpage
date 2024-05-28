import React, { Suspense } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { KurashiDiv } from '@/components/kurashi-div'
import { useTranslation } from '@/i18n'
import { KurashiBlogs, BlogSkeleton } from '@/components/blog-card'
import { SectionTitle } from '@/components/section-title'
import { AboutKurashiCard } from '@/components/about-kurashi-card'
import { KurashiCategories, KurashiCategoriesSkeleton } from '@/components/kurashi-categories'
import { products, japanAuthentic, blog } from '@/i18n/translation-key'
import { CarouselSlider } from '@/components/carousel-slider'
import { carouselSliderImages } from '@/constants'

interface PageParam {
  params: { lng: string }
}

export const metadata = {
  title: 'Kurashi Corp'
}

const createCarouselItemImage = (imageSrc: string): React.ReactElement => (
  <div key={uuidv4()}>
    <img src={imageSrc} alt='' />
  </div>
)

const Page = async ({ params: { lng } }: PageParam): Promise<React.ReactElement> => {
  const { t } = await useTranslation(lng)
  const carouselSliders = carouselSliderImages.map(createCarouselItemImage)

  return (
    <main className='mt-5'>
      <div className='w-full max-lg:w-full'>
        <CarouselSlider items={carouselSliders} indicatorStyles={{}} />
      </div>
      <div className='mx-auto my-10 w-fit'>
        <SectionTitle title={t(products)} />
      </div>
      <div className='w-2/4 mx-auto mt-10 hover:cursor-default max-sm:w-4/5'>
        <KurashiDiv>
          <div className='px-12 max-lg:text-center max-sm:px-0 max-sm:text-xl flex flex-col items-center gap-5'>
            <div className='text-8xl font-bold gradient-text mt-5'>100%</div>
            <div className='text-xl mb-5'>{t(japanAuthentic)}</div>
          </div>
        </KurashiDiv>
      </div>
      <Suspense fallback={<KurashiCategoriesSkeleton />}>
        <div className='mt-5 w-4/5 mx-auto'>
          {/* @ts-expect-error } */}
          <KurashiCategories lng={lng} />
        </div>
      </Suspense>
      <div className='w-4/5 mx-auto border-main border-t-2 my-10 max-lg:w-full'>
        <div className='mx-auto w-fit my-10'>
          <SectionTitle title={t(blog)} />
        </div>
        <Suspense fallback={<BlogSkeleton />}>
          {/* @ts-expect-error } */}
          <KurashiBlogs />
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
