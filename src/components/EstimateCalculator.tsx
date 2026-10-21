import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { Calculator, Clock, Zap, ArrowRight, Shield } from 'lucide-react';

export const EstimateCalculator: React.FC = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [words, setWords] = useState<number>(5000);

  const getTurnaround = (count: number) => {
    if (count <= 2000) {
      return { standard: '1 – 2 Business Days', urgent: 'Under 24 Hours' };
    } else if (count <= 6000) {
      return { standard: '2 – 3 Business Days', urgent: '24 – 36 Hours' };
    } else if (count <= 12000) {
      return { standard: '4 – 6 Business Days', urgent: '48 – 72 Hours' };
    } else if (count <= 20000) {
      return { standard: '7 – 10 Business Days', urgent: '3 – 5 Days (Sprint)' };
    } else {
      return { standard: '10 – 14 Business Days', urgent: 'Custom Dedicated Team' };
    }
  };

  const times = getTurnaround(words);

  const handleProceed = () => {
    navigate(`/quote?words=${words}`);
  };

  return (
    <div className="w-full bg-white border border-[#E8E2D5] rounded-2xl p-6 sm:p-8 shadow-sm">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-[#B79656] mb-1">
            <Calculator className="w-4 h-4" />
            <span>{language === 'fa' ? 'محاسبه‌گر هوشمند زمان تحویل' : 'Turnaround & Volume Estimation'}</span>
          </div>
          <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#22272B]">
            {language === 'fa' ? 'برآورد زمان تحویل بر اساس حجم کلمات' : 'Estimate Delivery Timeline'}
          </h3>
        </div>

        <div className="text-left md:text-right">
          <span className="text-xs text-[#78828A] block">
            {language === 'fa' ? 'حجم انتخاب‌شده:' : 'Selected Word Count:'}
          </span>
          <span className="font-editorial text-2xl sm:text-3xl font-bold text-[#B79656] tabular-nums">
            {words.toLocaleString()} {language === 'fa' ? 'کلمه' : 'words'}
          </span>
        </div>
      </div>

      {/* Slider */}
      <div className="space-y-3 mb-6">
        <input
          type="range"
          min="500"
          max="25000"
          step="500"
          value={words}
          onChange={(e) => setWords(parseInt(e.target.value))}
          className="w-full h-2.5 bg-[#EAE2D6] rounded-lg appearance-none cursor-pointer accent-[#B79656]"
        />
        <div className="flex justify-between text-[11px] text-[#78828A] font-medium">
          <span>500 {language === 'fa' ? 'کلمه (کوتاه)' : 'words (Brief)'}</span>
          <span>5,000 {language === 'fa' ? 'کلمه' : 'words'}</span>
          <span>12,000 {language === 'fa' ? 'کلمه' : 'words'}</span>
          <span>25,000+ {language === 'fa' ? 'کلمه (جامع)' : 'words (Enterprise)'}</span>
        </div>
      </div>

      {/* Timeline Estimates Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div className="bg-[#F8F6F1] border border-[#E8E2D5] rounded-xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#EAE2D6] text-[#22272B] flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider font-semibold text-[#78828A] block">
                {language === 'fa' ? 'تحویل استاندارد دانشگاهی' : 'Standard Delivery Track'}
              </span>
              <span className="text-sm sm:text-base font-bold text-[#22272B]">
                {times.standard}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-[#FDFCF9] border border-[#B79656]/40 rounded-xl p-4 flex items-center justify-between ring-1 ring-[#B79656]/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#B79656] text-white flex items-center justify-center shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider font-semibold text-[#8C6F34] block">
                {language === 'fa' ? 'تحویل اولویت‌دار و فوری' : 'Urgent Expedited Track'}
              </span>
              <span className="text-sm sm:text-base font-bold text-[#B79656]">
                {times.urgent}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-[#E8E2D5]">
        <div className="flex items-center gap-2 text-xs text-[#78828A]">
          <Shield className="w-4 h-4 text-[#788A78]" />
          <span>
            {language === 'fa'
              ? 'امضای قرارداد رازداری دوجانبه (NDA) پیش از دریافت نهایی فایل‌ها'
              : 'Includes binding bilateral Non-Disclosure Agreement (NDA) on request'}
          </span>
        </div>

        <button
          onClick={handleProceed}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#B79656] hover:bg-[#C4A466] text-white text-xs font-semibold shadow-sm transition-all"
        >
          <span>{language === 'fa' ? 'ثبت سفارش با این حجم' : 'Proceed with this Scope'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default EstimateCalculator;
