import { motion } from 'motion/react';
import { CardData } from '../../types';
import { Plus, Sparkles } from 'lucide-react';

interface SpecialActionCardProps {
  key?: string;
  card: CardData;
  index?: number;
  onClick?: (card: CardData) => void;
}

export default function SpecialActionCard({
  card,
  index = 0,
  onClick,
}: SpecialActionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: Math.min(index * 0.04, 0.4), duration: 0.35 }}
      whileHover={{ y: -6 }}
      onClick={() => onClick && onClick(card)}
      className="group shrink-0 snap-start flex flex-col cursor-pointer select-none w-64 sm:w-72 md:w-80 lg:w-[340px] xl:w-[360px]"
      tabIndex={0}
      role="button"
      aria-label={card.title}
    >
      {/* 1. Neon Future Action Box */}
      <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-cyan-950/20 border-2 border-dashed border-cyan-500/40 flex flex-col justify-center items-center group-hover:border-cyan-400 group-hover:bg-cyan-950/30 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.25)] transition-all duration-400">
        {/* Minimalist Neon Corner Brackets */}
        <div className="absolute top-1.5 left-1.5 w-2.5 h-2.5 border-t-2 border-l-2 border-cyan-400/40 group-hover:border-cyan-400" />
        <div className="absolute top-1.5 right-1.5 w-2.5 h-2.5 border-t-2 border-r-2 border-cyan-400/40 group-hover:border-cyan-400" />
        <div className="absolute bottom-1.5 left-1.5 w-2.5 h-2.5 border-b-2 border-l-2 border-cyan-400/40 group-hover:border-cyan-400" />
        <div className="absolute bottom-1.5 right-1.5 w-2.5 h-2.5 border-b-2 border-r-2 border-cyan-400/40 group-hover:border-cyan-400" />

        <div className="p-4 text-center flex flex-col items-center gap-2.5">
          <div className="w-12 h-12 rounded-full bg-cyan-400/20 border border-cyan-400/60 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-400 group-hover:text-black text-cyan-400 transition-all shadow-[0_0_20px_rgba(34,211,238,0.4)]">
            <Plus size={24} />
          </div>
          <span className="text-[11px] font-mono font-bold text-cyan-300 uppercase tracking-widest">
            {card.category || 'Módulo'}
          </span>
        </div>
      </div>

      {/* 2. Text Information Below Card */}
      <div className="pt-3.5 pb-1 px-1 flex flex-col gap-1.5">
        <div className="flex items-center justify-between gap-2 text-[10px] font-mono">
          <div className="flex items-center gap-1.5 text-cyan-400 font-semibold uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
            <span>[ EXPANSÃO ACADÊMICA ]</span>
          </div>
          <span className="text-gray-400 bg-white/[0.04] px-2 py-0.5 rounded border border-white/5">
            EM PRODUÇÃO
          </span>
        </div>

        <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
          {card.title}
        </h3>

        <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">
          {card.description || 'Novo conteúdo em desenvolvimento com gravações em estúdio e pesquisa de campo.'}
        </p>

        <div className="pt-1 flex items-center justify-between text-[9px] font-mono text-gray-500">
          <span className="text-gray-400/60">NODE // NEXT-RELEASE</span>
          <span className="text-cyan-400/50 group-hover:text-cyan-400 transition-colors flex items-center gap-1">
            <Sparkles size={9} />
            NOTIFICAR
          </span>
        </div>
      </div>
    </motion.div>
  );
}
