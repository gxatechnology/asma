import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Check, 
  ArrowRight, 
  PenTool, 
  Sparkles, 
  CheckCircle2, 
  BookOpen 
} from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

export default function ProofreadingPage() {
  const { lang, isRTL } = useLanguage();

  const comparisonExamples = [
    {
      label: lang === 'fa' ? 'متن اولیه (دارای حشو و ابهام نحوی)' : 'Unrefined Draft (Syntactic Redundancy)',
      raw: 'شرکت به دلیل عدم وجود نقدینگی کافی نتوانست اقدام به پرداخت تعهدات جاری در سررسیدهای مقرر نماید که منجر به جریمه شد.',
      refined: 'شرکت به علت کمبود نقدینگی، موفق به ایفای تعهدات جاری در سررسید مقرر نگردید؛ امری که به وضع جرایم دیرکرد انجامید.',
      reason: lang === 'fa' ? 'حذف فعل کمکی مکرر، اصلاح ساختار جمله و به کارگیری واژگان رسمی‌تر مالی.' : 'Elimination of auxiliary verb redundancy and elevation to standard financial prose.',
    },
    {
      label: lang === 'fa' ? 'متن ترجمه ماشینی خام' : 'Raw Machine Translation Artifact',
      raw: 'این خط‌مشی برای همه کارمندان اعمال می‌شود و آن‌ها باید از آن پیروی کنند در تمام زمان‌ها.',
      refined: 'این خط‌مشی بر کلیه کارکنان حاکم بوده و رعایت مستمر مفاد آن برای همگان الزامی است.',
      reason: lang === 'fa' ? 'تبدیل ترجمه لفظ‌به‌لفظ انگلیسی به ساختار حقوقی فاخر فارسی با رسم‌الخط مصوب.' : 'Syntactic transformation from literal calque to authoritative corporate policy register.',
    },
  ];

  return (
    <div className="space-y-20 py-8 md:py-12">
      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B79656]">
            <span className="w-8 h-[1px] bg-[#B79656]"></span>
            <span>{lang === 'fa' ? 'حوزه تخصصی ۴' : 'Specialized Practice Discipline'}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-serif text-[#22272B] leading-tight">
            {lang === 'fa' ? (
              <>
                ویرایش و بازخوانی تخصصی متن <br />
                <span className="italic text-[#B79656]">پالایش نثر، صحت نگارش و تطبیق دوسویه.</span>
              </>
            ) : (
              <>
                Academic & Editorial Proofreading <br />
                <span className="italic text-[#B79656]">Substantive Editing & Bilingual Cross-Audits.</span>
              </>
            )}
          </h1>

          <p className="text-base sm:text-lg text-[#22272B]/80 font-sans leading-relaxed">
            {lang === 'fa' ? (
              'بازخوانی سطر به سطر ترجمه‌ها در برابر متن انگلیسی، رفع گرته‌برداری‌های نحوی، اصلاح رسم‌الخط و نیم‌فاصله‌ها بر اساس دستور خط فرهنگستان، و یکدست‌سازی واژگان تخصصی.'
            ) : (
              'Comprehensive stylistic polish, bilingual cross-verification against source English, orthographic normalization, and academic thesis proofreading.'
            )}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link
              to="/quote?service=proofreading"
              className="px-6 py-3 bg-[#22272B] text-white hover:bg-[#B79656] transition-colors text-xs sm:text-sm font-medium shadow-sm"
            >
              {lang === 'fa' ? 'استعلام هزینه ویرایش و بازخوانی' : 'Request Proofreading Quote'}
            </Link>
            <Link
              to="/portfolio/oxford-economics-proofreading"
              className="px-5 py-3 border border-[#22272B]/20 text-[#22272B] hover:border-[#B79656] text-xs sm:text-sm font-medium"
            >
              {lang === 'fa' ? 'مشاهده نمونه پرونده ویرایش' : 'View Proofreading Case Study'}
            </Link>
          </div>
        </div>
      </section>

      {/* VISUAL & PHYSICAL PROOFING SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#22272B]/10 p-8 md:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-[#B79656] font-semibold">
              {lang === 'fa' ? 'دقت قلم در بازخوانی' : 'Multi-Pass Pen & Paper Rigor'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#22272B]">
              {lang === 'fa' ? 'فراتر از خطایاب‌های خودکار' : 'Beyond Automated Spell-Checkers'}
            </h2>
            <p className="text-xs sm:text-sm text-[#22272B]/80 font-sans leading-relaxed">
              {lang === 'fa' ? (
                'خطایاب‌های نرم‌افزاری تنها غلط‌های املایی فاحش را نشان می‌دهند. تشخیص تنافر کلمات، عدم تطابق زمان افعال، افتادگی‌های احتمالی جملات و لحن نامناسب نیازمند مطالعه متمرکز و بازخوانی تطبیقی توسط مترجم متخصص است.'
              ) : (
                'Automated spell-check tools fail to detect semantic dissonance, dropped clauses, register mismatch, or unidiomatic syntax. Asma employs physical printout review sessions with archival fountain pens to audit sentence rhythm and paragraph flow.'
              )}
            </p>
            <div className="pt-2 text-xs text-[#22272B]/75 space-y-2">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#788A78]" />
                <span>{lang === 'fa' ? 'اعمال دقیق نیم‌فاصله‌ها و رسم‌الخط مصوب فرهنگستان' : 'Strict Persian zero-width non-joiner (ZWNJ) orthography'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#788A78]" />
                <span>{lang === 'fa' ? 'مقایسه تطبیقی برای رفع هرگونه افتادگی احتمالی' : 'Zero omission verification against original English paragraphs'}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative bg-[#F8F6F1] p-3 border border-[#22272B]/10 shadow-md">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/assets/aistudio/Image_3_6dc99c9e.jpeg"
                  alt="Editorial Proofreading with Fountain Pen on Print Proofs"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="pt-3 px-1 text-[11px] text-[#22272B]/60 font-mono flex justify-between">
                <span>Substantive Printout Audit</span>
                <span>Fountain Pen Marginalia</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER EXAMPLES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="max-w-2xl space-y-2">
          <h2 className="text-2xl sm:text-3xl font-serif text-[#22272B]">
            {lang === 'fa' ? 'نمونه‌های عینی ویرایش و ارتقای نثر' : 'Real Before & After Linguistic Enhancements'}
          </h2>
          <p className="text-xs sm:text-sm text-[#22272B]/70 font-sans">
            {lang === 'fa' 
              ? 'تغییر جملات ناهمگون به نثری رسا، شیوا و استاندارد.'
              : 'Demonstrating the transformation of awkward syntax into fluent, executive-grade Persian.'}
          </p>
        </div>

        <div className="space-y-6">
          {comparisonExamples.map((ex, idx) => (
            <div key={idx} className="bg-white border border-[#22272B]/10 p-6 space-y-4 shadow-sm">
              <span className="text-xs font-mono font-semibold text-[#B79656]">
                {ex.label}
              </span>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-[#F8F6F1] border border-[#22272B]/10 rounded-none space-y-1">
                  <span className="text-[11px] font-mono uppercase text-[#22272B]/50 block">
                    {lang === 'fa' ? 'پیش‌نویس اولیه (قبل از ویرایش)' : 'Before Editorial Pass'}
                  </span>
                  <p className="text-sm text-[#22272B]/70 line-through decoration-[#B79656]/60 leading-relaxed font-persian" dir="rtl">
                    {ex.raw}
                  </p>
                </div>

                <div className="p-4 bg-[#788A78]/10 border border-[#788A78]/30 rounded-none space-y-1">
                  <span className="text-[11px] font-mono uppercase text-[#788A78] font-bold block">
                    {lang === 'fa' ? 'نسخه بازخوانی و پالایش‌شده نهایی' : 'Final Polished Version'}
                  </span>
                  <p className="text-sm text-[#22272B] font-semibold leading-relaxed font-persian" dir="rtl">
                    {ex.refined}
                  </p>
                </div>
              </div>

              <div className="text-xs text-[#22272B]/60 font-sans border-t border-[#22272B]/10 pt-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#788A78]" />
                <span>{ex.reason}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h2 className="text-3xl font-serif text-[#22272B]">
          {lang === 'fa' ? 'کیفیت نگارش اسناد خود را ارتقا دهید' : 'Polish Your Translation to Perfection'}
        </h2>
        <div className="pt-2">
          <Link
            to="/quote?service=proofreading"
            className="px-8 py-3.5 bg-[#22272B] text-white hover:bg-[#B79656] transition-colors font-medium text-xs sm:text-sm inline-flex items-center gap-2"
          >
            <span>{lang === 'fa' ? 'درخواست استعلام ویرایش' : 'Request Proofreading Quote'}</span>
            <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
          </Link>
        </div>
      </section>
    </div>
  );
}
