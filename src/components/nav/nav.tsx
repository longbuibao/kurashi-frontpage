import { FC } from 'react'
import Link from 'next/link'

import { Logo } from '@/components/logo'
import { KurashiDiv } from '@/components/kurashi-div'
import { KurashiLink } from '@/components/kurashi-link'
import { TFunction } from 'i18next'
import { contactUsingZalo } from '@/i18n/translation-key'
import { v4 as uuidv4 } from 'uuid'

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
      <nav className='flex justify-between items-center'>
        <Link href='/' className='items-start'>
          <Logo imgSrc='/assets/logo/kurashi-logo.png' width={450} height={157} />
        </Link>
        <div className='flex-1 flex justify-center items-center gap-5 max-lg:hidden'>
          {links.map(link => {
            return (
              <div key={uuidv4()} className='ml-auto w-fit'>
                <KurashiLink>
                  <Link href={`${link.url}`}>{link.label}</Link>
                </KurashiLink>
              </div>
            )
          })}
          <div className='ml-10'>
            <KurashiDiv>
              <Link href='#zalolink'>{t(contactUsingZalo)}</Link>
              <div className='ml-3 inline-block'>
                <i className='fa-solid fa-chevron-right' />
              </div>
            </KurashiDiv>
          </div>

        </div>
        <div className='hidden max-lg:block'>
          <i className='fa-solid fa-bars' />
        </div>
        <div />
      </nav>
    </header>
  )
}

export default Nav
