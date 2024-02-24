import React from 'react'

import { CarouselSlider } from '@/components/carousel-slider'
import { KurashiDiv } from '@/components/kurashi-div'
import { useTranslation } from '@/i18n'
import { carouselSliderImages } from '@/constants'
import { KurashiCategory } from '@/types/kurashi-category'
import KurashiTabs from '@/components/kurashi-tabs/kurashi-tabs'

interface PageParam {
  params: { lng: string }
}

const getCategories = async (): Promise<KurashiCategory[]> => {
  let url = process.env.NODE_ENV === 'development' ? process.env.DEVELOPMENT_BACKEND : process.env.PRODUCTION_BACKEND
  if (url === undefined || url === null) url = 'stupid ts standard'
  else {
    const res = await fetch(url, process.env.NODE_ENV === 'development' ? { cache: 'no-store' } : {})
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return await res.json()
  }
  return []
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
  const categories = await getCategories()

  return (
    <main>
      <div className='w-4/5 mx-auto max-lg:w-full'>
        <CarouselSlider items={carouselSliders} indicatorStyles={carouselCssDotIndicator} />
      </div>
      <div className='text-5xl w-fit mx-auto my-10 hover:cursor-default pb-5 border-b-2 border-x-main'>
        <h3>
          {t('products')}
        </h3>
      </div>
      <div className='w-fit mx-auto mt-16 hover:cursor-default'>
        <KurashiDiv>
          <div className='px-12 text-2xl'>{t('japan-authentic')}</div>
        </KurashiDiv>
      </div>
      <div className='mt-5'>
        <KurashiTabs lng={lng} kurashiCategories={categories} />
      </div>
    </main>
  )
}

export default Page
