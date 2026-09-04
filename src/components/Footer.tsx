export function Footer() {
  return (
    <>
      <footer className="bg-sumi-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 md:grid-cols-4">
            <div>
              <p className="font-jp text-2xl text-kin-400">マネキ</p>
              <h3 className="mt-2 font-display text-xl">Maneki Sushi</h3>
              <p className="mt-2 text-sm text-white/60">El auténtico Japón en Loja</p>
              <div className="mt-4 flex gap-3">
                <a href="https://instagram.com/manekifusionfood" aria-label="Instagram" className="text-2xl hover:text-kin-400">📸</a>
                <a href="https://wa.me/593990753037" aria-label="WhatsApp" className="text-2xl hover:text-kin-400"></a>
              </div>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-kin-400">Explora</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#menu" className="hover:text-kin-400">Menú</a></li>
                <li><a href="#reservas" className="hover:text-kin-400">Reservas</a></li>
                <li><a href="#galeria" className="hover:text-kin-400">Galería</a></li>
                <li><a href="#comunidad" className="hover:text-kin-400">Comunidad</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-kin-400">Contacto</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li> Lourdes 1391, Loja</li>
                <li><a href="tel:+593990753037" className="hover:text-kin-400">📞 +593 99 075 3037</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-kin-400">Newsletter</h4>
              <p className="mb-3 text-sm text-white/70">Recibe promociones exclusivas</p>
              <form className="flex flex-col gap-2">
                <input type="email" placeholder="tu@email.com" className="rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/50 focus:border-kin-400 focus:outline-none" />
                <button className="rounded-lg bg-akairo-500 py-2 text-sm font-semibold hover:bg-akairo-700">Suscribirme</button>
              </form>
            </div>
          </div>
          <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/50">
            <p>© 2026 Maneki Sushi Fusion Food · Hecho con 🍱 y ❤️ en Loja, Ecuador</p>
          </div>
        </div>
      </footer>

      <a href="https://wa.me/593990753037?text=¡Hola%20Maneki!%20🍱" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-3xl text-white shadow-2xl transition hover:scale-110 hover:bg-green-600" aria-label="WhatsApp">
        💬
      </a>
    </>
  );
}