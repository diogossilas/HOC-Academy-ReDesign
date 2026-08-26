import { ShieldCheck, Cpu, Layers } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      className="mt-auto px-6 py-6 bg-[#070707] border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs"
      aria-label="Rodapé do Sistema"
    >
      <div className="flex items-center gap-3">
        <div className="w-5 h-5 rounded bg-sky-400/20 text-sky-400 flex items-center justify-center font-bold text-[10px]">
          <Layers size={12} />
        </div>
        <span className="text-white/60 font-mono tracking-tight readable">
          Arquitetura Modular · Separation of Concerns
        </span>
      </div>

      <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
        <a
          href="#"
          className="text-white/40 hover:text-sky-400 uppercase tracking-wider font-semibold transition-colors readable text-[10px]"
        >
          Brief
        </a>
        <a
          href="#"
          className="text-white/40 hover:text-sky-400 uppercase tracking-wider font-semibold transition-colors readable text-[10px]"
        >
          Sketch
        </a>
        <a
          href="#"
          className="text-white/40 hover:text-sky-400 uppercase tracking-wider font-semibold transition-colors readable text-[10px]"
        >
          Studio
        </a>
        <a
          href="#"
          className="text-white/40 hover:text-sky-400 uppercase tracking-wider font-semibold transition-colors readable text-[10px]"
        >
          Modularização
        </a>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-[10px] text-white/30 font-mono tracking-widest uppercase">
          v3.0.0 · MODULAR-ENGINE
        </span>
      </div>
    </footer>
  );
}
