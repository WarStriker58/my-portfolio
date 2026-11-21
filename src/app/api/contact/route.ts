import { NextResponse } from 'next/server';

// Endpoint que recibe el formulario de contacto: POST /api/contact
export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validación básica en el servidor
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Todos los campos son obligatorios' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'El email no es válido' }, { status: 400 });
    }

    if (String(message).trim().length < 10) {
      return NextResponse.json(
        { error: 'El mensaje debe tener al menos 10 caracteres' },
        { status: 400 }
      );
    }

    // Aquí podrías enviar el correo con un servicio como Resend o Nodemailer.
    // Para el laboratorio, se registra en los logs (visibles en Vercel > Logs).
    console.log('Nuevo mensaje de contacto:', { name, email, subject, message });

    return NextResponse.json({ ok: true, message: 'Mensaje recibido' });
  } catch {
    return NextResponse.json({ error: 'Solicitud inválida' }, { status: 400 });
  }
}
