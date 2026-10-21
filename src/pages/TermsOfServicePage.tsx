import React from 'react';
import { Scale, CheckCircle2, Clock, AlertCircle } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function TermsOfServicePage() {
  const { lang } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-10">
      <div className="space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-[#B79656]">
          {lang === 'fa' ? 'شرایط و ضوابط همکاری' : 'Professional Terms of Engagement'}
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif text-[#22272B]">
          {lang === 'fa' ? 'شرایط عمومی ارائه خدمات ترجمه و ویرایش' : 'Standard Terms of Practice & Revision Warranty'}
        </h1>
        <p className="text-xs font-mono text-[#22272B]/60">
          ASMA PARNIANFARD Atelier • Independent Linguistic Practice
        </p>
      </div>

      <div className="bg-white border border-[#22272B]/10 p-8 space-y-8 text-sm sm:text-base text-[#22272B]/85 font-sans leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-[#22272B] flex items-center gap-2">
            <Scale className="w-5 h-5 text-[#B79656]" />
            {lang === 'fa' ? '۱. حدود تعهدات و مسئولیت حرفه‌ای' : '1. Scope of Engagement & Due Diligence'}
          </h2>
          <p>
            {lang === 'fa'
              ? 'خدمات ترجمه ارائه شده توسط اسماء پرنیان‌فرد با تکیه بر بالاترین استانداردهای دانشگاهی و اصطلاح‌شناسی صورت می‌گیرد. با این حال، مسئولیت صحت اولیه محتوا، محاسبات حسابداری و صحت قانونی مفاد سند مبدا بر عهده نویسنده یا سازمان صادرکننده اصلی است.'
              : 'Translation and editing services rendered by Asma Parnianfard reflect academic rigor and authoritative terminology standards. Primary legal compliance and mathematical accuracy of the source document remain the sole responsibility of the originating entity.'}
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-[#22272B] flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-[#788A78]" />
            {lang === 'fa' ? '۲. ضمانت بازنگری و اصلاحات رایگان (۱۴ روز)' : '2. 14-Day Revision & Clarification Guarantee'}
          </h2>
          <p>
            {lang === 'fa'
              ? 'کارفرما حق دارد طی مدت ۱۴ روز کاری پس از دریافت نسخه نهایی، هرگونه درخواست بازبینی، تنظیم لحن یا پاسخگویی به ابهامات ممیزان را مطرح نماید. این اصلاحات بدون هزینه اضافی اعمال خواهند شد، مشروط بر آنکه متن مبدا اولیه تغییر نکرده باشد.'
              : 'Clients are entitled to free revisions and terminology adjustments for 14 calendar days post-delivery. Additions or revisions resulting from modified source texts are quoted separately at standard rates.'}
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-[#22272B] flex items-center gap-2">
            <Clock className="w-5 h-5 text-[#22272B]" />
            {lang === 'fa' ? '۳. تعهد به زمان‌بندی تحویل' : '3. Turnaround Schedules & Force Majeure'}
          </h2>
          <p>
            {lang === 'fa'
              ? 'زمان تحویل مندرج در پیش‌فاکتور رسمی قطعی بوده و کارفرما در تاریخ مقرر فایل نهایی را دریافت خواهد کرد. در صورت بروز هرگونه شرایط اضطراری قهری، مراتب در اولین فرصت به اطلاع کارفرما خواهد رسید.'
              : 'Agreed delivery schedules specified in official proposals are binding. In exceptional instances of force majeure or technical disruption, client notification is dispatched immediately.'}
          </p>
        </section>
      </div>
    </div>
  );
}
