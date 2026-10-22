import React from 'react';
import { Link } from 'react-router-dom';
import {
  FileUp,
  ShieldCheck,
  Search,
  Languages,
  PenLine,
  CheckCheck,
  Type,
  FileCheck,
  CheckCircle2,
  ArrowRight,
  Clock,
  Lock
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function ProcessPage() {
  const { lang, isRTL } = useLanguage();

  const stages = [
    {
      num: '01',
      title: lang === 'fa' ? 'دریافت اولیه و بررسی محرمانه متن' : 'Secure Intake & Initial Review',
      desc: lang === 'fa'
        ? 'ارسال متن یا مقاله از طریق فرم استعلام. تمامی فایل‌ها با رعایت کامل رازداری بررسی می‌شوند و در صورت تمایل کارفرما، توافق‌نامه حفظ محرمانگی (NDA) امضا خواهد شد.'
        : 'Source files are received securely. Materials are reviewed under strict confidentiality, with mutual Non-Disclosure Agreements (NDAs) available upon request.',
      icon: ShieldCheck,
      deliverable: lang === 'fa' ? 'برآورد شفاف هزینه و زمان‌بندی دقیق' : 'Itemized Turnaround & Scope Estimate',
    },
    {
      num: '02',
      title: lang === 'fa' ? 'واکاوی متن و درک زمینه موضوعی' : 'Context & Terminology Assessment',
      desc: lang === 'fa'
        ? 'بررسی بافتار متن، درک هدف و مخاطب نوشته و انتخاب معادل‌های متناسب برای واژگان و اصطلاحات کلیدی پیش از آغاز ترجمه.'
        : 'Detailed reading of the text to understand authorial intent, target audience, and subject-matter terminology.',
      icon: Search,
      deliverable: lang === 'fa' ? 'تعیین لحن و هماهنگی واژگان کلیدی' : 'Stylistic & Lexical Alignment',
    },
    {
      num: '03',
      title: lang === 'fa' ? 'ترجمه دست‌اول و روان توسط مترجم' : 'Thoughtful Human Translation',
      desc: lang === 'fa'
        ? 'ترجمه خط به خط منحصراً توسط شخص اسماء پرنیان‌فرد، با تمرکز بر انتقال کامل مفهوم و پایبندی به ساختار نحوی شیوا و طبیعی زبان فارسی.'
        : 'Line-by-line translation executed solely by Asma Parnianfard, ensuring consistent stylistic tone, conceptual clarity, and natural Persian phrasing.',
      icon: PenLine,
      deliverable: lang === 'fa' ? 'پیش‌نویس اولیه ترجمه فارسی' : 'Primary Persian Target Draft',
    },
    {
      num: '04',
      title: lang === 'fa' ? 'بازخوانی تطبیقی سطر به سطر' : 'Bilingual Comparative Audit',
      desc: lang === 'fa'
        ? 'مقایسه موازی متن ترجمه در برابر مبدا انگلیسی جهت اطمینان از صحت جملات، عدم افتادگی و انطباق کامل با مفهوم اصلی.'
        : 'Rigorous side-by-side verification comparing English source and Persian translation to verify completeness and faithful meaning.',
      icon: CheckCheck,
      deliverable: lang === 'fa' ? 'کنترل دقت و رفع هرگونه ابهام' : 'Omission & Concordance Verification',
    },
    {
      num: '05',
      title: lang === 'fa' ? 'تنظیم چیدمان و رسم‌الخط فارسی' : 'Formatting & Typography Polish',
      desc: lang === 'fa'
        ? 'تنظیم پاراگراف‌ها، علائم نگارشی فارسی، رعایت نیم‌فاصله‌ها و تطبیق ساختار فایل نهایی با فرمت فایل مبدا.'
        : 'Polishing Persian orthography, punctuation, spacing, and formatting to deliver a clean, well-formatted document.',
      icon: Type,
      deliverable: lang === 'fa' ? 'سند نهایی در قالب استاندارد (Word / PDF)' : 'Final Formatted Document in Original Format',
    },
    {
      num: '06',
      title: lang === 'fa' ? 'تحویل نهایی و پاسخگویی تکمیلی' : 'Final Delivery & Post-Delivery Review',
      desc: lang === 'fa'
        ? 'ارسال نسخه نهایی به همراه امکان بررسی متن توسط کارفرما و اعمال هرگونه اصلاح یا توضیح تکمیلی.'
        : 'Delivery of final materials, accompanied by post-delivery communication to answer client questions and accommodate refinements.',
      icon: CheckCircle2,
      deliverable: lang === 'fa' ? 'پشتیبانی و اعمال اصلاحات تکمیلی' : 'Post-Delivery Linguistic Clarification Support',
    },
  ];

  return (
    <div className="space-y-24 py-8 md:py-12">
      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B79656]">
            <span className="w-8 h-[1px] bg-[#B79656]"></span>
            <span>{lang === 'fa' ? 'فرآیند کار' : 'Translation Workflow'}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-serif text-[#22272B] leading-tight">
            {lang === 'fa' ? (
              <>
                مراحل گام‌به‌گام ترجمه <br />
                <span className="italic text-[#B79656]">از بررسی اولیه متن تا تحویل نهایی.</span>
              </>
            ) : (
              <>
                A Methodical Translation Process <br />
                <span className="italic text-[#B79656]">From Initial Intake to Final Polish.</span>
              </>
            )}
          </h1>

          <p className="text-base sm:text-lg text-[#22272B]/80 font-sans leading-relaxed">
            {lang === 'fa' ? (
              'رویکردی مرحله‌ای و سنجیده در ترجمه متون نوشتاری، برای اطمینان از انتقال صحیح مفاهیم، ساختار منسجم و شیوایی زبان فارسی.'
            ) : (
              'A structured, thoughtful approach to written translation ensuring conceptual fidelity, clear structure, and natural Persian expression.'
            )}
          </p>
        </div>
      </section>

      {/* STAGES CHRONOLOGY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {stages.map((stg) => {
            const Icon = stg.icon;
            return (
              <div
                key={stg.num}
                className="premium-card p-8 sm:p-10 relative group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                  {/* Left Stage Indicator */}
                  <div className="lg:col-span-3 flex items-center gap-4">
                    <span className="text-4xl sm:text-5xl font-serif font-bold text-[#B79656]/30">
                      {stg.num}
                    </span>
                    <div className="premium-icon-box">
                      <Icon className="w-6 h-6 text-[#22272B]" />
                    </div>
                  </div>

                  {/* Center Description */}
                  <div className="lg:col-span-6 space-y-2">
                    <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#22272B] premium-card-title transition-colors">
                      {stg.title}
                    </h2>
                    <p className="text-sm text-[#22272B]/75 leading-relaxed font-sans">
                      {stg.desc}
                    </p>
                  </div>

                  {/* Right Output Pill */}
                  <div className="lg:col-span-3 lg:text-right pt-2 lg:pt-0">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#B79656] block mb-1">
                      {lang === 'fa' ? 'خروجی این مرحله:' : 'Stage Deliverable:'}
                    </span>
                    <span className="text-xs font-semibold text-[#22272B] bg-[#F8F6F1] px-3 py-1.5 border border-[#22272B]/10 inline-block">
                      {stg.deliverable}
                    </span>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-[#22272B] text-white py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left" style={{ textAlign: isRTL ? 'right' : undefined }}>
            <h2 className="text-2xl sm:text-3xl font-serif">
              {lang === 'fa' ? 'تمایل دارید پروژه خود را مورد ارزیابی قرار دهید؟' : 'Ready to begin your translation?'}
            </h2>
            <p className="text-white/70 text-xs sm:text-sm font-sans">
              {lang === 'fa'
                ? 'پیش‌فاکتور شفاف به همراه زمان‌بندی دقیق در اسرع وقت خدمت شما ارائه خواهد شد.'
                : 'Receive a transparent turnaround projection and quotation promptly.'}
            </p>
          </div>

          <div className="flex items-center gap-4 flex-shrink-0">
            <Link
              to="/quote"
              className="px-6 py-3 bg-[#B79656] text-white hover:bg-white hover:text-[#22272B] transition-colors font-medium text-xs sm:text-sm"
            >
              {lang === 'fa' ? 'استعلام قیمت و سفارش' : 'Request a Quote'}
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 border border-white/30 text-white hover:border-white transition-colors text-xs sm:text-sm"
            >
              {lang === 'fa' ? 'تماس با مترجم' : 'Contact Direct'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
