'use client';
import { useState } from 'react';

export function ManekiNeko() {
  const [pawMoving, setPawMoving] = useState(false);

  return (
    <section className="relative overflow-hidden bg-sumi-900 py-24 text-white">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-5">
        <span className="font-jp text-[40rem] text-akairo-500">福</span>
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
        <div className="flex justify-center">
          <button
            onMouseEnter={() => setPawMoving(true)}
            onMouseLeave={() => setPawMoving(false)}
            onClick={() => setPawMoving(!pawMoving)}
            className="group relative cursor-pointer"
          >
            <div className="absolute inset-0 rounded-full bg-kin-500/20 blur-3xl" />
            <div className="relative flex h-80 w-80 items-center justify-center rounded-full bg-gradient-to-br from-kin-400 to-kin-600 shadow-2xl transition-transform group-hover:scale-105">
              <div className="text-9xl">🐱</div>
              <div
                className={`absolute top-12 right-12 text-6xl transition-transform ${
                  pawMoving ? 'animate-bounce' : ''
                }`}
              >
                👋
              </div>
            </div>
            {pawMoving && (
              <div className="absolute -bottom-12 left-1/2 w-max -translate-x-1/2 rounded-lg bg-white px-4 py-2 text-sm text-sumi-900 shadow-lg">
                🎋 Pata izquierda = atrae visitantes
                <br />
                🪙 Pata derecha = atrae fortuna
              </div>
            )}
          </button>
        </div>

        <div>
          <p className="font-jp text-3xl text-kin-400">招き猫</p>
          <h2 className="mt-2 font-display text-4xl md:text-5xl">
            La Leyenda del <span className="text-akairo-500">Gato que Llama</span>
          </h2>

          <div className="mt-6 space-y-4 text-lg text-white/80">
            <p>
              Cuenta la tradición japonesa que un gato, con su pata levantada,{' '}
              <strong className="text-kin-400">atrae la buena fortuna</strong> a
              quienes cruzan su puerta.
            </p>
            <p>
              En Maneki, no solo atraemos fortuna. Atraemos momentos inolvidables,
              sabores auténticos y la esencia misma de Japón.
            </p>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-akairo-500 bg-akairo-500/10">
              <span className="font-jp text-3xl text-akairo-500">福</span>
            </div>
            <div>
              <p className="font-jp text-xl text-kin-400">福</p>
              <p className="text-sm text-white/60">Fuku = Fortuna, bendición</p>
            </div>
          </div>

          <a
            href="#reservas"
            className="mt-8 inline-block rounded-full bg-akairo-500 px-8 py-3 font-semibold text-white transition hover:bg-akairo-700"
          >
            Deja que la fortuna te llame →
          </a>
        </div>
      </div>
    </section>
  );
}