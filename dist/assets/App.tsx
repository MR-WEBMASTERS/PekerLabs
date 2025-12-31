
import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AIConsultant from './components/AIConsultant';
import Stats from './components/Stats';
import Footer from './components/Footer';
import EntryAnimation from './components/EntryAnimation';
import StartupProcess from './components/StartupProcess';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setIsScrolled(scrollPos > 50);

      if (scrollPos < 5) {
        document.querySelectorAll('.reveal, .card-pop').forEach(el => {
          const isHeroElement = el.closest('section')?.id === 'hero' || el.parentElement?.closest('.container')?.querySelector('h1');
          if (!isHeroElement) {
            el.classList.remove('active');
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isReady) return;

    const initObserver = () => {
      observerRef.current = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          } else {
            if (entry.boundingClientRect.top > window.innerHeight) {
              entry.target.classList.remove('active');
            }
          }
        });
      }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });

      document.querySelectorAll('.reveal, .card-pop').forEach(el => {
        observerRef.current?.observe(el);
      });
    };

    const timer = setTimeout(initObserver, 100);
    return () => {
      clearTimeout(timer);
      observerRef.current?.disconnect();
    };
  }, [isReady]);

  return (
    <>
      <EntryAnimation onComplete={() => setIsReady(true)} />
      
      <div className={`min-h-screen bg-black selection:bg-amber-500/30 transition-opacity duration-[1500ms] ${isReady ? 'opacity-100' : 'opacity-0'}`}>
        {isReady && (
          <>
            <Navbar isScrolled={isScrolled} />
            
            <main className="bg-black">
              <section id="hero">
                <Hero />
              </section>
              
              <section id="services">
                <Services />
              </section>

              <section id="startup-process">
                <StartupProcess />
              </section>

              <section id="stats" className="reveal">
                <Stats />
              </section>

              <section id="ai" className="py-32 bg-slate-900/[0.02] reveal">
                <div className="container mx-auto px-4">
                  <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-5xl md:text-8xl font-bold font-heading mb-8 tracking-tighter">
                      The <span className="text-gradient">AI Blueprint</span>
                    </h2>
                    <p className="text-amber-500/40 text-xl md:text-2xl font-light">
                      Engineering at lightspeed. Consult with the PL Intelligence Engine.
                    </p>
                  </div>
                  <AIConsultant />
                </div>
              </section>
            </main>

            <Footer />
          </>
        )}
      </div>
    </>
  );
}
