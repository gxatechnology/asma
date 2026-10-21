import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { CheckCircle, ShieldCheck, Sparkles } from 'lucide-react';

interface SampleData {
  id: string;
  categoryName: string;
  categoryNameFa: string;
  scope: string;
  scopeFa: string;
  enTitle: string;
  faTitle: string;
  enText: string;
  faText: string;
  keyTerms: { en: string; fa: string; note: string }[];
  complianceStandard: string;
}

const samples: SampleData[] = [
  {
    id: 'corp',
    categoryName: 'Corporate Charters & Governance',
    categoryNameFa: 'اساسنامه‌های شرکتی و حاکمیت شرکتی',
    scope: 'Commercial Law · Board Duties · Article 14.3',
    scopeFa: 'حقوق تجارت · وظایف هیئت‌مدیره · ماده ۱۴.۳',
    enTitle: "Fiduciary Duty & Shareholder Equity Protection",
    faTitle: "اصل امانت‌داری قانونی و صیانت از حقوق صاحبان سهام",
    enText: "The Board of Directors shall exercise uncompromised fiduciary duty in preserving shareholder equity, mandating that quarterly financial representations conform strictly to standard international reporting practices and verified third-party audits.",
    faText: "«هیئت‌مدیره موظف است با رعایت کامل اصل امانت‌داری قانونی، در حفظ حقوق صاحبان سهام اهتمام ورزد و الزام نماید که صورت‌های مالی سه‌ماهه دقیقاً منطبق بر استانداردهای گزارشگری بین‌المللی و گزارش‌های حسابرسی مستقل تنظیم گردد.»",
    keyTerms: [
      { en: 'Fiduciary Duty', fa: 'اصل امانت‌داری قانونی', note: 'Avoids weak translation like وظیفه معتمدی; preserves high legal accountability under commercial statutes.' },
      { en: 'Shareholder Equity', fa: 'حقوق صاحبان سهام', note: 'Standard Iranian statutory accounting term under INAS.' },
      { en: 'Third-party Audits', fa: 'گزارش‌های حسابرسی مستقل', note: 'Aligned with Iranian Audit Organization lexicon.' },
    ],
    complianceStandard: "Harmonized with Iranian Commercial Code & International Corporate Governance Principles",
  },
  {
    id: 'fin',
    categoryName: 'Audited Financial Statements',
    categoryNameFa: 'صورت‌های مالی حسابرسی‌شده (IFRS)',
    scope: 'IAS 12 · Deferred Taxation · Note 4.2',
    scopeFa: 'استاندارد حسابداری ۱۲ · مالیات انتقالی · یادداشت ۴.۲',
    enTitle: "Independent Auditor's Note on Deferred Taxation",
    faTitle: "یادداشت حسابرس مستقل در خصوص دارایی‌های مالیات انتقالی",
    enText: "Deferred tax assets are recognized for unused tax losses, tax credits, and deductible temporary differences to the extent that it is probable that future taxable profits will be available against which they can be utilized. Assessment of future profitability relies on management projections approved by the Board.",
    faText: "«دارایی‌های مالیات انتقالی بابت زیان‌های مالیاتی استفاده‌نشده، اعتبارات مالیاتی و تفاوت‌های موقت مشمول کسر تا میزانی شناسایی می‌شوند که احتمال دسترسی به سودهای مشمول مالیات آتی جهت استفاده از این اقلام وجود داشته باشد. ارزیابی سودآوری آتی مبتنی بر پیش‌بینی‌های مدیریتی مصوب هیئت‌مدیره است.»",
    keyTerms: [
      { en: 'Deferred Tax Assets', fa: 'دارایی‌های مالیات انتقالی', note: 'Statutory equivalent under Iranian Standard No. 20.' },
      { en: 'Deductible Temporary Differences', fa: 'تفاوت‌های موقت مشمول کسر', note: 'Precise accounting concept distinguishing timing differences from permanent exclusions.' },
      { en: 'Taxable Profits', fa: 'سودهای مشمول مالیات', note: 'Regulatory nomenclature for fiscal authority declarations.' },
    ],
    complianceStandard: "Verified against IFRS IAS 12 and Iranian Statutory Accounting Standard No. 20",
  },
  {
    id: 'tech',
    categoryName: 'Software & RTL Localization',
    categoryNameFa: 'بومی‌سازی نرم‌افزار و رابط کاربری راست‌به‌چپ',
    scope: 'SaaS Platform · UI Microcopy · Settings & Authentication',
    scopeFa: 'پلتفرم ابری · متن‌های خرد کاربری · ورود و پیکربندی',
    enTitle: "Authentication & Workspace Orchestration Strings",
    faTitle: "بومی‌سازی اصطلاحات احراز هویت و مدیریت دسترسی‌ها",
    enText: "Configure multi-factor authentication to safeguard institutional telemetry. Reverting access rights will immediately terminate active enterprise sessions across all federated tenants.",
    faText: "«جهت حفاظت از داده‌های سازمانی، ورود دومرحله‌ای را فعال نمایید. لغو سطوح دسترسی منجر به ابطال بلادرنگ نشست‌های فعال در تمامی بخش‌های یکپارچه‌شده خواهد شد.»",
    keyTerms: [
      { en: 'Multi-factor authentication', fa: 'ورود دومرحله‌ای', note: 'Standard native Persian UX pattern instead of cumbersome transliteration.' },
      { en: 'Federated tenants', fa: 'بخش‌های یکپارچه‌شده', note: 'Contextual Persian transcreation maintaining software clarity.' },
      { en: 'Terminate active sessions', fa: 'ابطال بلادرنگ نشست‌های فعال', note: 'Accurate technical and administrative precision.' },
    ],
    complianceStandard: "Optimized for Right-to-Left (RTL) layout symmetry and zero string truncation",
  },
];

export const BilingualComparison: React.FC = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>('corp');

  const currentSample = samples.find((s) => s.id === activeTab) || samples[0];

  return (
    <div className="w-full bg-white border border-[#E8E2D5] rounded-2xl shadow-sm overflow-hidden">
      {/* Category Segmented Selector */}
      <div className="bg-[#F8F6F1] px-4 sm:px-6 py-3.5 border-b border-[#E8E2D5] flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#EAE2D6] rounded-xl">
          {samples.map((sample) => (
            <button
              key={sample.id}
              onClick={() => setActiveTab(sample.id)}
              className={`px-3 sm:px-4 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeTab === sample.id
                  ? 'bg-[#22272B] text-white shadow-sm'
                  : 'text-[#4A5258] hover:text-[#22272B] hover:bg-white/50'
              }`}
            >
              {language === 'fa' ? sample.categoryNameFa : sample.categoryName}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 text-xs text-[#788A78] font-medium">
          <CheckCircle className="w-3.5 h-3.5" />
          <span>{language === 'fa' ? 'تطبیق مفهومی و انطباق آکادمیک' : 'Terminologically Mapped & Audited'}</span>
        </div>
      </div>

      {/* Parallel Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x lg:divide-x-reverse divide-[#E8E2D5]">
        {/* Left Pane: English Source */}
        <div className="p-6 sm:p-8 flex flex-col justify-between bg-white text-left" dir="ltr">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-bold tracking-wider uppercase bg-[#22272B] text-white">
                EN Source Manuscript
              </span>
              <span className="text-xs text-[#78828A] font-medium">
                {currentSample.scope}
              </span>
            </div>

            <h4 className="font-editorial text-lg sm:text-xl font-bold text-[#22272B] mb-3">
              {currentSample.enTitle}
            </h4>

            <blockquote className="text-sm sm:text-base text-[#3A4248] leading-relaxed mb-6 font-serif italic border-l-2 border-[#B79656] pl-4">
              "{currentSample.enText}"
            </blockquote>

            {/* Terminology Breakdown */}
            <div className="bg-[#F8F6F1] border border-[#E8E2D5] rounded-xl p-4">
              <span className="text-[11px] uppercase tracking-wider font-bold text-[#B79656] block mb-2">
                Key Terminology Concordance
              </span>
              <div className="space-y-2">
                {currentSample.keyTerms.map((term, i) => (
                  <div key={i} className="text-xs">
                    <span className="font-semibold text-[#22272B]">{term.en}</span>
                    <span className="text-[#8C6F34] mx-1.5">→</span>
                    <span className="font-bold text-[#788A78] font-persian" dir="rtl">{term.fa}</span>
                    <p className="text-[11px] text-[#5A6268] mt-0.5">{term.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 pt-3 border-t border-[#E8E2D5] flex items-center gap-2 text-xs text-[#78828A]">
            <ShieldCheck className="w-4 h-4 text-[#788A78]" />
            <span>Strict alignment with standard international source diction</span>
          </div>
        </div>

        {/* Right Pane: Persian Target (Authentic RTL Vazirmatn) */}
        <div className="p-6 sm:p-8 flex flex-col justify-between bg-[#FDFCF9] text-right" dir="rtl">
          <div>
            <div className="flex items-center justify-between mb-3 flex-row-reverse">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-bold tracking-wider uppercase bg-[#B79656] text-white">
                متن برگردانده‌شده تخصصی (FA)
              </span>
              <span className="text-xs text-[#78828A] font-medium">
                {currentSample.scopeFa}
              </span>
            </div>

            <h4 className="font-persian text-lg sm:text-xl font-bold text-[#22272B] mb-3">
              {currentSample.faTitle}
            </h4>

            <blockquote className="text-base sm:text-lg text-[#22272B] leading-relaxed mb-6 font-persian border-r-2 border-[#B79656] pr-4 font-medium">
              {currentSample.faText}
            </blockquote>

            <div className="bg-[#F8F6F1] border border-[#E8E2D5] rounded-xl p-4 text-right">
              <span className="text-[11px] uppercase tracking-wider font-bold text-[#B79656] block mb-2">
                انطباق با استانداردهای رسمی ایران
              </span>
              <p className="text-xs text-[#3A4248] leading-relaxed font-persian">
                در این بخش، کلیه مفاهیم به نحوی برگردانده شده‌اند که در صورت ارجاع به محاکم قضایی، مراجع مالیاتی و گزارش‌های حسابرسی رسمی، اعتبار حقوقی متن مبدأ به‌طور کامل محفوظ بماند.
              </p>
            </div>
          </div>

          <div className="mt-6 pt-3 border-t border-[#E8E2D5] flex items-center justify-end gap-2 text-xs text-[#78828A]">
            <span>{currentSample.complianceStandard}</span>
            <Sparkles className="w-4 h-4 text-[#B79656]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BilingualComparison;
