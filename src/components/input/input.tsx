import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = ({ placeholder }) => {
  return (
    <div className='border-b border-secondary'>
      <input type='text' placeholder={placeholder} />
    </div>
  )
}

export default Input
