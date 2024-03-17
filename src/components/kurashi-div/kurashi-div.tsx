import React from 'react'

interface KurashiDivProps {
  children: React.ReactNode
}

const KurashiDiv: React.FC<KurashiDivProps> = ({ children }): React.ReactElement => {
  return (
    <div className='text-nowrap mb-2 rounded-md bg-main px-3 py-2 text-secondary font-semibold hover:bg-opacity-[0.8]'>
      {children}
    </div>
  )
}

export default KurashiDiv
