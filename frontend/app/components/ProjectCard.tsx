import { Github, ExternalLink, FileCode } from 'lucide-react';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  stack: string[];
  github?: string;
  demo?: string;
  diagram?: string;
  role?: string;
}

export default function ProjectCard({
  title,
  description,
  stack,
  github,
  demo,
  diagram,
  role
}: ProjectCardProps) {
  return (
    <div className="group bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 hover:border-zinc-700 transition-all duration-300 hover:shadow-lg hover:shadow-zinc-900/50">
      {/* Diagram Preview */}
      {diagram && (
        <div className="mb-4 rounded-lg overflow-hidden bg-zinc-950 border border-zinc-800">
          <Image
            src={diagram}
            alt={`${title} architecture diagram`}
            width={600}
            height={300}
            className="w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition-opacity"
          />
        </div>
      )}

      {/* Title */}
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
        {title}
      </h3>

      {/* Role */}
      {role && (
        <p className="text-sm text-zinc-400 mb-3 italic">
          {role}
        </p>
      )}

      {/* Description */}
      <p className="text-zinc-300 mb-4 leading-relaxed">
        {description}
      </p>

      {/* Stack Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {stack.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-xs font-medium bg-zinc-800 text-zinc-300 rounded-full border border-zinc-700"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-3 pt-4 border-t border-zinc-800">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
          >
            <Github size={16} />
            <span>Código</span>
          </a>
        )}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
          >
            <ExternalLink size={16} />
            <span>Demo</span>
          </a>
        )}
        {diagram && (
          <a
            href={diagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors ml-auto"
          >
            <FileCode size={16} />
            <span>Diagrama</span>
          </a>
        )}
      </div>
    </div>
  );
}
