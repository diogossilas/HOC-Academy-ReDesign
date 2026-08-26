import { HeroSlide } from '../types';

import heroAiStrategy from '../assets/images/hero_ai_strategy_1787780757629.jpg';
import heroCrisisManagement from '../assets/images/hero_crisis_management_1787780768345.jpg';
import heroSoftwareArchitecture from '../assets/images/hero_software_architecture_1787780779111.jpg';
import cursoImperios from '../assets/images/curso_imperios_1787780958725.jpg';
import aulaDueloImperios from '../assets/images/aula_duelo_imperios_1787781046250.jpg';
import acervoNuclear from '../assets/images/acervo_nuclear_1787780984650.jpg';
import youtubeFilosofia from '../assets/images/youtube_filosofia_1787781005360.jpg';

export const heroSlides: HeroSlide[] = [
  {
    id: 'hero-carisma',
    image: heroCrisisManagement,
    title: 'Inteligência do Carisma & Presença Executiva',
    subtitle: 'A arte e a neurociência da persuasão magnética, presença de palco e oratória de alto impacto para liderar e influenciar em momentos decisivos.',
    tag: 'Masterclass de Presença',
    ctaText: 'Dominar o Carisma',
    accentColor: '#F59E0B',
    badgeBg: 'bg-amber-400 text-black',
    type: 'standard',
  },
  {
    id: 'hero-geopolitica-brasil',
    image: acervoNuclear,
    title: 'Geopolítica e Soberania do Brasil',
    subtitle: 'Soberania territorial, recursos estratégicos, diplomacia multilateral e a projeção de poder do Brasil na nova ordem multipolar.',
    tag: 'Estratégia Nacional',
    ctaText: 'Explorar Geopolítica',
    accentColor: '#10B981',
    badgeBg: 'bg-emerald-400 text-black',
    type: 'standard',
  },
  {
    id: 'hero-hoc-academy',
    image: heroAiStrategy,
    title: 'HOC Academy · Formação Estratégica',
    subtitle: 'O ecossistema definitivo de formação em Geopolítica, Filosofia, História e Liderança com o Prof. Heni Ozi Cukier.',
    tag: 'Ecossistema Completo',
    ctaText: 'Conhecer a Formação',
    accentColor: '#06B6D4',
    badgeBg: 'bg-cyan-400 text-black',
    type: 'list',
    itemsList: [
      'Cursos Estratégicos & Masterclasses Exclusivas',
      'Análises Geopolíticas do Cenário Internacional',
      'Filosofia Aplicada e Tomada de Decisão sob Pressão',
      'Comunidade Global de Estrategistas & Líderes',
      'Dossiês de Inteligência e Acesso ao Bunker',
    ],
  },
  {
    id: 'hero-duelo-imperios',
    image: aulaDueloImperios,
    title: 'Duelo de Impérios: EUA vs China',
    subtitle: 'A disputa hegemônica pelo domínio do século XXI: reorganização das cadeias de suprimento, tecnologia crítica e o novo tabuleiro bélico mundial.',
    tag: 'Conflito Hegemônico',
    ctaText: 'Analisar o Duelo',
    accentColor: '#EF4444',
    badgeBg: 'bg-rose-500 text-white',
    type: 'standard',
  },
  {
    id: 'hero-imperio-romano',
    image: cursoImperios,
    title: 'Império Romano & Grandes Civilizações',
    subtitle: 'Ascensão, apogeu e legado: lições atemporais de engenharia militar, disciplina de comando, jurisprudência e estratégia de poder.',
    tag: 'História & Poder',
    ctaText: 'Estudar o Império',
    accentColor: '#EAB308',
    badgeBg: 'bg-amber-500 text-black',
    type: 'standard',
  },
  {
    id: 'hero-triade-evolucao',
    image: youtubeFilosofia,
    title: 'Tríade da Evolução do Estrategista',
    subtitle: 'Metodologia tridimensional integrando autodomínio Pessoal, inteligência Social e visão Global para tomada de decisões assertivas.',
    tag: 'Metodologia Tríade',
    ctaText: 'Explorar a Tríade',
    accentColor: '#C084FC',
    badgeBg: 'bg-purple-400 text-black',
    type: 'triangle',
  },
  {
    id: 'hero-cubo-metatron',
    image: heroSoftwareArchitecture,
    title: 'Cubo de Metatron & Matriz Estratégica',
    subtitle: 'A geometria sagrada da ordem, harmonia dos sólidos platônicos e a estrutura lógica para organização de pensamento complexo.',
    tag: 'Geometria Sagrada',
    ctaText: 'Desvendar a Matriz',
    accentColor: '#22D3EE',
    badgeBg: 'bg-cyan-400 text-black',
    type: 'metatron',
  },
];
