
import React from 'react';
import { useTranslation } from '../App';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell,
  LineChart,
  Line
} from 'recharts';

const dataPerformance = [
  { name: 'Jan', quality: 92, delivery: 85 },
  { name: 'Feb', quality: 88, delivery: 90 },
  { name: 'Mar', quality: 95, delivery: 82 },
  { name: 'Apr', quality: 91, delivery: 88 },
  { name: 'May', quality: 94, delivery: 92 },
  { name: 'Jun', quality: 96, delivery: 95 },
];

const dataCategories = [
  { name: 'Parts', value: 45 },
  { name: 'Services', value: 25 },
  { name: 'Fuel', value: 20 },
  { name: 'IT', value: 10 },
];

const COLORS = ['#0046B5', '#007AFF', '#5856D6', '#AF52DE'];

const SuppliersDashboardView: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-10 animate-in fade-in duration-700 max-w-7xl mx-auto pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="apple-card p-10">
          <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-12">Quality vs Delivery Performance</h3>
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dataPerformance}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 11, fontWeight: 'bold'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 11, fontWeight: 'bold'}} />
                <Tooltip 
                  contentStyle={{borderRadius: '20px', border: 'none', boxShadow: '0 10px 40px rgba(0,0,0,0.1)', fontSize: '12px', fontWeight: 'bold'}} 
                  cursor={{fill: '#f8fafc', radius: 10}}
                />
                <Bar dataKey="quality" fill="#0046B5" radius={[6, 6, 0, 0]} name="Quality %" />
                <Bar dataKey="delivery" fill="#E2E8F0" radius={[6, 6, 0, 0]} name="Delivery %" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="apple-card p-10">
          <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-12">Category Distribution</h3>
          <div className="h-[350px] w-full flex flex-col md:flex-row items-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={dataCategories}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={120}
                  paddingAngle={8}
                  dataKey="value"
                  stroke="none"
                >
                  {dataCategories.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-4 pr-10 min-w-[160px] mt-6 md:mt-0">
              {dataCategories.map((item, i) => (
                <div key={item.name} className="flex items-center gap-4 group">
                  <div className="w-4 h-4 rounded-md shadow-sm transition-transform group-hover:scale-125" style={{backgroundColor: COLORS[i]}}></div>
                  <span className="text-[11px] font-black text-slate-800 uppercase tracking-tight">{item.name}</span>
                  <span className="ml-auto text-xs font-black text-slate-400">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="apple-card p-12">
        <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-12">Historical Efficiency Metric</h3>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={dataPerformance}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 11, fontWeight: 'bold'}} />
              <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 11, fontWeight: 'bold'}} />
              <Tooltip 
                contentStyle={{borderRadius: '20px', border: 'none', boxShadow: '0 10px 40px rgba(0,0,0,0.1)'}} 
              />
              <Line 
                type="monotone" 
                dataKey="quality" 
                stroke="#0046B5" 
                strokeWidth={5} 
                dot={{r: 6, fill: '#ffffff', strokeWidth: 4, stroke: '#0046B5'}} 
                activeDot={{r: 10, fill: '#0046B5', stroke: '#ffffff', strokeWidth: 4}} 
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default SuppliersDashboardView;
