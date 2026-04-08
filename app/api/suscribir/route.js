export async function POST(request) {
  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;

  if (!apiKey) {
    console.error('[suscribir] RESEND_API_KEY no definida');
    return Response.json({ error: 'Configuración incompleta' }, { status: 500 });
  }

  const { email } = await request.json();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: 'Correo electrónico inválido' }, { status: 400 });
  }

  // Guardar contacto en Resend Audience
  if (audienceId) {
    const contactRes = await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });
    const contactBody = await contactRes.json();
    console.log('[suscribir] contact status:', contactRes.status, JSON.stringify(contactBody));

    if (!contactRes.ok) {
      console.error('[suscribir] error guardando contacto:', JSON.stringify(contactBody));
    }
  } else {
    console.error('[suscribir] RESEND_AUDIENCE_ID no definida');
  }

  // Enviar correo de confirmación
  const emailRes = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Jose Julian Tellez Garcia <onboarding@resend.dev>',
      to: email,
      subject: '¡Gracias por suscribirte a Detrás del Vidrio!',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px;">
          <h1 style="font-size: 24px; margin-bottom: 16px;">¡Gracias por suscribirte!</h1>
          <p style="font-size: 16px; line-height: 1.6; color: #333;">
            Serás de los primeros en leer <strong>Detrás del Vidrio</strong> de Jose Julian Tellez Garcia.
          </p>
        </div>
      `,
    }),
  });
  const emailBody = await emailRes.json();
  console.log('[suscribir] email status:', emailRes.status, JSON.stringify(emailBody));

  if (!emailRes.ok) {
    return Response.json({ error: emailBody.message || 'Error enviando correo' }, { status: 500 });
  }

  return Response.json({ ok: true }, { status: 200 });
}
