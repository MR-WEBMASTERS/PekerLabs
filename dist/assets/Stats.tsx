
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'Jan', performance: 85 },
  { name: 'Feb', performance: 82 },
  { name: 'Mar', performance: 94 },
  { name: 'Apr', performance: 89 },
  { name: 'May', performance: 97 },
  { name: 'Jun', performance: 100 },
];

const COLORS = ['#1e3a8a', '#1d4ed8', '#fbbf24', '#f59e0b', '#d97706', '#fde68a'];

export default function Stats() {
  return (
    <div className="container mx-auto px-6 py-32">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="reveal">
          <h2 className="text-5xl md:text-6xl font-bold font-heading mb-10 leading-tight text-white">Elite <br /><span className="text-amber-500">Speed</span></h2>
          <p className="text-blue-200/50 text-xl font-light mb-12 leading-relaxed">
            Our code is built to move. We maintain the fastest response speeds in the game.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { label: 'Uptime', value: '99.9%' },
              { label: 'Speed', value: '40ms' },
              { label: 'Security', value: 'Active' },
              { label: 'Success', value: '1.2k+' }
            ].map((stat, i) => (
              <div 
                key={i} 
                className="card-pop glass p-6 rounded-[1.5rem] border-blue-500/10 bg-slate-900/40"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <span className="text-xs font-bold uppercase tracking-widest text-blue-400/40 block mb-2">{stat.label}</span>
                <span className="text-2xl font-bold text-white font-heading">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="card-pop group h-[450px] glass rounded-[3rem] p-10 border border-blue-500/10 bg-slate-900/40 flex flex-col shadow-2xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex justify-between items-start mb-10">
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Growth Curve</h4>
                <p className="text-xs text-blue-400/40">Monthly Success Rate (%)</p>
              </div>
              <span className="text-amber-500 font-bold">+14%</span>
            </div>
            <div className="flex-1">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#475569', fontSize: 12}} />
                  <YAxis hide />
                  <Tooltip 
                    cursor={{fill: 'rgba(30, 58, 138, 0.05)'}}
                    contentStyle={{backgroundColor: '#0f172a', border: '1px solid rgba(251, 191, 36, 0.2)', borderRadius: '16px'}}
                  />
                  <Bar dataKey="performance" radius={[12, 12, 12, 12]} barSize={40}>
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
