import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileUp, 
  ShieldCheck, 
  Search, 
  Languages, 
  FileCheck, 
  CheckCircle2, 
  ArrowRight,
  Clock,
  Lock,
  Cpu
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function ProcessPage() {
  const { lang, isRTL } = useLanguage();

  const stages = [
    {
      num: '01',
      title: lang === 'fa' ? 'ارسال اولیه و امضای توافق‌نامه محرمانگی (NDA)' : 'Secure Intake & Mutual NDA',
      desc: lang === 'fa'
        ? 'ارسال اسناد از طریق سامانه رمزگذاری‌شده. پیش از مطالعه هرگونه سند دارای بار محرمانه، قرارداد رسمی دوجانبه عدم افشا (Bilateral NDA) به امضا می‌رسد.'
        : 'Source files are transferred via end-to-end encrypted protocol. A binding bilateral Non-Disclosure Agreement (NDA) is executed prior to examining any proprietary financial or legal records.',
      icon: Lock,
      deliverable: lang === 'fa' ? 'پیش‌فاکتور رسمی، زمان‌بندی دقیق و NDA امضاشده' : 'Signed Bilateral NDA & Formal Itemized Quote',
    },
    {
      num: '02',
      title: lang === 'fa' ? 'واکاوی سند و استخراج اصطلاحات کلیدی' : 'Corpus Analysis & Termbase Extraction',
      desc: lang === 'fa'
        ? 'تحلیل واژگانی متن مبدا، استخراج اصطلاحات حساس مالی و تطبیق آن‌ها با منابع رسمی نظیر سازمان حسابرسی ایران و استانداردهای بین‌المللی IFRS.'
        : 'Automated and human corpus profiling to identify specialized terminology, industry acronyms, and statutory references. A project-specific termbase is drafted and locked.',
      icon: Search,
      deliverable: lang === 'fa' ? 'واژه‌نامه مصوب پیش از آغاز ترجمه' : 'Pre-flight Concordance Glossary',
    },
    {
      num: '03',
      title: lang === 'fa' ? 'ترجمه دست‌اول و تک‌صدایی انسان' : 'Single-Voice Human Translation Craft',
      desc: lang === 'fa'
        ? 'ترجمه سطر به سطر منحصراً توسط شخص اسماء پرنیان‌فرد با پایبندی به لحن رسمی و ساختار نحوی شیوا، بدون هیچ‌گونه برون‌سپاری ناشناس.'
        : 'Line-by-line translation executed solely by Asma Parnianfard. This ensures stylistic consistency and complete accountability without outsourced subcontractors.',
      icon: Languages,
      deliverable: lang === 'fa' ? 'پیش‌نویس اولیه ترجمه کامل شده' : 'Complete Primary Persian Target Draft',
    },
    {
      num: '04',
      title: lang === 'fa' ? 'بازخوانی تطبیقی دوسویه و کنترل اعداد' : 'Bilingual Cross-Audit & Numerical Audit',
      desc: lang === 'fa'
        ? 'مقایسه موشکافانه متن ترجمه در برابر مبدا انگلیسی جهت حصول اطمینان از عدم افتادگی جملات، صحت ارقام مالی، ممیزها و ارجاعات پانویس‌ها.'
        : 'Rigorous bilingual audit verifying source-target fidelity. Numbers, currency symbols, footnote markers, and legal covenants undergo independent validation.',
      icon: FileCheck,
      deliverable: lang === 'fa' ? 'گزارش کنترل کیفیت و تطبیق ارقام' : 'Mathematical & Omission Verification Audit',
    },
    {
      num: '05',
      title: lang === 'fa' ? 'قالب‌بندی و پالایش دیداری (DTP)' : 'Desktop Publishing & Layout Mirroring',
      desc: lang === 'fa'
        ? 'تنظیم چیدمان جداول، نمودارها، سرصفحه و پانویس‌ها دقیقاً مشابه با سند مبدا، همراه با تنظیم جهت راست‌به‌چپ (RTL) متون فارسی.'
        : 'Recreating tables, formulas, multi-column financial layouts, and graphical callouts to match the visual footprint of the original English document.',
      icon: Cpu,
      deliverable: lang === 'fa' ? 'سند نهایی با فرمت اصلی (Word / Excel / PDF)' : 'Publication-Ready Deliverable in Original Format',
    },
    {
      num: '06',
      title: lang === 'fa' ? 'تحویل امن و دوره بازنگری ۱۴ روزه' : 'Encrypted Handover & 14-Day Review Period',
      desc: lang === 'fa'
        ? 'ارسال بسته نهایی از طریق پیوند محافظت‌شده. امکان درخواست بازنگری و اصلاحات تکمیلی طی ۱۴ روز بدون دریافت هزینه اضافی.'
        : 'Files are dispatched via encrypted channel. Includes full post-delivery revision support for 14 calendar days to accommodate committee or auditor queries.',
      icon: CheckCircle2,
      deliverable: lang === 'fa' ? 'گواهی اصالت ترجمه و پشتیبانی پاسخگویی' : 'Certificate of Translation & Post-Delivery Support',
    },
  ];

  return (
    <div className="space-y-24 py-8 md:py-12">
      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B79656]">
            <span className="w-8 h-[1px] bg-[#B79656]"></span>
            <span>{lang === 'fa' ? 'فرایند کاری آتلیه' : 'Rigorous 6-Stage Methodology'}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-serif text-[#22272B] leading-tight">
            {lang === 'fa' ? (
              <>
                مراحل شش‌گانه تضمین کیفیت <br />
                <span className="italic text-[#B79656]">از پذیرش محرمانه تا تحویل نهایی سند.</span>
              </>
            ) : (
              <>
                The Six-Stage Quality Protocol <br />
                <span className="italic text-[#B79656]">From Mutual Non-Disclosure to Final Delivery.</span>
              </>
            )}
          </h1>

          <p className="text-base sm:text-lg text-[#22272B]/80 font-sans leading-relaxed">
            {lang === 'fa' ? (
              'در اسناد مالی و بازرگانی، هیچ مجالی برای تساهل وجود ندارد. روش‌شناسی مرحله‌ای ما خطای انسانی را به صفر رسانده و دقت محاسباتی را تضمین می‌کند.'
            ) : (
              'In corporate financial disclosures and international joint ventures, ambiguity carries severe financial penalties. Our institutional protocol ensures multi-layered verification.'
            )}
          </p>
        </div>
      </section>

      {/* STAGES CHRONOLOGY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {stages.map((stg, idx) => {
            const Icon = stg.icon;
            return (
              <div
                key={stg.num}
                className="bg-white border border-[#22272B]/10 p-8 sm:p-10 shadow-sm hover:border-[#B79656] transition-all duration-300 relative"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Step Num & Icon */}
                  <div className="lg:col-span-3 flex lg:flex-col items-center lg:items-start justify-between gap-4">
                    <span className="text-4xl sm:text-5xl font-serif font-bold text-[#B79656]">
                      {stg.num}
                    </span>
                    <div className="w-12 h-12 bg-[#F8F6F1] flex items-center justify-center border border-[#22272B]/10">
                      <Icon className="w-6 h-6 text-[#22272B]" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-9 space-y-4">
                    <h2 className="text-2xl font-serif font-bold text-[#22272B]">
                      {stg.title}
                    </h2>
                    
                    <p className="text-sm sm:text-base text-[#22272B]/80 font-sans leading-relaxed">
                      {stg.desc}
                    </p>

                    <div className="pt-3 border-t border-[#22272B]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono">
                      <span className="text-[#22272B]/50 uppercase">
                        {lang === 'fa' ? 'خروجی این مرحله:' : 'Stage Deliverable:'}
                      </span>
                      <span className="text-[#B79656] font-semibold">
                        {stg.deliverable}
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* TECHNICAL TOOLCHAIN & SECURITY */}
      <section className="bg-white py-16 border-y border-[#22272B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B79656]">
              {lang === 'fa' ? 'ابزارها و زیرساخت فنی' : 'Technical Ecosystem & Security'}
            </span>
            <h2 className="text-3xl font-serif text-[#22272B]">
              {lang === 'fa' ? 'فناوری در خدمت دقت، نه جایگزین تفکر انسان' : 'Technology in Service of Accuracy, Never Replacing Intellect'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-[#22272B]/80 font-sans leading-relaxed">
            <div className="p-6 bg-[#F8F6F1] border border-[#22272B]/10 space-y-2">
              <h3 className="font-serif font-bold text-[#22272B] text-base">
                CAT Toolchains (Trados & memoQ)
              </h3>
              <p>
                {lang === 'fa'
                  ? 'نگهداری و مدیریت پایگاه داده اصطلاحات (Termbase) برای تضمین یکدستی عبارات فنی در متون طولانی.'
                  : 'Maintaining dedicated translation memories and terminology databases to ensure uniform wording across corporate documents.'}
              </p>
            </div>

            <div className="p-6 bg-[#F8F6F1] border border-[#22272B]/10 space-y-2">
              <h3 className="font-serif font-bold text-[#22272B] text-base">
                {lang === 'fa' ? 'امنیت و حذف داده‌ها' : 'Air-Gapped Data Handling'}
              </h3>
              <p>
                {lang === 'fa'
                  ? 'اسناد شما در دیسک‌های رمزگذاری‌شده محلی پردازش شده و پس از پایان تعهدات پروژه به صورت دائمی معدوم می‌گردند.'
                  : 'Proprietary source texts are stored on encrypted offline media and purged permanently upon contractual sign-off.'}
              </p>
            </div>

            <div className="p-6 bg-[#F8F6F1] border border-[#22272B]/10 space-y-2">
              <h3 className="font-serif font-bold text-[#22272B] text-base">
                {lang === 'fa' ? 'رسم‌الخط مصوب فرهنگستان' : 'Persian Typographic Discipline'}
              </h3>
              <p>
                {lang === 'fa'
                  ? 'رعایت کلیه قواعد فاصله‌گذاری، نیم‌فاصله، نشانه‌گذاری استاندارد و انتخاب قلم‌های متناسب برای محیط‌های رسمی.'
                  : 'Strict adherence to Academy of Persian Language guidelines, correct zero-width non-joiners (ZWNJ), and publication-ready typography.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h2 className="text-3xl font-serif text-[#22272B]">
          {lang === 'fa' ? 'آماده‌اید پروژه خود را طبق این استاندارد آغاز فرمایید؟' : 'Ready to Start Your Translation Engagement?'}
        </h2>
        <div className="pt-2">
          <Link
            to="/quote"
            className="px-8 py-3.5 bg-[#22272B] text-white hover:bg-[#B79656] transition-colors font-medium text-xs sm:text-sm inline-flex items-center gap-2"
          >
            <span>{lang === 'fa' ? 'ثبت سفارش و ارسال سند' : 'Request Official Project Quote'}</span>
            <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
          </Link>
        </div>
      </section>
    </div>
  );
}
