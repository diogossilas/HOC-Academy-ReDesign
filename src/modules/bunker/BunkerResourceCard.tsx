import { LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';

interface BunkerResourceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  countBadge?: string;
  onClick: () => void;
}

export default function BunkerResourceCard({
  icon: Icon,
  title,
  description,
  countBadge,
  onClick,
}: BunkerResourceCardProps) {
  return (
    <motion.button
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="flex flex-col text-left p-6 bg-[var(--color-card)] rounded-2xl border border-[var(--color-muted)] hover:border-sky-400 hover:shadow-lg hover:shadow-sky-500/10 transition-all duration-300 group cursor-pointer"
    >
      <div className="flex items-start justify-between w-full mb-4">
        <div className="w-12 h-12 rounded-xl bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800/40 flex items-center justify-center text-[var(--color-primary)] group-hover:scale-105 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all">
          <Icon size={22} />
        </div>
        {countBadge && (
          <span className="text-[11px] font-medium bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/40 px-2.5 py-1 rounded-full">
            {countBadge}
          </span>
        )}
      </div>

      <h3 className="text-base font-bold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors mb-1.5">
        {title}
      </h3>
      <p className="text-xs text-[var(--color-muted-text)] leading-relaxed">
        {description}
      </p>
    </motion.button>
  );
}
