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
    a: 'Fees are calculated transparently on a per-source-word basis or a fixed project rate. Pricing depends on subject complexity (e.g. general written text vs. dense research article), source document format, and turnaround timeline.',
    a_fa: 'هزینه‌ها بر اساس شمارش کلمات زبان مبدا (انگلیسی) یا به صورت مبلغ مقطوع برای کل پروژه محاسبه می‌شود. عوامل موثر شامل درجه دشواری متن (مثلاً متون عمومی در برابر مقالات پژوهشی و تحلیلی)، فرمت فایل مبدا و فوریت تحویل است.',
  },
  {
    category: 'pricing',
    q: 'Are volume discounts available for long articles or larger projects?',
    q_fa: 'آیا برای متون با حجم بالا تخفیف در نظر گرفته می‌شود؟',
    a: 'Yes. Tiered volume discounts are considered for texts exceeding 10,000 source words, and preferential arrangements can be structured for ongoing collaboration.',
    a_fa: 'بله، برای متون و مقالات با حجم بیش از ۱۰،۰۰۰ کلمه تخفیف‌های متناسب اعمال می‌شود و برای همکاری‌های منظم نیز امکان هماهنگی شرایط ترجیحی وجود دارد.',
  },
  {
    category: 'pricing',
    q: 'What payment methods are supported?',
    q_fa: 'شرایط پرداخت چگونه است؟',
    a: 'For domestic Iranian engagements, bank transfer via Sheba in Iranian Rials (IRR) or Tomans is standard. For international clients, payments can be arranged via agreed international channels.',
    a_fa: 'برای کارفرمایان داخل ایران، تسویه از طریق شماره شبا بانکی به صورت ریال یا تومان انجام می‌شود. برای کارفرمایان خارج از کشور نیز امکان هماهنگی از طریق روش‌های توافقی فراهم است.',
  },

  // Category: Confidentiality & NDA
  {
    category: 'confidentiality',
    q: 'Do you execute a bilateral Non-Disclosure Agreement (NDA)?',
    q_fa: 'آیا پیش از ارسال مدارک، توافق‌نامه محرمانگی (NDA) امضا می‌شود؟',
    a: 'Yes, absolutely. A mutual non-disclosure agreement can be executed prior to inspecting unpublished articles, sensitive research drafts, or confidential texts.',
    a_fa: 'بله، حتماً. پیش از بررسی هرگونه پیش‌نویس منتشرنشده، مقاله پژوهشی یا متن محرمانه، توافق‌نامه دوجانبه حفظ محرمانگی (NDA) قابل امضا است.',
  },
  {
    category: 'confidentiality',
    q: 'Are source files ever uploaded to public AI translation tools?',
    q_fa: 'آیا فایل‌های کارفرما در مترجم‌های آنلاین یا هوش مصنوعی ابری بارگذاری می‌شوند؟',
    a: 'Never. Public cloud translation engines often store and process user submissions externally. All translation is performed human-only within a secure, offline environment.',
    a_fa: 'به هیچ وجه. بارگذاری متون در سرویس‌های عمومی ترجمه آنلاین موجب نقض حریم خصوصی می‌شود. تمامی ترجمه‌ها منحصراً توسط خود انسان و در محیطی امن و محلی انجام می‌پذیرد.',
  },
  {
    category: 'confidentiality',
    q: 'How long do you retain client files after project completion?',
    q_fa: 'اسناد کارفرما پس از اتمام پروژه تا چه مدت نگهداری می‌شوند؟',
    a: 'Files are held securely during the project and review period to support any follow-up questions. Following project completion, working drafts and source files can be permanently expunged upon request.',
    a_fa: 'به طور پیش‌فرض، فایل‌ها در طول دوره بررسی و پاسخگویی به سوالات احتمالی کارفرما نگهداری شده و پس از آن در صورت تمایل کارفرما به طور کامل پاکسازی خواهند شد.',
  },

  // Category: Turnaround & Delivery
  {
    category: 'turnaround',
    q: 'How is project turnaround and scheduling determined?',
    q_fa: 'زمان‌بندی و مدت زمان تحویل پروژه چگونه تعیین می‌شود؟',
    a: 'Turnaround is determined based on the word count, subject matter, and complexity of each text. This ensures sufficient time for attentive translation, terminology consistency, and thorough comparative review.',
    a_fa: 'زمان‌بندی تحویل بر اساس حجم کلمات، زمینه موضوعی و میزان پیچیدگی هر متن به صورت شفاف تعیین می‌شود تا فرصت کافی برای ترجمه دقیق، یکدستی واژگان و بازخوانی تطبیقی فراهم باشد.',
  },
  {
    category: 'turnaround',
    q: 'Can you handle urgent turnaround deadlines?',
    q_fa: 'آیا امکان تحویل فوری برای متون دارای ضرب‌الاجل کوتاه وجود دارد؟',
    a: 'Yes. For time-sensitive articles or texts, expedited scheduling may be arranged through prior consultation.',
    a_fa: 'بله. برای مقالات یا متونی که نیازمند تحویل سریع‌تر هستند، امکان زمان‌بندی فشرده با هماهنگی و بررسی قبلی متن وجود دارد.',
  },

  // Category: Quality & Revisions
  {
    category: 'quality',
    q: 'How are post-delivery reviews and refinements handled?',
    q_fa: 'رسیدگی به اصلاحات و بازنگری پس از تحویل چگونه است؟',
    a: 'Following delivery, you are welcome to review the Persian text. Clarification questions, stylistic adjustments, and terminology refinements are addressed directly to ensure the translation meets your expectations.',
    a_fa: 'پس از تحویل پروژه، کارفرما می‌تواند متن ترجمه‌شده را بازخوانی نموده و سوالات یا پیشنهادهای اصلاحی و سلیقه‌ای خود را مطرح کند تا متن نهایی به مطلوب‌ترین شکل هماهنگ گردد.',
  },
  {
    category: 'quality',
    q: 'Who actually performs the translation work?',
    q_fa: 'ترجمه دقیقا توسط چه کسی انجام می‌شود؟',
    a: 'All translation is performed personally and exclusively by Asma Parnianfard, holder of an M.A. in Translation Studies from Islamic Azad University. Your work is never outsourced to third-party freelancers.',
    a_fa: 'تمامی ترجمه‌ها منحصراً توسط خود اسماء پرنیان‌فرد (دارای مدرک کارشناسی ارشد مطالعات ترجمه از دانشگاه آزاد اسلامی) انجام می‌گیرد و به هیچ عنوان به اشخاص ثالث واگذار نمی‌شود.',
  },
];

export default function FAQPage() {
  const { lang, isRTL } = useLanguage();
  const [selectedCat, setSelectedCat] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const categories = [
    { id: 'all', label: lang === 'fa' ? 'تمامی پرسش‌ها' : 'All Categories' },
    { id: 'pricing', label: lang === 'fa' ? 'قیمت و برآورد هزینه' : 'Pricing & Estimates' },
    { id: 'confidentiality', label: lang === 'fa' ? 'محرمانگی و امانتداری' : 'Confidentiality & Privacy' },
    { id: 'turnaround', label: lang === 'fa' ? 'زمان‌بندی و تحویل' : 'Turnaround & Deadlines' },
    { id: 'quality', label: lang === 'fa' ? 'کیفیت و بازنگری' : 'Quality & Revisions' },
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
            <span>{lang === 'fa' ? 'پرسش‌های متداول' : 'Frequently Asked Questions'}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-serif text-[#22272B] leading-tight">
            {lang === 'fa' ? (
              <>
                پاسخ به سوالات متداول <br />
                <span className="italic text-[#B79656]">درباره خدمات، زمان‌بندی و شرایط ترجمه.</span>
              </>
            ) : (
              <>
                Frequently Asked Questions <br />
                <span className="italic text-[#B79656]">About Services, Turnaround, and Engagement.</span>
              </>
            )}
          </h1>

          <p className="text-base sm:text-lg text-[#22272B]/80 font-sans leading-relaxed">
            {lang === 'fa' ? (
              'در این بخش پاسخ مهم‌ترین پرسش‌های کارفرمایان درباره نحوه محاسبه هزینه، زمان‌بندی تحویل، رعایت رازداری و مراحل ترجمه گردآوری شده است.'
            ) : (
              'Clear answers regarding project estimates, turnaround expectations, confidentiality protocols, and translation methodology.'
            )}
          </p>
        </div>
      </section>

      {/* FILTER & SEARCH */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="premium-card p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            {/* Category tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => {
                    setSelectedCat(c.id);
                    setOpenIdx(null);
                  }}
                  className={`px-3.5 py-1.5 text-xs font-medium transition-colors ${
                    selectedCat === c.id
                      ? 'bg-[#22272B] text-white'
                      : 'bg-[#F8F6F1] text-[#22272B]/80 hover:bg-[#B79656] hover:text-white'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative max-w-xs w-full">
              <Search className="w-4 h-4 text-[#22272B]/40 absolute top-1/2 -translate-y-1/2 left-3" style={{ left: isRTL ? undefined : '0.75rem', right: isRTL ? '0.75rem' : undefined }} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={lang === 'fa' ? 'جستجو در پرسش‌ها...' : 'Search inquiries...'}
                className="w-full text-xs py-2 pl-9 pr-3 bg-[#F8F6F1] border border-[#22272B]/10 focus:outline-none focus:border-[#B79656]"
                style={{ paddingLeft: isRTL ? '0.75rem' : '2.25rem', paddingRight: isRTL ? '2.25rem' : '0.75rem' }}
              />
            </div>
          </div>

          {/* Accordion List */}
          <div className="divide-y divide-[#22272B]/10 pt-2">
            {filtered.length === 0 ? (
              <p className="text-xs text-[#22272B]/60 py-6 text-center font-mono">
                {lang === 'fa' ? 'پرسشی با این عنوان یافت نشد.' : 'No matching questions found.'}
              </p>
            ) : (
              filtered.map((item, idx) => (
                <div key={idx} className="py-4">
                  <button
                    type="button"
                    onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                    className="w-full text-left flex items-center justify-between gap-4 font-serif text-base sm:text-lg font-semibold text-[#22272B] hover:text-[#B79656] transition-colors"
                    style={{ textAlign: isRTL ? 'right' : 'left' }}
                  >
                    <span>{lang === 'fa' ? item.q_fa : item.q}</span>
                    <span className={`text-xl font-mono text-[#B79656] transition-transform duration-200 shrink-0 ${openIdx === idx ? 'rotate-45' : ''}`}>
                      +
                    </span>
                  </button>
                  {openIdx === idx && (
                    <div className="pt-3 pb-1 text-xs sm:text-sm text-[#22272B]/80 font-sans leading-relaxed">
                      {lang === 'fa' ? item.a_fa : item.a}
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h2 className="text-2xl font-serif text-[#22272B]">
          {lang === 'fa' ? 'پرسش دیگری دارید؟' : 'Have a Specific Question?'}
        </h2>
        <p className="text-xs sm:text-sm text-[#22272B]/75 font-sans">
          {lang === 'fa'
            ? 'می‌توانید مستقیماً از طریق صفحه تماس پیام ارسال فرمایید تا در اسرع وقت پاسخگوی شما باشم.'
            : 'Feel free to reach out via the contact form and I will respond to your inquiry promptly.'}
        </p>
        <div className="pt-2">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#22272B] text-white hover:bg-[#B79656] transition-colors text-xs font-semibold"
          >
            <span>{lang === 'fa' ? 'تماس با مترجم' : 'Contact Translator'}</span>
            <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
          </Link>
        </div>
      </section>
    </div>
  );
}
