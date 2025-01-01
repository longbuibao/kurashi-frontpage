'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import SideBar from '../thep-trang-men/side-bar'
import * as transKey from '@/i18n/op-tuong-van-da'
import { PartObservable } from '@/components/part-observable'
import { EmblaCarousel } from '@/components/embla-carousel'
import { colorsImage, characteristics, characteristic, imageUrls } from './const'
import SpecTable from './table'

const Page: React.FC = (): React.ReactElement => {
  const [currentInViewDivId, setCurrentInViewDivId] = React.useState('')
  const sectionTitles = [transKey.tamOpTuongVanDa, transKey.mauSac, transKey.opGocChuyenDung, transKey.dacTinh, transKey.ungDung, transKey.quyCach, transKey.thongSoKiThuat]
  return (
    <div className='w-4/5 mx-auto max-md:w-full gap-10 flex flex-col'>
      <div className='flex flex-row gap-10 mt-10'>
        <div className='h-10 gap-5 w-48 top-32 max-md:hidden' />
        <div className='max-md:text-center'>
          <div className='text-4xl mb-3 max-md:text-xl font-extralight'>{'TẤM ỐP TƯỜNG VÂN ĐÁ'.toUpperCase()}</div>
          <div className='font-light'>Tấm ốp tường vân đá sang trọng, sản xuất bằng công nghệ in nhiều lớp từ Nhật Bản</div>
        </div>
      </div>
      <div className='flex flex-row gap-10 my-10 max-md:my-0'>
        <div className='max-md:hidden min-w-fit'>
          <SideBar sectionTitles={sectionTitles} currentDivId={currentInViewDivId} ns={transKey.ns} />
        </div>
        <div className='max-md:w-4/5 max-md:mx-auto'>
          <div className='flex flex-col gap-20 max-md:gap-5'>
            <PartObservable id={transKey.tamOpTuongVanDa} setCurrentInViewDivId={setCurrentInViewDivId} threshold={0.7}>
              <div className='flex flex-col'>
                <div>Tấm ốp tường có vân đá, màu sắc đa dạng, bề mặt sần tự nhiên nên mang đến sự sang trọng và tinh tế cho không gian sống. Tấm ốp được sản xuất tại Nhật Bản bằng công nghệ in nhiều lớn hiện đại. Tấm ốp có khả năng chống cháy, sử dụng trong nội thất. Tấm ốp chỉ dày 3mm, có góc nối chuyên dụng, nhẹ và thi công dễ dàng. </div>
                <Image className='mt-16' alt='Tấm ốp tường vân đá' src='https://storage.googleapis.com/kurashi_frontpage_files/images/tam-op-da/home/tam-op-da-part-1.png' width={1398} height={692} />
              </div>
            </PartObservable>
            <PartObservable id={transKey.mauSac} setCurrentInViewDivId={setCurrentInViewDivId} threshold={1}>
              <div className='flex flex-col gap-5'>
                <div className='text-2xl'>{'Màu sắc'.toUpperCase()}</div>
                <div className='grid grid-cols-4 grid-rows-2 gap-5'>
                  {colorsImage.map(x => (
                    <div key={x.imageUrl} className='flex flex-col gap-3 hover:scale-105 transition'>
                      <Image src={x.imageUrl} alt={x.alt} width={320} height={320} />
                      <div>{x.colorName}</div>
                    </div>))}
                </div>
              </div>
            </PartObservable>
            <PartObservable id={transKey.opGocChuyenDung} setCurrentInViewDivId={setCurrentInViewDivId} threshold={1}>
              <div className='flex flex-col gap-5'>
                <div className='text-2xl'>{'Ốp góc chuyên dụng'.toUpperCase()}</div>
                <div className='flex flex-col gap-10'>
                  <div>Tấm ốp góc chuyên dụng, cùng màu, các góc cạnh được vát C1 tinh tế. Điều này giúp tăng chất lượng hoàn thiện tại góc nối, giảm công cắt ghép phức tạp tại góc vuông của các loại đá khác và tăng tính thẩm mỹ mối nối.</div>
                  <div className='flex flex-row justify-between'>
                    <Image src='https://storage.googleapis.com/kurashi_frontpage_files/images/tam-op-da/part-op-chuyen-dung/op-goc-chuyen-dung-1.png' width={550} height={550} alt='Ốp góc chuyên dụng' />
                    <Image src='https://storage.googleapis.com/kurashi_frontpage_files/images/tam-op-da/part-op-chuyen-dung/op-goc-chuyen-dung-2.png' width={550} height={550} alt='Ốp góc chuyên dụng' />
                  </div>
                  <div>Ngoài ra, tại vị trí cần nối dài cũng có thể cắt vát C1 dễ dàng, đồng thời có thể dùng sơn đồng màu để hoàn thiện đơn giản.</div>
                </div>
              </div>
            </PartObservable>
            <PartObservable id={transKey.dacTinh} setCurrentInViewDivId={setCurrentInViewDivId} threshold={0.5}>
              <div className='flex flex-col gap-10'>
                <div className='text-2xl'>{'Đặc tính'.toUpperCase()}</div>
                <div className='flex flex-col gap-10'>
                  {characteristics.map((x, i) => (
                    <div key={x.key} className='flex flex-row justify-between'>
                      <div className='w-[60%]'>{x.content}</div>
                      <div className='flex flex-row gap-4'>
                        {x.images.map(y => <Image className='hover:scale-105 transition' src={y.src} width={400} height={400} alt={y.alt} key={y.src} />)}
                      </div>
                    </div>))}
                </div>
                <div className='flex flex-col gap-10'>
                  <div>{characteristic.content}</div>
                  <div>
                    {characteristic.images.map(x =>
                      <Image className='w-full' src={x.src} width={1438} height={786} alt={x.alt} key={x.src} />)}
                  </div>
                </div>
              </div>
            </PartObservable>
            <PartObservable id={transKey.ungDung} setCurrentInViewDivId={setCurrentInViewDivId} threshold={1}>
              <div className='flex flex-col gap-5'>
                <div className='text-2xl'>{'Ứng dụng'.toUpperCase()}</div>
                <div>Tấm ốp được ứng dụng rộng rãi để ốp tường nội thất nhiều vị trí khác nhau như phòng khách, bếp, phòng tắm, lối vào, khách sạn, công trình công cộng, văn phòng...</div>
                <div className='my-10'>
                  <EmblaCarousel useFlatControlButton slides={imageUrls} />
                </div>
              </div>
            </PartObservable>
            <PartObservable id={transKey.quyCach} setCurrentInViewDivId={setCurrentInViewDivId} threshold={0.7}>
              <div className='flex flex-col gap-10'>
                <div className='text-2xl'>{'Quy cách'.toUpperCase()}</div>
                <div>Tấm ốp có các kích thước khác nhau tùy vào màu sắc bao gồm 3 khổ chính 900x600, 600x300 và 900x2400. Phần ốp góc chuyên dụng có 2 khổ 600x (18+18) và 300x (18+18).</div>
                <SpecTable />
              </div>
            </PartObservable>
            <PartObservable id={transKey.thongSoKiThuat} setCurrentInViewDivId={setCurrentInViewDivId} threshold={1}>
              <div className='flex flex-col gap-10'>
                <div className='text-2xl'>{'THÔNG SỐ KỸ THUẬT'.toUpperCase()}</div>
                <div className='overflow-x-auto'>
                  <table>
                    <tbody>
                      <tr>
                        <td className='text-left'>Độ cứng</td>
                        <td className='text-left'>Độ cứng bút chì 3H</td>
                      </tr>
                      <tr>
                        <td className='text-left'>Chống đổi màu</td>
                        <td className='text-left'>
                          Kiểm nghiệm dưới tia UV trong 2500 giờ <br />
                          Kết quả: độ đổi màu Delta E = 1.25
                        </td>
                      </tr>
                      <tr>
                        <td className='text-left'>Chống ố</td>
                        <td className='text-left'>
                          Mực, bụi bẩn: lau sạch bằng nước rửa chén <br />
                          Bút lông dầu: lau sạch bằng cồn <br />
                          Xi đánh giày: lau sạch bằng aceton
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div>Tấm ốp tường vân đá này có chức năng chống cháy với số chứng nhận NM-4238 được cấp bới Bộ đất đai, cơ sở hạ tầng và giao thông của chính phủ Nhật Bản</div>
              </div>
            </PartObservable>
            <div>
              <div className='my-5 text-center w-fit text-xl'>{'Liên hệ'.toUpperCase()}</div>
              <div>Vui lòng liên hệ để được tư vấn chi tiết <span className='text-main'><Link href='/contact'>tại đây</Link></span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
