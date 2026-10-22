import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { Calculator, Clock, Zap, ArrowRight, ShieldCheck, FileText } from 'lucide-react';

export const EstimateCalculator: React.FC = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [words, setWords] = useState<number>(3000);

  const getScope = (count: number) => {
    if (count <= 2000) {
      return {
        label: language === 'fa' ? 'مقاله یا یادداشت کوتاه' : 'Short Article / Brief Essay',
        desc: language === 'fa' ? 'مناسب برای یادداشت‌ها، مقالات کوتاه و متون خلاصه' : 'Suited for concise articles, opinion pieces, and summary briefs',
      };
    } else if (count <= 6000) {
      return {
        label: language === 'fa' ? 'مقاله استاندارد یا تحلیل کامل' : 'Standard Article / Full Essay',
        desc: language === 'fa' ? 'حجم متداول مقالات تحلیلی، متون آموزشی و نوشتارهای عمومی' : 'Standard length for full-length articles, analytical essays, and general texts',
      };
    } else if (count <= 15000) {
      return {
        label: language === 'fa' ? 'مقاله بلند یا متن چندبخشی' : 'Extended Article / Multi-Section Text',
        desc: language === 'fa' ? 'مناسب برای گزارش‌های تفصیلی، مقالات جامع و متون گسترده' : 'Suited for comprehensive reports, in-depth articles, and multi-part documents',
      };
    } else {
      return {
        label: language === 'fa' ? 'متن بسیار بلند یا مجموعه مقالات' : 'Long-Form Document / Article Series',
        desc: language === 'fa' ? 'پروژه‌های بلند با امکان تحویل مرحله‌ای بر اساس فصول' : 'Extended volume with milestone delivery options by chapter or section',
      };
    }
  };

  const scope = getScope(words);

  const handleProceed = () => {
    navigate(`/quote?words=${words}`);
  };

  return (
    <div className="w-full bg-white border border-[#E8E2D5] rounded-2xl p-6 sm:p-8 shadow-sm">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-[#B79656] mb-1">
            <Calculator className="w-4 h-4" />
            <span>{language === 'fa' ? 'راهنمای حجم متن' : 'Volume & Scope Guide'}</span>
          </div>
          <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#22272B]">
            {language === 'fa' ? 'بررسی مقیاس متن بر اساس حجم کلمات' : 'Evaluate Word Count & Scope'}
          </h3>
        </div>

        <div className="text-left md:text-right">
          <span className="text-xs text-[#78828A] block">
            {language === 'fa' ? 'حجم انتخاب‌شده:' : 'Selected Volume:'}
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
          onChange={(e) => setWords(parseInt(e.target.value, 10))}
          className="w-full h-2.5 bg-[#EAE2D6] rounded-lg appearance-none cursor-pointer accent-[#B79656]"
          aria-label={language === 'fa' ? 'انتخاب تعداد کلمات متن' : 'Select word count'}
        />
        <div className="flex justify-between text-[11px] text-[#78828A] font-medium">
          <span>500 {language === 'fa' ? 'کلمه (کوتاه)' : 'words (Brief)'}</span>
          <span>5,000 {language === 'fa' ? 'کلمه' : 'words'}</span>
          <span>12,000 {language === 'fa' ? 'کلمه' : 'words'}</span>
          <span>25,000+ {language === 'fa' ? 'کلمه (طولانی)' : 'words (Extended)'}</span>
        </div>
      </div>

      {/* Scope Classification Card */}
      <div className="mb-6 p-4 rounded-xl bg-[#F8F6F1] border border-[#E8E2D5] flex items-start gap-3">
        <FileText className="w-5 h-5 text-[#B79656] shrink-0 mt-0.5" />
        <div>
          <span className="text-xs uppercase tracking-wider font-semibold text-[#8C6F34] block">
            {scope.label}
          </span>
          <p className="text-xs text-[#22272B]/75 mt-0.5 leading-relaxed">
            {scope.desc}
          </p>
        </div>
      </div>

      {/* Timeline Expectations */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div className="premium-card premium-card-ivory p-4">
          <div className="flex items-center gap-2 mb-1">
            <Clock className="w-4 h-4 text-[#788A78]" />
            <span className="text-xs uppercase tracking-wider font-bold text-[#22272B]">
              {language === 'fa' ? 'برنامه تحویل استاندارد' : 'Standard Delivery Track'}
            </span>
          </div>
          <p className="text-xs text-[#22272B]/70 leading-relaxed">
            {language === 'fa'
              ? 'زمان تحویل بر اساس حجم دقیق، موضوع و بررسی متن توافق می‌شود.'
              : 'Turnaround agreed based on document length and subject review.'}
          </p>
        </div>

        <div className="premium-card premium-card-ivory p-4 border-[#B79656]/40">
          <div className="flex items-center gap-2 mb-1">
            <Zap className="w-4 h-4 text-[#B79656]" />
            <span className="text-xs uppercase tracking-wider font-bold text-[#8C6F34]">
              {language === 'fa' ? 'هماهنگی فوری و با اولویت' : 'Priority Scheduling'}
            </span>
          </div>
          <p className="text-xs text-[#22272B]/70 leading-relaxed">
            {language === 'fa'
              ? 'امکان هماهنگی زمان‌بندی فشرده با توافق و بررسی قبلی متن فراهم است.'
              : 'Expedited turnaround available upon prior review and mutual agreement.'}
          </p>
        </div>
      </div>

      {/* Bottom info & Action */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-[#E8E2D5] text-xs text-[#5A6268]">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#788A78] shrink-0" />
          <span>
            {language === 'fa'
              ? 'بررسی محرمانه متن و پاسخگویی مستقیم توسط مترجم'
              : 'Confidential handling with direct translator communication'}
          </span>
        </div>

        <button
          onClick={handleProceed}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#22272B] hover:bg-[#B79656] text-white text-xs font-semibold transition-colors shrink-0"
        >
          <span>{language === 'fa' ? 'ثبت استعلام با این حجم' : 'Inquire with this Volume'}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

export default EstimateCalculator;
