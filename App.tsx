
import React, { useState, createContext, useContext } from 'react';
import { AppTab, Language } from './types';
import { TRANSLATIONS } from './translations';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import HomeView from './views/HomeView';
import MarketingView from './views/MarketingView';
import OrdersView from './views/OrdersView';
import TechSpecView from './views/TechSpecView';
import ProtocolsView from './views/ProtocolsView';
import ProcurementPlanView from './views/ProcurementPlanView';
import SuppliersDBView from './views/SuppliersDBView';
import SuppliersDashboardView from './views/SuppliersDashboardView';
import EnsTruView from './views/EnsTruView';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useTranslation must be used within LanguageProvider');
  return context;
};

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AppTab>(AppTab.Home);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [lang, setLang] = useState<Language>('ru');

  const t = (key: string) => {
    return TRANSLATIONS[lang][key] || key;
  };

  const renderContent = () => {
    switch (activeTab) {
      case AppTab.Home: return <HomeView />;
      case AppTab.Marketing: return <MarketingView />;
      case AppTab.Orders: return <OrdersView />;
      case AppTab.TechnicalSpec: return <TechSpecView />;
      case AppTab.Protocols: return <ProtocolsView />;
      case AppTab.ProcurementPlan: return <ProcurementPlanView />;
      case AppTab.SuppliersDB: return <SuppliersDBView />;
      case AppTab.SuppliersDashboard: return <SuppliersDashboardView />;
      case AppTab.EnsTru: return <EnsTruView />;
      default: return <HomeView />;
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      <div className="flex min-h-screen bg-white">
        <Sidebar 
          activeTab={activeTab} 
          onTabChange={setActiveTab} 
          isOpen={isSidebarOpen} 
          setIsOpen={setIsSidebarOpen} 
        />
        
        <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>
          <Header activeTab={activeTab} />
          <main className="p-8">
            <div className="animate-in fade-in duration-500">
              {renderContent()}
            </div>
          </main>
        </div>
      </div>
    </LanguageContext.Provider>
  );
};

export default App;
