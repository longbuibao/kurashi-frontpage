import Link from 'next/link'
import React from 'react'
import { v4 as uuidv4 } from 'uuid'

import { useTranslation } from '@/i18n'
import * as transKey from '@/i18n/thep-trang-men'
import { Breadcrumb } from '@/components/breadcrumb'
import { carouselSliderImages } from '@/constants'
import { CarouselSlider } from '@/components/carousel-slider'
import { KurashiDiv, KurashiLeftBorder } from '@/components/kurashi-div'
import { SectionTitle } from '@/components/section-title'
import { ThepTrangMenFeatureCard, ThepTrangMenFeatureCardProps } from '@/components/thep-trang-men-feature-card'

const createCarouselItemImage = (imageSrc: string): React.ReactElement => (
  <div key={uuidv4()}>
    <img src={imageSrc} alt='' />
  </div>
)

interface PageParam {
  params: { lng: string }
}

interface KitchenFeatureCardProps {
  imgUrl: string
  text: string
  textLeft?: boolean
}

const FeatureCard: React.FC<KitchenFeatureCardProps> = ({ imgUrl, text, textLeft = false }) => {
  return (
    <div className='flex flex-col w-full shadow-xl rounded-lg border border-opacity-25 border-[#000] h-full'>
      <div className='w-full'>
        <img src={imgUrl} alt='' className='rounded-tl-lg rounded-tr-lg w-full' />
      </div>
      <div className='p-5'>
        {text}
      </div>
    </div>
  )
}

interface ColorCardProps {
  color: string
  colorName: string
}

const ColorCard: React.FC<ColorCardProps> = ({ color, colorName }) => {
  return (
    <div>
      <div className='w-[300px] h-[150px] bg-main' />
      <div className='mt-3 text-center'>{colorName}</div>
    </div>
  )
}

interface SizeCardProps {
  w: string
  h: string
  unit: string
}

const SizeCard: React.FC<SizeCardProps> = ({ w, h, unit }) => {
  return (
    <div>
      <div className='h-[300px] w-[150px] border'>
        <p className='text-center mt-5'>{`${w}x${h} ${unit}`}</p>
      </div>
    </div>
  )
}

interface AccessoryCardProps {
  imgUrl: string
  title: string
  colors: string[]
  size: string
  additionalText: string
}

const AccessoryTitle: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className='hover:cursor-default pb-2 border-b-2 border-b-main max-lg:px-0 w-fit'>
      <h3 className='border-b-main px-2'>
        {title}
      </h3>
    </div>
  )
}

const AccessoryCard: React.FC<AccessoryCardProps> = ({ additionalText, colors, imgUrl, size, title }) => {
  return (
    <div className='w-[300px] h-[200px]'>
      <div>
        <div>
          <img src={imgUrl} alt='' />
        </div>
        <div className='flex flex-col gap-3'>
          <AccessoryTitle title={title} />
          <div className='flex flex-row gap-2'>
            {colors.map(x => (
              <div className='w-[20px] h-[20px] rounded-xl bg-main' key={uuidv4()} />
            ))}
          </div>
          <div>{size}</div>
          <div>{additionalText}</div>
        </div>
      </div>
    </div>
  )
}

const Page: React.FC<PageParam> = async ({ params: { lng } }) => {
  const { t } = await useTranslation(lng, transKey.namespace)
  const breadcrumb = [
    <Link href='/' key='a'>{t(transKey.allProduct)}</Link>,
    <Link href='/products' key='b'>{t(transKey.thepTrangMen)}</Link>
  ]

  const carouselSliders = carouselSliderImages.map(createCarouselItemImage)
  const sectionTitles = [transKey.thepTrangMen, transKey.standoutFeatures, transKey.application, transKey.colorAndSize, transKey.magnetAccessories]

  const intro1: ThepTrangMenFeatureCardProps = { imgUrl: 'https://storage.googleapis.com/kurashi_frontpage_files/images/feature_1.png', title: transKey.titleFeature1, p: transKey.paragraphFeature1 }
  const intro2: ThepTrangMenFeatureCardProps = { imgUrl: 'https://storage.googleapis.com/kurashi_frontpage_files/images/feature_2.png', title: transKey.titleFeature2, p: transKey.paragraphFeature2 }
  const intro3: ThepTrangMenFeatureCardProps = { imgUrl: 'https://storage.googleapis.com/kurashi_frontpage_files/images/feature_3.png', title: transKey.titleFeature3, p: transKey.paragraphFeature3 }
  const intro4: ThepTrangMenFeatureCardProps = { imgUrl: 'https://storage.googleapis.com/kurashi_frontpage_files/images/feature_4.png', title: transKey.titleFeature4, p: transKey.paragraphFeature4 }

  const accessorieItems: AccessoryCardProps[] = [
    {
      additionalText: 'Tải trọng tối đa 500g',
      colors: ['#fff', '#000'],
      imgUrl: 'https://storage.cloud.google.com/kurashi_frontpage_files/images/hu_dung_gia_vi.png',
      size: '110x90x105mm',
      title: 'Hũ đựng gia vị lớn'
    },
    {
      additionalText: 'Tải trọng tối đa 500g',
      colors: ['#fff', '#000'],
      imgUrl: 'https://storage.cloud.google.com/kurashi_frontpage_files/images/hu_dung_gia_vi.png',
      size: '110x90x105mm',
      title: 'Hũ đựng gia vị lớn'
    },
    {
      additionalText: 'Tải trọng tối đa 500g',
      colors: ['#fff', '#000'],
      imgUrl: 'https://storage.cloud.google.com/kurashi_frontpage_files/images/hu_dung_gia_vi.png',
      size: '110x90x105mm',
      title: 'Hũ đựng gia vị lớn'
    }
  ]

  return (
    <div className='w-4/5 mx-auto flex flex-col my-10 max-lg:justify-center'>
      <div className='flex flex-row items-center bg-main p-5'>
        <div className='flex flex-col items-start text-secondary p-5 gap-5 border-l-secondary border-r-2 w-1/2'>
          <div className='flex flex-row gap-5 items-center justify-center'>
            <Breadcrumb items={breadcrumb} separator={<i className='fa-solid fa-chevron-right' />} />
          </div>
          <div>
            <h1 className='text-4xl font-semibold'>{t(transKey.introTitle)}</h1>
          </div>
        </div>
        <div className='text-secondary pl-5 pr-5 flex flex-col justify-center'>
          <p>Enamel kitchen panels have a beautiful surface texture that exudes a sense of luxury. They can also be used for interior decoration, are easy to clean, and can be used with magnets.</p>
        </div>
      </div>
      <div className='mt-5'>
        <CarouselSlider items={carouselSliders} indicatorStyles={{}} />
      </div>
      <div className='flex flex-row w-1/2 gap-5 mx-auto my-10'>
        {sectionTitles.map(x =>
          <div className='w-fit p5 font-semibold' key={x}><KurashiDiv>{t(x)}</KurashiDiv>
          </div>)}
      </div>
      <div>
        <div>
          <div className='w-fit mx-auto text-2xl'>
            <SectionTitle title={t(transKey.thepTrangMen)} />
          </div>
          <div className='flex flex-row gap-10 items-center w-3/4 mx-auto'>
            <div className='w-1/2'>
              <img src='https://storage.googleapis.com/kurashi_frontpage_files/images/thep-trang-men-layer.png' alt='' />
            </div>
            <div className='w-1/2 text-xl'>{t(transKey.thepTrangMenIntroductionParagraph)}</div>
          </div>
        </div>
        <div>
          <div className='w-fit mx-auto text-2xl'>
            <SectionTitle title={t(transKey.standoutFeatures)} />
          </div>
          <div className='grid grid-flow-col gap-5 w-1/2 mx-auto my-10 h-fit'>
            <div className='shadow-xl rounded-lg h-fit border p-5 border-opacity-25 border-[#000] mx-auto'><ThepTrangMenFeatureCard imgUrl={intro1.imgUrl} p={t(intro1.p)} title={t(intro1.title)} key={uuidv4()} /></div>
            <div className='flex flex-col gap-8 h-fit'>
              <div className='h-1/2 shadow-xl rounded-lg border p-5 border-opacity-25 border-[#000] mx-auto'><ThepTrangMenFeatureCard imgUrl={intro3.imgUrl} p={t(intro3.p)} title={t(intro3.title)} key={uuidv4()} /></div>
              <div className='h-1/2 shadow-xl rounded-lg border p-5 border-opacity-25 border-[#000] mx-auto'><ThepTrangMenFeatureCard imgUrl={intro4.imgUrl} p={t(intro4.p)} title={t(intro4.title)} key={uuidv4()} /></div>
            </div>
            <div className='shadow-xl rounded-lg h-fit border p-5 border-opacity-25 border-[#000] mx-auto'><ThepTrangMenFeatureCard imgUrl={intro2.imgUrl} p={t(intro2.p)} title={t(intro2.title)} key={uuidv4()} /></div>
          </div>
        </div>
        <div>
          <div className='w-fit mx-auto text-2xl'>
            <SectionTitle title={t(transKey.applicationOpTuong)} />
          </div>
          <div>
            <div className='mt-10'>
              <div>
                <KurashiLeftBorder>
                  <div>{t(transKey.trongNhaBep)}</div>
                </KurashiLeftBorder>
              </div>
              <div className='w-full mx-auto'>
                <div className='grid grid-cols-3 grid-rows-1 gap-4 w-2/3 mx-auto'>
                  <div className='col-span-3 col-start-1 row-start-1'>
                    <FeatureCard imgUrl='https://storage.cloud.google.com/kurashi_frontpage_files/images/ungdung_trong_nha_bep_2.png' text='d' />
                  </div>
                  <div>
                    <FeatureCard imgUrl='https://storage.cloud.google.com/kurashi_frontpage_files/images/ungdung_treo_phu_kien.png' text='a' />
                  </div>
                  <div className='col-start-3 row-start-2'>
                    <FeatureCard imgUrl='https://storage.cloud.google.com/kurashi_frontpage_files/images/ungdung_trong_phong_ngu_em_be.png' text='b' />
                  </div>
                  <div className='col-start-2 row-start-2'>
                    <FeatureCard imgUrl='https://storage.cloud.google.com/kurashi_frontpage_files/images/ungdung_trong_office.png' text='c' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='my-10'>
          <div className='w-fit mx-auto text-2xl my-10'>
            <SectionTitle title={t(transKey.colorAndSize)} />
          </div>
          <div>
            <div>
              <KurashiLeftBorder>
                <div>{t(transKey.color)}</div>
              </KurashiLeftBorder>
              <div className='flex flex-row gap-10 justify-center my-10'>
                <ColorCard color='#abcd' colorName='Màu T - XXX01' />
                <ColorCard color='#abcd' colorName='Màu X - XXX01' />
                <ColorCard color='#abcd' colorName='Màu B - XXX01' />
              </div>
            </div>
            <div>
              <KurashiLeftBorder>
                <div>{t(transKey.detailOfSize)}</div>
              </KurashiLeftBorder>
              <div>
                <div className='flex flex-row gap-10 justify-center my-10'>
                  <SizeCard h='100' w='100' unit='mm' />
                  <SizeCard h='100' w='100' unit='mm' />
                  <SizeCard h='100' w='100' unit='mm' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='my-10'>
          <div className='w-fit mx-auto text-2xl my-10'>
            <SectionTitle title={t(transKey.magnetAccessories)} />
          </div>
          <div>
            <div className='flex flex-col gap-40'>
              <div>
                <KurashiLeftBorder>
                  <div>{t(transKey.huDungGiaVi)}</div>
                </KurashiLeftBorder>
                <div>
                  <div className='flex flex-row gap-36 justify-center my-10'>
                    {accessorieItems.map(x =>
                      <AccessoryCard additionalText={x.additionalText} colors={x.colors} imgUrl={x.imgUrl} size={x.size} title={x.title} key={uuidv4()} />
                    )}
                  </div>
                </div>
              </div>
              <div>
                <KurashiLeftBorder>
                  <div>{t(transKey.huDungGiaVi)}</div>
                </KurashiLeftBorder>
                <div>
                  <div className='flex flex-row gap-36 justify-center my-10'>
                    {accessorieItems.map(x =>
                      <AccessoryCard additionalText={x.additionalText} colors={x.colors} imgUrl={x.imgUrl} size={x.size} title={x.title} key={uuidv4()} />
                    )}
                  </div>
                </div>
              </div>
              <div>
                <KurashiLeftBorder>
                  <div>{t(transKey.huDungGiaVi)}</div>
                </KurashiLeftBorder>
                <div>
                  <div className='flex flex-row justify-center my-10 gap-36'>
                    {accessorieItems.map(x =>
                      <AccessoryCard additionalText={x.additionalText} colors={x.colors} imgUrl={x.imgUrl} size={x.size} title={x.title} key={uuidv4()} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
