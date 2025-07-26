'use client'
import ReactInstaStories, { WithSeeMore } from 'react-insta-stories'
import { Suspense, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { UrlObject } from 'url'

const StorySlider: React.FC = () => {
  const containerRef = useRef(null)
  const [dimensions, setDimensions] = useState({ width: 800, height: 100 })
  const [currentIndex, setCurrentIndex] = useState(0)
  const maxIndex = 2
  const [currentStoryImage, setCurrentStoryImage] = useState('https://storage.googleapis.com/kurashi_frontpage_files/images/sliders-homepage/Slider_1-01.webp')
  const storyData = [
    {
      topImage: 'https://storage.googleapis.com/kurashi_frontpage_files/images/thep_trang_men_slider/Slider01.webp',
      thumbnail: 'https://storage.googleapis.com/kurashi_frontpage_files/images/thep_trang_men_slider/Slider01_thumb.webp',
      title: 'THÉP TRÁNG MEN ỐP BẾP',
      button: 'Khám phá công nghệ vật liệu',
      summary: 'Chống ố, chống cháy và siêu dễ lau chùi',
      link: '/san-pham/tam-op-tuong-bang-thep-trang-men'
    },
    {
      topImage: 'https://storage.googleapis.com/kurashi_frontpage_files/images/thep_trang_men_slider/Slider02.webp',
      thumbnail: 'https://storage.googleapis.com/kurashi_frontpage_files/images/thep_trang_men_slider/Slider02_thumb.webp',
      title: 'PHỤ KIỆN BẾP',
      button: 'Tìm hiểu bộ giải pháp',
      summary: 'Không cần khoan tường và cực tiện lợi',
      link: '/san-pham/phu-kien-bep'
    },
    {
      topImage: 'https://storage.googleapis.com/kurashi_frontpage_files/images/thep_trang_men_slider/Slider03.webp',
      thumbnail: 'https://storage.googleapis.com/kurashi_frontpage_files/images/thep_trang_men_slider/Slider03_thumb.webp',
      title: 'ỐP TƯỜNG VÂN ĐÁ',
      summary: 'Bề mặt sần sùi tự nhiên và siêu dễ thi công',
      button: 'Khám phá bộ sưu tập',
      link: '/san-pham/tam-op-tuong-van-da'
    }
  ]

  const stories = storyData.map(({ topImage, title, link, thumbnail, button, summary }) => ({
    topImage,
    content: (props: any) => {
      const { action, story } = props
      console.log(props)
      return (
        <WithSeeMore story={story} action={action}>
          <div className='w-full flex flex-row ml-10 gap-20'>
            <Image src={thumbnail} width={200} height={106} alt={title} priority />
            <div className='flex flex-col gap-3'>
              <div className='text-2xl'>{title}</div>
              <div>{summary}</div>
            </div>
          </div>
        </WithSeeMore>
      )
    },
    seeMoreCollapsed: () => {
      return (
        <div className='w-full h-[200px] text-secondary font-bold text-center flex items-center relative'>
          <div className='ml-10 flex flex-row gap-20 items-center mt-20'>
            <div className='w-[200px] h-[112.5px]' />
            <Link href={link as any as UrlObject} className='font-bold bg-main p-2 w-[250px]'>
              {button}
            </Link>
            <div className='flex flex-col gap-1 text-xl text-secondary absolute right-6 top-10'>
              <button
                onClick={() => setCurrentIndex(x => (x - 1 < 0 ? 0 : x - 1))}
                className='border border-1 border-main bg-main px-2'
              >
                <i className='fa-solid fa-angle-left' />
              </button>
              <button
                onClick={() => setCurrentIndex(x => (x + 1 > maxIndex ? 0 : x + 1))}
                className='border border-1 border-main bg-main px-2'
              >
                <i className='fa-solid fa-angle-right' />
              </button>
            </div>
          </div>
        </div>
      )
    },
    seeMore: () => <div />
  }))

  useEffect(() => {
    const observer = new ResizeObserver(([entry]) => {
      const { width } = entry.contentRect
      const height = width * 0.25
      setDimensions({ width, height })
    })

    if (containerRef.current != null) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div>
      <div className='relative'>
        <Image
          src={currentStoryImage}
          alt='Background'
          priority
          width={1920}
          height={1080}
          sizes='100vw'
        />
      </div>
      <div ref={containerRef} className='absolute bottom-3 left-1/2 -translate-x-1/2'>
        <Suspense>
          <ReactInstaStories
            preloadCount={3}
            loop
            currentIndex={currentIndex}
            keyboardNavigation
            progressStyles={{ background: '#437254', height: '1px' }}
            progressWrapperStyles={{ height: '1px', background: 'white' }}
            width={dimensions.width}
            height={dimensions.height}
            defaultInterval={5000}
            stories={stories}
            onStoryStart={(s: any, st: any) => setCurrentStoryImage(st.topImage)}
            storyContainerStyles={{ background: 'rgba(217, 217, 217, 0.10)', borderRadius: 8, backdropFilter: 'blur(20px)', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)' }}
          />
        </Suspense>
      </div>
    </div>

  )
}

export default StorySlider
