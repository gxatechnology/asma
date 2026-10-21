import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Languages, 
  Check, 
  ArrowRight, 
  Award, 
  BookOpen, 
  FileCheck 
} from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

export default function TranslationPage() {
  const { lang, isRTL } = useLanguage();

  const principles = [
    {
      title: lang === 'fa' ? 'امانتداری مفهومی و معنایی' : 'Conceptual & Semantic Fidelity',
      desc: lang === 'fa'
        ? 'انتقال دقیق پیام نویسنده اصلی بدون حذف، تحریف یا افزودن تعابیر شخصی غیرمرتبط.'
        : 'Faithfully conveying the author’s intent, nuance, and structural logic without rhetorical drift or unwarranted liberties.',
    },
    {
      title: lang === 'fa' ? 'رعایت نثر فاخر و شیوای فارسی' : 'Standard High-Register Persian Prose',
      desc: lang === 'fa'
        ? 'پرهیز از واژگان محاوره‌ای یا گرته‌برداری‌های نامأنوس غربی؛ خلق متنی که همانند یک اثر اصیل فارسی خوانده شود.'
        : 'Avoiding awkward literal calques. Structuring clauses so the target text reads as an original masterwork authored in fluent Persian.',
    },
    {
      title: lang === 'fa' ? 'انطباق با فرهنگستان زبان و ادب فارسی' : 'Academy of Persian Language & Literature Standards',
      desc: lang === 'fa'
        ? 'استفاده هوشمندانه از واژگان مصوب در حوزه‌های اداری، مدیریتی و علوم انسانی همراه با ذکر معادل لاتین در پانویس در صورت لزوم.'
        : 'Harmonious deployment of approved institutional neologisms paired with parenthetical English annotations where beneficial.',
    },
    {
      title: lang === 'fa' ? 'ترجمه کاملاً انسانی و تک‌صدایی' : 'Strict Single-Voice Human Authorship',
      desc: lang === 'fa'
        ? 'انجام کل ترجمه توسط یک متخصص ثابت (اسماء پرنیان‌فرد) برای تضمین یکدستی کامل واژگان در تمام فصول سند.'
        : 'Direct execution by Asma Parnianfard ensuring stylistic cohesion from introductory remarks to concluding appendices.',
    },
  ];

  return (
    <div className="space-y-20 py-8 md:py-12">
      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B79656]">
            <span className="w-8 h-[1px] bg-[#B79656]"></span>
            <span>{lang === 'fa' ? 'حوزه تخصصی ۶' : 'Specialized Practice Discipline'}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-serif text-[#22272B] leading-tight">
            {lang === 'fa' ? (
              <>
                ترجمه جامع انگلیسی به فارسی <br />
                <span className="italic text-[#B79656]">تعهد به اصالت، دقت واژگان و شیوایی نثر.</span>
              </>
            ) : (
              <>
                Specialized English-to-Persian Translation <br />
                <span className="italic text-[#B79656]">Rooted in Translation Studies & Applied Linguistics.</span>
              </>
            )}
          </h1>

          <p className="text-base sm:text-lg text-[#22272B]/80 font-sans leading-relaxed">
            {lang === 'fa' ? (
              'ارائه ترجمه سطح عالی برای کتب مرجع، گزارش‌های راهبردی سازمان‌های بین‌المللی، مقالات علمی و متون ارتباطات سازمانی توسط دانش‌آموخته کارشناسی ارشد ترجمه.'
            ) : (
              'Master’s level translation craft for strategic whitepapers, corporate governance charters, academic treatises, and executive communications.'
            )}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link
              to="/quote?service=translation"
              className="px-6 py-3 bg-[#22272B] text-white hover:bg-[#B79656] transition-colors text-xs sm:text-sm font-medium shadow-sm"
            >
              {lang === 'fa' ? 'استعلام قیمت پروژه ترجمه' : 'Request Translation Quote'}
            </Link>
            <Link
              to="/about"
              className="px-5 py-3 border border-[#22272B]/20 text-[#22272B] hover:border-[#B79656] text-xs sm:text-sm font-medium"
            >
              {lang === 'fa' ? 'درباره مدارک تحصیلی اسماء پرنیان‌فرد' : 'View Translator Credentials'}
            </Link>
          </div>
        </div>
      </section>

      {/* VISUAL & PRINCIPLES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#22272B]/10 p-8 md:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-[#B79656] font-semibold">
              {lang === 'fa' ? 'تفاوت ترجمه دانشگاهی' : 'The Scholarly Translation Advantage'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#22272B]">
              {lang === 'fa' ? 'تسلط بر زیرساخت‌های زبان‌شناسی' : 'Mastery of Contrastive Linguistic Foundations'}
            </h2>
            <p className="text-xs sm:text-sm text-[#22272B]/80 font-sans leading-relaxed">
              {lang === 'fa' ? (
                'ترجمه تنها دانستن زبان انگلیسی نیست؛ بلکه توانایی بازآفرینی تفکر و مفهوم در دستگاه زبانی فارسی است. به عنوان فارغ‌التحصیل کارشناسی ارشد مترجمی از دانشگاه آزاد اسلامی، من ساختارهای بلاغی هر دو زبان را می‌شناسم و اثری منسجم، علمی و دلنشین خلق می‌کنم.'
              ) : (
                'Translation is not simply familiarity with English; it is the discipline of reconstructing intellectual arguments within the sophisticated rhetorical architecture of the Persian language. Holding an M.A. in Translation Studies, Asma navigates register shifts, pragmatics, and syntactic rhythm.'
              )}
            </p>
            <div className="pt-2 text-xs text-[#22272B]/75 space-y-2">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#788A78]" />
                <span>{lang === 'fa' ? 'پاسداری از رسم‌الخط معیار و فاخر فارسی' : 'Strict adherence to standard Persian orthographic guidelines'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#788A78]" />
                <span>{lang === 'fa' ? 'عدم استفاده از ابزارهای ترجمه خودکار بدون نظارت انسانی' : '100% human translation without opaque generative automated shortcuts'}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative bg-[#F8F6F1] p-3 border border-[#22272B]/10 shadow-md">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/assets/aistudio/Image_1_e154d288.jpeg"
                  alt="Scholarly Translation Desk with Reference Dictionaries and Manuscripts"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="pt-3 px-1 text-[11px] text-[#22272B]/60 font-mono flex justify-between">
                <span>Translation Atelier</span>
                <span>Mashhad, Iran</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 CORE PRINCIPLES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {principles.map((p, idx) => (
            <div key={idx} className="bg-white border border-[#22272B]/10 p-8 space-y-3 shadow-sm hover:border-[#B79656] transition-colors">
              <span className="text-xs font-mono font-bold text-[#B79656]">0{idx + 1}.</span>
              <h3 className="text-xl font-serif font-semibold text-[#22272B]">
                {p.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#22272B]/75 leading-relaxed font-sans">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h2 className="text-3xl font-serif text-[#22272B]">
          {lang === 'fa' ? 'سفارش ترجمه متن خود را ثبت فرمایید' : 'Submit Your English Source Document for Review'}
        </h2>
        <div className="pt-2">
          <Link
            to="/quote?service=translation"
            className="px-8 py-3.5 bg-[#22272B] text-white hover:bg-[#B79656] transition-colors font-medium text-xs sm:text-sm inline-flex items-center gap-2"
          >
            <span>{lang === 'fa' ? 'درخواست استعلام قیمت فوری' : 'Request Project Quote'}</span>
            <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
          </Link>
        </div>
      </section>
    </div>
  );
}
