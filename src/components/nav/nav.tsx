'use client'
import { FC, useState } from 'react'
import Link from 'next/link'

import { Logo } from '@/components/logo'
import { KurashiLink, LinkWithMainBg } from '@/components/kurashi-link'
import { zaloLink } from '@/constants'
import { v4 as uuidv4 } from 'uuid'
import { ProductCard } from '@/components/product'
import { Product } from '@prisma/client'

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
        <div className='w-4/5 mx-auto'>
          <nav className='flex justify-between items-center'>
            <div className='flex flex-row gap-3 text-3xl relative items-center min-w-[1.875rem] hover:cursor-pointer'>
              <div className={!isOpen ? 'header__burger' : 'header__burger is-active'} onClick={(e) => { e.stopPropagation(); setIsOpen(!isOpen) }} />
            </div>
            {/* <button className='flex flex-row gap-3 text-3xl relative items-center min-w-[1.875rem]' onClick={(e) => { e.stopPropagation(); setIsOpen(!isOpen) }}>
            {isOpen ? <i className='fa-solid fa-xmark text-main' /> : <i className='fa-solid fa-bars text-main' />}
          </button> */}
            <div className='w-80 ml-auto mr-auto'>
              <Link href='/'>
                <div className='flex flex-col justify-center items-center'>
                  <Logo width={450} height={157} />
                  <div className='text-center'>Giải pháp nội thất Nhật Bản</div>
                </div>
              </Link>
            </div>
            <div className='flex justify-center gap-10 max-lg:hidden max-2xl:hidden'>
              <LinkWithMainBg href={zaloLink} target='_blank' rel='noreferrer'>
                <div className='px-3 py-2 rounded-lg'>
                  Liên hệ Zalo
                  <div className='ml-3 inline-block'>
                    <i className='fa-solid fa-chevron-right' />
                  </div>
                </div>
              </LinkWithMainBg>
            </div>
          </nav>
        </div>
      </header>
      <div
        className={!isOpen ? 'h-[100vh] absolute modal-nav' : 'h-[100vh] absolute modal-nav is-active'}
        onClick={(e) => setIsOpen(false)}
      >
        <div
          className='w-full bg-kurashi-bg-main backdrop-blur-md shadow-2xl flex flex-row h-[60%] items-center'
          onClick={(e) => e.stopPropagation()}
        >
          <div className='flex-row flex w-4/5 mx-auto'>
            <div className='w-[40%]'>
              <div className='flex flex-col gap-5 font-bold py-10 pr-10 justify-center'>
                {links.map(link => {
                  return (
                    <div key={uuidv4()} className='w-fit text-4xl' onClick={(e) => { e.stopPropagation(); setIsOpen(!isOpen) }}>
                      <KurashiLink>
                        <Link href={`${link.url}`}>{link.label}</Link>
                      </KurashiLink>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className='flex flex-row gap-5 justify-center items-center'>
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
