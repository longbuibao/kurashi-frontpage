'use client'

import React, { MouseEventHandler } from 'react'

interface ButtonProps {
  shouldDisable: boolean
  data: any
  onClickHandler: MouseEventHandler<HTMLButtonElement>
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ shouldDisable, children, data, onClickHandler }): React.ReactElement => {
  return <button className={shouldDisable ? 'bg-secondary' : 'bg-main'} onClick={onClickHandler}>{children}</button>
}

export default Button
