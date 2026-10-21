import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  FileText, 
  Briefcase 
} from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

export default function BusinessTranslationPage() {
  const { lang, isRTL } = useLanguage();

  const businessContracts = [
    {
      title: lang === 'fa' ? 'اساسنامه و اظهارنامه ثبت شرکت' : 'Articles of Association & Corporate Charters',
      desc: lang === 'fa'
        ? 'ترجمه مواد مربوط به حدود اختیارات مدیران، مجمع عمومی، نحوه تقسیم سود و انحلال شرکت مطابق با قانون تجارت.'
        : 'Statutory drafting of governance bylaws, shareholder rights, director authorities, and dissolution mechanics under commercial codes.',
    },
    {
      title: lang === 'fa' ? 'موافقت‌نامه‌های سرمایه‌گذاری مشترک (Joint Venture)' : 'Cross-Border Joint Venture Agreements',
      desc: lang === 'fa'
        ? 'قراردادهای انتقال فناوری، مالکیت مشترک دارایی‌ها و حل و فصل اختلافات در مراجع داوری بین‌المللی.'
        : 'Equity participation pacts, technology transfer frameworks, capital calls, and international arbitration dispute clauses.',
    },
    {
      title: lang === 'fa' ? 'اسناد مناقصات بین‌المللی و تضامین' : 'International Tender Dossiers & Commercial Bids',
      desc: lang === 'fa'
        ? 'شرایط عمومی و خصوصی پیمان، مشخصات فنی پروژه‌ها، ضمانت‌نامه‌های بانکی و پیشنهادهای تجاری.'
        : 'FIDIC contracts, technical project specifications, performance bond guarantees, and competitive commercial tenders.',
    },
    {
      title: lang === 'fa' ? 'توافق‌نامه‌های عدم افشا (Bilateral NDA)' : 'Bilateral Non-Disclosure & Restrictive Covenants',
      desc: lang === 'fa'
        ? 'حفاظت از اسرار تجاری، تعریف دقیق اطلاعات محرمانه و بندهای منع رقابت و عدم تطمیع.'
        : 'Confidentiality boundaries, trade secret definitions, non-compete stipulations, and cross-jurisdictional enforcement clauses.',
    },
  ];

  return (
    <div className="space-y-20 py-8 md:py-12">
      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B79656]">
            <span className="w-8 h-[1px] bg-[#B79656]"></span>
            <span>{lang === 'fa' ? 'حوزه تخصصی ۳' : 'Specialized Practice Discipline'}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-serif text-[#22272B] leading-tight">
            {lang === 'fa' ? (
              <>
                ترجمه بازرگانی و قراردادهای تجاری <br />
                <span className="italic text-[#B79656]">با تضمین استحکام حقوقی و حفظ منافع طرفین.</span>
              </>
            ) : (
              <>
                Commercial & Business Translation <br />
                <span className="italic text-[#B79656]">For Cross-Border Deals, JV Agreements & Charters.</span>
              </>
            )}
          </h1>

          <p className="text-base sm:text-lg text-[#22272B]/80 font-sans leading-relaxed">
            {lang === 'fa' ? (
              'ترجمه تخصصی اساسنامه‌ها، قراردادهای سرمایه‌گذاری مشترک، اسناد مناقصات بین‌المللی و تفاهم‌نامه‌های محرمانگی با دقت در ساختار مواد و تبصره‌های حقوقی.'
            ) : (
              'Authoritative English-to-Persian translation of cross-border joint ventures, corporate bylaws, distribution agreements, and international tenders where contract precision is non-negotiable.'
            )}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link
              to="/quote?service=business"
              className="px-6 py-3 bg-[#22272B] text-white hover:bg-[#B79656] transition-colors text-xs sm:text-sm font-medium shadow-sm"
            >
              {lang === 'fa' ? 'استعلام قیمت ترجمه قراردادهای تجاری' : 'Request Commercial Quote'}
            </Link>
            <Link
              to="/portfolio/cross-border-joint-venture"
              className="px-5 py-3 border border-[#22272B]/20 text-[#22272B] hover:border-[#B79656] text-xs sm:text-sm font-medium"
            >
              {lang === 'fa' ? 'مشاهده نمونه قرارداد سرمایه‌گذاری مشترک' : 'View JV Case Study'}
            </Link>
          </div>
        </div>
      </section>

      {/* VISUAL SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#22272B]/10 p-8 md:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-[#B79656] font-semibold">
              {lang === 'fa' ? 'حساسیت قراردادهای فرامرزی' : 'Cross-Border Contractual Integrity'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#22272B]">
              {lang === 'fa' ? 'حفظ استحکام حقوقی در هر ماده و بند' : 'Enforceable Precision in Every Clause'}
            </h2>
            <p className="text-xs sm:text-sm text-[#22272B]/80 font-sans leading-relaxed">
              {lang === 'fa' ? (
                'در قراردادهای تجاری، تفاوت میان عباراتی نظیر "shall indemnify" و "shall hold harmless"، یا نحوه تبیین شرایط داوری بین‌المللی (Arbitration)، بار حقوقی تعیین‌کننده‌ای دارد. ترجمه من تضمین می‌کند حقوق و تعهدات شما با شفافیت کامل به فارسی بازگردانده شود.'
              ) : (
                'In international commercial transactions, slight syntactical shifts between indemnity obligations and representations can alter legal liability. Asma’s translations protect corporate interests by preserving legal force while delivering fluent Persian drafting.'
              )}
            </p>
            <div className="pt-2 text-xs text-[#22272B]/75 space-y-2">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#788A78]" />
                <span>{lang === 'fa' ? 'حفظ یکدستی اصطلاحات در قراردادهای چندصد صفحه‌ای' : 'Consistent terminology cross-referencing across multi-volume contracts'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#788A78]" />
                <span>{lang === 'fa' ? 'رعایت کامل ضوابط عدم افشا و حفظ اسرار تجاری' : 'Bilateral non-disclosure agreements prior to source text review'}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative bg-[#F8F6F1] p-3 border border-[#22272B]/10 shadow-md">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/assets/aistudio/Image_5_2032c408.jpeg"
                  alt="Corporate Boardroom and Strategic Contract Review"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="pt-3 px-1 text-[11px] text-[#22272B]/60 font-mono flex justify-between">
                <span>International Commercial Framework</span>
                <span>Confidential Governance Review</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTRACT SCOPES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {businessContracts.map((item, idx) => (
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
          {lang === 'fa' ? 'قرارداد تجاری خود را جهت برآورد ترجمه ارسال نمایید' : 'Submit Commercial Agreements for Confirmed Evaluation'}
        </h2>
        <div className="pt-2">
          <Link
            to="/quote?service=business"
            className="px-8 py-3.5 bg-[#B79656] text-white hover:bg-[#22272B] transition-colors font-medium text-xs sm:text-sm inline-flex items-center gap-2"
          >
            <span>{lang === 'fa' ? 'شروع سفارش قرارداد تجاری' : 'Request Commercial Quote'}</span>
            <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
          </Link>
        </div>
      </section>
    </div>
  );
}
