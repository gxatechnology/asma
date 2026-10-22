import React from 'react';
import { Link } from 'react-router-dom';
import {
  Languages,
  BookOpen,
  FileText,
  ArrowRight,
  Clock,
  ShieldCheck,
  Check,
  ChevronRight,
  Calculator
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import EstimateCalculator from '../components/EstimateCalculator';

export default function ServicesOverviewPage() {
  const { lang, isRTL } = useLanguage();

  const services = [
    {
      id: 'translation',
      title: lang === 'fa' ? 'ترجمه متون انگلیسی به فارسی' : 'English-to-Persian Translation',
      subtitle: lang === 'fa' ? 'ترجمه کتبی با توجه به معانی، شفافیت و کاربرد طبیعی زبان' : 'Professional written translation from English into Persian',
      description: lang === 'fa'
        ? 'ترجمه کتبی و حرفه‌ای از انگلیسی به فارسی با توجه عمیق به معانی، بافتار متن، شفافیت و کاربرد طبیعی زبان.'
        : 'Professional written translation from English into Persian, with attention to meaning, clarity, context, and natural language.',
      icon: Languages,
      deliverables: [
        lang === 'fa' ? 'انتقال دقیق پیام نویسنده بدون انحراف معنایی' : 'Faithful meaning transfer preserving conceptual integrity',
        lang === 'fa' ? 'رعایت شیوایی و ساختار نحوی طبیعی زبان فارسی' : 'Natural Persian syntax and smooth linguistic flow',
        lang === 'fa' ? 'رعایت رسم‌الخط معیار، علائم نگارشی و نیم‌فاصله‌ها' : 'Standard Persian typography, orthography, and punctuation',
        lang === 'fa' ? 'ترجمه یکدست و تک‌صدایی بدون برون‌سپاری' : 'Consistent single-voiced translation without outsourcing',
      ],
      turnaround: lang === 'fa' ? 'زمان‌بندی توافقی بر اساس حجم و محتوای متن' : 'Timeline agreed upon review of text and volume',
    },
    {
      id: 'article',
      title: lang === 'fa' ? 'ترجمه مقالات' : 'Article Translation',
      subtitle: lang === 'fa' ? 'ترجمه مقالات و محتواهای نوشتاری برای مخاطبان فارسی‌زبان' : 'English-to-Persian translation of articles and written content',
      description: lang === 'fa'
        ? 'ترجمه مقالات و محتواهای نوشتاری از انگلیسی به فارسی، با حفظ دقیق پیام نویسنده و ساختاری خوانا و روان برای مخاطبان فارسی‌زبان.'
        : 'English-to-Persian translation of articles and written content, preserving the original meaning and ensuring readability for Persian-speaking audiences.',
      icon: BookOpen,
      deliverables: [
        lang === 'fa' ? 'حفظ لحن استدلالی، آموزشی یا تحلیلی متن اصلی' : 'Preservation of authorial register and argumentation flow',
        lang === 'fa' ? 'پیوستگی منطقی میان بندها و خوانایی بالا' : 'Logical paragraph transitions and enhanced readability',
        lang === 'fa' ? 'یکپارچگی در انتخاب واژگان کلیدی در سرتاسر مقاله' : 'Terminology harmonization across all sections of the paper',
        lang === 'fa' ? 'تنظیم پانویس‌ها، مراجع و اصطلاحات تخصصی' : 'Accurate handling of citations, footnotes, and specialized terms',
      ],
      turnaround: lang === 'fa' ? 'زمان‌بندی توافقی بر اساس حجم و محتوای متن' : 'Timeline agreed upon review of text and volume',
    },
    {
      id: 'general',
      title: lang === 'fa' ? 'ترجمه متون عمومی' : 'General Text Translation',
      subtitle: lang === 'fa' ? 'ترجمه انواع متون نوشتاری با توجه به زمینه و بیانی سلیس' : 'Translation of general written materials from English into Persian',
      description: lang === 'fa'
        ? 'ترجمه انواع متون عمومی از زبان انگلیسی به فارسی با دقت در معادل‌یابی، درک بافت متن و بیانی سلیس.'
        : 'Translation of general written materials from English into Persian, with careful attention to context, terminology, and natural expression.',
      icon: FileText,
      deliverables: [
        lang === 'fa' ? 'درک دقیق بافت متن و زمینه کاربردی آن' : 'Context-sensitive interpretation tailored to document purpose',
        lang === 'fa' ? 'پرهیز از معادل‌یابی تحت‌اللفظی و ترجمه‌زدگی' : 'Avoidance of awkward word-for-word literal phrasing',
        lang === 'fa' ? 'ارائه متنی شیوا، روشن و ملموس برای خواننده' : 'Clear, accessible, and reader-friendly Persian prose',
        lang === 'fa' ? 'حفظ کامل قالب و ساختار سند مبدا' : 'Preservation of original formatting and document layout',
      ],
      turnaround: lang === 'fa' ? 'زمان‌بندی توافقی بر اساس حجم و محتوای متن' : 'Timeline agreed upon review of text and volume',
    },
  ];

  const deliveryTiers = [
    {
      name: lang === 'fa' ? 'تحویل استاندارد' : 'Standard Delivery',
      desc: lang === 'fa' ? 'مناسب برای پروژه‌های عادی با زمان‌بندی طبیعی' : 'Ideal for scheduled projects with regular turnaround',
      speed: lang === 'fa' ? 'زمان‌بندی توافقی بر اساس حجم' : 'Scheduled based on document volume',
      features: [
        lang === 'fa' ? 'ترجمه کامل و دقیق انسانی توسط اسماء پرنیان‌فرد' : 'Full human translation by Asma Parnianfard',
        lang === 'fa' ? 'بازخوانی تطبیقی سطر به سطر متن مبدا و مقصد' : 'Side-by-side comparative review and quality check',
        lang === 'fa' ? 'حفظ قالب‌بندی و ساختار فایل اصلی' : 'Original file layout and formatting preservation',
        lang === 'fa' ? 'پاسخگویی و هماهنگی جهت بازنگری و اصلاحات پس از تحویل' : 'Post-delivery review and clarification support',
      ],
    },
    {
      name: lang === 'fa' ? 'تحویل فوری و با اولویت' : 'Priority / Expedited',
      desc: lang === 'fa' ? 'برای متون نیازمند تحویل سریع با هماهنگی قبلی' : 'Dedicated acceleration for time-sensitive materials',
      speed: lang === 'fa' ? 'زمان‌بندی فشرده با هماهنگی قبلی' : 'Expedited scheduling on consultation',
      highlight: true,
      features: [
        lang === 'fa' ? 'اولویت‌دهی در صف کاری مترجم' : 'Dedicated priority scheduling in translation queue',
        lang === 'fa' ? 'هماهنگی اختصاصی زمان‌بندی برای تحویل به موقع' : 'Custom deadline scheduling for urgent commitments',
        lang === 'fa' ? 'امکان تحویل مرحله‌ای در پروژه‌های حجیم‌تر' : 'Staged milestone deliveries for larger documents',
        lang === 'fa' ? 'ارتباط مستقیم و پیوسته در تمام مراحل کار' : 'Direct, responsive communication throughout the process',
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
            <span>{lang === 'fa' ? 'خدمات ترجمه کتبی' : 'Translation Services'}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-serif text-[#22272B] leading-tight">
            {lang === 'fa' ? (
              <>
                خدمات ترجمه <br />
                <span className="italic text-[#B79656]">انگلیسی به فارسی</span> با تکیه بر دقت و روانی کلام.
              </>
            ) : (
              <>
                English-to-Persian <br />
                <span className="italic text-[#B79656]">Written Translation Services</span>
              </>
            )}
          </h1>

          <p className="text-base sm:text-lg text-[#22272B]/80 font-sans leading-relaxed">
            {lang === 'fa' ? (
              'ارائه خدمات ترجمه متون نوشتاری، مقالات و متون عمومی از زبان انگلیسی به فارسی با توجه عمیق به معانی، وضوح، بافتار متن و بیانی طبیعی در زبان فارسی.'
            ) : (
              'Specialized written translation services from English into Persian, focusing on articles, informational materials, and general written texts with attention to meaning, context, clarity, and natural language.'
            )}
          </p>
        </div>
      </section>

      {/* 3 SERVICES CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.id}
                id={svc.id}
                className="bg-white border border-[#22272B]/10 p-8 shadow-sm hover:border-[#B79656] transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  <div className="w-12 h-12 bg-[#F8F6F1] flex items-center justify-center border border-[#22272B]/10">
                    <Icon className="w-6 h-6 text-[#22272B]" />
                  </div>

                  <div className="space-y-2">
                    <h2 className="text-2xl font-serif font-semibold text-[#22272B]">
                      {svc.title}
                    </h2>
                    <p className="text-xs font-mono text-[#B79656] font-medium">
                      {svc.subtitle}
                    </p>
                    <p className="text-sm text-[#22272B]/75 font-sans leading-relaxed pt-2">
                      {svc.description}
                    </p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-[#22272B]/10">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#22272B]/60 block">
                      {lang === 'fa' ? 'ویژگی‌های کلیدی این خدمت:' : 'Key Service Highlights:'}
                    </span>
                    <ul className="space-y-2 text-xs text-[#22272B]/80 font-sans">
                      {svc.deliverables.map((d, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#788A78] flex-shrink-0 mt-0.5" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-8 mt-6 border-t border-[#22272B]/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-[#22272B]/60">
                    {svc.turnaround}
                  </span>
                  <Link
                    to={`/quote?service=${svc.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B79656] hover:text-[#22272B] transition-colors"
                  >
                    <span>{lang === 'fa' ? 'استعلام قیمت این خدمت' : 'Request Quote'}</span>
                    <ChevronRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* DELIVERY TIERS */}
      <section className="bg-white py-16 md:py-24 border-y border-[#22272B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#B79656] block">
              {lang === 'fa' ? 'زمان‌بندی و اولویت تحویل' : 'Turnaround & Scheduling'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#22272B]">
              {lang === 'fa' ? 'زمان‌بندی شفاف، متناسب با نیاز پروژه' : 'Realistic Timelines for Quality Translation'}
            </h2>
            <p className="text-[#22272B]/75 text-sm sm:text-base leading-relaxed">
              {lang === 'fa'
                ? 'زمان‌بندی تحویل بر اساس حجم متن، میزان تخصصی بودن موضوع و اولویت زمانی پروژه با کارفرما هماهنگ می‌گردد.'
                : 'Turnaround schedules are agreed upon in advance, ensuring sufficient time for thoughtful translation and comparative review.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {deliveryTiers.map((tier, idx) => (
              <div
                key={idx}
                className={`p-8 border rounded-none relative flex flex-col justify-between ${
                  tier.highlight
                    ? 'border-[#B79656] bg-[#FDFCF9] shadow-md'
                    : 'border-[#22272B]/10 bg-[#F8F6F1]'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-xl font-bold text-[#22272B]">{tier.name}</h3>
                    {tier.highlight && (
                      <span className="px-2.5 py-1 bg-[#B79656] text-white text-[10px] font-mono uppercase tracking-wider">
                        {lang === 'fa' ? 'اولویت ویژه' : 'Priority Track'}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#22272B]/70 font-sans">{tier.desc}</p>
                  <div className="text-sm font-mono text-[#B79656] font-semibold py-1">
                    {tier.speed}
                  </div>

                  <ul className="space-y-2.5 pt-4 border-t border-[#22272B]/10 text-xs text-[#22272B]/80 font-sans">
                    {tier.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#788A78] flex-shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8">
                  <Link
                    to="/quote"
                    className={`w-full py-3 px-4 text-xs font-semibold text-center block transition-colors ${
                      tier.highlight
                        ? 'bg-[#B79656] text-white hover:bg-[#22272B]'
                        : 'bg-[#22272B] text-white hover:bg-[#B79656]'
                    }`}
                  >
                    {lang === 'fa' ? 'انتخاب و استعلام قیمت' : 'Inquire for this Track'}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALCULATOR EMBED */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#B79656] block">
              {lang === 'fa' ? 'بررسی مقیاس و حجم پروژه' : 'Volume & Scope Guide'}
            </span>
            <h2 className="text-3xl font-serif text-[#22272B]">
              {lang === 'fa' ? 'ارزیابی حجم متن و نیازمندی‌های پروژه' : 'Evaluate Project Volume & Scope'}
            </h2>
            <p className="text-sm text-[#22272B]/80 leading-relaxed font-sans">
              {lang === 'fa'
                ? 'تعداد تقریبی کلمات متن خود را انتخاب فرمایید تا مقیاس پروژه را مشاهده نمایید. زمان‌بندی دقیق تحویل پس از بررسی متن و میزان فشردگی کار توافق خواهد شد.'
                : 'Select your approximate word count to examine project scale benchmarks. Accurate timelines and schedules are agreed upon review of the text and its complexity.'}
            </p>
          </div>
          <div className="lg:col-span-7">
            <EstimateCalculator />
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-[#22272B] text-white py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left" style={{ textAlign: isRTL ? 'right' : undefined }}>
            <h2 className="text-2xl sm:text-3xl font-serif">
              {lang === 'fa' ? 'متن خود را برای برآورد هزینه و زمان ارسال کنید' : 'Ready to start your translation project?'}
            </h2>
            <p className="text-white/70 text-xs sm:text-sm font-sans">
              {lang === 'fa'
                ? 'بررسی محرمانه و صدور پیش‌فاکتور شفاف در اسرع وقت انجام می‌گیرد.'
                : 'Confidential review and transparent turnaround quotes provided promptly.'}
            </p>
          </div>

          <div className="flex items-center gap-4 flex-shrink-0">
            <Link
              to="/quote"
              className="px-6 py-3 bg-[#B79656] text-white hover:bg-white hover:text-[#22272B] transition-colors font-medium text-xs sm:text-sm"
            >
              {lang === 'fa' ? 'درخواست استعلام قیمت' : 'Request Official Quote'}
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 border border-white/30 text-white hover:border-white transition-colors text-xs sm:text-sm"
            >
              {lang === 'fa' ? 'تماس با مترجم' : 'Contact Translator'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
