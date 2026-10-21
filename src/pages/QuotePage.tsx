import React from 'react';
import { 
  ShieldCheck, 
  Clock, 
  FileCheck, 
  Award, 
  Lock, 
  HelpCircle,
  FileSpreadsheet
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import QuoteForm from '../components/QuoteForm';

export default function QuotePage() {
  const { lang, isRTL } = useLanguage();

  return (
    <div className="space-y-16 py-8 md:py-12">
      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B79656]">
            <span className="w-8 h-[1px] bg-[#B79656]"></span>
            <span>{lang === 'fa' ? 'پیش‌فاکتور رسمی و محرمانه' : 'Confidential Project Quotation'}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-serif text-[#22272B] leading-tight">
            {lang === 'fa' ? (
              <>
                درخواست استعلام قیمت و زمان‌بندی <br />
                <span className="italic text-[#B79656]">با بررسی مستقیم کارشناس ارشد ترجمه.</span>
              </>
            ) : (
              <>
                Request an Official Project Quote <br />
                <span className="italic text-[#B79656]">Itemized Turnaround & Binding NDA Protocol.</span>
              </>
            )}
          </h1>

          <p className="text-base sm:text-lg text-[#22272B]/80 font-sans leading-relaxed">
            {lang === 'fa' ? (
              'اسناد یا پیش‌نویس متن خود را جهت ارزیابی حجم واژگان، سطح تخصصی و زمان‌بندی تحویل بارگذاری فرمایید. پیش‌فاکتور دقیق به همراه تعهدنامه عدم افشا ظرف ۴ ساعت برای شما ارسال می‌شود.'
            ) : (
              'Upload your source files for a confidential volume appraisal, terminology complexity review, and delivery schedule. Binding proposals dispatched within 4 business hours.'
            )}
          </p>
        </div>
      </section>

      {/* FORM AND TRUST SIDEBAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Form Column */}
          <div className="lg:col-span-8">
            <QuoteForm />
          </div>

          {/* Right Trust Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Guarantees Box */}
            <div className="bg-white border border-[#22272B]/10 p-6 space-y-4 shadow-sm">
              <h2 className="font-serif text-lg font-bold text-[#22272B]">
                {lang === 'fa' ? 'ضمانت‌های اختصاصی آتلیه' : 'Institutional Guarantees'}
              </h2>

              <ul className="space-y-3 text-xs sm:text-sm text-[#22272B]/80 font-sans">
                <li className="flex items-start gap-2.5">
                  <Lock className="w-4 h-4 text-[#788A78] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>{lang === 'fa' ? 'حفظ محرمانگی مطلق:' : 'Non-Disclosure by Default:'}</strong>{' '}
                    {lang === 'fa' ? 'امضای NDA پیش از بررسی فایل‌های حساس' : 'Bilateral NDAs signed before deep review.'}
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-[#B79656] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>{lang === 'fa' ? 'پاسخگویی سریع:' : '4-Hour Response:'}</strong>{' '}
                    {lang === 'fa' ? 'صدور پیش‌فاکتور در ساعات کاری' : 'Itemized fee schedule within hours.'}
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <Award className="w-4 h-4 text-[#22272B] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>{lang === 'fa' ? 'عدم واگذاری به شخص ثالث:' : 'Zero Third-Party Outsourcing:'}</strong>{' '}
                    {lang === 'fa' ? 'ترجمه منحصراً توسط اسماء پرنیان‌فرد' : 'Single-voice consistency guaranteed.'}
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#788A78] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>{lang === 'fa' ? 'گارانتی بازنگری ۱۴ روزه:' : '14-Day Revision Warranty:'}</strong>{' '}
                    {lang === 'fa' ? 'پاسخگویی و اصلاحات تکمیلی رایگان' : 'Refinements with zero surcharge.'}
                  </span>
                </li>
              </ul>
            </div>

            {/* Formats Supported */}
            <div className="bg-[#F8F6F1] border border-[#22272B]/10 p-6 space-y-3">
              <h3 className="font-serif text-base font-semibold text-[#22272B]">
                {lang === 'fa' ? 'فرمت‌های قابل پذیرش' : 'Accepted Source Formats'}
              </h3>
              <p className="text-xs text-[#22272B]/70 font-sans leading-relaxed">
                PDF, Microsoft Word (.docx, .doc), Microsoft Excel (.xlsx, .xls), PowerPoint (.pptx), XLIFF, JSON, PO, TXT, ZIP (up to 25MB per file).
              </p>
            </div>

            {/* Direct Support */}
            <div className="p-6 bg-white border border-[#22272B]/10 space-y-2 text-xs">
              <span className="font-mono text-[#B79656] uppercase font-bold block">
                {lang === 'fa' ? 'نیاز به راهنمایی تلفنی یا متنی؟' : 'Need Immediate Direct Clarification?'}
              </span>
              <p className="text-[#22272B]/75 font-sans">
                {lang === 'fa'
                  ? 'جهت ارتباط مستقیم می‌توانید از طریق لینکدین یا فرم تماس پیام ارسال نمایید.'
                  : 'Reach out via LinkedIn or submit an inquiry via our contact channel.'}
              </p>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
