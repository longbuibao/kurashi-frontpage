import { FC } from 'react'

interface LogoProps {
  imgSrc: string
  width: number
  height?: number
}

const Logo: FC<LogoProps> = ({ imgSrc, width, height = -1 }) => {
  return <img width={width} height={height} className={`w-[${width}px] h-[${height}px]`} src={imgSrc} alt='Kurashi logo' />
}

export default Logo
