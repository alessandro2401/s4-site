import { NextRequest, NextResponse } from 'next/server';
const VALID_USERS = [
  { email: 'presidencia@administradoramutual.com.br', password: '1234567890' },
  { email: 'diretoria@administradoramutual.com.br', password: '1234567890' },
  { email: 'comercial@administradoramutual.com.br', password: '1234567890' },
  { email: 'sinistro@administradoramutual.com.br', password: '1234567890' },
  { email: 'adm@administradoramutual.com.br', password: '1234567890' },
  { email: 'alpha@administradoramutual.com.br', password: '1234567890' },
  { email: 'alessandro@pizzolatto.com.br', password: 'Mmb@2026br$' },
];
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;
    const found = VALID_USERS.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );
    if (found) {
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
