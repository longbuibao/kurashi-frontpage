import React from 'react'

interface KurashiLinkProps {
  children: React.ReactNode
}

const KurashiLink: React.FC<KurashiLinkProps> = ({ children }): React.ReactElement => {
  return (
    <div className='text-nowrap pb-2 hover:text-main hover:border-b-2'>
      {children}
    </div>
  )
}

export default KurashiLink
