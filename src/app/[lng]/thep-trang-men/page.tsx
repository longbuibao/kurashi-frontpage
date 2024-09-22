import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'

import { useTranslation } from '@/i18n'
import * as transKey from '@/i18n/thep-trang-men'
import { ThepTrangMenFeatureCard, ApplicationCard, ColorCard, SizeCard } from '@/components/thep-trang-men-feature-card'
import { EmblaCarousel } from '@/components/embla-carousel'
import { features, applications, imageUrls } from './const'

const SpecTable = dynamic(
  async () => await import('./spec-table').then(module => module.default),
  { ssr: false }
)

interface PageParam {
  params: { lng: string }
}

const Page: React.FC<PageParam> = async ({ params: { lng } }) => {
  const { t } = await useTranslation(lng, transKey.namespace)
  const sectionTitles = [transKey.thepTrangMen, transKey.standoutFeatures, transKey.application, transKey.colorAndSize, transKey.magnetAccessories, transKey.specInfo]
  return (
    <div className='flex flex-row gap-10 my-10 w-4/5 mx-auto'>
      <div className='flex flex-col pr-3 h-fit border-r-2'>
        {sectionTitles.map(x =>
          <Link key={x} href={`#${x}`} scroll>
            <div className='w-fit p5 font-semibold'>
              {t(x)}
            </div>
          </Link>
        )}
      </div>
      <div className='w-4/5 mx-auto'>
        <div className='text-4xl mb-10'>{'THÉP TRÁNG MEN'.toUpperCase()}</div>
        <div>
          <div className='flex flex-row gap-5'>
            <div className='w-1/2'>
              <Image src='https://storage.googleapis.com/kurashi_frontpage_files/images/thep_trang_men_lp_2.png' width={730} height={558} alt='Thép tráng men' />
            </div>
            <div className='w-1/2'>
              <Image src='https://storage.googleapis.com/kurashi_frontpage_files/images/thep_trang_men_lp_1.png' width={730} height={558} alt='Thép tráng men' />
            </div>
          </div>
          <div className='flex flex-row gap-10 mt-5 bg-secondary pl-2 p-10'>
            <div>
              <Image src='https://storage.googleapis.com/kurashi_frontpage_files/images/thep_trang_men_layer_without_bg.png' width={648} height={308} alt='Cấu trúc của thép tráng men' />
            </div>
            <div className='w-1/2'>
              Thép tráng men là vật liệu gồm 6 lớp tích hợp giữa men kính và kim loại, chỉ dày 0.5mm.  Riêng lớp mặt gồm 2 lớp men kính (dual coating). Vật liệu được nung ở nhiệt độ cao, và sản xuất 100% tại Nhật Bản
            </div>
          </div>
          <div className='mt-10'>
            <div className='grid grid-cols-3 grid-rows-1 gap-20'>
              <ThepTrangMenFeatureCard content={features[0].content} imgUrl={features[0].thumbnail} title={features[0].title} />
              <ThepTrangMenFeatureCard content={features[1].content} imgUrl={features[1].thumbnail} title={features[1].title} />
              <ThepTrangMenFeatureCard content={features[2].content} imgUrl={features[2].thumbnail} title={features[2].title} />
            </div>
            <div className='w-4/5 mx-auto flex flex-row gap-5 mt-10 p-10'>
              <div>
                <Image className='w-full' width={116} height={258} src={features[3].thumbnail} alt='' />
              </div>
              <div className='flex flex-col w-[80%]'>
                <div className='w-fit'>
                  <div className='text-xl'>{features[3].title.toUpperCase()}</div>
                </div>
                <div className='mt-5'>
                  {features[3].content}
                </div>
              </div>
            </div>
          </div>
          <div className='mt-10 bg-secondary'>
            <div className='flex flex-col gap-10'>
              {applications.map(application => (
                <div key={application.key}>
                  <ApplicationCard content={application.content} key='' thumbnail={application.thumbnail} title={application.title} />
                </div>))}
            </div>
          </div>
          <div className='flex flex-row gap-10 mt-14 justify-center'>
            <div><ColorCard color='kurashiT' colorName='Màu trắng' /></div>
            <div><ColorCard color='kurashiX' colorName='Màu xám nhạt' /></div>
            <div><ColorCard color='kurashiB' colorName='Màu be' /></div>
          </div>
          <div className='flex flex-row gap-10 mt-14 justify-center items-end'>
            <div><SizeCard size='s' /></div>
            <div><SizeCard size='m' /></div>
            <div><SizeCard size='l' /></div>
          </div>
          <div className='my-10'>
            <EmblaCarousel useFlatControlButton slides={imageUrls} />
          </div>
          <div className='mt-10'>
            <SpecTable />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
