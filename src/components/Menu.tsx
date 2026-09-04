'use client';
import { useState } from 'react';
import menuData from '../data/menu.json';

const TAG_STYLES: Record<string, { label: string; className: string }> = {
  vegano: { label: '🌱 Vegano', className: 'bg-matcha-500/20 text-matcha-600' },
  picante: { label: '🌶️ Picante', className: 'bg-akairo-500/20 text-akairo-500' },
  top: { label: '⭐ Top', className: 'bg-kin-500/20 text-kin-600' },
  chef: { label: '👨‍🍳 Chef', className: 'bg-sumi-700 text-white' },
  fusion: { label: '🇯🇵 Fusión', className: 'bg-sakura-400/30 text-akairo-700' },
  local: { label: '️ Local', className: 'bg-tatami text-sumi-800' },
  exclusivo: { label: '💎 Exclusivo', className: 'bg-kin-500/20 text-kin-600' },
};

export function Menu() {
  const [activeTab, setActiveTab] = useState(menuData.categories[0].id);
  const activeCategory = menuData.categories.find(c => c.id === activeTab)!;

  const handleOrder = (itemName: string) => {
    const msg = encodeURIComponent(
      `¡Hola Maneki! \nQuiero ordenar: ${itemName}\n¿Está disponible?`
    );
    window.open(`https://wa.me/593990753037?text=${msg}`, '_blank');
  };

  return (
    <section id="menu" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <header className="mb-12 text-center">
          <p className="font-jp text-2xl text-akairo-500">お品書き</p>
          <h2 className="mt-2 font-display text-4xl text-sumi-900 md:text-5xl">
            Nuestro Menú
          </h2>
          <p className="mt-4 text-sumi-700">
            Fusión Nikkei auténtica. Cada plato, una historia.
          </p>
        </header>

        <div className="mb-10 flex gap-2 overflow-x-auto pb-2">
          {menuData.categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`whitespace-nowrap rounded-full px-6 py-3 font-body text-sm font-semibold transition ${
                activeTab === cat.id
                  ? 'bg-akairo-500 text-white shadow-lg'
                  : 'bg-tatami/30 text-sumi-700 hover:bg-tatami/50'
              }`}
            >
              <span className="font-jp mr-2">{cat.kanji}</span>
              {cat.name}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {activeCategory.items.map(item => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden bg-tatami">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition group-hover:scale-110"
                />
                {'featured' in item && item.featured && (
                  <span className="absolute top-3 right-3 rounded-full bg-kin-500 px-3 py-1 text-xs font-bold text-sumi-900">
                    ★ DESTACADO
                  </span>
                )}
              </div>

              <div className="p-6">
                <div className="mb-2 flex items-start justify-between gap-2">
                  <h3 className="font-display text-xl text-sumi-900">
                    {item.name}
                  </h3>
                  <span className="font-body text-lg font-bold text-akairo-500">
                    ${item.price.toFixed(2)}
                  </span>
                </div>

                <p className="mb-4 text-sm text-sumi-700">{item.description}</p>

                <div className="mb-4 flex flex-wrap gap-1">
                  {item.tags.map(tag => {
                    const style = TAG_STYLES[tag];
                    if (!style) return null;
                    return (
                      <span
                        key={tag}
                        className={`rounded-full px-2 py-0.5 text-xs font-medium ${style.className}`}
                      >
                        {style.label}
                      </span>
                    );
                  })}
                </div>

                <button
                  onClick={() => handleOrder(item.name)}
                  className="w-full rounded-full bg-sumi-900 py-2 font-body text-sm font-semibold text-white transition hover:bg-akairo-500"
                >
                  Lo quiero →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}