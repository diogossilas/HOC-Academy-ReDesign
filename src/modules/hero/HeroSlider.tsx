import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { heroSlides } from '../../data/heroData';
import { ChevronLeft, ChevronRight, CheckCircle2, Globe, User, Users } from 'lucide-react';

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
      className="relative w-full min-h-[440px] md:min-h-[480px] lg:min-h-[520px] overflow-hidden sharp-corner border border-[var(--color-muted)] group mb-8 select-none bg-[var(--color-card)] shadow-lg"
      aria-label="Showcase de Destaques da Plataforma"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 80-degree Angled Top Right Accent */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[var(--color-primary)]/40 to-transparent pointer-events-none z-20" />
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[var(--color-primary)] pointer-events-none z-20" />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 lg:p-12"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out"
            style={{ backgroundImage: `url(${currentSlide.image})` }}
          />

          {/* Elegant Scrim Gradient for Legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent pointer-events-none" />

          {/* Inner Content */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 w-full">
            {/* Left Content Column */}
            <div className="w-full max-w-xl md:max-w-2xl lg:max-w-3xl shrink-0">
              <motion.div
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.4 }}
              >
                {/* Tag Badge with Sharp 80-degree cut */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 sharp-corner uppercase tracking-wider bg-[var(--color-primary)] text-white border border-sky-400/40 backdrop-blur-md">
                    <span className="w-1.5 h-1.5 sharp-corner bg-emerald-400" />
                    <span>{currentSlide.tag}</span>
                  </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 leading-[1.2] tracking-tight drop-shadow-md">
                  {currentSlide.title}
                </h1>

                {/* Subtitle */}
                <p className="text-sm sm:text-base text-slate-200 mb-6 leading-relaxed max-w-xl drop-shadow-sm font-normal">
                  {currentSlide.subtitle}
                </p>

                {/* Descriptive List */}
                {currentSlide.type === 'list' && currentSlide.itemsList && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.35 }}
                    className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5 bg-slate-950/80 backdrop-blur-md p-4 sharp-corner border border-[var(--color-primary)]/40"
                  >
                    {currentSlide.itemsList.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-sky-100 font-medium">
                        <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </motion.div>
                )}

                {/* CTA Button */}
                <div className="flex flex-wrap items-center gap-4 pt-1">
                  <button
                    onClick={() => onCtaClick && onCtaClick(currentSlide.id)}
                    className="px-7 py-3 sharp-corner font-bold text-xs sm:text-sm text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-deep)] active:scale-95 transition-all shadow-md flex items-center justify-center gap-2 group/btn cursor-pointer whitespace-nowrap"
                  >
                    <span>{currentSlide.ctaText}</span>
                    <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Right Graphic Column */}
            {currentSlide.type === 'triangle' && (
              <div className="hidden lg:flex shrink-0 justify-center items-center py-2 pr-6">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="relative w-72 h-72 flex items-center justify-center p-2"
                >
                  <svg viewBox="0 0 300 280" className="w-full h-full drop-shadow-md">
                    <polygon
                      points="150,30 270,230 30,230"
                      fill="rgba(37, 99, 235, 0.15)"
                      stroke="#2563EB"
                      strokeWidth="2.5"
                      strokeLinejoin="miter"
                    />

                    <polygon
                      points="150,230 90,130 210,130"
                      fill="rgba(255,255,255,0.05)"
                      stroke="rgba(96, 165, 250, 0.6)"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                    />

                    <circle cx="150" cy="160" r="20" fill="#0A3D78" stroke="#60A5FA" strokeWidth="2" />
                    <text x="150" y="164" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold">
                      EVOLUÇÃO
                    </text>
                  </svg>

                  {/* Vertices Badges */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-slate-950/90 border border-[var(--color-primary)] text-sky-100 px-3 py-1 sharp-corner text-xs font-semibold shadow-md flex items-center gap-1.5 backdrop-blur-md whitespace-nowrap">
                    <User size={13} className="text-sky-300" />
                    <span>Pessoal</span>
                  </div>

                  <div className="absolute bottom-2 left-0 bg-slate-950/90 border border-[var(--color-primary)] text-sky-100 px-3 py-1 sharp-corner text-xs font-semibold shadow-md flex items-center gap-1.5 backdrop-blur-md whitespace-nowrap">
                    <Users size={13} className="text-sky-300" />
                    <span>Social</span>
                  </div>

                  <div className="absolute bottom-2 right-0 bg-slate-950/90 border border-[var(--color-primary)] text-sky-100 px-3 py-1 sharp-corner text-xs font-semibold shadow-md flex items-center gap-1.5 backdrop-blur-md whitespace-nowrap">
                    <Globe size={13} className="text-sky-300" />
                    <span>Global</span>
                  </div>
                </motion.div>
              </div>
            )}

            {currentSlide.type === 'metatron' && (
              <div className="hidden lg:flex shrink-0 justify-center items-center py-2 pr-6">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="relative w-64 h-64 flex items-center justify-center"
                >
                  <svg viewBox="0 0 300 300" className="w-full h-full drop-shadow-md">
                    <polygon points="150,20 262,215 38,215" fill="none" stroke="rgba(96,165,250,0.6)" strokeWidth="1.5" />
                    <polygon points="150,280 262,85 38,85" fill="none" stroke="rgba(96,165,250,0.6)" strokeWidth="1.5" />
                    <polygon points="150,20 262,85 262,215 150,280 38,215 38,85" fill="rgba(37,99,235,0.1)" stroke="#2563EB" strokeWidth="2" />
                    <line x1="150" y1="20" x2="150" y2="280" stroke="rgba(96,165,250,0.4)" strokeWidth="1" strokeDasharray="3 3" />
                    <circle cx="150" cy="150" r="18" fill="rgba(10,61,120,0.6)" stroke="#60A5FA" strokeWidth="2" />
                  </svg>
                </motion.div>
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slide Navigation Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 sharp-corner bg-slate-950/70 border border-white/20 text-white hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)] opacity-0 group-hover:opacity-100 transition-all duration-200 backdrop-blur-md cursor-pointer"
        aria-label="Slide anterior"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 sharp-corner bg-slate-950/70 border border-white/20 text-white hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)] opacity-0 group-hover:opacity-100 transition-all duration-200 backdrop-blur-md cursor-pointer"
        aria-label="Próximo slide"
      >
        <ChevronRight size={20} />
      </button>

      {/* Progress Indicators */}
      <div className="absolute bottom-5 right-6 z-20 flex items-center gap-1.5 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 sharp-corner border border-white/15">
        {heroSlides.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 sharp-corner transition-all duration-300 cursor-pointer ${
              idx === currentIndex
                ? 'w-6 bg-[var(--color-primary-light)]'
                : 'w-2 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Ir para slide ${idx + 1}: ${slide.title}`}
          />
        ))}
      </div>
    </div>
  );
}
