import { FC } from 'react'
import Link from 'next/link'

import { Logo } from '@/components/logo'
import { TFunction } from 'i18next'

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
    <header className='py-8 mx-auto z-10 w-3/4'>
      <nav className='flex justify-between items-center'>
        <Link href='/' className='items-start mx-5'>
          <Logo imgSrc='/assets/logo/kurashi-logo.png' width={450} height={157} />
        </Link>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {links.map(link => {
            return (
              <li className='text-nowrap pb-2 hover:text-main hover:border-b-2' key={link.label}>
                <Link href={`${link.url}`}>{link.label}</Link>
              </li>
            )
          })}
          <li className='text-nowrap rounded-md bg-main px-3 py-2 text-secondary font-semibold'>
            <div>
              <Link href='#zalolink'>{t('contact-using-zalo')}</Link>
              <div className='ml-3 inline-block'>
                <i className='fa-solid fa-chevron-right' />
              </div>
            </div>
          </li>
        </ul>
        <div className='hidden max-lg:block'>
          <i className='fa-solid fa-bars' />
        </div>
      </nav>
    </header>
  )
}

export default Nav
