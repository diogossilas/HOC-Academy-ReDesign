import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { heroSlides } from '../../data/heroData';
import { ChevronLeft, ChevronRight, Sparkles, CheckCircle2, Globe, User, Users, Compass } from 'lucide-react';

interface HeroSliderProps {
  onCtaClick?: (slideId: string) => void;
}

export default function HeroSlider({ onCtaClick }: HeroSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  const currentSlide = heroSlides[currentIndex];

  return (
    <div
      className="relative w-full min-h-[480px] md:min-h-[520px] lg:min-h-[560px] overflow-hidden rounded-2xl border border-white/10 group mb-8 select-none bg-[#050608] shadow-2xl"
      aria-label="Showcase de Destaques da Plataforma"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Minimalist Neon Corner Accents on Container */}
      <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-cyan-400/60 z-30 pointer-events-none" />
      <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-cyan-400/60 z-30 pointer-events-none" />
      <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-cyan-400/60 z-30 pointer-events-none" />
      <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-cyan-400/60 z-30 pointer-events-none" />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide.id}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 lg:p-12"
        >
          {/* Background Image with Natural Lighting & Clean Subject Framing */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out"
            style={{ backgroundImage: `url(${currentSlide.image})` }}
          />

          {/* Directional Lateral Scrim (Keeps image naturally bright on the right while ensuring 100% text legibility on the left) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050608]/95 via-[#050608]/75 sm:via-[#050608]/50 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-[#050608]/40 to-transparent pointer-events-none" />
          
          {/* Subtle Cyber Neon Ambient Glow based on slide accent */}
          <div 
            className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl opacity-25 pointer-events-none"
            style={{ backgroundColor: currentSlide.accentColor || '#22D3EE' }}
          />

          {/* Inner Content Layout with Robust Width and Responsive Sizing */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 w-full">
            {/* Left Content Column - Full width on mobile/tablet, generously constrained max-width on desktop */}
            <div className="w-full max-w-xl md:max-w-2xl lg:max-w-3xl shrink-0">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.15, duration: 0.45 }}
              >
                {/* Cyber Telemetry & Tag Badge */}
                <div className="flex items-center gap-3 mb-3">
                  <div 
                    className="inline-flex items-center gap-2 text-[10px] font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md"
                    style={{
                      backgroundColor: `${currentSlide.accentColor || '#22D3EE'}20`,
                      color: currentSlide.accentColor || '#22D3EE',
                      border: `1px solid ${currentSlide.accentColor || '#22D3EE'}50`,
                      boxShadow: `0 0 12px ${currentSlide.accentColor || '#22D3EE'}30`,
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: currentSlide.accentColor || '#22D3EE' }} />
                    <span className="whitespace-nowrap">{currentSlide.tag}</span>
                  </div>

                  <span className="text-[10px] font-mono text-gray-400 hidden sm:inline tracking-widest">
                    // HOC-SYS.0{currentIndex + 1}
                  </span>
                </div>

                {/* Main Heading - Clean unbroken typography */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3.5 leading-[1.15] tracking-tight drop-shadow-md">
                  {currentSlide.title}
                </h1>

                {/* Subtitle */}
                <p className="text-xs sm:text-sm md:text-base text-gray-200/90 mb-6 leading-relaxed font-normal drop-shadow max-w-xl">
                  {currentSlide.subtitle}
                </p>

                {/* Descriptive List (HOC Academy slide) */}
                {currentSlide.type === 'list' && currentSlide.itemsList && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.4 }}
                    className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5 bg-black/60 backdrop-blur-xl p-4 rounded-xl border border-cyan-400/20 shadow-[0_0_20px_rgba(6,182,212,0.1)]"
                  >
                    {currentSlide.itemsList.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-cyan-100/90 font-medium">
                        <CheckCircle2 size={15} className="text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </motion.div>
                )}

                {/* CTA Button with Cyber Glow */}
                <div className="flex flex-wrap items-center gap-4 pt-1">
                  <button
                    onClick={() => onCtaClick && onCtaClick(currentSlide.id)}
                    className="px-7 md:px-9 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-black transition-all hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center gap-2 group/btn cursor-pointer whitespace-nowrap"
                    style={{
                      backgroundColor: currentSlide.accentColor || '#22D3EE',
                      boxShadow: `0 0 25px ${currentSlide.accentColor || '#22D3EE'}50`,
                    }}
                  >
                    <span className="tracking-wide whitespace-nowrap">{currentSlide.ctaText}</span>
                    <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform shrink-0" />
                  </button>

                  <div className="text-xs text-white/60 font-mono flex items-center gap-2 bg-black/50 px-3 py-1.5 rounded-lg border border-white/10 whitespace-nowrap">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span>TRANSMISSÃO EM 4K // HD</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Graphic Column for Interactive Triad & Metatron Visuals */}
            {currentSlide.type === 'triangle' && (
              <div className="hidden lg:flex shrink-0 justify-center items-center py-2 pr-6">
                <motion.div
                  initial={{ scale: 0.85, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.25, duration: 0.6 }}
                  className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center p-2"
                >
                  <svg viewBox="0 0 300 280" className="w-full h-full drop-shadow-[0_0_25px_rgba(192,132,252,0.45)]">
                    <defs>
                      <linearGradient id="triGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#E9D5FF" />
                        <stop offset="50%" stopColor="#C084FC" />
                        <stop offset="100%" stopColor="#9333EA" />
                      </linearGradient>
                    </defs>

                    <polygon
                      points="150,30 270,230 30,230"
                      fill="rgba(192,132,252,0.08)"
                      stroke="url(#triGrad)"
                      strokeWidth="3"
                      strokeLinejoin="round"
                    />

                    <polygon
                      points="150,230 90,130 210,130"
                      fill="rgba(255,255,255,0.03)"
                      stroke="rgba(192,132,252,0.5)"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                    />

                    <circle cx="150" cy="160" r="20" fill="#581C87" stroke="#C084FC" strokeWidth="2" />
                    <text x="150" y="164" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold" fontFamily="monospace">
                      EVOLUÇÃO
                    </text>
                  </svg>

                  {/* Vertices Badges */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 bg-purple-950/90 border border-purple-400 text-purple-100 px-3.5 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(192,132,252,0.4)] flex items-center gap-1.5 backdrop-blur-md whitespace-nowrap">
                    <User size={13} className="text-purple-300" />
                    <span>Pessoal</span>
                  </div>

                  <div className="absolute bottom-2 left-0 bg-purple-950/90 border border-purple-400 text-purple-100 px-3.5 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(192,132,252,0.4)] flex items-center gap-1.5 backdrop-blur-md whitespace-nowrap">
                    <Users size={13} className="text-purple-300" />
                    <span>Social</span>
                  </div>

                  <div className="absolute bottom-2 right-0 bg-purple-950/90 border border-purple-400 text-purple-100 px-3.5 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(192,132,252,0.4)] flex items-center gap-1.5 backdrop-blur-md whitespace-nowrap">
                    <Globe size={13} className="text-purple-300" />
                    <span>Global</span>
                  </div>
                </motion.div>
              </div>
            )}

            {currentSlide.type === 'metatron' && (
              <div className="hidden lg:flex shrink-0 justify-center items-center py-2 pr-6">
                <motion.div
                  initial={{ scale: 0.85, rotate: -15, opacity: 0 }}
                  animate={{ scale: 1, rotate: 0, opacity: 1 }}
                  transition={{ delay: 0.25, duration: 0.8 }}
                  className="relative w-64 h-64 sm:w-76 sm:h-76 flex items-center justify-center"
                >
                  <svg viewBox="0 0 300 300" className="w-full h-full drop-shadow-[0_0_30px_rgba(34,211,238,0.5)]">
                    <polygon points="150,20 262,215 38,215" fill="none" stroke="rgba(34,211,238,0.6)" strokeWidth="1.5" />
                    <polygon points="150,280 262,85 38,85" fill="none" stroke="rgba(34,211,238,0.6)" strokeWidth="1.5" />

                    <polygon points="150,20 262,85 262,215 150,280 38,215 38,85" fill="rgba(6,182,212,0.08)" stroke="#22D3EE" strokeWidth="2" />

                    <line x1="150" y1="20" x2="150" y2="280" stroke="rgba(34,211,238,0.4)" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="38" y1="85" x2="262" y2="215" stroke="rgba(34,211,238,0.4)" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="38" y1="215" x2="262" y2="85" stroke="rgba(34,211,238,0.4)" strokeWidth="1" strokeDasharray="3 3" />

                    <circle cx="150" cy="150" r="18" fill="rgba(6,182,212,0.25)" stroke="#22D3EE" strokeWidth="2" />

                    <circle cx="150" cy="90" r="14" fill="rgba(6,182,212,0.18)" stroke="#67E8F9" strokeWidth="1.5" />
                    <circle cx="202" cy="120" r="14" fill="rgba(6,182,212,0.18)" stroke="#67E8F9" strokeWidth="1.5" />
                    <circle cx="202" cy="180" r="14" fill="rgba(6,182,212,0.18)" stroke="#67E8F9" strokeWidth="1.5" />
                    <circle cx="150" cy="210" r="14" fill="rgba(6,182,212,0.18)" stroke="#67E8F9" strokeWidth="1.5" />
                    <circle cx="98" cy="180" r="14" fill="rgba(6,182,212,0.18)" stroke="#67E8F9" strokeWidth="1.5" />
                    <circle cx="98" cy="120" r="14" fill="rgba(6,182,212,0.18)" stroke="#67E8F9" strokeWidth="1.5" />

                    <circle cx="150" cy="20" r="12" fill="#0891B2" stroke="#A5F3FC" strokeWidth="2" />
                    <circle cx="262" cy="85" r="12" fill="#0891B2" stroke="#A5F3FC" strokeWidth="2" />
                    <circle cx="262" cy="215" r="12" fill="#0891B2" stroke="#A5F3FC" strokeWidth="2" />
                    <circle cx="150" cy="280" r="12" fill="#0891B2" stroke="#A5F3FC" strokeWidth="2" />
                    <circle cx="38" cy="215" r="12" fill="#0891B2" stroke="#A5F3FC" strokeWidth="2" />
                    <circle cx="38" cy="85" r="12" fill="#0891B2" stroke="#A5F3FC" strokeWidth="2" />
                  </svg>
                </motion.div>
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slide Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-xl bg-black/70 border border-white/20 text-white/80 hover:text-cyan-300 hover:border-cyan-400/60 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-md cursor-pointer"
        aria-label="Slide anterior"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-xl bg-black/70 border border-white/20 text-white/80 hover:text-cyan-300 hover:border-cyan-400/60 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-md cursor-pointer"
        aria-label="Próximo slide"
      >
        <ChevronRight size={22} />
      </button>

      {/* Progress Indicators */}
      <div className="absolute bottom-5 right-6 z-20 flex items-center gap-2 bg-black/70 backdrop-blur-xl px-4 py-2 rounded-xl border border-white/10">
        <span className="text-[10px] font-mono text-cyan-400 mr-1.5 font-bold">
          [ 0{currentIndex + 1} / 0{heroSlides.length} ]
        </span>
        {heroSlides.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
              idx === currentIndex
                ? 'w-7 bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]'
                : 'w-2 bg-white/30 hover:bg-white/60'
            }`}
            aria-label={`Ir para slide ${idx + 1}: ${slide.title}`}
          />
        ))}
      </div>
    </div>
  );
}
