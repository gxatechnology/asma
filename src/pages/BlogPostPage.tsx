import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
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
        // Fallback default article
        const fallback: BlogPost = {
          id: 'post-1',
          slug: slug || 'translating-english-articles-into-natural-persian',
          title: 'Translating English Articles into Natural Persian: Preserving Flow and Meaning',
          title_fa: 'ترجمه مقالات انگلیسی به فارسی روان: حفظ پیوستگی معنایی و لحن نویسنده',
          category: 'Article Translation',
          excerpt: 'A practical look at how article translators balance source fidelity with Persian stylistic elegance, avoiding common translation artifacts.',
          excerpt_fa: 'بررسی کاربردی چگونگی برقراری تعادل میان امانتداری به متن اصلی و شیوایی نثر فارسی در ترجمه مقالات پژوهشی و تحلیلی.',
          content: '',
          content_fa: '',
          readTime: '6 min read',
          author: {
            name: 'Asma Parnianfard, M.A.',
            role: 'Independent English-to-Persian Translator',
            avatar: '/assets/asma-parnianfard-portrait.png',
          },
          publishedAt: '2026-09-28',
          tags: ['Article Translation', 'Persian Syntax', 'Natural Phrasing', 'Readability'],
          featured: true,
        };
        setPost(fallback);
        setLoading(false);
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

        <p
          className="text-base sm:text-lg text-[#22272B]/80 font-sans leading-relaxed italic border-l-2 border-[#B79656] pl-4 my-4"
          style={{
            borderLeftWidth: isRTL ? 0 : 2,
            borderRightWidth: isRTL ? 2 : 0,
            paddingRight: isRTL ? '1rem' : 0,
            paddingLeft: isRTL ? 0 : '1rem'
          }}
        >
          {lang === 'fa' ? post.excerpt_fa : post.excerpt}
        </p>
      </header>

      {/* ARTICLE BODY */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 font-sans text-[#22272B]/85 text-base sm:text-lg leading-relaxed space-y-6">
        <div className="space-y-6">
          <p>
            {lang === 'fa' ? (
              'ترجمه مقالات و متون نوشتاری از زبان انگلیسی به فارسی همواره با چالشی ظریف همراه است: چگونه می‌توان پیام دقیق، استدلال و لحن نویسنده اصلی را حفظ کرد بدون آنکه متن در زبان فارسی مصنوعی، خشک یا ترجمه‌زده به نظر برسد؟'
            ) : (
              'Translating English articles into Persian involves a subtle balance: how can a translator faithfully render the author\'s exact argument and tone while ensuring that the text reads naturally and engagingly in Persian?'
            )}
          </p>

          <p>
            {lang === 'fa' ? (
              'در زبان انگلیسی، ساختارهای نحوی بلندی با استفاده از جملات واره‌ای (relative clauses) شکل می‌گیرد که اگر مستقیماً به فارسی برگردانده شوند، ابهام و سنگینی ناخواسته‌ای در متن ایجاد می‌کنند. یک ترجمه دقیق انسانی، پیام کلی جمله را استخراج کرده و آن را در قالب ساختارهای مانوس و ریتم طبیعی زبان فارسی بازآفرینی می‌نماید.'
            ) : (
              'English syntax frequently relies on nested clauses and passive constructions that, if translated literally, produce heavy and awkward Persian phrasing. Thoughtful human translation extracts the core proposition and reconstructs it using natural Persian sentence patterns and clear connective transitions.'
            )}
          </p>

          <div className="premium-card premium-card-ivory p-6 space-y-3 text-sm">
            <h3 className="font-serif font-bold text-[#22272B] text-base">
              {lang === 'fa' ? 'اصول کلیدی در ترجمه مقالات:' : 'Key Principles in Article Translation:'}
            </h3>
            <ul className="space-y-2 text-[#22272B]/80 font-sans">
              <li>
                <strong>{lang === 'fa' ? '۱. درک پیام پیش از معادل‌یابی:' : '1. Comprehending Before Translating:'}</strong>{' '}
                {lang === 'fa' ? 'شناخت بافتار متن و ایده مرکزی نویسنده مبنای هر انتخاب واژگانی است.' : 'Grasping the overarching thesis shapes individual vocabulary decisions.'}
              </li>
              <li>
                <strong>{lang === 'fa' ? '۲. روانی در زبان مقصد:' : '2. Target Language Fluency:'}</strong>{' '}
                {lang === 'fa' ? 'متن فارسی باید روان باشد و خواننده احساس نکند با کلماتی بی‌روح روبه‌رو است.' : 'The Persian rendering must read smoothly and convincingly.'}
              </li>
              <li>
                <strong>{lang === 'fa' ? '۳. یکدستی اصطلاحات:' : '3. Terminology Consistency:'}</strong>{' '}
                {lang === 'fa' ? 'اصطلاحات کلیدی در سرتاسر مقاله با واژگانی هماهنگ ترجمه شوند.' : 'Key concepts must maintain consistent terminology throughout.'}
              </li>
            </ul>
          </div>

          <p>
            {lang === 'fa' ? (
              'باور دارم که هنر ترجمه در همین توجه به جزئیات است؛ جایی که کلمات پلی برای ارتباط فکری میان دو فرهنگ می‌شوند و خواننده فارسی‌زبان از خواندن متنی منسجم و شفاف بهره‌مند می‌گردد.'
            ) : (
              'Careful translation bridges linguistic divides by honoring both the integrity of the source message and the stylistic richness of the Persian language.'
            )}
          </p>
        </div>

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
        <div className="premium-card premium-card-ivory p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
          <div className="relative shrink-0">
            <img
              src="/assets/asma-parnianfard-portrait.png"
              alt="ASMA PARNIANFARD"
              className="w-20 h-20 rounded-full object-cover object-top border-2 border-[#B79656]"
            />
            <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full border border-[#B79656]/60 bg-[#22272B] p-1 shadow flex items-center justify-center">
              <img
                src="/assets/branding/ap-monogram-cropped.png"
                alt="AP Monogram"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="space-y-2 text-center sm:text-left" style={{ textAlign: isRTL ? 'right' : undefined }}>
            <h3 className="font-serif text-lg font-bold text-[#22272B]">
              {lang === 'fa' ? 'درباره نویسنده: اسماء پرنیان‌فرد' : 'About the Author: ASMA PARNIANFARD, M.A.'}
            </h3>
            <p className="text-xs sm:text-sm text-[#22272B]/75 font-sans leading-relaxed">
              {lang === 'fa'
                ? 'کارشناس ارشد مترجمی زبان انگلیسی از دانشگاه آزاد اسلامی مشهد. مترجم مستقل زبان انگلیسی به فارسی با تمرکز بر ترجمه مقالات و متون عمومی.'
                : 'Independent English-to-Persian translator specializing in articles and general written texts. M.A. in Translation Studies from Islamic Azad University.'}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
