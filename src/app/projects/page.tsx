import { Metadata } from 'next';
import { projects } from '@/lib/data';
import ProjectCard from '@/components/ProjectCard';

export const metadata: Metadata = {
  title: 'Proyectos',
  description: 'Explora los proyectos de desarrollo web y software de Sebastián Salas',
  openGraph: {
    title: 'Proyectos - Portafolio',
    description: 'Explora mi colección de proyectos de desarrollo web',
    images: ['/og-projects.jpg'],
  },
};

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-400">
        Portafolio
      </p>
      <h1 className="mb-4 text-4xl font-bold text-white">Mis Proyectos</h1>
      <p className="mb-12 text-lg text-slate-400">
        Una colección de proyectos en los que he trabajado
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
