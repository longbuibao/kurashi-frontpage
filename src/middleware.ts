import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'

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

  return NextResponse.next()
}
