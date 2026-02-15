import { NextRequest, NextResponse } from 'next/server';

const VALID_EMAIL = 'diretoria@administradoramutual.com.br';
const VALID_PASSWORD = '1234567890';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      const response = NextResponse.json(
        { success: true, message: 'Autenticação realizada com sucesso.' },
        { status: 200 }
      );

      // Definir cookie de sessão (7 dias)
      response.cookies.set('s4_auth_token', 'authenticated_s4_session_2026', {
        httpOnly: true,
        secure: true,
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24 * 7, // 7 dias
      });

      return response;
    }

    return NextResponse.json(
      { success: false, message: 'E-mail ou senha inválidos.' },
      { status: 401 }
    );
  } catch {
    return NextResponse.json(
      { success: false, message: 'Erro ao processar a requisição.' },
      { status: 400 }
    );
  }
}
