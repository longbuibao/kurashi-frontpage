import React from 'react'

interface KurashiErrorProps {
  message: string
}

const KurashiError: React.FC<KurashiErrorProps> = ({ message }) => {
  return (
    <div className='w-full flex items-center justify-center flex-row h-fit'>
      <i className='fa-solid fa-triangle-exclamation' />
      <p className='ml-2'>{message}</p>
    </div>
  )
}

export default KurashiError
