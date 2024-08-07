import { FC } from 'react'
import Link from 'next/link'

import { Logo } from '@/components/logo'
import { KurashiDiv } from '@/components/kurashi-div'
import { KurashiLink } from '@/components/kurashi-link'
import { TFunction } from 'i18next'
import { contactUsingZalo } from '@/i18n/translation-key'
import { v4 as uuidv4 } from 'uuid'
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
    <header>
      <nav className='flex justify-center items-center'>
        <Link href='/' className='items-start'>
          <Logo width={450} height={157} />
        </Link>
        <div className='flex justify-center items-end gap-10 max-lg:hidden max-2xl:hidden ml-auto'>
          {links.map(link => {
            return (
              <div key={uuidv4()} className='ml-auto w-fit'>
                <KurashiLink>
                  <Link href={`${link.url}`}>{link.label}</Link>
                </KurashiLink>
              </div>
            )
          })}
          <KurashiDiv>
            <Link href={zaloLink} target='_blank' rel='noreferrer'>{t(contactUsingZalo)}</Link>
            <div className='ml-3 inline-block'>
              <i className='fa-solid fa-chevron-right' />
            </div>
          </KurashiDiv>
        </div>
        <HamburgerButton links={links} />
        <div />
      </nav>
    </header>
  )
}

export default Nav
