'use client';

import { useState, FormEvent } from 'react';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    setStatus('sending');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error ?? 'No se pudo enviar el mensaje');
      }

      setStatus('success');
      form.reset();
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Error inesperado');
    }
  }

  const inputClass =
    'w-full px-4 py-2.5 rounded-lg border border-slate-700 bg-slate-950 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent';

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">
            Nombre
          </label>
          <input id="name" name="name" type="text" required minLength={2} className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">
            Email
          </label>
          <input id="email" name="email" type="email" required className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-1">
          Asunto
        </label>
        <input id="subject" name="subject" type="text" required className={inputClass} />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          minLength={10}
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg shadow-blue-600/30 hover:bg-blue-500 transition disabled:opacity-60"
      >
        {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
      </button>

      {status === 'success' && (
        <p className="text-green-300 bg-green-500/10 border border-green-500/30 p-3 rounded-lg" role="status">
          ¡Gracias! Tu mensaje fue enviado correctamente.
        </p>
      )}
      {status === 'error' && (
        <p className="text-red-300 bg-red-500/10 border border-red-500/30 p-3 rounded-lg" role="alert">
          {errorMsg}
        </p>
      )}
    </form>
  );
}
