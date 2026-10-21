import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, FileText, Mail } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function NotFoundPage() {
  const { lang, isRTL } = useLanguage();

  return (
    <div className="max-w-xl mx-auto py-24 px-4 text-center space-y-6">
      <span className="text-6xl font-serif font-bold text-[#B79656] block">
        404
      </span>
      <h1 className="text-3xl font-serif text-[#22272B]">
        {lang === 'fa' ? 'صفحه مورد نظر یافت نشد' : 'Page Not Found'}
      </h1>
      <p className="text-sm text-[#22272B]/70 font-sans leading-relaxed">
        {lang === 'fa'
          ? 'آدرسی که وارد کرده‌اید معتبر نیست یا صفحه به نشانی دیگری منتقل شده است.'
          : 'The page you requested could not be located. Please return to the homepage or browse the translation portfolio.'}
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#22272B] text-white hover:bg-[#B79656] transition-colors text-xs font-semibold"
        >
          <Home className="w-4 h-4" />
          <span>{lang === 'fa' ? 'بازگشت به صفحه اصلی' : 'Return to Home'}</span>
        </Link>
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-[#22272B]/20 text-[#22272B] hover:border-[#B79656] transition-colors text-xs font-semibold"
        >
          <FileText className="w-4 h-4" />
          <span>{lang === 'fa' ? 'مشاهده نمونه کارها' : 'View Portfolio'}</span>
        </Link>
      </div>
    </div>
  );
}
