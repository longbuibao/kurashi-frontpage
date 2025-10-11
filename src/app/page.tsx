import React, { Suspense } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import * as fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'

import { BlogCardHomepage } from '@/components/blog-card'
import { AboutKurashiCard } from '@/components/about-kurashi-card'
import { KurashiCategories, KurashiCategoriesSkeleton } from '@/components/kurashi-categories'
import { carouselSliderImagesMobile } from '@/constants'
import EmblaCarousel from '@/components/embla-carousel/embla-carousel'
import { lng } from '@/app/const'
import { BlogPost } from './blog/interface'
import { StorySlider } from '@/components/story-slider'

export const metadata = {
  title: 'Kurashi Corp'
}

const createCarouselItemImage = (imageSrc: string, width = 1920, height = 1080): { key: string, content: React.ReactElement } => {
  return {
    key: imageSrc,
    content: <Image src={imageSrc} width={width} height={height} alt='picture' quality={100} />
  }
}

const allPosts = async (): Promise<BlogPost[]> => {
  const postsDirectory = path.join(process.cwd(), '_posts')
  const fileNames = await fs.readdir(postsDirectory)
  const posts = (
    await Promise.all(
      fileNames
        .filter((file) => file.endsWith('.md'))
        .map(async (fileName) => {
          const slug = fileName.replace(/\.md$/, '')
          const fullPath = path.join(postsDirectory, fileName)
          const fileContents = await fs.readFile(fullPath, 'utf8')
          const { data, content } = matter(fileContents)
          return {
            slug,
            ...data,
            content,
            realFileName: fileName
          } as any
        })
    ))
    .sort((a, b) => (b).date - (a).date)
    .filter(x => (x).isReadyForPublish)

  return posts as any as BlogPost[]
}

const Page = async (): Promise<React.ReactElement> => {
  const carouselSlidersMobile = carouselSliderImagesMobile.map(x => createCarouselItemImage(x, 4500, 5620))
  const posts = await allPosts()

  return (
    <main className='mt-0'>
      <div className='max-lg:w-full relative w-4/5 mx-auto max-md:hidden'>
        <StorySlider />
      </div>
      <div className='max-lg:w-full relative w-4/5 mx-auto hidden max-md:block'>
        <EmblaCarousel slides={carouselSlidersMobile} options={{ loop: true }} />
      </div>
      <div className='w-4/5 mx-auto my-16 max-md:mt-5 max-md:mb-0'>
        <div className='w-full '>
          <div className='text-4xl max-md:text-xl max-md:text-left font-bold text-center max-md:w-full max-md:pb-5 font-gtFont'>
            MADE IN JAPAN
          </div>
        </div>
        <div className='max-md:py-5 pt-5 max-md:w-full text-center'>
          <div>Các giải pháp nội thất tiên tiến nhất về công nghệ vật liệu, thiết kế và gia công với chất lượng made in Japan để ngôi nhà luôn là nơi thoải mái nhất cho cả gia đình bạn.</div>
        </div>
      </div>
      <Suspense fallback={<KurashiCategoriesSkeleton />}>
        <div className='mx-auto w-4/5'>
          {/* @ts-expect-error } */}
          <KurashiCategories lng={lng} />
        </div>
      </Suspense>
      <div className='w-4/5 mx-auto mt-24 max-lg:w-full'>
        <div className='my-10 overflow-hidden max-md:my-0'>
          <AboutKurashiCard lng={lng} />
        </div>
      </div>
      <div className='w-4/5 mx-auto mt-10'>
        <Link href='/blog' className='w-fit'>
          <div className='flex flex-col max-md:w-full max-md:p-5'>
            <div className='flex flex-col gap-5 mb-10'>
              <div className='flex-row flex gap-3 border-b-[1px] border-main pb-5'>
                <div className='mt-auto text-xl leading-9'>KURASHI</div>
                <div className='text-7xl text-main font-bold'>BLOG</div>
              </div>
              <p className='font-thin'>
                Xu hướng, công nghệ và vật liệu về nội thất mới nhất từ Nhật Bản
              </p>
            </div>
          </div>
        </Link>
        <div className='flex flex-row gap-5 pt-10 pb-16 items-center justify-between max-md:flex-wrap max-md:mx-auto'>
          {posts.slice(0, 4).map(x => <BlogCardHomepage blog={x as any} key={x.fileName} />)}
        </div>
      </div>
      <div className='hidden max-md:block max-md:mt-10 text-secondary'>
        <Link href='#' className='w-1/2 bg-[#BFAF92] flex flex-row items-center max-md:w-full p-5'>
          <div className='flex flex-col gap-5 items-center self-center w-full'>
            <div className='font-bold'>{'Hệ thống phân phối chính hãng'.toUpperCase()}</div>
            <div>Tra cứu nơi mua hàng gần bạn</div>
            <div className='size-10 flex flex-col items-center justify-center border-secondary rounded-full border-2'>
              <i className='fa-solid fa-arrow-right' />
            </div>
          </div>
        </Link>
        <Link href='#' className='w-1/2 bg-[#B3B1A1] flex flex-row items-center max-md:w-full'>
          <Image className='w-full' src='https://storage.googleapis.com/kurashi_frontpage_files/images/footer-image-2.png' width={300} height={300} alt='Về kurashi' />
          <div className='flex flex-col gap-5 items-center self-center w-full'>
            <div className='text-secondary font-bold'>CATALOG SẢN PHẨM</div>
            <div>tài liệu hỗ trợ</div>
          </div>
        </Link>
        <Link href='#' className='w-1/2 bg-[#BFAF92] flex flex-row items-center max-md:w-full'>
          <div className='flex flex-col gap-5 items-center self-center w-full'>
            <div className='text-secondary font-bold'>My Kurashi</div>
            <div>hệ thống giao dịch số</div>
          </div>
          <Image className='w-full' src='https://storage.googleapis.com/kurashi_frontpage_files/images/footer-image-3.png' width={300} height={300} alt='Về kurashi' />
        </Link>
      </div>
      <div className='flex flex-col w-4/5 mx-auto gap-1 my-10 max-md:hidden'>
        <Link href='#'>
          <div className='bg-cover bg-center relative flex flex-col items-center w-full'>
            <Image className='w-full' src='https://storage.googleapis.com/kurashi_frontpage_files/images/footer-image-1.png' alt='về kurashi' width={1550} height={550} />
            <div className='flex flex-col gap-10 text-secondary absolute top-[40%] items-center'>
              <div className='text-4xl'>{'Hệ thống phân phối chính hãng'.toUpperCase()}</div>
              <div>Tra cứu nơi mua hàng gần bạn</div>
              <div className='size-10 flex flex-col items-center justify-center border-secondary rounded-full border-2'>
                <i className='fa-solid fa-arrow-right' />
              </div>
            </div>
          </div>
        </Link>
        <div className='flex-row flex gap-1 max-md:flex-col'>
          <Link href='/catalog' className='w-1/2 bg-[#B3B1A1] flex flex-row items-center max-md:w-full'>
            <Image src='https://storage.googleapis.com/kurashi_frontpage_files/images/footer-image-2.png' width={300} height={300} alt='Về kurashi' />
            <div className='flex flex-col gap-5 items-center self-center w-full'>
              <div className='text-3xl text-secondary font-bold'>CATALOG SẢN PHẨM</div>
              <div>tài liệu hỗ trợ</div>
            </div>
          </Link>
          <Link href='#' className='w-1/2 bg-[#BFAF92] flex flex-row items-center max-md:w-full'>
            <Image src='https://storage.googleapis.com/kurashi_frontpage_files/images/footer-image-3.png' width={300} height={300} alt='Về kurashi' />
            <div className='flex flex-col gap-5 items-center self-center w-full'>
              <div className='text-3xl text-secondary font-bold'>My Kurashi</div>
              <div>hệ thống giao dịch số</div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  )
}

export default Page
