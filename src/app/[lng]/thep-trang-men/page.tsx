import Link from 'next/link'
import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import dynamic from 'next/dynamic'
import Image from 'next/image'

import { useTranslation } from '@/i18n'
import * as transKey from '@/i18n/thep-trang-men'
import { Breadcrumb } from '@/components/breadcrumb'
import { carouselSliderImages } from '@/constants'
import EmblaCarousel from '@/components/embla-carousel/embla-carousel'
import { KurashiDiv, KurashiLeftBorder } from '@/components/kurashi-div'
import { SectionTitle } from '@/components/section-title'
import { ThepTrangMenFeatureCard, ThepTrangMenFeatureCardProps } from '@/components/thep-trang-men-feature-card'
import KurashiTabs from '@/components/kurashi-tabs/kurashi-tabs'

const SizeTable = dynamic(
  async () => await import('./size-table').then(module => module.default),
  { ssr: false }
)

const SpecTable = dynamic(
  async () => await import('./spec-table').then(module => module.default),
  { ssr: false }
)

const createCarouselItemImage = (imageSrc: string): { key: string, content: React.ReactElement } => {
  return {
    key: uuidv4(),
    content: <Image src={imageSrc} width={1920} height={1080} alt='picture' quality={100} />
  }
}

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
        <Image width={500} height={500} src={imgUrl} alt='' className='rounded-tl-lg rounded-tr-lg w-full' />
      </div>
      <div className='p-5 text-center'>
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
  const availableCssClasses: Map<string, string> = new Map([
    ['kurashiX', 'w-[300px] h-[150px] bg-kurashiX rounded-tl-lg rounded-tr-lg'],
    ['kurashiT', 'w-[300px] h-[150px] bg-kurashiT rounded-tl-lg rounded-tr-lg'],
    ['kurashiB', 'w-[300px] h-[150px] bg-kurashiB rounded-tl-lg rounded-tr-lg']
  ])
  const className = availableCssClasses.get(color)
  return (
    <div className='shadow-xl rounded-lg h-fit border pb-2 border-opacity-25 border-[#000]'>
      <div className={className} />
      <div className='mt-3 text-center'>{colorName}</div>
    </div>
  )
}

interface SizeCardProps {
  size: 's' | 'm' | 'l'
}

const SizeCard: React.FC<SizeCardProps> = ({ size }) => {
  const availableCssClasses: Map<string, string> = new Map([
    ['s', 'w-[200px] h-[250px] border p-5 border-opacity-25 border-[#000]'],
    ['m', 'w-[200px] h-[350px] border p-5 border-opacity-25 border-[#000]'],
    ['l', 'w-[273px] h-[350px] border p-5 border-opacity-25 border-[#000]']
  ])
  const sizes: Map<string, string> = new Map([
    ['s', '890x1800mm'],
    ['m', '890x2400mm'],
    ['l', '1219x2400mm']
  ])
  const className = availableCssClasses.get(size)
  return (
    <div>
      <div className={className}>
        <p className='text-center mt-1'>{`${sizes.get(size) ?? ''}`}</p>
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
  const availableCssClasses: Map<string, string> = new Map([
    ['black', 'w-[20px] h-[20px] rounded-xl bg-[#000] border border-opacity-25 border-[#000]'],
    ['white', 'w-[20px] h-[20px] rounded-xl bg-[#fff] border border-opacity-25 border-[#000]']
  ])

  return (
    <div className='w-[300px] shadow-xl rounded-lg border p-5 border-opacity-25 border-[#000]'>
      <div>
        <div>
          <Image height={500} width={500} src={imgUrl} alt='' />
        </div>
        <div className='flex flex-col gap-3'>
          <AccessoryTitle title={title} />
          <div className='flex flex-row gap-2'>
            {colors.map(x => {
              const className = availableCssClasses.get(x)
              return <div className={className ?? ''} key={uuidv4()} />
            })}
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
  const sectionTitles = [transKey.thepTrangMen, transKey.standoutFeatures, transKey.application, transKey.colorAndSize, transKey.magnetAccessories, transKey.specInfo]
  const intro3: ThepTrangMenFeatureCardProps = { imgUrl: 'https://storage.googleapis.com/kurashi_frontpage_files/images/feature_3.png', title: transKey.titleFeature3, p: transKey.paragraphFeature3 }

  const accessorieItems: AccessoryCardProps[] = [
    {
      additionalText: 'Tải trọng tối đa 500g',
      colors: ['black', 'white'],
      imgUrl: 'https://storage.googleapis.com/kurashi_frontpage_files/images/hu_dung_gia_vi.png',
      size: '110x90x105mm',
      title: 'Hũ đựng gia vị lớn'
    },
    {
      additionalText: 'Tải trọng tối đa 500g',
      colors: ['black', 'white'],
      imgUrl: 'https://storage.googleapis.com/kurashi_frontpage_files/images/hu_dung_gia_vi.png',
      size: '110x90x105mm',
      title: 'Hũ đựng gia vị lớn'
    },
    {
      additionalText: 'Tải trọng tối đa 500g',
      colors: ['black', 'white'],
      imgUrl: 'https://storage.googleapis.com/kurashi_frontpage_files/images/hu_dung_gia_vi.png',
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
        <EmblaCarousel slides={carouselSliders} options={{ loop: true }} />
      </div>
      <div className='flex flex-row w-fit gap-5 mx-auto my-10'>
        {sectionTitles.map(x =>
          <Link key={x} href={`#${x}`} scroll>
            <div className='w-fit p5 font-semibold'><KurashiDiv>{t(x)}</KurashiDiv>
            </div>
          </Link>
        )}
      </div>
      <div>
        <div id='thep-trang-men' className='my-10'>
          <div className='w-fit mx-auto text-2xl'>
            <SectionTitle title={t(transKey.thepTrangMen)} />
          </div>
          <div className='flex flex-row gap-10 items-center w-3/4 mx-auto'>
            <div className='w-1/2'>
              <Image width={500} height={500} src='https://storage.googleapis.com/kurashi_frontpage_files/images/thep-trang-men-layer.png' alt='' />
            </div>
            <div className='w-1/2 text-xl'>{t(transKey.thepTrangMenIntroductionParagraph)}</div>
          </div>
        </div>
        <div id='standout-feature' className='my-10'>
          <div className='w-fit mx-auto text-2xl'>
            <SectionTitle title={t(transKey.standoutFeatures)} />
          </div>
          <div className='grid grid-cols-4 grid-rows-1 gap-5 w-4/5 mx-auto my-10 h-fit'>
            <div className='shadow-xl rounded-lg border p-5 border-opacity-25 border-[#000] mx-auto'>
              <ThepTrangMenFeatureCard imgUrl={intro3.imgUrl} p={t(intro3.p)} title={t(intro3.title)} key={uuidv4()} />
            </div>
            <div className='shadow-xl rounded-lg border p-5 border-opacity-25 border-[#000] mx-auto'>
              <ThepTrangMenFeatureCard imgUrl={intro3.imgUrl} p={t(intro3.p)} title={t(intro3.title)} key={uuidv4()} />
            </div>
            <div className='shadow-xl rounded-lg border p-5 border-opacity-25 border-[#000] mx-auto'>
              <ThepTrangMenFeatureCard imgUrl={intro3.imgUrl} p={t(intro3.p)} title={t(intro3.title)} key={uuidv4()} />
            </div>
            <div className='shadow-xl rounded-lg border p-5 border-opacity-25 border-[#000] mx-auto'>
              <ThepTrangMenFeatureCard imgUrl={intro3.imgUrl} p={t(intro3.p)} title={t(intro3.title)} key={uuidv4()} />
            </div>
          </div>
        </div>
        <div id='application' className='my-10'>
          <div className='w-fit mx-auto text-2xl'>
            <SectionTitle title={t(transKey.applicationOpTuong)} />
          </div>
          <div>
            <div className='mt-10'>
              <div className='w-full mx-auto'>
                <div className='grid grid-cols-3 grid-rows-1 gap-4 w-2/3 mx-auto'>
                  <div>
                    <FeatureCard imgUrl='https://storage.googleapis.com/kurashi_frontpage_files/images/ungdung_trong_office.png' text='Tấm ốp tường cho văn phòng' />
                  </div>
                  <div>
                    <FeatureCard imgUrl='https://storage.googleapis.com/kurashi_frontpage_files/images/ungdung_trong_office.png' text='Tấm ốp tường cho văn phòng' />
                  </div>
                  <div>
                    <FeatureCard imgUrl='https://storage.googleapis.com/kurashi_frontpage_files/images/ungdung_trong_office.png' text='Tấm ốp tường cho văn phòng' />
                  </div>
                  <div>
                    <FeatureCard imgUrl='https://storage.googleapis.com/kurashi_frontpage_files/images/ungdung_trong_office.png' text='Tấm ốp tường cho văn phòng' />
                  </div>
                  <div className='col-start-3 row-start-2'>
                    <FeatureCard imgUrl='https://storage.googleapis.com/kurashi_frontpage_files/images/ungdung_trong_office.png' text='Tấm ốp tường cho văn phòng' />
                  </div>
                  <div className='col-start-2 row-start-2'>
                    <FeatureCard imgUrl='https://storage.googleapis.com/kurashi_frontpage_files/images/ungdung_trong_office.png' text='Tấm ốp tường cho văn phòng' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='my-10' id='color-and-size'>
          <div className='w-fit mx-auto text-2xl my-10'>
            <SectionTitle title={t(transKey.colorAndSize)} />
          </div>
          <div>
            <div>
              <KurashiLeftBorder>
                <div>{t(transKey.color)}</div>
              </KurashiLeftBorder>
              <div className='flex flex-row gap-10 justify-center my-10'>
                <ColorCard color='kurashiX' colorName='Màu T - XXX01' />
                <ColorCard color='kurashiT' colorName='Màu X - XXX01' />
                <ColorCard color='kurashiB' colorName='Màu B - XXX01' />
              </div>
            </div>
            <div>
              <KurashiLeftBorder>
                <div>{t(transKey.detailOfSize)}</div>
              </KurashiLeftBorder>
              <div>
                <div className='flex flex-row gap-10 justify-center my-10 items-end'>
                  <SizeCard size='s' />
                  <SizeCard size='m' />
                  <SizeCard size='l' />
                </div>
                <div><SizeTable /></div>
              </div>
            </div>
          </div>
        </div>
        <div className='my-10' id='magnet-accessories'>
          <div className='w-fit mx-auto text-2xl my-10'>
            <SectionTitle title={t(transKey.magnetAccessories)} />
          </div>
          <div>
            <div className='flex flex-col gap-10 w-4/5 mx-auto'>
              <KurashiTabs
                body={[{
                  content: [...accessorieItems.map(x =>
                    <AccessoryCard additionalText={x.additionalText} colors={x.colors} imgUrl={x.imgUrl} size={x.size} title={x.title} key={uuidv4()} />
                  )],
                  key: '1'
                },
                {
                  content: [...accessorieItems.map(x =>
                    <AccessoryCard additionalText={x.additionalText} colors={x.colors} imgUrl={x.imgUrl} size={x.size} title='Kệ bếp' key={uuidv4()} />
                  )],
                  key: '2'
                },
                {
                  content: [...accessorieItems.map(x =>
                    <AccessoryCard additionalText={x.additionalText} colors={x.colors} imgUrl={x.imgUrl} size={x.size} title='Phụ kiện treo' key={uuidv4()} />
                  )],
                  key: '3'
                }
                ]}
                tabList={['Hũ đựng gia vị', 'Kệ bếp', 'Phụ kiện treo']}
              />
            </div>
          </div>
        </div>
        <div className='my-10' id='spec-info'>
          <div className='w-fit mx-auto'>
            <SectionTitle title={t(transKey.specInfo)} />
          </div>
          <div className='my-10'>
            <SpecTable />
          </div>
        </div>
        <div className='w-4/5 mx-auto' />
      </div>
    </div>
  )
}

export default Page
