import { useState } from 'react';
import { motion } from 'motion/react';
import { CardData } from '../../types';
import { Play, Clock, Sparkles, Compass, Shield, BookOpen, Globe, Swords, Radio } from 'lucide-react';

interface ContentCardProps {
  key?: string;
  card: CardData;
  index?: number;
  variant?: 'grid' | 'scroller';
  className?: string;
  onClick?: (card: CardData) => void;
}

// Helper to choose a contextual icon based on category/tag
function getCardIcon(category = '', tag = '') {
  const text = `${category} ${tag}`.toLowerCase();
  if (text.includes('militar') || text.includes('guerra') || text.includes('bélic') || text.includes('combate')) {
    return Swords;
  }
  if (text.includes('global') || text.includes('geopolítica') || text.includes('marítim') || text.includes('pacífico') || text.includes('império')) {
    return Globe;
  }
  if (text.includes('filosofia') || text.includes('livro') || text.includes('manual') || text.includes('guia') || text.includes('estoic')) {
    return BookOpen;
  }
  if (text.includes('defesa') || text.includes('bunker') || text.includes('nuclear') || text.includes('segurança') || text.includes('soberan')) {
    return Shield;
  }
  if (text.includes('youtube') || text.includes('live') || text.includes('transmissão') || text.includes('podcast')) {
    return Radio;
  }
  return Compass;
}

export default function ContentCard({
  card,
  index = 0,
  variant = 'grid',
  className = '',
  onClick,
}: ContentCardProps) {
  const [imgError, setImgError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const containerClasses =
    variant === 'scroller'
      ? 'w-64 sm:w-72 md:w-80 lg:w-[320px] xl:w-[340px] shrink-0 snap-start'
      : 'w-full';

  const FallbackIcon = getCardIcon(card.category, card.tag);

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
      aria-label={`${card.title} - ${card.category || 'Conteúdo'}`}
    >
      {/* Visual Canvas Container with Sharp Corner & Geometric Frame */}
      <div className="relative w-full aspect-[16/10] sharp-corner overflow-hidden bg-slate-900 border border-[var(--color-muted)] group-hover:border-[var(--color-primary)] group-hover:shadow-md transition-all duration-300 ease-out">
        {/* If image exists and hasn't failed, render it */}
        {card.image && !imgError ? (
          <>
            <img
              src={card.image}
              alt=""
              onLoad={() => setIsLoaded(true)}
              onError={() => setImgError(true)}
              className={`w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-500 ease-out ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            {/* Loading placeholder skeleton while image loads */}
            {!isLoaded && (
              <div className="absolute inset-0 bg-slate-800 animate-pulse flex items-center justify-center">
                <FallbackIcon size={24} className="text-slate-600 animate-pulse" />
              </div>
            )}
          </>
        ) : (
          /* Graceful Strategic Geometric Fallback Visual (no broken icons) */
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#0B1E38] to-slate-950 flex flex-col items-center justify-center p-4 text-center overflow-hidden">
            {/* Geometric tactical background grid */}
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[var(--color-primary)]/20 to-transparent pointer-events-none" />
            <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-[var(--color-primary)]/10 rounded-full blur-xl pointer-events-none" />

            <div className="w-12 h-12 sharp-corner bg-[var(--color-primary-deep)]/80 border border-[var(--color-primary)]/50 flex items-center justify-center text-[var(--color-primary)] mb-2 shadow-inner group-hover:scale-110 transition-transform">
              <FallbackIcon size={22} />
            </div>

            <span className="text-[11px] font-bold text-slate-200 line-clamp-1 max-w-[85%] uppercase tracking-wider">
              {card.category || 'Módulo Estratégico'}
            </span>
          </div>
        )}

        {/* 80-degree Corner Accent on Top-Right */}
        <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-[var(--color-primary)]/40 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* Play Action Badge on Hover */}
        <div className="absolute inset-0 bg-[var(--color-primary-deep)]/30 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
          <div className="w-12 h-12 sharp-corner bg-[var(--color-primary)] text-white flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
            <Play size={18} className="fill-current ml-0.5" />
          </div>
        </div>

        {card.tag && (
          <div className="absolute top-2.5 left-2.5 px-2 py-0.5 bg-[var(--color-primary-deep)]/90 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider sharp-corner border border-white/10 shadow-xs flex items-center gap-1">
            <Sparkles size={9} className="text-amber-400" />
            <span>{card.tag}</span>
          </div>
        )}
      </div>

      {/* Information Area BELOW the Card */}
      <div className="pt-3 pb-1 px-1 flex flex-col gap-1.5 flex-1">
        {/* Category & Duration Metadata */}
        <div className="flex items-center justify-between gap-2 text-[11px]">
          <div className="flex items-center gap-1.5 font-semibold text-[var(--color-primary)]">
            <span className="w-1.5 h-1.5 sharp-corner bg-[var(--color-accent)] shrink-0" />
            <span className="truncate">{card.angleLabel || card.category || 'Módulo Estratégico'}</span>
          </div>

          {card.duration && (
            <span className="text-[var(--color-muted-text)] flex items-center gap-1 bg-[var(--color-muted-bg)] border border-[var(--color-muted)] px-2 py-0.5 sharp-corner font-mono text-[10px] shrink-0">
              <Clock size={11} className="text-[var(--color-primary)]" />
              {card.duration}
            </span>
          )}
        </div>

        {/* Card Title */}
        <h3 className="text-sm sm:text-[15px] font-bold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors leading-snug line-clamp-1">
          {card.title}
        </h3>

        {/* Description */}
        <p className="text-xs text-[var(--color-muted-text)] leading-relaxed line-clamp-2 mt-auto">
          {card.description || `${card.category} com abordagem estratégica aplicada.`}
        </p>
      </div>
    </motion.div>
  );
}
