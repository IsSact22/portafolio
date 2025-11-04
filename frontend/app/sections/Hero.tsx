'use client';

import { Github, Linkedin, Mail, Download } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

// 📝 INTERFACES Y TIPOS
interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
}

interface HeroData {
  greeting: string;
  name: string;
  title: string;
  subtitle: string;
  stack: string;
  availability: string;
  profileImage: string;
  social: SocialLinks;
  cv: string;
}

// 📝 CONFIGURACIÓN PRINCIPAL - PERSONALIZA AQUÍ
const heroData: HeroData = {
  greeting: "Hola, soy",
  name: 'Isaac Hung',
  title: 'Backend Developer',
  subtitle: 'Especializado en arquitecturas backend escalables, microservicios y APIs REST con más de 8 años de experiencia desarrollando soluciones robustas y eficientes.',
  stack: 'Laravel • Node.js • PostgreSQL • Docker • Clean Architecture',
  availability: 'Disponible para proyectos',
  profileImage: '/profile.png',
  social: {
    github: 'https://github.com/IsSact22',
    linkedin: 'www.linkedin.com/in/isaachung-dev',
    email: 'aisaachung@gmail.com',
  },
  cv: '/pdf/Curriculum-isaachung.pdf',
};

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-20 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 relative overflow-hidden"
    >
      {/* Patrón de fondo mejorado */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, #ffffff 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Elementos decorativos de fondo */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Contenido de texto - MEJORADO EL ESPACIADO */}
          <div className="space-y-10 text-center lg:text-left order-2 lg:order-1">
            {/* Encabezado principal - MÁS ESPACIADO */}
            <div className="space-y-6">
              <p className="text-zinc-400 text-lg font-medium tracking-wide mb-2">
                {heroData.greeting}
              </p>
              
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
                  {heroData.name}
                </h1>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-yellow-500 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent leading-relaxed">
                  {heroData.title}
                </h2>
              </div>
            </div>

            {/* Subtítulo y descripción - MÁS MARGENES */}
            <div className="pt-4">
              <p className="text-xl text-zinc-300 leading-relaxed max-w-2xl font-light tracking-wide">
                {heroData.subtitle}
              </p>
            </div>

            {/* Stack tecnológico - MEJOR ESPACIADO */}
            <div className="pt-6">
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {heroData.stack.split('•').map((tech, index) => (
                  <span
                    key={index}
                    className="px-5 py-3 bg-zinc-800/50 border border-zinc-700/50 rounded-xl text-zinc-300 text-base font-medium backdrop-blur-sm hover:bg-zinc-700/50 transition-all duration-300 hover:scale-105"
                  >
                    {tech.trim()}
                  </span>
                ))}
              </div>
            </div>

            {/* Disponibilidad - MÁS SEPARACIÓN */}
            <div className="flex items-center justify-center lg:justify-start gap-3 text-zinc-400 pt-4">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-base font-medium">{heroData.availability}</span>
            </div>

            {/* Botones de acción - MÁS ESPACIADO */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-8">
              <button
                onClick={handleContactClick}
                className="group relative inline-flex items-center justify-center px-10 py-5 bg-yellow-500 hover:bg-yellow-400 text-zinc-950 font-bold text-lg rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-yellow-500/25 active:scale-95 min-w-[180px]"
              >
                <span className="relative z-10 tracking-wide">Contactar Ahora</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              
              <a
                href={heroData.cv}
                download
                className="inline-flex items-center justify-center gap-3 px-10 py-5 border-2 border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-semibold text-lg rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95 group min-w-[180px]"
              >
                <Download size={22} className="group-hover:animate-bounce transition-transform" />
                <span className="tracking-wide">Descargar CV</span>
              </a>
            </div>

            {/* Enlaces sociales - MÁS SEPARACIÓN */}
            <div className="flex gap-5 justify-center lg:justify-start pt-10">
              {[
                { icon: Github, href: heroData.social.github, label: 'GitHub' },
                { icon: Linkedin, href: heroData.social.linkedin, label: 'LinkedIn' },
                { icon: Mail, href: `mailto:${heroData.social.email}`, label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 bg-zinc-800/50 border border-zinc-700/50 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-700/50 hover:border-zinc-500 backdrop-blur-sm transition-all duration-300 hover:scale-110"
                  aria-label={label}
                >
                  <Icon size={26} className="group-hover:scale-110 transition-transform duration-200" />
                </a>
              ))}
            </div>
          </div>

          {/* Imagen de perfil */}
          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-full max-w-lg">
              <div className={`
                relative aspect-square rounded-3xl overflow-hidden border-2 border-zinc-700/50 bg-zinc-800/20 shadow-2xl backdrop-blur-sm
                transition-all duration-700 ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
              `}>
                {!imageError ? (
                  <Image
                    src={heroData.profileImage}
                    alt={`Foto de perfil de ${heroData.name}`}
                    fill
                    className="object-cover object-center"
                    priority
                    quality={90}
                    onLoad={() => setImageLoaded(true)}
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-zinc-800 text-zinc-400">
                    <span className="text-lg font-medium">Imagen no disponible</span>
                  </div>
                )}
                
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent" />
              </div>

              {/* Elementos decorativos */}
              <div className="absolute -top-8 -right-8 w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}