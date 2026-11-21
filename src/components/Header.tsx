import Link from 'next/link';
import { personalInfo } from '@/lib/data';

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/projects', label: 'Proyectos' },
  { href: '/about', label: 'Sobre Mí' },
  { href: '/contact', label: 'Contacto' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 font-bold text-white">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 text-sm shadow-lg shadow-blue-600/30">
              SS
            </span>
            <span className="hidden sm:inline text-lg">{personalInfo.name}</span>
          </Link>
          <ul className="flex gap-1 sm:gap-2 text-sm sm:text-base">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-md px-2 sm:px-3 py-2 text-slate-300 transition hover:bg-slate-800 hover:text-blue-400"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
