import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowLeft, 
  Building2, 
  Calculator, 
  FileCheck, 
  FileText, 
  Globe2, 
  Languages, 
  ExternalLink 
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import BilingualComparison from '../components/BilingualComparison';
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
              <span>خراسان رضوی، ایران</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#22272B] leading-tight">
              پل ارتباطی زبان‌ها. <br />
              <span className="text-[#B79656] italic">پیونددهنده فرهنگ‌ها</span> با دقت علمی.
            </h1>

            <p className="text-base sm:text-lg text-[#22272B]/85 leading-relaxed">
              خدمات تخصصی ترجمه انگلیسی به فارسی، ویرایش و بومی‌سازی متون مالی، حسابرسی، ترازنامه‌های IFRS، قراردادهای بین‌المللی و سیستم‌های نرم‌افزاری توسط اسماء پرنیان‌فرد.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/quote"
                className="px-7 py-3.5 bg-[#22272B] text-white hover:bg-[#B79656] transition-colors font-medium text-sm inline-flex items-center gap-2"
              >
                <span>درخواست استعلام قیمت و زمان‌بندی</span>
                <ArrowLeft className="w-4 h-4" />
              </Link>
              <Link
                to="/portfolio"
                className="px-6 py-3.5 bg-white border border-[#22272B]/20 text-[#22272B] hover:border-[#B79656] text-sm font-medium"
              >
                مشاهده نمونه کارهای تطبیقی
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
                  alt="اسماء پرنیان‌فرد، مترجم تخصصی انگلیسی به فارسی"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="pt-4 px-2 space-y-1">
                <h2 className="text-xl font-serif font-bold text-[#22272B]">اسماء پرنیان‌فرد</h2>
                <p className="text-xs text-[#B79656] font-semibold">مترجم و مشاور زبانی متون مالی و بازرگانی</p>
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

      {/* 6 DISCIPLINES IN PERSIAN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-3">
          <span className="text-xs font-bold text-[#B79656] tracking-wider uppercase">حوزه‌های تمرکز حرفه‌ای</span>
          <h2 className="text-3xl font-serif text-[#22272B]">ترجمه تخصصی با تضمین صحت علمی و حقوقی</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'ترجمه مالی و IFRS',
              desc: 'ترازنامه‌ها، یادداشت‌های حسابرسی، تحلیل جریانات نقدی و امیدنامه‌های عرضه سهام.',
              icon: Calculator,
              link: '/services/financial',
            },
            {
              title: 'حسابداری و حسابرسی',
              desc: 'گزارش‌های حسابرس مستقل، اسناد قیمت‌گذاری انتقالی و تطبیق حساب‌های بین‌المللی.',
              icon: FileCheck,
              link: '/services/accounting',
            },
            {
              title: 'قراردادها و بازرگانی',
              desc: 'اساسنامه‌های شرکتی، قراردادهای جوینت ونچر (JV)، اسناد مناقصات و تفاهم‌نامه‌های NDA.',
              icon: Building2,
              link: '/services/business',
            },
            {
              title: 'ویرایش و بازخوانی',
              desc: 'پالایش نثر فارسی، اصلاح رسم‌الخط و نیم‌فاصله‌ها و بازخوانی سطر به سطر در برابر مبدا.',
              icon: FileText,
              link: '/services/proofreading',
            },
            {
              title: 'بومی‌سازی نرم‌افزار',
              desc: 'تنظیم چیدمان راست‌به‌چپ (RTL)، استخراج فایل‌های ترجمه (JSON, XLIFF) و بررسی UX.',
              icon: Globe2,
              link: '/services/localization',
            },
            {
              title: 'ترجمه عمومی و مقالات',
              desc: 'نثر فاخر دانشگاهی، کتاب‌های مرجع اقتصادی و متون راهبردی سازمانی.',
              icon: Languages,
              link: '/services/translation',
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-white border border-[#22272B]/10 p-6 space-y-4 hover:border-[#B79656] transition-colors shadow-sm">
                <div className="w-10 h-10 bg-[#F8F6F1] flex items-center justify-center border border-[#22272B]/10">
                  <Icon className="w-5 h-5 text-[#22272B]" />
                </div>
                <h3 className="font-serif font-bold text-lg text-[#22272B]">{item.title}</h3>
                <p className="text-xs text-[#22272B]/75 leading-relaxed">{item.desc}</p>
                <Link to={item.link} className="text-xs font-bold text-[#B79656] hover:underline inline-block pt-2">
                  مطالعه جزییات و استانداردهای این حوزه ←
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* BILINGUAL COMPARISON */}
      <section className="bg-white py-16 border-y border-[#22272B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#B79656]">بررسی تطبیقی نمونه‌ها</span>
            <h2 className="text-3xl font-serif text-[#22272B]">مقایسه سطر به سطر متن انگلیسی و معادل فارسی</h2>
          </div>
          <BilingualComparison />
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-3xl font-serif text-[#22272B]">محاسبه تخمینی زمان تحویل و هزینه</h2>
            <p className="text-sm text-[#22272B]/80 leading-relaxed">
              با انتخاب تعداد کلمات متن خود، مدت زمان استاندارد تحویل و بازه قیمتی تقریبی را مشاهده نمایید.
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
