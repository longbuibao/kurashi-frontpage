'use client'
import React from 'react'

import * as transKey from '@/i18n/thep-trang-men'
import SideBar from './side-bar'
import PartIntroThepTrangMen from './part-intro-thep-trang-men'
import PartTinhNangNoiBatThepTrangMen from './part-tinh-nang-noi-bat-thep-trang-men'
import PartUngDungThepTrangMen from './part-ung-dung-thep-trang-men'
import PartKichThuocMauSac from './part-kich-thuoc-mau-sac'
import PartPhuKienNamCham from './part-phu-kien-nam-cham'
import PartSpecTable from './part-spect-table'
import PartThuNghiemDauMo from './part-thu-nghiem-dau-mo'
import PartHuongDanSuDung from './part-huong-dan-su-dung'

interface PageParam {
  params: { lng: string }
}

const Page: React.FC<PageParam> = ({ params: { lng } }) => {
  const [currentInViewDivId, setCurrentInViewDivId] = React.useState('')
  const sectionTitles = [transKey.thepTrangMen, transKey.standoutFeatures, transKey.application, transKey.colorAndSize, transKey.magnetAccessories, transKey.specInfo, transKey.ungDungLauDauMo, transKey.huongDanSuDung]
  return (
    <div className='w-4/5 mx-auto max-md:w-full gap-10 flex flex-col'>
      <div className='flex flex-row gap-10 mt-10'>
        <div className='h-10 gap-5 w-48 top-32 max-md:hidden' />
        <div className='max-md:text-center'>
          <div className='text-4xl mb-3 max-md:text-xl font-extralight'>{'VẬT LIỆU THÉP TRÁNG MEN'.toUpperCase()}</div>
          <div className='font-light'>Tấm ốp bếp bền bỉ, phụ kiện nam châm đa dạng ngay trước mặt, di chuyển tự do dễ dàng</div>
        </div>
      </div>
      <div className='flex flex-row gap-10 my-10 max-md:my-0'>
        <div className='max-md:hidden min-w-fit'>
          <SideBar sectionTitles={sectionTitles} currentDivId={currentInViewDivId} />
        </div>
        <div className='max-md:w-4/5 max-md:mx-auto'>
          <div className='flex flex-col gap-20 max-md:gap-5'>
            <PartIntroThepTrangMen setCurrentInViewDivId={setCurrentInViewDivId} />
            <PartTinhNangNoiBatThepTrangMen setCurrentInViewDivId={setCurrentInViewDivId} />
            <PartUngDungThepTrangMen setCurrentInViewDivId={setCurrentInViewDivId} />
            <PartKichThuocMauSac setCurrentInViewDivId={setCurrentInViewDivId} />
            <PartPhuKienNamCham setCurrentInViewDivId={setCurrentInViewDivId} />
            <PartSpecTable setCurrentInViewDivId={setCurrentInViewDivId} />
            <PartThuNghiemDauMo setCurrentInViewDivId={setCurrentInViewDivId} />
            <PartHuongDanSuDung setCurrentInViewDivId={setCurrentInViewDivId} />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Page
