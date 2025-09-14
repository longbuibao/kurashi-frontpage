import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { UrlObject } from 'url'

const Page: React.FC = () => {
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
  return (
    <div>
      <div>
        <Image
          className='w-full'
          alt=''
          width={1000}
          height={1000}
          src='https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua/voi_rua_cover.png'
        />
      </div>
      <div className='w-[40%] mx-auto'>
        <h1 className='text-3xl my-10'>
          Vòi rửa <span className='text-main text-5xl font-bold'>KURASHI</span>
        </h1>
        <div className='flex flex-col gap-5 my-10'>
          <div>
            Mô tả target SEO Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
            veritatis accusantium repellendus tempora eum modi harum, nemo impedit optio porro sint
            laboriosam mollitia inventore non? Sequi quaerat nisi nostrum atque! Mô tả target SEO
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum veritatis accusantium
            repellendus tempora eum modi harum, nemo impedit optio porro sint laboriosam mollitia
            inventore non? Sequi quaerat nisi nostrum atque!
          </div>
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus consequuntur
            perferendis iusto accusamus illum, commodi ab! Quod, blanditiis? Nisi eos minus
            excepturi quas error porro omnis hic fugit iusto quidem. Mô tả target SEO Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Illum veritatis accusantium repellendus
            tempora eum modi harum, nemo impedit optio porro sint laboriosam mollitia inventore non?
            Sequi quaerat nisi nostrum atque!
          </div>
        </div>
        <div className='my-10'>
          <div className='text-5xl'>MADE IN JAPAN</div>
          <div className='flex flex-row justify-between mt-10'>
            <Image
              alt='Vòi rửa Nhật Bản'
              width={300}
              height={325}
              src='https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua/made_in_japan.png'
            />
            <div className='flex flex-col gap-5 w-1/2'>
              <div className='font-bold px-5'>
                <Image src='https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua/146_year.png' width={365} height={252} alt='146 năm' />
              </div>
              <div className='mt-3'>Mô tả target SEO あなたはどんなキッチンスタイルをお望みですか？自然と人が集まるような心地よいナチュラルスタイル。ステンレスでしつらえた、プロの厨房を思わせるプロフェッショナルスタイル。</div>
            </div>
          </div>
        </div>
        <div className='my-20 flex flex-row gap-10'>
          <div className='flex flex-col gap-10'>
            <div className='font-bold text-2xl'>GOLD COLLECTION</div>
            <div className='text-2xl'>DẤU ẤN THƯỢNG LƯU</div>
            <div className='w-full h-[1px] bg-black opacity-50' />
            <div>
              Bộ sưu tập là sự hòa quyện giữa nghệ thuật cổ điển và nét tinh giản hiện đại, mang đến vẻ thanh lịch vượt thời gian. Thiết kế linh hoạt cùng tông màu vàng kim được lựa chọn tỉ mỉ, hoàn thiện đến từng chi tiết, giúp sản phẩm nổi bật theo cách thật tinh tế, trở thành biểu tượng của phong cách sống thượng lưu.
            </div>
          </div>
          <Image className='w-1/3' src='https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua/voi-rua-golden.png' width={428} height={1148} alt='Vòi golden' />
        </div>
        <div className='my-20'>
          <div className='border-l-2 border-r-black font-bold px-5 text-2xl'>
            BỘ SƯU TẬP
          </div>
          <div className='flex flex-row my-5'>
            <div className='px-10 py-2 w-1/2 bg-[#ADADAD] text-center text-secondary'>Vòi rửa chén</div>
            <div className='px-10 py-2 w-1/2 bg-[#D9D9D9] text-center'>Vòi rửa mặt</div>
          </div>
          <div className='grid grid-cols-3 grid-rows-3 w-full my-10 gap-20'>
            {products.map(x =>
              <div key={x.id} className='flex flex-col gap-3 items-center justify-center'>
                <Image src={x.thumbnail} width={100} height={100} alt={x.alt} />
                <div>Mã số {x.id}</div>
                <Link href={x.link as any as UrlObject}>
                  <div className='flex flex-row gap-3 items-center border border-main px-3 py-1'>
                    <div>
                      Chi tiết
                    </div>
                    <i className='fa-solid fa-chevron-right' />
                  </div>
                </Link>
              </div>)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
