
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#010413] py-28 border-t border-blue-500/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex flex-col gap-2 mb-10">
              <span className="font-heading font-black text-3xl tracking-tighter text-white">
                Peker<span className="text-gradient">Labs</span>
              </span>
            </div>
            <p className="text-blue-200/40 max-w-sm mb-6 text-lg font-light leading-relaxed">
              We build the tech for founders who refuse to follow. Simple code, heavy impact.
            </p>
            <a href="mailto:pekerlabs@outlook.com" className="text-amber-500 font-bold mb-10 block hover:text-amber-400 transition-colors">pekerlabs@outlook.com</a>
          </div>
        </div>

        <div className="pt-10 border-t border-blue-500/5 flex flex-col md:flex-row justify-between gap-8 text-[13px] font-bold tracking-widest text-blue-900/60 uppercase">
          <p>© PekerLabs. Build Fast. Scale Hard.</p>
        </div>
      </div>
    </footer>
  );
}
