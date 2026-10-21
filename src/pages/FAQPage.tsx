import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  HelpCircle, 
  Search, 
  Lock, 
  Clock, 
  ShieldCheck, 
  CreditCard, 
  FileCheck, 
  ArrowRight 
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface FaqItem {
  category: string;
  q: string;
  q_fa: string;
  a: string;
  a_fa: string;
}

const allFaqs: FaqItem[] = [
  // Category: Quotations & Fees
  {
    category: 'pricing',
    q: 'How are translation fees calculated?',
    q_fa: 'هزینه ترجمه چگونه محاسبه می‌شود؟',
    a: 'Fees are calculated on a transparent per-source-word basis or a comprehensive fixed-project rate. Factors influencing pricing include subject matter complexity (e.g. standard business correspondence vs. audited IFRS financial footnotes), source file format (editable DOCX/XLSX vs. scanned PDF), and required turnaround speed.',
    a_fa: 'هزینه‌ها بر اساس شمارش کلمات زبان مبدا (انگلیسی) یا به صورت مبلغ مقطوع برای کل پروژه محاسبه می‌شود. عوامل موثر بر نرخ شامل درجه تخصصی بودن متن (مثلاً مکاتبات عمومی تجاری در برابر یادداشت‌های حسابرسی IFRS)، فرمت فایل مبدا (فایل قابل ویرایش در برابر اسکن) و فوریت تحویل است.',
  },
  {
    category: 'pricing',
    q: 'Are volume discounts available for large projects?',
    q_fa: 'آیا برای پروژه‌های با حجم بالا تخفیف در نظر گرفته می‌شود؟',
    a: 'Yes. Tiered volume discounts are automatically applied for documents exceeding 10,000 source words, and dedicated retainer rates are structured for corporate clients with regular monthly translation requirements.',
    a_fa: 'بله، برای پروژه‌های با حجم بیش از ۱۰،۰۰۰ کلمه تخفیف‌های پلکانی اعمال می‌شود و برای سازمان‌ها و هلدینگ‌هایی که همکاری ماهانه و مستمر دارند، قراردادهای با نرخ ترجیحی منعقد می‌گردد.',
  },
  {
    category: 'pricing',
    q: 'What payment methods and currencies are supported?',
    q_fa: 'شرایط پرداخت و ارزهای قابل پذیرش چیست؟',
    a: 'For domestic Iranian engagements, bank transfers via Sheba/Shatab in Iranian Rials (IRR) or Tomans are standard. For international clients and agencies, invoicing is issued in USD, EUR, or AED through international wire or agreed commercial channels.',
    a_fa: 'برای کارفرمایان داخل ایران، تسویه از طریق شماره شبا بانکی به صورت ریال یا تومان انجام می‌شود. برای آژانس‌های بین‌المللی و کارفرمایان خارجی، صدور صورت‌حساب به ارزهای دلار (USD)، یورو (EUR) یا درهم (AED) امکان‌پذیر است.',
  },

  // Category: Confidentiality & NDA
  {
    category: 'confidentiality',
    q: 'Do you execute a bilateral Non-Disclosure Agreement (NDA)?',
    q_fa: 'آیا پیش از ارسال مدارک، توافق‌نامه محرمانگی (NDA) امضا می‌شود؟',
    a: 'Yes, absolutely. A mutual or bilateral NDA is executed prior to inspecting unannounced financial statements, tenders, shareholder agreements, or patent documents. You can request our standard NDA template or provide your own corporate legal counsel format.',
    a_fa: 'بله، حتماً. پیش از بررسی هرگونه سند حساس مالی، مناقصه یا قرارداد تجاری، توافق‌نامه رسمی دوجانبه عدم افشا (Bilateral NDA) به امضا می‌رسد. شما می‌توانید از فرمت استاندارد ما استفاده کنید یا فرمت حقوقی شرکت خود را ارسال فرمایید.',
  },
  {
    category: 'confidentiality',
    q: 'Are source files ever uploaded to public AI translation tools?',
    q_fa: 'آیا فایل‌های کارفرما در مترجم‌های آنلاین یا هوش مصنوعی ابری بارگذاری می‌شوند؟',
    a: 'Never. Processing proprietary financial reports or strategic corporate communications through public cloud translation systems creates severe regulatory liabilities and data leaks. All translation is performed human-only within an offline, encrypted workstation environment.',
    a_fa: 'به هیچ وجه. بارگذاری اسناد مالی یا راهبردی در سرویس‌های آنلاین ترجمه نقض آشکار محرمانگی است. تمامی متون منحصراً توسط انسان و در محیط کاملاً امن و محلی ترجمه و ویرایش می‌شوند.',
  },
  {
    category: 'confidentiality',
    q: 'How long do you retain client files after project completion?',
    q_fa: 'اسناد کارفرما پس از اتمام پروژه تا چه مدت نگهداری می‌شوند؟',
    a: 'By default, files are archived securely for the 14-day warranty period to support any post-delivery queries. Following this period, all working drafts and source files can be permanently and verifiably expunged upon your request.',
    a_fa: 'به طور پیش‌فرض، فایل‌ها برای مدت ۱۴ روز دوره گارانتی جهت پاسخگویی به ممیزان ذخیره می‌مانند و پس از آن در صورت تمایل کارفرما به صورت برگشت‌ناپذیر پاکسازی و معدوم خواهند شد.',
  },

  // Category: Turnaround & Delivery
  {
    category: 'turnaround',
    q: 'What is your typical throughput per business day?',
    q_fa: 'سرعت استاندارد ترجمه در هر روز کاری چقدر است؟',
    a: 'Our high-quality sustainable capacity is 1,800 to 2,500 curated words per business day. This pace ensures adequate time for pre-flight terminology harmonization and mandatory substantive bilingual cross-checking.',
    a_fa: 'ظرفیت استاندارد و باکیفیت روزانه بین ۱۸۰۰ تا ۲۵۰۰ کلمه تخصصی است. این زمان‌بندی فرصت کافی برای انطباق واژه‌نامه و بازخوانی دقیق دوسویه را فراهم می‌سازد.',
  },
  {
    category: 'turnaround',
    q: 'Can you handle urgent 24-hour turnaround deadlines?',
    q_fa: 'آیا امکان تحویل فوری ۲۴ تا ۴۸ ساعته وجود دارد؟',
    a: 'Yes. For emergency board meetings, court submissions, or urgent international tender filings, priority expedited delivery is available with dedicated working sessions.',
    a_fa: 'بله. برای جلسات اضطراری هیئت مدیره، ضرب‌الاجل‌های قانونی دادگاه یا مناقصات بین‌المللی، امکان اولویت‌دهی ویژه با برنامه‌ریزی فشرده وجود دارد.',
  },

  // Category: Quality & Revisions
  {
    category: 'quality',
    q: 'What is included in the 14-day revision warranty?',
    q_fa: 'گارانتی بازنگری ۱۴ روزه شامل چه مواردی است؟',
    a: 'During the 14 days following delivery, any stylistic refinements, corporate nomenclature preferences, or auditor clarification queries are addressed swiftly at zero additional charge.',
    a_fa: 'طی ۱۴ روز پس از تحویل، هرگونه پیشنهاد اصلاحی، یکدست‌سازی واژگان مطابق نظر ممیزان یا اصلاحات نگارشی بدون دریافت هیچ‌گونه وجه اضافی انجام می‌پذیرد.',
  },
  {
    category: 'quality',
    q: 'Who actually performs the translation work?',
    q_fa: 'ترجمه دقیقا توسط چه کسی انجام می‌شود؟',
    a: 'All work is performed personally and exclusively by Asma Parnianfard, holder of an M.A. in Translation Studies from Islamic Azad University. Your work is never handed down to anonymous junior freelancers.',
    a_fa: 'تمامی ترجمه‌ها منحصراً توسط خود اسماء پرنیان‌فرد (کارشناس ارشد مترجمی از دانشگاه آزاد اسلامی) انجام می‌گیرد و هرگز به واسطه‌ها یا کارآموزان ناشناس ارجاع داده نمی‌شود.',
  },
];

export default function FAQPage() {
  const { lang, isRTL } = useLanguage();
  const [selectedCat, setSelectedCat] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const categories = [
    { id: 'all', label: lang === 'fa' ? 'تمامی پرسش‌ها' : 'All Categories' },
    { id: 'pricing', label: lang === 'fa' ? 'قیمت و نحوه پرداخت' : 'Pricing & Payment' },
    { id: 'confidentiality', label: lang === 'fa' ? 'محرمانگی و NDA' : 'Confidentiality & NDA' },
    { id: 'turnaround', label: lang === 'fa' ? 'زمان‌بندی و فوریت' : 'Turnaround & Deadlines' },
    { id: 'quality', label: lang === 'fa' ? 'کیفیت و ضمانت' : 'Quality & Warranty' },
  ];

  const filtered = allFaqs.filter((item) => {
    const matchCat = selectedCat === 'all' || item.category === selectedCat;
    const q = searchQuery.toLowerCase().trim();
    const matchQ = 
      !q || 
      item.q.toLowerCase().includes(q) || 
      item.q_fa.includes(q) || 
      item.a.toLowerCase().includes(q) || 
      item.a_fa.includes(q);
    return matchCat && matchQ;
  });

  return (
    <div className="space-y-16 py-8 md:py-12">
      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B79656]">
            <span className="w-8 h-[1px] bg-[#B79656]"></span>
            <span>{lang === 'fa' ? 'پرسش‌های متداول و شرایط همکاری' : 'Frequently Asked Questions'}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-serif text-[#22272B] leading-tight">
            {lang === 'fa' ? (
              <>
                پاسخ به تمامی سوالات شما <br />
                <span className="italic text-[#B79656]">درباره قیمت، زمان‌بندی و محرمانگی اسناد.</span>
              </>
            ) : (
              <>
                Comprehensive Practice Inquiries <br />
                <span className="italic text-[#B79656]">Pricing, NDA Protocol & Delivery Guarantees.</span>
              </>
            )}
          </h1>

          <p className="text-base sm:text-lg text-[#22272B]/80 font-sans leading-relaxed">
            {lang === 'fa' ? (
              'اطلاعات شفاف در خصوص نحوه سفارش، ضوابط محرمانگی، فرمت‌های قابل پشتیبانی و ضمانت بازنگری خدمات.'
            ) : (
              'Clear answers regarding project workflows, contractual confidentiality, international payment rails, and revision policies.'
            )}
          </p>
        </div>
      </section>

      {/* FILTER & SEARCH */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#22272B]/10 p-4 sm:p-6 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCat(c.id)}
                  className={`px-3 py-1 text-xs font-medium transition-colors ${
                    selectedCat === c.id
                      ? 'bg-[#22272B] text-white'
                      : 'bg-[#F8F6F1] text-[#22272B]/80 hover:bg-[#B79656]/20'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="w-3.5 h-3.5 text-[#22272B]/40 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder={lang === 'fa' ? 'جستجوی سوال...' : 'Filter questions...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 bg-[#F8F6F1] border border-[#22272B]/15 text-xs focus:outline-none focus:border-[#B79656]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ACCORDION LIST */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {filtered.map((item, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className="bg-white border border-[#22272B]/10 overflow-hidden shadow-sm transition-all"
            >
              <button
                type="button"
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="w-full p-5 sm:p-6 flex items-center justify-between gap-4 text-left hover:bg-[#F8F6F1]/50 transition-colors"
                style={{ textAlign: isRTL ? 'right' : 'left' }}
              >
                <span className="font-serif text-base sm:text-lg font-bold text-[#22272B]">
                  {lang === 'fa' ? item.q_fa : item.q}
                </span>
                <span className={`text-2xl font-bold text-[#B79656] flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>

              {isOpen && (
                <div className="p-5 sm:p-6 pt-0 text-sm text-[#22272B]/80 font-sans leading-relaxed border-t border-[#22272B]/5 bg-[#F8F6F1]/20">
                  <p>{lang === 'fa' ? item.a_fa : item.a}</p>
                </div>
              )}
            </div>
          );
        })}
      </section>

      {/* STILL HAVE QUESTIONS BANNER */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#22272B] text-white p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left" style={{ textAlign: isRTL ? 'right' : undefined }}>
            <h3 className="text-xl font-serif">
              {lang === 'fa' ? 'پرسشی دارید که در اینجا پاسخ داده نشده است؟' : 'Have a question not listed here?'}
            </h3>
            <p className="text-xs sm:text-sm text-white/70 font-sans">
              {lang === 'fa' ? 'با ما به صورت مستقیم در ارتباط باشید؛ ظرف چند ساعت پاسخگوی شما خواهیم بود.' : 'Connect directly with the atelier. Inquiries answered within 4 hours.'}
            </p>
          </div>

          <Link
            to="/contact"
            className="px-6 py-3 bg-[#B79656] text-white hover:bg-white hover:text-[#22272B] transition-colors font-medium text-xs sm:text-sm whitespace-nowrap"
          >
            {lang === 'fa' ? 'تماس مستقیم با مترجم' : 'Contact Direct'}
          </Link>
        </div>
      </section>
    </div>
  );
}
