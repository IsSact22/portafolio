import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Stack from './sections/Stack';
import Architecture from './sections/Architecture';
import Contact from './sections/Contact';

export default function Home() {
  return (
    <div className="bg-zinc-950">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Stack />
        <Architecture />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
