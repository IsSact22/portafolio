import Section from '../components/Section';
import SkillCard from '../components/SkillCard';
import { Code2 } from 'lucide-react';

// 📝 PERSONALIZA AQUÍ TUS SKILLS
const skillsData = [
  {
    name: 'Laravel',
    icon: '🔷',
    color: 'red',
  },
  {
    name: 'Node.js',
    icon: '🟢',
    color: 'green',
  },
  {
    name: 'PostgreSQL',
    icon: '🐘',
    color: 'blue',
  },
  {
    name: 'MongoDB',
    icon: '🍃',
    color: 'green',
  },
  {
    name: 'Docker',
    icon: '🐳',
    color: 'blue',
  },
  {
    name: 'Redis',
    icon: '🔴',
    color: 'red',
  },
  {
    name: 'Next.js',
    icon: '▲',
    color: 'blue',
  },
  {
    name: 'TypeScript',
    icon: '📘',
    color: 'blue',
  },
  {
    name: 'Git',
    icon: '🔀',
    color: 'orange',
  },
  {
    name: 'AWS',
    icon: '☁️',
    color: 'orange',
  },
  {
    name: 'GraphQL',
    icon: '🔷',
    color: 'purple',
  },
  {
    name: 'REST API',
    icon: '🔌',
    color: 'cyan',
  },
];

export default function Skills() {
  return (
    <Section
      id="skills"
      title="My Skills"
      icon={<Code2 size={32} />}
      className="bg-zinc-950"
    >
      <p className="text-zinc-400 text-center mb-12 max-w-2xl mx-auto">
        Tecnologías y herramientas que domino para construir soluciones backend escalables
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skillsData.map((skill) => (
          <SkillCard
            key={skill.name}
            name={skill.name}
            icon={skill.icon}
            color={skill.color}
          />
        ))}
      </div>
    </Section>
  );
}
