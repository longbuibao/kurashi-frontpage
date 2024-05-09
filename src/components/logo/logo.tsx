import { FC } from 'react'

interface LogoProps {
  width: number
  height?: number
}

const Logo: FC<LogoProps> = ({ width, height = -1 }) => {
  return <img width={width} height={height} className={`w-[${width}px] h-[${height}px]`} src='https://storage.googleapis.com/kurashi_frontpage_files/images/kurashi-logo.png' alt='Kurashi logo' />
}

export default Logo
