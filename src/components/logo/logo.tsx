import { FC } from 'react'
import Image from 'next/image'

interface LogoProps {
  width: number
  height?: number
  srcImage?: string
  isMxAuto?: boolean
}

const Logo: FC<LogoProps> = ({ isMxAuto = false, width, height = -1, srcImage = 'https://storage.googleapis.com/kurashi_frontpage_files/images/LOGO.png' }) => {
  const className = isMxAuto ? 'mx-auto' : ''
  return <Image className={className} width={width} height={height} src={srcImage} alt='Kurashi logo' priority />
}

export default Logo
