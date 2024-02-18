import React from 'react'

interface KurashiLeftBorderProps {
  children: React.ReactNode
}

const KurashiLeftBorder: React.FC<KurashiLeftBorderProps> = ({ children }) => {
  return <div className='border-l-main border-l-2 pl-4'>{children}</div>
}

export default KurashiLeftBorder
