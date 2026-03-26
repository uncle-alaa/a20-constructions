import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['fr', 'en', 'ar']
const defaultLocale = 'fr'

function getLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get('accept-language') || ''
  const preferred = acceptLanguage.split(',').map((l) => l.split(';')[0].trim().split('-')[0])
  for (const lang of preferred) {
    if (locales.includes(lang)) return lang
  }
  return defaultLocale
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|images|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}
