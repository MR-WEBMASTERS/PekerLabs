
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  isScrolled: boolean;
}

export default function Navbar({ isScrolled }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Method', href: '#startup-process' },
    { name: 'Engine', href: '#ai' },
    { name: 'Stats', href: '#stats' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ease-in-out ${
          isScrolled || isMenuOpen 
            ? 'py-4 bg-black/90 backdrop-blur-2xl' 
            : 'py-8 bg-transparent'
        }`}
      >
        <div 
          className={`absolute bottom-0 left-0 right-0 h-[1px] transition-all duration-700 ${
            isScrolled ? 'bg-gradient-to-r from-transparent via-amber-500/40 to-transparent opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
        />

        <div className="container mx-auto px-6 flex justify-between items-center">
          <div 
            className="flex items-center gap-2 group cursor-pointer" 
            onClick={() => { setIsMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            <span className="font-heading font-black text-3xl tracking-tighter text-white">
              Peker<span className="text-gradient">Labs</span>
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                className={`text-[11px] font-black uppercase tracking-[0.3em] transition-all duration-300 ${
                  isScrolled ? 'text-white/70 hover:text-amber-500' : 'text-white/40 hover:text-white'
                }`}
              >
                {item.name}
              </a>
            ))}
            <button className="relative group px-8 py-3 bg-amber-500 text-slate-950 font-black text-xs rounded-full transition-all hover:scale-105 active:scale-95 overflow-hidden">
              <span className="relative z-10 uppercase tracking-widest">Build Now</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </div>

          <button 
            className="lg:hidden relative z-[110] w-10 h-10 flex flex-col items-center justify-center focus:outline-none group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-6 h-4 flex flex-col justify-between items-end">
              <span className={`h-0.5 bg-amber-500 transition-all duration-300 ${isMenuOpen ? 'w-6 rotate-45 translate-y-[7px]' : 'w-6'}`}></span>
              <span className={`h-0.5 bg-amber-500 transition-all duration-200 ${isMenuOpen ? 'opacity-0 scale-0' : 'w-4'}`}></span>
              <span className={`h-0.5 bg-amber-500 transition-all duration-300 ${isMenuOpen ? 'w-6 -rotate-45 -translate-y-[7px]' : 'w-2'}`}></span>
            </div>
          </button>
        </div>
      </nav>

      <div className={`fixed inset-0 z-[90] transition-all duration-700 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/98 backdrop-blur-3xl" onClick={() => setIsMenuOpen(false)}></div>
        
        <div className={`absolute top-0 right-0 h-full w-full md:w-[480px] bg-slate-900/50 border-l border-amber-500/5 flex flex-col p-12 transition-transform duration-700 ease-[cubic-bezier(0.2,1,0.3,1)] ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="mt-20 space-y-12">
            <div className="space-y-8">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-amber-500/50">Menu</span>
              <div className="flex flex-col gap-8">
                {navLinks.map((item, idx) => (
                  <a 
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`font-heading text-5xl font-bold text-white hover:text-amber-500 transition-all duration-500 transform ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}
                    style={{ transitionDelay: `${200 + (idx * 50)}ms` }}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
