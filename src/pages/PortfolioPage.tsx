import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  Search, 
  Filter, 
  ArrowRight, 
  CheckCircle2, 
  FileText, 
  Calendar, 
  Building2, 
  Globe2, 
  Layers 
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { PortfolioItem, ServiceCategory } from '../types';

const fallbackPortfolio: PortfolioItem[] = [
  {
    id: 'port-1',
    slug: 'alborz-holdings-financial-audit',
    title: 'Alborz Holdings P.J.S.C. Audited Financial Statements & Footnotes',
    title_fa: 'صورت‌های مالی و یادداشت‌های توضیحی حسابرسی شرکت البرز هلدینگ (سهامی خاص)',
    category: 'financial',
    categoryLabel: 'Financial & IFRS',
    description: 'Comprehensive English-to-Persian translation of consolidated balance sheets, statements of comprehensive income, and auditor footnote disclosures according to IFRS and Iranian National Accounting Standards (INAS).',
    description_fa: 'ترجمه جامع انگلیسی به فارسی ترازنامه تلفیقی، صورت سود و زیان جامع و یادداشت‌های همراه بر اساس استانداردهای بین‌المللی IFRS و استانداردهای حسابداری ایران.',
    clientIndustry: 'Industrial Holding & Conglomerate',
    sourceSample: 'The Group has elected to measure its investment properties using the fair value model in accordance with IAS 40. Any gain or loss arising from a change in the fair value is recognized in profit or loss in the period in which it arises. Contingent liabilities are disclosed unless the possibility of an outflow of resources embodying economic benefits is remote.',
    targetSample: 'گروه تصمیم گرفته است بر اساس استاندارد بین‌المللی حسابداری ۴۰ (IAS 40)، سرمایه‌گذاری در املاک را با الگوی ارزش منصفانه اندازه‌گیری کند. هرگونه سود یا زیان ناشی از تغییر در ارزش منصفانه در دوره‌ای که واقع می‌شود در صورت سود و زیان شناسایی می‌گردد. بدهی‌های احتمالی افشا می‌شوند مگر آنکه احتمال خروج منابع حاوی منافع اقتصادی بعید باشد.',
    terminologyNotes: [
      {
        source: 'Fair value model',
        target: 'الگوی ارزش منصفانه',
        note: 'Distinct from revaluation model (الگوی تجدید ارزیابی) under IAS 16',
      },
      {
        source: 'Contingent liabilities',
        target: 'بدهی‌های احتمالی',
        note: 'Requires distinction from recognized provisions (تعهدات برآوردی)',
      },
    ],
    turnaroundDays: '4 business days',
    wordCountApprox: 8400,
    image: '/assets/aistudio/Image_2_fe0de90b.jpeg',
    featured: true,
    published: true,
    date: '2026-09-14',
  },
  {
    id: 'port-2',
    slug: 'cross-border-joint-venture',
    title: 'Cross-Border Renewable Energy Joint Venture Agreement & Charters',
    title_fa: 'قرارداد سرمایه‌گذاری مشترک و اساسنامه نیروگاه تجدیدپذیر خورشیدی',
    category: 'business',
    categoryLabel: 'Business & Commercial',
    description: 'Bilateral commercial agreement covering capital contribution ratios, board representation, technology transfer rights, intellectual property ownership, and ICC arbitration mechanisms.',
    description_fa: 'قرارداد دوجانبه تجاری شامل نسبت‌های آورده نقدی و غیرنقدی، ترکیب هیئت مدیره، انتقال فناوری، حقوق مالکیت فکری و سازوکار داوری اتاق بازرگانی بین‌المللی (ICC).',
    clientIndustry: 'Renewable Energy & Infrastructure',
    sourceSample: 'In the event of any deadlock persisting beyond thirty (30) business days following delivery of the Deadlock Notice, either Party shall be entitled to initiate the Russian Roulette buy-sell procedure as set forth in Schedule 4, or refer the matter to binding arbitration under the Rules of Arbitration of the International Chamber of Commerce (ICC).',
    targetSample: 'در صورت تداوم بن‌بست مدیریتی به مدت بیش از سی (۳۰) روز کاری پس از ابلاغ اخطاریه بن‌بست، هر یک از طرفین مجاز خواهد بود رویه خرید و فروش شرطی موسوم به رولت روسی را مطابق پیوست شماره ۴ آغاز نموده و یا موضوع را جهت داوری لازم‌الاجرا تحت قواعد داوری اتاق بازرگانی بین‌المللی (ICC) ارجاع نماید.',
    terminologyNotes: [
      {
        source: 'Deadlock Notice',
        target: 'اخطاریه بن‌بست مدیریتی',
        note: 'Standard commercial contract deadlock resolution mechanism',
      },
      {
        source: 'Binding arbitration',
        target: 'داوری لازم‌الاجرا و قطعی',
        note: 'Preserving full legal enforceability under Iranian commercial arbitration laws',
      },
    ],
    turnaroundDays: '6 business days',
    wordCountApprox: 12200,
    image: '/assets/aistudio/Image_5_2032c408.jpeg',
    featured: true,
    published: true,
    date: '2026-08-20',
  },
  {
    id: 'port-3',
    slug: 'fintech-dashboard-rtl',
    title: 'FinTech Multi-Currency Trading Platform Localization & RTL Audit',
    title_fa: 'بومی‌سازی پلتفرم معاملاتی چندارزی و ارزیابی ساختار راست‌به‌چپ (RTL)',
    category: 'localization',
    categoryLabel: 'Software Localization',
    description: 'Complete UI string extraction and localization for mobile and web applications, bidirectional layout calibration, and Persian number localization for financial charts and order books.',
    description_fa: 'استخراج و ترجمه کامل رشته‌های رابط کاربری وب و موبایل، تنظیم چیدمان راست‌به‌چپ و بومی‌سازی اعداد فارسی در نمودارهای معاملاتی و دفترچه سفارش‌ها.',
    clientIndustry: 'Financial Technology / Web3',
    sourceSample: '{"order_book_spread": "Market Spread: %s", "liquidity_pool_depth": "Depth: %d active orders", "trailing_stop_loss_triggered": "Trailing stop loss triggered at price %s. Order submitted for execution."}',
    targetSample: '{"order_book_spread": "اختلاف مظنه بازار: %s", "liquidity_pool_depth": "عمق بازار: %d سفارش فعال", "trailing_stop_loss_triggered": "حد ضرر متحرک در قیمت %s فعال شد. سفارش جهت اجرا ارسال گردید."}',
    terminologyNotes: [
      {
        source: 'Market Spread',
        target: 'اختلاف مظنه بازار',
        note: 'Standard Iranian capital market trading terminology',
      },
      {
        source: 'Trailing stop loss',
        target: 'حد ضرر متحرک',
        note: 'Algorithmic trading convention in Persian exchanges',
      },
    ],
    turnaroundDays: '5 business days',
    wordCountApprox: 9800,
    image: '/assets/aistudio/Image_4_f7eef0ea.jpeg',
    featured: true,
    published: true,
    date: '2026-07-11',
  },
  {
    id: 'port-4',
    slug: 'oxford-economics-proofreading',
    title: 'Academic Monograph: Emerging Markets Monetary Policy Substantive Audit',
    title_fa: 'ویرایش تطبیقی کتاب تخصصی: سیاست‌های پولی در بازارهای نوظهور',
    category: 'proofreading',
    categoryLabel: 'Academic Proofreading',
    description: 'Substantive bilingual proofreading of a 45,000-word university treatise. Standardized citation indexing, mathematical notation consistency, and refined high-register academic Persian syntax.',
    description_fa: 'ویرایش ساختاری و تطبیقی کتاب ۴۵،۰۰۰ کلمه‌ای دانشگاهی. یکدست‌سازی ارجاعات کتابنامه‌ای، کنترل نشانه‌گذاری فرمول‌ها و پالایش ساختار نثر علمی بر اساس مصوبات فرهنگستان.',
    clientIndustry: 'Academic Publishing / Economics',
    sourceSample: 'The transmission mechanism of monetary policy under structural liquidity surpluses exhibits significant non-linearities, primarily attributable to the counter-cyclical reserve requirements and foreign exchange sterilisation operations.',
    targetSample: 'سازوکار انتقال سیاست‌های پولی در شرایط مازاد ساختاری نقدینگی، رفتارهای غیرخطی آشکاری از خود بروز می‌دهد که عمدتاً ناشی از الزامات سپرده قانونی پادچرخه‌ای و عملیات خنثی‌سازی مداخله ارزی است.',
    terminologyNotes: [
      {
        source: 'Counter-cyclical reserve requirements',
        target: 'سپرده قانونی پادچرخه‌ای',
        note: 'Approved by Central Bank of Iran research institutes',
      },
      {
        source: 'Sterilisation operations',
        target: 'عملیات خنثی‌سازی ارزی',
        note: 'Standard central banking translation convention',
      },
    ],
    turnaroundDays: '14 business days',
    wordCountApprox: 45000,
    image: '/assets/aistudio/Image_3_6dc99c9e.jpeg',
    featured: false,
    published: true,
    date: '2026-06-02',
  },
];

export default function PortfolioPage() {
  const { lang, isRTL } = useLanguage();
  const [items, setItems] = useState<PortfolioItem[]>(fallbackPortfolio);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'both' | 'persian' | 'english'>('both');

  useEffect(() => {
    fetch('/api/portfolio')
      .then((res) => {
        if (!res.ok) throw new Error('Network error');
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setItems(data);
        }
      })
      .catch(() => {
        // Fallback already assigned
      });
  }, []);

  const categories = [
    { id: 'all', label: lang === 'fa' ? 'تمامی نمونه‌ها' : 'All Case Studies' },
    { id: 'financial', label: lang === 'fa' ? 'مالی و IFRS' : 'Financial & IFRS' },
    { id: 'accounting', label: lang === 'fa' ? 'حسابداری و حسابرسی' : 'Accounting & Audit' },
    { id: 'business', label: lang === 'fa' ? 'بازرگانی و قرارداد' : 'Commercial & Legal' },
    { id: 'proofreading', label: lang === 'fa' ? 'ویرایش و بازخوانی' : 'Proofreading' },
    { id: 'localization', label: lang === 'fa' ? 'بومی‌سازی نرم‌افزار' : 'Software & RTL' },
  ];

  const filteredItems = items.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = 
      !q || 
      item.title.toLowerCase().includes(q) || 
      item.title_fa.includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.clientIndustry.toLowerCase().includes(q) ||
      item.terminologyNotes.some(t => t.source.toLowerCase().includes(q) || t.target.includes(q));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-16 py-8 md:py-12">
      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B79656]">
            <span className="w-8 h-[1px] bg-[#B79656]"></span>
            <span>{lang === 'fa' ? 'نمونه‌کارهای مستند و بررسی تطبیقی' : 'Documented Case Studies'}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-serif text-[#22272B] leading-tight">
            {lang === 'fa' ? (
              <>
                آرشیو نمونه کارهای ترجمه و ویرایش <br />
                <span className="italic text-[#B79656]">با بررسی موازی متن مبدا و معادل فارسی.</span>
              </>
            ) : (
              <>
                Bilingual Translation Portfolio <br />
                <span className="italic text-[#B79656]">Verified Concordance Across Corporate Sectors.</span>
              </>
            )}
          </h1>

          <p className="text-base sm:text-lg text-[#22272B]/80 font-sans leading-relaxed">
            {lang === 'fa' ? (
              'بررسی موردی پروژه‌های مالی، قراردادهای بین‌المللی و بومی‌سازی نرم‌افزار. توجه: اسامی مشتریان و ارقام حساس جهت حفظ کامل محرمانگی ناشناس‌سازی شده‌اند.'
            ) : (
              'Examine authentic parallel sentence structures, regulatory concordance annotations, and domain terminology. Proprietary entity names have been synthesized for institutional confidentiality.'
            )}
          </p>
        </div>
      </section>

      {/* FILTER & SEARCH BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#22272B]/10 p-4 sm:p-6 shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Category pills */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 text-xs font-medium transition-colors ${
                    selectedCategory === cat.id
                      ? 'bg-[#22272B] text-white'
                      : 'bg-[#F8F6F1] text-[#22272B]/80 hover:bg-[#B79656]/20'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-[#22272B]/40 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder={lang === 'fa' ? 'جستجوی عنوان یا اصطلاح...' : 'Search title or term...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-[#F8F6F1] border border-[#22272B]/15 text-xs focus:outline-none focus:border-[#B79656]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white border border-[#22272B]/10 p-8 space-y-3">
            <p className="text-sm text-[#22272B]/60 font-sans">
              {lang === 'fa' ? 'هیچ موردی مطابق جستجوی شما یافت نشد.' : 'No case studies matched your filter criteria.'}
            </p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="text-xs font-semibold text-[#B79656] underline"
            >
              {lang === 'fa' ? 'نمایش مجدد همه موارد' : 'Reset filters'}
            </button>
          </div>
        ) : (
          <div className="space-y-12">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-[#22272B]/10 overflow-hidden shadow-sm hover:border-[#B79656] transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  
                  {/* Left Column: Image & Meta */}
                  <div className="lg:col-span-4 bg-[#F8F6F1] border-b lg:border-b-0 lg:border-r border-[#22272B]/10 p-6 flex flex-col justify-between">
                    <div className="space-y-4">
                      {item.image && (
                        <div className="aspect-[16/10] overflow-hidden border border-[#22272B]/10 bg-white">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      )}

                      <div className="space-y-1">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-[#B79656] font-semibold">
                          {item.categoryLabel}
                        </span>
                        <h2 className="text-lg font-serif font-bold text-[#22272B] leading-snug">
                          {lang === 'fa' ? item.title_fa : item.title}
                        </h2>
                      </div>

                      <p className="text-xs text-[#22272B]/75 leading-relaxed font-sans">
                        {lang === 'fa' ? item.description_fa : item.description}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-[#22272B]/10 space-y-1.5 text-[11px] text-[#22272B]/70 font-mono">
                      <div className="flex items-center justify-between">
                        <span>{lang === 'fa' ? 'حوزه کارفرما:' : 'Industry:'}</span>
                        <span className="font-semibold text-[#22272B]">{item.clientIndustry}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>{lang === 'fa' ? 'حجم حدودی:' : 'Approx Volume:'}</span>
                        <span>{item.wordCountApprox.toLocaleString()} words</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>{lang === 'fa' ? 'مدت تحویل:' : 'Turnaround:'}</span>
                        <span>{item.turnaroundDays}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Interactive Parallel Concordance & Terminology */}
                  <div className="lg:col-span-8 p-6 sm:p-8 space-y-6">
                    
                    <div className="space-y-3">
                      <span className="text-xs font-mono uppercase text-[#22272B]/50 block">
                        {lang === 'fa' ? 'نمونه تطبیقی متن مبدا و مقصد:' : 'Parallel Source & Target Excerpt:'}
                      </span>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Source English */}
                        <div className="p-4 bg-[#F8F6F1] border border-[#22272B]/10 space-y-2">
                          <span className="text-[10px] font-mono uppercase text-[#22272B]/50 font-bold block">
                            Source Document (English)
                          </span>
                          <p className="text-xs sm:text-sm text-[#22272B]/85 font-mono leading-relaxed">
                            {item.sourceSample}
                          </p>
                        </div>

                        {/* Target Persian */}
                        <div className="p-4 bg-[#B79656]/5 border border-[#B79656]/20 space-y-2" dir="rtl">
                          <span className="text-[10px] font-mono uppercase text-[#B79656] font-bold block">
                            ترجمه فارسی (مقصد)
                          </span>
                          <p className="text-xs sm:text-sm text-[#22272B] font-persian font-medium leading-relaxed">
                            {item.targetSample}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Terminology Notes */}
                    {item.terminologyNotes && item.terminologyNotes.length > 0 && (
                      <div className="space-y-2 pt-2 border-t border-[#22272B]/10">
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#B79656] block">
                          {lang === 'fa' ? 'یادداشت‌های معادل‌گزینی تخصصی:' : 'Specialized Concordance Notes:'}
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {item.terminologyNotes.map((note, nIdx) => (
                            <div key={nIdx} className="p-2.5 bg-[#F8F6F1] border border-[#22272B]/5 text-xs space-y-0.5">
                              <div className="flex items-center justify-between font-mono text-[11px]">
                                <span className="font-semibold text-[#22272B]">{note.source}</span>
                                <span className="font-persian font-bold text-[#B79656]" dir="rtl">{note.target}</span>
                              </div>
                              <p className="text-[11px] text-[#22272B]/60 font-sans">{note.note}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Action Link to Detail */}
                    <div className="pt-2 flex items-center justify-between">
                      <Link
                        to={`/portfolio/${item.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#22272B] hover:text-[#B79656] transition-colors"
                      >
                        <span>{lang === 'fa' ? 'مطالعه تحلیل کامل این پرونده' : 'Read full case analysis & concordance'}</span>
                        <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
                      </Link>

                      <Link
                        to={`/quote?service=${item.category}`}
                        className="text-xs font-medium text-[#B79656] hover:underline"
                      >
                        {lang === 'fa' ? 'استعلام پروژه مشابه' : 'Quote similar project'} →
                      </Link>
                    </div>

                  </div>

                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* CONFIDENTIALITY REASSURANCE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 bg-[#F8F6F1] border border-[#22272B]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#22272B]/75">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-[#788A78] flex-shrink-0" />
            <span>
              {lang === 'fa'
                ? 'آیا نیازمند بررسی نمونه‌های اختصاصی در حوزه فعالیت صنعت خود هستید؟ با امضای توافق‌نامه عدم افشا، نمونه‌های مرتبط در اختیارتان قرار می‌گیرد.'
                : 'Need samples specifically tailored to your industry niche? Bilateral NDAs ensure custom reference portfolios can be reviewed securely.'}
            </span>
          </div>
          <Link
            to="/contact"
            className="font-semibold text-[#B79656] hover:underline flex-shrink-0"
          >
            {lang === 'fa' ? 'درخواست نمونه کار اختصاصی' : 'Request Industry Dossier'} →
          </Link>
        </div>
      </section>
    </div>
  );
}
