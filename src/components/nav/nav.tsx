'use client'
import { FC, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { KurashiLogoSvg } from '@/components/logo'
import { v4 as uuidv4 } from 'uuid'
import { LogoFacebook, LogoYoutube, LogoZalo, LocationIcon, ProAccountIcon } from '@/components/svg-icons'
import { useHideOnScrollDown } from './useHideOnScroll'
import { UrlObject } from 'url'

interface LinkItem {
  url: string
  label: string
}

interface NavProps {
  links: LinkItem[]
}

const Nav: FC<NavProps> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false)
  const isVisible = useHideOnScrollDown()
  const cls = isVisible
    ? 'relative nav-visible bg-[rgba(217,217,217,0.10)] backdrop-blur-[20px] shadow-[0_4px_10px_rgba(0,0,0,0.2)]'
    : 'relative nav-hidden bg-[rgba(217,217,217,0.10)] backdrop-blur-[20px] shadow-[0_4px_10px_rgba(0,0,0,0.2)]'

  const className = !isOpen ? 'header__burger max-md:mt-8' : 'header__burger is-active'

  return (
    <div className={cls}>
      <header className='sticky top-1 pb-1 mx-auto z-10 w-full h-full' onClick={() => { setIsOpen(false) }}>
        <div className='w-4/5 mx-auto max-md:w-full'>
          <nav className='flex flex-row justify-between items-center relative py-5'>
            <div className='flex flex-row gap-3 text-3xl relative items-center hover:cursor-pointer max-md:px-5 max-md:py-5'>
              <div className={className} onClick={(e) => { e.stopPropagation(); setIsOpen(!isOpen) }} />
            </div>
            <div className='absolute flex flex-col justify-center items-center pt-3 w-full'>
              <Link href='/' className='max-md:w-1/2'>
                <div className='max-md:w-full w-1/2 mx-auto'>
                  <KurashiLogoSvg width='500' height='87' />
                </div>
              </Link>
            </div>
            <div className='max-md:hidden max-md:mr-1 max-md:px-5 flex flex-row items-center gap-10 z-10'>
              <div className='flex flex-row gap-10 text-2xl'>
                <LocationIcon width='30' height='30' />
                <ProAccountIcon width='30' height='30' />
              </div>
            </div>
          </nav>
        </div>
      </header>
      <div
        className={!isOpen
          ? 'w-[40vh] absolute modal-nav max-md:w-full'
          : 'w-[40vh] absolute modal-nav is-active max-md:w-full'}
        onClick={(e) => setIsOpen(false)}
      >
        <div
          className='w-full h-[100vh] bg-kurashi-bg-main backdrop-blur-md shadow-2xl flex flex-row max-md:h-full max-md:items-start'
          onClick={(e) => e.stopPropagation()}
        >
          <div className='flex flex-col justify-between items-center w-4/5 mx-auto max-md:w-full mt-16 max-md:mt-0 mb-10'>
            <div className='w-[60%] max-md:w-full'>
              <div className='max-md:hidden max-md:justify-center border-b-[1px] mb-10 border-[#5C5C5C]' style={{ borderColor: 'rgba(92, 92, 92, 0.3)' }}>
                <Image className='mb-5' src='https://storage.googleapis.com/kurashi_frontpage_files/images/rework-homepage/IconMenu.png' width={50} height={50} alt='Thép tráng men Kurashi' />
              </div>
              <div className='flex flex-col gap-5 max-md:gap-2 font-bold pr-10 justify-center max-lg:items-center max-md:p-3'>
                {links.map(link => (
                  <div
                    key={uuidv4()}
                    className='w-fit max-md:w-full text-center max-md:mt-8'
                    onClick={(e) => { e.stopPropagation(); setIsOpen(!isOpen) }}
                  >
                    <div className='max-md:grid max-md:grid-cols-[auto_1fr] flex max-md:w-1/2 max-md:mx-auto flex-row items-center justify-center gap-5'>
                      <i className='fa-solid fa-angle-right max-md:w-fit max-md:col-start-1' />
                      <Link className='text-xl' href={link.url as any as UrlObject}>{link.label}</Link>
                    </div>

                  </div>
                ))}
              </div>
            </div>
            <div className='flex flex-row gap-3 mb-16 max-md:self-center max-md:mt-10'>
              <LogoFacebook color='#000' width='30' height='30' />
              <LogoYoutube color='#000' width='30' height='30' />
              <LogoZalo width='30' height='30' />
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Nav
