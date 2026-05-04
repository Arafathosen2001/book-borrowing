import { NextResponse } from 'next/server'
import { auth } from './lib/auth'
import { headers } from 'next/headers'

export async function proxy(request) {

  const { pathname } = request.nextUrl;


  if (pathname.startsWith('/api/auth')) {
    return NextResponse.next();
  }


  if (pathname === '/login' || pathname === '/signup') {
    return NextResponse.next();
  }

  const session = await auth.api.getSession({
    headers: await headers()
  });

  if (session) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL('/login', request.url));
}

export const config = {
  matcher: ['/allbooks', '/allbooks/:slug'],
};