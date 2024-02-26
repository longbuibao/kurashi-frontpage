import React from 'react'

interface KurashiLinkProps {
  children: React.ReactNode
  borderBottomStyle?: 'dotted' | 'dashed' | 'solid' | 'double'
}

const KurashiLink: React.FC<KurashiLinkProps> = ({ children, borderBottomStyle = 'solid' }): React.ReactElement => {
  return (
    <div className={`text-nowrap pb-2 border-b-[#fff]/[.00] border-b-2 hover:cursor-pointer hover:text-main border-${borderBottomStyle} hover:border-b-main`}>
      {children}
    </div>
  )
}

export default KurashiLink
