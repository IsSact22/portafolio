import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, title, icon, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`py-20 ${className}`}>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center gap-3 mb-12">
          {icon && <div className="text-blue-400">{icon}</div>}
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}
