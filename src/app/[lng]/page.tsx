import React, { Suspense } from 'react'

import { CarouselSlider } from '@/components/carousel-slider'
import { KurashiDiv } from '@/components/kurashi-div'
import { KurashiLink } from '@/components/kurashi-link'
import { useTranslation } from '@/i18n'
import { carouselSliderImages } from '@/constants'

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
  const carouselCssDotIndicator = { border: 'solid #000 1px', background: '#e5e5e5', width: 200, height: 8, display: 'inline-block' }

  return (
    <main>
      <div className='w-4/5 mx-auto max-lg:w-full'>
        <CarouselSlider items={carouselSliders} indicatorStyles={carouselCssDotIndicator} />
      </div>
      <div className='text-5xl w-fit mx-auto my-10'>
        <KurashiLink>
          <h3>
            {t('products')}
          </h3>
        </KurashiLink>
      </div>
      <div className='w-fit mx-auto mt-16'>
        <KurashiDiv>
          <div className='px-12 text-2xl'>{t('japan-authentic')}</div>
        </KurashiDiv>
      </div>
      <div />

    </main>
  )
}

export default Page
