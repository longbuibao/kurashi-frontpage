import { forwardRef } from 'react'
import './dropdown-content.css'

const DropdownContent = forwardRef((props: any, ref: any) => {
  const { children, open, top } = props
  return (
    <div
      className={`dropdown-content ${open ? 'content-open' : ''}`}
      style={{ top: top ? `${top}px` : '100%' }}
      ref={ref}
    >
      {children}
    </div>
  )
})

export default DropdownContent
