import {NextRequest, NextResponse} from 'next/server'

export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/docs/components/accordion', request.url))
}

export const config = {
  matcher: '/docs/components',
}
