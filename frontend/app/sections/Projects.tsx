import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';
import { FolderGit2 } from 'lucide-react';

// 📝 PERSONALIZA AQUÍ TUS PROYECTOS
const projectsData = [
  {
    title: 'Sistema de Pagos Distribuido',
    description:
      'Diseñé e implementé la arquitectura de microservicios con Laravel y PostgreSQL. Arquitectura de microservicios para gestión de pagos y conciliaciones bancarias. Implementé autenticación JWT, colas de mensajería con Redis y orquestación con Docker.',
    role: 'Backend Lead - Arquitectura y desarrollo de microservicios',
    stack: ['Laravel', 'PostgreSQL', 'Redis', 'Docker', 'Nginx'],
    github: 'https://github.com/yourusername/payments-ms',
    // demo: 'https://demo.example.com', // Opcional
    // diagram: '/images/diagram-payments.png', // Opcional
  },
  {
    title: 'API REST E-commerce',
    description:
      'Sistema completo de comercio electrónico con gestión de inventario, carrito de compras, procesamiento de órdenes y panel administrativo. Implementación de Clean Architecture.',
    role: 'Backend Lead - Arquitectura y desarrollo de APIs',
    stack: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Stripe'],
    github: 'https://github.com/yourusername/ecommerce-api',
    demo: 'https://api-demo.example.com',
  },
  {
    title: 'Sistema de Gestión Hospitalaria',
    description:
      'Plataforma para gestión de citas médicas, historiales clínicos y facturación. Incluye sistema de roles, notificaciones en tiempo real y reportes automatizados.',
    role: 'Full Stack Developer - Backend y arquitectura de base de datos',
    stack: ['Laravel', 'MySQL', 'Vue.js', 'WebSockets', 'AWS'],
    github: 'https://github.com/yourusername/hospital-system',
  },
  {
    title: 'API de Análisis de Datos',
    description:
      'Servicio de procesamiento y análisis de grandes volúmenes de datos con endpoints optimizados para consultas complejas. Implementación de caché y optimización de queries.',
    role: 'Backend Developer - Optimización y escalabilidad',
    stack: ['Node.js', 'PostgreSQL', 'Redis', 'GraphQL', 'Docker'],
    github: 'https://github.com/yourusername/data-analytics-api',
    diagram: '/images/diagram-analytics.png',
  },
];

export default function Projects() {
  const projects = projectsData;

  return (
    <Section
      id="projects"
      title="Proyectos Destacados"
      icon={<FolderGit2 size={32} />}
      className="bg-zinc-950"
    >
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>

      {/* GitHub CTA */}
      <div className="mt-12 text-center">
        <p className="text-zinc-400 mb-4">
          Explora más proyectos y contribuciones open source
        </p>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg font-medium transition-colors border border-zinc-700"
        >
          <FolderGit2 size={20} />
          Ver GitHub
        </a>
      </div>
    </Section>
  );
}
