import { NextRequest, NextResponse } from 'next/server'
import acceptLanguage from 'accept-language'
import { fallbackLng, languages, cookieName } from '@/i18n/settings'

acceptLanguage.languages(languages)

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)']
}

export function middleware (req: NextRequest): NextResponse<unknown> {
  let lng
  if (req.cookies.has(cookieName)) {
    lng = acceptLanguage.get(req.cookies.get(cookieName)?.value)
  }
  if (lng === undefined || lng === null || lng === '') {
    lng = acceptLanguage.get(req.headers.get('Accept-Language'))
  }
  if (lng === undefined || lng === null || lng === '') {
    lng = fallbackLng
  }

  if (
    !languages.some(loc => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !req.nextUrl.pathname.startsWith('/_next')
  ) {
    return NextResponse.redirect(new URL(`/${lng}${req.nextUrl.pathname}`, req.url))
  }

  if (req.headers.has('referer')) {
    const refererHeader = req.headers.get('referer')
    if (refererHeader !== null) {
      const refererUrl = new URL(refererHeader)
      const lngInReferer = languages.find((l) => refererUrl.pathname.startsWith(`/${l}`))
      const response = NextResponse.next()
      if (lngInReferer !== undefined) response.cookies.set(cookieName, lngInReferer)
      return response
    }
  }

  return NextResponse.next()
}
