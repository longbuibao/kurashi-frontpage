import React, { Suspense } from 'react'

import { CarouselSlider } from '@/components/carousel-slider'
import { KurashiDiv } from '@/components/kurashi-div'
import { useTranslation } from '@/i18n'
import { carouselSliderImages } from '@/constants'
import KurashiTabs from '@/components/kurashi-tabs/kurashi-tabs'
import { KurashiBlogs, BlogSkeleton } from '@/components/blog-card'
import { SectionTitle } from '@/components/section-title'
import { AboutKurashiCard } from '@/components/about-kurashi-card'
import { products, japanAuthentic, blog } from '@/i18n/translation-key'

interface PageParam {
  params: { lng: string }
}

const createCarouselItemImage = (imageSrc: string): React.ReactElement => (
  <div key={imageSrc}>
    <img src={imageSrc} />
  </div>
)

const Page = async ({ params: { lng } }: PageParam): Promise<React.ReactElement> => {
  const { t } = await useTranslation(lng)
  const carouselSliders = carouselSliderImages.map(createCarouselItemImage)
  const carouselCssDotIndicator = { border: 'solid #598765 1px', background: '#e5e5e5', width: 200, height: 8, display: 'inline-block' }

  return (
    <main>
      <div className='w-4/5 mx-auto max-lg:w-full'>
        <CarouselSlider items={carouselSliders} indicatorStyles={carouselCssDotIndicator} />
      </div>
      <div className='mx-auto my-10 w-fit'>
        <SectionTitle title={t(products)} />
      </div>
      <div className='w-fit mx-auto mt-16 hover:cursor-default'>
        <KurashiDiv>
          <div className='px-12 text-2xl'>{t(japanAuthentic)}</div>
        </KurashiDiv>
      </div>
      <div className='mt-5'>
        <KurashiTabs lng={lng} kurashiCategoriesUrl='http://localhost:3001' />
      </div>
      <div className='p-5 w-4/5 mx-auto border-main border-t-2'>
        <div className='mx-auto my-10 w-fit'>
          <SectionTitle title={t(blog)} />
        </div>
        <Suspense fallback={<BlogSkeleton />}>
          {/* @ts-expect-error } */}
          <KurashiBlogs kurashiBlogsUrl='http://localhost:3001/blogs' lng={lng} />
        </Suspense>
      </div>
      <div className='p-5 w-4/5 mx-auto border-main border-t-2'>
        <div className='w-fit'>
          <AboutKurashiCard lng={lng} />
        </div>
      </div>
    </main>
  )
}

export default Page
