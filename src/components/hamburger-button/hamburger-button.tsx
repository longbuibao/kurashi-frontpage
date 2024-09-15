'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid'

import { KurashiLink, LinkWithMainBg } from '@/components/kurashi-link'
import { zaloLink } from '@/constants'

interface LinkItem {
  url: string
  label: string
}

interface HamburgerButtonProps {
  links: LinkItem[]
}

const HamburgerButton: React.FC<HamburgerButtonProps> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <button onClick={() => setIsOpen(false)}>
      <div className='max-lg:block max-lg:ml-10 max-2xl:block max-2xl:ml-10'>
        {isOpen ? <div className='flex w-fit mt-5 ml-auto mr-10'><i className='fa-solid fa-xmark text-main' /></div> : <i className='fa-solid fa-bars text-main' />}
      </div>
      {isOpen &&
        <div className='w-screen h-screen absolute z-10'>
          <div className='flex flex-col justify-center items-center gap-10'>
            {links.map(link => {
              return (
                <div key={uuidv4()} className='mx-auto w-fit'>
                  <KurashiLink>
                    <Link href={`${link.url}`}>{link.label}</Link>
                  </KurashiLink>
                </div>
              )
            })}
            <LinkWithMainBg href={zaloLink} target='_blank' rel='noreferrer'>
              <div className='px-3 py-2 rounded-lg'>
                Liên hệ Zalo
                <div className='ml-3 inline-block'>
                  <i className='fa-solid fa-chevron-right' />
                </div>
              </div>
            </LinkWithMainBg>
          </div>
        </div>}
    </button>
  )
}

export default HamburgerButton
