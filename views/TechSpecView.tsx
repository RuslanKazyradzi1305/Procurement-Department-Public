
import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from '../App';
import { 
  FileText, 
  Download, 
  Settings2, 
  ChevronRight, 
  Languages,
  PenTool,
  UserCheck,
  Calendar,
  ClipboardList
} from 'lucide-react';

const TechSpecView: React.FC = () => {
  const { t, lang } = useTranslation();
  const previewRef = useRef<HTMLDivElement>(null);

  // Initial data based on locale
  const getInitialData = () => ({
    customer: 'АО «Dosjan temir joly»',
    subjectType: lang === 'kk' ? 'Қызмет' : (lang === 'en' ? 'Service' : 'Услуга'),
    enstruCode: '619010.900.000003',
    enstruName: lang === 'kk' ? 'Телекоммуникациялық қызметтер' : (lang === 'en' ? 'Telecommunication services' : 'Услуги телекоммуникационные'),
    shortDesc: lang === 'kk' ? 'Телекоммуникациялық қызметтер' : (lang === 'en' ? 'Telecommunication services' : 'Услуги телекоммуникационные'),
    extraDesc: lang === 'kk' ? 'Бейнеконференцбайланыс қызметтерін ұсыну, Интернет желісіне, деректерді беру арналарына, халықаралық және қалааралық байланысқа и SIP телефониясына қол жеткізу.' : (lang === 'en' ? 'Provision of video conferencing services, access to the Internet, data transmission channels, international and long-distance communication and SIP telephony.' : 'Предоставление услуг видеоконференцсвязи, доступа к сети Интернет, каналам передачи данных, международной и междугородней связи и SIP телефонии.'),
    planPeriod: lang === 'kk' ? '2025 жылғы желтоқсан – 2026 жылғы қаңтар' : (lang === 'en' ? 'December 2025 – January 2026' : 'Декабрь 2025 года – Январь 2026 года'),
    place: lang === 'kk' ? 'Өскемен қ., Республикалық к-сі 9/1' : (lang === 'en' ? 'Ust-Kamenogorsk, 9/1 Respublika str.' : 'г. Усть-Каменогорск, ул. Республиканская 9/1'),
    term: lang === 'kk' ? '01.01.2026 – 31.12.2026 жж.' : (lang === 'en' ? '01.01.2026 – 31.12.2026' : '01.01.2026 – 31.12.2026 гг.'),
    unit: 'SIP trunk',
    quantity: '2',
    payment: lang === 'kk' ? 'Аралық төлем' : (lang === 'en' ? 'Interim payment' : 'Промежуточный платеж'),
    warranty: '',
    fullDesc: lang === 'kk' ? '1) Деректерді беру желісінің істен шыққаннан кейінгі қалыпты жұмысын қалпына келтіру уақыты 7 сағаттан аспауы тиіс.' : (lang === 'en' ? '1) The recovery time for normal operation of the data transmission network after failures should be no more than 7 hours.' : '1) Время восстановления нормальной работы сети передачи данных после сбоев должно быть не более 7 часов.'),
    // Approver fields
    approverPosition: lang === 'kk' ? '«Шығыс Қазақстан филиалының» директоры' : (lang === 'en' ? 'Director of East Kazakhstan Branch' : 'Директор «Восточно-Казахстанского филиала»'),
    approverName: 'Рахимов А.И.',
    approverDate: lang === 'kk' ? '«__» __________ 2025 ж.' : (lang === 'en' ? '"__" __________ 2025' : '«__» __________ 2025 г.')
  });

  const [data, setData] = useState(getInitialData());

  // Update data when language changes if fields are still at defaults
  useEffect(() => {
    setData(getInitialData());
  }, [lang]);

  const updateField = (field: string, value: string) => {
    setData(prev => ({ ...prev, [field]: value }));
  };

  const handleExportWord = () => {
    if (!previewRef.current) return;
    
    // To ensure proper right alignment in Word, we use a table for the header block
    const htmlContent = `
      <div class="approval-header">
        <table border="0" cellspacing="0" cellpadding="0" style="width:100%; border:none;">
          <tr>
            <td style="width:50%; border:none;"></td>
            <td style="width:50%; text-align:left; border:none; font-family:'Times New Roman'; font-size:12pt;">
              <b>${t('tech_approve_title')}:</b><br>
              <b>«Dosjan temir joly» АҚ</b><br>
              <b>${data.approverPosition}</b><br><br>
              _____________________ ${data.approverName}<br>
              ${data.approverDate}
            </td>
          </tr>
        </table>
      </div>
      <div style="text-align:center; font-family:'Times New Roman'; font-size:12pt; font-weight:bold; text-transform:uppercase; margin-top:20pt; margin-bottom:20pt;">
        ${lang === 'kk' ? 'ТЖҚ жоспарланған сатып алу бойынша техникалық ерекшелік' : (lang === 'en' ? 'Technical Specification for Planned TRU Procurements' : 'Техническая спецификация по планируемым закупкам ТРУ')}
      </div>
      <table border="1" cellspacing="0" cellpadding="5" style="width:100%; border-collapse:collapse; font-family:'Times New Roman'; font-size:12pt;">
        <tr><td style="width:40%;"><b>${t('tech_customer')}:</b></td><td style="width:60%;">${data.customer}</td></tr>
        <tr><td><b>${t('tech_subject_type')}:</b></td><td>${data.subjectType}</td></tr>
        <tr><td><b>${t('tech_enstru_code')}:</b></td><td>${data.enstruCode}</td></tr>
        <tr><td><b>${t('tech_enstru_name')}:</b></td><td>${data.enstruName}</td></tr>
        <tr><td><b>${t('tech_short_desc')}:</b></td><td>${data.shortDesc}</td></tr>
        <tr><td><b>${t('tech_extra_desc')}:</b></td><td>${data.extraDesc}</td></tr>
        <tr><td><b>${t('tech_plan_period')}:</b></td><td>${data.planPeriod}</td></tr>
        <tr><td><b>${t('tech_place')}:</b></td><td>${data.place}</td></tr>
        <tr><td><b>${t('tech_term')}:</b></td><td>${data.term}</td></tr>
        <tr><td><b>${t('tech_unit')}:</b></td><td>${data.unit}</td></tr>
        <tr><td><b>${t('tech_quantity')}:</b></td><td>${data.quantity}</td></tr>
        <tr><td><b>${t('tech_payment')}:</b></td><td>${data.payment}</td></tr>
        <tr><td><b>${t('tech_warranty')}:</b></td><td>${data.warranty || ''}</td></tr>
        <tr><td valign="top"><b>${t('tech_full_desc')}:</b></td><td>${data.fullDesc.replace(/\n/g, '<br>')}</td></tr>
      </table>
    `;

    const header = `
      <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head>
        <meta charset="utf-8">
        <style>
          @page WordSection1 { size: 595.3pt 841.9pt; margin: 1.5cm 1.5cm 1.5cm 2.5cm; }
          div.WordSection1 { page: WordSection1; }
          body { font-family: "Times New Roman", serif; font-size: 12pt; color: black; line-height: 1.15; background: white; }
        </style>
      </head>
      <body>
        <div class="WordSection1">
          ${htmlContent}
        </div>
      </body>
      </html>
    `;

    const blob = new Blob(['\ufeff', header], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `TechSpec_${data.enstruCode || 'document'}.doc`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-10 pb-20 animate-in fade-in duration-700">
      
      {/* ACTION BAR */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 bg-white p-6 rounded-[24px] shadow-sm border border-slate-100">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[#0046B5] rounded-2xl flex items-center justify-center text-white">
            <PenTool size={24} />
          </div>
          <div>
            <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">{t('tech_title')}</h2>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{t('tech_desc')}</p>
          </div>
        </div>
        <button onClick={handleExportWord} className="flex items-center gap-3 px-8 py-4 bg-[#0046B5] text-white rounded-2xl font-black text-[11px] uppercase tracking-widest hover:bg-slate-900 transition-all shadow-lg active:scale-95 group">
          <Download size={18} /> {t('tech_generate_doc')}
        </button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-10">
        
        {/* INPUTS PANEL */}
        <div className="xl:col-span-4 space-y-6">
          
          {/* PANEL 1: APPROVER */}
          <div className="apple-card p-6 space-y-5 border border-blue-50/50">
            <div className="flex items-center gap-3 mb-2 pb-3 border-b border-slate-50">
              <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-[#0046B5]">
                <UserCheck size={18} />
              </div>
              <span className="text-[11px] font-black uppercase tracking-widest text-slate-900">{t('tech_approver')}</span>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-[9px] font-black text-slate-400 uppercase ml-1 tracking-wider">{t('tech_approver_pos')}</label>
                <input 
                  type="text" 
                  value={data.approverPosition} 
                  onChange={(e) => updateField('approverPosition', e.target.value)}
                  className="w-full p-3 bg-slate-50 border border-slate-100 rounded-xl text-xs font-semibold outline-none focus:border-[#0046B5] transition-all"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[9px] font-black text-slate-400 uppercase ml-1 tracking-wider">{t('tech_approver_name')}</label>
                <input 
                  type="text" 
                  value={data.approverName} 
                  onChange={(e) => updateField('approverName', e.target.value)}
                  className="w-full p-3 bg-slate-50 border border-slate-100 rounded-xl text-xs font-semibold outline-none focus:border-[#0046B5] transition-all"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[9px] font-black text-slate-400 uppercase ml-1 tracking-wider">{t('tech_approver_date')}</label>
                <input 
                  type="text" 
                  value={data.approverDate} 
                  onChange={(e) => updateField('approverDate', e.target.value)}
                  className="w-full p-3 bg-slate-50 border border-slate-100 rounded-xl text-xs font-semibold outline-none focus:border-[#0046B5] transition-all"
                />
              </div>
            </div>
          </div>

          {/* PANEL 2: TRU CHARACTERISTICS */}
          <div className="apple-card p-6 space-y-5 border border-slate-100">
            <div className="flex items-center gap-3 mb-2 pb-3 border-b border-slate-50">
              <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-[#0046B5]">
                <ClipboardList size={18} />
              </div>
              <span className="text-[11px] font-black uppercase tracking-widest text-slate-900">{t('tech_tru_params')}</span>
            </div>

            <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
              {[
                { label: t('tech_customer'), field: 'customer' },
                { label: t('tech_subject_type'), field: 'subjectType' },
                { label: t('tech_enstru_code'), field: 'enstruCode' },
                { label: t('tech_enstru_name'), field: 'enstruName' },
                { label: t('tech_short_desc'), field: 'shortDesc' },
                { label: t('tech_extra_desc'), field: 'extraDesc', textarea: true },
                { label: t('tech_plan_period'), field: 'planPeriod' },
                { label: t('tech_place'), field: 'place' },
                { label: t('tech_term'), field: 'term' },
                { label: t('tech_unit'), field: 'unit' },
                { label: t('tech_quantity'), field: 'quantity' },
                { label: t('tech_payment'), field: 'payment' },
                { label: t('tech_warranty'), field: 'warranty' },
              ].map((item) => (
                <div key={item.field} className="space-y-1">
                  <label className="text-[9px] font-black text-slate-400 uppercase ml-1 tracking-wider">{item.label}</label>
                  {item.textarea ? (
                    <textarea 
                      value={(data as any)[item.field]} 
                      onChange={(e) => updateField(item.field, e.target.value)}
                      className="w-full p-3 bg-slate-50 border border-slate-100 rounded-xl text-xs font-semibold outline-none focus:border-[#0046B5] resize-none h-24 transition-all"
                    />
                  ) : (
                    <input 
                      type="text" 
                      value={(data as any)[item.field]} 
                      onChange={(e) => updateField(item.field, e.target.value)}
                      className="w-full p-3 bg-slate-50 border border-slate-100 rounded-xl text-xs font-semibold outline-none focus:border-[#0046B5] transition-all"
                    />
                  )}
                </div>
              ))}
              
              <div className="space-y-1">
                <label className="text-[9px] font-black text-slate-400 uppercase ml-1 tracking-wider">{t('tech_full_desc')}</label>
                <textarea 
                  value={data.fullDesc} 
                  onChange={(e) => updateField('fullDesc', e.target.value)}
                  className="w-full p-3 bg-slate-50 border border-slate-100 rounded-xl text-xs font-semibold outline-none focus:border-[#0046B5] resize-none h-40 transition-all"
                />
              </div>
            </div>
          </div>
        </div>

        {/* DOC PREVIEW PANEL */}
        <div className="xl:col-span-8">
          <div className="sticky top-24">
            <div 
              className="bg-white shadow-2xl p-[2.5cm] min-h-[1123px] w-full mx-auto text-black border border-slate-100 overflow-hidden"
              style={{ fontFamily: '"Times New Roman", Times, serif', fontSize: '12pt', lineHeight: '1.15' }}
            >
              {/* APPROVAL BLOCK - UI PREVIEW */}
              <div style={{ marginLeft: '50%', width: '50%', textAlign: 'left', marginBottom: '40pt' }}>
                <p className="font-bold">{t('tech_approve_title')}:</p>
                <p className="font-bold">«Dosjan temir joly» АҚ</p>
                <p className="font-bold">{data.approverPosition}</p>
                <br />
                <p>_____________________ {data.approverName}</p>
                <p>{data.approverDate}</p>
              </div>

              {/* TITLE */}
              <div style={{ textAlign: 'center', width: '100%', marginBottom: '20pt' }}>
                <p style={{ fontWeight: 'bold', fontSize: '12pt', textTransform: 'uppercase', textAlign: 'center' }}>
                  {lang === 'kk' ? 'ТЖҚ жоспарланған сатып алу бойынша техникалық ерекшелік' : (lang === 'en' ? 'Technical Specification for Planned TRU Procurements' : 'Техническая спецификация по планируемым закупкам ТРУ')}
                </p>
              </div>

              {/* MAIN TABLE */}
              <table style={{ width: '100%', borderCollapse: 'collapse', border: '1pt solid black' }}>
                <tbody>
                  {[
                    { label: t('tech_customer'), value: data.customer },
                    { label: t('tech_subject_type'), value: data.subjectType },
                    { label: t('tech_enstru_code'), value: data.enstruCode },
                    { label: t('tech_enstru_name'), value: data.enstruName },
                    { label: t('tech_short_desc'), value: data.shortDesc },
                    { label: t('tech_extra_desc'), value: data.extraDesc },
                    { label: t('tech_plan_period'), value: data.planPeriod },
                    { label: t('tech_place'), value: data.place },
                    { label: t('tech_term'), value: data.term },
                    { label: t('tech_unit'), value: data.unit },
                    { label: t('tech_quantity'), value: data.quantity },
                    { label: t('tech_payment'), value: data.payment },
                    { label: t('tech_warranty'), value: data.warranty || '' },
                  ].map((row, i) => (
                    <tr key={i}>
                      <td style={{ width: '40%', border: '1pt solid black', padding: '5pt', verticalAlign: 'top', fontWeight: 'bold' }}>{row.label}:</td>
                      <td style={{ width: '60%', border: '1pt solid black', padding: '5pt', verticalAlign: 'top' }}>{row.value}</td>
                    </tr>
                  ))}
                  <tr>
                    <td style={{ border: '1pt solid black', padding: '5pt', verticalAlign: 'top', fontWeight: 'bold' }}>{t('tech_full_desc')}:</td>
                    <td style={{ border: '1pt solid black', padding: '5pt', verticalAlign: 'top' }}>
                      {data.fullDesc.split('\n').map((line, idx) => (
                        <div key={idx} style={{ marginBottom: '4pt' }}>{line}</div>
                      ))}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            {/* INVISIBLE EXPORT TEMPLATE REF (Not used but kept for logic safety) */}
            <div ref={previewRef} style={{ display: 'none' }}></div>
          </div>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
      `}</style>
    </div>
  );
};

export default TechSpecView;
