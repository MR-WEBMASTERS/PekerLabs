
import React from 'react';
import { ServiceCardProps } from '../types';

function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="glass p-10 rounded-[2.5rem] group transition-all duration-500 bg-slate-900/40 relative overflow-hidden h-full flex flex-col hover:-translate-y-4 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(251,191,36,0.15)] active:scale-95 cursor-pointer">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10 flex flex-col h-full">
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-gradient-to-br from-slate-800 to-slate-950 border border-amber-500/20 transition-all duration-500 shadow-xl`}>
          {icon}
        </div>
        <h3 className="text-2xl font-bold font-heading mb-4 text-white group-hover:text-amber-500 transition-colors duration-500 tracking-tight">{title}</h3>
        <p className="text-blue-200/50 leading-relaxed font-medium relative z-10 flex-grow">{description}</p>
        
        <div className="mt-8 flex items-center gap-2 text-amber-500/0 group-hover:text-amber-500/100 transition-all duration-500 translate-x-[-10px] group-hover:translate-x-0">
          <span className="text-[10px] font-black uppercase tracking-widest">Build Now</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const services = [
    {
      title: "Smart CRM",
      description: "Custom lead tracking that actually works. We build it fast and integrate it into your workflow.",
      color: "amber",
      icon: <svg className="w-9 h-9 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    },
    {
      title: "Landing Pages",
      description: "Fast, clean, and built to sell. Turn your traffic into real customers with immersive design.",
      color: "amber",
      icon: <svg className="w-9 h-9 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
    },
    {
      title: "Solid Backend",
      description: "Heavy-duty logic for heavy-duty growth. We build engines that handle millions of users.",
      color: "amber",
      icon: <svg className="w-9 h-9 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
    },
    {
      title: "Modern UI/UX",
      description: "Clean interfaces that users love. We design the future of your product today.",
      color: "amber",
      icon: <svg className="w-9 h-9 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1-0 01-1-1v-6z" /></svg>
    }
  ];

  return (
    <div className="container mx-auto px-6 py-32">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
        <div className="max-w-2xl relative reveal">
          <div className="overflow-hidden">
            <h2 className="text-5xl md:text-7xl font-bold font-heading mb-8 leading-tight text-white tracking-tighter reveal-text">
              We Build <br /><span className="text-gradient">Startups</span>
            </h2>
          </div>
          
          <div className="overflow-hidden">
            <p className="text-blue-200/50 text-xl font-light leading-relaxed delay-300 reveal-text">
              Forget slow IT. We ship high-performance code that helps you dominate.
            </p>
          </div>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="card-pop" 
            style={{ transitionDelay: `${index * 120}ms` }}
          >
            <ServiceCard {...service} />
          </div>
        ))}
      </div>
    </div>
  );
}
