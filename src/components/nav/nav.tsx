import { FC } from 'react'
import Link from 'next/link'

import { Logo } from '@/components/logo'
import { LinkWithMainBg } from '@/components/kurashi-link'
import { TFunction } from 'i18next'
import { contactUsingZalo } from '@/i18n/translation-key'
import { zaloLink } from '@/constants'
import { HamburgerButton } from '@/components/hamburger-button'

interface LinkItem {
  url: string
  label: string
}

interface NavProps {
  t: TFunction<any, any>
  links: LinkItem[]
}

const Nav: FC<NavProps> = ({ links, t }) => {
  return (
    <header className='sticky top-1'>
      <nav className='flex justify-between items-center'>
        <div className='flex flex-row gap-3 text-2xl'>
          <HamburgerButton links={links} />
          <div>Menu</div>
        </div>
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
              {t(contactUsingZalo)}
              <div className='ml-3 inline-block'>
                <i className='fa-solid fa-chevron-right' />
              </div>
            </div>
          </LinkWithMainBg>
        </div>
      </nav>
    </header>
  )
}

export default Nav
