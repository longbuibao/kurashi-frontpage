import Link, { LinkProps } from 'next/link'
import React from 'react'

interface LinkWithMainBgProps extends LinkProps {
  children: React.ReactNode
  rel?: string
  target?: string
}

const LinkWithMainBg: React.FC<LinkWithMainBgProps> = (props) => {
  return (
    <Link {...props} className='hover:bg-main rounded-lg hover:text-secondary border-2 border-main transition'>
      {props.children}
    </Link>
  )
}

export default LinkWithMainBg
