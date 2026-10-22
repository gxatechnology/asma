import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Award,
  ShieldCheck,
  CheckCircle2,
  ArrowLeft,
  Languages,
  BookText,
  FileText,
  ExternalLink
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import EstimateCalculator from '../components/EstimateCalculator';

export default function PersianEditionPage() {
  const { setLang } = useLanguage();

  useEffect(() => {
    setLang('fa');
  }, [setLang]);

  return (
    <div className="space-y-24 py-8 md:py-12 font-persian" dir="rtl">
      {/* HERO SECTION IN FA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#22272B]/10 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#22272B]/75 font-medium">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#B79656]/15 text-[#B79656] border border-[#B79656]/30 font-bold text-xs">
                <Award className="w-4 h-4" />
                کارشناسی ارشد مترجمی زبان انگلیسی
              </span>
              <span>•</span>
              <span>دانشگاه آزاد اسلامی مشهد</span>
              <span>•</span>
              <span>مترجم مستقل</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#22272B] leading-tight">
              ترجمه <span className="text-[#B79656] italic">انگلیسی به فارسی</span>
            </h1>

            <p className="text-xl sm:text-2xl font-serif text-[#B79656] font-medium">
              دقیق، روان و وفادار به مفهوم
            </p>

            <p className="text-base sm:text-lg text-[#22272B]/85 leading-relaxed">
              من اسماء پرنیان‌فرد، مترجم مستقل متون انگلیسی به فارسی هستم و تمرکز من بر ترجمه مقالات و متون عمومی است. هدف من انتقال دقیق مفاهیم همگام با ارائه متنی روان، رسا و طبیعی به زبان فارسی است.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/quote"
                className="px-7 py-3.5 bg-[#22272B] text-white hover:bg-[#B79656] transition-colors font-medium text-sm inline-flex items-center gap-2"
              >
                <span>استعلام قیمت و سفارش</span>
                <ArrowLeft className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="px-6 py-3.5 bg-white border border-[#22272B]/20 text-[#22272B] hover:border-[#B79656] text-sm font-medium"
              >
                مشاهده خدمات ترجمه
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="bg-white p-3 border border-[#22272B]/10 shadow-xl max-w-sm w-full relative">
              {/* Golden AP Monogram Seal */}
              <div className="absolute -top-3.5 -left-3.5 w-11 h-11 rounded-full border border-[#B79656]/60 bg-gradient-to-br from-[#2D3339] via-[#22272B] to-[#1A1E22] p-1.5 shadow-xl z-20 flex items-center justify-center">
                <img
                  src="/assets/branding/ap-monogram-cropped.png"
                  alt="نشان رسمی AP"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="aspect-[4/5] overflow-hidden bg-[#E9E2D7]">
                <img
                  src="/assets/asma-parnianfard-portrait.png"
                  alt="اسماء پرنیان‌فرد، مترجم متون انگلیسی به فارسی"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="pt-4 px-2 space-y-1">
                <h2 className="text-xl font-serif font-bold text-[#22272B]">اسماء پرنیان‌فرد</h2>
                <p className="text-xs text-[#B79656] font-semibold">مترجم مستقل انگلیسی به فارسی</p>
                <div className="pt-2 flex items-center justify-between text-xs text-[#22272B]/60 border-t border-[#22272B]/10 mt-2">
                  <span>مشهد، ایران</span>
                  <a
                    href="https://www.linkedin.com/in/asma-parnianfard-a11b69433"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#B79656] hover:underline inline-flex items-center gap-1 font-sans"
                  >
                    LinkedIn <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3 CONFIRMED SERVICES IN PERSIAN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-3">
          <span className="text-xs font-bold text-[#B79656] tracking-wider uppercase">خدمات تخصصی</span>
          <h2 className="text-3xl font-serif text-[#22272B]">ترجمه متون نوشتاری با توجه به زمینه، وضوح و شیوایی</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'ترجمه متون انگلیسی به فارسی',
              desc: 'ترجمه کتبی و حرفه‌ای از انگلیسی به فارسی با توجه عمیق به معانی، بافتار متن، شفافیت و کاربرد طبیعی زبان.',
              icon: Languages,
              link: '/services',
            },
            {
              title: 'ترجمه مقالات',
              desc: 'ترجمه مقالات و محتواهای نوشتاری از انگلیسی به فارسی، با حفظ دقیق پیام نویسنده و ساختاری خوانا و روان برای مخاطبان فارسی‌زبان.',
              icon: BookText,
              link: '/services',
            },
            {
              title: 'ترجمه متون عمومی',
              desc: 'ترجمه انواع متون عمومی از زبان انگلیسی به فارسی با دقت در معادل‌یابی، درک بافت متن و بیانی سلیس.',
              icon: FileText,
              link: '/services',
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="premium-card p-6 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="premium-icon-box">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="premium-card-title font-serif font-bold text-lg text-[#22272B]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#22272B]/75 leading-relaxed">{item.desc}</p>
                </div>
                <Link
                  to={item.link}
                  className="text-xs font-bold text-[#B79656] inline-flex items-center gap-1.5 pt-4 group-hover:underline"
                >
                  <span>مشاهده توضیحات خدمت</span>
                  <ArrowLeft className="w-3.5 h-3.5 premium-arrow transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-3xl font-serif text-[#22272B]">بررسی مقیاس و حجم متن</h2>
            <p className="text-sm text-[#22272B]/80 leading-relaxed">
              با انتخاب تعداد تقریبی کلمات، مقیاس حجم متن خود را مشاهده نمایید. زمان‌بندی دقیق تحویل پس از بررسی متن و میزان پیچیدگی آن به صورت شفاف توافق خواهد شد.
            </p>
          </div>
          <div className="lg:col-span-7">
            <EstimateCalculator />
          </div>
        </div>
      </section>
    </div>
  );
}
