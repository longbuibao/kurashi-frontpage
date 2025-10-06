'use client'
import React from 'react'
import { SideBar } from '@/components/side-bar'
import * as c from './const'

import PartIntro from './part-intro'
import PartMauSac from './part-mau-sac'
import PartUngDungTamOp from './part-ung-dung'
import PartQuyCach from './part-quy-cach'
import PartCauTao from './part-cau-tao'
import PartTinhChat from './part-tinh-chat'
import PartSanPhamLienQuan from './part-san-pham-lien-quan'

const Page: React.FC = () => {
  const imageUrl = 'https://storage.googleapis.com/kurashi_frontpage_files/images/tam-op-tuong-nam-cham/tam-op-tuong-nam-cham-nhat-ban.webp'
  const [currentInViewDivId, setCurrentInViewDivId] = React.useState('')
  const sectionTitles = [
    c.intro,
    c.mauSac,
    c.ungDung,
    c.quyCach,
    c.cauTao,
    c.tinhChat,
    c.sanPhamLienQuan
  ]
  return (
    <div className='w-4/5 mx-auto max-md:w-full gap-10 flex flex-col leading-relaxed'>
      <div className='aspect-[16/9] flex items-end bg-cover bg-center text-white text-5xl font-bold text-secondary' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='flex flex-row gap-32 my-36 max-md:my-0'>
        <div className='max-md:hidden min-w-fit mt-10'>
          <SideBar sectionTitles={sectionTitles} currentDivId={currentInViewDivId} ns='thep-trang-men' />
        </div>
        <div className='max-md:w-4/5 max-md:mx-auto relative'>
          <div className='text-3xl top-[-120px] mt-10 absolute'>{'Tấm ốp tường nam châm nhật bản'.toUpperCase()}</div>
          <PartIntro setCurrentInViewDivId={setCurrentInViewDivId} />
          <PartMauSac setCurrentInViewDivId={setCurrentInViewDivId} />
          <PartUngDungTamOp setCurrentInViewDivId={setCurrentInViewDivId} />
          <PartQuyCach setCurrentInViewDivId={setCurrentInViewDivId} />
          <PartCauTao setCurrentInViewDivId={setCurrentInViewDivId} />
          <PartTinhChat setCurrentInViewDivId={setCurrentInViewDivId} />
          <PartSanPhamLienQuan setCurrentInViewDivId={setCurrentInViewDivId} />
        </div>
      </div>
    </div>
  )
}

export default Page
