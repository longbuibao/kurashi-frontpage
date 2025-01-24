'use client'
import React, { useState } from 'react'

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
