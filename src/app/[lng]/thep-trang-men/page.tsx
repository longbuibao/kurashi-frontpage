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

interface PageParam {
  params: { lng: string }
}

const Page: React.FC<PageParam> = ({ params: { lng } }) => {
  const [currentInViewDivId, setCurrentInViewDivId] = React.useState('')
  const sectionTitles = [transKey.thepTrangMen, transKey.standoutFeatures, transKey.application, transKey.colorAndSize, transKey.magnetAccessories, transKey.specInfo]
  return (
    <div className='flex flex-row gap-10 my-10 w-4/5 mx-auto max-md:w-full'>
      <div className='max-md:hidden min-w-fit'>
        <SideBar sectionTitles={sectionTitles} currentDivId={currentInViewDivId} />
      </div>
      <div className='w-4/5 mx-auto'>
        <div className='text-4xl mb-10 max-md:text-xl'>{'THÉP TRÁNG MEN'.toUpperCase()}</div>
        <div className='flex flex-col gap-20 max-md:gap-5'>
          <PartIntroThepTrangMen setCurrentInViewDivId={setCurrentInViewDivId} />
          <PartTinhNangNoiBatThepTrangMen setCurrentInViewDivId={setCurrentInViewDivId} />
          <PartUngDungThepTrangMen setCurrentInViewDivId={setCurrentInViewDivId} />
          <PartKichThuocMauSac setCurrentInViewDivId={setCurrentInViewDivId} />
          <PartPhuKienNamCham setCurrentInViewDivId={setCurrentInViewDivId} />
          <PartSpecTable setCurrentInViewDivId={setCurrentInViewDivId} />
        </div>
      </div>
    </div>
  )
}

export default Page
