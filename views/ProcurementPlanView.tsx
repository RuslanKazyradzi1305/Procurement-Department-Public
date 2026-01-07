
import React from 'react';
import { useTranslation } from '../App';
import { Calendar, Search, Filter, Download, ArrowUpRight, Target, Activity } from 'lucide-react';

const ProcurementPlanView: React.FC = () => {
  const { t } = useTranslation();

  const stats = [
    { label: 'Total Lots', value: '842', icon: <Target size={20} /> },
    { label: 'Published', value: '614', icon: <Activity size={20} /> },
    { label: 'Completed', value: '421', icon: <Target size={20} /> },
    { label: 'Pending', value: '228', icon: <Activity size={20} /> },
  ];

  return (
    <div className="space-y-12 max-w-7xl mx-auto animate-in fade-in duration-700 pb-20">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
        <div>
          <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">{t('plan_title')}</h2>
          <div className="flex flex-wrap gap-6 mt-4">
            <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-2xl shadow-sm border border-slate-100">
               <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{t('plan_budget')}</span>
               <span className="text-lg font-black text-[#0046B5]">4.2B ₸</span>
            </div>
            <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-2xl shadow-sm border border-slate-100">
               <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{t('plan_executed')}</span>
               <span className="text-lg font-black text-[#0046B5]">68%</span>
            </div>
          </div>
        </div>
        <div className="flex gap-4 w-full lg:w-auto">
          <button className="p-5 bg-white apple-card text-slate-900 hover:text-[#0046B5] transition-all flex items-center justify-center">
            <Calendar size={24} />
          </button>
          <button className="flex-1 lg:flex-none bg-[#0046B5] text-white px-12 py-5 rounded-[24px] font-black text-[11px] uppercase tracking-[0.2em] flex items-center justify-center gap-4 hover:bg-slate-900 transition-all shadow-2xl shadow-blue-100 group">
            <Download size={20} className="group-hover:translate-y-1 transition-transform" />
            {t('plan_export')}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="apple-card p-10 group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 text-slate-50 group-hover:text-blue-50 transition-colors">
               {stat.icon}
            </div>
            <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-3 group-hover:text-[#0046B5] transition-colors">{stat.label}</p>
            <div className="flex items-end justify-between">
              <p className="text-4xl font-black text-slate-900 tracking-tighter">{stat.value}</p>
              <ArrowUpRight size={24} className="text-slate-100 group-hover:text-[#0046B5] transition-all" />
            </div>
          </div>
        ))}
      </div>

      <div className="apple-card overflow-hidden">
        <div className="p-10 border-b border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8 bg-slate-50/20">
          <div className="flex items-center gap-4">
             <div className="w-2 h-8 bg-[#0046B5] rounded-full"></div>
             <h3 className="font-black text-slate-900 uppercase tracking-tight text-lg">Active Lots (Q4 2024)</h3>
          </div>
          <div className="relative group w-full md:w-96">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0046B5] transition-colors" size={20} />
            <input 
              type="text" 
              placeholder={t('header_search')}
              className="w-full pl-14 pr-8 py-4 bg-white border border-slate-100 rounded-3xl text-sm font-bold outline-none focus:border-[#0046B5]/20 transition-all shadow-sm"
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/30">
                <th className="px-10 py-6 text-[11px] font-black text-slate-400 uppercase tracking-widest">Lot ID</th>
                <th className="px-10 py-6 text-[11px] font-black text-slate-400 uppercase tracking-widest">Title / Description</th>
                <th className="px-10 py-6 text-[11px] font-black text-slate-400 uppercase tracking-widest">Budget (KZT)</th>
                <th className="px-10 py-6 text-[11px] font-black text-slate-400 uppercase tracking-widest text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                { id: 'DT-120', title: 'Winter Diesel Fuel Supply for Locomotives', amount: '185,000,000', status: 'Active' },
                { id: 'RM-451', title: 'TEM-2 Locomotive Overhaul & Maintenance', amount: '45,200,000', status: 'Planning' },
                { id: 'IT-002', title: 'Enterprise Software Licenses - Renewal', amount: '12,000,000', status: 'Planning' },
                { id: 'OL-130', title: 'Engine Oils & Lubricants - Batch 12', amount: '8,400,000', status: 'Active' },
              ].map((item, i) => (
                <tr key={i} className="hover:bg-slate-50/50 transition-all cursor-default group">
                  <td className="px-10 py-8 text-xs font-black text-[#0046B5] font-mono tracking-tighter">{item.id}</td>
                  <td className="px-10 py-8">
                     <p className="text-sm font-bold text-slate-900 uppercase tracking-tight group-hover:translate-x-1 transition-transform">{item.title}</p>
                  </td>
                  <td className="px-10 py-8">
                    <span className="text-base font-black text-slate-900">{item.amount}</span>
                  </td>
                  <td className="px-10 py-8 text-right">
                    <span className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border transition-colors ${
                      item.status === 'Active' 
                        ? 'bg-emerald-50 text-emerald-600 border-emerald-100' 
                        : 'bg-slate-100 text-slate-400 border-slate-200'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProcurementPlanView;
