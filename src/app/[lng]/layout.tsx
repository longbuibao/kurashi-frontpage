import './globals.css'
import './embla.css'

import { dir } from 'i18next'

import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { navItems } from '@/constants'
import { useTranslation } from '@/i18n'
import ProgressBarProviders from '@/components/progress-bar-provider'

export const metadata = {
  title: 'Kurashi Home'
}

interface RootProps { children: React.ReactNode, params: { lng: string } }

const RootLayout: React.FC<RootProps> = async ({ children, params }): Promise<React.ReactElement> => {
  const { t } = await useTranslation(params.lng)
  return (
    <html lang={params.lng} dir={dir(params.lng)}>
      <head>
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css' crossOrigin='anonymous' />
      </head>
      <body className='bg-kurashi-bg-main'>
        <div className='bg-secondary-opacity backdrop-blur-md sticky top-0 z-50'>
          <div className='pb-1 mx-auto z-10 w-4/5'>
            <Nav t={t} links={navItems.map(item => { return { label: t(item.label), url: item.url } })} />
          </div>
        </div>
        <ProgressBarProviders>{children}</ProgressBarProviders>
        <Footer t={t} />
        <div className='bg-[#000] pt-5 pb-10'>
          <div className='text-[#fff] hover:cursor-default text-left w-4/5 mx-auto text-xs'>Copyright 2024 Kurashi Corporation. All rights reserved</div>
        </div>
      </body>
    </html>
  )
}

export default RootLayout
