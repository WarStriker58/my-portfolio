import { MetadataRoute } from 'next';
import { personalInfo } from '@/lib/data';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        // NUEVO: se permite explícitamente la página de contacto
        allow: ['/', '/about', '/projects', '/contact'],
        // /api/ ya bloquea el endpoint del formulario (/api/contact)
        disallow: ['/api/', '/admin/', '/_next/'],
      },
      {
        userAgent: 'Googlebot',
        allow: ['/', '/contact'],
        disallow: ['/api/', '/admin/'],
      },
    ],
    sitemap: `${personalInfo.siteUrl}/sitemap.xml`,
    // NUEVO: dominio principal del sitio
    host: personalInfo.siteUrl,
  };
}
