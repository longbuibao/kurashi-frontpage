import { FC } from 'react'

interface LogoProps {
  imgSrc: string
  width: number
  height?: number
}

const Logo: FC<LogoProps> = ({ imgSrc, width, height }) => {
  return <img className={`w-[${width}px]`} src={imgSrc} alt='The logo' />
}

export default Logo
