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
    slug: 'translating-english-articles-into-natural-persian',
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
  },
  {
    id: 'post-2',
    slug: 'importance-of-context-in-translating-general-written-texts',
    title: 'The Importance of Context in Translating General Written Texts',
    title_fa: 'اهمیت بافتار و زمینه کاربردی در ترجمه متون عمومی',
    category: 'General Translation',
    excerpt: 'Why word-by-word equivalence fails and how understanding the intended audience shapes effective English-to-Persian translation.',
    excerpt_fa: 'چرا معادل‌یابی کلمه‌به‌کلمه نارساست و درک هدف نویسنده چگونه به ساخت متنی رسا و طبیعی در زبان فارسی کمک می‌کند.',
    content: '',
    content_fa: '',
    readTime: '5 min read',
    author: {
      name: 'Asma Parnianfard, M.A.',
      role: 'Independent English-to-Persian Translator',
      avatar: '/assets/asma-parnianfard-portrait.png',
    },
    publishedAt: '2026-08-15',
    tags: ['Contextual Translation', 'English to Persian', 'Register', 'Clarity'],
    featured: true,
  },
  {
    id: 'post-3',
    slug: 'nuances-of-written-persian-connectors-and-sentence-rhythm',
    title: 'Nuances of Written Persian: Connectors, Sentence Rhythm, and Readability',
    title_fa: 'ظرافت‌های نثر نوشتاری فارسی: پیوندهای متنی، ریتم جملات و خوانایی',
    category: 'Translation Studies',
    excerpt: 'Examining sentence boundaries and stylistic conjunctions that distinguish natural Persian prose from mechanical translations.',
    excerpt_fa: 'تحلیل مرزبندی جملات و نشانه‌گذاری که نثر روان و اصیل فارسی را از ترجمه‌های تحت‌اللفظی و ماشینی متمایز می‌سازد.',
    content: '',
    content_fa: '',
    readTime: '7 min read',
    author: {
      name: 'Asma Parnianfard, M.A.',
      role: 'Independent English-to-Persian Translator',
      avatar: '/assets/asma-parnianfard-portrait.png',
    },
    publishedAt: '2026-07-04',
    tags: ['Persian Style', 'Punctuation', 'Sentence Rhythm', 'Human Translation'],
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
    { id: 'all', label: lang === 'fa' ? 'تمامی موضوعات' : 'All Topics' },
    { id: 'Article Translation', label: lang === 'fa' ? 'ترجمه مقالات' : 'Article Translation' },
    { id: 'General Translation', label: lang === 'fa' ? 'متون عمومی' : 'General Translation' },
    { id: 'Translation Studies', label: lang === 'fa' ? 'مطالعات ترجمه' : 'Translation Studies' },
  ];

  const filteredPosts = posts.filter((post) => {
    const matchCat = selectedCategory === 'all' || post.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchQ =
      !q ||
      post.title.toLowerCase().includes(q) ||
      post.title_fa.includes(q) ||
      post.excerpt.toLowerCase().includes(q) ||
      post.excerpt_fa.includes(q);
    return matchCat && matchQ;
  });

  return (
    <div className="space-y-16 py-8 md:py-12">
      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B79656]">
            <span className="w-8 h-[1px] bg-[#B79656]"></span>
            <span>{lang === 'fa' ? 'یادداشت‌ها و دیدگاه‌ها' : 'Journal & Reflections'}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-serif text-[#22272B] leading-tight">
            {lang === 'fa' ? (
              <>
                یادداشت‌هایی درباره <br />
                <span className="italic text-[#B79656]">ترجمه، زبان و ظرافت‌های نگارش فارسی.</span>
              </>
            ) : (
              <>
                Reflections on <br />
                <span className="italic text-[#B79656]">Translation, Language, and Written Expression.</span>
              </>
            )}
          </h1>

          <p className="text-base sm:text-lg text-[#22272B]/80 font-sans leading-relaxed">
            {lang === 'fa' ? (
              'نگاهی به چالش‌های کاربردی در ترجمه مقالات، حفظ روانی کلام و انتقال وفادارانه مفاهیم از زبان انگلیسی به فارسی.'
            ) : (
              'Practical reflections on article translation, linguistic clarity, and conveying nuance from English into natural Persian.'
            )}
          </p>
        </div>
      </section>

      {/* FILTER & SEARCH */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#22272B]/10 p-6 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCategory(c.id)}
                  className={`px-3.5 py-1.5 text-xs font-medium transition-colors ${
                    selectedCategory === c.id
                      ? 'bg-[#22272B] text-white'
                      : 'bg-[#F8F6F1] text-[#22272B]/80 hover:bg-[#B79656] hover:text-white'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>

            <div className="relative max-w-xs w-full">
              <Search className="w-4 h-4 text-[#22272B]/40 absolute top-1/2 -translate-y-1/2 left-3" style={{ left: isRTL ? undefined : '0.75rem', right: isRTL ? '0.75rem' : undefined }} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={lang === 'fa' ? 'جستجو در مقالات...' : 'Search articles...'}
                className="w-full text-xs py-2 pl-9 pr-3 bg-[#F8F6F1] border border-[#22272B]/10 focus:outline-none focus:border-[#B79656]"
                style={{ paddingLeft: isRTL ? '0.75rem' : '2.25rem', paddingRight: isRTL ? '2.25rem' : '0.75rem' }}
              />
            </div>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-[#F8F6F1] border border-[#22272B]/10 p-6 space-y-4 flex flex-col justify-between hover:border-[#B79656] transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#22272B]/60">
                    <span className="text-[#B79656] font-semibold uppercase">{post.category}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-serif font-bold text-[#22272B] hover:text-[#B79656] transition-colors">
                    <Link to={`/blog/${post.slug}`}>
                      {lang === 'fa' ? post.title_fa : post.title}
                    </Link>
                  </h2>

                  <p className="text-xs text-[#22272B]/75 leading-relaxed font-sans">
                    {lang === 'fa' ? post.excerpt_fa : post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#22272B]/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#22272B]/50">
                    {post.publishedAt}
                  </span>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#B79656] hover:underline"
                  >
                    <span>{lang === 'fa' ? 'مطالعه یادداشت' : 'Read Article'}</span>
                    <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
