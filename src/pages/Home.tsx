import About from '../sessions/About';
import Contact from '../sessions/Contact';
import Footer from '../sessions/Footer';
import Header from '../sessions/Header';
import Hero from '../sessions/Hero';
import Projects from '../sessions/Projects';
import Services from '../sessions/Services';

export default function Home() {
  return (
    <>
      <div className='mx-auto'>
        <Header />
        <Hero />
        <Services />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
