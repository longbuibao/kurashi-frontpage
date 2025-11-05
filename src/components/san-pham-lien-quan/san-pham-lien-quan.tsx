import Link from 'next/link'
import Image from 'next/image'

const relatedProducts = [
  {
    url: '/san-pham/tam-op-tuong-bang-thep-trang-men',
    thumb: 'https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua/thep-trang-men.png',
    alt: 'Thép tráng men'
  },
  {
    url: '/san-pham/phu-kien-bep',
    thumb: 'https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua/phu-kien-nam-cham.png',
    alt: 'Phụ kiện bếp'
  },
  {
    url: '/san-pham/tam-op-tuong-van-da',
    thumb: 'https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua/tam-op-van-da.png',
    alt: 'Tấm ốp tường vân đá'
  }
]

const SanPhamLienQuan: React.FC = () => {
  return (
    <div className='my-40 max-md:mt-20 max-md:mb-16 max-md:text-center'>
      <div className='text-3xl my-16 max-md:text-2xl'>SẢN PHẨM LIÊN QUAN</div>
      <div className='max-md:grid max-md:grid-cols-3 flex flex-row justify-between max-md:gap-2 max-md:px-3'>
        {relatedProducts.map(x =>
          <Link key={x.thumb} href={x.url as any}>
            <div className='flex flex-col gap-5 justify-center w-fit'>
              <Image src={x.thumb} width={300} height={300} alt={x.alt} className='transition-shadow hover:shadow-lg' />
              <div className='text-center max-md:text-xs'>{x.alt}</div>
            </div>
          </Link>
        )}
      </div>
    </div>
  )
}

export default SanPhamLienQuan
