import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe2, 
  Check, 
  ArrowRight, 
  Code, 
  Layout, 
  Layers, 
  Cpu 
} from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

export default function LocalizationPage() {
  const { lang, isRTL } = useLanguage();

  const rtlChecklist = [
    {
      title: lang === 'fa' ? 'محاسبه افزایش طول رشته‌ها (Text Expansion)' : 'Accommodating Text Expansion (+20-30%)',
      desc: lang === 'fa'
        ? 'متون فارسی به طور متوسط ۲۰ تا ۳۰ درصد طولانی‌تر از انگلیسی هستند؛ جلوگیری از سرریز متن از دکمه‌ها و کادرهای طراحی.'
        : 'Persian translations often expand by 20–30% in character length. Preventing visual truncation across buttons and fixed-width navigation.',
    },
    {
      title: lang === 'fa' ? 'تنظیم جهت اجزای رابط کاربری (RTL Mirroring)' : 'Bidirectional Component Mirroring',
      desc: lang === 'fa'
        ? 'آینه‌ای کردن آیکون‌های جهت‌دار، اسلایدرها و ترتیب چینش ستون‌ها بدون معکوس کردن نادرست علائم جهانی چون پخش مدیا.'
        : 'Mirroring chevrons, progression bars, and drawer panels while correctly maintaining universal LTR semantics for audio scrubbers and code snippets.',
    },
    {
      title: lang === 'fa' ? 'فرمت‌بندی ساختاریافته متغیرها (ICU / Interpolation)' : 'Variable Interpolation & ICU MessageFormat',
      desc: lang === 'fa'
        ? 'حفظ بدون تغییر متغیرها مانند {count} یا %s و رعایت گرامر جمع و مفرد در زبان فارسی.'
        : 'Preserving placeholders, HTML tags, and pluralization branches without breaking programmatic application state.',
    },
    {
      title: lang === 'fa' ? 'انتخاب قلم بومی بهینه (Web Font Curation)' : 'High-Legibility Persian Web Fonts',
      desc: lang === 'fa'
        ? 'توصیه و تنظیم قلم‌های مدرن مانند وزیرمتن (Vazirmatn) برای حداکثر خوانایی در صفحات نمایش موبایل و دسکتاپ.'
        : 'Deploying modern digital typefaces such as Vazirmatn to ensure razor-sharp legibility across retina displays.',
    },
  ];

  return (
    <div className="space-y-20 py-8 md:py-12">
      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B79656]">
            <span className="w-8 h-[1px] bg-[#B79656]"></span>
            <span>{lang === 'fa' ? 'حوزه تخصصی ۵' : 'Specialized Practice Discipline'}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-serif text-[#22272B] leading-tight">
            {lang === 'fa' ? (
              <>
                بومی‌سازی وب‌سایت، نرم‌افزار و اپلیکیشن <br />
                <span className="italic text-[#B79656]">تطبیق کامل رابط کاربری با ساختار راست‌به‌چپ (RTL).</span>
              </>
            ) : (
              <>
                Website & Software Localization <br />
                <span className="italic text-[#B79656]">Flawless Bidirectional RTL Interface Engineering.</span>
              </>
            )}
          </h1>

          <p className="text-base sm:text-lg text-[#22272B]/80 font-sans leading-relaxed">
            {lang === 'fa' ? (
              'ترجمه کاتالوگ‌های رشته متنی در قالب‌های استاندارد JSON، XLIFF، PO و YAML همراه با مشاوره تخصصی در زمینه بهینه‌سازی تجربه کاربری (UX) برای کاربران فارسی‌زبان.'
            ) : (
              'Translating UI string catalogs in structured formats (JSON, XLIFF, PO, YAML) coupled with expert architectural guidance on RTL layout mirroring and cultural adaptation.'
            )}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link
              to="/quote?service=localization"
              className="px-6 py-3 bg-[#22272B] text-white hover:bg-[#B79656] transition-colors text-xs sm:text-sm font-medium shadow-sm"
            >
              {lang === 'fa' ? 'استعلام بومی‌سازی نرم‌افزار' : 'Request Localization Quote'}
            </Link>
            <Link
              to="/portfolio/fintech-dashboard-rtl"
              className="px-5 py-3 border border-[#22272B]/20 text-[#22272B] hover:border-[#B79656] text-xs sm:text-sm font-medium"
            >
              {lang === 'fa' ? 'مشاهده نمونه بومی‌سازی فین‌تک' : 'View FinTech Localization Study'}
            </Link>
          </div>
        </div>
      </section>

      {/* CAT TOOL SPOTLIGHT & AUTHENTIC IMAGE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#22272B]/10 p-8 md:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-[#B79656] font-semibold">
              {lang === 'fa' ? 'زیرساخت ابزارهای CAT' : 'CAT Toolchain & String Isolation'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#22272B]">
              {lang === 'fa' ? 'ترجمه بدون آسیب به کدهای نرم‌افزاری' : 'Zero Code Breakage Guarantee'}
            </h2>
            <p className="text-xs sm:text-sm text-[#22272B]/80 font-sans leading-relaxed">
              {lang === 'fa' ? (
                'استفاده از محیط‌های پیشرفته CAT نظیر Trados و memoQ تضمین می‌کند که برچسب‌های HTML، کلیدهای JSON و متغیرهای پویا بدون تغییر باقی بمانند و توسعه‌دهندگان بتوانند فایل ترجمه‌شده را مستقیماً در مخزن گیت کامیت نمایند.'
              ) : (
                'By leveraging industry-grade translation environments (SDL Trados, memoQ), source code syntax, interpolation tokens, and UI layout tags are isolated and protected. Developers can merge localized catalogs directly into CI/CD pipelines without syntax errors.'
              )}
            </p>
            <div className="pt-2 text-xs text-[#22272B]/75 space-y-2">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#788A78]" />
                <span>{lang === 'fa' ? 'پشتیبانی از فرمت‌های JSON, XLIFF, PO, YAML, ARB' : 'Native support for JSON, XLIFF, PO, YAML, and ARB catalogs'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#788A78]" />
                <span>{lang === 'fa' ? 'تست و بازبینی دیداری در محیط پیش‌نمایش واقعی' : 'Contextual in-app visual verification on test builds'}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative bg-[#F8F6F1] p-3 border border-[#22272B]/10 shadow-md">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/assets/aistudio/Image_4_f7eef0ea.jpeg"
                  alt="CAT Tool Screen with RTL UI String Translation Interface"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="pt-3 px-1 text-[11px] text-[#22272B]/60 font-mono flex justify-between">
                <span>CAT Software Environment</span>
                <span>Bidirectional Translation Grid</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RTL CHECKLIST */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="max-w-2xl space-y-2">
          <h2 className="text-2xl sm:text-3xl font-serif text-[#22272B]">
            {lang === 'fa' ? 'چک‌لیست مهندسی راست‌به‌چپ (RTL)' : 'Engineering the Persian RTL Experience'}
          </h2>
          <p className="text-xs sm:text-sm text-[#22272B]/70 font-sans">
            {lang === 'fa'
              ? 'چهار عامل حیاتی که موفقیت نرم‌افزار را در بازار فارسی تضمین می‌کند.'
              : 'Four architectural factors critical to user retention and adoption in the Persian market.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {rtlChecklist.map((item, idx) => (
            <div key={idx} className="bg-white border border-[#22272B]/10 p-8 space-y-3 shadow-sm hover:border-[#B79656] transition-colors">
              <span className="text-xs font-mono font-bold text-[#B79656]">0{idx + 1}.</span>
              <h3 className="text-xl font-serif font-semibold text-[#22272B]">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#22272B]/75 leading-relaxed font-sans">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h2 className="text-3xl font-serif text-[#22272B]">
          {lang === 'fa' ? 'محصول نرم‌افزاری خود را برای بازار فارسی آماده کنید' : 'Scale Your Digital Product to 85+ Million Persian Speakers'}
        </h2>
        <div className="pt-2">
          <Link
            to="/quote?service=localization"
            className="px-8 py-3.5 bg-[#B79656] text-white hover:bg-[#22272B] transition-colors font-medium text-xs sm:text-sm inline-flex items-center gap-2"
          >
            <span>{lang === 'fa' ? 'شروع سفارش بومی‌سازی نرم‌افزار' : 'Start Localization Project'}</span>
            <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
          </Link>
        </div>
      </section>
    </div>
  );
}
