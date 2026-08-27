import { ShieldCheck, Activity, Award, BookOpen } from 'lucide-react';

export default function BunkerStats() {
  const stats = [
    { label: 'Nível de Prontidão', value: 'Alpha-94%', icon: ShieldCheck, color: 'text-sky-600 dark:text-sky-400' },
    { label: 'Horas de Imersão', value: '184.5h', icon: Activity, color: 'text-emerald-600 dark:text-emerald-400' },
    { label: 'Dossiês Estudados', value: '48 itens', icon: BookOpen, color: 'text-sky-600 dark:text-sky-400' },
    { label: 'Conquistas Táticas', value: '12 insignias', icon: Award, color: 'text-amber-500' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 mb-8">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.label}
            className="p-4 bg-[var(--color-card)] border border-[var(--color-muted)] rounded-2xl flex flex-col justify-between shadow-xs hover:border-sky-300 transition-colors"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] text-[var(--color-muted-text)] font-semibold">
                {stat.label}
              </span>
              <Icon size={16} className={stat.color} />
            </div>
            <span className={`text-lg md:text-xl font-bold ${stat.color} tracking-tight`}>
              {stat.value}
            </span>
          </div>
        );
      })}
    </div>
  );
}
