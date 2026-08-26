import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { architectureStages } from '../../data/architectureData';
import { ArchitectureStage } from '../../types';
import { CheckCircle2, ArrowRight, Layers, FileCode, Target, ShieldCheck } from 'lucide-react';

export default function ArchitecturePipeline() {
  const [selectedStage, setSelectedStage] = useState<ArchitectureStage>(
    architectureStages[3] // Default to Modularização
  );

  return (
    <div className="w-full">
      {/* Pipeline Navigation Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {architectureStages.map((stage, idx) => {
          const isSelected = selectedStage.id === stage.id;
          return (
            <button
              key={stage.id}
              onClick={() => setSelectedStage(stage)}
              className={`p-4 rounded-2xl text-left border transition-all duration-300 relative overflow-hidden group ${
                isSelected
                  ? 'bg-sky-400/10 border-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.2)]'
                  : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/[0.08]'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                    isSelected ? 'bg-sky-400 text-black' : 'bg-white/10 text-white/70'
                  }`}
                >
                  {stage.stepNumber}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-sky-400 font-bold">
                  {stage.name}
                </span>
              </div>

              <h4 className="text-sm font-bold text-white mb-1 readable group-hover:text-sky-300 transition-colors">
                {stage.name}
              </h4>
              <p className="text-[11px] text-white/60 line-clamp-2 leading-snug">
                {stage.description}
              </p>

              {/* Progress connector indicator */}
              {idx < architectureStages.length - 1 && (
                <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 text-white/20 z-10">
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
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="p-6 md:p-8 rounded-2xl glass border border-sky-400/30 shadow-xl"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono bg-sky-400 text-black px-2.5 py-0.5 rounded-full font-bold">
                  ETAPA {selectedStage.stepNumber}
                </span>
                <h3 className="text-xl md:text-2xl font-black text-white readable">
                  {selectedStage.title}
                </h3>
              </div>
              <p className="text-xs md:text-sm text-sky-300/90 font-mono">
                Princípio Central: {selectedStage.principle}
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-sky-400/10 border border-sky-400/30 text-sky-400 text-xs font-semibold self-start md:self-auto">
              <ShieldCheck size={16} />
              <span>Validação Arquitetural: 100% Coeso</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Responsibilities */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-sky-400 flex items-center gap-2">
                <Target size={14} />
                Responsabilidades da Unidade
              </h4>
              <ul className="space-y-2">
                {selectedStage.responsibilities.map((resp, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-xs text-white/80 p-2.5 bg-white/5 rounded-xl border border-white/5"
                  >
                    <CheckCircle2 size={14} className="text-sky-400 shrink-0 mt-0.5" />
                    <span className="readable">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Artifacts & Deliverables */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-sky-400 flex items-center gap-2">
                <FileCode size={14} />
                Artefatos & Entregas do Módulo
              </h4>
              <div className="grid grid-cols-1 gap-2">
                {selectedStage.artifacts.map((art, i) => (
                  <div
                    key={i}
                    className="p-3 bg-sky-950/30 border border-sky-400/20 rounded-xl flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2 text-xs font-medium text-white">
                      <div className="w-2 h-2 rounded-full bg-sky-400" />
                      <span>{art}</span>
                    </div>
                    <span className="text-[10px] font-mono text-sky-400/80 uppercase">Isolado</span>
                  </div>
                ))}
              </div>

              <p className="text-[11px] text-white/50 pt-2 leading-relaxed">
                Cada estágio encapsula um único tipo de responsabilidade no ciclo de vida de engenharia do software.
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
