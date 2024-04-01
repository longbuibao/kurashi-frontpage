import React, { Suspense } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { CarouselSlider } from '@/components/carousel-slider'
import { KurashiDiv } from '@/components/kurashi-div'
import { useTranslation } from '@/i18n'
import { carouselSliderImages } from '@/constants'
import { KurashiBlogs, BlogSkeleton } from '@/components/blog-card'
import { SectionTitle } from '@/components/section-title'
import { AboutKurashiCard } from '@/components/about-kurashi-card'
import { KurashiCategories, KurashiCategoriesSkeleton } from '@/components/kurashi-categories'
import { products, japanAuthentic, blog } from '@/i18n/translation-key'

interface PageParam {
  params: { lng: string }
}

export const metadata = {
  title: 'Kurashi'
}

const createCarouselItemImage = (imageSrc: string): React.ReactElement => (
  <div key={uuidv4()}>
    <img src={imageSrc} />
  </div>
)

const Page = async ({ params: { lng } }: PageParam): Promise<React.ReactElement> => {
  const { t } = await useTranslation(lng)
  const carouselSliders = carouselSliderImages.map(createCarouselItemImage)

  return (
    <main>
      <div className='w-4/5 mx-auto max-lg:w-full'>
        <CarouselSlider items={carouselSliders} indicatorStyles={{}} />
      </div>
      <div className='mx-auto my-10 w-fit'>
        <SectionTitle title={t(products)} />
      </div>
      <div className='w-fit mx-auto mt-16 hover:cursor-default max-lg:mx-1'>
        <KurashiDiv>
          <div className='px-12 text-2xl max-lg:text-center'>{t(japanAuthentic)}</div>
        </KurashiDiv>
      </div>
      <Suspense fallback={<KurashiCategoriesSkeleton />}>
        <div className='mt-5'>
          {/* @ts-expect-error } */}
          <KurashiCategories lng={lng} />
        </div>
      </Suspense>
      <div className='w-4/5 mx-auto border-main border-t-2 my-11'>
        <div className='mx-auto w-fit my-10'>
          <SectionTitle title={t(blog)} />
        </div>
        <Suspense fallback={<BlogSkeleton />}>
          {/* @ts-expect-error } */}
          <KurashiBlogs />
        </Suspense>
      </div>
      <div className='p-5 w-4/5 mx-auto border-main border-t-2 my-10 max-lg:w-full'>
        <div className='w-fit'>
          <AboutKurashiCard lng={lng} />
        </div>
      </div>
    </main>
  )
}

export default Page
