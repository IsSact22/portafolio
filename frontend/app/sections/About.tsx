import Section from '../components/Section';
import { User, Code2, Briefcase, GraduationCap, Database, Cpu } from 'lucide-react';

// 📝 PERSONALIZA AQUÍ TU INFORMACIÓN
const aboutData = {
  description: [
    'Soy un <strong>desarrollador full stack</strong> con especialización en backend, apasionado por construir sistemas escalables y mantener código limpio utilizando las mejores prácticas de la industria.',
    'Mi enfoque principal está en el diseño de <strong>arquitecturas robustas</strong>, implementación de microservicios y optimización de bases de datos relacionales para aplicaciones de alto rendimiento.',
    'Trabajo con <strong>Laravel, Node.js, PostgreSQL y Docker</strong>, aplicando principios SOLID, Clean Architecture y patrones de diseño para crear soluciones mantenibles y eficientes.',
  ],
  highlights: [
    {
      icon: Code2,
      title: 'Especialización Técnica',
      description: 'Desarrollo backend con enfoque en calidad y escalabilidad',
      technologies: ['Backend Architecture', 'APIs REST', 'Microservicios', 'Clean Architecture', 'SOLID Principles'],
    },
    {
      icon: Database,
      title: 'Bases de Datos',
      description: 'Optimización y diseño de esquemas relacionales eficientes',
      technologies: ['PostgreSQL', 'MySQL', 'Redis', 'Query Optimization', 'Database Design'],
    },
    {
      icon: Briefcase,
      title: 'Experiencia Profesional',
      description: '+3 años desarrollando sistemas empresariales y APIs escalables',
      technologies: ['System Architecture', 'Team Leadership', 'Project Management', 'Code Review'],
    },
    {
      icon: Cpu,
      title: 'Tecnologías',
      description: 'Stack tecnológico moderno y herramientas de desarrollo',
      technologies: ['Laravel', 'Node.js', 'Docker', 'AWS', 'Git', 'CI/CD'],
    },
    {
      icon: GraduationCap,
      title: 'Aprendizaje Continuo',
      description: 'Constantemente explorando nuevas tecnologías y mejores prácticas',
      technologies: ['Latest Trends', 'Best Practices', 'Mentoring', 'Knowledge Sharing'],
    },
  ],
};

export default function About() {
  return (
    <Section 
      id="about" 
      title="Sobre Mí" 
      subtitle="Conoce más sobre mi experiencia, habilidades y enfoque de desarrollo"
      icon={<User size={36} className="text-blue-400" />}
    >
     <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 xl:gap-16 items-start w-full">
  {/* Columna izquierda - Descripción */}
  <div className="space-y-20">
    <div className="space-y-20">
      {aboutData.description.map((paragraph, index) => (
        <div key={index} className="group relative">
          <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <p
            className="text-lg text-zinc-300 leading-relaxed tracking-wide pl-4"
            dangerouslySetInnerHTML={{
              __html: paragraph.replace(
                /<strong>(.*?)<\/strong>/g,
                '<strong class="text-white font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">$1</strong>'
              ),
            }}
          />
        </div>
      ))}
    </div>

    {/* Estadísticas */}
    <div className="grid sm:grid-cols-2 gap-6 pt-4">
      {[
        { number: '3+', label: 'Años de Experiencia' },
        { number: '50+', label: 'Proyectos Completados' },
      ].map((stat, i) => (
        <div
          key={i}
          className="text-center p-6 bg-zinc-900/40 border border-zinc-800 rounded-xl hover:border-zinc-700 transition-all duration-300"
        >
          <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
          <div className="text-sm text-zinc-400">{stat.label}</div>
        </div>
      ))}
    </div>
  </div>

  {/* Columna derecha - Highlights */}
  <div className="space-y-20 w-full">
    {aboutData.highlights.map((highlight, index) => {
      const Icon = highlight.icon;
      return (
        <div
          key={index}
          className="group bg-zinc-900/40 border border-zinc-800 rounded-xl p-6 hover:border-blue-500/40 hover:bg-zinc-900/60 transition-all duration-300 hover:scale-[1.02] backdrop-blur-sm"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl border border-blue-500/20 group-hover:border-blue-500/40 transition-all duration-300">
              <Icon className="text-blue-400" size={24} />
            </div>

            <div className="flex-1">
              <h3 className="text-white font-semibold text-lg mb-2">
                {highlight.title}
              </h3>
              <p className="text-zinc-400 text-base mb-4">{highlight.description}</p>

              <div className="flex flex-wrap gap-2">
                {highlight.technologies.map((tech, tIndex) => (
                  <span
                    key={tIndex}
                    className="px-3 py-1.5 text-xs bg-zinc-800/50 text-zinc-300 rounded-lg border border-zinc-700/50 hover:bg-zinc-700/50 hover:text-white transition-all duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    })}
  </div>
</div>


      {/* Sección adicional de enfoque */}
      <div className="mt-16 p-8 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 border border-blue-500/20 rounded-2xl flex items-center justify-center">
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">
            Mi Filosofía de Desarrollo
          </h3>
          <p className="text-lg text-zinc-300 leading-relaxed">
            Creo en el <strong className="text-white">código limpio, la documentación clara y la colaboración efectiva</strong>. 
            Mi objetivo es crear soluciones que no solo funcionen, sino que también sean mantenibles, escalables y 
            fáciles de entender para todo el equipo.
          </p>
        </div>
      </div>
    </Section>
  );
}