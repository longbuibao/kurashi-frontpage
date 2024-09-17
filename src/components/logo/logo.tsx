import { FC } from 'react'
import Image from 'next/image'

interface LogoProps {
  width: number
  height?: number
  srcImage?: string
}

const Logo: FC<LogoProps> = ({ width, height = -1, srcImage = 'https://storage.googleapis.com/kurashi_frontpage_files/images/kurashi-logo.png' }) => {
  return <Image width={width} height={height} className={`w-[${width}px] h-[${height}px]`} src={srcImage} alt='Kurashi logo' />
}

export default Logo
