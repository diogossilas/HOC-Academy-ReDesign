import { motion } from 'motion/react';
import { CardData } from '../../types';
import { Play, Clock, Sparkles } from 'lucide-react';

interface ContentCardProps {
  key?: string;
  card: CardData;
  index?: number;
  onClick?: (card: CardData) => void;
}

export default function ContentCard({ card, index = 0, onClick }: ContentCardProps) {
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
      aria-label={`${card.title} - ${card.category || 'Conteúdo'}`}
    >
      {/* 1. Pure Photographic Canvas Container (No text overlay inside) */}
      <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-[#090b10] border border-white/10 group-hover:border-cyan-400/70 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.25)] transition-all duration-400 ease-out">
        {/* Natural Lighting Image */}
        <img
          src={card.image}
          alt={card.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />

        {/* Minimalist Neon Corner Brackets (Futuristic HUD feel) */}
        <div className="absolute top-1.5 left-1.5 w-2.5 h-2.5 border-t-2 border-l-2 border-cyan-400/0 group-hover:border-cyan-400 transition-colors duration-300" />
        <div className="absolute top-1.5 right-1.5 w-2.5 h-2.5 border-t-2 border-r-2 border-cyan-400/0 group-hover:border-cyan-400 transition-colors duration-300" />
        <div className="absolute bottom-1.5 left-1.5 w-2.5 h-2.5 border-b-2 border-l-2 border-cyan-400/0 group-hover:border-cyan-400 transition-colors duration-300" />
        <div className="absolute bottom-1.5 right-1.5 w-2.5 h-2.5 border-b-2 border-r-2 border-cyan-400/0 group-hover:border-cyan-400 transition-colors duration-300" />

        {/* Subtle Cyber Scanning Beam on Hover */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/[0.07] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Center Minimal Neon Play Button on Hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20">
          <div className="w-12 h-12 rounded-full bg-cyan-400 text-black flex items-center justify-center shadow-[0_0_25px_rgba(34,211,238,0.8)] transform scale-75 group-hover:scale-100 transition-transform">
            <Play size={18} className="fill-current ml-0.5" />
          </div>
        </div>
      </div>

      {/* 2. Information Box BELOW the card (Clean, legible and informative) */}
      <div className="pt-3.5 pb-1 px-1 flex flex-col gap-1.5">
        {/* Angle Perspective & Category Metadata Tag */}
        <div className="flex items-center justify-between gap-2 text-[10px] font-mono tracking-wider">
          <div className="flex items-center gap-1.5 text-cyan-400 font-semibold uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
            <span>{card.angleLabel || card.category || 'Módulo'}</span>
          </div>

          {card.duration && (
            <span className="text-gray-400 flex items-center gap-1 bg-white/[0.04] px-2 py-0.5 rounded border border-white/5">
              <Clock size={10} className="text-cyan-400" />
              {card.duration}
            </span>
          )}
        </div>

        {/* Card Title */}
        <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug line-clamp-1 readable">
          {card.title}
        </h3>

        {/* Informative Description (What this content is about) */}
        <p className="text-xs text-gray-300/85 leading-relaxed line-clamp-2 font-normal readable">
          {card.description || `${card.category} com abordagem estratégica aplicada.`}
        </p>

        {/* Futuristic Minimal Footer Line */}
        <div className="pt-1 flex items-center justify-between text-[9px] font-mono text-gray-500">
          <span className="text-gray-400/60 uppercase">{card.tag || 'HOC // NODE'}</span>
          <span className="text-cyan-400/50 group-hover:text-cyan-400 transition-colors flex items-center gap-1">
            <Sparkles size={9} />
            ACESSAR
          </span>
        </div>
      </div>
    </motion.div>
  );
}
