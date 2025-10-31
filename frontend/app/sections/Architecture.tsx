import Section from '../components/Section';
import ArchitectureCard from '../components/ArchitectureCard';
import { Boxes, GitBranch, Layers3, Network } from 'lucide-react';

// 📝 PERSONALIZA AQUÍ TUS ARQUITECTURAS
const architecturesData = [
  {
    title: 'Clean Architecture',
    description:
      'Separación de capas (Domain, Application, Infrastructure) para mantener el código desacoplado y testeable.',
    icon: Layers3,
    examples: [
      'APIs REST con separación de casos de uso',
      'Repositorios para abstracción de datos',
      'Inyección de dependencias',
    ],
  },
  {
    title: 'Microservicios',
    description:
      'Arquitectura distribuida con servicios independientes que se comunican mediante APIs y mensajería.',
    icon: Network,
    examples: [
      'Servicios de autenticación, pagos y notificaciones',
      'Comunicación con RabbitMQ/Redis',
      'Orquestación con Docker Compose',
    ],
  },
  {
    title: 'Event-Driven',
    description:
      'Sistemas basados en eventos para procesamiento asíncrono y desacoplamiento de servicios.',
    icon: GitBranch,
    examples: [
      'Colas de mensajería con Redis/RabbitMQ',
      'Webhooks para integraciones externas',
      'Procesamiento en background',
    ],
  },
  {
    title: 'API-First Design',
    description:
      'Diseño de APIs robustas, documentadas y versionadas como punto central de la arquitectura.',
    icon: Boxes,
    examples: [
      'RESTful APIs con OpenAPI/Swagger',
      'Versionado de endpoints',
      'Rate limiting y autenticación JWT',
    ],
  },
];

export default function Architecture() {
  const architectures = architecturesData;

  return (
    <Section
      id="architecture"
      title="Arquitecturas y Diseño"
      icon={<Boxes size={32} />}
      className="bg-zinc-950"
    >
      <p className="text-zinc-400 mb-12 max-w-3xl">
        Mi enfoque en el desarrollo backend se centra en crear sistemas escalables, 
        mantenibles y bien estructurados. Estas son las arquitecturas y patrones 
        que implemento regularmente:
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {architectures.map((arch) => (
          <ArchitectureCard key={arch.title} {...arch} />
        ))}
      </div>

      {/* Diagram Example */}
      <div className="mt-12 bg-zinc-900/50 border border-zinc-800 rounded-lg p-8">
        <h3 className="text-xl font-bold text-white mb-4 text-center">
          Ejemplo de Arquitectura
        </h3>
        <div className="bg-zinc-950 rounded-lg p-6 border border-zinc-800">
          <pre className="text-zinc-300 text-sm overflow-x-auto">
{`┌─────────────────────────────────────────────────┐
│              API Gateway (Nginx)                │
└────────────┬────────────────────────┬───────────┘
             │                        │
    ┌────────▼────────┐      ┌───────▼────────┐
    │  Auth Service   │      │  Payment Service│
    │   (Laravel)     │      │    (Node.js)    │
    └────────┬────────┘      └───────┬─────────┘
             │                        │
    ┌────────▼────────────────────────▼─────────┐
    │         Message Queue (Redis)             │
    └────────┬──────────────────────────────────┘
             │
    ┌────────▼────────┐      ┌──────────────────┐
    │   PostgreSQL    │      │   MongoDB        │
    └─────────────────┘      └──────────────────┘`}
          </pre>
        </div>
        <p className="text-zinc-500 text-sm text-center mt-4">
          Arquitectura típica de microservicios con API Gateway y mensajería
        </p>
      </div>
    </Section>
  );
}
