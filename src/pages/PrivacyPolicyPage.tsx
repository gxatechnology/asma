import React from 'react';
import { ShieldCheck, Lock, Trash2, FileCheck } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function PrivacyPolicyPage() {
  const { lang } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-10">
      <div className="space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-[#B79656]">
          {lang === 'fa' ? 'امنیت و حفظ حریم خصوصی' : 'Confidentiality & Data Protection Protocol'}
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif text-[#22272B]">
          {lang === 'fa' ? 'سیاست محرمانگی و حفاظت از اسناد کارفرما' : 'Institutional Non-Disclosure & Privacy Policy'}
        </h1>
        <p className="text-xs font-mono text-[#22272B]/60">
          Last Updated: October 2026 • ASMA PARNIANFARD Translation Atelier
        </p>
      </div>

      <div className="bg-white border border-[#22272B]/10 p-8 space-y-8 text-sm sm:text-base text-[#22272B]/85 font-sans leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-[#22272B] flex items-center gap-2">
            <Lock className="w-5 h-5 text-[#B79656]" />
            {lang === 'fa' ? '۱. تعهد بنیادین به حفظ محرمانگی' : '1. Fundamental Confidentiality Covenant'}
          </h2>
          <p>
            {lang === 'fa'
              ? 'کلیه اسناد، فایل‌های متنی، صورت‌های مالی، قراردادها و مکاتباتی که توسط کارفرما جهت ارزیابی، استعلام قیمت یا ترجمه در اختیار آتلیه ترجمه اسماء پرنیان‌فرد قرار می‌گیرد، به عنوان اطلاعات کاملاً محرمانه طبقه‌بندی شده و تحت هیچ شرایطی در اختیار شخص یا نهاد ثالث قرار نخواهد گرفت.'
              : 'All source texts, audited financial statements, cross-border commercial contracts, and correspondence transmitted to the atelier of Asma Parnianfard are treated as strictly confidential proprietary assets. No materials are disclosed or transferred to third parties under any circumstances.'}
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-[#22272B] flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#788A78]" />
            {lang === 'fa' ? '۲. ممنوعیت استفاده از هوش مصنوعی ابری عمومی' : '2. Zero Public Cloud AI Ingestion'}
          </h2>
          <p>
            {lang === 'fa'
              ? 'ما صراحتاً متعهد می‌شویم که متون مشتریان هرگز در ابزارهای عمومی ترجمه هوش مصنوعی یا سرورهای خارجی که از داده‌های کاربران برای آموزش مدل‌ها استفاده می‌کنند بارگذاری نخواهد شد. تمامی فرآیندهای ترجمه در محیط‌های کامپیوتری رمزگذاری‌شده و توسط انسان به انجام می‌رسد.'
              : 'Client source assets are never submitted to public generative AI tools or consumer translation engines that retain user submissions for model training. All translation and linguistic evaluation occurs exclusively in secure, localized, human-driven environments.'}
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-[#22272B] flex items-center gap-2">
            <Trash2 className="w-5 h-5 text-[#22272B]" />
            {lang === 'fa' ? '۳. دوره نگهداری و معدوم‌سازی اسناد' : '3. Data Retention & Secure Destruction'}
          </h2>
          <p>
            {lang === 'fa'
              ? 'فایل‌های پروژه پس از تحویل نهایی به مدت ۱۴ روز کاری (دوره گارانتی بازنگری) در آرشیو آفلاین امن نگهداری می‌شوند تا امکان پاسخگویی به ممیزان و اعمال اصلاحات احتمالی میسر باشد. پس از پایان این دوره، در صورت درخواست کتبی کارفرما، تمامی پیش‌نویس‌ها و فایل‌های مرتبط به صورت برگشت‌ناپذیر امحا خواهند شد.'
              : 'Source and target files are retained on encrypted storage for the 14-day warranty window to service auditor queries and revisions. Following project completion, files are permanently expunged upon written request.'}
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-[#22272B] flex items-center gap-2">
            <FileCheck className="w-5 h-5 text-[#B79656]" />
            {lang === 'fa' ? '۴. انعقاد قرارداد دوجانبه رسمی (NDA)' : '4. Execution of Bilateral NDAs'}
          </h2>
          <p>
            {lang === 'fa'
              ? 'پیش از ارسال اسناد دارای بار حقوقی یا مالی سنگین، یک نسخه از قرارداد دوجانبه عدم افشای اطلاعات (Bilateral NDA) با امضا و مهر به کارفرما تقدیم خواهد شد.'
              : 'Upon client request, a formal bilateral Non-Disclosure Agreement (NDA) will be executed prior to transmitting confidential dossiers, tenders, or earnings disclosures.'}
          </p>
        </section>
      </div>
    </div>
  );
}
