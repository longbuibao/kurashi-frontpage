import React, { Suspense } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import * as fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'

import { BlogCardHomepage } from '@/components/blog-card'
import { AboutKurashiCard } from '@/components/about-kurashi-card'
import { KurashiCategories, KurashiCategoriesSkeleton } from '@/components/kurashi-categories'
import { carouselSliderImagesMobile, carouselSliderImages } from '@/constants'
import EmblaCarousel from '@/components/embla-carousel/embla-carousel'
import { lng } from '@/app/const'
import { BlogPost } from './blog/interface'
import { LogoTradeMark } from '@/components/logo'

export const metadata = {
  title: 'Giải pháp nội thất từ Nhật Bản'
}

const createCarouselItemImage = (src: { imageLink: string, url: string, title: string }, width = 1920, height = 1080): { key: string, content: React.ReactElement } => {
  return {
    key: src.imageLink,
    content: (
      <div>
        <Image src={src.imageLink} width={width} height={height} alt='picture' quality={100} />
        <div className='absolute bottom-5 left-1/2 -translate-x-1/2'>
          <Link href={src.url as any} className='transition-all duration-300 hover:[text-shadow:_0_2px_10px_rgba(0,0,0,0.9)] text-secondary flex flex-col gap-5 items-center justify-center'>
            <Image src='/images/ArrowDownIcon.svg' width={30} height={30} alt={src.title} />
            <div className='text-sm [text-shadow:_0_2px_8px_rgba(0,0,0,1)] text-[#fff] font-semibold'>
              {src.title.toUpperCase()}
            </div>
          </Link>
        </div>
      </div>)
  }
}

const createCarouselItems = (src: { imageLink: string, url: string, title: string }, width = 1920, height = 1080): { key: string, content: React.ReactElement } => {
  return {
    key: src.imageLink,
    content: (
      <div>
        <Image src={src.imageLink} width={width} height={height} alt='picture' quality={100} />
        <div className='absolute bottom-10 left-1/2 -translate-x-1/2'>
          <Link href={src.url as any} className='transition-all duration-300 hover:[text-shadow:_0_2px_10px_rgba(0,0,0,0.9)] text-secondary flex flex-col gap-10 items-center justify-center'>
            <Image src='/images/ArrowDownIcon.svg' width={50} height={50} alt={src.title} />
            <div className='text-2xl'>
              {src.title.toUpperCase()}
            </div>
          </Link>
        </div>
      </div>)
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
  const carouselSliders = carouselSliderImages.map(x => createCarouselItems(x))
  const carouselSlidersMobile = carouselSliderImagesMobile.map(x => createCarouselItemImage(x, 4500, 5620))
  const posts = await allPosts()
  const postContent = posts.slice(0, 3).map(x => <BlogCardHomepage blog={x as any} key={x.fileName} />)
  const postsMobile = posts.slice(0, 3).map(x => {
    return {
      key: x.fileName,
      content: <BlogCardHomepage blog={x as any} key={x.fileName} />
    }
  })

  return (
    <main className='mt-0'>
      <div className='max-lg:w-full relative w-4/5 mx-auto max-md:hidden'>
        <EmblaCarousel slides={carouselSliders} options={{ loop: true }} />
      </div>
      <div className='max-lg:w-full relative w-4/5 mx-auto hidden max-md:block'>
        <EmblaCarousel slides={carouselSlidersMobile} options={{ loop: true }} />
      </div>
      <div className='w-4/5 mx-auto mt-36 mb-16 max-md:mt-5 max-md:mb-0'>
        <div className='w-full '>
          <div className='text-4xl max-md:text-center max-md:text-xl max-md:mt-14 font-bold text-center max-md:w-full max-md:pb-5 font-gtFont'>
            MADE IN JAPAN
          </div>
        </div>
        <div className='max-md:py-1 pt-5 max-md:w-full text-center'>
          <div className='text-xl max-md:text-base max-md:mb-10'>Sản xuất tại Nhật Bản</div>
        </div>
      </div>
      <Suspense fallback={<KurashiCategoriesSkeleton />}>
        <div className='mx-auto w-4/5'>
          {/* @ts-expect-error } */}
          <KurashiCategories lng={lng} />
        </div>
      </Suspense>
      <div className='w-4/5 mx-auto mt-32 max-md:mt-20 max-lg:w-full'>
        <div className='my-10 overflow-hidden max-md:my-0'>
          <AboutKurashiCard lng={lng} />
        </div>
      </div>
      <div className='w-4/5 mx-auto mt-28 max-md:mt-10'>
        <Link href='/blog' className='w-fit flex flex-row items-center justify-center gap-5 mx-auto'>
          <Image className='max-md:hidden' src='/images/RightArrow.svg' width={20} height={20} alt='Kurashi JOURNAL' />
          <Image className='max-md:block hidden' src='/images/RightArrow.svg' width={10} height={10} alt='Kurashi JOURNAL' />
          <LogoTradeMark width={82} height={82} />
          <div className='text-2xl max-md:text-base font-gtFont'>JOURNAL</div>
        </Link>
        <div className='max-md:hidden flex flex-row gap-10 max-md:gap-16 pt-10 pb-16 mt-5 items-center justify-between max-md:flex-wrap mx-auto w-fit'>
          {postContent}
        </div>
        <div className='hidden max-md:block mt-10'>
          <EmblaCarousel blogSlider slides={postsMobile} />
        </div>
      </div>
      <div className='w-4/5 mx-auto pb-20 flex flex-row gap-10 items-center max-md:flex-col max-md:text-center max-md:justify-center max-md:hidden'>
        <div className='flex flex-col h-full w-[60%] self-start mt-20'>
          <div className='flex flex-col items-end gap-10 pb-10 h-full'>
            <div className='font-gtFont text-3xl max-md:text-center max-md:w-full'>GOLD COLLECTION</div>
            <div className='text-5xl opacity-50 font-semibold text-[#6D6E71 ]'>{'Dấu ấn thượng lưu'.toUpperCase()}</div>
            <div className='w-full h-[0.5px] bg-[#6D6E71] opacity-20' />
            <div className='text-right max-md:text-center text-xl leading-loose mt-5 w-4/5'>
              Bộ sưu tập là sự hòa quyện giữa nghệ thuật cổ điển và nét tinh giản hiện đại, mang đến vẻ thanh lịch vượt thời gian. Thiết kế linh hoạt cùng tông màu vàng kim được lựa chọn tỉ mỉ, hoàn thiện đến từng chi tiết, giúp sản phẩm nổi bật theo cách thật tinh tế, trở thành biểu tượng của phong cách sống thượng lưu.
            </div>
            <Link href='/san-pham/voi-rua-cao-cap' className='self-end mt-12 max-md:self-center max-md:mt-10'>
              <div className='bg-main text-secondary px-9 py-5 flex flex-row gap-3 items-center'>
                Khám phá
                <i className='fa-solid fa-chevron-right' />
              </div>
            </Link>
          </div>
        </div>
        <Image src='https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua-cao-cap-rework/gold-collection.webp' width={451} height={721} alt='vòi rửa cao cấp golden collection' />
      </div>

      <div className='hidden max-md:block py-10 bg-main-phu-kien max-md:translate-y-11'>
        <Image src='https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua-cao-cap-rework/gold-collection.webp' width={451} height={721} alt='vòi rửa cao cấp golden collection' />
        <div className='font-gtFont text-xl max-md:text-center max-md:w-full'>GOLD COLLECTION</div>
        <Link href='/san-pham/voi-rua-cao-cap' className='self-end mt-12 max-md:self-center max-md:mt-10'>
          <div className='bg-main text-secondary p-3 my-10 flex flex-row gap-3 items-center w-fit mx-auto'>
            Khám phá
            <i className='fa-solid fa-chevron-right' />
          </div>
        </Link>
      </div>
    </main>
  )
}

export default Page
