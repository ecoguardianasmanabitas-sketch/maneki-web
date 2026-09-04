import type { Metadata } from 'next';
import './globals.css';  // ← ESTO ES CRUCIAL

export const metadata: Metadata = {
  title: 'Maneki Sushi Fusion Food | Auténtica Cocina Nikkei en Loja',
  description: 'Restaurante japonés en Loja, Ecuador. Sushi, ramen, poke bowls y fusión Nikkei auténtica. Certificados por comensales japoneses. 4.4★ en Google.',
  keywords: ['restaurante japonés Loja', 'sushi Loja', 'comida nikkei Loja', 'ramen Loja'],
  openGraph: {
    title: 'Maneki Sushi Fusion Food',
    description: 'El auténtico Japón en Loja, Ecuador',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-EC">
      <body>{children}</body>
    </html>
  );
}