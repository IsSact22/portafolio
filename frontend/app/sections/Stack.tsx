import Section from '../components/Section';
import TechStack from '../components/TechStack';
import { Layers, Server, Database, Wrench } from 'lucide-react';

// 📝 PERSONALIZA AQUÍ TU STACK TECNOLÓGICO
const stackData = {
  categories: [
    {
      category: 'Backend',
      icon: Server,
      technologies: ['Laravel', 'Node.js', 'Express', 'NestJS', 'PHP', 'TypeScript'],
    },
    {
      category: 'Bases de Datos',
      icon: Database,
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch'],
    },
    {
      category: 'DevOps & Tools',
      icon: Wrench,
      technologies: ['Docker', 'Git', 'GitHub Actions', 'Nginx', 'AWS', 'Linux'],
    },
    {
      category: 'Frontend',
      icon: Layers,
      technologies: ['Next.js', 'React', 'Vue.js', 'TailwindCSS', 'TypeScript'],
    },
  ],
  methodologies: [
    {
      title: 'Arquitectura',
      items: ['Clean Architecture', 'Hexagonal', 'Microservicios', 'Event-Driven'],
    },
    {
      title: 'Patrones',
      items: ['Repository', 'Factory', 'Strategy', 'Observer', 'Dependency Injection'],
    },
    {
      title: 'Principios',
      items: ['SOLID', 'DRY', 'KISS', 'TDD', 'Code Review', 'Git Flow'],
    },
  ],
};

export default function Stack() {
  const stackCategories = stackData.categories.map(cat => ({
    ...cat,
    icon: <cat.icon size={24} />
  }));

  return (
    <Section
      id="stack"
      title="Stack Tecnológico"
      icon={<Layers size={32} />}
    >
      <div className="grid md:grid-cols-2 gap-6">
        {stackCategories.map((stack) => (
          <TechStack key={stack.category} {...stack} />
        ))}
      </div>

      {/* Methodologies */}
      <div className="mt-12 bg-zinc-900/50 border border-zinc-800 rounded-lg p-8">
        <h3 className="text-xl font-bold text-white mb-6 text-center">
          Metodologías y Prácticas
        </h3>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {stackData.methodologies.map((methodology) => (
            <div key={methodology.title}>
              <div className="text-blue-400 font-semibold mb-2">{methodology.title}</div>
              <p className="text-zinc-400 text-sm">
                {methodology.items.join(', ')}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
