export function Location() {
  return (
    <section id="ubicacion" className="bg-tatami py-20">
      <div className="mx-auto max-w-7xl px-6">
        <header className="mb-12 text-center">
          <p className="font-jp text-2xl text-akairo-500">所在地</p>
          <h2 className="mt-2 font-display text-4xl text-sumi-900 md:text-5xl">Visítanos</h2>
        </header>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <iframe
              title="Ubicación Maneki Sushi Loja"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973!2d-79.2042!3d-3.9936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sLoja!5e0!3m2!1ses!2sec!4v1"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <h3 className="mb-4 font-display text-2xl text-sumi-900"> Cómo Llegar</h3>
              <p className="text-sumi-700">
                <strong>Dirección:</strong><br />
                Lourdes 1391-1513 (esquina Simón Bolívar)<br />
                Loja, Ecuador
              </p>
              <a href="https://maps.google.com/?q=Lourdes+1391+Loja+Ecuador" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block rounded-full bg-akairo-500 px-6 py-2 text-sm font-semibold text-white transition hover:bg-akairo-700">
                Abrir en Google Maps →
              </a>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <h3 className="mb-4 font-display text-2xl text-sumi-900">📞 Contacto</h3>
              <ul className="space-y-3 text-sumi-700">
                <li><a href="tel:+593990753037" className="hover:text-akairo-500">📱 +593 99 075 3037</a></li>
                <li><a href="https://instagram.com/manekifusionfood" target="_blank" rel="noopener noreferrer" className="hover:text-akairo-500">📸 @manekifusionfood</a></li>
                <li><a href="https://wa.me/593990753037" target="_blank" rel="noopener noreferrer" className="hover:text-akairo-500">💬 WhatsApp</a></li>
              </ul>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <h3 className="mb-4 font-display text-2xl text-sumi-900">✨ Servicios</h3>
              <div className="grid grid-cols-2 gap-3 text-sm text-sumi-700">
                <span>✓ Dine-in</span>
                <span>✓ Domicilio</span>
                <span>✓ Exterior</span>
                <span>✓ Pet-friendly </span>
                <span>✓ Accesible ♿</span>
                <span>✓ Reservaciones</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}