
import React, { useEffect, useState } from 'react';

export default function EntryAnimation({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);
  const [phase, setPhase] = useState<number>(0);

  useEffect(() => {
    // A grander, more cinematic 2026-style reveal sequence
    // Stage 0: Ethereal Singularity Build-up (0s - 1.5s)
    // Stage 1: Monolithic Type Assembly (1.5s - 3.5s)
    // Stage 2: Liquid Gold Infusion & Chromatic Shimmer (3.5s - 6.0s)
    // Stage 3: Subtext Solidification & Sustain (6.0s - 8.5s)
    // Stage 4: High-Velocity Dimensional Dissolve (8.5s - 9.5s)
    
    const p1 = setTimeout(() => setPhase(1), 1500);
    const p2 = setTimeout(() => setPhase(2), 3500);
    const p3 = setTimeout(() => setPhase(3), 6000);
    const p4 = setTimeout(() => setPhase(4), 8500);
    const finish = setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 9500);

    return () => {
      clearTimeout(p1);
      clearTimeout(p2);
      clearTimeout(p3);
      clearTimeout(p4);
      clearTimeout(finish);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden transition-all duration-[1500ms] ${phase === 4 ? 'opacity-0 scale-110 blur-[60px] pointer-events-none' : 'opacity-100'}`}>
      
      {/* Soft Ethereal Singularity (Soft glow, no glare) */}
      <div 
        className={`absolute w-1 h-1 bg-white rounded-full transition-all duration-[3000ms] ease-out ${
          phase === 0 ? 'scale-[350] opacity-30 blur-[130px]' : 'scale-0 opacity-0'
        }`}
        style={{ mixBlendMode: 'screen' }}
      ></div>

      <div className="relative flex flex-col items-center">
        
        {/* PEKER - Monolithic Assembly */}
        <div className="overflow-visible py-2 px-12 relative flex justify-center">
          <h1 
            className={`font-heading font-black text-6xl md:text-[14rem] leading-none tracking-tight transition-all duration-[2500ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
              phase >= 1 ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-16 opacity-0 blur-2xl'
            } ${phase >= 2 ? 'text-white' : 'text-white/5'}`}
            style={{ 
              filter: phase >= 2 ? 'drop-shadow(0 0 30px rgba(255,255,255,0.12))' : 'none',
            }}
          >
            PEKER
          </h1>
        </div>

        {/* LABS - Refinement (Corrected 'S' clipping with padding and explicit width) */}
        <div className="overflow-visible py-2 px-24 -mt-8 md:-mt-20 relative flex justify-center min-w-[300px] md:min-w-[1000px]">
          <h1 
            className={`font-heading font-black text-6xl md:text-[14rem] leading-none tracking-tight transition-all duration-[2800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
              phase >= 1 ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-[-16px] opacity-0 blur-2xl'
            } ${phase >= 2 ? 'text-gradient' : 'text-white/5'}`}
            style={{ 
              filter: phase >= 2 ? 'drop-shadow(0 0 60px rgba(251,191,36,0.3))' : 'none',
              paddingRight: '0.15em' /* Vital buffer for the 'S' character curves */
            }}
          >
            LABS
          </h1>

          {/* Liquid Shimmer Light Scan (Slower, more luxurious) */}
          <div 
            className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-35deg] z-20 transition-all duration-[5000ms] ease-in-out pointer-events-none ${
              phase >= 2 ? 'translate-x-[500%]' : '-translate-x-[250%]'
            }`}
          ></div>
        </div>

        {/* Refined Elite Subtext (Elegantly sized, not oversized) */}
        <div className="mt-8 md:mt-12 relative h-10 flex items-center justify-center">
          <p 
            className={`text-amber-500 font-bold uppercase text-[10px] md:text-lg transition-all duration-[2000ms] ease-out ${
              phase >= 3 ? 'opacity-100 tracking-[1em] md:tracking-[1.6em] blur-0 translate-y-0' : 'opacity-0 tracking-[0.2em] blur-2xl translate-y-8'
            }`}
            style={{ 
              textShadow: '0 0 20px rgba(251,191,36,0.35)',
              whiteSpace: 'nowrap'
            }}
          >
            ELITE STARTUP BUILDERS
          </p>
        </div>

      </div>

      {/* Deep-Field Atmospheric Bloom */}
      <div 
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[70vh] bg-amber-500/[0.02] blur-[200px] rounded-full transition-all duration-[7000ms] ${
          phase >= 2 ? 'scale-125 opacity-100' : 'scale-50 opacity-0'
        }`}
      ></div>

    </div>
  );
}
