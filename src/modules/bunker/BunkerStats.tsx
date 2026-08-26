import { ShieldCheck, Activity, Award, BookOpen } from 'lucide-react';

export default function BunkerStats() {
  const stats = [
    { label: 'Nível de Prontidão', value: 'Alpha-94%', icon: ShieldCheck, color: 'text-sky-400' },
    { label: 'Horas de Imersão', value: '184.5h', icon: Activity, color: 'text-sky-300' },
    { label: 'Dossiês Estudados', value: '48 itens', icon: BookOpen, color: 'text-white' },
    { label: 'Conquistas Táticas', value: '12 insignias', icon: Award, color: 'text-amber-400' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.label}
            className="p-4 bg-white/5 border border-white/10 rounded-2xl flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] text-white/50 uppercase tracking-wider font-semibold">
                {stat.label}
              </span>
              <Icon size={16} className={stat.color} />
            </div>
            <span className={`text-lg md:text-xl font-extrabold ${stat.color} tracking-tight`}>
              {stat.value}
            </span>
          </div>
        );
      })}
    </div>
  );
}
