import React from 'react';
import { 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ExternalLink, 
  FileText, 
  Building2 
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
            <span>{lang === 'fa' ? 'ارتباط مستقیم و مشاوره' : 'Direct Practice Consultation'}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-serif text-[#22272B] leading-tight">
            {lang === 'fa' ? (
              <>
                تماس با دفتر کارشناسی ترجمه <br />
                <span className="italic text-[#B79656]">اسماء پرنیان‌فرد، کارشناس ارشد مترجمی.</span>
              </>
            ) : (
              <>
                Initiate Confidential Dialogue <br />
                <span className="italic text-[#B79656]">Direct Communication with Lead Translator.</span>
              </>
            )}
          </h1>

          <p className="text-base sm:text-lg text-[#22272B]/80 font-sans leading-relaxed">
            {lang === 'fa' ? (
              'جهت استعلام پروژه‌های کلان سازمانی، درخواست قرارداد دوجانبه عدم افشا (NDA) و مشاوره تخصصی در زمینه متون مالی و تجاری پیام ارسال فرمایید.'
            ) : (
              'Connect directly to discuss high-stakes corporate translation dossiers, bilateral confidentiality execution, or enterprise agency retainer partnerships.'
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
                {lang === 'fa' ? 'مشخصات آتلیه و ارتباطات' : 'Atelier Coordinates'}
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-[#22272B]/80 font-sans">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#B79656] flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-[#22272B] block">{lang === 'fa' ? 'موقعیت جغرافیایی:' : 'Geographic Anchor:'}</strong>
                    <span>Mashhad, Razavi Khorasan, Iran</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#788A78] flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-[#22272B] block">{lang === 'fa' ? 'ساعات کاری و منطقه زمانی:' : 'Working Hours & Timezone:'}</strong>
                    <span>Saturday – Thursday: 08:30 – 19:00 (IRST / UTC+3:30)</span>
                    <span className="text-[11px] text-[#22272B]/60 block mt-0.5">
                      {lang === 'fa' ? 'پاسخگویی به پیام‌های بین‌المللی با اولویت زمانی' : 'International agency communications monitored continuously'}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#22272B] flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-[#22272B] block">{lang === 'fa' ? 'پست الکترونیکی رسمی:' : 'Direct Email:'}</strong>
                    <span className="font-mono text-xs">asma.parnianfard@alumni.iau.ir</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ExternalLink className="w-4 h-4 text-[#B79656] flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-[#22272B] block">{lang === 'fa' ? 'پروفایل تاییدشده لینکدین:' : 'Verified Professional Network:'}</strong>
                    <a
                      href="https://www.linkedin.com/in/asma-parnianfard-a11b69433"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#B79656] hover:underline font-medium"
                    >
                      linkedin.com/in/asma-parnianfard-a11b69433
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* NDA Card */}
            <div className="p-6 bg-[#F8F6F1] border border-[#22272B]/10 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#788A78] font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>{lang === 'fa' ? 'تفاهم‌نامه رسمی عدم افشا' : 'Bilateral NDA Execution'}</span>
              </div>
              <p className="text-xs text-[#22272B]/75 leading-relaxed font-sans">
                {lang === 'fa'
                  ? 'آیا نیازمند ارسال پیش‌نویس توافق‌نامه محرمانگی پیش از بررسی سند پروژه خود هستید؟ در فرم روبرو گزینه درخواست NDA را علامت بزنید تا نسخه رسمی دوجانبه برای شما ارسال گردد.'
                  : 'Require an executed Non-Disclosure Agreement before releasing unannounced corporate disclosures or tenders? Check the NDA request box in the form.'}
              </p>
            </div>

          </div>

          {/* Form Right Column */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </section>
    </div>
  );
}
