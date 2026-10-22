import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { CheckCircle2, ShieldCheck, AlertCircle, ExternalLink } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import BrandIdentity from '../components/BrandIdentity';

export default function ThankYouPage() {
  const { lang, isRTL } = useLanguage();
  const location = useLocation();
  const state = (location.state as { referenceId?: string; type?: string; email?: string } | null);

  const referenceId = state?.referenceId;
  const email = state?.email || 'your email';

  // If accessed directly without an actual server-generated submission
  if (!referenceId) {
    return (
      <div className="max-w-2xl mx-auto py-16 md:py-24 px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <BrandIdentity variant="stacked" theme="light" size="md" className="mx-auto" />

        <div className="w-16 h-16 bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center mx-auto rounded-full">
          <AlertCircle className="w-8 h-8" />
        </div>

        <div className="space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B79656]">
            {lang === 'fa' ? 'سابقه‌ای ثبت نگردید' : 'No Active Submission Record'}
          </span>
          <h1 className="text-3xl font-serif text-[#22272B]">
            {lang === 'fa' ? 'درخواست فعالی برای این نشست یافت نشد' : 'No Recorded Submission Found'}
          </h1>
          <p className="text-sm text-[#22272B]/75 font-sans max-w-lg mx-auto leading-relaxed">
            {lang === 'fa'
              ? 'در صورتی که قصد استعلام قیمت ترجمه را دارید، لطفاً از فرم استعلام استفاده فرمایید یا مستقیماً از طریق پروفایل رسمی لینکدین با اسماء پرنیان‌فرد در ارتباط باشید.'
              : 'If you wish to request a translation quote, please submit your text via the quotation form or message Asma Parnianfard directly on LinkedIn.'}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            to="/quote"
            className="px-6 py-3 bg-[#B79656] text-white hover:bg-[#C4A466] transition-colors text-xs font-semibold rounded-full"
          >
            {lang === 'fa' ? 'تکمیل فرم استعلام' : 'Go to Quotation Form'}
          </Link>
          <a
            href="https://www.linkedin.com/in/asma-parnianfard-a11b69433"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#22272B] text-white hover:bg-[#3A4248] transition-colors text-xs font-semibold rounded-full inline-flex items-center gap-1.5"
          >
            <span>LinkedIn Profile</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    );
  }

  // Verified server receipt state
  return (
    <div className="max-w-3xl mx-auto py-16 md:py-24 px-4 sm:px-6 lg:px-8 text-center space-y-8">
      {/* Brand Identity */}
      <BrandIdentity variant="stacked" theme="light" size="md" className="mx-auto" />

      {/* Success Icon */}
      <div className="w-16 h-16 bg-[#788A78]/15 border border-[#788A78]/30 text-[#788A78] flex items-center justify-center mx-auto rounded-full">
        <CheckCircle2 className="w-8 h-8" />
      </div>

      {/* Main Confirmation */}
      <div className="space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-[#B79656]">
          {lang === 'fa' ? 'درخواست شما در سرور ثبت گردید' : 'Request Received by Server'}
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif text-[#22272B]">
          {lang === 'fa' ? 'متن ارسالی شما در صف بررسی قرار گرفت' : 'Your Translation Request is Under Review'}
        </h1>
        <p className="text-sm sm:text-base text-[#22272B]/75 font-sans max-w-xl mx-auto leading-relaxed">
          {lang === 'fa' ? (
            `متن شما به طور ایمن در سرور دریافت شد. برآورد هزینه و زمان‌بندی به نشانی ${email} ارسال خواهد شد.`
          ) : (
            `Your text has been received securely. An itemized estimate and turnaround projection will be sent to ${email}.`
          )}
        </p>
      </div>

      {/* Reference Code Card */}
      <div className="p-6 bg-white border border-[#22272B]/10 max-w-md mx-auto shadow-sm space-y-2">
        <span className="text-xs font-mono uppercase text-[#22272B]/50 block">
          {lang === 'fa' ? 'کد رهگیری درخواست:' : 'Request Reference Code:'}
        </span>
        <span className="text-xl font-mono font-bold text-[#B79656] tracking-wider block">
          {referenceId}
        </span>
        <p className="text-[11px] text-[#22272B]/60 font-sans">
          {lang === 'fa' ? 'لطفاً این کد را در مکاتبات بعدی خود ذکر فرمایید.' : 'Please quote this reference in subsequent correspondence.'}
        </p>
      </div>

      {/* Next Steps Timeline */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left max-w-xl mx-auto pt-4 text-xs text-[#22272B]/80 font-sans" style={{ textAlign: isRTL ? 'right' : 'left' }}>
        <div className="p-4 bg-[#F8F6F1] border border-[#22272B]/10 space-y-1">
          <span className="font-mono text-[#B79656] font-bold block">1. Initial Review</span>
          <span className="font-semibold text-[#22272B] block">{lang === 'fa' ? 'بررسی متن' : 'Linguistic Review'}</span>
          <p className="text-[#22272B]/60 text-[11px]">{lang === 'fa' ? 'شمارش دقیق کلمات و ارزیابی زمان' : 'Word count & turnaround evaluation'}</p>
        </div>

        <div className="p-4 bg-[#F8F6F1] border border-[#22272B]/10 space-y-1">
          <span className="font-mono text-[#B79656] font-bold block">2. Estimation</span>
          <span className="font-semibold text-[#22272B] block">{lang === 'fa' ? 'ارسال برآورد و زمان‌بندی' : 'Quote & Schedule'}</span>
          <p className="text-[#22272B]/60 text-[11px]">{lang === 'fa' ? 'اعلام هزینه و زمان دقیق تحویل' : 'Transparent pricing & timeline'}</p>
        </div>

        <div className="p-4 bg-[#F8F6F1] border border-[#22272B]/10 space-y-1">
          <span className="font-mono text-[#B79656] font-bold block">3. Execution</span>
          <span className="font-semibold text-[#22272B] block">{lang === 'fa' ? 'آغاز ترجمه و بازخوانی' : 'Translation & Review'}</span>
          <p className="text-[#22272B]/60 text-[11px]">{lang === 'fa' ? 'ترجمه دقیق و بازخوانی تطبیقی' : 'Thoughtful translation & QA'}</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
        <Link
          to="/"
          className="px-6 py-3 bg-[#22272B] text-white hover:bg-[#B79656] transition-colors text-xs font-semibold rounded-full"
        >
          {lang === 'fa' ? 'بازگشت به صفحه اصلی' : 'Return to Homepage'}
        </Link>
        <Link
          to="/services"
          className="px-6 py-3 bg-white border border-[#22272B]/20 text-[#22272B] hover:border-[#B79656] hover:text-[#B79656] transition-colors text-xs font-semibold rounded-full"
        >
          {lang === 'fa' ? 'مشاهده خدمات ترجمه' : 'Explore Translation Services'}
        </Link>
      </div>
    </div>
  );
}
