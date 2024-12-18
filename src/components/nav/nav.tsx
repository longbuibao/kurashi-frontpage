'use client'
import { FC, useState } from 'react'
import Link from 'next/link'

import { Logo } from '@/components/logo'
import { KurashiLink } from '@/components/kurashi-link'
import { v4 as uuidv4 } from 'uuid'
import { ProductCard } from '@/components/product'
import { Product } from '@prisma/client'
import { LogoFacebook, LogoYoutube, LogoZalo, ShoppingCart } from '@/components/svg-icons'
import { useHideOnScrollDown } from './useHideOnScroll'

interface LinkItem {
  url: string
  label: string
}

interface NavProps {
  links: LinkItem[]
  products: any[]
}

const Nav: FC<NavProps> = ({ links, products }) => {
  const [isOpen, setIsOpen] = useState(false)
  const isVisible = useHideOnScrollDown()
  const cls = isVisible ? 'relative nav-visible bg-secondary-opacity backdrop-blur-md' : 'relative nav-hidden bg-secondary-opacity backdrop-blur-md'

  return (
    <div className={cls}>
      <header className='sticky top-1 pb-1 mx-auto z-10 w-full h-full' onClick={() => { setIsOpen(false) }}>
        <div className='w-4/5 mx-auto max-md:w-full'>
          <nav className='flex flex-row justify-between items-center relative py-5'>
            <div className='flex flex-row gap-3 text-3xl relative items-center hover:cursor-pointer max-md:px-5 max-md:py-5'>
              <div className={!isOpen ? 'header__burger max-md:mt-2' : 'header__burger is-active'} onClick={(e) => { e.stopPropagation(); setIsOpen(!isOpen) }} />
            </div>
            <div className='absolute flex flex-col justify-center items-center pt-3 max-md:w-full w-full'>
              <Link href='/'>
                <div className='w-[50%] mx-auto'>
                  <Logo isMxAuto width={450} height={157} />
                </div>
              </Link>
            </div>
            <div className='max-md:hidden max-md:mr-1 max-md:px-5 flex flex-row items-center gap-10 z-10'>
              <Link href='/phu-kien-nam-cham'>
                <div className='flex flex-col items-center gap-1'>
                  <ShoppingCart width='25' height='25' />
                  <div className='text-xs'>Phụ kiện bếp nam châm</div>
                </div>
              </Link>
            </div>
          </nav>
        </div>
      </header>
      <div className={!isOpen ? 'h-[100vh] absolute modal-nav max-md:w-full' : 'h-[100vh] absolute modal-nav is-active max-md:w-full'} onClick={(e) => setIsOpen(false)}>
        <div className='w-full bg-kurashi-bg-main backdrop-blur-md shadow-2xl flex flex-row max-md:h-full max-md:items-start' onClick={(e) => e.stopPropagation()}>
          <div className='flex-row flex w-4/5 mx-auto max-md:flex-col max-md:w-full mt-16 max-md:mt-0 mb-10'>
            <div className='w-[40%] max-md:w-full'>
              <div className='flex flex-col gap-5 max-md:gap-2 font-bold pr-10 justify-center max-lg:items-center max-md:p-3'>
                {links.map(link => {
                  return (
                    <div key={uuidv4()} className='w-fit text-4xl max-md:w-full text-center max-md:mt-8' onClick={(e) => { e.stopPropagation(); setIsOpen(!isOpen) }}>
                      <KurashiLink>
                        <Link href={`${link.url}`}>{link.label}</Link>
                      </KurashiLink>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className='flex flex-col'>
              <div className='flex flex-row gap-5 justify-center items-center max-md:hidden'>
                {products.sort((x, y) => x.order - y.order).map(x => {
                  const dummy = x as Product
                  const url = dummy.hasLandingPage ? x.landingPageUrl : `/products/product-detail/${dummy.id}`
                  return (
                    <Link key={uuidv4()} href={url} onClick={(e) => { e.stopPropagation(); setIsOpen(!isOpen) }}>
                      <ProductCard lng='vi' product={x} />
                    </Link>
                  )
                })}
              </div>
              <div className='flex flex-row gap-3 pt-10 self-end max-md:self-center'>
                <LogoFacebook color='#000' width='30' height='30' />
                <LogoYoutube color='#000' width='30' height='30' />
                <LogoZalo width='30' height='30' />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav
