import React from 'react'

import { CarouselSlider } from '@/components/carousel-slider'
import { KurashiDiv } from '@/components/kurashi-div'
import { useTranslation } from '@/i18n'
import { carouselSliderImages } from '@/constants'
import KurashiTabs from '@/components/kurashi-tabs/kurashi-tabs'
import { SectionTitle } from '@/components/section-title'

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
      <SectionTitle title={t('products')} />
      <div className='w-fit mx-auto mt-16 hover:cursor-default'>
        <KurashiDiv>
          <div className='px-12 text-2xl'>{t('japan-authentic')}</div>
        </KurashiDiv>
      </div>
      <div className='mt-5'>
        <KurashiTabs lng={lng} kurashiUrl='http://localhost:3001' />
      </div>
      <SectionTitle title={t('blog')} />
    </main>
  )
}

export default Page
