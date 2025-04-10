import Image from 'next/image'

interface Props {
  name: string
  picture: string
}

const Avatar = ({ name, picture }: Props): React.ReactElement => {
  return (
    <div className='flex items-center'>
      <Image src={picture.replace('/public', '')} className='w-12 h-12 rounded-full mr-4' alt={name} width={50} height={50} />
      <div className='text-xl font-bold'>{name}</div>
    </div>
  )
}

export default Avatar
