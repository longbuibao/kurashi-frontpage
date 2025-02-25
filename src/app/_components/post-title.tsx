import { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

export function PostTitle ({ children }: Props): React.ReactElement {
  return (
    <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left'>
      {children}
    </h1>
  )
}
