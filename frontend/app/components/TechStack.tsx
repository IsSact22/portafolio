interface TechStackProps {
  category: string;
  technologies: string[];
  icon?: React.ReactNode;
}

export default function TechStack({ category, technologies, icon }: TechStackProps) {
  return (
    <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 hover:border-zinc-700 transition-all">
      <div className="flex items-center gap-3 mb-4">
        {icon && <div className="text-blue-400">{icon}</div>}
        <h3 className="text-xl font-bold text-white">{category}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-4 py-2 bg-zinc-800 text-zinc-200 rounded-md text-sm font-medium hover:bg-zinc-700 transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
