'use client';
import { useState } from 'react';

type Image = {
  src: string;
  alt: string;
  category: 'ambiente' | 'platos' | 'detalles' | 'cultura';
  height: 'tall' | 'normal' | 'short';
};

const IMAGES: Image[] = [
  { src: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800', alt: 'Interior del izakaya', category: 'ambiente', height: 'tall' },
  { src: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800', alt: 'Acevichado Roll', category: 'platos', height: 'normal' },
  { src: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=800', alt: 'Linternas chochin', category: 'detalles', height: 'short' },
  { src: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800', alt: 'Ramen tonkotsu', category: 'platos', height: 'tall' },
  { src: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800', alt: 'Portal torii', category: 'cultura', height: 'normal' },
  { src: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=800', alt: 'Maneki-neko', category: 'cultura', height: 'short' },
  { src: 'https://images.unsplash.com/photo-1625938145312-c173e39dbcbf?w=800', alt: 'Ceviche Nikkei', category: 'platos', height: 'normal' },
  { src: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=800', alt: 'Copa de sake', category: 'platos', height: 'tall' },
  { src: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=800', alt: 'Gyoza dorado', category: 'platos', height: 'short' },
  { src: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=800', alt: 'Jardín zen', category: 'ambiente', height: 'normal' },
  { src: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=800', alt: 'Matcha latte', category: 'platos', height: 'short' },
  { src: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800', alt: 'Chef en acción', category: 'ambiente', height: 'tall' },
];

const HEIGHTS = { tall: 'row-span-2', normal: 'row-span-1', short: 'row-span-1' };

export function Gallery() {
  const [filter, setFilter] = useState<string>('todos');
  const [lightbox, setLightbox] = useState<Image | null>(null);

  const filtered = filter === 'todos' ? IMAGES : IMAGES.filter(img => img.category === filter);

  const categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'ambiente', label: 'Ambiente' },
    { id: 'platos', label: 'Platos' },
    { id: 'detalles', label: 'Detalles' },
    { id: 'cultura', label: 'Cultura' },
  ];

  return (
    <section id="galeria" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <header className="mb-10 text-center">
          <p className="font-jp text-2xl text-akairo-500">写真</p>
          <h2 className="mt-2 font-display text-4xl text-sumi-900 md:text-5xl">
            Galería Maneki
          </h2>
        </header>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                filter === cat.id
                  ? 'bg-sumi-900 text-white'
                  : 'bg-tatami/50 text-sumi-700 hover:bg-tatami'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px]">
          {filtered.map(img => (
            <button
              key={img.src + img.alt}
              onClick={() => setLightbox(img)}
              className={`group relative overflow-hidden rounded-xl bg-tatami ${HEIGHTS[img.height]}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sumi-900/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <p className="absolute bottom-3 left-3 right-3 text-left text-sm font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100">
                {img.alt}
              </p>
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-sumi-900/95 p-6 backdrop-blur"
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-4xl text-white hover:text-kin-400"
          >
            ×
          </button>
          <img src={lightbox.src} alt={lightbox.alt} className="max-h-[85vh] max-w-full rounded-lg object-contain" />
          <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-lg text-white">
            {lightbox.alt}
          </p>
        </div>
      )}
    </section>
  );
}