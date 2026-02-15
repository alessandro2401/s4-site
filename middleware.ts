import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Rotas públicas que NÃO exigem autenticação
const PUBLIC_PATHS = [
  '/estudo',
  '/login',
  '/api/auth/login',
  '/api/auth/logout',
];

// Arquivos estáticos e recursos que devem ser ignorados pelo middleware
const STATIC_EXTENSIONS = [
  '.ico', '.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp',
  '.css', '.js', '.woff', '.woff2', '.ttf', '.eot', '.map',
  '.json', '.xml', '.txt', '.pdf', '.xlsx',
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ignorar arquivos estáticos e _next
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/favicon') ||
    STATIC_EXTENSIONS.some(ext => pathname.endsWith(ext))
  ) {
    return NextResponse.next();
  }

  // Permitir acesso às rotas públicas
  if (PUBLIC_PATHS.some(path => pathname === path || pathname.startsWith(path + '/'))) {
    return NextResponse.next();
  }

  // Verificar cookie de autenticação
  const authCookie = request.cookies.get('s4_auth_token');

  if (!authCookie || authCookie.value !== 'authenticated_s4_session_2026') {
    // Redirecionar para login com URL de retorno
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('redirect', pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
