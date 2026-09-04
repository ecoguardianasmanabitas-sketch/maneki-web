'use client';
import { useState, useEffect } from 'react';

export function Reservas() {
  const [form, setForm] = useState({
    nombre: '', telefono: '', fecha: '', hora: '', personas: 2, ocasion: '', mensaje: '',
  });
  const [isToday, setIsToday] = useState('');

  useEffect(() => {
    const days = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
    setIsToday(days[new Date().getDay()]);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `🍱 *RESERVA MANEKI* 🍱

👤 Nombre: ${form.nombre}
📞 Teléfono: ${form.telefono}
📅 Fecha: ${form.fecha}
⏰ Hora: ${form.hora}
👥 Personas: ${form.personas}
🎉 Ocasión: ${form.ocasion || 'No especificada'}
💬 Mensaje: ${form.mensaje || '—'}

¡Esperamos verte pronto! 🙏`;

    window.open(`https://wa.me/593990753037?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const horarios = [
    { day: 'lunes', hours: '12:00 - 22:00' },
    { day: 'martes', hours: '12:00 - 22:00' },
    { day: 'miércoles', hours: '12:00 - 22:00' },
    { day: 'jueves', hours: '12:00 - 22:00' },
    { day: 'viernes', hours: '12:00 - 23:00' },
    { day: 'sábado', hours: '12:00 - 23:00' },
    { day: 'domingo', hours: '12:00 - 21:00' },
  ];

  return (
    <section id="reservas" className="bg-sumi-900 py-20 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <header className="mb-12 text-center">
          <p className="font-jp text-2xl text-kin-400">予約</p>
          <h2 className="mt-2 font-display text-4xl md:text-5xl">Reserva tu Mesa</h2>
          <p className="mt-4 text-white/70">Te confirmaremos por WhatsApp en minutos</p>
        </header>

        <div className="grid gap-10 md:grid-cols-2">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input required placeholder="Tu nombre" value={form.nombre} onChange={e => setForm({ ...form, nombre: e.target.value })} className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-white/50 focus:border-kin-400 focus:outline-none" />
            <input required type="tel" placeholder="Teléfono" value={form.telefono} onChange={e => setForm({ ...form, telefono: e.target.value })} className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-white/50 focus:border-kin-400 focus:outline-none" />
            <div className="grid grid-cols-2 gap-4">
              <input required type="date" value={form.fecha} onChange={e => setForm({ ...form, fecha: e.target.value })} className="rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white focus:border-kin-400 focus:outline-none" />
              <input required type="time" value={form.hora} onChange={e => setForm({ ...form, hora: e.target.value })} className="rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white focus:border-kin-400 focus:outline-none" />
            </div>
            <select value={form.personas} onChange={e => setForm({ ...form, personas: +e.target.value })} className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white focus:border-kin-400 focus:outline-none">
              {[1,2,3,4,5,6,7,8,9,10].map(n => (
                <option key={n} value={n} className="bg-sumi-900">{n} {n === 1 ? 'persona' : 'personas'}</option>
              ))}
            </select>
            <select value={form.ocasion} onChange={e => setForm({ ...form, ocasion: e.target.value })} className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white focus:border-kin-400 focus:outline-none">
              <option value="" className="bg-sumi-900">Ocasión (opcional)</option>
              <option value="Cumpleaños" className="bg-sumi-900"> Cumpleaños</option>
              <option value="Aniversario" className="bg-sumi-900">💍 Aniversario</option>
              <option value="Cena romántica" className="bg-sumi-900">❤️ Cena romántica</option>
              <option value="Negocios" className="bg-sumi-900">💼 Negocios</option>
            </select>
            <textarea placeholder="Mensaje o requerimientos especiales" rows={3} value={form.mensaje} onChange={e => setForm({ ...form, mensaje: e.target.value })} className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-white/50 focus:border-kin-400 focus:outline-none" />
            <button type="submit" className="w-full rounded-full bg-akairo-500 py-4 font-body font-semibold text-white transition hover:bg-akairo-700 hover:scale-[1.02]">
              Enviar Reserva por WhatsApp →
            </button>
          </form>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <h3 className="mb-6 font-display text-2xl text-kin-400">🕐 Horario de Atención</h3>
            <ul className="space-y-3">
              {horarios.map(h => (
                <li key={h.day} className={`flex justify-between border-b border-white/10 pb-2 ${h.day === isToday ? 'text-kin-400 font-bold' : 'text-white/80'}`}>
                  <span className="capitalize">{h.day} {h.day === isToday && '· HOY'}</span>
                  <span>{h.hours}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-lg bg-akairo-500/10 p-4 text-center">
              <p className="text-sm text-white/80">¿Horario especial?</p>
              <p className="font-semibold text-kin-400">📞 +593 99 075 3037</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}