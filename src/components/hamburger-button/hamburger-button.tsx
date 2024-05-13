'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid'

import { KurashiDiv } from '@/components/kurashi-div'
import { KurashiLink } from '@/components/kurashi-link'
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
    <button onClick={() => setIsOpen(!isOpen)}>
      <div className='hidden max-lg:block max-lg:ml-10 max-2xl:block max-2xl:ml-10'>
        {isOpen ? <div className='flex w-fit mt-5 ml-auto mr-10'><i className='fa-solid fa-xmark' /></div> : <i className='fa-solid fa-bars' />}
      </div>
      {isOpen &&
        <div className='h-screen w-screen'>
          <div className='flex flex-col justify-center items-center w-full h-full gap-10'>
            {links.map(link => {
              return (
                <div key={uuidv4()} className='mx-auto w-fit'>
                  <KurashiLink>
                    <Link href={`${link.url}`}>{link.label}</Link>
                  </KurashiLink>
                </div>
              )
            })}
            <KurashiDiv>
              <Link href={zaloLink} target='_blank' rel='noreferrer'>Liên hệ Zalo</Link>
              <div className='ml-3 inline-block'>
                <i className='fa-solid fa-chevron-right' />
              </div>
            </KurashiDiv>
          </div>
        </div>}
    </button>
  )
}

export default HamburgerButton
