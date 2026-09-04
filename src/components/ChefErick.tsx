'use client';
import { useEffect, useRef, useState } from 'react';

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}

export function ChefErick() {
  const s1 = useScrollReveal();
  const s2 = useScrollReveal();
  const s3 = useScrollReveal();

  return (
    <section className="bg-tatami py-24">
      <div className="mx-auto max-w-7xl px-6">
        <header className="mb-16 text-center">
          <p className="font-jp text-2xl text-akairo-500">師範 · Sensei</p>
          <h2 className="mt-2 font-display text-4xl text-sumi-900 md:text-6xl">
            El Chef que es <span className="text-akairo-500">Sensei</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sumi-700">
            Erick no solo cocina. Disciplina, respeto y tradición japonesa en cada
            corte, cada plato, cada enseñanza.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-3">
          <div
            ref={s1.ref}
            className={`rounded-2xl bg-white p-8 shadow-lg transition-all duration-700 ${
              s1.visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="mb-4 text-5xl">🍣</div>
            <h3 className="mb-3 font-display text-2xl text-sumi-900">
              El Arte de la Cocina
            </h3>
            <p className="text-sumi-700">
              Más de una década perfeccionando técnicas ancestrales japonesas.
              Cada plato es una meditación: precisión, frescura, respeto al
              ingrediente.
            </p>
            <div className="mt-6 border-t border-tatami pt-4">
              <p className="font-jp text-sm text-akairo-500">料理の道</p>
              <p className="text-xs text-sumi-700">"El camino de la cocina"</p>
            </div>
          </div>

          <div
            ref={s2.ref}
            className={`rounded-2xl bg-sumi-900 p-8 text-white shadow-lg transition-all duration-700 delay-150 ${
              s2.visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="mb-4 text-5xl">🥋</div>
            <h3 className="mb-3 font-display text-2xl text-kin-400">
              Sensei de Jokido
            </h3>
            <p className="text-white/80">
              Practicante y maestro del arte marcial japonés. Forma jóvenes de
              Loja y Ecuador en valores de disciplina, respeto y armonía.
            </p>
            <div className="mt-6 border-t border-white/20 pt-4">
              <p className="font-jp text-sm text-kin-400">武道 · 心</p>
              <p className="text-xs text-white/70">"El camino marcial del corazón"</p>
            </div>
          </div>

          <div
            ref={s3.ref}
            className={`rounded-2xl bg-white p-8 shadow-lg transition-all duration-700 delay-300 ${
              s3.visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="mb-4 text-5xl">🎓</div>
            <h3 className="mb-3 font-display text-2xl text-sumi-900">
              Mentor de Jóvenes
            </h3>
            <p className="text-sumi-700">
              Capacita a jóvenes de Loja y Ecuador en un espacio tradicional
              japonés. Forma personas, no solo cocineros.
            </p>
            <div className="mt-6 border-t border-tatami pt-4">
              <p className="font-jp text-sm text-akairo-500">教育</p>
              <p className="text-xs text-sumi-700">"Educación del ser"</p>
            </div>
          </div>
        </div>

        <blockquote className="mx-auto mt-16 max-w-3xl text-center">
          <p className="font-display text-2xl italic text-sumi-900 md:text-3xl">
            "Cocinar es como el Jokido: requiere{' '}
            <span className="text-akairo-500">disciplina</span>,{' '}
            <span className="text-kin-500">paciencia</span> y{' '}
            <span className="text-matcha-500">respeto</span> por cada detalle."
          </p>
          <footer className="mt-6 font-jp text-lg text-sumi-700">
            — Chef Erick, 店主
          </footer>
        </blockquote>
      </div>
    </section>
  );
}