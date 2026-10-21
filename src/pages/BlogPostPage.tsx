import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  Calendar, 
  Clock, 
  Share2, 
  Tag, 
  BookOpen, 
  Award, 
  ExternalLink 
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { BlogPost } from '../types';

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const { lang, isRTL } = useLanguage();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/blog/${slug}`)
      .then((res) => {
        if (!res.ok) throw new Error('Not found');
        return res.json();
      })
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch(() => {
        // Fallback search in hardcoded list
        fetch('/api/blog')
          .then(r => r.json())
          .then((list: BlogPost[]) => {
            const found = list.find(x => x.slug === slug);
            if (found) {
              setPost(found);
            }
            setLoading(false);
          })
          .catch(() => setLoading(false));
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto py-24 px-4 text-center">
        <p className="text-sm font-mono text-[#22272B]/60">{lang === 'fa' ? 'در حال بارگذاری مقاله...' : 'Loading article...'}</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto py-24 px-4 text-center space-y-4">
        <h1 className="text-2xl font-serif text-[#22272B]">
          {lang === 'fa' ? 'مقاله مورد نظر یافت نشد' : 'Article not found'}
        </h1>
        <Link to="/blog" className="text-xs font-semibold text-[#B79656] underline">
          {lang === 'fa' ? 'بازگشت به آرشیو مقالات' : 'Return to Blog Archive'}
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-16 py-8 md:py-12">
      {/* NAVIGATION CRUMB */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/blog"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#22272B]/60 hover:text-[#B79656] transition-colors"
        >
          {isRTL ? <ArrowRight className="w-3.5 h-3.5" /> : <ArrowLeft className="w-3.5 h-3.5" />}
          <span>{lang === 'fa' ? 'بازگشت به همه مقالات' : 'Back to Journal Index'}</span>
        </Link>
      </div>

      {/* ARTICLE HEADER */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="flex items-center gap-3 text-xs font-mono">
          <span className="text-[#B79656] font-semibold uppercase">{post.category}</span>
          <span className="text-[#22272B]/40">•</span>
          <span className="text-[#22272B]/60 flex items-center gap-1">
            <Clock className="w-3 h-3" /> {post.readTime}
          </span>
          <span className="text-[#22272B]/40">•</span>
          <span className="text-[#22272B]/60 flex items-center gap-1">
            <Calendar className="w-3 h-3" /> {post.publishedAt}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#22272B] leading-tight">
          {lang === 'fa' ? post.title_fa : post.title}
        </h1>

        <p className="text-base sm:text-lg text-[#22272B]/80 font-sans leading-relaxed italic border-l-2 border-[#B79656] pl-4 my-4" style={{ borderLeftWidth: isRTL ? 0 : 2, borderRightWidth: isRTL ? 2 : 0, paddingRight: isRTL ? '1rem' : 0 }}>
          {lang === 'fa' ? post.excerpt_fa : post.excerpt}
        </p>

        {/* AUTHOR CARD */}
        <div className="flex items-center justify-between py-4 border-y border-[#22272B]/10">
          <div className="flex items-center gap-3">
            <img
              src={post.author.avatar || '/assets/asma-parnianfard-portrait.png'}
              alt={post.author.name}
              className="w-10 h-10 rounded-full object-cover border border-[#22272B]/10"
            />
            <div>
              <span className="font-serif font-bold text-sm text-[#22272B] block">
                {post.author.name}
              </span>
              <span className="text-xs text-[#22272B]/60 font-sans">
                {post.author.role}
              </span>
            </div>
          </div>

          <a
            href="https://www.linkedin.com/in/asma-parnianfard-a11b69433"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-medium text-[#B79656] hover:underline inline-flex items-center gap-1"
          >
            LinkedIn Profile <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </header>

      {/* ARTICLE BODY */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 font-sans text-[#22272B]/85 text-base sm:text-lg leading-relaxed space-y-6">
        {post.content ? (
          <div className="prose max-w-none space-y-4">
            {post.content.split('\n\n').map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            <p>
              {lang === 'fa' ? (
                'در ترجمه اسناد تخصصی مالی و گزارش‌های مبتنی بر استانداردهای بین‌المللی گزارشگری مالی (IFRS)، یکی از رایج‌ترین اشتباهات رخ‌داده توسط مترجمان عمومی، اشتباه گرفتن مفاهیم بنیادین حسابداری است. برای نمونه، در استاندارد بین‌المللی حسابداری شماره ۳۷ (IAS 37)، سه مفهوم با یکدیگر تمایز جدی دارند:'
              ) : (
                'In specialized financial translation and corporate reporting under International Financial Reporting Standards (IFRS), one of the most perilous traps is conceptual conflation. Under International Accounting Standard 37 (IAS 37), three specific categories are distinct in both legal liability and balance sheet presentation:'
              )}
            </p>

            <div className="p-6 bg-[#F8F6F1] border border-[#22272B]/10 space-y-3 text-sm">
              <h3 className="font-serif font-bold text-[#22272B] text-base">
                1. Provisions (تعهدات برآوردی یا ذخایر تعهددار)
              </h3>
              <p className="text-[#22272B]/80 font-sans">
                {lang === 'fa'
                  ? 'بدهی‌هایی با زمان‌بندی یا مبلغ نامعین که وجود تعهد فعلی ناشی از رویداد گذشته در آن‌ها محرز است و خروج منافع اقتصادی محتمل است.'
                  : 'Liabilities of uncertain timing or amount where a present obligation from past events is probable and can be reliably estimated.'}
              </p>
            </div>

            <div className="p-6 bg-[#F8F6F1] border border-[#22272B]/10 space-y-3 text-sm">
              <h3 className="font-serif font-bold text-[#22272B] text-base">
                2. Contingent Liabilities (بدهی‌های احتمالی)
              </h3>
              <p className="text-[#22272B]/80 font-sans">
                {lang === 'fa'
                  ? 'تعهداتی که وجود آن‌ها تنها با وقوع رویدادهای آتی تایید می‌شود؛ در متن ترازنامه شناسایی نمی‌شوند بلکه در یادداشت‌های توضیحی افشا می‌گردند.'
                  : 'Possible obligations whose existence will be confirmed only by uncertain future events; never recognized in the balance sheet itself, only disclosed in notes.'}
              </p>
            </div>

            <div className="p-6 bg-[#F8F6F1] border border-[#22272B]/10 space-y-3 text-sm">
              <h3 className="font-serif font-bold text-[#22272B] text-base">
                3. Capital Reserves (اندوخته‌های سرمایه‌ای و قانونی)
              </h3>
              <p className="text-[#22272B]/80 font-sans">
                {lang === 'fa'
                  ? 'بخشی از حقوق مالکانه شرکت که بر اساس قانون تجارت یا مصوبه مجمع تفکیک شده و ارتباطی با بدهی‌های شرکت ندارد.'
                  : 'Components of equity segregated under statutory commercial code mandates or board resolutions; completely distinct from liabilities.'}
              </p>
            </div>

            <p>
              {lang === 'fa' ? (
                'هنگامی که مترجم ناآشنا این هر سه را به واژه عام «ذخیره» ترجمه می‌کند، ممیزان مالیاتی و سرمایه‌گذاران خارجی دچار ابهام شده و شفافیت گزارشگری سازمان مخدوش می‌گردد. رعایت این ظرافت‌هاست که ترجمه دانشگاهی و تخصصی را متمایز می‌سازد.'
              ) : (
                'When an untrained translator renders all three under a generic term like "reserve", external auditors and credit rating agencies face ambiguity regarding the firm’s actual liquidity risks. Rigorous academic translation ensures that statutory definitions remain intact.'
              )}
            </p>
          </div>
        )}

        {/* TAGS */}
        <div className="pt-6 border-t border-[#22272B]/10 flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono uppercase text-[#22272B]/60 mr-2">
            {lang === 'fa' ? 'برچسب‌ها:' : 'Filed under:'}
          </span>
          {post.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 bg-[#F8F6F1] text-[#22272B]/75 text-xs font-mono border border-[#22272B]/10"
            >
              #{tag}
            </span>
          ))}
        </div>
      </article>

      {/* AUTHOR BIO AT BOTTOM */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#E9E2D7]/40 border border-[#22272B]/10 p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
          <img
            src="/assets/asma-parnianfard-portrait.png"
            alt="Asma Parnianfard"
            className="w-20 h-20 rounded-full object-cover object-top border-2 border-[#B79656] flex-shrink-0"
          />
          <div className="space-y-2 text-center sm:text-left" style={{ textAlign: isRTL ? 'right' : undefined }}>
            <h3 className="font-serif text-lg font-bold text-[#22272B]">
              {lang === 'fa' ? 'درباره نویسنده: اسماء پرنیان‌فرد' : 'About the Author: Asma Parnianfard, M.A.'}
            </h3>
            <p className="text-xs sm:text-sm text-[#22272B]/75 font-sans leading-relaxed">
              {lang === 'fa'
                ? 'کارشناس ارشد مترجمی زبان انگلیسی از دانشگاه آزاد اسلامی مشهد. پژوهشگر و مترجم تخصصی در زمینه متون مالی، حسابرسی قانونی و قراردادهای بازرگانی.'
                : 'Holding an M.A. in Translation Studies from Islamic Azad University, Asma specializes in high-stakes financial, commercial, and technical English-to-Persian translation.'}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
