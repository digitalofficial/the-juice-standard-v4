import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import MenuSection from '@/components/MenuSection';
import Stats from '@/components/Stats';
import Testimonial from '@/components/Testimonial';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <MenuSection />
      <Stats />
      <Testimonial />
      <ContactForm />
      <Footer />
    </main>
  );
}
