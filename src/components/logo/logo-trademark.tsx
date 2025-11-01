import Image from 'next/image'

interface Props {
  width?: number
  height?: number
}

const LogoTradeMark: React.FC<Props> = ({ height = 30, width = 30 }) => {
  return <Image alt='Trademark Kurashi' src='https://storage.googleapis.com/kurashi_frontpage_files/images/rework-homepage/Trademark-Kurashi.svg' width={width} height={height} />
}

export default LogoTradeMark
