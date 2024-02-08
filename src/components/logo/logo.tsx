import { FC } from 'react'

interface LogoProps {
  imgSrc: string
  width: number
  height?: number
}

const Logo: FC<LogoProps> = ({ imgSrc, width, height }) => {
  return <img width={width} className={`w-[${width}px]`} src={imgSrc} alt='Kurashi logo' />
}

export default Logo
