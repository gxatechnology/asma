import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calculator, 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  FileCheck, 
  Building2, 
  AlertCircle 
} from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

export default function FinancialTranslationPage() {
  const { lang, isRTL } = useLanguage();

  const sampleConcordances = [
    {
      source: 'Statement of Financial Position',
      target: 'صورت وضعیت مالی (ترازنامه)',
      note: 'IAS 1 standard designation in Persian audited reports',
    },
    {
      source: 'Impairment of Non-Current Assets',
      target: 'کاهش ارزش انباشته دارایی‌های غیرجاری',
      note: 'Crucial distinction from standard depreciation (استهلاک)',
    },
    {
      source: 'Contingent Liabilities and Commitments',
      target: 'بدهی‌ها و تعهدات احتمالی',
      note: 'Auditor disclosure note requiring strict legal classification',
    },
    {
      source: 'Comprehensive Income Attributable to Equity Holders',
      target: 'سود (زیان) جامع قابل انتساب به سهامداران اصلی',
      note: 'Equity attribution under IFRS 10 / Consolidated Statements',
    },
  ];

  return (
    <div className="space-y-20 py-8 md:py-12">
      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B79656]">
            <span className="w-8 h-[1px] bg-[#B79656]"></span>
            <span>{lang === 'fa' ? 'حوزه تخصصی ۱' : 'Specialized Practice Discipline'}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-serif text-[#22272B] leading-tight">
            {lang === 'fa' ? (
              <>
                ترجمه مالی و گزارشگری <br />
                <span className="italic text-[#B79656]">بر اساس استانداردهای بین‌المللی IFRS.</span>
              </>
            ) : (
              <>
                Financial & IFRS Translation <br />
                <span className="italic text-[#B79656]">For Corporate Audits & Capital Markets.</span>
              </>
            )}
          </h1>

          <p className="text-base sm:text-lg text-[#22272B]/80 font-sans leading-relaxed">
            {lang === 'fa' ? (
              'ترجمه دقیق صورت‌های مالی، ترازنامه‌ها، یادداشت‌های توضیحی حسابرسی، گزارش‌های ارزیابی سهام و امیدنامه‌های عرضه اولیه با انطباق کامل با استانداردهای سازمان حسابرسی ایران و IFRS.'
            ) : (
              'Meticulous translation of financial statements, balance sheets, cash flow models, and auditor footnotes calibrated for foreign investors, statutory filings, and multi-currency reporting.'
            )}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link
              to="/quote?service=financial"
              className="px-6 py-3 bg-[#22272B] text-white hover:bg-[#B79656] transition-colors text-xs sm:text-sm font-medium shadow-sm"
            >
              {lang === 'fa' ? 'استعلام قیمت ترجمه صورت‌های مالی' : 'Request Financial Translation Quote'}
            </Link>
            <Link
              to="/portfolio/alborz-holdings-financial-audit"
              className="px-5 py-3 border border-[#22272B]/20 text-[#22272B] hover:border-[#B79656] text-xs sm:text-sm font-medium"
            >
              {lang === 'fa' ? 'مشاهده نمونه پرونده البرز هلدینگ' : 'View Case Study: Alborz Holdings'}
            </Link>
          </div>
        </div>
      </section>

      {/* CASE SPOTLIGHT & AUTHENTIC IMAGE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#22272B]/10 p-8 md:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-5">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#B79656] font-semibold">
                {lang === 'fa' ? 'پرونده مستند و نمونه عینی' : 'Documented Benchmark Sample'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#22272B]">
                {lang === 'fa' 
                  ? 'صورت وضعیت مالی شرکت البرز هلدینگ (سهامی خاص)' 
                  : 'Alborz Holdings P.J.S.C. Audited Financial Statements'}
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-[#22272B]/80 font-sans leading-relaxed">
              {lang === 'fa' ? (
                'در گزارش‌های مالی، ترجمه سطرها و اعداد نیازمند انضباط محاسباتی است. جدول‌های چندستونی، یادداشت‌های پیوست و نسبت‌های مالی باید بدون جابجایی علائم اعشاری و با کاربرد دقیق واژگان معادل در زبان مقصد ارائه شوند.'
              ) : (
                'Translating corporate financial statements requires absolute structural fidelity. Multi-column financial schedules, comparative prior-year columns, and cross-referenced footnote disclosures must retain their exact mathematical relationships and standardized Persian accounting terminology.'
              )}
            </p>

            <div className="space-y-2 pt-2 border-t border-[#22272B]/10 text-xs text-[#22272B]/75">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#788A78]" />
                <span>{lang === 'fa' ? 'حفظ کامل ساختار جداول اکسل و قالب‌های PDF' : 'Exact Excel spreadsheet and PDF table alignment'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#788A78]" />
                <span>{lang === 'fa' ? 'تطبیق واژگان با استانداردهای مصوب سازمان حسابرسی ایران' : 'Concordance with Iranian Audit Organization official terminology'}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative bg-[#F8F6F1] p-3 border border-[#22272B]/10 shadow-md">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/assets/aistudio/Image_2_fe0de90b.jpeg"
                  alt="Alborz Holdings P.J.S.C. Audited Statement of Financial Position"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="pt-3 px-1 flex items-center justify-between text-[11px] text-[#22272B]/60 font-mono">
                <span>Alborz Holdings P.J.S.C. (Audited Draft)</span>
                <span>IFRS / INAS Concordance</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* TERMINOLOGY CONCORDANCE TABLE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="max-w-2xl space-y-2">
          <h2 className="text-2xl sm:text-3xl font-serif text-[#22272B]">
            {lang === 'fa' ? 'جدول تطبیقی اصطلاحات کلیدی مالی' : 'Key Financial Terminology Concordance'}
          </h2>
          <p className="text-xs sm:text-sm text-[#22272B]/70 font-sans">
            {lang === 'fa' 
              ? 'نمونه‌ای از دقت واژه‌گزینی در اسناد مالی جهت جلوگیری از خطاهای تفسیری.'
              : 'Examples of specialized precision applied to prevent regulatory and fiscal ambiguity.'}
          </p>
        </div>

        <div className="bg-white border border-[#22272B]/10 overflow-hidden shadow-sm">
          <div className="divide-y divide-[#22272B]/10">
            {sampleConcordances.map((item, idx) => (
              <div key={idx} className="p-4 sm:p-5 grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
                <div className="md:col-span-4 font-mono text-xs sm:text-sm font-semibold text-[#22272B]">
                  {item.source}
                </div>
                <div className="md:col-span-4 font-serif text-sm sm:text-base font-bold text-[#B79656]" dir="rtl">
                  {item.target}
                </div>
                <div className="md:col-span-4 text-xs text-[#22272B]/60 font-sans">
                  {item.note}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY MACHINE TRANSLATION FAILS FINANCIAL REPORTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 bg-[#22272B] text-white space-y-6">
          <div className="flex items-center gap-3">
            <AlertCircle className="w-6 h-6 text-[#B79656]" />
            <h3 className="text-xl sm:text-2xl font-serif">
              {lang === 'fa' ? 'چرا ترجمه ماشینی صورت‌های مالی خطرآفرین است؟' : 'Why Generic Machine Translation Fails Financial Disclosures'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-white/80 font-sans leading-relaxed">
            <div className="space-y-2">
              <h4 className="font-semibold text-white text-sm">
                {lang === 'fa' ? '۱. اشتباه در تمایز بدهی و تعهد' : '1. Inability to Discern Liability vs Provision'}
              </h4>
              <p>
                {lang === 'fa'
                  ? 'موتورهای هوش مصنوعی واژه Provision را به ذخیره ترجمه می‌کنند در حالی که در استانداردهای جدید به عنوان «تعهد برآوردی» شناخته می‌شود.'
                  : 'AI engines routinely translate "Provision" as generic reserve rather than the required IFRS designation of estimated legal obligations.'}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-white text-sm">
                {lang === 'fa' ? '۲. به هم ریختگی قالب جداول' : '2. Broken Tabular Formatting & Numbers'}
              </h4>
              <p>
                {lang === 'fa'
                  ? 'جابجایی اعداد منفی (که در پرانتز قرار دارند) یا ممیزهای اعشاری می‌تواند صورت مالی را غیرقابل استفاده کند.'
                  : 'Parenthetical negative values, footnote references, and multi-tier subtotaling become scrambled during automated imports.'}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-white text-sm">
                {lang === 'fa' ? '۳. نقض محرمانگی اطلاعات بورس' : '3. Critical Breach of Market Confidentiality'}
              </h4>
              <p>
                {lang === 'fa'
                  ? 'بارگذاری پیش‌نویس صورت‌های مالی شرکت‌ها در ابزارهای عمومی باعث افشای اطلاعات نهانی پیش از انتشار رسمی خواهد شد.'
                  : 'Uploading unannounced earnings or audit reports to free online translation tools creates grave insider trading and confidentiality liabilities.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h2 className="text-3xl font-serif text-[#22272B]">
          {lang === 'fa' ? 'اسناد مالی خود را با اطمینان کامل به ما بسپارید' : 'Entrust Your Financial Disclosures to an M.A. Translation Scholar'}
        </h2>
        <p className="text-sm text-[#22272B]/75 max-w-xl mx-auto font-sans">
          {lang === 'fa' 
            ? 'پیش از ارسال اسناد، توافق‌نامه رسمی عدم افشا (NDA) تقدیم شما خواهد شد.'
            : 'All documents are reviewed under strict non-disclosure. Fast turnaround with detailed concordance notes.'}
        </p>
        <div className="pt-2">
          <Link
            to="/quote?service=financial"
            className="px-8 py-3.5 bg-[#B79656] text-white hover:bg-[#22272B] transition-colors font-medium text-xs sm:text-sm inline-flex items-center gap-2"
          >
            <span>{lang === 'fa' ? 'شروع استعلام و بارگذاری اسناد مالی' : 'Start Financial Quote'}</span>
            <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
          </Link>
        </div>
      </section>
    </div>
  );
}
