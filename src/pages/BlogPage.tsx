import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Search, 
  Calendar, 
  Clock, 
  User, 
  ArrowRight, 
  Tag 
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { BlogPost } from '../types';

const fallbackPosts: BlogPost[] = [
  {
    id: 'post-1',
    slug: 'navigating-ifrs-financial-translation-challenges',
    title: 'Navigating IFRS English-to-Persian Financial Translation: The Danger of False Cognates',
    title_fa: 'چالش‌های ترجمه صورت‌های مالی IFRS به فارسی: خطرات گرته‌برداری و لغزش‌های مفهومی',
    category: 'Financial Translation',
    excerpt: 'An in-depth linguistic analysis of common pitfalls in translating balance sheets and auditor footnotes, focusing on the nuanced distinction between Provisions, Contingent Liabilities, and Reserves.',
    excerpt_fa: 'واکاوی زبان‌شناختی لغزش‌های رایج در ترجمه ترازنامه و یادداشت‌های حسابرسی؛ با تاکید بر تمایز بنیادین تعهدات برآوردی، بدهی‌های احتمالی و اندوخته‌ها.',
    content: '',
    content_fa: '',
    readTime: '7 min read',
    author: {
      name: 'Asma Parnianfard, M.A.',
      role: 'Lead Translator & Linguistic Consultant',
      avatar: '/assets/asma-parnianfard-portrait.png',
    },
    publishedAt: '2026-09-28',
    tags: ['IFRS', 'Financial Reporting', 'Accounting Concordance', 'Audit Footnotes'],
    featured: true,
  },
  {
    id: 'post-2',
    slug: 'engineering-persian-rtl-web-localization',
    title: 'Engineering Flawless Persian RTL Experiences: Typography, String Expansion & ICU Formatting',
    title_fa: 'مهندسی رابط‌های کاربری راست‌به‌چپ (RTL) در زبان فارسی: تایپوگرافی، افزایش طول رشته و متغیرها',
    category: 'Software Localization',
    excerpt: 'Best practices for international software developers localizing UI strings into Persian, avoiding broken text concatenation, handling bi-directional numbers, and selecting optimal web fonts.',
    excerpt_fa: 'راهنمای جامع توسعه‌دهندگان نرم‌افزار برای بومی‌سازی رابط‌های کاربری به زبان فارسی؛ جلوگیری از شکستگی متغیرها و مدیریت متون دوجهته.',
    content: '',
    content_fa: '',
    readTime: '9 min read',
    author: {
      name: 'Asma Parnianfard, M.A.',
      role: 'Lead Translator & Linguistic Consultant',
      avatar: '/assets/asma-parnianfard-portrait.png',
    },
    publishedAt: '2026-08-15',
    tags: ['RTL', 'UI Localization', 'Persian Web Fonts', 'Bidirectional UX'],
    featured: true,
  },
  {
    id: 'post-3',
    slug: 'anatomy-of-cross-border-joint-venture-contracts',
    title: 'The Anatomy of Cross-Border Commercial Contracts: Maintaining Enforceability Across Jurisdictions',
    title_fa: 'کالبدشکافی قراردادهای تجاری فرامرزی: حفظ قابلیت اجرای حقوقی در نظام‌های قضایی مختلف',
    category: 'Commercial Translation',
    excerpt: 'How subtle syntactical variations between English common law boilerplate and Persian civil code terminology impact commercial disputes, indemnities, and ICC arbitration covenants.',
    excerpt_fa: 'چگونه ظرافت‌های ساختاری میان متون قراردادهای نظام کامن‌لا و مفاهیم قانون مدنی ایران بر دعاوی تجاری و موافقت‌نامه‌های داوری تاثیر می‌گذارند.',
    content: '',
    content_fa: '',
    readTime: '8 min read',
    author: {
      name: 'Asma Parnianfard, M.A.',
      role: 'Lead Translator & Linguistic Consultant',
      avatar: '/assets/asma-parnianfard-portrait.png',
    },
    publishedAt: '2026-07-04',
    tags: ['Contracts', 'Commercial Law', 'ICC Arbitration', 'Bilateral NDAs'],
    featured: false,
  },
];

export default function BlogPage() {
  const { lang, isRTL } = useLanguage();
  const [posts, setPosts] = useState<BlogPost[]>(fallbackPosts);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    fetch('/api/blog')
      .then((res) => {
        if (!res.ok) throw new Error('Network error');
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setPosts(data);
        }
      })
      .catch(() => {
        // Fallback already assigned
      });
  }, []);

  const categories = [
    { id: 'all', label: lang === 'fa' ? 'تمامی مقالات' : 'All Topics' },
    { id: 'Financial Translation', label: lang === 'fa' ? 'ترجمه مالی' : 'Financial' },
    { id: 'Software Localization', label: lang === 'fa' ? 'بومی‌سازی نرم‌افزار' : 'Software RTL' },
    { id: 'Commercial Translation', label: lang === 'fa' ? 'قراردادهای تجاری' : 'Commercial & Legal' },
  ];

  const filteredPosts = posts.filter((post) => {
    const matchesCat = selectedCategory === 'all' || post.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = 
      !q ||
      post.title.toLowerCase().includes(q) ||
      post.title_fa.includes(q) ||
      post.excerpt.toLowerCase().includes(q) ||
      post.excerpt_fa.includes(q) ||
      post.tags.some(t => t.toLowerCase().includes(q));

    return matchesCat && matchesSearch;
  });

  return (
    <div className="space-y-16 py-8 md:py-12">
      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B79656]">
            <span className="w-8 h-[1px] bg-[#B79656]"></span>
            <span>{lang === 'fa' ? 'یادداشت‌های تخصصی و مقالات' : 'Atelier Journal & Insights'}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-serif text-[#22272B] leading-tight">
            {lang === 'fa' ? (
              <>
                جستارهای پژوهشی در زبان‌شناسی، <br />
                <span className="italic text-[#B79656]">ترجمه مالی و بومی‌سازی راست‌به‌چپ.</span>
              </>
            ) : (
              <>
                Scholarship in Applied Translation, <br />
                <span className="italic text-[#B79656]">Financial Concordance & Bidirectional UI.</span>
              </>
            )}
          </h1>

          <p className="text-base sm:text-lg text-[#22272B]/80 font-sans leading-relaxed">
            {lang === 'fa' ? (
              'نگاهی موشکافانه به استانداردهای گزارشگری بین‌المللی، معادل‌گزینی حقوقی و مهندسی زبان فارسی در سیستم‌های مدرن دیجیتال.'
            ) : (
              'Explorations into contrastive terminology, financial reporting nuances, and Persian software localization authored by Asma Parnianfard, M.A.'
            )}
          </p>
        </div>
      </section>

      {/* FILTER & SEARCH */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#22272B]/10 p-4 sm:p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`px-3.5 py-1.5 text-xs font-medium transition-colors ${
                  selectedCategory === c.id
                    ? 'bg-[#22272B] text-white'
                    : 'bg-[#F8F6F1] text-[#22272B]/80 hover:bg-[#B79656]/20'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#22272B]/40 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder={lang === 'fa' ? 'جستجو در مقالات...' : 'Search articles & tags...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-[#F8F6F1] border border-[#22272B]/15 text-xs focus:outline-none focus:border-[#B79656]"
            />
          </div>
        </div>
      </section>

      {/* ARTICLES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white border border-[#22272B]/10 p-7 flex flex-col justify-between shadow-sm hover:border-[#B79656] transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#22272B]/60">
                  <span className="text-[#B79656] font-semibold uppercase">{post.category}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {post.readTime}
                  </span>
                </div>

                <h2 className="text-xl font-serif font-bold text-[#22272B] group-hover:text-[#B79656] transition-colors leading-snug">
                  <Link to={`/blog/${post.slug}`}>
                    {lang === 'fa' ? post.title_fa : post.title}
                  </Link>
                </h2>

                <p className="text-xs sm:text-sm text-[#22272B]/75 leading-relaxed font-sans line-clamp-3">
                  {lang === 'fa' ? post.excerpt_fa : post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {post.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 bg-[#F8F6F1] text-[#22272B]/60 text-[10px] font-mono border border-[#22272B]/5"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#22272B]/10 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <img
                    src={post.author.avatar || '/assets/asma-parnianfard-portrait.png'}
                    alt={post.author.name}
                    className="w-6 h-6 rounded-full object-cover border border-[#22272B]/10"
                  />
                  <span className="text-[#22272B]/80 font-medium">{post.author.name}</span>
                </div>

                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 font-semibold text-[#B79656] group-hover:underline"
                >
                  <span>{lang === 'fa' ? 'مطالعه مقاله' : 'Read'}</span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
