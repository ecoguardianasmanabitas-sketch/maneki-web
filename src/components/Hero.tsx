'use client';
import { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

function SakuraCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const petals = Array.from({ length: 35 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: 8 + Math.random() * 8,
      speedY: 0.5 + Math.random() * 1,
      speedX: -0.5 + Math.random() * 1,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.02,
      opacity: 0.4 + Math.random() * 0.5,
    }));

    const drawPetal = (p: typeof petals[0]) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.globalAlpha = p.opacity;
      ctx.fillStyle = '#FFB7C5';
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(p.size / 2, -p.size / 2, p.size, 0, 0, p.size / 2);
      ctx.bezierCurveTo(-p.size, 0, -p.size / 2, -p.size / 2, 0, 0);
      ctx.fill();
      ctx.restore();
    };

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      petals.forEach(p => {
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(p.y * 0.01) * 0.3;
        p.rotation += p.rotationSpeed;
        if (p.y > canvas.height) {
          p.y = -20;
          p.x = Math.random() * canvas.width;
        }
        if (p.x > canvas.width) p.x = 0;
        if (p.x < 0) p.x = canvas.width;
        drawPetal(p);
      });
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-10"
      aria-hidden="true"
    />
  );
}

export function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-sumi-900">
      <div
        className="absolute inset-0 animate-ken-burns bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=1920)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-sumi-900/40 via-sumi-900/70 to-sumi-900" />

      <SakuraCanvas />

      <div className="absolute top-24 left-10 animate-lantern-float">
        <div className="h-16 w-10 rounded-full bg-akairo-500 shadow-[0_0_30px_rgba(188,0,45,0.6)]" />
      </div>
      <div
        className="absolute top-40 right-20 animate-lantern-float"
        style={{ animationDelay: '2s' }}
      >
        <div className="h-12 w-8 rounded-full bg-akairo-500 shadow-[0_0_25px_rgba(188,0,45,0.5)]" />
      </div>

      <div className="relative z-20 flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 font-jp text-2xl text-kin-400 writing-mode-vertical">
          マネキ寿司
        </p>

        <h1 className="font-display text-5xl text-white md:text-7xl lg:text-8xl">
          El Sabor de <span className="text-akairo-500">Japón</span>
          <br />
          te Espera en Loja
        </h1>

        <p className="mt-6 max-w-2xl font-body text-lg text-white/80 md:text-xl">
          Auténtica cocina Nikkei certificada por comensales japoneses.
          <br />
          Donde cada plato cuenta una historia milenaria.
        </p>

        <div className="mt-6 flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
          <Star className="h-4 w-4 fill-kin-400 text-kin-400" />
          <span className="text-sm text-white">4.4 · 165+ reseñas en Google</span>
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#reservas"
            className="rounded-full bg-akairo-500 px-8 py-4 font-body font-semibold text-white transition hover:scale-105 hover:bg-akairo-700"
          >
            Reservar Mesa →
          </a>
          <a
            href="#menu"
            className="rounded-full border-2 border-white/30 px-8 py-4 font-body font-semibold text-white backdrop-blur transition hover:border-kin-400 hover:text-kin-400"
          >
            Ver Menú
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-12 w-6 rounded-full border-2 border-white/50">
          <div className="mx-auto mt-2 h-2 w-1 rounded-full bg-white/70" />
        </div>
      </div>
    </section>
  );
}