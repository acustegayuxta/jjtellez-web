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
      // TODO: cambiar a un remitente propio (hola@jjtellez.lat) cuando el dominio
      // este verificado en Resend. onboarding@resend.dev es la direccion de
      // pruebas COMPARTIDA de Resend: llega peor a bandeja de entrada.
      from: 'Jose Julian Tellez Garcia <onboarding@resend.dev>',
      to: email,
      subject: 'Gracias por apuntarte',
      // El libro todavia no tiene titulo: "Detras del Vidrio" se descarto. El
      // correo no nombra ninguno a proposito, para no tener que rectificar
      // despues delante de quien ya se apunto.
      html: `
        <div style="font-family: Georgia, 'Times New Roman', serif; max-width: 560px; margin: 0 auto; padding: 32px; color: #0E1A2B;">
          <p style="font-size: 17px; line-height: 1.7; margin: 0 0 20px;">
            Gracias por apuntarte.
          </p>
          <p style="font-size: 17px; line-height: 1.7; margin: 0 0 20px;">
            Estoy escribiendo un libro sobre Medell&iacute;n y la m&uacute;sica latina, visto desde
            adentro de los estudios de grabaci&oacute;n. Cuando tenga algo que valga la pena
            leer, te llega a este correo. No antes, y no otra cosa.
          </p>
          <p style="font-size: 17px; line-height: 1.7; margin: 0 0 28px;">
            Mientras tanto, si te interesa la ac&uacute;stica por el lado pr&aacute;ctico, escribo
            gu&iacute;as en <a href="https://jjtellez.lat/guias" style="color: #2E6BE6;">jjtellez.lat/guias</a>.
          </p>
          <p style="font-size: 15px; line-height: 1.6; margin: 0; color: #5A6673;">
            Jos&eacute; Juli&aacute;n T&eacute;llez Garc&iacute;a
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
