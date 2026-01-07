
import React from 'react';
import { useTranslation } from '../App';
import { ClipboardList, Printer, History, Plus, FileSearch, Users } from 'lucide-react';

const ProtocolsView: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-12 max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-8">
          <div className="w-20 h-20 bg-[#0046B5] text-white rounded-[32px] flex items-center justify-center shadow-2xl shadow-blue-200 animate-wiggle">
            <ClipboardList size={40} />
          </div>
          <div>
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">{t('menu_protocols')}</h2>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Decisions, Tender Results, and Opening Protocols</p>
          </div>
        </div>
        <button className="bg-[#0046B5] text-white px-12 py-5 rounded-[24px] font-black text-[11px] uppercase tracking-[0.2em] flex items-center gap-4 hover:bg-slate-900 transition-all shadow-2xl shadow-blue-100 group">
          <Plus size={24} className="group-hover:rotate-180 transition-transform duration-500" />
          {t('menu_protocols')}
        </button>
      </div>

      <div className="apple-card p-12">
        <div className="flex items-center gap-4 mb-12">
          <History size={24} className="text-[#0046B5]" />
          <h3 className="text-lg font-black text-slate-900 uppercase tracking-tighter">Recent Meeting Archives</h3>
          <div className="h-1 flex-1 bg-slate-50 ml-6 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {[
            { id: 'PR-102', title: 'Envelope Opening - Spare Parts supply for TEM-2', date: '19.10.2023', members: 5 },
            { id: 'PR-101', title: 'Tender Results - Logistics services Q4', date: '15.10.2023', members: 4 },
            { id: 'PR-100', title: 'Preliminary Spec Review - Fuel supply', date: '10.10.2023', members: 7 },
            { id: 'PR-099', title: 'Supplier Grievance Review - IT licenses', date: '08.10.2023', members: 3 },
          ].map((item) => (
            <div key={item.id} className="group p-10 bg-slate-50/50 border border-slate-100 rounded-[40px] hover:bg-white hover:border-[#0046B5]/30 hover:shadow-2xl hover:shadow-blue-50/50 transition-all duration-500 cursor-pointer flex gap-8">
              <div className="flex-1">
                <div className="flex justify-between items-start mb-8">
                  <span className="text-[11px] font-black text-white bg-slate-900 px-5 py-2 rounded-2xl uppercase tracking-[0.2em]">{item.id}</span>
                  <div className="flex gap-3">
                    <button className="w-11 h-11 bg-white text-slate-400 hover:text-[#0046B5] rounded-2xl border border-slate-100 transition-all shadow-sm flex items-center justify-center">
                      <Printer size={18} />
                    </button>
                    <button className="w-11 h-11 bg-white text-slate-400 hover:text-[#0046B5] rounded-2xl border border-slate-100 transition-all shadow-sm flex items-center justify-center">
                      <FileSearch size={18} />
                    </button>
                  </div>
                </div>
                <h4 className="font-black text-slate-900 uppercase tracking-tight text-xl mb-6 leading-tight group-hover:translate-x-2 transition-transform">{item.title}</h4>
                <div className="flex justify-between items-center text-[10px] text-slate-400 font-bold uppercase tracking-widest pt-6 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <History size={14} className="text-[#0046B5]" />
                    {item.date}
                  </div>
                  <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-100 text-slate-900">
                    <Users size={14} className="text-[#0046B5]" />
                    {item.members} members
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProtocolsView;
