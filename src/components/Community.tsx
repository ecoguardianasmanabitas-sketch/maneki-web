'use client';

const TIERS = [
  {
    id: 'friend', name: 'Maneki Friend', price: 0, period: 'gratis',
    color: 'bg-matcha-500', popular: false,
    benefits: ['Newsletter semanal exclusiva', '10% descuento en cumpleaños', 'Acceso a eventos abiertos', 'Promociones anticipadas'],
    cta: 'Unirme Gratis',
  },
  {
    id: 'family', name: 'Maneki Family', price: 5, period: '/mes',
    color: 'bg-kin-500', popular: true,
    benefits: ['Todo lo de Friend', '15% descuento permanente', '1 bebida de cortesía por visita', 'Talleres mensuales de sushi', 'Reserva prioritaria'],
    cta: 'Hacerme Family',
  },
  {
    id: 'vip', name: 'Maneki VIP', price: 15, period: '/mes',
    color: 'bg-akairo-500', popular: false,
    benefits: ['Todo lo de Family', '20% descuento permanente', 'Cena privada trimestral con Chef Erick', 'Catas de sake exclusivas', 'Plato del mes gratis'],
    cta: 'Quiero ser VIP',
  },
];

export function Community() {
  const handleJoin = (tierId: string) => {
    const msg = encodeURIComponent(`¡Hola Maneki! \nQuiero unirme al Club Maneki nivel: ${tierId.toUpperCase()}\n¿Cómo puedo activar mi membresía?`);
    window.open(`https://wa.me/593990753037?text=${msg}`, '_blank');
  };

  return (
    <section id="comunidad" className="bg-gradient-to-b from-sumi-900 to-sumi-800 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <header className="mb-16 text-center">
          <p className="font-jp text-2xl text-kin-400">コミュニティ</p>
          <h2 className="mt-2 font-display text-4xl md:text-6xl">
            Únete a la <span className="text-akairo-500">Familia Maneki</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            Más que clientes, somos una comunidad. Elige tu nivel.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-3">
          {TIERS.map(tier => (
            <div
              key={tier.id}
              className={`relative rounded-2xl p-8 transition-all ${
                tier.popular ? 'bg-white text-sumi-900 shadow-2xl scale-105' : 'bg-white/5 backdrop-blur hover:bg-white/10'
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-kin-500 px-4 py-1 text-xs font-bold text-sumi-900">
                  ⭐ MÁS POPULAR
                </span>
              )}
              <div className={`mb-4 inline-block rounded-full ${tier.color} px-4 py-1 text-xs font-bold text-white`}>
                {tier.name}
              </div>
              <div className="mb-6">
                <span className="font-display text-5xl font-bold">${tier.price}</span>
                <span className={`text-sm ${tier.popular ? 'text-sumi-700' : 'text-white/60'}`}>{tier.period}</span>
              </div>
              <ul className="mb-8 space-y-3">
                {tier.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className={tier.popular ? 'text-matcha-500' : 'text-kin-400'}>✓</span>
                    <span className={tier.popular ? 'text-sumi-700' : 'text-white/80'}>{b}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handleJoin(tier.id)}
                className={`w-full rounded-full py-3 font-semibold transition ${
                  tier.popular ? 'bg-akairo-500 text-white hover:bg-akairo-700' : 'border-2 border-white/30 text-white hover:border-kin-400 hover:text-kin-400'
                }`}
              >
                {tier.cta} →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}