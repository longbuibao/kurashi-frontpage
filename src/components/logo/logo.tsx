import { FC } from 'react'
import Image from 'next/image'

interface LogoProps {
  width: number
  height?: number
  srcImage?: string
}

const Logo: FC<LogoProps> = ({ width, height = -1, srcImage = 'https://storage.googleapis.com/kurashi_frontpage_files/images/kurashi-logo.png' }) => {
  return <Image className='w-1/2' width={width} height={height} src={srcImage} alt='Kurashi logo' />
}

export default Logo
