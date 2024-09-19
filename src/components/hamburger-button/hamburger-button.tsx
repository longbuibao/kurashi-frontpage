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
    <>
      <button onClick={() => setIsOpen(!isOpen)}>
        <i className='fa-solid fa-bars text-main' />
      </button>

    </>

  )
}

export default HamburgerButton
