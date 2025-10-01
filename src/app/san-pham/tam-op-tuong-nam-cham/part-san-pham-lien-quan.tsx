import React from 'react'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Link from 'next/link'

import * as c from './const'

interface PartSanPhamLienQuanProps {
  setCurrentInViewDivId: (id: string) => void
}

const PartSanPhamLienQuan: React.FC<PartSanPhamLienQuanProps> = ({ setCurrentInViewDivId }) => {
  const { ref } = useInView({
    threshold: 1,
    onChange: (inView, _) => {
      if (inView) {
        setCurrentInViewDivId(c.sanPhamLienQuan)
      }
    },
    root: null
  })

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

  return (
    <div ref={ref} id={c.sanPhamLienQuan} className='mt-40'>
      <div className='text-3xl mb-10'>SẢN PHẨM LIÊN QUAN</div>
      <div className='flex flex-row justify-between'>
        {relatedProducts.map(x =>
          <Link key={x.thumb} href={x.url}>
            <div className='flex flex-col gap-5 justify-center w-fit'>
              <Image src={x.thumb} width={300} height={300} alt={x.alt} />
              <div className='text-center'>{x.alt}</div>
            </div>
          </Link>
        )}
      </div>
    </div>
  )
}

export default PartSanPhamLienQuan
