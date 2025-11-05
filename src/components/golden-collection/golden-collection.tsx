import Image from 'next/image'
import Link from 'next/link'

const GoldenCollection: React.FC = () => {
  return (
    <div className='max-md:relative hidden max-md:block py-10 max-md:py-5 bg-main-phu-kien max-md:translate-y-11 max-md:w-full'>
      <Image className='max-md:hidden' src='https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua-cao-cap-rework/gold-collection.webp' width={451} height={721} alt='vòi rửa cao cấp golden collection' />
      <Image className='max-md:block hidden mx-auto' src='https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua-cao-cap-rework/gold-collection.webp' width={300} height={479} alt='vòi rửa cao cấp golden collection' />
      <div className='font-gtFont text-xl max-md:text-center max-md:w-full'>GOLD COLLECTION</div>
      <Link href='/san-pham/voi-rua-cao-cap' className='self-end mt-12 max-md:self-center max-md:mt-10'>
        <div className='bg-main text-secondary p-3 my-10 flex flex-row gap-3 items-center w-fit mx-auto'>
          Khám phá
          <i className='fa-solid fa-chevron-right' />
        </div>
      </Link>
    </div>
  )
}

export default GoldenCollection
