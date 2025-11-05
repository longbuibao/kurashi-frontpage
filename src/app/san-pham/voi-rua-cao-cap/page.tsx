import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { UrlObject } from 'url'
import { EmblaCarousel } from '@/components/embla-carousel'
import { LogoTradeMark } from '@/components/logo'
import { GoldenCollection } from '@/components/golden-collection'
import { SanPhamLienQuan } from '@/components/san-pham-lien-quan'

export const metadata = {
  title: 'Vòi rửa cao cấp'
}

const imageUrls = [
  { url: 'https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua-cao-cap-rework/voi-lavabo-dung-1.webp', alt: 'vòi cao cấp lavabo dựng' },
  { url: 'https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua-cao-cap-rework/voi-lavabo-dung-1a.webp', alt: 'vòi cao cấp lavabo dựng' },
  { url: 'https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua-cao-cap-rework/voi-lavabo-dung-1b.webp', alt: 'vòi cao cấp lavabo dựng' },
  { url: 'https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua-cao-cap-rework/voi-lavabo-treo-thuong-1.webp', alt: 'vòi cao cấp lavabo treo' },
  { url: 'https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua-cao-cap-rework/voi-lavabo-treo-tuong-1a.webp', alt: 'vòi cao cấp lavabo treo' },
  { url: 'https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua-cao-cap-rework/voi-lavabo-treo-tuong-1b.webp', alt: 'vòi cao cấp lavabo treo' },
  { url: 'https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua-cao-cap-rework/voi-lavabo-co-dien-1.webp', alt: 'vòi cao cấp lavabo cổ điển' },
  { url: 'https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua-cao-cap-rework/voi-lavabo-co-dien-1a.webp', alt: 'vòi cao cấp lavabo cổ điển' },
  { url: 'https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua-cao-cap-rework/voi-lavabo-co-dien-1b.webp', alt: 'vòi cao cấp lavabo cổ điển' },
  { url: 'https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua-cao-cap-rework/voi-rua-chen-dung-1.webp', alt: 'vòi cao cấp lavabo rửa chén' },
  { url: 'https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua-cao-cap-rework/voi-rua-chen-dung-1a.webp', alt: 'vòi cao cấp lavabo rửa chén' },
  { url: 'https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua-cao-cap-rework/voi-rua-chen-dung-1b.webp', alt: 'vòi cao cấp lavabo rửa chén' }
].map(x => {
  return {
    key: x.url,
    content: (
      <Image src={x.url} width={600} height={600} alt={x.alt} />
    )
  }
})

const kieuDangImages = [
  { url: 'https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua-cao-cap-rework/kieu-dang-voi-kurashi-1.webp', alt: 'Kiểu dáng vòi cao cấp Kurashi' },
  { url: 'https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua-cao-cap-rework/kieu-dang-voi-kurashi-2.webp', alt: 'Kiểu dáng vòi cao cấp Kurashi' },
  { url: 'https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua-cao-cap-rework/kieu-dang-voi-kurashi-3.webp', alt: 'Kiểu dáng vòi cao cấp Kurashi' },
  { url: 'https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua-cao-cap-rework/kieu-dang-voi-kurashi-4.webp', alt: 'Kiểu dáng vòi cao cấp Kurashi' },
  { url: 'https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua-cao-cap-rework/kieu-dang-voi-kurashi-5.webp', alt: 'Kiểu dáng vòi cao cấp Kurashi' },
  { url: 'https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua-cao-cap-rework/kieu-dang-voi-kurashi-6.webp', alt: 'Kiểu dáng vòi cao cấp Kurashi' }
].map(x => {
  return {
    key: x.url,
    content: (
      <Image src={x.url} width={600} height={600} alt={x.alt} />
    )
  }
})

const products = [
  {
    thumbnail: 'https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua/voi_1.png',
    id: '001',
    alt: 'sản phẩm 1',
    link: '#'
  },
  {
    thumbnail: 'https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua/voi_2.png',
    id: '002',
    alt: 'sản phẩm 2',
    link: '#'
  },
  {
    thumbnail: 'https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua/voi_3.png',
    id: '003',
    alt: 'sản phẩm 3',
    link: '#'
  },
  {
    thumbnail: 'https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua/voi_1.png',
    id: '004',
    alt: 'sản phẩm 1',
    link: '#'
  },
  {
    thumbnail: 'https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua/voi_2.png',
    id: '005',
    alt: 'sản phẩm 2',
    link: '#'
  },
  {
    thumbnail: 'https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua/voi_3.png',
    id: '006',
    alt: 'sản phẩm 3',
    link: '#'
  },
  {
    thumbnail: 'https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua/voi_1.png',
    id: '007',
    alt: 'sản phẩm 1',
    link: '#'
  },
  {
    thumbnail: 'https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua/voi_2.png',
    id: '008',
    alt: 'sản phẩm 2',
    link: '#'
  },
  {
    thumbnail: 'https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua/voi_3.png',
    id: '009',
    alt: 'sản phẩm 3',
    link: '#'
  }
]

const Page: React.FC = () => {
  return (
    <div className='leading-loose'>
      <Image className='w-full h-auto max-md:hidden' src='/images/voi-rua-cao-cap-kurashi.svg' alt='Hero' width={1920} height={900} />
      <Image className='w-full h-auto hidden max-md:block' src='https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua-cao-cap-rework/voi-rua-cao-cap-mobile.webp' alt='Hero' width={1018} height={1351} />
      <div className='w-[70%] mx-auto max-md:w-full'>
        <h1 className='text-3xl my-20 max-md:mt-14 max-md:mb-10 max-md:text-nowrap max-md:text-2xl max-md:text-center'>
          VÒI RỬA CAO CẤP
        </h1>
        <div className='flex flex-col gap-5 my-10 max-md:text-center max-md:mt-0'>
          Bộ sưu tập vòi hand-made KURASHI - PVD và bề mặt cao cấp. Vòi lavabo & vòi rửa chén Nhật Bản, sang trọng, bền bỉ, tiết kiệm nước, bảo hành chính hãng.
        </div>
        <div className='max-md:w-[100%] max-md:mx-auto'>
          <EmblaCarousel biggerSlider={false} slides={imageUrls} useFlatControlButton />
        </div>
        <div className='flex flex-row gap-10 items-center my-10 max-md:flex-col max-md:text-center max-md:justify-center '>
          <div className='flex flex-col h-full max-md:w-full max-md:items-center'>
            <div className='flex flex-col items-end gap-10 pb-10 h-full max-md:hidden'>
              <div className='font-gtFont text-3xl max-md:text-center max-md:w-full'>GOLD COLLECTION</div>
              <div className='text-3xl opacity-50 font-semibold text-[#6D6E71 ]'>{'Dấu ấn thượng lưu'.toUpperCase()}</div>
              <div className='w-full h-[0.5px] bg-[#6D6E71] opacity-20' />
              <div className='text-right max-md:text-center '>
                Bộ sưu tập là sự hòa quyện giữa nghệ thuật cổ điển và nét tinh giản hiện đại, mang đến vẻ thanh lịch vượt thời gian. Thiết kế linh hoạt cùng tông màu vàng kim được lựa chọn tỉ mỉ, hoàn thiện đến từng chi tiết, giúp sản phẩm nổi bật theo cách thật tinh tế, trở thành biểu tượng của phong cách sống thượng lưu.
              </div>
              <Link href='#' className='self-end mt-20 max-md:self-center max-md:mt-10'>
                <div className='bg-main text-secondary p-3 flex flex-row gap-3 items-center'>
                  Khám phá
                  <i className='fa-solid fa-chevron-right' />
                </div>
              </Link>
            </div>
            <GoldenCollection />
          </div>
          <Image className='max-md:hidden' src='https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua-cao-cap-rework/gold-collection.webp' width={451} height={721} alt='vòi rửa cao cấp golden collection' />
        </div>
        <div className='my-10 max-md:mt-28 max-md:mb-20'>
          <div className='text-3xl font-gtFont max-md:text-center'>MADE IN JAPAN</div>
          <div className='flex flex-row gap-40 mt-10 max-md:flex-col max-md:gap-14'>
            <Image
              className='w-1/2 max-md:w-full'
              alt='Vòi rửa Nhật Bản'
              width={300}
              height={325}
              src='https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua/made_in_japan.png'
            />
            <div className='flex flex-col gap-5 w-1/3 max-md:w-full max-md:items-center'>
              <div className='font-bold px-5'>
                <Image className='max-md:hidden ' src='https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua-cao-cap-rework/lich-su-146-nam-voi-rua-kurashi.webp' width={365} height={252} alt='vòi rửa nhật bản 146 năm' />
                <Image className='max-md:block hidden' src='https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua-cao-cap-rework/lich-su-146-nam-voi-rua-kurashi.webp' width={300} height={207} alt='vòi rửa nhật bản 146 năm' />
              </div>
              <div className='mt-3 text-center leading-loose max-md:px-7'>
                Vòi KURASHI được đúc từ đồng nguyên khối, gia công cơ khí chính xác tại Nhật, sau đó được chà nhám thủ công tạo bề mặt mịn tinh tế. Lớp mạ PVD công nghệ Nhật hoàn thiện sang trọng. Cuối cùng, sản phẩm được lắp ráp và kiểm định nghiêm ngặt để đảm bảo chất lượng và độ bền.
              </div>
            </div>
          </div>
        </div>
        <div className='mt-40 max-md:mt-0'>
          <div className='flex flex-row items-center justify-center'>
            <LogoTradeMark width={82} height={82} />
            <div className='font-gtFont text-2xl'>SIGNATURE</div>
          </div>
          <div className='my-10 max-md:text-center max-md:px-7'>Mỗi chiếc vòi <span className='font-bold'>KURASHI</span> được tạo ra để phản chiếu phong cách sống riêng của bạn — <span className='font-bold'>khác biệt, tinh tế và có cá tính.</span> Không chỉ là một vật dụng, đó là <span className='font-bold'>dấu ấn trong từng khoảnh khắc</span> bạn chạm vào nước, nấu ăn hay bắt đầu ngày mới.</div>
          <div className='my-16'>
            <EmblaCarousel biggerSlider={false} slides={kieuDangImages} useFlatControlButton />
          </div>
        </div>
        <div className='my-40 max-md:my-20 max-md:w-4/5 max-md:mx-auto'>
          <div className='border-l-2 border-r-black font-bold px-5 text-2xl my-10 max-md:pl-3'>
            BỘ SƯU TẬP VÒI
          </div>
          <div className='my-10'>Bộ sưu tập vòi nước KURASHI - nơi tập hợp đầy đủ các mẫu vòi Nhật Bản chính hãng. Bạn có thể lọc nhanh theo loại sản phẩm (vòi lavabo hoặc vòi rửa chén) để tìm được mẫu phù hợp nhất.</div>
        </div>
        <div>
          <div className='flex flex-row my-5'>
            <div className='px-10 max-md:px-5 py-2 w-1/2 bg-[#ADADAD] text-center text-secondary'>Vòi rửa chén</div>
            <div className='px-10 max-md:px-5 py-2 w-1/2 bg-[#D9D9D9] text-center'>Vòi rửa mặt</div>
          </div>
          <div className='grid grid-cols-3 grid-rows-3 w-full my-10 gap-20 max-md:gap-10 max-md:grid-cols-1'>
            {products.map(x =>
              <Link key={x.id} href={x.link as any as UrlObject} className='size-80 flex flex-col gap-3 items-center justify-center relative'>
                <div className='relative w-4/5 h-[90%]'>
                  <Image src={x.thumbnail} className='object-fill' fill alt={x.alt} />
                </div>
                <div className='text-center'>Mã số {x.id}</div>
              </Link>
            )}
          </div>
        </div>
        <SanPhamLienQuan />
      </div>
    </div>
  )
}

export default Page
