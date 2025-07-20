'use client'
import ReactInstaStories from 'react-insta-stories'
import { Suspense, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { UrlObject } from 'url'

const StorySlider: React.FC = () => {
  const containerRef = useRef(null)
  const [dimensions, setDimensions] = useState({ width: 800, height: 100 })
  const [currentStoryImage, setCurrentStoryImage] = useState('https://storage.googleapis.com/kurashi_frontpage_files/images/sliders-homepage/Slider_1-01.webp')
  const storyData = [
    {
      topImage: 'https://storage.googleapis.com/kurashi_frontpage_files/images/sliders-homepage/Slider_1-01.webp',
      title: 'Thép Tráng Men',
      link: '/'
    },
    {
      topImage: 'https://storage.googleapis.com/kurashi_frontpage_files/images/sliders-homepage/Slider%2003-01-01.webp',
      title: 'Phụ kiện bếp nam châm',
      link: '/'
    },
    {
      topImage: 'https://storage.googleapis.com/kurashi_frontpage_files/images/sliders-homepage/Slider%202-01.webp',
      title: 'Tấm ốp tường vân đá',
      link: '/'
    }
  ]
  const stories = storyData.map(({ topImage, title, link }) => ({
    topImage,
    content: () => (
      <div className='w-full flex flex-row ml-10 gap-20'>
        <Image src={topImage} width={200} height={106} alt={title} />
        <div className='flex flex-col gap-10'>
          <div className='text-3xl'>{title}</div>
          <div className='bg-main text-secondary w-fit p-3'>
            <Link href={link as any as UrlObject} className='font-bold'>
              Khám phá ngay
            </Link>
          </div>
        </div>
      </div>
    )
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
      <div ref={containerRef} className='absolute bottom-3 left-3'>
        <Suspense>
          <ReactInstaStories
            preloadCount={3}
            loop
            keyboardNavigation
            width={dimensions.width}
            height={dimensions.height}
            defaultInterval={3000}
            stories={stories}
            onStoryStart={(s: any, st: any) => setCurrentStoryImage(st.topImage)}
            storyContainerStyles={{ background: 'white', borderRadius: 8 }}
          />
        </Suspense>
      </div>
    </div>

  )
}

export default StorySlider
