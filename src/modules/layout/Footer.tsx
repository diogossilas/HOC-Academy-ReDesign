import { Shield, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      className="mt-auto px-6 py-6 bg-[var(--color-card)] border-t border-[var(--color-muted)] flex flex-col md:flex-row items-center justify-between gap-4 text-xs transition-colors"
      aria-label="Rodapé da Plataforma"
    >
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 sharp-corner bg-[var(--color-muted-bg)] text-[var(--color-primary)] flex items-center justify-center font-bold text-[10px] border border-[var(--color-muted)]">
          <Shield size={13} />
        </div>
        <span className="text-[var(--color-muted-text)] font-semibold">
          HOC Academy · Excelência em Estratégia, Diplomacia & Geopolítica
        </span>
      </div>

      <div className="flex items-center gap-1.5 text-[var(--color-muted-text)] text-[11px]">
        <span>Sistema de Alta Coesão & Design Geométrico Tático</span>
        <Sparkles size={12} className="text-[var(--color-primary)] inline ml-1" />
      </div>

      <div className="flex items-center gap-4">
        <span className="text-[11px] text-[var(--color-muted-text)] font-mono">
          © {new Date().getFullYear()} HOC Academy
        </span>
      </div>
    </footer>
  );
}
