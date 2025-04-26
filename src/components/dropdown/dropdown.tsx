'use client'

import { useEffect, useState, useRef } from 'react'

import DropdownButton from './dropdown-button'
import DropdownContent from './dropdown-content'

import './dropdown.css'

const Dropdown = ({ buttonText, content }: any): React.ReactElement => {
  const [open, setOpen] = useState(false)
  const [dropdownTop, setDropdownTop] = useState(0)

  const dropdownRef = useRef()
  const buttonRef = useRef()
  const contentRef = useRef()

  const toggleDropdown = (): void => {
    if (!open) {
      const spaceRemaining = window.innerHeight - (buttonRef as any).current.getBoundingClientRect().bottom
      const contentHeight = (contentRef.current as any).clientHeight

      const topPosition =
        spaceRemaining > contentHeight
          ? null
          : -(contentHeight - spaceRemaining)
      setDropdownTop(topPosition as any)
    }

    setOpen((open) => !open)
  }

  useEffect(() => {
    const handler = (event: any): void => {
      if (dropdownRef.current && !(dropdownRef.current as any).contains(event.target)) {
        setOpen(false)
      }
    }

    document.addEventListener('click', handler)

    return () => {
      document.removeEventListener('click', handler)
    }
  }, [dropdownRef])

  return (
    <div ref={dropdownRef as any} className='dropdown'>
      <DropdownButton ref={buttonRef} toggle={toggleDropdown} open={open}>
        <p className='line-clamp-1'>{buttonText}</p>
      </DropdownButton>
      <DropdownContent top={dropdownTop} ref={contentRef} open={open}>
        {content}
      </DropdownContent>
    </div>
  )
}

export default Dropdown
