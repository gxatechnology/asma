import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calculator, 
  FileCheck, 
  Building2, 
  FileText, 
  Globe2, 
  Languages, 
  ArrowRight, 
  Clock, 
  ShieldCheck, 
  Layers, 
  Check, 
  ChevronRight,
  FileSpreadsheet
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import EstimateCalculator from '../components/EstimateCalculator';

export default function ServicesOverviewPage() {
  const { lang, isRTL } = useLanguage();

  const services = [
    {
      id: 'financial',
      slug: '/services/financial',
      title: lang === 'fa' ? 'ترجمه مالی و استانداردهای بین‌المللی IFRS' : 'Financial & IFRS Translation',
      subtitle: lang === 'fa' ? 'صورت‌های مالی اساسی و گزارش‌های حسابرسی' : 'Financial Statements, Footnotes & Investor Prospectuses',
      icon: Calculator,
      deliverables: [
        lang === 'fa' ? 'ترازنامه و صورت سود و زیان جامع' : 'Statements of Financial Position & Comprehensive Income',
        lang === 'fa' ? 'یادداشت‌های توضیحی همراه صورت‌های مالی' : 'Auditor Footnotes & Significant Accounting Policies',
        lang === 'fa' ? 'گزارش‌های تحلیل جریان وجوه نقد (IAS 7)' : 'Cash Flow Analysis & Liquidity Disclosures (IAS 7)',
        lang === 'fa' ? 'امیدنامه و گزارش‌های عرضه اولیه سهام (IPO)' : 'Securities Offerings & Capital Market Dossiers',
      ],
      turnaround: '1,800 - 2,500 words / day',
    },
    {
      id: 'accounting',
      slug: '/services/accounting',
      title: lang === 'fa' ? 'ترجمه تخصصی حسابداری و اسناد مالیاتی' : 'Accounting & Statutory Audit Translation',
      subtitle: lang === 'fa' ? 'انطباق با استانداردهای سازمان حسابرسی ایران و جهان' : 'Statutory Audits, Ledgers, Tax Filings & Transfer Pricing',
      icon: FileCheck,
      deliverables: [
        lang === 'fa' ? 'گزارش‌های حسابرس مستقل و بازرس قانونی' : 'Independent Auditor’s Reports & Statutory Opinions',
        lang === 'fa' ? 'اسناد مستندسازی قیمت‌گذاری انتقالی' : 'Transfer Pricing Documentation & Master Files',
        lang === 'fa' ? 'دفاتر کل و اسناد تطبیق حساب‌های بین‌المللی' : 'General Ledger Schedules & Intercompany Reconciliations',
        lang === 'fa' ? 'اظهارنامه‌های مالیاتی و اسناد مالیاتی مضاعف' : 'Tax Compliance Returns & Double Taxation Treaties',
      ],
      turnaround: '1,800 - 2,200 words / day',
    },
    {
      id: 'business',
      slug: '/services/business',
      title: lang === 'fa' ? 'ترجمه بازرگانی و قراردادهای بین‌المللی' : 'Commercial & Business Translation',
      subtitle: lang === 'fa' ? 'اسناد شرکت‌ها، توافق‌نامه‌ها و مناقصات تجاری' : 'Corporate Charters, Joint Ventures & Tender Dossiers',
      icon: Building2,
      deliverables: [
        lang === 'fa' ? 'اساسنامه، اظهارنامه ثبت شرکت و صورتجلسات هیئت مدیره' : 'Articles of Association, Charters & Board Minutes',
        lang === 'fa' ? 'قراردادهای جوینت ونچر (JV) و شراکت تجاری' : 'Cross-Border Joint Venture & Shareholder Pacts',
        lang === 'fa' ? 'اسناد مناقصات بین‌المللی و ضمانت‌نامه‌ها' : 'International Tender Dossiers & Commercial Bids',
        lang === 'fa' ? 'توافق‌نامه‌های عدم افشا (NDA) و نمایندگی انحصاری' : 'Bilateral NDAs & Exclusive Distribution Pacts',
      ],
      turnaround: '2,000 - 2,800 words / day',
    },
    {
      id: 'proofreading',
      slug: '/services/proofreading',
      title: lang === 'fa' ? 'ویرایش و بازخوانی تخصصی متن' : 'Academic & Editorial Proofreading',
      subtitle: lang === 'fa' ? 'پالایش نثر، اصطلاح‌شناسی و مقایسه دوسویه' : 'Substantive Editing, Stylistic Polish & Cross-Audits',
      icon: FileText,
      deliverables: [
        lang === 'fa' ? 'ویرایش تطبیقی متن انگلیسی و ترجمه فارسی' : 'Bilingual Source-to-Target Cross-Verification',
        lang === 'fa' ? 'پالایش نگارشی و دستوری مقالات دانشگاهی و ISI' : 'Scholarly Treatise Polish & Reference Harmonization',
        lang === 'fa' ? 'یکدست‌سازی لحن گزارش‌های سازمانی و سالنامه' : 'Corporate Annual Report Stylistic Harmonization',
        lang === 'fa' ? 'کنترل نهایی نشانه‌گذاری و رسم‌الخط استاندارد' : 'Standard Persian Orthography & Typography Check',
      ],
      turnaround: '4,000 - 6,000 words / day',
    },
    {
      id: 'localization',
      slug: '/services/localization',
      title: lang === 'fa' ? 'بومی‌سازی وب‌سایت، نرم‌افزار و اپلیکیشن' : 'Website & Software Localization',
      subtitle: lang === 'fa' ? 'تنظیم رابط‌های کاربری برای ساختار راست‌به‌چپ (RTL)' : 'Bidirectional Layout Engineering & String Catalog Translation',
      icon: Globe2,
      deliverables: [
        lang === 'fa' ? 'ترجمه رشته‌های متنی (JSON, XLIFF, PO, YAML)' : 'String Extraction & Localization in Structured Formats',
        lang === 'fa' ? 'ارزیابی تجربه کاربری راست‌به‌چپ (RTL UX Audit)' : 'RTL Visual Calibration & Element Mirroring Consultation',
        lang === 'fa' ? 'بومی‌سازی اصطلاحات برای کاربران ایرانی' : 'Cultural Idiomatic Calibration for Persian Audiences',
        lang === 'fa' ? 'مدیریت حافظه ترجمه (TM) و پایگاه اصطلاحات' : 'Translation Memory (TMX) & Termbase Curation',
      ],
      turnaround: '1,500 - 2,200 words / day',
    },
    {
      id: 'translation',
      slug: '/services/translation',
      title: lang === 'fa' ? 'ترجمه جامع انگلیسی به فارسی' : 'Specialized English-to-Persian Translation',
      subtitle: lang === 'fa' ? 'نثر فاخر، انتخاب واژگان دقیق و وفاداری به مبدا' : 'High-Register Prose, Nuanced Pragmatics & Cultural Adaptation',
      icon: Languages,
      deliverables: [
        lang === 'fa' ? 'ترجمه متون مدیریتی و خط‌مشی‌های سازمانی' : 'Corporate Governance Guidelines & Code of Ethics',
        lang === 'fa' ? 'ترجمه کتب تخصصی، متون اقتصادی و بازاریابی B2B' : 'Economics Monographs & High-Level B2B Marketing',
        lang === 'fa' ? 'انتقال دقیق اصطلاحات فنی با استانداردهای فرهنگستان' : 'Lexical Precision Aligned with Language Academy Standards',
        lang === 'fa' ? 'تنظیم لحن رسمی متناسب با مخاطب هدف' : 'Register Customization for Senior Executive Audiences',
      ],
      turnaround: '2,000 - 2,500 words / day',
    },
  ];

  const deliveryTiers = [
    {
      name: lang === 'fa' ? 'استاندارد' : 'Standard Delivery',
      desc: lang === 'fa' ? 'ایده‌آل برای پروژه‌های معمولی با زمان‌بندی طبیعی' : 'Ideal for scheduled filings and standard project schedules',
      speed: '1,800 - 2,500 words / day',
      features: [
        lang === 'fa' ? 'ترجمه کامل و دقیق انسانی' : 'Full human translation by Asma Parnianfard',
        lang === 'fa' ? 'بازخوانی و تطبیق اصطلاحات' : 'Terminology harmonization & cross-audit',
        lang === 'fa' ? 'حفظ کامل قالب و جدول‌های سند اصلی' : 'Layout & spreadsheet preservation',
        lang === 'fa' ? 'گارانتی بازنگری ۱۴ روزه' : '14-day post-delivery warranty',
      ],
    },
    {
      name: lang === 'fa' ? 'فوری / اولویت‌دار' : 'Priority / Urgent',
      desc: lang === 'fa' ? 'برای مناقصات بین‌المللی و مهلت‌های ضرب‌الاجل' : 'Dedicated acceleration for tender bids & board meetings',
      speed: '3,000 - 4,500 words / day',
      highlight: true,
      features: [
        lang === 'fa' ? 'اولویت‌دهی در صف کاری آتلیه' : 'Dedicated priority queue in translation atelier',
        lang === 'fa' ? 'پشتیبانی در روزهای تعطیل در صورت لزوم' : 'Weekend & evening working sessions if required',
        lang === 'fa' ? 'تحویل مرحله‌ای بخش‌های ترجمه شده' : 'Staged milestone deliveries for large volumes',
        lang === 'fa' ? 'پاسخگویی سریع در تمام مراحل' : 'Direct dedicated communication channel',
      ],
    },
    {
      name: lang === 'fa' ? 'همکاری سازمانی و مستمر' : 'Enterprise Retainer',
      desc: lang === 'fa' ? 'برای هلدینگ‌ها و آژانس‌های بین‌المللی ترجمه' : 'Long-term partnership for multinational corporations & agencies',
      speed: 'Monthly volume allocation',
      features: [
        lang === 'fa' ? 'تخصیص ظرفیت تضمین‌شده در هر ماه' : 'Guaranteed monthly word capacity reservation',
        lang === 'fa' ? 'ایجاد و نگهداری حافظه ترجمه اختصاصی' : 'Dedicated Translation Memory (TM) & Termbase',
        lang === 'fa' ? 'صورت‌حساب ماهانه و شرایط پرداخت انعطاف‌پذیر' : 'Consolidated monthly invoicing & flexible terms',
        lang === 'fa' ? 'موافقت‌نامه دوجانبه دائمی حفظ اسرار (NDA)' : 'Master Service Agreement (MSA) with perpetual NDA',
      ],
    },
  ];

  return (
    <div className="space-y-24 py-8 md:py-12">
      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B79656]">
            <span className="w-8 h-[1px] bg-[#B79656]"></span>
            <span>{lang === 'fa' ? 'دامنه خدمات' : 'Comprehensive Service Portfolio'}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-serif text-[#22272B] leading-tight">
            {lang === 'fa' ? (
              <>
                خدمات تخصصی ترجمه، ویرایش و بومی‌سازی <br />
                <span className="italic text-[#B79656]">با تضمین انطباق مفهومی و اصطلاحی.</span>
              </>
            ) : (
              <>
                Linguistic Services Engineered for <br />
                <span className="italic text-[#B79656]">Corporate, Financial & Global Rigor.</span>
              </>
            )}
          </h1>

          <p className="text-base sm:text-lg text-[#22272B]/80 font-sans leading-relaxed">
            {lang === 'fa' ? (
              'ارائه ۶ شاخه تخصصی ترجمه انگلیسی به فارسی با تکیه بر دانش دانشگاهی، دسترسی به منابع معتبر اصطلاح‌شناسی و فرایند کنترل کیفیت چند لایه.'
            ) : (
              'Discover six dedicated practice disciplines—each executed with deep subject-matter comprehension, institutional glossaries, and strict human verification.'
            )}
          </p>
        </div>
      </section>

      {/* DETAILED SERVICE CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.id}
                className="bg-white border border-[#22272B]/10 p-8 space-y-6 shadow-sm hover:border-[#B79656] transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-[#F8F6F1] flex items-center justify-center border border-[#22272B]/10">
                      <Icon className="w-6 h-6 text-[#22272B]" />
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#788A78] font-semibold bg-[#788A78]/10 px-2.5 py-1">
                      {svc.turnaround}
                    </span>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif font-bold text-[#22272B]">
                      {svc.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#B79656] font-medium mt-1">
                      {svc.subtitle}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-[#22272B]/10">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#22272B]/50 block">
                      {lang === 'fa' ? 'سرفصل‌های تحت پوشش:' : 'Scope of Deliverables:'}
                    </span>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#22272B]/80 font-sans">
                      {svc.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-[#788A78] flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#22272B]/10 flex items-center justify-between">
                  <Link
                    to={svc.slug}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#22272B] hover:text-[#B79656] transition-colors"
                  >
                    <span>{lang === 'fa' ? 'مشاهده جزییات، نمونه‌ها و نمونه کارها' : 'Detailed practice specifications & samples'}</span>
                    <ChevronRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
                  </Link>

                  <Link
                    to="/quote"
                    className="text-xs font-medium text-[#B79656] hover:underline"
                  >
                    {lang === 'fa' ? 'استعلام قیمت این خدمت' : 'Quote this service'} →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* DELIVERY TIERS MATRIX */}
      <section className="bg-white py-16 border-y border-[#22272B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B79656]">
              {lang === 'fa' ? 'زمان‌بندی و سطوح تحویل' : 'Turnaround & Capacity Matrix'}
            </span>
            <h2 className="text-3xl font-serif text-[#22272B]">
              {lang === 'fa' ? 'برنامه‌ریزی شفاف بر اساس فوریت پروژه' : 'Transparent Timelines Tailored to Your Schedule'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deliveryTiers.map((tier, idx) => (
              <div
                key={idx}
                className={`p-8 border flex flex-col justify-between ${
                  tier.highlight
                    ? 'border-[#B79656] bg-[#F8F6F1] shadow-lg relative'
                    : 'border-[#22272B]/10 bg-white'
                }`}
              >
                {tier.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#B79656] text-white text-[10px] font-mono uppercase px-3 py-0.5 tracking-wider font-semibold">
                    Most Popular
                  </span>
                )}

                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-[#22272B]">
                      {tier.name}
                    </h3>
                    <p className="text-xs text-[#22272B]/70 mt-1 font-sans">
                      {tier.desc}
                    </p>
                  </div>

                  <div className="py-2 border-y border-[#22272B]/10 text-xs font-mono font-semibold text-[#B79656]">
                    {tier.speed}
                  </div>

                  <ul className="space-y-2.5 text-xs text-[#22272B]/80 font-sans pt-2">
                    {tier.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#788A78] flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-[#22272B]/10">
                  <Link
                    to="/quote"
                    className={`w-full py-2.5 text-center text-xs font-semibold block transition-colors ${
                      tier.highlight
                        ? 'bg-[#22272B] text-white hover:bg-[#B79656]'
                        : 'bg-white border border-[#22272B]/20 text-[#22272B] hover:border-[#B79656] hover:text-[#B79656]'
                    }`}
                  >
                    {lang === 'fa' ? 'انتخاب و ارسال سند' : 'Select Tier for Quote'}
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FILE FORMATS & COMPATIBILITY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#E9E2D7]/40 border border-[#22272B]/10 p-8 md:p-12 space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B79656]">
              {lang === 'fa' ? 'پشتیبانی فنی از فرمت‌ها' : 'Technical File Formats'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#22272B]">
              {lang === 'fa' ? 'پشتیبانی از انواع فایل‌های متنی و ساختاریافته' : 'Preserving Original Formatting & Complex Layouts'}
            </h2>
            <p className="text-xs sm:text-sm text-[#22272B]/75 leading-relaxed font-sans">
              {lang === 'fa'
                ? 'فایل‌های شما بدون به هم ریختگی جدول‌ها، نمودارها و فرمول‌های محاسباتی تحویل داده می‌شوند. ما با فرمت‌های استانداردی همچون DOCX، XLSX، PDF، InDesign IDML، XLIFF و JSON کار می‌کنیم.'
                : 'Your deliverables match the visual structure of your source assets—tables, footnotes, and calculations remain intact. Full compatibility with Microsoft Office, Adobe InDesign, CAT packages, and JSON catalogs.'}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-center">
            {['Microsoft Word (.docx)', 'Microsoft Excel (.xlsx)', 'Adobe PDF / InDesign', 'Structured JSON / YAML', 'XLIFF / PO Catalog', 'PowerPoint (.pptx)'].map((fmt, idx) => (
              <div key={idx} className="bg-white p-3 border border-[#22272B]/10 text-xs font-mono text-[#22272B]/80 font-medium">
                {fmt}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALCULATOR EMBED */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-3xl font-serif text-[#22272B]">
              {lang === 'fa' ? 'محاسبه فوری زمان و هزینه' : 'Instant Estimation Calculator'}
            </h2>
            <p className="text-sm text-[#22272B]/80 font-sans leading-relaxed">
              {lang === 'fa'
                ? 'برای آگاهی از زمان تقریبی تحویل و محدوده قیمت، حجم سند خود را در اسلایدر مشخص کنید.'
                : 'Calibrate your source word count to observe realistic turnaround expectations and estimate price bands.'}
            </p>
          </div>
          <div className="lg:col-span-7">
            <EstimateCalculator />
          </div>
        </div>
      </section>
    </div>
  );
}
