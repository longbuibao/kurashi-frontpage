import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface AboutKurashiCardProps {
  lng: string
}

const AboutKurashiCard: React.FC<AboutKurashiCardProps> = ({ lng }) => {
  return (
    <div className='max-lg:flex-col max-lg:w-full max-lg:mx-1 relative bg-about'>
      <Image className='brightness-75 mx-auto hidden max-md:object-fill max-md:block' alt='về Kurashi' src='https://storage.googleapis.com/kurashi_frontpage_files/images/rework-homepage/About-kurashi-mobile.webp' width={1080} height={1080} />
      <Image className='max-md:hidden brightness-50 h-full w-full max-md:object-fill' alt='về Kurashi' src='https://storage.googleapis.com/kurashi_frontpage_files/images/about_home_page_new_800_height_black_bg.jpg' width={1920} height={850} />
      <div className='flex flex-col max-md:gap-5 gap-7 justify-center items-center absolute top-1/2 right-1/2 translate-x-1/2 max-md:w-full translate-y-[-50%]'>
        <div className='text-wrap text-6xl font-semibold text-secondary max-md:text-2xl font-gtFont'>
          <Link href='/ve-kurashi-corp' className='transition-all duration-300 hover:[text-shadow:_0_2px_10px_rgba(0,0,0,0.9)]'>KURASHI CORP</Link>
        </div>
      </div>
    </div>
  )
}

export default AboutKurashiCard
