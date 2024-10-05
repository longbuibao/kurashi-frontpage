import { FC } from 'react'
import Image from 'next/image'

interface LogoProps {
  width: number
  height?: number
  srcImage?: string
}

const Logo: FC<LogoProps> = ({ width, height = -1, srcImage = 'https://storage.googleapis.com/kurashi_frontpage_files/images/LOGO.png' }) => {
  return <Image width={width} height={height} src={srcImage} alt='Kurashi logo' priority />
}

export default Logo
