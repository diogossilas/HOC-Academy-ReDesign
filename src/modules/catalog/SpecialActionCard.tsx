import { useState } from 'react';
import { motion } from 'motion/react';
import { CardData } from '../../types';
import { Plus, Sparkles, Layers } from 'lucide-react';

interface SpecialActionCardProps {
  key?: string;
  card: CardData;
  index?: number;
  variant?: 'grid' | 'scroller';
  className?: string;
  onClick?: (card: CardData) => void;
}

export default function SpecialActionCard({
  card,
  index = 0,
  variant = 'scroller',
  className = '',
  onClick,
}: SpecialActionCardProps) {
  const [imgError, setImgError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const containerClasses =
    variant === 'scroller'
      ? 'w-64 sm:w-72 md:w-80 lg:w-[320px] xl:w-[340px] shrink-0 snap-start'
      : 'w-full';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: Math.min(index * 0.025, 0.25), duration: 0.3 }}
      whileHover={{ y: -4 }}
      onClick={() => onClick && onClick(card)}
      className={`group flex flex-col cursor-pointer select-none ${containerClasses} ${className}`}
      tabIndex={0}
      role="button"
      aria-label={card.title}
    >
      {/* Visual Container with sharp corner and clear photograph */}
      <div className="relative w-full aspect-[16/10] sharp-corner overflow-hidden bg-slate-900 border border-dashed border-[var(--color-primary)]/70 group-hover:border-[var(--color-primary)] group-hover:shadow-md transition-all duration-300">
        {card.image && !imgError ? (
          <>
            <img
              src={card.image}
              alt=""
              onLoad={() => setIsLoaded(true)}
              onError={() => setImgError(true)}
              className={`w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-500 ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            {!isLoaded && (
              <div className="absolute inset-0 bg-slate-800 animate-pulse flex items-center justify-center">
                <Layers size={22} className="text-slate-600 animate-pulse" />
              </div>
            )}
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#0B1E38] to-slate-950 flex flex-col items-center justify-center p-4 text-center overflow-hidden">
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
            <div className="w-10 h-10 sharp-corner bg-[var(--color-primary-deep)]/80 border border-[var(--color-primary)]/50 flex items-center justify-center text-[var(--color-primary)] mb-2 shadow-inner group-hover:scale-110 transition-transform">
              <Layers size={18} />
            </div>
            <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider">
              {card.category || 'Módulo'}
            </span>
          </div>
        )}

        {/* Crisp badge on bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-deep)]/90 via-transparent to-transparent flex flex-col justify-end p-3 pointer-events-none">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-white tracking-wider uppercase drop-shadow-sm flex items-center gap-1">
              <Sparkles size={11} className="text-amber-400" />
              {card.category || 'Módulo'}
            </span>
            <div className="w-8 h-8 sharp-corner bg-[var(--color-primary)] text-white shadow-md flex items-center justify-center group-hover:scale-110 transition-transform">
              <Plus size={16} />
            </div>
          </div>
        </div>
      </div>

      {/* Information Area Below Card */}
      <div className="pt-3 pb-1 px-1 flex flex-col gap-1.5 flex-1">
        <div className="flex items-center justify-between gap-2 text-[11px]">
          <div className="flex items-center gap-1.5 font-bold text-[var(--color-primary)]">
            <span className="w-1.5 h-1.5 sharp-corner bg-[var(--color-accent)] shrink-0" />
            <span>Em Produção</span>
          </div>
          <span className="text-[var(--color-muted-text)] bg-[var(--color-muted-bg)] border border-[var(--color-muted)] px-2 py-0.5 sharp-corner font-semibold text-[10px]">
            Em Breve
          </span>
        </div>

        <h3 className="text-sm sm:text-[15px] font-bold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors leading-snug line-clamp-1">
          {card.title}
        </h3>

        <p className="text-xs text-[var(--color-muted-text)] leading-relaxed line-clamp-2 mt-auto">
          {card.description || 'Novo conteúdo em desenvolvimento com gravações em estúdio e pesquisa.'}
        </p>
      </div>
    </motion.div>
  );
}
