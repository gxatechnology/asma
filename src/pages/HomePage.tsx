import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Award,
  FileText,
  Languages,
  BookOpen,
  Sparkles,
  ChevronRight,
  ExternalLink,
  Lock,
  Clock,
  CheckCircle2,
  HelpCircle,
  Calculator,
  BookText,
  Search,
  PenLine,
  CheckCheck
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import EstimateCalculator from '../components/EstimateCalculator';

export default function HomePage() {
  const { lang, t, isRTL } = useLanguage();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // The 3 Confirmed Services
  const confirmedServices = [
    {
      id: 'translation',
      title: lang === 'fa' ? 'ترجمه متون انگلیسی به فارسی' : 'English-to-Persian Translation',
      description: lang === 'fa'
        ? 'ترجمه کتبی و حرفه‌ای از انگلیسی به فارسی با توجه عمیق به معانی، بافتار متن، شفافیت و کاربرد طبیعی زبان.'
        : 'Professional written translation from English into Persian, with attention to meaning, clarity, context, and natural language.',
      icon: Languages,
      metric: 'Meaning & Flow',
      metric_fa: 'دقت در مفهوم و روانی کلام',
    },
    {
      id: 'article',
      title: lang === 'fa' ? 'ترجمه مقالات' : 'Article Translation',
      description: lang === 'fa'
        ? 'ترجمه مقالات و محتواهای نوشتاری از انگلیسی به فارسی، با حفظ دقیق پیام نویسنده و ساختاری خوانا و روان برای مخاطبان فارسی‌زبان.'
        : 'English-to-Persian translation of articles and written content, preserving the original meaning and ensuring readability for Persian-speaking audiences.',
      icon: BookText,
      metric: 'Reader Engagement',
      metric_fa: 'خوانایی بالا برای مخاطب',
    },
    {
      id: 'general',
      title: lang === 'fa' ? 'ترجمه متون عمومی' : 'General Text Translation',
      description: lang === 'fa'
        ? 'ترجمه انواع متون عمومی از زبان انگلیسی به فارسی با دقت در معادل‌یابی، درک بافت متن و بیانی سلیس.'
        : 'Translation of general written materials from English into Persian, with careful attention to context, terminology, and natural expression.',
      icon: FileText,
      metric: 'Contextual Accuracy',
      metric_fa: 'تناسب بافتار و واژگان',
    },
  ];

  const assuranceSteps = [
    {
      step: '01',
      title: lang === 'fa' ? 'بررسی متن و درک زمینه موضوعی' : 'Reading & Context Review',
      desc: lang === 'fa'
        ? 'مطالعه دقیق متن مبدا، شناخت هدف نویسنده و انتخاب اصطلاحات متناسب با زمینه موضوع.'
        : 'Careful analysis of source materials, understanding core intent, context, and key terminology.',
      icon: Search,
    },
    {
      step: '02',
      title: lang === 'fa' ? 'ترجمه دقیق و روان انسانی' : 'Thoughtful Human Translation',
      desc: lang === 'fa'
        ? 'ترجمه خط به خط منحصراً توسط شخص اسماء پرنیان‌فرد با رعایت شیوایی نثر فارسی و انتقال دقیق بار معنایی.'
        : 'Translating line by line with fidelity to meaning, clear phrasing, and natural Persian rhythm.',
      icon: PenLine,
    },
    {
      step: '03',
      title: lang === 'fa' ? 'بازخوانی تطبیقی و رفع ابهام' : 'Bilingual Review & Verification',
      desc: lang === 'fa'
        ? 'بررسی موازی متن مبدا و مقصد جهت اطمینان از صحت جملات، عدم افتادگی و انسجام متن.'
        : 'Side-by-side comparative review verifying completeness, terminology consistency, and accurate meaning.',
      icon: CheckCheck,
    },
    {
      step: '04',
      title: lang === 'fa' ? 'ویرایش نهایی و تحویل' : 'Final Polish & Delivery',
      desc: lang === 'fa'
        ? 'بررسی صفحه‌آرایی، علائم نگارشی فارسی و پاسخگویی به هرگونه سوال یا نیاز به بازنگری تکمیلی.'
        : 'Final formatting review, Persian typography check, and post-delivery clarification support.',
      icon: CheckCircle2,
    },
  ];

  const faqs = [
    {
      q: lang === 'fa' ? 'تمرکز اصلی شما بر چه نوع متونی است؟' : 'What types of texts do you primarily translate?',
      a: lang === 'fa'
        ? 'تمرکز من بر ترجمه متون نوشتاری از زبان انگلیسی به فارسی است، به‌ویژه مقالات، گزارش‌ها و متون عمومی. در تمام پروژه‌ها تلاش می‌کنم علاوه بر امانتداری در انتقال پیام، متنی روان و خوش‌خوان به زبان فارسی ارائه دهم.'
        : 'My primary focus is on written English-to-Persian translation, particularly articles and general written texts. In all projects, I aim to preserve the original meaning while ensuring the translated content reads naturally in Persian.',
    },
    {
      q: lang === 'fa' ? 'چگونه از محرمانگی متن ارسالی اطمینان حاصل می‌شود؟' : 'How is document confidentiality maintained?',
      a: lang === 'fa'
        ? 'تمام فایل‌ها و پیش‌نویس‌های ارسالی با رعایت کامل اصول رازداری حرفه‌ای بررسی می‌شوند. متون شما در بسترهای ناامن بارگذاری نخواهند شد و در صورت تمایل، امکان انعقاد توافق‌نامه محرمانگی (NDA) نیز وجود دارد.'
        : 'All materials are handled with strict professional discretion and confidentiality. Source texts are reviewed in an offline environment, and a bilateral non-disclosure agreement can be provided upon request.',
    },
    {
      q: lang === 'fa' ? 'زمان تحویل سفارش‌ها چگونه تعیین می‌شود؟' : 'How is project turnaround determined?',
      a: lang === 'fa'
        ? 'زمان‌بندی تحویل بر اساس حجم کلمات، زمینه موضوعی و میزان فشردگی کار توافق می‌شود تا فرصت کافی برای ترجمه دقیق و بازخوانی تطبیقی متن فراهم باشد.'
        : 'Turnaround is evaluated based on document volume, subject matter, and text complexity, ensuring sufficient time for attentive translation and thorough comparative review.',
    },
    {
      q: lang === 'fa' ? 'آیا پس از تحویل امکان بازنگری و اصلاح وجود دارد؟' : 'Do you provide post-delivery review support?',
      a: lang === 'fa'
        ? 'بله، پس از تحویل متن، امکان بررسی، طرح پرسش‌ها و اعمال اصلاحات یا بازنگری‌های تکمیلی مد نظر کارفرما فراهم است.'
        : 'Yes. Post-delivery communication is maintained to address questions, discuss nuances, and accommodate reasonable stylistic refinements.',
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

              {/* Professional Credential Bar */}
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
                      ترجمه <span className="italic text-[#B79656]">انگلیسی به فارسی</span>
                    </>
                  ) : (
                    <>
                      English-to-Persian <br />
                      <span className="italic font-serif text-[#B79656]">Translation</span>
                    </>
                  )}
                </h1>

                <p className="text-xl sm:text-2xl font-serif text-[#B79656] font-medium">
                  {lang === 'fa'
                    ? 'ترجمه متون نوشتاری با دقت، روانی و وفاداری به مفهوم'
                    : 'Clear, Natural, and Thoughtful Written Translation'}
                </p>

                <p className="text-base sm:text-lg text-[#22272B]/80 font-sans leading-relaxed max-w-2xl">
                  {lang === 'fa' ? (
                    'من اسماء پرنیان‌فرد، مترجم مستقل متون انگلیسی به فارسی هستم و تمرکز من بر ترجمه مقالات و متون عمومی است. هدف من انتقال دقیق مفاهیم همگام با ارائه متنی روان، رسا و طبیعی به زبان فارسی است.'
                  ) : (
                    "I'm Asma Parnianfard, an independent English-to-Persian translator specializing in articles and general written texts. I focus on conveying meaning accurately while ensuring the translated content reads naturally in Persian."
                  )}
                </p>
              </div>

              {/* Key Trust Checkpoints */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-2 border-y border-[#22272B]/10 text-sm">
                <div className="flex items-center gap-2 text-[#22272B]/90">
                  <ShieldCheck className="w-4 h-4 text-[#788A78] flex-shrink-0" />
                  <span>{lang === 'fa' ? 'حفظ محرمانگی متون' : 'Document Confidentiality'}</span>
                </div>
                <div className="flex items-center gap-2 text-[#22272B]/90">
                  <FileText className="w-4 h-4 text-[#B79656] flex-shrink-0" />
                  <span>{lang === 'fa' ? 'ترجمه دقیق و روان انسانی' : 'Thoughtful Human Translation'}</span>
                </div>
                <div className="flex items-center gap-2 text-[#22272B]/90">
                  <Clock className="w-4 h-4 text-[#22272B] flex-shrink-0" />
                  <span>{lang === 'fa' ? 'همکاری مستقیم با مترجم' : 'Direct Collaboration'}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <Link
                  to="/quote"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#22272B] text-white hover:bg-[#B79656] transition-all duration-300 font-medium text-sm tracking-wide shadow-md group"
                >
                  <span>{lang === 'fa' ? 'استعلام قیمت و سفارش' : 'Request a Quote'}</span>
                  {isRTL ? (
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                  ) : (
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  )}
                </Link>

                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white border border-[#22272B]/20 text-[#22272B] hover:border-[#B79656] hover:text-[#B79656] transition-all duration-300 font-medium text-sm"
                >
                  <span>{lang === 'fa' ? 'مشاهده خدمات ترجمه' : 'Explore Services'}</span>
                </Link>
              </div>

              {/* Quick Profile Link */}
              <div className="flex items-center gap-4 text-xs text-[#22272B]/60 pt-2">
                <span>{lang === 'fa' ? 'ارتباط مستقیم با خود مترجم' : 'Direct communication with the translator'}</span>
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
                      alt="ASMA PARNIANFARD, Independent English-to-Persian Translator"
                      className="w-full h-full object-cover object-top filter contrast-[1.02]"
                      loading="eager"
                    />
                  </div>

                  {/* Caption & Identification */}
                  <div className="pt-4 pb-1 px-2 space-y-1">
                    <div className="flex items-center justify-between">
                      <h2 className="font-serif text-lg text-[#22272B] font-bold tracking-wide">
                        {lang === 'fa' ? 'اسماء پرنیان‌فرد' : 'ASMA PARNIANFARD'}
                      </h2>
                      <span className="text-[11px] font-mono uppercase text-[#B79656] font-semibold">
                        {lang === 'fa' ? 'مترجم مستقل' : 'Independent Translator'}
                      </span>
                    </div>
                    <p className="text-xs text-[#22272B]/70 font-sans">
                      {lang === 'fa'
                        ? 'کارشناسی ارشد مترجمی زبان انگلیسی • دانشگاه آزاد اسلامی مشهد'
                        : 'M.A., Language Interpretation & Translation • Islamic Azad University'}
                    </p>
                    <div className="pt-2 flex items-center justify-between text-[11px] text-[#22272B]/60 border-t border-[#22272B]/10 mt-2">
                      <span className="flex items-center gap-1">
                        <Lock className="w-3 h-3 text-[#788A78]" /> {lang === 'fa' ? 'مترجم زبان انگلیسی' : 'Independent Practice'}
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

      {/* CONFIRMED SERVICES OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B79656]">
            <span className="w-8 h-[1px] bg-[#B79656]"></span>
            <span>{lang === 'fa' ? 'خدمات ترجمه' : 'Primary Services'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#22272B]">
            {lang === 'fa'
              ? 'ترجمه متون نوشتاری با توجه به زمینه، وضوح و شیوایی زبان'
              : 'Clear, Accurate, and Readable English-to-Persian Translation'}
          </h2>
          <p className="text-[#22272B]/75 leading-relaxed">
            {lang === 'fa'
              ? 'ارائه خدمات ترجمه کتبی متون انگلیسی به زبان فارسی، با تاکید بر درک صحیح پیام نویسنده و بیان روان در زبان مقصد.'
              : 'Dedicated to faithful meaning transfer and natural phrasing for articles, informational materials, and written communications.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
          {confirmedServices.map((spec) => {
            const Icon = spec.icon;
            return (
              <div
                key={spec.id}
                className="premium-card p-8 flex flex-col justify-between group"
              >
                <div className="space-y-5">
                  <div className="premium-icon-box">
                    <Icon className="w-6 h-6 text-[#22272B]" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#B79656] font-medium block">
                      {lang === 'fa' ? spec.metric_fa : spec.metric}
                    </span>
                    <h3 className="text-xl font-serif text-[#22272B] font-semibold premium-card-title transition-colors">
                      {spec.title}
                    </h3>
                    <p className="text-sm text-[#22272B]/70 leading-relaxed font-sans">
                      {spec.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#22272B]/10 flex items-center justify-between">
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#22272B] group-hover:text-[#B79656] transition-colors"
                  >
                    <span>{lang === 'fa' ? 'اطلاعات بیشتر درباره این خدمت' : 'Learn more about this service'}</span>
                    <ChevronRight className={`w-3.5 h-3.5 transition-transform duration-200 premium-arrow ${isRTL ? 'rotate-180' : ''}`} />
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
            <span>{lang === 'fa' ? 'مشاهده توضیحات کامل خدمات و زمان‌بندی تحویل' : 'View complete services overview and delivery details'}</span>
            <ChevronRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
          </Link>
        </div>
      </section>

      {/* 4-STAGE QUALITY PROCESS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B79656]">
              <ShieldCheck className="w-4 h-4" />
              <span>{lang === 'fa' ? 'فرآیند ۴ مرحله‌ای ترجمه' : 'Quality Process'}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif text-[#22272B] leading-tight">
              {lang === 'fa'
                ? 'رویکردی ساختاریافته در ترجمه و بازخوانی متون'
                : 'A Methodical, Context-Aware Translation Approach'}
            </h2>

            <p className="text-[#22272B]/75 text-sm sm:text-base leading-relaxed">
              {lang === 'fa'
                ? 'ترجمه متون نوشتاری نیازمند درک بافت متن، ظرافت‌های ساختاری و انتخاب دقیق واژگان است تا اثر نهایی برای خواننده فارسی‌زبان کاملاً رسا و طبیعی باشد.'
                : 'Effective translation involves more than replacing words. It requires understanding the message and expressing it in a way that feels clear and appropriate to the target audience.'}
            </p>

            <div className="pt-2">
              <Link
                to="/process"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#22272B] hover:text-[#B79656] transition-colors border-b border-[#22272B]/30 pb-1"
              >
                <span>{lang === 'fa' ? 'مشاهده مراحل کامل فرآیند کار' : 'Explore full translation workflow'}</span>
                <ChevronRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {assuranceSteps.map((item) => {
              const StepIcon = item.icon;
              return (
                <div
                  key={item.step}
                  className="premium-card p-7 relative space-y-4 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-serif font-bold text-[#B79656]/35 block">
                      {item.step}
                    </span>
                    <div className="premium-icon-box-sm">
                      <StepIcon className="w-5 h-5 text-[#22272B]" />
                    </div>
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-[#22272B] premium-card-title transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#22272B]/70 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ESTIMATE CALCULATOR */}
      <section className="bg-white py-16 md:py-24 border-y border-[#22272B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B79656]">
                <Calculator className="w-4 h-4" />
                <span>{lang === 'fa' ? 'بررسی مقیاس و حجم پروژه' : 'Volume & Scope Guide'}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#22272B]">
                {lang === 'fa' ? 'بررسی حجم متن و نیازمندی‌های پروژه' : 'Evaluate Project Volume & Scope'}
              </h2>
              <p className="text-[#22272B]/75 text-sm sm:text-base leading-relaxed">
                {lang === 'fa'
                  ? 'تعداد تقریبی کلمات متن خود را مشخص فرمایید تا مقیاس پروژه را مشاهده نمایید. زمان‌بندی دقیق تحویل پس از بررسی متن و میزان فشردگی کار توافق خواهد شد.'
                  : 'Select your source volume to examine project scale benchmarks. Accurate turnaround schedules are agreed upon review of the text.'}
              </p>

              <div className="space-y-3 pt-2 text-xs text-[#22272B]/70">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#788A78]" />
                  <span>{lang === 'fa' ? 'بررسی دقیق و توافق زمان‌بندی شفاف' : 'Detailed review & transparent scheduling'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#788A78]" />
                  <span>{lang === 'fa' ? 'امکان هماهنگی برای متون با اولویت تحویل' : 'Priority turnaround scheduling available'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#788A78]" />
                  <span>{lang === 'fa' ? 'پاسخگویی مستقیم توسط خود مترجم' : 'Direct communication with the translator'}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <EstimateCalculator />
            </div>

          </div>
        </div>
      </section>

      {/* MEET YOUR TRANSLATOR */}
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
                    'من اسماء پرنیان‌فرد، مترجم مستقل متون انگلیسی به فارسی هستم. تمرکز اصلی من بر ترجمه مقالات و متون عمومی است که با دقت فراوان در درک مفهوم، زمینه متن، شفافیت بیان و روانی نگارش زبان فارسی انجام می‌گیرد.'
                  ) : (
                    "I'm Asma Parnianfard, an independent translator working from English into Persian. My main focus is translating articles and general written texts with careful attention to meaning, context, clarity, and natural Persian expression."
                  )}
                </p>
                <p>
                  {lang === 'fa' ? (
                    'باور دارم که ترجمه موثر فراتر از جایگزینی ساده کلمات میان دو زبان است؛ بلکه نیازمند درک عمیق پیام و بازآفرینی آن به گونه‌ای است که برای مخاطب فارسی‌زبان کاملاً رسا، ملموس و شایسته باشد.'
                  ) : (
                    'I believe effective translation involves more than replacing words between languages. It requires understanding the message and expressing it in a way that feels clear and appropriate to the target audience.'
                  )}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#22272B] text-white text-xs font-medium hover:bg-[#B79656] transition-colors"
                >
                  <span>{lang === 'fa' ? 'مطالعه بیشتر درباره من' : 'Read Full Biography'}</span>
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

      {/* FAQ SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#B79656]">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{lang === 'fa' ? 'پرسش‌های متداول' : 'Frequently Asked Questions'}</span>
          </div>
          <h2 className="text-3xl font-serif text-[#22272B]">
            {lang === 'fa' ? 'پاسخ به سوالات متداول' : 'Key Inquiries & Terms of Practice'}
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="premium-card overflow-hidden"
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
            {lang === 'fa' ? 'مشاهده تمامی پرسش‌ها و پاسخ‌ها' : 'View all questions in the FAQ section'} →
          </Link>
        </div>
      </section>

      {/* EDITORIAL CALL TO ACTION BANNER */}
      <section className="bg-[#22272B] text-white py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B79656] block">
            {lang === 'fa' ? 'همکاری حرفه‌ای و مستقیم' : 'Direct Professional Engagement'}
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif leading-tight">
            {lang === 'fa'
              ? 'آماده‌اید پروژه ترجمه خود را بررسی کنیم؟'
              : 'Ready to translate your articles and written texts?'}
          </h2>

          <p className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto font-sans leading-relaxed">
            {lang === 'fa'
              ? 'متن خود را ارسال نمایید تا برآورد شفاف هزینه و زمان تحویل برای شما ارسال گردد.'
              : 'Submit your materials for a transparent quotation and realistic turnaround projection.'}
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/quote"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#B79656] text-white hover:bg-white hover:text-[#22272B] transition-all duration-300 font-medium text-sm tracking-wide shadow-lg"
            >
              <span>{lang === 'fa' ? 'استعلام قیمت و سفارش' : 'Request a Quote'}</span>
              <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-transparent border border-white/30 text-white hover:border-white transition-all duration-300 font-medium text-sm"
            >
              <span>{lang === 'fa' ? 'تماس و ارسال پیام' : 'Contact Direct'}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
