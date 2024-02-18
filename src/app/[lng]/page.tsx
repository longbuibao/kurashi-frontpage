import React, { Suspense } from 'react'

import { CarouselSlider } from '@/components/carousel-slider'
import { KurashiDiv } from '@/components/kurashi-div'
import { KurashiLink } from '@/components/kurashi-link'
import { useTranslation } from '@/i18n'
import { carouselSliderImages } from '@/constants'
import { KurashiCategory } from '@/types/kurashi-category'
import KurashiCategoriesSkeleton from '@/components/skeleton/categories-skeleton'
import KurashiLeftBorder from '@/components/kurashi-div/kurashi-left-border'

interface PageParam {
  params: { lng: string }
}

const getCategories = async (): Promise<KurashiCategory[]> => {
  let url = process.env.NODE_ENV === 'development' ? process.env.DEVELOPMENT_BACKEND : process.env.PRODUCTION_BACKEND
  if (url === undefined || url === null) url = 'stupid ts standard'
  else {
    const res = await fetch(url)
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
  const carouselCssDotIndicator = { border: 'solid #000 1px', background: '#e5e5e5', width: 200, height: 8, display: 'inline-block' }
  const categories = await getCategories()

  return (
    <main>
      {/* <div className='w-4/5 mx-auto max-lg:w-full'>
        <CarouselSlider items={carouselSliders} indicatorStyles={carouselCssDotIndicator} />
      </div> */}
      <div className='text-5xl w-fit mx-auto my-10 hover:cursor-default pb-10 border-b-2 border-x-main'>
        <h3>
          {t('products')}
        </h3>
      </div>
      <div className='w-fit mx-auto mt-16 hover:cursor-default'>
        <KurashiDiv>
          <div className='px-12 text-2xl'>{t('japan-authentic')}</div>
        </KurashiDiv>
      </div>
      <div className='w-full'>
        <Suspense fallback={<KurashiCategoriesSkeleton hasCollection numsOfCategories={3} />}>
          <div className='flex flex-row w-1/2 mx-auto justify-around mt-20'>
            {categories.map(category => (
              <div key={category.categoryName} className='hover:cursor-pointer'>
                {/* todo: what the fuck? the borderBottomStyle='dotted' somehow not dotted */}
                <KurashiLink borderBottomStyle='dotted'>
                  <div>
                    {t(category.categoryName)}
                  </div>
                </KurashiLink>
                {category.kurashiCollection.hasKurashiCollection &&
                  <div className='hover:cursor-default -ml-40 mt-10'>
                    <div>
                      <KurashiLeftBorder>{category.kurashiCollection.collectionName} </KurashiLeftBorder>
                    </div>
                    <div>
                      {category.kurashiCollection.collectionCategories.map(collectionCategory =>
                        <div key={collectionCategory.name}>
                          <div>{t(collectionCategory.name)}</div>
                          <div><img src={collectionCategory.thumbnail} alt='collection thumbnail' /></div>
                        </div>)}
                    </div>
                  </div>}
              </div>
            ))}
          </div>
        </Suspense>
      </div>
    </main>
  )
}

export default Page
