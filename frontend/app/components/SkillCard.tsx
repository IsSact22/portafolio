interface SkillCardProps {
  name: string;
  icon: React.ReactNode;
  color?: string;
}

export default function SkillCard({ name, icon, color = 'blue' }: SkillCardProps) {
  const colorClasses = {
    blue: 'hover:border-blue-500/50 hover:bg-blue-500/5',
    orange: 'hover:border-orange-500/50 hover:bg-orange-500/5',
    green: 'hover:border-green-500/50 hover:bg-green-500/5',
    purple: 'hover:border-purple-500/50 hover:bg-purple-500/5',
    yellow: 'hover:border-yellow-500/50 hover:bg-yellow-500/5',
    red: 'hover:border-red-500/50 hover:bg-red-500/5',
    cyan: 'hover:border-cyan-500/50 hover:bg-cyan-500/5',
  };

  return (
    <div
      className={`group relative bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 transition-all duration-300 ${
        colorClasses[color as keyof typeof colorClasses] || colorClasses.blue
      } hover:scale-105 hover:shadow-lg hover:shadow-zinc-900/50`}
    >
      <div className="flex flex-col items-center gap-3">
        <div className="text-4xl">{icon}</div>
        <h3 className="text-white font-semibold text-center">{name}</h3>
      </div>
    </div>
  );
}
