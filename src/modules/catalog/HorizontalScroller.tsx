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
    <section className="py-5 overflow-hidden group/section" aria-label={title}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4 px-1">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-6 bg-[var(--color-primary)] sharp-corner shrink-0" />
          <div className="flex items-baseline gap-3">
            <h2 className="text-lg sm:text-xl font-bold tracking-tight text-[var(--color-text)] flex items-center gap-2">
              <span>{title}</span>
            </h2>
            <span className="text-xs text-[var(--color-muted-text)] font-semibold font-mono">
              {cards.length} conteúdos
            </span>
          </div>
        </div>

        {/* Scroll Controls */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => scroll('left')}
            className="p-2 sharp-corner bg-[var(--color-card)] border border-[var(--color-muted)] text-[var(--color-muted-text)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all active:scale-95 cursor-pointer"
            aria-label={`Rolar ${title} para a esquerda`}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-2 sharp-corner bg-[var(--color-card)] border border-[var(--color-muted)] text-[var(--color-muted-text)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all active:scale-95 cursor-pointer"
            aria-label={`Rolar ${title} para a direita`}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Scroller Track */}
      <div
        ref={scrollRef}
        className="flex gap-4 md:gap-5 overflow-x-auto hide-scrollbar pb-3 snap-x pt-1 scroll-smooth"
      >
        {cards.map((card, index) =>
          card.isSpecial ? (
            <SpecialActionCard
              key={card.id}
              card={card}
              index={index}
              variant="scroller"
              onClick={onCardClick}
            />
          ) : (
            <ContentCard
              key={card.id}
              card={card}
              index={index}
              variant="scroller"
              onClick={onCardClick}
            />
          )
        )}
        <div className="shrink-0 w-4" />
      </div>
    </section>
  );
}
