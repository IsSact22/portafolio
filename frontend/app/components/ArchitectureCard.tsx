import { LucideIcon } from 'lucide-react';

interface ArchitectureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  examples: string[];
}

export default function ArchitectureCard({
  title,
  description,
  icon: Icon,
  examples
}: ArchitectureCardProps) {
  return (
    <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 hover:border-zinc-700 transition-all">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
          <Icon className="text-blue-400" size={24} />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-zinc-400 mb-4">{description}</p>
          <div className="space-y-2">
            <p className="text-sm text-zinc-500 font-medium">Ejemplos:</p>
            <ul className="space-y-1">
              {examples.map((example, index) => (
                <li key={index} className="text-sm text-zinc-300 flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>{example}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
