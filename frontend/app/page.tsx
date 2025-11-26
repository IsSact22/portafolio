import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { ProjectsGrid } from '../components/sections/ProjectsGrid';
import { SkillsSection } from '../components/sections/SkillsSection';
import { ExperienceTimeline } from '../components/sections/ExperienceTimeline';
import { ContactForm } from '../components/sections/ContactForm';
import { WhatsAppFloat } from '../components/ui/WhatsAppFloat';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <ProjectsGrid />
        <SkillsSection />
        <ExperienceTimeline />
        <ContactForm />
      </main>
      <Footer />
      
      {/* Botón flotante de WhatsApp */}
      <WhatsAppFloat />
    </div>
  );
}