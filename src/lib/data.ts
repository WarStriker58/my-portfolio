import { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'portafolio-personal',
    title: 'Portafolio Personal',
    description:
      'Portafolio web optimizado para SEO con meta tags dinámicos, sitemap, robots.txt y optimización de imágenes, desplegado en Vercel.',
    image: '/projects/portafolio.jpg',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    githubUrl: 'https://github.com/WarStriker58',
    featured: true,
  },
  {
    slug: 'sistema-inventario-laravel',
    title: 'Sistema de Inventario',
    description:
      'Aplicación web para gestionar productos, categorías y movimientos de stock, con autenticación de usuarios y reportes.',
    image: '/projects/inventario.jpg',
    technologies: ['Laravel', 'PHP', 'MySQL', 'Blade'],
    githubUrl: 'https://github.com/WarStriker58',
    featured: true,
  },
  {
    slug: 'api-gestion-tareas',
    title: 'API de Gestión de Tareas',
    description:
      'API REST para crear, organizar y dar seguimiento a tareas, con almacenamiento en MongoDB y documentación de endpoints.',
    image: '/projects/api-tareas.jpg',
    technologies: ['Python', 'MongoDB', 'REST API', 'Postman'],
    githubUrl: 'https://github.com/WarStriker58',
    featured: true,
  },
];

export const personalInfo = {
  name: 'Sebastián Salas',
  title: 'Estudiante de Diseño y Desarrollo de Software',
  description:
    'Estudiante de 5.º ciclo en TECSUP. Desarrollo aplicaciones web con Laravel y Next.js, y trabajo con bases de datos MySQL y MongoDB.',
  email: 'sebastiansalas010@gmail.com',
  github: 'https://github.com/WarStriker58',
  linkedin: 'https://www.linkedin.com/in/sebastian-andre-salas-cordova/',
  siteUrl: 'https://sebastiansalas.is-a.dev',
  avatar: '/avatar.png',
};
