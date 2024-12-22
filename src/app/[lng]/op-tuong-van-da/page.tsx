'use client'

import React from 'react'
import Image from 'next/image'

import SideBar from '../thep-trang-men/side-bar'
import * as transKey from '@/i18n/op-tuong-van-da'
import { PartObservable } from '@/components/part-observable'
import { colorsImage } from './const'

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
            <PartObservable id={transKey.tamOpTuongVanDa} setCurrentInViewDivId={setCurrentInViewDivId} threshold={1}>
              <div className='flex flex-col'>
                <div>Tấm ốp tường có vân đá, màu sắc đa dạng, bề mặt sần tự nhiên nên mang đến sự sang trọng và tinh tế cho không gian sống. Tấm ốp được sản xuất tại Nhật Bản bằng công nghệ in nhiều lớn hiện đại. Tấm ốp có khả năng chống cháy, sử dụng trong nội thất. Tấm ốp chỉ dày 3mm, có góc nối chuyên dụng, nhẹ và thi công dễ dàng. </div>
                <Image className='mt-16' alt='Tấm ốp tường vân đá' src='https://storage.googleapis.com/kurashi_frontpage_files/images/tam-op-da/home/tam-op-da-part-1.png' width={1398} height={692} />
              </div>
            </PartObservable>
            <PartObservable id={transKey.mauSac} setCurrentInViewDivId={setCurrentInViewDivId} threshold={0.7}>
              <div className='grid grid-cols-4 grid-rows-2'>
                {colorsImage.map(x => <Image src={x.imageUrl} alt={x.alt} width={320} height={320} key={x.imageUrl} />)}
              </div>
            </PartObservable>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
