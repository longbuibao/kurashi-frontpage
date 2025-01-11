import { NextRequest, NextResponse } from 'next/server'
import acceptLanguage from 'accept-language'
import { fallbackLng, languages, cookieName } from '@/i18n/settings'

import { auth } from '@/auth'

acceptLanguage.languages(languages)

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|robots.txt|sitemap.xml).*)']
}

const protectedRoutes = /^\/(ja|vi|en)\/admin(?:\/[^/]+)?/

export async function middleware (req: NextRequest): Promise<NextResponse<unknown>> {
  if (protectedRoutes.test(req.nextUrl.pathname)) {
    const isLoggedIn = await auth()
    if (isLoggedIn !== null) {
      return NextResponse.next()
    }

    return NextResponse.redirect(new URL('/vi/login-superuser', req.url))
  }

  // let lng
  // if (req.cookies.has(cookieName)) {
  //   lng = acceptLanguage.get(req.cookies.get(cookieName)?.value)
  // }
  // if (lng === undefined || lng === null || lng === '') {
  //   lng = acceptLanguage.get(req.headers.get('Accept-Language'))
  // }
  // if (lng === undefined || lng === null || lng === '') {
  //   lng = fallbackLng
  // }
  const lng = fallbackLng
  if (
    !languages.some(loc => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !req.nextUrl.pathname.startsWith('/_next')
  ) {
    return NextResponse.redirect(new URL(`/${lng}${req.nextUrl.pathname}`, req.url))
  }

  const regBlog = new RegExp(`^/${lng}/blogs$`)
  if (regBlog.test(req.nextUrl.pathname) && (req.nextUrl.searchParams.get('blogPage') === null || req.nextUrl.searchParams.get('blogPage') === '')) {
    return NextResponse.redirect(new URL(`/${lng}/blogs?blogPage=0`, req.url))
  }

  const regCategory = new RegExp(`^/${lng}/products/category/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$`)
  if (regCategory.test(req.nextUrl.pathname) && (req.nextUrl.searchParams.get('productPage') === null || req.nextUrl.searchParams.get('productPage') === '')) {
    return NextResponse.redirect(new URL(`${req.nextUrl.pathname}?productPage=0`, req.url))
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
