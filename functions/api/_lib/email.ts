interface EmailEnv {
  EMAIL_TENANT_ID: string;
  EMAIL_CLIENT_ID: string;
  EMAIL_CLIENT_SECRET: string;
  EMAIL_SENDER_ADDRESS: string;
}

interface EmailOptions {
  to: string[];
  subject: string;
  htmlBody: string;
  replyTo?: { address: string; name: string };
}

async function getGraphToken(env: EmailEnv): Promise<string | null> {
  try {
    const response = await fetch(
      `https://login.microsoftonline.com/${env.EMAIL_TENANT_ID}/oauth2/v2.0/token`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          client_id: env.EMAIL_CLIENT_ID,
          client_secret: env.EMAIL_CLIENT_SECRET,
          scope: 'https://graph.microsoft.com/.default',
          grant_type: 'client_credentials',
        }),
      }
    );
    if (!response.ok) {
      console.error('Graph token error:', await response.text());
      return null;
    }
    const data = await response.json() as { access_token: string };
    return data.access_token;
  } catch (err) {
    console.error('Graph token fetch failed:', err);
    return null;
  }
}

export async function sendEmail(env: EmailEnv, options: EmailOptions): Promise<boolean> {
  const token = await getGraphToken(env);
  if (!token) return false;

  try {
    const response = await fetch(
      `https://graph.microsoft.com/v1.0/users/${env.EMAIL_SENDER_ADDRESS}/sendMail`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: {
            subject: options.subject,
            body: { contentType: 'HTML', content: options.htmlBody },
            toRecipients: options.to.map((addr) => ({
              emailAddress: { address: addr },
            })),
            ...(options.replyTo
              ? { replyTo: [{ emailAddress: options.replyTo }] }
              : {}),
          },
        }),
      }
    );
    if (!response.ok) {
      console.error('Send email failed:', await response.text());
      return false;
    }
    return true;
  } catch (err) {
    console.error('Send email exception:', err);
    return false;
  }
}

export function enrollmentAdminEmailHtml(params: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  courseName: string;
  dates: string;
  location: string;
  dietary?: string;
  status: string;
}): string {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#0f172a;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0f172a;padding:32px 16px;">
    <tr><td align="center">
      <table width="520" cellpadding="0" cellspacing="0" style="max-width:520px;">
        <tr><td align="center" style="padding-bottom:24px;">
          <span style="color:#fff;font-size:18px;font-weight:bold;">Cloud Evolvers</span>
        </td></tr>
        <tr><td style="background:#fff;border-radius:16px;overflow:hidden;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr><td style="background:#10b981;padding:24px 32px;">
              <p style="margin:0 0 4px;color:rgba(255,255,255,0.8);font-size:13px;text-transform:uppercase;">New Enrollment</p>
              <h1 style="margin:0;color:#fff;font-size:22px;">${params.courseName}</h1>
            </td></tr>
          </table>
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr><td style="padding:24px 32px;">
              <p style="margin:0 0 16px;"><strong>${params.name}</strong> (${params.status})</p>
              <p style="margin:0 0 8px;color:#64748b;font-size:14px;">Email: <a href="mailto:${params.email}">${params.email}</a></p>
              ${params.phone ? `<p style="margin:0 0 8px;color:#64748b;font-size:14px;">Phone: ${params.phone}</p>` : ''}
              ${params.company ? `<p style="margin:0 0 8px;color:#64748b;font-size:14px;">Company: ${params.company}</p>` : ''}
              <hr style="border:none;border-top:1px solid #e2e8f0;margin:16px 0;">
              <p style="margin:0 0 8px;font-size:14px;">Dates: <strong>${params.dates}</strong></p>
              <p style="margin:0 0 8px;font-size:14px;">Location: <strong>${params.location}</strong></p>
              ${params.dietary ? `<p style="margin:0 0 8px;font-size:14px;">Dietary: ${params.dietary}</p>` : ''}
            </td></tr>
          </table>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export function enrollmentConfirmationEmailHtml(params: {
  firstName: string;
  courseName: string;
  dates: string;
  location: string;
  status: string;
}): string {
  const isWaitlisted = params.status === 'waitlisted';
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#0f172a;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0f172a;padding:32px 16px;">
    <tr><td align="center">
      <table width="520" cellpadding="0" cellspacing="0" style="max-width:520px;">
        <tr><td align="center" style="padding-bottom:24px;">
          <span style="color:#fff;font-size:18px;font-weight:bold;">Cloud Evolvers</span>
        </td></tr>
        <tr><td style="background:#fff;border-radius:16px;overflow:hidden;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr><td style="background:${isWaitlisted ? '#f59e0b' : '#10b981'};padding:24px 32px;">
              <h1 style="margin:0;color:#fff;font-size:22px;">
                ${isWaitlisted ? "You're on the Waitlist" : "You're Registered!"}
              </h1>
            </td></tr>
          </table>
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr><td style="padding:24px 32px;">
              <p style="margin:0 0 16px;font-size:16px;">Hi ${params.firstName},</p>
              <p style="margin:0 0 16px;font-size:14px;color:#334155;">
                ${isWaitlisted
                  ? `You've been added to the waitlist for <strong>${params.courseName}</strong>. We'll notify you as soon as a spot opens up.`
                  : `You're confirmed for <strong>${params.courseName}</strong>!`}
              </p>
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;border-radius:8px;margin:16px 0;">
                <tr><td style="padding:16px;">
                  <p style="margin:0 0 8px;font-size:14px;"><strong>Dates:</strong> ${params.dates}</p>
                  <p style="margin:0 0 8px;font-size:14px;"><strong>Location:</strong> ${params.location}</p>
                  <p style="margin:0;font-size:14px;"><strong>Lunch:</strong> Included</p>
                </td></tr>
              </table>
              ${!isWaitlisted ? `
              <p style="margin:16px 0 0;font-size:14px;color:#334155;">
                <strong>What to expect:</strong> Extensive hands-on labs with real-world scenarios, personal attention in a small group (max 15), and lunch is on us. Just bring your laptop and enthusiasm!
              </p>` : ''}
              <p style="margin:16px 0 0;font-size:13px;color:#94a3b8;">
                Questions? Reply to this email or contact us at yair@cloudevolvers.com
              </p>
            </td></tr>
          </table>
        </td></tr>
        <tr><td align="center" style="padding:16px 0 0;">
          <p style="margin:0;color:#64748b;font-size:12px;">cloudevolvers.com</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}
