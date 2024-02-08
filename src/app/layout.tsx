import './globals.css'

export const metadata = {
  title: 'Home'
}

const RootLayout = ({ children }: { children: React.ReactNode }): React.ReactElement => {
  return (
    <html lang='en'>
      <head><link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css' crossOrigin='anonymous' /></head>
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
