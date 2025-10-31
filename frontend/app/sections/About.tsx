import Section from '../components/Section';
import { User, Code2, Briefcase, GraduationCap } from 'lucide-react';

// 📝 PERSONALIZA AQUÍ TU INFORMACIÓN
const aboutData = {
  description: [
    'Soy un desarrollador full stack con <strong>especialización en backend</strong>, apasionado por construir sistemas escalables y mantener código limpio.',
    'Mi enfoque principal está en el diseño de <strong>arquitecturas robustas</strong>, implementación de microservicios y optimización de bases de datos relacionales.',
    'Trabajo con <strong>Laravel, Node.js, PostgreSQL y Docker</strong>, aplicando principios SOLID y patrones de diseño para crear soluciones mantenibles.',
  ],
  highlights: [
    {
      icon: Code2,
      title: 'Especialización',
      description: 'Backend, APIs REST, Microservicios, Clean Architecture',
      technologies: ['Backend', 'APIs REST', 'Microservicios', 'Clean Architecture'],
    },
    {
      icon: Briefcase,
      title: 'Experiencia',
      description: '+3 años desarrollando sistemas empresariales y APIs escalables',
    },
    {
      icon: GraduationCap,
      title: 'Aprendizaje',
      description: 'Constantemente explorando nuevas tecnologías y mejores prácticas',
    },
  ],
};

export default function About() {
  return (
    <Section id="about" title="Sobre mí" icon={<User size={32} />}>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Main Description */}
        <div className="space-y-4">
          {aboutData.description.map((paragraph, index) => (
            <p
              key={index}
              className="text-zinc-300 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: paragraph.replace(
                  /<strong>(.*?)<\/strong>/g,
                  '<strong class="text-white">$1</strong>'
                ),
              }}
            />
          ))}
        </div>

        {/* Highlights */}
        <div className="space-y-4">
          {aboutData.highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div
                key={index}
                className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 hover:border-zinc-700 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <Icon className="text-blue-400" size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold mb-1">{highlight.title}</h3>
                    <p className="text-zinc-400 text-sm">{highlight.description}</p>
                    {highlight.technologies && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {highlight.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs bg-zinc-800 text-zinc-300 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
