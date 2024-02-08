import { FC } from 'react'
import Link from 'next/link'

import { Logo } from '@/components/logo'

interface LinkItem {
  url: string
  label: string
}

interface NavProps {
  links: LinkItem[]
}

const Nav: FC<NavProps> = ({ links }) => {
  return (
    <header className='w-full'>
      <nav>
        <a href='/'>
          <Logo imgSrc='/assets/logo/kurashi-logo.png' width={300} />
        </a>
        <ul className='flex'>
          {links.map(link => {
            return (
              <li key={link.label}>
                <Link href={`${link.url}`}>{link.label}</Link>
              </li>
            )
          })}
        </ul>
        <i className='fa-solid fa-bars' />
      </nav>
    </header>
  )
}

export default Nav
