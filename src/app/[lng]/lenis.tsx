'use client'
import { ReactLenis } from '@studio-freight/react-lenis'

interface Props {
  children: React.ReactNode
}

const LenisLayout: React.FC<Props> = ({ children }) => {
  return (
    <ReactLenis root>
      {children}
    </ReactLenis>
  )
}

export default LenisLayout
