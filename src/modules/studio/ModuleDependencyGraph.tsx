import { useState } from 'react';
import { systemModules } from '../../data/architectureData';
import { SystemModule } from '../../types';
import { Layers, Box, Cpu, GitFork, ArrowUpRight, CheckCircle, Sparkles } from 'lucide-react';

export default function ModuleDependencyGraph() {
  const [activeModule, setActiveModule] = useState<SystemModule>(systemModules[0]);

  return (
    <div className="w-full space-y-6">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
          <span className="text-[10px] text-white/50 uppercase tracking-widest font-bold block mb-1">
            Total de Módulos Independentes
          </span>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black text-white">{systemModules.length}</span>
            <span className="text-xs text-sky-400 font-mono">Unidades Coesas</span>
          </div>
        </div>

        <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
          <span className="text-[10px] text-white/50 uppercase tracking-widest font-bold block mb-1">
            Nível Médio de Acoplamento
          </span>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black text-sky-400">Baixo / Isolado</span>
            <span className="text-xs text-white/40 font-mono">Loose Coupling</span>
          </div>
        </div>

        <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
          <span className="text-[10px] text-white/50 uppercase tracking-widest font-bold block mb-1">
            Separação de Responsabilidades
          </span>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black text-sky-300">100% SoC</span>
            <span className="text-xs text-white/40 font-mono">Single Problem Domain</span>
          </div>
        </div>
      </div>

      {/* Module Selector & Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Module List */}
        <div className="lg:col-span-5 space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-widest text-sky-400 mb-3 flex items-center gap-2">
            <Layers size={14} />
            Módulos do Sistema (Clique para Inspecionar)
          </h4>

          <div className="space-y-2 max-h-[520px] overflow-y-auto custom-scrollbar pr-1">
            {systemModules.map((mod) => {
              const isSelected = activeModule.id === mod.id;
              return (
                <button
                  key={mod.id}
                  onClick={() => setActiveModule(mod)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all duration-200 flex items-center justify-between ${
                    isSelected
                      ? 'bg-sky-400/15 border-sky-400 text-white shadow-[0_0_15px_rgba(56,189,248,0.2)]'
                      : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-white truncate">{mod.name}</span>
                      <span
                        className={`text-[9px] font-mono px-1.5 py-0.2 rounded uppercase ${
                          mod.coupling === 'Isolado'
                            ? 'bg-sky-400 text-black font-bold'
                            : 'bg-white/10 text-sky-400'
                        }`}
                      >
                        {mod.coupling}
                      </span>
                    </div>
                    <span className="text-[11px] text-white/50 block truncate">{mod.domain}</span>
                  </div>

                  <ArrowUpRight
                    size={14}
                    className={`shrink-0 ml-2 transition-transform ${
                      isSelected ? 'text-sky-400 translate-x-0.5 -translate-y-0.5' : 'text-white/30'
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Module Deep Dive */}
        <div className="lg:col-span-7 p-6 rounded-2xl glass border border-white/10 flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/10 mb-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-sky-400 block mb-1">
                  Domínio: {activeModule.domain}
                </span>
                <h3 className="text-xl font-extrabold text-white">{activeModule.name}</h3>
              </div>

              <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl text-xs">
                <span className="text-white/50">Coesão:</span>
                <span className="font-bold text-sky-400">{activeModule.cohesion}</span>
              </div>
            </div>

            {/* Responsibility description */}
            <div className="mb-5">
              <h5 className="text-[10px] uppercase font-bold tracking-widest text-white/40 mb-1.5">
                Aspecto Bem Definido / Responsabilidade Única
              </h5>
              <p className="text-sm text-white/90 leading-relaxed bg-white/5 p-3 rounded-xl border border-white/5 readable">
                {activeModule.responsibility}
              </p>
            </div>

            {/* Files in this module */}
            <div className="mb-5">
              <h5 className="text-[10px] uppercase font-bold tracking-widest text-white/40 mb-2 flex items-center gap-1.5">
                <Box size={12} className="text-sky-400" />
                Arquivos do Módulo (Unidade Coesa)
              </h5>
              <div className="space-y-1.5">
                {activeModule.files.map((file, i) => (
                  <div
                    key={i}
                    className="text-xs font-mono text-sky-300/90 bg-black/40 px-3 py-1.5 rounded-lg border border-white/5 flex items-center justify-between"
                  >
                    <span>{file}</span>
                    <span className="text-[9px] text-white/30 uppercase">Encapsulado</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dependencies & Coupling */}
            <div>
              <h5 className="text-[10px] uppercase font-bold tracking-widest text-white/40 mb-2 flex items-center gap-1.5">
                <GitFork size={12} className="text-sky-400" />
                Dependências Contratuais (Loose Coupling)
              </h5>
              <div className="flex flex-wrap gap-1.5">
                {activeModule.dependencies.map((dep, i) => (
                  <span
                    key={i}
                    className="text-xs font-mono bg-sky-400/10 text-sky-400 border border-sky-400/20 px-2.5 py-1 rounded-lg"
                  >
                    {dep}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/50">
            <span className="flex items-center gap-1.5">
              <CheckCircle size={14} className="text-sky-400" /> Princípio SoC: Atendido
            </span>
            <span className="font-mono text-[11px] text-sky-400">ID: {activeModule.id}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
