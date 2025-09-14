'use client'
import React from 'react'

import * as transKey from '@/i18n/thep-trang-men'
import { SideBar } from '@/components/side-bar'
import PartIntroThepTrangMen from './part-intro-thep-trang-men'
import PartTinhNangNoiBatThepTrangMen from './part-tinh-nang-noi-bat-thep-trang-men'
import QuyCach from './part-kich-thuoc-mau-sac'
import PartUngDungTamOp from './part-phu-kien-nam-cham'
import CauTao from './part-spect-table'
import TinhChat from './part-thu-nghiem-dau-mo'

const Page: React.FC = () => {
  const [currentInViewDivId, setCurrentInViewDivId] = React.useState('')
  const imageUrl = 'https://storage.googleapis.com/kurashi_frontpage_files/images/thep-trang-men-page/thep-trang-men-cover.png'
  const sectionTitles = [
    transKey.tamOpTuongNamCham,
    transKey.color,
    transKey.application,
    transKey.quyCach,
    transKey.cauTao,
    transKey.tinhChat,
    transKey.lienHe
  ]

  return (
    <div className='w-4/5 mx-auto max-md:w-full gap-10 flex flex-col'>
      <div className='aspect-[16/9] flex items-end bg-cover bg-center text-white text-5xl font-bold text-secondary' style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className='text-3xl pb-36 pl-40'>
          TẤM ỐP TƯỜNG NAM CHÂM <span className='text-main text-7xl font-extrabold'>KURASHI</span>
        </div>
      </div>
      <div className='flex flex-row gap-10 my-10 max-md:my-0'>
        <div className='max-md:hidden min-w-fit mt-10'>
          <SideBar sectionTitles={sectionTitles} currentDivId={currentInViewDivId} ns='thep-trang-men' />
        </div>
        <div className='max-md:w-4/5 max-md:mx-auto'>
          <div className='flex flex-col max-md:gap-5 gap-10'>
            <PartIntroThepTrangMen setCurrentInViewDivId={setCurrentInViewDivId} />
            <PartTinhNangNoiBatThepTrangMen setCurrentInViewDivId={setCurrentInViewDivId} />
            <PartUngDungTamOp setCurrentInViewDivId={setCurrentInViewDivId} />
            <QuyCach setCurrentInViewDivId={setCurrentInViewDivId} />
            <CauTao setCurrentInViewDivId={setCurrentInViewDivId} />
            <TinhChat setCurrentInViewDivId={setCurrentInViewDivId} />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Page
