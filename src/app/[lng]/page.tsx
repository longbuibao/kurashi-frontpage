import React from 'react'

import { Nav } from '@/components/nav'
import { CarouselSlider } from '@/components/carousel-slider'
import { useTranslation } from '@/i18n'
import { navItems, carouselSliderImages } from '@/constants'

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
      <div className='pb-1 mx-auto z-10 w-3/4'>
        <Nav t={t} links={navItems.map(item => { return { label: t(item.label), url: item.url } })} />
      </div>
      <div className='w-4/5 mx-auto max-lg:w-full'>
        <CarouselSlider items={carouselSliders} indicatorStyles={carouselCssDotIndicator} />
      </div>
    </main>
  )
}

export default Page
