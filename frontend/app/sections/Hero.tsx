'use client';

import { Github, Linkedin, Mail, Download } from 'lucide-react';
import Image from 'next/image';

// 📝 PERSONALIZA AQUÍ TU INFORMACIÓN PRINCIPAL
const heroData = {
  greeting: "I'm",
  name: 'Tu Nombre',
  title: 'Backend Developer & Full Stack',
  subtitle: 'Especializado en arquitecturas backend escalables, microservicios y APIs REST',
  stack: 'Laravel • Node.js • PostgreSQL • Docker • Clean Architecture',
  availability: 'Disponible para proyectos',
  // Agrega tu foto en /public/profile.jpg o usa una URL
  profileImage: '/profile.png', // Cambia esto por tu foto real
  social: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    email: 'your.email@example.com',
  },
  cv: '/cv.pdf',
};

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-zinc-950 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(255 255 255 / 0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid md:grid-cols-[1fr,1.2fr] gap-16 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8 text-center md:text-left order-2 md:order-1">
            {/* Main Title */}
            <div>
              <p className="text-zinc-500 text-base mb-3">{heroData.greeting}</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-3">
                {heroData.name}
              </h1>
              <h2 className="text-xl md:text-2xl font-medium text-zinc-400 mb-6">
                {heroData.title}
              </h2>
            </div>

            {/* Subtitle */}
            <p className="text-base text-zinc-400 leading-relaxed max-w-lg">
              {heroData.subtitle}
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-3 bg-yellow-500 hover:bg-yellow-400 text-zinc-950 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg"
              >
                Contact Me
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center md:justify-start pt-4">
              <a
                href={heroData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={22} />
              </a>
              <a
                href={heroData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
              <a
                href={`mailto:${heroData.social.email}`}
                className="text-zinc-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={22} />
              </a>
              <a
                href={heroData.cv}
                download
                className="text-zinc-400 hover:text-white transition-colors"
                aria-label="Descargar CV"
              >
                <Download size={22} />
              </a>
            </div>
          </div>

          {/* Right side - Profile Image */}
          <div className="relative flex justify-center md:justify-end order-1 md:order-2">
            <div className="relative w-full max-w-lg">
              {/* Image container - más grande y prominente */}
              <div className="relative aspect-square rounded-3xl overflow-hidden border border-zinc-800/50 bg-zinc-900 shadow-2xl">
                <Image
                  src={heroData.profileImage}
                  alt={heroData.name}
                  fill
                  className="object-cover"
                  priority
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent"></div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -z-10 top-8 -right-8 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="absolute -z-10 -bottom-8 -left-8 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
