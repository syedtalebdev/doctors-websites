import Hero from '@/components/Hero';
import Qualifications from '@/components/Qualifications';
import Specialties from '@/components/Specialties';
import Experience from '@/components/Experience';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Qualifications />
      <Specialties />
      <Experience />
      <Services />
      <Testimonials />
      <Contact />
    </>
  );
}
