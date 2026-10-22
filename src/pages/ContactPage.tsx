import React from 'react';
import {
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  ExternalLink,
  FileText,
  Languages
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import ContactForm from '../components/ContactForm';
import BrandIdentity from '../components/BrandIdentity';

export default function ContactPage() {
  const { lang, isRTL } = useLanguage();

  return (
    <div className="space-y-16 py-8 md:py-12">
      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B79656]">
            <span className="w-8 h-[1px] bg-[#B79656]"></span>
            <span>{lang === 'fa' ? 'ارتباط مستقیم' : 'Contact & Inquiries'}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-serif text-[#22272B] leading-tight">
            {lang === 'fa' ? (
              <>
                ارتباط با مترجم <br />
                <span className="italic text-[#B79656]">اسماء پرنیان‌فرد، مترجم زبان انگلیسی.</span>
              </>
            ) : (
              <>
                Contact the Translator <br />
                <span className="italic text-[#B79656]">Direct Communication with Asma Parnianfard.</span>
              </>
            )}
          </h1>

          <p className="text-base sm:text-lg text-[#22272B]/80 font-sans leading-relaxed">
            {lang === 'fa' ? (
              'جهت استعلام پروژه‌های ترجمه مقالات و متون عمومی، هماهنگی زمان‌بندی و ارسال پیام از فرم زیر استفاده فرمایید.'
            ) : (
              'Reach out directly to discuss translation assignments, article translations, or project scheduling.'
            )}
          </p>
        </div>
      </section>

      {/* MAIN CONTENT: DETAILS + FORM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Contact Details Left Column */}
          <div className="lg:col-span-5 space-y-8">

            <div className="bg-white border border-[#22272B]/10 p-6 sm:p-8 space-y-6 shadow-sm">
              <BrandIdentity
                variant="inline"
                theme="light"
                size="sm"
                linkTo={null}
                className="pb-4 border-b border-[#22272B]/10 w-full"
              />
              <h2 className="text-xl font-serif font-bold text-[#22272B]">
                {lang === 'fa' ? 'اطلاعات ارتباطی' : 'Practice Information'}
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-[#22272B]/80 font-sans">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#B79656] flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-[#22272B] block">{lang === 'fa' ? 'موقعیت جغرافیایی:' : 'Location:'}</strong>
                    <span>Mashhad, Razavi Khorasan, Iran</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#788A78] flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-[#22272B] block">{lang === 'fa' ? 'ساعات کاری و پاسخگویی:' : 'Working Hours:'}</strong>
                    <span>Saturday – Thursday: 09:00 – 18:00 (IRST / UTC+3:30)</span>
                    <span className="text-[11px] text-[#22272B]/60 block mt-0.5">
                      {lang === 'fa' ? 'بررسی مستقیم پیام‌ها و استعلام‌ها توسط مترجم' : 'Direct review of messages and inquiries by the translator'}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Languages className="w-4 h-4 text-[#22272B] flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-[#22272B] block">{lang === 'fa' ? 'جهت ترجمه:' : 'Language Direction:'}</strong>
                    <span>English → Persian (Written Translation)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ExternalLink className="w-4 h-4 text-[#B79656] flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-[#22272B] block">{lang === 'fa' ? 'صفحه حرفه‌ای لینکدین:' : 'LinkedIn Profile:'}</strong>
                    <a
                      href="https://www.linkedin.com/in/asma-parnianfard-a11b69433"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#B79656] hover:underline font-mono text-xs"
                    >
                      asma-parnianfard-a11b69433
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Confidentiality Commitment Box */}
            <div className="p-6 bg-[#F8F6F1] border border-[#22272B]/10 space-y-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#788A78]" />
                <h3 className="font-serif text-sm font-bold text-[#22272B]">
                  {lang === 'fa' ? 'تعهد به حفظ رازداری' : 'Confidentiality Commitment'}
                </h3>
              </div>
              <p className="text-xs text-[#22272B]/75 font-sans leading-relaxed">
                {lang === 'fa'
                  ? 'تمام پیام‌ها، فایل‌ها و استعلام‌های ارسالی با رعایت کامل حریم خصوصی بررسی می‌شوند و هرگز در اختیار دیگران قرار نخواهند گرفت.'
                  : 'All messages, inquiries, and attached files are handled with complete confidentiality and professional discretion.'}
              </p>
            </div>

          </div>

          {/* Contact Form Right Column */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </section>
    </div>
  );
}
