import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileCheck, 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  Layers, 
  Scale, 
  ExternalLink 
} from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

export default function AccountingTranslationPage() {
  const { lang, isRTL } = useLanguage();

  const accountingAreas = [
    {
      title: lang === 'fa' ? 'گزارش‌های حسابرسی مستقل' : 'Independent Statutory Audit Reports',
      desc: lang === 'fa' 
        ? 'بندهای اظهارنظر مشروط، عدم اظهارنظر، تاکید بر مطلب خاص و ارزیابی تداوم فعالیت بر اساس استانداردهای بین‌المللی حسابرسی (ISA).'
        : 'Qualified opinions, disclaimers, emphasis of matter paragraphs, and going-concern risk evaluations under International Standards on Auditing (ISA).',
    },
    {
      title: lang === 'fa' ? 'اسناد قیمت‌گذاری انتقالی (Transfer Pricing)' : 'Transfer Pricing Documentation & Master Files',
      desc: lang === 'fa'
        ? 'پرونده‌های مستندسازی معاملات با اشخاص وابسته بر اساس دستورالعمل‌های OECD و قوانین مالیاتی محلی.'
        : 'Cross-border intercompany transaction documentation, benchmark comparability studies, and OECD guidelines alignment.',
    },
    {
      title: lang === 'fa' ? 'دفاتر کل و اسناد تطبیق حساب' : 'General Ledgers & Reconciliation Schedules',
      desc: lang === 'fa'
        ? 'تطبیق حساب‌های بین شرکتی در شرکت‌های چندملیتی و یکپارچه‌سازی کدینگ حساب‌ها.'
        : 'Intercompany reconciliation schedules, multi-entity ledger mappings, and chart of accounts translation for ERP migrations.',
    },
    {
      title: lang === 'fa' ? 'اظهارنامه‌های مالیاتی و دادرسی مالیاتی' : 'Tax Declarations & Statutory Appeals',
      desc: lang === 'fa'
        ? 'ترجمه اوراق تشخیص مالیات، اسناد اعتراض و گزارش‌های مالیات بر ارزش افزوده (VAT).'
        : 'Corporate income tax filings, VAT reconciliations, double taxation relief petitions, and statutory audit objection briefs.',
    },
  ];

  return (
    <div className="space-y-20 py-8 md:py-12">
      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B79656]">
            <span className="w-8 h-[1px] bg-[#B79656]"></span>
            <span>{lang === 'fa' ? 'حوزه تخصصی ۲' : 'Specialized Practice Discipline'}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-serif text-[#22272B] leading-tight">
            {lang === 'fa' ? (
              <>
                ترجمه تخصصی حسابداری و حسابرسی <br />
                <span className="italic text-[#B79656]">منطبق با مراجع حسابرسی ایران و جهان.</span>
              </>
            ) : (
              <>
                Accounting & Statutory Audit Translation <br />
                <span className="italic text-[#B79656]">Calibrated for Auditors & Regulators.</span>
              </>
            )}
          </h1>

          <p className="text-base sm:text-lg text-[#22272B]/80 font-sans leading-relaxed">
            {lang === 'fa' ? (
              'ترجمه تخصصی اسناد حسابرسی قانونی، سرفصل‌های دفتر کل، اظهارنامه‌های مالیاتی بین‌المللی و اسناد ارزیابی ریسک با تضمین انطباق با واژه‌نامه‌های مصوب جامعه حسابداران رسمی ایران (IACPA).'
            ) : (
              'Specialized translation of statutory audit opinions, general ledgers, tax disclosures, and transfer pricing studies. Verified against national and international accounting terminologies.'
            )}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link
              to="/quote?service=accounting"
              className="px-6 py-3 bg-[#22272B] text-white hover:bg-[#B79656] transition-colors text-xs sm:text-sm font-medium shadow-sm"
            >
              {lang === 'fa' ? 'استعلام قیمت اسناد حسابرسی' : 'Request Accounting Translation Quote'}
            </Link>
            <Link
              to="/portfolio"
              className="px-5 py-3 border border-[#22272B]/20 text-[#22272B] hover:border-[#B79656] text-xs sm:text-sm font-medium"
            >
              {lang === 'fa' ? 'مشاهده نمونه کارهای مرتبط' : 'Browse Related Case Studies'}
            </Link>
          </div>
        </div>
      </section>

      {/* CORE PRACTICES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {accountingAreas.map((area, idx) => (
            <div key={idx} className="bg-white border border-[#22272B]/10 p-8 space-y-3 shadow-sm hover:border-[#B79656] transition-colors">
              <span className="text-xs font-mono font-bold text-[#B79656]">0{idx + 1}.</span>
              <h3 className="text-xl font-serif font-semibold text-[#22272B]">
                {area.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#22272B]/75 leading-relaxed font-sans">
                {area.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* METHODOLOGY & STANDARDS */}
      <section className="bg-white py-16 border-y border-[#22272B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B79656]">
              {lang === 'fa' ? 'متدولوژی تطبیق اصطلاحات' : 'Standardized Regulatory Alignment'}
            </span>
            <h2 className="text-3xl font-serif text-[#22272B]">
              {lang === 'fa' ? 'انطباق با ادبیات رسمی نهادهای حسابرسی' : 'Direct Alignment with IACPA & Iranian Audit Organization'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-[#22272B]/80 font-sans leading-relaxed">
            <div className="p-6 bg-[#F8F6F1] border border-[#22272B]/10 space-y-2">
              <h4 className="font-semibold text-base font-serif text-[#22272B]">
                {lang === 'fa' ? 'واژه‌شناسی یکپارچه حسابرسی' : 'ISA Audit Terminology'}
              </h4>
              <p>
                {lang === 'fa'
                  ? 'رعایت دقیق تعاریف استاندارد در مواردی چون «انحراف بااهمیت»، «ابهام بااهمیت در تداوم فعالیت» و «شواهد کافی و مناسب حسابرسی».'
                  : 'Precise lexical conformity for key regulatory constructs: "Material Misstatement", "Material Uncertainty Related to Going Concern", and "Sufficient Appropriate Audit Evidence".'}
              </p>
            </div>

            <div className="p-6 bg-[#F8F6F1] border border-[#22272B]/10 space-y-2">
              <h4 className="font-semibold text-base font-serif text-[#22272B]">
                {lang === 'fa' ? 'پیوستگی کدینگ حساب‌ها' : 'Chart of Accounts Rigor'}
              </h4>
              <p>
                {lang === 'fa'
                  ? 'ترجمه عناوین حساب‌های کل، معین و تفصیلی به نحوی که هنگام بارگذاری در سیستم‌های ERP نظیر SAP و Oracle خللی ایجاد نشود.'
                  : 'Harmonized ledger hierarchy nomenclature ensuring seamless integration into enterprise ERP environments (SAP, Oracle Financials).'}
              </p>
            </div>

            <div className="p-6 bg-[#F8F6F1] border border-[#22272B]/10 space-y-2">
              <h4 className="font-semibold text-base font-serif text-[#22272B]">
                {lang === 'fa' ? 'امانتداری در ارقام محاسباتی' : 'Zero-Math-Distortion Rule'}
              </h4>
              <p>
                {lang === 'fa'
                  ? 'حفظ بدون تغییر کلیه فرمول‌ها، پانویس‌ها، ممیزها و ارقام جدول‌ها در فرآیند تبدیل به فارسی.'
                  : 'Zero rounding discrepancies or numeral transposition errors. Footnotes remain linked to their designated schedules.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h2 className="text-3xl font-serif text-[#22272B]">
          {lang === 'fa' ? 'اسناد حسابرسی خود را با نظارت کارشناس ارشد ترجمه کنید' : 'Prepare Your Audit Files for Foreign Partners or Local Regulators'}
        </h2>
        <div className="pt-2">
          <Link
            to="/quote?service=accounting"
            className="px-8 py-3.5 bg-[#22272B] text-white hover:bg-[#B79656] transition-colors font-medium text-xs sm:text-sm inline-flex items-center gap-2"
          >
            <span>{lang === 'fa' ? 'درخواست پیش‌فاکتور ترجمه حسابداری' : 'Request Accounting Quote'}</span>
            <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
          </Link>
        </div>
      </section>
    </div>
  );
}
