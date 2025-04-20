import Image from 'next/image'

interface Props {
  name: string
  picture: string
  date?: string
}

const Avatar = ({ name, picture, date }: Props): React.ReactElement => {
  return (
    <div className='flex items-center'>
      <Image src={picture.replace('/public', '')} className='w-12 h-12 rounded-full mr-4' alt={name} width={50} height={50} />
      <p className='text-black'>
        viết bởi <span className='font-semibold'>{name}</span> vào ngày <span className='font-semibold'>{date}</span>
      </p>
    </div>
  )
}

export default Avatar
