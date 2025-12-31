
import React, { useState, useEffect } from 'react';

export default function SynergyLab() {
  const [activeNodes, setActiveNodes] = useState<number[]>([]);
  const [power, setPower] = useState(0);

  const services = [
    { id: 1, name: 'Powerful CRM', icon: '⚡' },
    { id: 2, name: 'Backend Core', icon: '⚙️' },
    { id: 3, name: 'UI UX Design', icon: '🎨' },
    { id: 4, name: 'Landing Pages', icon: '🚀' },
  ];

  const toggleNode = (id: number) => {
    if (activeNodes.includes(id)) {
      setActiveNodes(activeNodes.filter(n => n !== id));
    } else {
      setActiveNodes([...activeNodes, id]);
    }
  };

  useEffect(() => {
    const targetPower = activeNodes.length * 25;
    const interval = setInterval(() => {
      setPower(p => {
        if (p < targetPower) return Math.min(p + 1, targetPower);
        if (p > targetPower) return Math.max(p - 1, targetPower);
        return p;
      });
    }, 20);
    return () => clearInterval(interval);
  }, [activeNodes]);

  return (
    <div className="container mx-auto px-6 py-32 relative">
      {/* Enhanced SVG Filter for Liquid/Gooey effect */}
      <svg className="hidden">
        <defs>
          <filter id="liquid-metal-filter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
            <feColorMatrix 
              in="blur" 
              mode="matrix" 
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -12" 
              result="goo" 
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      <div className="text-center mb-24">
        <span className="text-amber-500 font-black tracking-[0.4em] uppercase text-xs mb-4 block">Neural Synergy Engine</span>
        <h2 className="text-5xl md:text-7xl font-bold font-heading text-white tracking-tighter mb-6">
          Liquid <span className="text-gradient">Venture</span> Core
        </h2>
        <p className="text-blue-200/40 text-lg max-w-2xl mx-auto">
          Merge our proprietary tech stacks into your core project infrastructure with fluid precision.
        </p>
      </div>

      <div className="relative h-[600px] flex items-center justify-center">
        {/* Gooey Layer */}
        <div 
          className="relative w-full h-full flex items-center justify-center pointer-events-none"
          style={{ filter: 'url(#liquid-metal-filter)' }}
        >
          {/* The Central Core */}
          <div className={`w-48 h-48 md:w-64 md:h-64 rounded-full transition-all duration-1000 flex items-center justify-center bg-amber-500 shadow-[0_0_60px_rgba(251,191,36,0.3)] ${
            activeNodes.length > 0 ? 'scale-110' : 'bg-slate-800'
          }`}>
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-600 to-amber-400 rounded-full"></div>
          </div>

          {/* Active Liquid Blobs that move to the center */}
          {services.map((service, index) => {
            const isActive = activeNodes.includes(service.id);
            const orbitRadius = typeof window !== 'undefined' && window.innerWidth < 768 ? 160 : 280;
            const currentRadius = isActive ? 30 : orbitRadius;
            
            const x = Math.cos((index * 90) * (Math.PI / 180)) * currentRadius;
            const y = Math.sin((index * 90) * (Math.PI / 180)) * currentRadius;

            return (
              <div
                key={`goo-${service.id}`}
                className={`absolute w-24 h-24 md:w-32 md:h-32 rounded-full transition-all duration-[1500ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  isActive ? 'bg-amber-500' : 'bg-slate-700/50'
                }`}
                style={{
                  transform: `translate(${x}px, ${y}px) scale(${isActive ? 1.2 : 0.8})`,
                  opacity: isActive ? 1 : 0.4
                }}
              ></div>
            );
          })}
        </div>

        {/* Interaction & Icons Layer (Sharp, no filter) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative z-50 text-center pointer-events-none">
             <div className="text-4xl md:text-6xl font-black font-heading text-white mb-1 drop-shadow-lg">{power}%</div>
             <div className="text-[9px] uppercase tracking-widest text-white/80 font-bold">Fluid Sync</div>
          </div>

          {services.map((service, index) => {
            const isActive = activeNodes.includes(service.id);
            const orbitRadius = typeof window !== 'undefined' && window.innerWidth < 768 ? 160 : 280;
            const currentRadius = isActive ? 50 : orbitRadius;
            
            const x = Math.cos((index * 90) * (Math.PI / 180)) * currentRadius;
            const y = Math.sin((index * 90) * (Math.PI / 180)) * currentRadius;

            return (
              <button
                key={service.id}
                onClick={() => toggleNode(service.id)}
                className={`absolute w-20 h-20 md:w-28 md:h-28 rounded-full flex flex-col items-center justify-center transition-all duration-[1200ms] z-[60] group border border-white/5 ${
                  isActive ? 'bg-transparent text-slate-900' : 'bg-slate-900/60 text-white hover:bg-slate-800'
                }`}
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
              >
                <div className="text-2xl md:text-3xl transition-transform duration-500 group-hover:scale-125">{service.icon}</div>
              </button>
            );
          })}
        </div>

        {/* Text Labels (Outside Filter) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {services.map((service, index) => {
            const labelRadius = typeof window !== 'undefined' && window.innerWidth < 768 ? 240 : 380;
            const x = Math.cos((index * 90) * (Math.PI / 180)) * labelRadius;
            const y = Math.sin((index * 90) * (Math.PI / 180)) * labelRadius;
            const isActive = activeNodes.includes(service.id);

            return (
              <div
                key={`label-${service.id}`}
                className={`absolute transition-all duration-700 flex flex-col items-center gap-2 ${isActive ? 'opacity-100' : 'opacity-30'}`}
                style={{ transform: `translate(${x}px, ${y}px)` }}
              >
                <span className="px-5 py-2 glass rounded-full text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-amber-500 border border-amber-500/20 whitespace-nowrap">
                  {service.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* Dynamic Background Gauge */}
        <div className="absolute bottom-[-60px] left-1/2 -translate-x-1/2 w-full max-w-md h-1 bg-slate-900 rounded-full overflow-hidden border border-blue-500/10">
          <div 
            className="h-full bg-gradient-to-r from-blue-600 via-amber-500 to-white transition-all duration-500 ease-out shadow-[0_0_15px_rgba(251,191,36,0.5)]"
            style={{ width: `${power}%` }}
          ></div>
        </div>
      </div>

      <div className="mt-28 flex justify-center gap-4 flex-wrap min-h-[40px]">
        {activeNodes.length === 4 ? (
          <div className="px-8 py-4 bg-amber-500 text-slate-950 font-black text-sm rounded-2xl animate-bounce shadow-[0_0_40px_rgba(251,191,36,0.4)]">
            SYSTEM CRITICAL: CORE STABILITY 100%
          </div>
        ) : activeNodes.length > 0 ? (
          <div className="text-amber-500/60 font-black text-xs tracking-widest animate-pulse uppercase">
            Merging assets into the architecture...
          </div>
        ) : null}
      </div>
    </div>
  );
}
