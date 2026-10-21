import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Clock, ShieldCheck, Mail, FileText } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import BrandIdentity from '../components/BrandIdentity';

export default function ThankYouPage() {
  const { lang, isRTL } = useLanguage();
  const location = useLocation();
  const state = (location.state as { referenceId?: string; type?: string; email?: string } | null);

  const referenceId = state?.referenceId || 'REQ-' + Math.floor(100000 + Math.random() * 900000);
  const email = state?.email || 'your email';

  return (
    <div className="max-w-3xl mx-auto py-16 md:py-24 px-4 sm:px-6 lg:px-8 text-center space-y-8">
      
      {/* Brand Identity */}
      <BrandIdentity variant="stacked" theme="light" size="md" className="mx-auto" />

      {/* Icon */}
      <div className="w-16 h-16 bg-[#788A78]/15 border border-[#788A78]/30 text-[#788A78] flex items-center justify-center mx-auto rounded-full">
        <CheckCircle2 className="w-8 h-8" />
      </div>

      {/* Main Confirmation */}
      <div className="space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-[#B79656]">
          {lang === 'fa' ? 'سفارش شما با موفقیت ثبت گردید' : 'Request Successfully Received'}
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif text-[#22272B]">
          {lang === 'fa' ? 'درخواست استعلام شما در صف بررسی قرار گرفت' : 'Your Translation Dossier is Under Review'}
        </h1>
        <p className="text-sm sm:text-base text-[#22272B]/75 font-sans max-w-xl mx-auto leading-relaxed">
          {lang === 'fa' ? (
            `اسناد شما به طور ایمن دریافت شد. پیش‌فاکتور رسمی به همراه زمان‌بندی دقیق و توافق‌نامه عدم افشا در اسرع وقت به نشانی ${email} ارسال خواهد شد.`
          ) : (
            `Your source documentation has been received securely. An itemized proposal, turnaround projection, and mutual NDA will be dispatched to ${email} promptly within one business day.`
          )}
        </p>
      </div>

      {/* Reference Code Card */}
      <div className="p-6 bg-white border border-[#22272B]/10 max-w-md mx-auto shadow-sm space-y-2">
        <span className="text-xs font-mono uppercase text-[#22272B]/50 block">
          {lang === 'fa' ? 'کد رهگیری اختصاصی پروژه:' : 'Project Reference Tracking Code:'}
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
          <span className="font-semibold text-[#22272B] block">{lang === 'fa' ? 'بررسی تخصصی سند' : 'Linguistic Review'}</span>
          <p className="text-[#22272B]/60 text-[11px]">{lang === 'fa' ? 'محاسبه دقیق کلمات و درجه پیچیدگی' : 'Word count & terminology analysis'}</p>
        </div>

        <div className="p-4 bg-[#F8F6F1] border border-[#22272B]/10 space-y-1">
          <span className="font-mono text-[#B79656] font-bold block">2. Proposal & NDA</span>
          <span className="font-semibold text-[#22272B] block">{lang === 'fa' ? 'صدور پیش‌فاکتور رسمی' : 'Signed Quote & NDA'}</span>
          <p className="text-[#22272B]/60 text-[11px]">{lang === 'fa' ? 'ارسال قرارداد عدم افشا و هزینه مقطوع' : 'Fixed pricing & delivery milestone'}</p>
        </div>

        <div className="p-4 bg-[#F8F6F1] border border-[#22272B]/10 space-y-1">
          <span className="font-mono text-[#B79656] font-bold block">3. Execution</span>
          <span className="font-semibold text-[#22272B] block">{lang === 'fa' ? 'آغاز ترجمه و بازخوانی' : 'Atelier Translation'}</span>
          <p className="text-[#22272B]/60 text-[11px]">{lang === 'fa' ? 'ترجمه تک‌صدایی و بازخوانی تطبیقی' : 'Single-voice translation & QA'}</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
        <Link
          to="/"
          className="px-6 py-3 bg-[#22272B] text-white hover:bg-[#B79656] transition-colors text-xs font-semibold"
        >
          {lang === 'fa' ? 'بازگشت به صفحه اصلی' : 'Return to Homepage'}
        </Link>
        <Link
          to="/portfolio"
          className="px-6 py-3 bg-white border border-[#22272B]/20 text-[#22272B] hover:border-[#B79656] hover:text-[#B79656] transition-colors text-xs font-semibold"
        >
          {lang === 'fa' ? 'مشاهده نمونه کارهای تطبیقی' : 'Browse Bilingual Portfolio'}
        </Link>
      </div>

    </div>
  );
}
