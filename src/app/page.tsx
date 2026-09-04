import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ChefErick } from '@/components/ChefErick';
import { ManekiNeko } from '@/components/ManekiNeko';
import { Menu } from '@/components/Menu';
import { Gallery } from '@/components/Gallery';
import { Reservas } from '@/components/Reservas';
import { Community } from '@/components/Community';
import { Location } from '@/components/Location';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ChefErick />
        <ManekiNeko />
        <Menu />
        <Gallery />
        <Reservas />
        <Community />
        <Location />
      </main>
      <Footer />
    </>
  );
}