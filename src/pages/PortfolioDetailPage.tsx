import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Building2, 
  Calendar, 
  Clock, 
  FileCheck, 
  ShieldCheck, 
  Share2 
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { PortfolioItem } from '../types';

export default function PortfolioDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { lang, isRTL } = useLanguage();
  const [item, setItem] = useState<PortfolioItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/portfolio/${slug}`)
      .then((res) => {
        if (!res.ok) throw new Error('Not found');
        return res.json();
      })
      .then((data) => {
        setItem(data);
        setLoading(false);
      })
      .catch(() => {
        // Fallback search in hardcoded list
        fetch('/api/portfolio')
          .then(r => r.json())
          .then((list: PortfolioItem[]) => {
            const found = list.find(x => x.slug === slug);
            if (found) {
              setItem(found);
            }
            setLoading(false);
          })
          .catch(() => setLoading(false));
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto py-24 px-4 text-center">
        <p className="text-sm font-mono text-[#22272B]/60">{lang === 'fa' ? 'در حال بارگذاری پرونده...' : 'Loading case study details...'}</p>
      </div>
    );
  }

  if (!item) {
    return (
      <div className="max-w-4xl mx-auto py-24 px-4 text-center space-y-4">
        <h1 className="text-2xl font-serif text-[#22272B]">
          {lang === 'fa' ? 'پرونده مورد نظر یافت نشد' : 'Case study not found'}
        </h1>
        <Link to="/portfolio" className="text-xs font-semibold text-[#B79656] underline">
          {lang === 'fa' ? 'بازگشت به آرشیو نمونه کارها' : 'Return to Portfolio Archive'}
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-16 py-8 md:py-12">
      {/* NAVIGATION CRUMB */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#22272B]/60 hover:text-[#B79656] transition-colors"
        >
          {isRTL ? <ArrowRight className="w-3.5 h-3.5" /> : <ArrowLeft className="w-3.5 h-3.5" />}
          <span>{lang === 'fa' ? 'بازگشت به همه نمونه کارها' : 'Back to all case studies'}</span>
        </Link>
      </div>

      {/* HEADER SECTION */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#B79656] font-semibold">
          <span>{item.categoryLabel}</span>
          <span>•</span>
          <span>{item.clientIndustry}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#22272B] leading-tight">
          {lang === 'fa' ? item.title_fa : item.title}
        </h1>

        <p className="text-base sm:text-lg text-[#22272B]/80 font-sans leading-relaxed">
          {lang === 'fa' ? item.description_fa : item.description}
        </p>

        {/* METRICS ROW */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 bg-white border border-[#22272B]/10 text-xs font-mono">
          <div>
            <span className="text-[#22272B]/50 block">{lang === 'fa' ? 'صنعت کارفرما:' : 'Industry:'}</span>
            <span className="font-semibold text-[#22272B]">{item.clientIndustry}</span>
          </div>
          <div>
            <span className="text-[#22272B]/50 block">{lang === 'fa' ? 'حجم واژگان:' : 'Volume:'}</span>
            <span className="font-semibold text-[#22272B]">{item.wordCountApprox.toLocaleString()} words</span>
          </div>
          <div>
            <span className="text-[#22272B]/50 block">{lang === 'fa' ? 'زمان تحویل:' : 'Turnaround:'}</span>
            <span className="font-semibold text-[#22272B]">{item.turnaroundDays}</span>
          </div>
          <div>
            <span className="text-[#22272B]/50 block">{lang === 'fa' ? 'تاریخ ثبت:' : 'Recorded Date:'}</span>
            <span className="font-semibold text-[#22272B]">{item.date}</span>
          </div>
        </div>
      </section>

      {/* FEATURED IMAGE IF AVAILABLE */}
      {item.image && (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="aspect-[21/9] bg-[#E9E2D7] overflow-hidden border border-[#22272B]/10 shadow-sm">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      {/* DETAILED PARALLEL COMPARISON */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h2 className="text-2xl font-serif text-[#22272B]">
          {lang === 'fa' ? 'بررسی تطبیقی سطر به سطر' : 'Line-by-Line Bilingual Concordance Examination'}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-[#22272B]/10 p-6 space-y-3">
            <span className="text-xs font-mono uppercase text-[#22272B]/50 font-bold block">
              Source Document (English)
            </span>
            <p className="text-sm font-mono text-[#22272B] leading-relaxed">
              {item.sourceSample}
            </p>
          </div>

          <div className="bg-[#B79656]/5 border border-[#B79656]/20 p-6 space-y-3" dir="rtl">
            <span className="text-xs font-mono uppercase text-[#B79656] font-bold block">
              ترجمه رسمی فارسی (مقصد)
            </span>
            <p className="text-base font-persian font-medium text-[#22272B] leading-relaxed">
              {item.targetSample}
            </p>
          </div>
        </div>
      </section>

      {/* TERMINOLOGY NOTES */}
      {item.terminologyNotes && item.terminologyNotes.length > 0 && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="text-2xl font-serif text-[#22272B]">
            {lang === 'fa' ? 'تحلیل اصطلاحات و مراجع معادل‌گزینی' : 'Regulatory & Terminological Justification'}
          </h2>

          <div className="divide-y divide-[#22272B]/10 bg-white border border-[#22272B]/10">
            {item.terminologyNotes.map((note, idx) => (
              <div key={idx} className="p-5 grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
                <div className="md:col-span-4 font-mono text-xs sm:text-sm font-bold text-[#22272B]">
                  {note.source}
                </div>
                <div className="md:col-span-4 font-persian text-sm sm:text-base font-bold text-[#B79656]" dir="rtl">
                  {note.target}
                </div>
                <div className="md:col-span-4 text-xs text-[#22272B]/70 font-sans">
                  {note.note}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA BANNER */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#22272B] text-white p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-[#B79656]/40 bg-gradient-to-br from-[#2D3339] via-[#22272B] to-[#1A1E22] p-2 shadow-lg flex items-center justify-center shrink-0">
              <img
                src="/assets/branding/ap-monogram-cropped.png"
                alt="ASMA PARNIANFARD"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="space-y-1" style={{ textAlign: isRTL ? 'right' : undefined }}>
              <h3 className="text-xl font-serif">
                {lang === 'fa' ? 'سندی با ویژگی‌های مشابه در دست ترجمه دارید؟' : 'Have a similar high-stakes document for translation?'}
              </h3>
              <p className="text-xs sm:text-sm text-white/70 font-sans">
                {lang === 'fa' ? 'پیش‌فاکتور رسمی و برآورد زمان‌بندی به موقع تقدیم شما خواهد شد.' : 'Receive an itemized quote and turnaround projection promptly.'}
              </p>
            </div>
          </div>

          <Link
            to={`/quote?service=${item.category}`}
            className="px-6 py-3 bg-[#B79656] text-white hover:bg-white hover:text-[#22272B] transition-colors font-medium text-xs sm:text-sm whitespace-nowrap"
          >
            {lang === 'fa' ? 'درخواست استعلام قیمت' : 'Request Official Quote'}
          </Link>
        </div>
      </section>
    </div>
  );
}
