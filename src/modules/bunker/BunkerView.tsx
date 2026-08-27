import { motion } from 'motion/react';
import { Shield, ArrowRight, Home, User, HardHat, Compass } from 'lucide-react';
import { ViewState } from '../../types';

interface BunkerViewProps {
  key?: string;
  onNavigate: (v: ViewState) => void;
}

export default function BunkerView({ onNavigate }: BunkerViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="min-h-[75vh] p-4 md:p-8 max-w-5xl mx-auto flex flex-col items-center justify-center text-center w-full"
    >
      {/* Outer Card with Geometric Sharp Aesthetic */}
      <div className="relative w-full max-w-2xl bg-[var(--color-card)] border border-[var(--color-muted)] p-8 md:p-12 sharp-corner shadow-md overflow-hidden">
        {/* Geometric Corner Accents */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[var(--color-primary)]/20 to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[var(--color-primary)] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[var(--color-primary)] pointer-events-none" />

        {/* Central Icon */}
        <div className="mx-auto w-20 h-20 bg-[var(--color-muted-bg)] border-2 border-[var(--color-primary)] sharp-corner flex items-center justify-center text-[var(--color-primary)] mb-6 shadow-xs relative">
          <Shield size={36} className="text-[var(--color-primary)]" />
          <div className="absolute -bottom-2 -right-2 w-7 h-7 bg-amber-500 text-white sharp-corner flex items-center justify-center shadow-xs">
            <HardHat size={15} />
          </div>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30 text-xs font-bold uppercase tracking-widest sharp-corner mb-4">
          <span className="w-2 h-2 bg-amber-500 sharp-corner animate-pulse" />
          <span>Módulo em Construção</span>
        </div>

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--color-text)] mb-3">
          Bunker Estratégico
        </h1>

        {/* Description */}
        <p className="text-sm text-[var(--color-muted-text)] leading-relaxed max-w-lg mx-auto mb-8">
          Este ambiente de segurança e protocolos estratégicos está sendo reformulado para a próxima fase operacional da academia. Novos recursos táticos e ferramentas avançadas serão implementados em breve.
        </p>

        {/* Call to actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={() => onNavigate('profile')}
            className="w-full sm:w-auto px-6 py-3 bg-[var(--color-primary)] hover:bg-[var(--color-primary-deep)] text-white sharp-corner font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
          >
            <User size={15} />
            <span>Acessar Perfil Pessoal & Estudos</span>
            <ArrowRight size={14} />
          </button>

          <button
            onClick={() => onNavigate('home')}
            className="w-full sm:w-auto px-6 py-3 bg-[var(--color-muted-bg)] hover:bg-[var(--color-card)] border border-[var(--color-muted)] text-[var(--color-text)] sharp-corner font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Home size={15} />
            <span>Retornar ao Início</span>
          </button>

          <button
            onClick={() => onNavigate('explore')}
            className="w-full sm:w-auto px-6 py-3 bg-[var(--color-muted-bg)] hover:bg-[var(--color-card)] border border-[var(--color-muted)] text-[var(--color-text)] sharp-corner font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Compass size={15} />
            <span>Explorar Acervo</span>
          </button>
        </div>

        {/* Security / System Footer Note */}
        <div className="mt-8 pt-6 border-t border-[var(--color-muted)] flex items-center justify-between text-[11px] text-[var(--color-muted-text)] font-mono">
          <span>STATUS: EM DESENVOLVIMENTO</span>
          <span>SISTEMA: HOC-PROTOCOL-v2</span>
        </div>
      </div>
    </motion.div>
  );
}
