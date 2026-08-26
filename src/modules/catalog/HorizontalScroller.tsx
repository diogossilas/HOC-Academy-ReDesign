import { useRef } from 'react';
import { CardData } from '../../types';
import ContentCard from './ContentCard';
import SpecialActionCard from './SpecialActionCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HorizontalScrollerProps {
  title: string;
  cards: CardData[];
  onCardClick?: (card: CardData) => void;
}

export default function HorizontalScroller({
  title,
  cards,
  onCardClick,
}: HorizontalScrollerProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -420 : 420;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-6 overflow-hidden group/section" aria-label={title}>
      {/* Header with Minimalist Neon-Futuristic Details */}
      <div className="flex items-center justify-between mb-5 px-1">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-6 bg-cyan-400 rounded-full shadow-[0_0_12px_rgba(34,211,238,0.7)] shrink-0" />
          <div className="flex items-baseline gap-3">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-white flex items-center gap-2 group-hover/section:text-cyan-200 transition-colors">
              <span>{title}</span>
            </h2>
            <span className="text-[11px] text-cyan-400 font-mono font-medium px-2 py-0.5 rounded bg-cyan-400/10 border border-cyan-400/25">
              // {cards.length < 10 ? `0${cards.length}` : cards.length} MÓDULOS
            </span>
          </div>
        </div>

        {/* Scroll Controls with Neon Glow on Hover */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll('left')}
            className="p-2 rounded-lg bg-white/[0.04] border border-white/10 text-white/70 hover:text-cyan-300 hover:bg-cyan-400/10 hover:border-cyan-400/40 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all active:scale-95"
            aria-label={`Rolar ${title} para a esquerda`}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-2 rounded-lg bg-white/[0.04] border border-white/10 text-white/70 hover:text-cyan-300 hover:bg-cyan-400/10 hover:border-cyan-400/40 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all active:scale-95"
            aria-label={`Rolar ${title} para a direita`}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Scroller Track */}
      <div
        ref={scrollRef}
        className="flex gap-4 md:gap-6 overflow-x-auto hide-scrollbar pb-4 snap-x pt-1 scroll-smooth"
      >
        {cards.map((card, index) =>
          card.isSpecial ? (
            <SpecialActionCard key={card.id} card={card} index={index} onClick={onCardClick} />
          ) : (
            <ContentCard key={card.id} card={card} index={index} onClick={onCardClick} />
          )
        )}
        <div className="shrink-0 w-6" />
      </div>
    </section>
  );
}
