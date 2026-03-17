interface AuthEnv {
  FORM_API_KEY: string;
  ADMIN_PASSWORD: string;
}

export function authenticateAdmin(request: Request, env: AuthEnv): { ok: boolean; error?: string } {
  const apiKey = request.headers.get('x-api-key');
  const adminPassword = request.headers.get('x-admin-password');

  if (!apiKey || apiKey !== env.FORM_API_KEY) {
    return { ok: false, error: 'Invalid API key' };
  }
  if (!adminPassword || adminPassword !== env.ADMIN_PASSWORD) {
    return { ok: false, error: 'Invalid admin password' };
  }
  return { ok: true };
}
