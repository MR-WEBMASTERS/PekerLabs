
import React, { useState, useRef, useEffect } from 'react';
import { geminiService } from '../services/geminiService';
import { ChatMessage } from '../types';

export default function AIConsultant() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Systems online. I am the PekerLabs Lead Engineer. We build CRMs, Apps, and Backends for founders. What are you building today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const response = await geminiService.sendMessage(userMessage);
      setMessages(prev => [...prev, { role: 'model', text: response }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'model', text: "Error. Contact us: pekerlabs@outlook.com" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="card-pop glass rounded-[3rem] overflow-hidden border border-blue-500/10 shadow-[0_30px_60px_-15px_rgba(30,58,138,0.2)]">
      <div className="bg-blue-900/10 p-6 flex items-center justify-between border-b border-blue-500/10">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
            <div className="absolute inset-0 w-3 h-3 bg-amber-500 rounded-full animate-ping opacity-75"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-500/70">Building Engine</span>
            <span className="text-xs font-bold text-blue-200/50">Lead AI (Active)</span>
          </div>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="h-[500px] overflow-y-auto p-8 space-y-6 scrollbar-hide bg-slate-950/40"
      >
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-5 rounded-3xl ${
              msg.role === 'user' 
                ? 'bg-amber-500/10 border border-amber-500/20 text-amber-50 rounded-tr-none' 
                : 'bg-slate-900/60 border border-blue-500/10 text-blue-50 rounded-tl-none'
            }`}>
              <p className="text-[15px] leading-relaxed whitespace-pre-wrap">{msg.text}</p>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSend} className="p-6 bg-slate-950/60 border-t border-blue-500/10 flex gap-4">
        <input 
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask us anything about your build..."
          className="flex-1 bg-slate-900/50 border border-blue-500/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-amber-500/40 transition-all text-white placeholder-blue-200/20"
        />
        <button 
          type="submit"
          disabled={isLoading}
          className="px-6 py-4 bg-amber-500 hover:bg-amber-400 rounded-2xl transition-all disabled:opacity-50 group active:scale-95"
        >
          <svg className="w-6 h-6 text-slate-950 transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </button>
      </form>
    </div>
  );
}
