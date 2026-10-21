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
  ArrowLeft
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
            <span>{lang === 'fa' ? 'زندگینامه و دیدگاه حرفه‌ای' : 'Curriculum Vitae & Professional Atelier'}</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-serif text-[#22272B] leading-tight">
            {lang === 'fa' ? (
              <>
                اسماء پرنیان‌فرد؛ <br />
                <span className="italic text-[#B79656]">مترجم تخصصی</span> انگلیسی به فارسی در حوزه مالی و بازرگانی.
              </>
            ) : (
              <>
                Asma Parnianfard <br />
                <span className="italic text-[#B79656]">Independent Translator</span> & Linguistic Consultant.
              </>
            )}
          </h1>

          <p className="text-base sm:text-lg text-[#22272B]/80 font-sans leading-relaxed">
            {lang === 'fa' ? (
              'دارای مدرک کارشناسی ارشد در رشته مترجمی زبان انگلیسی از دانشگاه آزاد اسلامی مشهد. متخصص در ترجمه دقیق صورت‌های مالی IFRS، اسناد حقوقی شرکت‌ها و متون استراتژیک سازمانی.'
            ) : (
              'Holding a Master’s degree in Language Interpretation and Translation from Islamic Azad University, Asma delivers linguistically refined, domain-accurate English-to-Persian translations for the global corporate and financial sectors.'
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
              <div className="aspect-[4/5] overflow-hidden bg-[#E9E2D7]">
                <img
                  src="/assets/asma-parnianfard-portrait.png"
                  alt="Official Portrait of Asma Parnianfard"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="pt-5 space-y-3">
                <div>
                  <h2 className="text-xl font-serif font-bold text-[#22272B]">
                    {lang === 'fa' ? 'اسماء پرنیان‌فرد' : 'Asma Parnianfard'}
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
                    <span className="font-medium text-[#22272B]">Mashhad, Iran (IRST / UTC+3:30)</span>
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

            {/* Credential Quote */}
            <div className="p-6 bg-[#F8F6F1] border-l-2 border-[#B79656] space-y-2 text-xs sm:text-sm text-[#22272B]/80 font-sans italic">
              <p>
                {lang === 'fa'
                  ? '«در اسناد مالی و حقوقی، واژه‌ها بار مالیاتی و قانونی دارند؛ ترجمه وفادار یعنی فهم ماهیت حقوقی قبل از انتخاب واژه.»'
                  : '"In financial and legal documentation, words carry statutory liability. True translation fidelity begins with understanding the underlying accounting premise before rendering a single word."'}
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
                {lang === 'fa' ? 'پیشینه دانشگاهی و تخصص حرفه‌ای' : 'Academic Foundation & Domain Specialization'}
              </h3>
              <p>
                {lang === 'fa' ? (
                  'اسماء پرنیان‌فرد پس از پایان مقطع کارشناسی، دوره کارشناسی ارشد خود را در رشته «مترجمی زبان انگلیسی» در دانشگاه آزاد اسلامی با موفقیت به پایان رساند. پژوهش‌های دانشگاهی او بر روی ساختار تطبیقی اصطلاحات فنی، استراتژی‌های معادل‌یابی در متون اقتصادی و انتقال دقیق لحن رسمی تمرکز داشته است.'
                ) : (
                  'Asma Parnianfard earned her Master of Arts (M.A.) degree in Language Interpretation and Translation from Islamic Azad University. Her academic scholarship focused extensively on applied contrastive linguistics, specialized terminology extraction for economics, and register consistency in bilateral corporate communications.'
                )}
              </p>
              <p>
                {lang === 'fa' ? (
                  'تمرکز بر ترجمه مالی و اسناد حسابداری از یک ضرورت تجاری آغاز شد: بازار رو به رشد ارتباطات تجاری میان شرکت‌های بین‌المللی و ایرانی نیازمند تسلط بر استانداردهای گزارشگری مالی بین‌المللی (IFRS) و استانداردهای حسابداری ملی ایران (INAS) بود. ترجمه نادرست یک سرفصل در ترازنامه یا یادداشت‌های حسابرسی می‌تواند به سوءتفاهم‌های پرهزینه مالی منجر گردد.'
                ) : (
                  'Her dedication to financial and accounting translation was born out of an acute market reality: cross-border ventures, audit committees, and international investors require absolute terminological concordance with International Financial Reporting Standards (IFRS) and national Iranian accounting codes. A mistranslated footnote or misinterpreted disclosure note can distort contractual commitments.'
                )}
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-[#22272B]/10">
              <h3 className="text-2xl font-serif text-[#22272B] font-semibold">
                {lang === 'fa' ? 'موقعیت جغرافیایی و همکاری جهانی' : 'Geographic Anchor & Global Remote Collaboration'}
              </h3>
              <p>
                {lang === 'fa' ? (
                  'اسماء پرنیان‌فرد مقیم شهر تاریخی مشهد در استان خراسان رضوی است. از طریق بستر ارتباطی رمزنگاری‌شده و ابزارهای پیشرفته مدیریت پروژه، او با مشتریان مستقیم، موسسات مالی، شرکت‌های صادراتی-وارداتی و آژانس‌های معتبر ترجمه در اروپا، خاورمیانه و سراسر جهان همکاری پیوسته دارد.'
                ) : (
                  'Based in Mashhad, Razavi Khorasan, Iran, Asma operates an internationally equipped independent atelier. Leveraging high-security communication channels and industry-standard CAT toolchains, she seamlessly integrates into global workflows for translation agencies in London, Zurich, Dubai, and beyond.'
                )}
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-[#22272B]/10">
              <h3 className="text-2xl font-serif text-[#22272B] font-semibold">
                {lang === 'fa' ? 'فلسفه ترجمه: فراتر از ترجمه ماشینی' : 'Translation Philosophy: Precision Over Machine Fallibility'}
              </h3>
              <p>
                {lang === 'fa' ? (
                  'در عصری که ترجمه‌های ماشینی متون را به شکلی سطحی بازتولید می‌کنند، کار من بر ظرافت‌های معنایی و استانداردهای فرهنگستان زبان و ادب فارسی و سازمان حسابرسی ایران استوار است. تفاوت ماهوی میان "Impairment" و "Depreciation" یا ترجمه دقیق عبارات پیچیده اساسنامه در حوزه تخصصی انسان با تجربه معنا پیدا می‌کند.'
                ) : (
                  'In an era flooded with generic machine translation that appears superficially coherent while hiding critical conceptual flaws, Asma’s practice is built on unyielding human rigor. Automated engines cannot appreciate why "Impairment of Assets" differs legally and procedurally from "Depreciation", nor can they calibrate Persian syntactic elegance for board-level scrutiny.'
                )}
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ATELIER & WORKSPACE IMAGERY */}
      <section className="bg-white py-16 border-y border-[#22272B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B79656]">
              {lang === 'fa' ? 'محیط کار و ابزارها' : 'Atelier & Methodological Infrastructure'}
            </span>
            <h2 className="text-3xl font-serif text-[#22272B]">
              {lang === 'fa' ? 'دقت در هر کلمه، با تکیه بر منابع معتبر' : 'Rigorous Environment, Authentic Scholarly Tools'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#F8F6F1] border border-[#22272B]/10 overflow-hidden shadow-sm">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src="/assets/aistudio/Image_1_e154d288.jpeg"
                  alt="Professional Translation Desk with Dictionaries and Reference Volumes"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 space-y-2">
                <h3 className="font-serif text-lg font-semibold text-[#22272B]">
                  {lang === 'fa' ? 'میز کار پژوهشی و منابع مرجع' : 'Curated Linguistic Reference Library'}
                </h3>
                <p className="text-xs sm:text-sm text-[#22272B]/75 leading-relaxed font-sans">
                  {lang === 'fa'
                    ? 'فرهنگ‌های تخصصی مالی آریان‌پور، واژه‌نامه‌های مصوب سازمان حسابرسی، فرهنگ حقوقی جعفری لنگرودی و متون مرجع آکسفورد و کمبریج.'
                    : 'Specialized accounting glossaries, Iranian Audit Organization official terminology compendiums, and bilingual contract law reference works.'}
                </p>
              </div>
            </div>

            <div className="bg-[#F8F6F1] border border-[#22272B]/10 overflow-hidden shadow-sm">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src="/assets/aistudio/Image_3_6dc99c9e.jpeg"
                  alt="Editorial Proofreading with Fountain Pen on Print Proofs"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 space-y-2">
                <h3 className="font-serif text-lg font-semibold text-[#22272B]">
                  {lang === 'fa' ? 'ویرایش و بازخوانی سطر به سطر' : 'Substantive Multi-Pass Proofreading'}
                </h3>
                <p className="text-xs sm:text-sm text-[#22272B]/75 leading-relaxed font-sans">
                  {lang === 'fa'
                    ? 'بررسی فیزیکی و تطبیق متن چاپی جهت شناسایی کوچکترین خطاهای نگارشی، تطابق ارقام ترازنامه و اطمینان از سلامت نثر فارسی.'
                    : 'Physical proof-reading passes to verify numerical concordances, footnote linkages, and Persian typographic punctuation harmony.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CODE OF ETHICS & COMMITMENTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3 mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B79656]">
            <Scale className="w-4 h-4" />
            <span>{lang === 'fa' ? 'اصول اخلاق حرفه‌ای' : 'Institutional Code of Ethics'}</span>
          </div>
          <h2 className="text-3xl font-serif text-[#22272B]">
            {lang === 'fa' ? 'تعهدات خدشه‌ناپذیر در قبال اسناد کارفرما' : 'Guarantees That Protect Your Organization'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white border border-[#22272B]/10 space-y-3 shadow-sm">
            <ShieldCheck className="w-6 h-6 text-[#788A78]" />
            <h3 className="font-serif text-lg font-semibold text-[#22272B]">
              {lang === 'fa' ? 'محرمانگی کامل و قرارداد NDA' : 'Strict Non-Disclosure'}
            </h3>
            <p className="text-xs sm:text-sm text-[#22272B]/70 leading-relaxed font-sans">
              {lang === 'fa'
                ? 'امضای قرارداد دوجانبه حفظ محرمانگی پیش از مشاهده هرگونه سند حساس مالی یا حقوقی.'
                : 'Execution of bilateral NDAs prior to inspection of financial statements, tenders, or confidential strategy memos.'}
            </p>
          </div>

          <div className="p-6 bg-white border border-[#22272B]/10 space-y-3 shadow-sm">
            <CheckCircle2 className="w-6 h-6 text-[#B79656]" />
            <h3 className="font-serif text-lg font-semibold text-[#22272B]">
              {lang === 'fa' ? 'عدم واگذاری به غیر' : 'Zero Outsourced Subcontracting'}
            </h3>
            <p className="text-xs sm:text-sm text-[#22272B]/70 leading-relaxed font-sans">
              {lang === 'fa'
                ? 'تمام پروژه‌ها شخصاً توسط اسماء پرنیان‌فرد انجام می‌شود و به مترجمان فریلنسر ناشناس واگذار نمی‌گردد.'
                : 'Every word is translated, refined, and audited directly by Asma Parnianfard, ensuring uninterrupted single-voice consistency.'}
            </p>
          </div>

          <div className="p-6 bg-white border border-[#22272B]/10 space-y-3 shadow-sm">
            <Award className="w-6 h-6 text-[#22272B]" />
            <h3 className="font-serif text-lg font-semibold text-[#22272B]">
              {lang === 'fa' ? 'ضمانت بازنگری ۱۴ روزه' : '14-Day Post-Delivery Warranty'}
            </h3>
            <p className="text-xs sm:text-sm text-[#22272B]/70 leading-relaxed font-sans">
              {lang === 'fa'
                ? 'پاسخگویی به سوالات ممیزان و حسابرسان و اعمال اصلاحات جزئی بدون دریافت هیچ هزینه اضافی.'
                : 'Full availability to assist audit committees, discuss terminology choices, and apply refinements at no additional charge.'}
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-[#22272B] text-white py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left" style={{ textAlign: isRTL ? 'right' : undefined }}>
            <h2 className="text-2xl sm:text-3xl font-serif">
              {lang === 'fa' ? 'تمایل دارید پروژه خود را مورد ارزیابی قرار دهید؟' : 'Ready to discuss your translation requirements?'}
            </h2>
            <p className="text-white/70 text-xs sm:text-sm font-sans">
              {lang === 'fa' 
                ? 'پیش‌فاکتور دقیق به همراه زمان‌بندی شفاف ظرف ۴ ساعت برای شما ارسال خواهد شد.'
                : 'Receive a confidential, itemized quote and turnaround projection within 4 business hours.'}
            </p>
          </div>

          <div className="flex items-center gap-4 flex-shrink-0">
            <Link
              to="/quote"
              className="px-6 py-3 bg-[#B79656] text-white hover:bg-white hover:text-[#22272B] transition-colors font-medium text-xs sm:text-sm"
            >
              {lang === 'fa' ? 'درخواست استعلام قیمت' : 'Request Official Quote'}
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
