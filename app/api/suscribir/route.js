import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const { email } = await request.json();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: 'Correo electrónico inválido' }, { status: 400 });
  }

  // Guardar en Resend Audience
  const audienceId = process.env.RESEND_AUDIENCE_ID;
  console.log('[suscribir] audienceId:', audienceId);

  if (audienceId) {
    const { data: contactData, error: contactError } = await resend.contacts.create({
      email,
      audienceId,
    });
    console.log('[suscribir] contacts.create data:', JSON.stringify(contactData));
    console.log('[suscribir] contacts.create error:', JSON.stringify(contactError));
  } else {
    console.log('[suscribir] RESEND_AUDIENCE_ID no definido, se omite guardar contacto');
  }

  // Enviar correo de confirmación
  const { error } = await resend.emails.send({
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
  });

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json({ ok: true }, { status: 200 });
}
