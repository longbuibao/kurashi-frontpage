import React from 'react'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

import * as c from './const'

interface PartThuNghiemDauMoProps {
  setCurrentInViewDivId: (id: string) => void
}

const PartTinhChat: React.FC<PartThuNghiemDauMoProps> = ({ setCurrentInViewDivId }) => {
  const { ref } = useInView({
    threshold: 1,
    onChange: (inView, _) => {
      if (inView) {
        setCurrentInViewDivId(c.tinhChat)
      }
    },
    root: null
  })

  const features = [
    {
      url: 'https://storage.googleapis.com/kurashi_frontpage_files/phu-kien-thep-trang-men/category-icon/moc_treo_icon.svg',
      title: 'CLICK SENSE',
      content: 'Âm thanh click tinh tế xác nhận mỗi lần chuyển đổi giữa nước nóng',
      id: 0
    },
    {
      url: 'https://storage.googleapis.com/kurashi_frontpage_files/phu-kien-thep-trang-men/category-icon/moc_treo_icon.svg',
      title: 'CLICK SENSE',
      content: 'Âm thanh click tinh tế xác nhận mỗi lần chuyển đổi giữa nước nóng',
      id: 1
    },
    {
      url: 'https://storage.googleapis.com/kurashi_frontpage_files/phu-kien-thep-trang-men/category-icon/moc_treo_icon.svg',
      title: 'CLICK SENSE',
      content: 'Âm thanh click tinh tế xác nhận mỗi lần chuyển đổi giữa nước nóng',
      id: 2
    },
    {
      url: 'https://storage.googleapis.com/kurashi_frontpage_files/phu-kien-thep-trang-men/category-icon/moc_treo_icon.svg',
      title: 'CLICK SENSE',
      content: 'Âm thanh click tinh tế xác nhận mỗi lần chuyển đổi giữa nước nóng',
      id: 3
    }
  ]

  return (
    <>
      <div className='my-10 flex flex-col gap-5'>
        <div className='text-3xl'>Tính chất</div>
        <div className='my-10'>META Tấm ốp tường vân đá sang trọng, sản xuất bằng công nghệ in nhiều lớp từ Nhật Bản. Tấm ốp tường vân đá sang trọng, sản xuất bằng công nghệ in nhiều lớp từ Nhật Bản</div>
      </div>
      <div ref={ref} id={c.tinhChat} className='grid grid-cols-2 grid-rows-2 gap-14'>
        {features.map(x => (
          <div key={x.id} className='flex flex-row gap-5 w-[300px]'>
            <div className='w-[80%]'>
              <Image src={x.url} width={80} height={80} alt='Tính năng thép tráng men' />
            </div>
            <div className='flex flex-col gap-5'>
              <div className='text-2xl'>{x.title}</div>
              <div>{x.content}</div>
            </div>
          </div>))}
      </div>
      <div className='my-20'>
        <div>
          Vui lòng liên hệ KURASHI để được tư vấn chi tiết
        </div>
        <div className='flex flex-row gap-5 bg-main text-secondary w-fit p-3 mt-10'>
          <div className=''>
            Liên hệ
          </div>
          <div>
            <i className='fa-solid fa-chevron-right' />
          </div>
        </div>
      </div>
    </>
  )
}

export default PartTinhChat
