'use client'
import { FC, useState } from 'react'
import Link from 'next/link'

import { Logo } from '@/components/logo'
import { KurashiLink } from '@/components/kurashi-link'
import { zaloLink } from '@/constants'
import { v4 as uuidv4 } from 'uuid'
import { ProductCard } from '@/components/product'
import { Product } from '@prisma/client'
import { LogoZalo } from '@/components/svg-icons'

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

  return (
    <div>
      <header className='sticky top-1 pb-1 mx-auto z-10 w-full h-full' onClick={() => { setIsOpen(false) }}>
        <div className='w-4/5 mx-auto max-md:w-full'>
          <nav className='flex flex-row justify-between items-center relative py-7'>
            <div className='flex flex-row gap-3 text-3xl relative items-center hover:cursor-pointer max-md:px-5'>
              <div className={!isOpen ? 'header__burger' : 'header__burger is-active'} onClick={(e) => { e.stopPropagation(); setIsOpen(!isOpen) }} />
            </div>
            <div className='absolute flex flex-col justify-center items-center pt-3 max-md:w-full w-full max-md:pt-0'>
              <Link href='/' className='w-[68%] max-md:w-1/2'>
                <div>
                  <Logo isMxAuto width={450} height={157} />
                </div>
              </Link>
            </div>
            <div className='max-md:hidden max-md:mr-1 max-md:px-5 flex flex-row items-center gap-10 z-10'>
              <Link href='#'>Phụ kiện online</Link>
              <Link href={zaloLink} target='_blank' rel='noreferrer'>
                <LogoZalo width='35' height='35' />
              </Link>
            </div>
          </nav>
        </div>
      </header>
      <div className={!isOpen ? 'h-[100vh] absolute modal-nav max-md:w-full' : 'h-[100vh] absolute modal-nav is-active max-md:w-full'} onClick={(e) => setIsOpen(false)}>
        <div className='w-full bg-kurashi-bg-main backdrop-blur-md shadow-2xl flex flex-row h-[60%] max-md:h-full items-center max-md:items-start' onClick={(e) => e.stopPropagation()}>
          <div className='flex-row flex w-4/5 mx-auto max-md:flex-col max-md:w-full'>
            <div className='w-[40%] max-md:w-full'>
              <div className='flex flex-col gap-5 font-bold py-10 pr-10 justify-center max-lg:items-center max-md:p-3'>
                {links.map(link => {
                  return (
                    <div key={uuidv4()} className='w-fit text-4xl max-md:w-full text-center max-md:mt-10' onClick={(e) => { e.stopPropagation(); setIsOpen(!isOpen) }}>
                      <KurashiLink>
                        <Link href={`${link.url}`}>{link.label}</Link>
                      </KurashiLink>
                    </div>
                  )
                })}
              </div>
            </div>
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav
