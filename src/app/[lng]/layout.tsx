import './globals.css'
import { dir } from 'i18next'

import { Nav } from '@/components/nav'
import { navItems } from '@/constants'
import { useTranslation } from '@/i18n'

export const metadata = {
  title: 'Home'
}

interface RootProps { children: React.ReactNode, params: { lng: string } }
const RootLayout: React.FC<RootProps> = async ({ children, params }): Promise<React.ReactElement> => {
  const { t } = await useTranslation(params.lng)
  return (
    <html lang={params.lng} dir={dir(params.lng)}>
      <head>
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css' crossOrigin='anonymous' />
      </head>
      <body>
        <div className='pb-1 mx-auto z-10 w-3/4'>
          <Nav t={t} links={navItems.map(item => { return { label: t(item.label), url: item.url } })} />
        </div>
        {children}
        <div />
      </body>
    </html>
  )
}

export default RootLayout
