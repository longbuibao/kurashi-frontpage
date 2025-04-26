'use client'

import { forwardRef } from 'react'

import './dropdown-button.css'

const DropdownButton = forwardRef((props: any, ref: any) => {
  const { children, toggle, open } = props

  return (
    <div
      onClick={toggle}
      className={`dropdown-btn ${open ? 'button-open' : ''}`}
      ref={ref}
    >
      {children}
      <span className='toggle-icon'>
        {open ? <i className='fa-solid fa-chevron-up' /> : <i className='fa-solid fa-chevron-down' />}
      </span>
    </div>
  )
})

export default DropdownButton
