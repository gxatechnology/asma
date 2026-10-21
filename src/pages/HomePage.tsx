import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowLeft,
  ShieldCheck, 
  Award, 
  FileText, 
  Building2, 
  Calculator, 
  FileCheck, 
  Languages, 
  Globe2, 
  Sparkles, 
  ChevronRight, 
  ExternalLink,
  Lock,
  Clock,
  CheckCircle2,
  HelpCircle
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import BilingualComparison from '../components/BilingualComparison';
import EstimateCalculator from '../components/EstimateCalculator';

export default function HomePage() {
  const { lang, t, isRTL } = useLanguage();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const specializations = [
    {
      id: 'financial',
      slug: '/services/financial',
      title: lang === 'fa' ? 'ترجمه مالی و گزارشگری IFRS' : 'Financial & IFRS Translation',
      description: lang === 'fa' 
        ? 'ترازنامه‌ها، صورت‌های سود و زیان، یادداشت‌های توضیحی حسابرسی، گزارش‌های ارزیابی ریسک و اسناد بازارهای سرمایه.'
        : 'Balance sheets, comprehensive income statements, auditor footnotes, risk disclosures, and capital market prospectuses.',
      icon: Calculator,
      metric: 'IFRS & INAS Compliant',
      metric_fa: 'مطابق با IFRS و استانداردهای حسابداری ایران',
    },
    {
      id: 'accounting',
      slug: '/services/accounting',
      title: lang === 'fa' ? 'ترجمه تخصصی حسابداری و حسابرسی' : 'Accounting & Statutory Audit',
      description: lang === 'fa'
        ? 'گزارش‌های حسابرسی قانونی، دفاتر کل، اسناد قیمت‌گذاری انتقالی و اظهارنامه‌های مالیاتی بین‌المللی.'
        : 'Statutory audit opinions, general ledgers, transfer pricing studies, and international tax compliance filings.',
      icon: FileCheck,
      metric: 'Auditor-Verified Concordance',
      metric_fa: 'انطباق تایید شده توسط مراجع حسابرسی',
    },
    {
      id: 'business',
      slug: '/services/business',
      title: lang === 'fa' ? 'ترجمه بازرگانی و قراردادهای تجاری' : 'Commercial & Business Translation',
      description: lang === 'fa'
        ? 'اساسنامه‌ها، موافقت‌نامه‌های سرمایه‌گذاری مشترک (JV)، اسناد مناقصات بین‌المللی و تفاهم‌نامه‌های عدم افشا (NDA).'
        : 'Corporate charters, cross-border joint venture agreements, commercial tender dossiers, and bilateral NDAs.',
      icon: Building2,
      metric: 'Contractual Rigor',
      metric_fa: 'دقت حقوقی و ساختار قراردادی',
    },
    {
      id: 'proofreading',
      slug: '/services/proofreading',
      title: lang === 'fa' ? 'ویرایش و بازخوانی تخصصی متن' : 'Academic & Editorial Proofreading',
      description: lang === 'fa'
        ? 'پالایش متون دانشگاهی، مقالات ISI، گزارش‌های سازمانی و مقایسه تطبیقی متن مبدا و مقصد جهت رفع هرگونه ابهام.'
        : 'Rigorous substantive editing of academic treatises, corporate monographs, executive reports, and register calibration.',
      icon: FileText,
      metric: 'Bilingual Cross-Audit',
      metric_fa: 'بازبینی تطبیقی دوطرفه',
    },
    {
      id: 'localization',
      slug: '/services/localization',
      title: lang === 'fa' ? 'بومی‌سازی وب‌سایت و نرم‌افزار' : 'Website & Software Localization',
      description: lang === 'fa'
        ? 'تطبیق کامل رابط‌های کاربری با جهت راست‌به‌چپ (RTL)، استخراج رشته‌های ترجمه (JSON, XLIFF, PO) و بومی‌سازی تجربه کاربری.'
        : 'Flawless RTL layout engineering, bidirectional UX calibration, and context-aware localization of string catalogs.',
      icon: Globe2,
      metric: 'Native RTL Calibration',
      metric_fa: 'تنظیم تخصصی ساختار راست‌به‌چپ',
    },
    {
      id: 'translation',
      slug: '/services/translation',
      title: lang === 'fa' ? 'ترجمه عمومی و تخصصی انگلیسی به فارسی' : 'English-to-Persian Translation',
      description: lang === 'fa'
        ? 'ترجمه عمیق با حفظ لحن نگارش، انتخاب واژگان دقیق بر اساس فرهنگستان زبان و ادب فارسی و ساختارهای استاندارد نثر فاخر.'
        : 'Nuanced stylistic fidelity, tone adaptation, and linguistic rigor rooted in Master’s level translation studies.',
      icon: Languages,
      metric: 'Human-Only Craftsmanship',
      metric_fa: 'ترجمه کاملاً انسانی بدون دخالت ماشین',
    },
  ];

  const assuranceSteps = [
    {
      step: '01',
      title: lang === 'fa' ? 'واکاوی و استخراج اصطلاحات' : 'Terminology Harmonization',
      desc: lang === 'fa' 
        ? 'بررسی پیشینه سند، تطبیق با استانداردهای سازمان حسابرسی و تهیه واژه‌نامه تخصصی پیش از آغاز کار.'
        : 'Pre-flight corpus extraction, glossary construction, and regulatory alignment with official Iranian Audit Organization standards.',
    },
    {
      step: '02',
      title: lang === 'fa' ? 'ترجمه یکدست انسانی' : 'Single-Voiced Human Translation',
      desc: lang === 'fa'
        ? 'ترجمه تمام متن منحصراً توسط اسماء پرنیان‌فرد با تکیه بر دانش تخصصی کارشناسی ارشد ترجمه.'
        : 'Translating line-by-line with uncompromising register fidelity—no outsourced subcontractors, no uncurated machine translation.',
    },
    {
      step: '03',
      title: lang === 'fa' ? 'بازخوانی تطبیقی دوسویه' : 'Substantive Bilingual Cross-Audit',
      desc: lang === 'fa'
        ? 'بررسی سطر به سطر متن ترجمه در برابر مبدا انگلیسی، اطمینان از صحت اعداد مالی و ساختار دستوری.'
        : 'Line-by-line verification against source English text to ensure zero omissions, numeral integrity, and flawless Persian syntax.',
    },
    {
      step: '04',
      title: lang === 'fa' ? 'تحویل امن و بازنگری دقیق' : 'Encrypted Handover & Clarification',
      desc: lang === 'fa'
        ? 'تحویل ایمن در قالب فایل اصلی به همراه پشتیبانی و اعمال اصلاحات تکمیلی بدون هزینه اضافی.'
        : 'Secure delivery in original formatting accompanied by dedicated post-delivery refinement and clarification.',
    },
  ];

  const faqs = [
    {
      q: lang === 'fa' ? 'چرا ترجمه تخصصی مالی نیازمند دانش دانشگاهی ترجمه است؟' : 'Why does financial translation require academic translation expertise?',
      a: lang === 'fa'
        ? 'صورت‌های مالی و اسناد بازرگانی دارای بار حقوقی سنگین هستند. یک اشتباه در ترجمه اصطلاحاتی چون "Depreciation" در برابر "Amortization" یا "Provision" در برابر "Contingent Liability" می‌تواند ساختار حقوقی شرکت را به خطر بیندازد. تخصص کارشناسی ارشد من در ترجمه، ضامن رعایت دقیق‌ترین استانداردهای معادل‌گزینی است.'
        : 'Financial statements and commercial agreements carry immense legal and regulatory liabilities. Translating nuanced terms like "Depreciation" versus "Amortization", or "Provision" versus "Contingent Liability", requires precise domain concordance with IFRS and local statutory frameworks. My M.A. in Translation ensures rigorous conceptual alignment.',
    },
    {
      q: lang === 'fa' ? 'چگونه از محرمانگی اسناد تجاری و مالی اطمینان حاصل می‌شود؟' : 'How is client and document confidentiality maintained?',
      a: lang === 'fa'
        ? 'تمام پروژه‌ها با رعایت کامل اصول رازداری حرفه‌ای انجام می‌پذیرد. اسناد شما در بسترهای ناامن بارگذاری نمی‌شوند و امکان انعقاد توافق‌نامه عدم افشا (NDA) نیز در صورت نیاز فراهم است.'
        : 'All projects are handled with strict professional discretion and confidentiality. Proprietary source texts are securely handled offline, and bilateral Non-Disclosure Agreements (NDAs) can be executed upon request.',
    },
    {
      q: lang === 'fa' ? 'آیا امکان همکاری با آژانس‌های بین‌المللی و شرکت‌های خارجی وجود دارد؟' : 'Can you collaborate remotely with international translation agencies?',
      a: lang === 'fa'
        ? 'بله، من به طور مستمر با آژانس‌های معتبر اروپایی و بین‌المللی بر روی پروژه‌های بزرگ سازمانی و بسته‌های نرم‌افزاری همکاری می‌کنم و با بسترهای استاندارد CAT مانند SDL Trados، memoQ و فرمت‌های XLIFF کاملاً مسلط هستم.'
        : 'Yes. I regularly partner with reputable international translation agencies and global corporations for high-volume enterprise localization, using industry-standard CAT toolchains (Trados, memoQ) and structured formats (XLIFF, PO, JSON).',
    },
    {
      q: lang === 'fa' ? 'زمان تحویل سفارش‌ها معمولاً چقدر است؟' : 'What is your typical turnaround time?',
      a: lang === 'fa'
        ? 'ظرفیت استاندارد روزانه بین ۱۵۰۰ تا ۲۰۰۰ کلمه تخصصی همراه با بازبینی تطبیقی است. برای متون فوری، اولویت‌بندی زمانی با هماهنگی قبلی امکان‌پذیر است.'
        : 'Standard throughput is 1,500 to 2,000 curated words per business day including comparative review. For time-sensitive files, priority scheduling can be arranged.',
    },
  ];

  return (
    <div className="space-y-24 md:space-y-32">
      {/* HERO SECTION */}
      <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden border-b border-[#22272B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left/Right Text Column */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Institutional Credential Bar */}
              <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm text-[#22272B]/75 font-medium">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#B79656]/10 text-[#B79656] border border-[#B79656]/30 font-semibold tracking-wide uppercase text-[11px]">
                  <Award className="w-3.5 h-3.5" />
                  M.A. Translation Studies
                </span>
                <span className="text-[#22272B]/40">•</span>
                <span className="flex items-center gap-1">
                  Islamic Azad University
                </span>
                <span className="text-[#22272B]/40">•</span>
                <span className="flex items-center gap-1">
                  Mashhad, Iran
                </span>
              </div>

              {/* Editorial Headline */}
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#22272B] tracking-tight leading-[1.2]">
                  {lang === 'fa' ? (
                    <>
                      ترجمه تخصصی <span className="italic text-[#B79656]">انگلیسی به فارسی</span> برای کسب‌وکار و بازارهای مالی.
                    </>
                  ) : (
                    <>
                      Bridging Languages. <br />
                      <span className="italic font-serif text-[#B79656]">Connecting Cultures</span> with Precision.
                    </>
                  )}
                </h1>
                
                <p className="text-lg sm:text-xl text-[#22272B]/80 font-sans leading-relaxed max-w-2xl">
                  {lang === 'fa' ? (
                    'خدمات ممتاز ترجمه، ویرایش و بومی‌سازی تخصصی برای اسناد مالی IFRS، ترازنامه‌ها، قراردادهای تجاری و سیستم‌های نرم‌افزاری توسط اسماء پرنیان‌فرد، کارشناس ارشد مطالعات ترجمه.'
                  ) : (
                    'Master’s level English-to-Persian translation, financial report localization, and commercial contract editing. Crafted exclusively for multinational enterprises, corporate legal counsel, and premier translation agencies.'
                  )}
                </p>
              </div>

              {/* Key Trust Checkpoints */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-2 border-y border-[#22272B]/10 text-sm">
                <div className="flex items-center gap-2 text-[#22272B]/90">
                  <ShieldCheck className="w-4 h-4 text-[#788A78] flex-shrink-0" />
                  <span>{lang === 'fa' ? 'رعایت محرمانگی اسناد' : 'Confidential Document Handling'}</span>
                </div>
                <div className="flex items-center gap-2 text-[#22272B]/90">
                  <FileCheck className="w-4 h-4 text-[#B79656] flex-shrink-0" />
                  <span>{lang === 'fa' ? 'اصطلاح‌شناسی تخصصی مالی' : 'Financial & Legal Terminology'}</span>
                </div>
                <div className="flex items-center gap-2 text-[#22272B]/90">
                  <Clock className="w-4 h-4 text-[#22272B] flex-shrink-0" />
                  <span>{lang === 'fa' ? 'ارتباط مستقیم با کارشناس ترجمه' : 'Direct Translator Engagement'}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <Link
                  to="/quote"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#22272B] text-white hover:bg-[#B79656] transition-all duration-300 font-medium text-sm tracking-wide shadow-md group"
                >
                  <span>{lang === 'fa' ? 'درخواست استعلام قیمت فوری' : 'Request a Project Quote'}</span>
                  {isRTL ? (
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                  ) : (
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  )}
                </Link>

                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white border border-[#22272B]/20 text-[#22272B] hover:border-[#B79656] hover:text-[#B79656] transition-all duration-300 font-medium text-sm"
                >
                  <span>{lang === 'fa' ? 'مشاهده نمونه کارهای تطبیقی' : 'View Bilingual Portfolio'}</span>
                </Link>
              </div>

              {/* Quick Contact & Presence */}
              <div className="flex items-center gap-4 text-xs text-[#22272B]/60 pt-2">
                <span>{lang === 'fa' ? 'پاسخگویی به موقع به استعلام‌ها و درخواست‌های ترجمه' : 'Prompt response to project inquiries & evaluations'}</span>
                <span>•</span>
                <a 
                  href="https://www.linkedin.com/in/asma-parnianfard-a11b69433" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-[#B79656] hover:underline"
                >
                  LinkedIn Profile <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Right Column: Authentic Editorial Photo of Asma Parnianfard */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                
                {/* Decorative border frame */}
                <div className="hidden sm:block absolute -inset-3 border border-[#B79656]/30 translate-x-2 translate-y-2 pointer-events-none" />
                
                {/* Main Portrait Card */}
                <div className="relative bg-white p-3 shadow-xl border border-[#22272B]/10">
                  {/* Golden AP Monogram Official Seal */}
                  <div className="absolute -top-3.5 -right-3.5 w-11 h-11 rounded-full border border-[#B79656]/60 bg-gradient-to-br from-[#2D3339] via-[#22272B] to-[#1A1E22] p-1.5 shadow-xl z-20 flex items-center justify-center">
                    <img
                      src="/assets/branding/ap-monogram-cropped.png"
                      alt="Official Golden AP Monogram Seal"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="aspect-[4/5] overflow-hidden bg-[#E9E2D7]">
                    <img
                      src="/assets/asma-parnianfard-portrait.png"
                      alt="ASMA PARNIANFARD, Professional English-to-Persian Translator"
                      className="w-full h-full object-cover object-top filter contrast-[1.02]"
                      loading="eager"
                    />
                  </div>

                  {/* Caption & Authentic Identification */}
                  <div className="pt-4 pb-1 px-2 space-y-1">
                    <div className="flex items-center justify-between">
                      <h2 className="font-serif text-lg text-[#22272B] font-bold tracking-wide">
                        {lang === 'fa' ? 'اسماء پرنیان‌فرد' : 'ASMA PARNIANFARD'}
                      </h2>
                      <span className="text-[11px] font-mono uppercase text-[#B79656] font-semibold">
                        Lead Translator
                      </span>
                    </div>
                    <p className="text-xs text-[#22272B]/70 font-sans">
                      {lang === 'fa' 
                        ? 'کارشناسی ارشد مترجمی زبان انگلیسی • دانشگاه آزاد اسلامی مشهد' 
                        : 'M.A., Language Interpretation & Translation • Islamic Azad University'}
                    </p>
                    <div className="pt-2 flex items-center justify-between text-[11px] text-[#22272B]/60 border-t border-[#22272B]/10 mt-2">
                      <span className="flex items-center gap-1">
                        <Lock className="w-3 h-3 text-[#788A78]" /> Independent Practitioner
                      </span>
                      <span>Mashhad, Iran</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SPECIALIZATIONS OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B79656]">
            <span className="w-8 h-[1px] bg-[#B79656]"></span>
            <span>{lang === 'fa' ? 'حوزه‌های تخصصی' : 'Core Disciplines'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#22272B]">
            {lang === 'fa' 
              ? 'ترجمه متون حساس با دقت حقوقی و شفافیت نگارش' 
              : 'Precision Translation for High-Stakes Documentation'}
          </h2>
          <p className="text-[#22272B]/75 leading-relaxed">
            {lang === 'fa'
              ? 'بر خلاف متون عمومی، اسناد مالی و قراردادهای تجاری نیازمند درک عمیق ساختار، واژه‌شناسی مصوب و یکدستی لحن هستند.'
              : 'Financial audits, corporate bylaws, and software UI require deep domain context, regulatory fidelity, and terminology harmony.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12">
          {specializations.map((spec) => {
            const Icon = spec.icon;
            return (
              <div
                key={spec.id}
                className="group relative bg-white p-8 border border-[#22272B]/10 hover:border-[#B79656] transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
              >
                <div className="space-y-5">
                  <div className="w-12 h-12 bg-[#F8F6F1] flex items-center justify-center border border-[#22272B]/10 group-hover:bg-[#B79656] group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6 text-[#22272B] group-hover:text-white transition-colors duration-300" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#B79656] font-medium block">
                      {lang === 'fa' ? spec.metric_fa : spec.metric}
                    </span>
                    <h3 className="text-xl font-serif text-[#22272B] font-semibold group-hover:text-[#B79656] transition-colors">
                      {spec.title}
                    </h3>
                    <p className="text-sm text-[#22272B]/70 leading-relaxed font-sans">
                      {spec.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#22272B]/10 flex items-center justify-between">
                  <Link
                    to={spec.slug}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#22272B] group-hover:text-[#B79656] transition-colors"
                  >
                    <span>{lang === 'fa' ? 'بررسی جزییات و استانداردهای این حوزه' : 'Explore practice area'}</span>
                    <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isRTL ? 'group-hover:-translate-x-1 rotate-180' : 'group-hover:translate-x-1'}`} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#B79656] hover:text-[#22272B] transition-colors border-b border-[#B79656]/50 pb-1"
          >
            <span>{lang === 'fa' ? 'مشاهده تمامی خدمات و زمان‌بندی‌های تحویل' : 'View complete services matrix and delivery tiers'}</span>
            <ChevronRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
          </Link>
        </div>
      </section>

      {/* INTERACTIVE BILINGUAL COMPARISON SHOWCASE */}
      <section className="bg-white py-16 md:py-24 border-y border-[#22272B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B79656]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === 'fa' ? 'نمونه مقایسه‌ای موازی' : 'Linguistic Concordance'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#22272B]">
              {lang === 'fa' ? 'بررسی تطبیقی متن مبدا و ترجمه فارسی' : 'Parallel Bilingual Text Examination'}
            </h2>
            <p className="text-[#22272B]/75 leading-relaxed text-sm sm:text-base">
              {lang === 'fa'
                ? 'نمونه‌هایی از متون مالی، اساسنامه شرکت‌ها و رشته‌های نرم‌افزاری ترجمه شده را به صورت سطر به سطر با متن انگلیسی تطبیق دهید.'
                : 'Inspect the meticulous sentence-by-sentence calibration across financial reports, corporate bylaws, and software localization catalogs.'}
            </p>
          </div>

          {/* Bilingual comparison component */}
          <BilingualComparison />

          <div className="p-4 bg-[#F8F6F1] border border-[#22272B]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#22272B]/80">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#788A78] flex-shrink-0" />
              <span>
                {lang === 'fa'
                  ? 'تمامی نمونه‌های ارائه شده بر اساس اسناد استاندارد شده و با رعایت کامل حریم خصوصی تنظیم گردیده‌اند.'
                  : 'All client identifiers and proprietary figures have been synthesized to preserve institutional confidentiality.'}
              </span>
            </div>
            <Link
              to="/portfolio"
              className="font-semibold text-[#B79656] hover:underline flex-shrink-0"
            >
              {lang === 'fa' ? 'مشاهده همه نمونه کارهای مستند' : 'Explore all case studies'} →
            </Link>
          </div>

        </div>
      </section>

      {/* RIGOROUS 4-STAGE HUMAN TRANSLATION PROTOCOL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B79656]">
              <ShieldCheck className="w-4 h-4" />
              <span>{lang === 'fa' ? 'کنترل کیفیت چهار مرحله‌ای' : 'Rigorous QA Protocol'}</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-serif text-[#22272B] leading-tight">
              {lang === 'fa' 
                ? 'چرا در ترجمه تخصصی هیچ جایگزینی برای انسان وجود ندارد؟' 
                : 'Why High-Value Texts Demand Dedicated Human Authorship'}
            </h2>

            <p className="text-[#22272B]/75 text-sm sm:text-base leading-relaxed">
              {lang === 'fa'
                ? 'مترجم‌های ماشینی ساختار گرامری را ترجمه می‌کنند، اما از بار حقوقی، اصطلاحات مصوب حسابداری و بافتار اقتصادی غافلند. روش من تضمین می‌کند سند نهایی همانند یک متن اصیل تالیف شده به نظر برسد.'
                : 'Automated engines parse literal grammar but consistently fail on regulatory liability, Persian syntactic rhythm, and domain-specific terminology. Every document follows a strict multi-pass process.'}
            </p>

            <div className="pt-2">
              <Link
                to="/process"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#22272B] hover:text-[#B79656] transition-colors border-b border-[#22272B]/30 pb-1"
              >
                <span>{lang === 'fa' ? 'مشاهده گام‌به‌گام فرایند سفارش تا تحویل' : 'Explore full 6-stage workflow'}</span>
                <ChevronRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {assuranceSteps.map((item) => (
              <div 
                key={item.step}
                className="bg-white p-7 border border-[#22272B]/10 relative space-y-4 shadow-sm"
              >
                <span className="text-3xl font-serif font-bold text-[#B79656]/30 block">
                  {item.step}
                </span>
                <h3 className="text-lg font-serif font-semibold text-[#22272B]">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#22272B]/70 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* INSTANT WORD COUNT & TIMELINE CALCULATOR */}
      <section className="bg-white py-16 md:py-24 border-y border-[#22272B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B79656]">
                <Calculator className="w-4 h-4" />
                <span>{lang === 'fa' ? 'برآورد شفاف زمان و هزینه' : 'Transparent Estimation'}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#22272B]">
                {lang === 'fa' ? 'محاسبه تخمینی زمان تحویل و هزینه پروژه' : 'Instant Word Count & Delivery Estimator'}
              </h2>
              <p className="text-[#22272B]/75 text-sm sm:text-base leading-relaxed">
                {lang === 'fa'
                  ? 'تعداد کلمات سند خود را انتخاب کنید تا زمان‌بندی واقع‌بینانه تحویل و محدوده قیمت تخمینی را مشاهده فرمایید. سپس سند خود را برای ارزیابی نهایی ارسال کنید.'
                  : 'Select your source volume to examine turnaround benchmarks and indicative pricing ranges. All official quotes are confirmed promptly.'}
              </p>
              
              <div className="space-y-3 pt-2 text-xs text-[#22272B]/70">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#788A78]" />
                  <span>{lang === 'fa' ? 'تخفیف حجمی برای متون بیش از ۱۰،۰۰۰ کلمه' : 'Volume pricing discounts for projects exceeding 10,000 words'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#788A78]" />
                  <span>{lang === 'fa' ? 'امکان تحویل فوری ۲۴ تا ۴۸ ساعته' : 'Urgent turnaround available for critical deadlines'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#788A78]" />
                  <span>{lang === 'fa' ? 'بدون هزینه‌های پنهان یا کارمزدهای غیرمنتظره' : 'Clear fixed-quote pricing—no hidden post-delivery surcharges'}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <EstimateCalculator />
            </div>

          </div>
        </div>
      </section>

      {/* MEET YOUR TRANSLATOR — SCHOLARLY BACKGROUND */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#E9E2D7]/40 border border-[#22272B]/10 p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            
            <div className="md:col-span-4 flex justify-center">
              <div className="relative w-full max-w-xs">
                <div className="aspect-[4/5] bg-white p-2 shadow-md border border-[#22272B]/10 relative">
                  <div className="absolute -bottom-3 -right-3 w-10 h-10 rounded-full border border-[#B79656]/50 bg-gradient-to-br from-[#2D3339] via-[#22272B] to-[#1A1E22] p-1.5 shadow-lg flex items-center justify-center z-10">
                    <img
                      src="/assets/branding/ap-monogram-cropped.png"
                      alt="AP Monogram"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <img
                    src="/assets/asma-parnianfard-portrait.png"
                    alt="ASMA PARNIANFARD"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>

            <div className="md:col-span-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#B79656]">
                  {lang === 'fa' ? 'درباره مترجم' : 'Meet Your Translator'}
                </span>
                <h2 className="text-3xl font-serif text-[#22272B]">
                  {lang === 'fa' ? 'اسماء پرنیان‌فرد' : 'Asma Parnianfard'}
                </h2>
                <p className="text-xs font-mono uppercase text-[#22272B]/60">
                  M.A., Language Interpretation & Translation • Islamic Azad University
                </p>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#22272B]/80 leading-relaxed font-sans">
                <p>
                  {lang === 'fa' ? (
                    'من دانش‌آموخته مقطع کارشناسی ارشد در رشته مترجمی زبان انگلیسی از دانشگاه آزاد اسلامی مشهد هستم. تمرکز حرفه‌ای من در سال‌های اخیر بر ترجمه دقیق گزارش‌های مالی، صورت‌های اساسی حسابداری و اسناد راهبردی تجاری متمرکز بوده است.'
                  ) : (
                    'Holding a Master of Arts in Language Interpretation and Translation from Islamic Azad University, I specialize in translating complex financial statements, statutory audits, and commercial agreements from English to Persian. Operating from Mashhad, Razavi Khorasan, Iran, I serve corporate clients, legal departments, and international translation agencies requiring uncompromising accuracy.'
                  )}
                </p>
                <p>
                  {lang === 'fa' ? (
                    'در رویکرد کاری من، اصل بر امانتداری مفهومی، وفاداری به اصطلاحات تخصصی نهادهای مرجع و حفظ لحن فاخر زبان فارسی است. هر متن تحت نظارت مستقیم شخص من و بدون واسطه ترجمه و ویرایش می‌شود.'
                  ) : (
                    'My practice is rooted in rigorous terminology governance, direct client consultation, and complete independence. You work directly with me—ensuring that confidential corporate communications never pass through anonymous third-party networks.'
                  )}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#22272B] text-white text-xs font-medium hover:bg-[#B79656] transition-colors"
                >
                  <span>{lang === 'fa' ? 'مطالعه بیوگرافی و مدارک تحصیلی' : 'Read Full Professional Biography'}</span>
                  <ChevronRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
                </Link>

                <a
                  href="https://www.linkedin.com/in/asma-parnianfard-a11b69433"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-[#22272B]/20 text-[#22272B] text-xs font-medium hover:border-[#B79656] hover:text-[#B79656] transition-colors"
                >
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* FAQ ACCORDION PREVIEW */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#B79656]">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{lang === 'fa' ? 'پرسش‌های متداول' : 'Frequently Asked Questions'}</span>
          </div>
          <h2 className="text-3xl font-serif text-[#22272B]">
            {lang === 'fa' ? 'پاسخ به سوالات مهم در مورد همکاری' : 'Key Inquiries & Terms of Practice'}
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#22272B]/10 overflow-hidden transition-all duration-200"
            >
              <button
                type="button"
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full text-left p-5 flex items-center justify-between gap-4 hover:bg-[#F8F6F1]/50 transition-colors"
                style={{ textAlign: isRTL ? 'right' : 'left' }}
              >
                <span className="font-serif text-base sm:text-lg font-semibold text-[#22272B]">
                  {faq.q}
                </span>
                <span className={`text-xl font-bold text-[#B79656] transition-transform duration-200 flex-shrink-0 ${activeFaq === idx ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>

              {activeFaq === idx && (
                <div className="p-5 pt-0 text-sm text-[#22272B]/80 font-sans leading-relaxed border-t border-[#22272B]/5 bg-[#F8F6F1]/20">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center pt-2">
          <Link
            to="/faq"
            className="text-xs font-semibold text-[#B79656] hover:text-[#22272B] underline"
          >
            {lang === 'fa' ? 'مشاهده تمامی پرسش‌ها درباره قیمت، قرارداد و محرمانگی' : 'View all 20+ detailed answers in the complete FAQ section'} →
          </Link>
        </div>
      </section>

      {/* EDITORIAL CALL TO ACTION BANNER */}
      <section className="bg-[#22272B] text-white py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B79656] block">
            {lang === 'fa' ? 'همکاری حرفه‌ای و پایدار' : 'Direct Professional Engagement'}
          </span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif leading-tight">
            {lang === 'fa' 
              ? 'آماده‌اید اسناد بین‌المللی خود را با بالاترین کیفیت ترجمه کنید؟' 
              : 'Ready to localise your high-stakes documentation for Persian-speaking markets?'}
          </h2>

          <p className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto font-sans leading-relaxed">
            {lang === 'fa'
              ? 'فایل‌های خود را به صورت امن ارسال کنید تا پیش‌فاکتور دقیق به همراه زمان‌بندی و شرایط عدم افشا برای شما ارسال شود.'
              : 'Submit your source materials for a comprehensive linguistic evaluation and fixed quotation. Strict confidentiality maintained.'}
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/quote"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#B79656] text-white hover:bg-white hover:text-[#22272B] transition-all duration-300 font-medium text-sm tracking-wide shadow-lg"
            >
              <span>{lang === 'fa' ? 'ثبت سفارش ترجمه' : 'Request Official Quotation'}</span>
              <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-transparent border border-white/30 text-white hover:border-white transition-all duration-300 font-medium text-sm"
            >
              <span>{lang === 'fa' ? 'مشاوره و تماس مستقیم' : 'Contact Translator Atelier'}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
