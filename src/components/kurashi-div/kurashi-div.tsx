import React from 'react'

interface KurashiDivProps {
  children: React.ReactNode
}

const KurashiDiv: React.FC<KurashiDivProps> = ({ children }): React.ReactElement => {
  return (
    <div className='max-lg:text-wrap text-nowrap rounded-md bg-main px-3 py-2 text-secondary font-semibold'>
      {children}
    </div>
  )
}

export default KurashiDiv
