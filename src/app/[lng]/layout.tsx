import './globals.css'
import { dir } from 'i18next'

export const metadata = {
  title: 'Home'
}

interface RootProps { children: React.ReactNode, params: { lng: string } }
const RootLayout: React.FC<RootProps> = ({ children, params }): React.ReactElement => {
  return (
    <html lang={params.lng} dir={dir(params.lng)}>
      <head>
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css' crossOrigin='anonymous' />
      </head>
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
