import { motion } from 'motion/react';
import HeroSlider from '../hero/HeroSlider';
import HorizontalScroller from '../catalog/HorizontalScroller';
import {
  triadeEvolucao,
  professores,
  cursos,
  aulasExclusivas,
  conteudoExclusivo,
  youtubeHoc,
  infoComplementares,
} from '../../data/catalogData';
import { ViewState } from '../../types';

interface HomeViewProps {
  key?: string;
  onNavigate?: (view: ViewState) => void;
}

export default function HomeView({ onNavigate }: HomeViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="p-4 md:p-6 pb-24 flex flex-col gap-5 max-w-7xl mx-auto w-full overflow-hidden"
    >
      {/* Featured Hero Banner Module */}
      <HeroSlider onCtaClick={() => onNavigate && onNavigate('explore')} />

      {/* Structured Category Scroller Sections */}
      <div className="grid grid-cols-1 gap-2">
        <HorizontalScroller title="Tríade da Evolução" cards={triadeEvolucao} />
        <HorizontalScroller title="Professores HOC Academy" cards={professores} />
        <HorizontalScroller title="Cursos Estratégicos" cards={cursos} />
        <HorizontalScroller title="Aulas Exclusivas" cards={aulasExclusivas} />
        <HorizontalScroller title="Conteúdo & Dossiês Exclusivos" cards={conteudoExclusivo} />
        <HorizontalScroller title="YouTube Professor HOC" cards={youtubeHoc} />
        <HorizontalScroller title="Informações & Apoio Pedagógico" cards={infoComplementares} />
      </div>
    </motion.div>
  );
}
