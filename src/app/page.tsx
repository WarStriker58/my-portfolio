import Image from 'next/image';
import Link from 'next/link';
import { projects, personalInfo } from '@/lib/data';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-grid">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="container relative mx-auto px-4 py-20 md:py-28 text-center">
          <div className="relative mx-auto mb-8 h-36 w-36">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-blue-400 to-blue-700 opacity-80 blur-sm" />
            <Image
              src={personalInfo.avatar}
              alt={personalInfo.name}
              fill
              className="relative rounded-full border-4 border-slate-950 object-cover"
              priority
              sizes="144px"
            />
          </div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-300">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            Disponible para prácticas pre-profesionales
          </p>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
            Hola, soy{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>
          <p className="mb-6 text-xl text-slate-300 md:text-2xl">
            {personalInfo.title}
          </p>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-400">
            {personalInfo.description}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/projects"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500"
            >
              Ver Proyectos
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:border-blue-500 hover:text-blue-400"
            >
              Contáctame
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container mx-auto px-4 py-20">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-400">
            Portafolio
          </p>
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Proyectos Destacados
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
