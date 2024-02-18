import React from 'react'

interface KurashiLinkProps {
  children: React.ReactNode
  borderBottomStyle?: 'dotted' | 'dashed' | 'solid' | 'double'
}

const KurashiLink: React.FC<KurashiLinkProps> = ({ children, borderBottomStyle = 'solid' }): React.ReactElement => {
  return (
    <div className={`text-nowrap pb-2 hover:text-main hover:border-${borderBottomStyle} hover:border-b-2`}>
      {children}
    </div>
  )
}

export default KurashiLink
