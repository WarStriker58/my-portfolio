import { Metadata } from 'next';
import Image from 'next/image';
import { personalInfo } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Sobre Mí',
  description: `Conoce más sobre ${personalInfo.name}, ${personalInfo.title} en TECSUP`,
};

const skillGroups = [
  { title: 'Lenguajes', items: ['C#', 'Java', 'PHP', 'Python', 'JavaScript', 'TypeScript'] },
  { title: 'Frameworks', items: ['Laravel', 'React', 'Next.js', 'Tailwind CSS'] },
  { title: 'Bases de datos', items: ['MySQL', 'MongoDB'] },
  { title: 'Herramientas', items: ['Git & GitHub', 'VS Code', 'IntelliJ IDEA', 'Vercel'] },
];

const softSkills = ['Trabajo en equipo', 'Adaptabilidad', 'Comunicación efectiva'];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-5xl">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-400">
          Conóceme
        </p>
        <h1 className="mb-10 text-4xl font-bold text-white">Sobre Mí</h1>

        <div className="mb-16 grid gap-10 md:grid-cols-3">
          <div className="md:col-span-1">
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-slate-800">
              <Image
                src={personalInfo.avatar}
                alt={personalInfo.name}
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>

          <div className="md:col-span-2">
            <h2 className="mb-4 text-2xl font-bold text-white">
              ¡Hola! Soy {personalInfo.name}
            </h2>
            <div className="space-y-4 leading-relaxed text-slate-300">
              <p>
                Soy estudiante de 5.º ciclo de Diseño y Desarrollo de Software en
                TECSUP. Tengo conocimientos en C#, Java, PHP y Python, y experiencia
                en desarrollo backend con Laravel y bases de datos como MySQL y
                MongoDB.
              </p>
              <p>
                Actualmente estoy aprendiendo a construir aplicaciones web modernas
                con React, Next.js y TypeScript, aplicando buenas prácticas de
                rendimiento y posicionamiento SEO.
              </p>
              <p>
                Me caracterizo por mi capacidad para trabajar en equipo, adaptarme a
                nuevos entornos y desafíos, y comunicarme de manera efectiva. Me
                interesa seguir creciendo en el desarrollo de software y soluciones
                tecnológicas.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Formación */}
        <section className="mb-16">
          <h2 className="mb-6 text-3xl font-bold text-white">Formación</h2>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 border-l-4 border-l-blue-500">
            <p className="text-sm text-blue-400">En curso · 5.º ciclo</p>
            <h3 className="mt-1 text-xl font-semibold text-white">
              Diseño y Desarrollo de Software
            </h3>
            <p className="text-slate-400">TECSUP</p>
          </div>
        </section>

        {/* Habilidades técnicas */}
        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-white">
            Habilidades Técnicas
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 transition hover:border-blue-500/50"
              >
                <h3 className="mb-4 font-semibold text-blue-400">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md bg-slate-800 px-3 py-1.5 text-sm text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
