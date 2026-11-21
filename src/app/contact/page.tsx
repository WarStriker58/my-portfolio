import { Metadata } from 'next';
import { personalInfo } from '@/lib/data';
import ContactForm from '@/components/ContactForm';

// Meta tags específicos de la página de contacto (SEO)
export const metadata: Metadata = {
  title: 'Contacto',
  description: `Ponte en contacto con ${personalInfo.name}, ${personalInfo.title}. Disponible para proyectos freelance, colaboraciones y oportunidades laborales.`,
  keywords: ['contacto', 'contratar desarrollador', 'freelance', 'full stack', 'portafolio'],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: `Contacto - ${personalInfo.name}`,
    description: `¿Tienes un proyecto en mente? Escríbele a ${personalInfo.name}.`,
    url: '/contact',
    type: 'website',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Contacto - ${personalInfo.name}`,
    description: `¿Tienes un proyecto en mente? Escríbele a ${personalInfo.name}.`,
  },
};

export default function ContactPage() {
  // Datos estructurados (JSON-LD) para que Google entienda que es una página de contacto
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: `Contacto - ${personalInfo.name}`,
    url: `${personalInfo.siteUrl}/contact`,
    mainEntity: {
      '@type': 'Person',
      name: personalInfo.name,
      jobTitle: personalInfo.title,
      email: personalInfo.email,
      url: personalInfo.siteUrl,
      sameAs: [personalInfo.github, personalInfo.linkedin],
    },
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-5xl mx-auto">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-400">
          Hablemos
        </p>
        <h1 className="text-4xl font-bold text-white mb-4">Contacto</h1>
        <p className="text-lg text-slate-400 mb-12">
          ¿Tienes un proyecto en mente o quieres colaborar? Déjame un mensaje y
          te responderé lo antes posible.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Información de contacto */}
          <aside className="md:col-span-1 space-y-4">
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 transition hover:border-blue-500/50">
              <h2 className="text-sm font-semibold text-slate-400 uppercase mb-1">
                Email
              </h2>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-blue-400 hover:text-blue-300 hover:underline break-all"
              >
                {personalInfo.email}
              </a>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 transition hover:border-blue-500/50">
              <h2 className="text-sm font-semibold text-slate-400 uppercase mb-1">
                GitHub
              </h2>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 hover:underline break-all"
              >
                {personalInfo.github.replace(/^https:\/\/(www\.)?/, '')}
              </a>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 transition hover:border-blue-500/50">
              <h2 className="text-sm font-semibold text-slate-400 uppercase mb-1">
                LinkedIn
              </h2>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 hover:underline break-all"
              >
                {personalInfo.linkedin.replace(/^https:\/\/(www\.)?/, '').replace(/\/$/, '')}
              </a>
            </div>
          </aside>

          {/* Formulario (componente cliente) */}
          <section className="md:col-span-2 rounded-xl border border-slate-800 bg-slate-900/60 p-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              Envíame un mensaje
            </h2>
            <ContactForm />
          </section>
        </div>
      </div>
    </div>
  );
}
