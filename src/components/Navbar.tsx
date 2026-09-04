'use client';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#menu', label: 'Menú' },
    { href: '#galeria', label: 'Galería' },
    { href: '#reservas', label: 'Reservas' },
    { href: '#comunidad', label: 'Comunidad' },
    { href: '#ubicacion', label: 'Ubicación' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-sumi-900/95 backdrop-blur shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <span className="font-jp text-2xl text-kin-400">マネキ</span>
          <span className="font-display text-xl text-white">Maneki</span>
        </a>

        <div className="hidden gap-8 md:flex">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 transition hover:text-kin-400"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#reservas"
          className="hidden rounded-full bg-akairo-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-akairo-700 md:block"
        >
          Reservar
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
          aria-label="Menú"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-sumi-900 md:hidden">
          <div className="flex flex-col gap-4 px-6 py-6">
            {links.map(link => (
              <a
                key={link.href}
                onClick={() => setOpen(false)}
                href={link.href}
                className="text-white/80 hover:text-kin-400"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#reservas"
              onClick={() => setOpen(false)}
              className="rounded-full bg-akairo-500 px-5 py-2 text-center font-semibold text-white"
            >
              Reservar
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}