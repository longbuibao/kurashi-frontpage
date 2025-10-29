'use client'
import React from 'react'

import Image from 'next/image'
import * as transKey from '@/i18n/thep-trang-men'
import { SideBar } from '@/components/side-bar'
import PartIntroThepTrangMen from './part-intro-thep-trang-men'
import PartTinhNangNoiBatThepTrangMen from './part-tinh-nang-noi-bat-thep-trang-men'
import PartUngDungThepTrangMen from './part-ung-dung-thep-trang-men'
import PartKichThuocMauSac from './part-kich-thuoc-mau-sac'
import PartPhuKienNamCham from './part-phu-kien-nam-cham'
import PartSpecTable from './part-spect-table'
import PartThuNghiemDauMo from './part-thu-nghiem-dau-mo'
import PartSanPhamLienQuan from '../tam-op-tuong-nam-cham/part-san-pham-lien-quan'

const Page: React.FC = () => {
  const imageUrl = 'https://storage.googleapis.com/kurashi_frontpage_files/images/rework-thep-trang-men/thep-trang-men-mobile.webp'
  const [currentInViewDivId, setCurrentInViewDivId] = React.useState('')
  const sectionTitles = [transKey.thepTrangMen, transKey.standoutFeatures, transKey.application, transKey.colorAndSize, transKey.magnetAccessories, transKey.specInfo, transKey.ungDungLauDauMo]
  return (
    <div className='w-4/5 mx-auto max-md:w-full gap-10 flex flex-col leading-relaxed'>
      <div className='aspect-[16/9] max-md:hidden flex items-end bg-cover bg-center text-white text-5xl font-bold text-secondary' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div><Image className='hidden max-md:block' width={1081} height={1351} alt='Thép tráng men' src='https://storage.googleapis.com/kurashi_frontpage_files/images/rework-thep-trang-men/thep-trang-men-mobile.webp' /></div>
      <div className='flex flex-row gap-32 my-36 max-md:my-0'>
        <div className='max-md:hidden min-w-fit mt-10'>
          <SideBar sectionTitles={sectionTitles} currentDivId={currentInViewDivId} ns='thep-trang-men' />
        </div>
        <div className='max-md:mx-auto relative'>
          <div className='max-md:text-[1rem] max-md:hidden max-md:font-semibold max-md:text-center text-3xl top-[-120px] max-md:top-0 max-md:static mt-10 absolute'>
            {'TẤM ỐP TƯỜNG BẰNG THÉP TRÁNG MEN'.toUpperCase()}
          </div>
          <div className='hidden max-md:block max-md:text-center text-2xl top-[-120px] max-md:top-0 max-md:static mt-10 absolute'>
            {'THÉP TRÁNG MEN'.toUpperCase()}
          </div>
          <PartIntroThepTrangMen setCurrentInViewDivId={setCurrentInViewDivId} />
          <PartTinhNangNoiBatThepTrangMen setCurrentInViewDivId={setCurrentInViewDivId} />
          <PartUngDungThepTrangMen setCurrentInViewDivId={setCurrentInViewDivId} />
          <PartKichThuocMauSac setCurrentInViewDivId={setCurrentInViewDivId} />
          <PartPhuKienNamCham setCurrentInViewDivId={setCurrentInViewDivId} />
          <PartSpecTable setCurrentInViewDivId={setCurrentInViewDivId} />
          <PartThuNghiemDauMo setCurrentInViewDivId={setCurrentInViewDivId} />
          <PartSanPhamLienQuan setCurrentInViewDivId={setCurrentInViewDivId} />
        </div>
      </div>
    </div>
  )
}

export default Page
