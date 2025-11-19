// proxy.ts (in root directory)
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Simple feature flag check
function isEnabled(flag: string): boolean {
  return process.env[flag] === 'true';
}

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check each route
  if (pathname.startsWith('/openai') && !isEnabled('NEXT_PUBLIC_ENABLE_OPENAI')) {
    return NextResponse.redirect(new URL('/?error=route_disabled', request.url));
  }
  
  if (pathname.startsWith('/gemini') && !isEnabled('NEXT_PUBLIC_ENABLE_GEMINI')) {
    return NextResponse.redirect(new URL('/?error=route_disabled', request.url));
  }
  
  if (pathname.startsWith('/aws') && !isEnabled('NEXT_PUBLIC_ENABLE_AWS')) {
    return NextResponse.redirect(new URL('/?error=route_disabled', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/openai/:path*', '/gemini/:path*', '/aws/:path*'],
};