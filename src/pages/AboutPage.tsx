import React from 'react';
import { Link } from 'react-router-dom';
import {
  Award,
  MapPin,
  ShieldCheck,
  ExternalLink,
  CheckCircle2,
  BookOpen,
  Scale,
  Globe2,
  FileText,
  ArrowRight,
  ArrowLeft,
  Lock,
  PenTool,
  MessageSquare
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function AboutPage() {
  const { lang, isRTL } = useLanguage();

  return (
    <div className="space-y-20 md:space-y-28 py-8 md:py-12">
      {/* HEADER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B79656]">
            <span className="w-8 h-[1px] bg-[#B79656]"></span>
            <span>{lang === 'fa' ? 'درباره مترجم' : 'About the Translator'}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-serif text-[#22272B] leading-tight">
            {lang === 'fa' ? (
              <>
                اسماء پرنیان‌فرد؛ <br />
                <span className="italic text-[#B79656]">مترجم مستقل</span> انگلیسی به فارسی
              </>
            ) : (
              <>
                Asma Parnianfard <br />
                <span className="italic text-[#B79656]">Independent Translator</span>
              </>
            )}
          </h1>

          <p className="text-base sm:text-lg text-[#22272B]/80 font-sans leading-relaxed">
            {lang === 'fa' ? (
              'من اسماء پرنیان‌فرد، مترجم مستقل متون انگلیسی به فارسی هستم. تمرکز اصلی من بر ترجمه مقالات و متون عمومی است که با دقت فراوان در درک مفهوم، زمینه متن، شفافیت بیان و روانی نگارش زبان فارسی انجام می‌گیرد.'
            ) : (
              "I'm Asma Parnianfard, an independent translator working from English into Persian. My main focus is translating articles and general written texts with careful attention to meaning, context, clarity, and natural Persian expression."
            )}
          </p>
        </div>
      </section>

      {/* BIOGRAPHY & PORTRAIT ROW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Portrait Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative bg-white p-4 shadow-xl border border-[#22272B]/10">
              {/* Golden AP Monogram Official Seal */}
              <div className="absolute -top-3.5 -right-3.5 w-12 h-12 rounded-full border border-[#B79656]/60 bg-gradient-to-br from-[#2D3339] via-[#22272B] to-[#1A1E22] p-1.5 shadow-xl z-20 flex items-center justify-center">
                <img
                  src="/assets/branding/ap-monogram-cropped.png"
                  alt="Official Golden AP Monogram Seal"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="aspect-[4/5] overflow-hidden bg-[#E9E2D7]">
                <img
                  src="/assets/asma-parnianfard-portrait.png"
                  alt="Official Portrait of ASMA PARNIANFARD"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="pt-5 space-y-3">
                <div>
                  <h2 className="text-xl font-serif font-bold text-[#22272B] tracking-wide">
                    {lang === 'fa' ? 'اسماء پرنیان‌فرد' : 'ASMA PARNIANFARD'}
                  </h2>
                  <p className="text-xs font-mono uppercase tracking-wider text-[#B79656] font-semibold mt-0.5">
                    M.A., Language Interpretation & Translation
                  </p>
                </div>

                <div className="space-y-2 text-xs text-[#22272B]/75 border-t border-[#22272B]/10 pt-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[#22272B]/50">{lang === 'fa' ? 'دانشگاه:' : 'Institution:'}</span>
                    <span className="font-medium text-[#22272B]">Islamic Azad University</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#22272B]/50">{lang === 'fa' ? 'موقعیت جغرافیایی:' : 'Location:'}</span>
                    <span className="font-medium text-[#22272B]">Mashhad, Iran</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#22272B]/50">{lang === 'fa' ? 'ارتباط مستقیم:' : 'Direct Profile:'}</span>
                    <a
                      href="https://www.linkedin.com/in/asma-parnianfard-a11b69433"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-[#B79656] hover:underline"
                    >
                      LinkedIn <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Translation Philosophy Quote */}
            <div className="p-6 bg-[#F8F6F1] border-l-2 border-[#B79656] space-y-2 text-xs sm:text-sm text-[#22272B]/80 font-sans italic" style={{ borderLeftWidth: isRTL ? 0 : 2, borderRightWidth: isRTL ? 2 : 0 }}>
              <p>
                {lang === 'fa'
                  ? '«باور دارم که ترجمه موثر فراتر از جایگزینی ساده کلمات میان دو زبان است؛ بلکه نیازمند درک عمیق پیام و بازآفرینی آن به گونه‌ای است که برای مخاطب فارسی‌زبان کاملاً رسا، ملموس و شایسته باشد.»'
                  : '"I believe effective translation involves more than replacing words between languages. It requires understanding the message and expressing it in a way that feels clear and appropriate to the target audience."'}
              </p>
              <span className="block font-serif font-normal not-italic text-[#B79656] text-xs">
                — Asma Parnianfard, M.A.
              </span>
            </div>
          </div>

          {/* Detailed Biography Text */}
          <div className="lg:col-span-7 space-y-8 font-sans text-[#22272B]/85 text-base sm:text-lg leading-relaxed">

            <div className="space-y-4">
              <h3 className="text-2xl font-serif text-[#22272B] font-semibold">
                {lang === 'fa' ? 'پیشینه تحصیلی و دیدگاه حرفه‌ای' : 'Educational Foundation & Approach'}
              </h3>
              <p>
                {lang === 'fa' ? (
                  'من دانش‌آموخته مقطع کارشناسی ارشد در رشته «مترجمی زبان انگلیسی» از دانشگاه آزاد اسلامی مشهد هستم. در طول دوران تحصیل، بر زبان‌شناسی مقابله‌ای، اصول معادل‌یابی و تحلیل ساختارهای متنی تمرکز داشته‌ام.'
                ) : (
                  'Holding a Master of Arts (M.A.) in Language Interpretation and Translation from Islamic Azad University, my background combines formal translation studies with careful attention to comparative linguistics, syntax, and natural Persian phrasing.'
                )}
              </p>
              <p>
                {lang === 'fa' ? (
                  'در فعالیت حرفه‌ای خود، تمرکز اصلی‌ام بر ترجمه کتبی متون از انگلیسی به فارسی است؛ به‌ویژه مقالات علمی و پژوهشی، متون عمومی و محتواهای نوشتاری گوناگون. هدف من همواره این است که متن ترجمه‌شده به جای داشتن لحنی مکانیکی یا ترجمه‌زده، به صورت یک نوشته اصیل و شیوا در زبان فارسی خوانده شود.'
                ) : (
                  'My practice focuses primarily on written English-to-Persian translation, with an emphasis on articles, informational materials, and general written texts. In every assignment, I aim to ensure that the Persian text reads like an authentic, thoughtfully composed document rather than a word-for-word substitution.'
                )}
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-[#22272B]/10">
              <h3 className="text-2xl font-serif text-[#22272B] font-semibold">
                {lang === 'fa' ? 'همکاری مستقیم و مستقل' : 'Independent, Direct Practice'}
              </h3>
              <p>
                {lang === 'fa' ? (
                  'به عنوان یک مترجم مستقل، شما در تمامی مراحل به طور مستقیم با خود من در ارتباط خواهید بود. این امر به معنای پاسخگویی مستقیم، یکدستی لحن در کل متن و اطمینان از عدم ارجاع کار به واسطه‌هاست.'
                ) : (
                  'As an independent translator, you work directly with me from initial review to final delivery. This ensures consistent style across your document, clear direct communication, and certainty that your materials are handled solely by the translator you engaged.'
                )}
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-[#22272B]/10">
              <h3 className="text-2xl font-serif text-[#22272B] font-semibold">
                {lang === 'fa' ? 'توجه به بافتار و روانی کلام' : 'Attention to Context & Tone'}
              </h3>
              <p>
                {lang === 'fa' ? (
                  'هر متن دارای بافت، مخاطب و هدفی مشخص است. ترجمه دقیق نیازمند توجه به این عوامل است تا لحن مناسب انتخاب شود و مفاهیم پیچیده به ساده‌ترین و دقیق‌ترین شکل ممکن به خواننده فارسی‌زبان منتقل گردند.'
                ) : (
                  'Every text has its own purpose, tone, and audience. Accurate translation requires understanding these nuances so that the Persian text effectively conveys the original ideas with clarity, natural flow, and proper register.'
                )}
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* METHODOLOGICAL COMMITMENTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3 mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B79656]">
            <Scale className="w-4 h-4" />
            <span>{lang === 'fa' ? 'اصول کاری' : 'Practice Commitments'}</span>
          </div>
          <h2 className="text-3xl font-serif text-[#22272B]">
            {lang === 'fa' ? 'تعهدات من در قبال متون شما' : 'Core Principles of Practice'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="premium-card p-6 space-y-4 group">
            <div className="premium-icon-box-sm">
              <ShieldCheck className="w-5 h-5 text-[#22272B]" />
            </div>
            <h3 className="font-serif text-lg font-semibold text-[#22272B] premium-card-title transition-colors">
              {lang === 'fa' ? 'حفظ کامل محرمانگی' : 'Strict Confidentiality'}
            </h3>
            <p className="text-xs sm:text-sm text-[#22272B]/70 leading-relaxed font-sans">
              {lang === 'fa'
                ? 'تمامی فایل‌ها و مقالات به صورت کاملاً محرمانه بررسی و نگهداری می‌شوند و امکان امضای توافق‌نامه NDA در صورت نیاز وجود دارد.'
                : 'All source texts and project files are handled with complete confidentiality and discretion. Mutual NDAs are available upon request.'}
            </p>
          </div>

          <div className="premium-card p-6 space-y-4 group">
            <div className="premium-icon-box-sm">
              <PenTool className="w-5 h-5 text-[#22272B]" />
            </div>
            <h3 className="font-serif text-lg font-semibold text-[#22272B] premium-card-title transition-colors">
              {lang === 'fa' ? 'ترجمه مستقیم توسط مترجم' : 'Direct Translation'}
            </h3>
            <p className="text-xs sm:text-sm text-[#22272B]/70 leading-relaxed font-sans">
              {lang === 'fa'
                ? 'تمامی متون شخصاً توسط خود من ترجمه و بازخوانی می‌شوند تا یکدستی سبک و کیفیت کار تضمین شود.'
                : 'Every text is translated and reviewed directly by Asma Parnianfard, ensuring consistent single-voice quality.'}
            </p>
          </div>

          <div className="premium-card p-6 space-y-4 group">
            <div className="premium-icon-box-sm">
              <MessageSquare className="w-5 h-5 text-[#22272B]" />
            </div>
            <h3 className="font-serif text-lg font-semibold text-[#22272B] premium-card-title transition-colors">
              {lang === 'fa' ? 'پاسخگویی و بازنگری پس از تحویل' : 'Post-Delivery Support'}
            </h3>
            <p className="text-xs sm:text-sm text-[#22272B]/70 leading-relaxed font-sans">
              {lang === 'fa'
                ? 'پس از تحویل، امکان بررسی متن، طرح پرسش‌ها و اعمال اصلاحات یا توضیحات تکمیلی فراهم است.'
                : 'Follow-up support is provided following delivery to accommodate client questions, clarifications, and stylistic refinements.'}
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-[#22272B] text-white py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left" style={{ textAlign: isRTL ? 'right' : undefined }}>
            <h2 className="text-2xl sm:text-3xl font-serif">
              {lang === 'fa' ? 'مایلید متن خود را برای بررسی ارسال کنید؟' : 'Ready to discuss your translation project?'}
            </h2>
            <p className="text-white/70 text-xs sm:text-sm font-sans">
              {lang === 'fa'
                ? 'برآورد شفاف هزینه و زمان‌بندی خدمت شما ارائه خواهد شد.'
                : 'Receive a clear, transparent quote and turnaround estimate.'}
            </p>
          </div>

          <div className="flex items-center gap-4 flex-shrink-0">
            <Link
              to="/quote"
              className="px-6 py-3 bg-[#B79656] text-white hover:bg-white hover:text-[#22272B] transition-colors font-medium text-xs sm:text-sm"
            >
              {lang === 'fa' ? 'استعلام قیمت و سفارش' : 'Request a Quote'}
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 border border-white/30 text-white hover:border-white transition-colors text-xs sm:text-sm"
            >
              {lang === 'fa' ? 'ارتباط مستقیم' : 'Contact Direct'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
