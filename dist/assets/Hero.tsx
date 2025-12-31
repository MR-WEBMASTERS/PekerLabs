
import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-36 pb-20">
      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* Compact Status Badge - Updated with new startup mantra */}
        <div className="inline-flex items-center gap-3 px-6 py-2 mb-8 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-[10px] font-black uppercase tracking-[0.4em] reveal active">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-ping shadow-[0_0_12px_rgba(251,191,36,0.8)]"></span>
            <span className="drop-shadow-[0_0_8px_rgba(251,191,36,0.4)]">Build. Scale. Win.</span>
          </div>
        </div>
        
        {/* Optimized Typography */}
        <h1 className="text-6xl md:text-[9rem] font-bold font-heading mb-8 leading-[0.85] tracking-tighter text-white reveal active">
          Code Your <br /> 
          <span className="text-gradient">Success.</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-2xl text-blue-200/50 mb-12 leading-relaxed font-light reveal active">
          High-performance tech for founders who demand perfection. <br className="hidden md:block"/>
          CRMs, Apps, and Engines built to dominate. 
        </p>
        
        {/* High-Velocity CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20 reveal active">
          <button className="group relative w-full sm:w-auto px-12 py-5 bg-amber-500 text-slate-950 rounded-full font-black text-lg transition-all hover:scale-105 active:scale-95 overflow-hidden shadow-[0_0_30px_rgba(251,191,36,0.3)]">
            <span className="relative z-10 uppercase tracking-widest">Start Building</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>
          <a href="mailto:pekerlabs@outlook.com" className="w-full sm:w-auto px-12 py-5 glass border border-amber-500/20 rounded-full font-bold text-lg text-blue-100 hover:text-amber-500 transition-all text-center">
            View Work
          </a>
        </div>

        {/* Trusted By - Optimized Spacing */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 opacity-30 grayscale contrast-125 max-w-4xl mx-auto reveal active">
          {['stripe', 'github', 'openai', 'notion'].map((logo) => (
            <img 
              key={logo}
              src={`https://cdn.simpleicons.org/${logo}/ffffff`} 
              alt={logo} 
              className="h-6 mx-auto transition-all hover:scale-110 hover:grayscale-0 hover:opacity-100" 
            />
          ))}
        </div>
      </div>
      
      {/* Background Dynamics */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-transparent to-transparent"></div>
        <svg width="100%" height="100%">
          <pattern id="grid-optimized" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(251,191,36,0.1)" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-optimized)" />
        </svg>
      </div>

      {/* Atmospheric Glow */}
      <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-amber-500/5 blur-[120px] rounded-full"></div>
    </section>
  );
}
