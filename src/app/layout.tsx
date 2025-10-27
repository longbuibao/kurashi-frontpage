import './globals.css'
import './embla.css'

import { GoogleAnalytics } from '@next/third-parties/google'

import { dir } from 'i18next'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { navItems, zaloLink } from '@/constants'
import { useTranslation } from '@/i18n'
import ProgressBarProviders from '@/components/progress-bar-provider'
import { Inter } from 'next/font/google'
import { BackToTopButton } from '@/components/back-to-top'
import { lng } from '@/app/const'
import localFont from 'next/font/local'
import { KurashiLogoSvg } from '@/components/logo'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Trang chủ Kurashi',
  metadataBase: new URL('https://kurashi.com.vn')
}

interface RootProps {
  children: React.ReactNode
}

const inter = Inter({ subsets: ['latin'], weight: '200' })

const gtFont = localFont({
  src: [
    {
      path: '../../public/fonts/GT_Super_Display_Regular.otf',
      weight: '400',
      style: 'normal'
    }
  ],
  variable: '--font-gtFont',
  display: 'swap'
})

const RootLayout: React.FC<RootProps> = async ({ children }): Promise<React.ReactElement> => {
  const { t } = await useTranslation(lng)
  const footerItems = [
    {
      title: 'Hệ thống phân phối chính hãng',
      content: 'Tra cứu điểm bán hàng chính hãng gần bạn nhất trên cả nước'
    },
    {
      title: 'Catalog',
      content: 'Thông tin sản phẩm và bộ sưu tập mới nhất'
    },
    {
      title: 'Tài khoản my K',
      content: 'Hệ thống giao dịch số và điểm thưởng dành riêng cho đối tác'
    }
  ]

  return (
    <html lang={lng} dir={dir(lng)} className={`${gtFont.variable}`}>
      <head>
        <GoogleAnalytics gaId='G-XCHH0MSJ6B' />
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css' crossOrigin='anonymous' />
      </head>
      <body className={inter.className}>
        <div className='sticky top-0 z-50'>
          <Nav links={navItems.map(item => { return { label: item.label, url: item.url } })} />
        </div>
        <ProgressBarProviders>
          {children}
        </ProgressBarProviders>
        <BackToTopButton />
        <Link href={zaloLink} className='max-md:w-10 bg-main h-40 text-secondary fixed right-0 top-1/2 -translate-y-1/2 text-white shadow-lg transition duration-300 z-50'>
          <div className='flex flex-col gap-5 items-center justify-center h-full p-4 max-md:p-0'>
            <div className='max-md:hidden'>
              <i className='text-3xl fa-regular fa-message' />
            </div>
            <div className='font-bold max-md:rotate-90'>
              <div className='max-md:hidden'>ZALO <br /> NGAY</div>
              <div className='hidden max-md:block max-md:text-xs max-md:whitespace-nowrap'>ZALO NGAY</div>
            </div>
          </div>
        </Link>
        <div className='bg-[#DADADA]'>
          <div className='flex flex-row justify-between w-4/5 mx-auto py-20 max-md:py-10 max-md:mt-10 max-md:flex-col max-md:gap-20'>
            {footerItems.map(x => {
              return (
                <Link className='max-md:pb-5 max-md:border-b-[0.5px] max-md:border-kurashi-border-color' key={x.title} href='#'>
                  <div className='flex flex-row items-center gap-10 max-md:gap-8'>
                    <div className='size-8 flex items-center justify-center self-start'>
                      <Image className='max-md:hidden' src='/images/RightArrow.svg' width={20} height={20} alt='Kurashi JOURNAL' />
                      <Image className='max-md:block hidden' src='/images/RightArrow.svg' width={10} height={10} alt='Kurashi JOURNAL' />
                    </div>
                    <div className='flex flex-col gap-5 w-96'>
                      <div className='flex flex-row items-center gap-10'>
                        <div className='font-bold text-xl max-md:text-base'>{x.title}</div>
                      </div>
                      <div className='flex flex-row items-center gap-10'>
                        <div className=''>{x.content}</div>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
        <Footer t={t} />
        <div className='bg-[#24292e] pt-5 overflow-hidden'>
          <div className='text-secondary hover:cursor-default text-left w-4/5 mx-auto text-xs'>Copyright 2024 Kurashi Corporation. All rights reserved</div>
          <div className='w-4/5 mx-auto mt-10 translate-y-10 max-md:translate-y-3'><KurashiLogoSvg width='300' height='52' color='white' /></div>
        </div>
      </body>
    </html>
  )
}

export default RootLayout
