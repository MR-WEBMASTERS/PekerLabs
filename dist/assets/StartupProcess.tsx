
import React from 'react';

export default function StartupProcess() {
  const lifecycle = [
    {
      id: '01',
      phase: 'Plan to Win',
      subtitle: 'The Strategy',
      description: 'We turn your idea into a technical roadmap. Simple steps, zero fluff, maximum growth.',
      details: ['Clear Strategy', 'Right Stack', 'Low Risk'],
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: '02',
      phase: 'Build Fast',
      subtitle: 'The Execution',
      description: 'Our engineers build your CRM, Backend, and Frontend in record time. Speed is everything.',
      details: ['Fast Sprints', 'Tested Code', 'High Speed'],
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: '03',
      phase: 'Scale Hard',
      subtitle: 'The Launch',
      description: 'Go global. We make sure your tech handles millions of users without slowing down.',
      details: ['Global Network', 'Auto-Scale', 'Live Monitoring'],
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9h18" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative py-40 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-amber-500/0 via-amber-500/20 to-amber-500/0 opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-32 reveal">
          <h2 className="text-5xl md:text-8xl font-bold font-heading text-white tracking-tighter mb-10 leading-[0.9]">
            The <span className="text-gradient">Startup Forge</span>
          </h2>
        </div>

        <div className="space-y-32">
          {lifecycle.map((step, idx) => (
            <div 
              key={step.id} 
              className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16 md:gap-24 reveal`}
            >
              <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                <span className="text-[12rem] md:text-[22rem] font-black font-heading leading-none text-transparent stroke-text opacity-10" style={{ WebkitTextStroke: '1px rgba(251, 191, 36, 0.5)' }}>
                  {step.id}
                </span>
              </div>

              <div className="w-full md:w-1/2">
                <div className="glass p-10 md:p-14 rounded-[3rem] bg-slate-900/40 border-amber-500/5 transition-all duration-700">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500">
                      {step.icon}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold font-heading text-white">
                      {step.phase}
                    </h3>
                  </div>
                  <p className="text-blue-200/50 text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
