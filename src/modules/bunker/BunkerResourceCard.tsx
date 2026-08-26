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
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="flex flex-col text-left p-6 md:p-8 glass rounded-2xl border border-white/10 hover:border-sky-400/50 hover:bg-white/10 transition-all duration-300 group relative overflow-hidden"
    >
      <div className="flex items-start justify-between w-full mb-4">
        <div className="w-14 h-14 rounded-2xl bg-sky-950/60 border border-sky-400/30 flex items-center justify-center text-sky-400 group-hover:scale-110 group-hover:bg-sky-400 group-hover:text-black transition-all shadow-[0_0_15px_rgba(56,189,248,0.2)]">
          <Icon size={26} />
        </div>
        {countBadge && (
          <span className="text-[10px] font-mono bg-white/10 text-sky-400 border border-sky-400/20 px-2.5 py-1 rounded-full">
            {countBadge}
          </span>
        )}
      </div>

      <h3 className="text-base md:text-lg font-bold text-white group-hover:text-sky-400 transition-colors readable mb-1.5">
        {title}
      </h3>
      <p className="text-xs text-white/60 leading-relaxed readable">
        {description}
      </p>

      {/* Decorative accent bar */}
      <div className="absolute bottom-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-sky-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.button>
  );
}
