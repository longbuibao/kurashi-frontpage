import { FC } from 'react'

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
          <Logo imgSrc='/assets/logo/kurashi-logo.png' width={500} />
        </a>
        <ul className='flex'>
          {links.map(link => {
            return <li key={link.label}><a href={`${link.url}`}>{link.label}</a></li>
          })}
        </ul>
        <i className='fa-solid fa-bars' />
      </nav>
    </header>
  )
}

export default Nav
