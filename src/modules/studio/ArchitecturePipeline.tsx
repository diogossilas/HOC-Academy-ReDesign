import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { architectureStages } from '../../data/architectureData';
import { ArchitectureStage } from '../../types';
import { CheckCircle2, ArrowRight, FileCode, Target, ShieldCheck } from 'lucide-react';

export default function ArchitecturePipeline() {
  const [selectedStage, setSelectedStage] = useState<ArchitectureStage>(
    architectureStages[3] // Default to Modularização
  );

  return (
    <div className="w-full">
      {/* Pipeline Navigation Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-6">
        {architectureStages.map((stage, idx) => {
          const isSelected = selectedStage.id === stage.id;
          return (
            <button
              key={stage.id}
              onClick={() => setSelectedStage(stage)}
              className={`p-4 rounded-2xl text-left border transition-all duration-200 relative overflow-hidden group cursor-pointer ${
                isSelected
                  ? 'bg-[var(--color-card)] border-sky-400 shadow-md ring-1 ring-sky-400'
                  : 'bg-[var(--color-card)] border-[var(--color-muted)] hover:border-sky-300 hover:bg-[var(--color-muted-bg)]'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className={`text-xs font-mono font-bold px-2 py-0.5 rounded-md ${
                    isSelected ? 'bg-sky-500 text-white' : 'bg-[var(--color-muted-bg)] text-[var(--color-muted-text)]'
                  }`}
                >
                  {stage.stepNumber}
                </span>
                <span className="text-[11px] uppercase tracking-wider text-[var(--color-primary)] font-bold">
                  {stage.name}
                </span>
              </div>

              <h4 className="text-sm font-bold text-[var(--color-text)] mb-1 group-hover:text-[var(--color-primary)] transition-colors">
                {stage.name}
              </h4>
              <p className="text-xs text-[var(--color-muted-text)] line-clamp-2 leading-snug">
                {stage.description}
              </p>

              {/* Progress connector indicator */}
              {idx < architectureStages.length - 1 && (
                <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 text-[var(--color-muted)] z-10">
                  <ArrowRight size={14} />
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Selected Stage Detail Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedStage.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="p-6 md:p-8 rounded-2xl bg-[var(--color-card)] border border-[var(--color-muted)] shadow-md"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[var(--color-muted)] mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono bg-sky-500 text-white px-2.5 py-0.5 rounded-full font-bold">
                  ETAPA {selectedStage.stepNumber}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-[var(--color-text)]">
                  {selectedStage.title}
                </h3>
              </div>
              <p className="text-xs md:text-sm text-[var(--color-primary)] font-medium">
                Princípio Central: {selectedStage.principle}
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/40 text-emerald-700 dark:text-emerald-300 text-xs font-semibold self-start md:self-auto">
              <ShieldCheck size={16} />
              <span>Validação Arquitetural: 100% Coeso</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Responsibilities */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] flex items-center gap-2">
                <Target size={14} />
                Responsabilidades da Unidade
              </h4>
              <ul className="space-y-2">
                {selectedStage.responsibilities.map((resp, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-xs text-[var(--color-text)] p-3 bg-[var(--color-muted-bg)] rounded-xl border border-[var(--color-muted)]"
                  >
                    <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Artifacts & Deliverables */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] flex items-center gap-2">
                <FileCode size={14} />
                Artefatos & Entregas do Módulo
              </h4>
              <div className="grid grid-cols-1 gap-2">
                {selectedStage.artifacts.map((art, i) => (
                  <div
                    key={i}
                    className="p-3 bg-[var(--color-muted-bg)] border border-[var(--color-muted)] rounded-xl flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2 text-xs font-medium text-[var(--color-text)]">
                      <div className="w-2 h-2 rounded-full bg-[var(--color-primary)]" />
                      <span>{art}</span>
                    </div>
                    <span className="text-[10px] font-mono text-[var(--color-muted-text)] uppercase">Isolado</span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-[var(--color-muted-text)] pt-2 leading-relaxed">
                Cada estágio encapsula um único tipo de responsabilidade no ciclo de vida de engenharia da aplicação.
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
