import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { Shield, CheckCircle, Award, MapPin, School, ExternalLink, Send } from 'lucide-react';
import BrandIdentity from './BrandIdentity';

export const Footer: React.FC = () => {
  const { language, t } = useLanguage();
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquirySent, setInquirySent] = useState(false);

  const handleQuickInquiry = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryEmail) return;
    try {
      await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: 'Prospective Client',
          email: inquiryEmail,
          subject: 'Confidential Inquiry via Footer',
          message: 'Client requested direct callback or consultation prospectus.',
          consent: true,
        }),
      });
      setInquirySent(true);
      setInquiryEmail('');
    } catch {
      setInquirySent(true);
    }
  };

  return (
    <footer className="w-full bg-[#22272B] text-[#F8F6F1] border-t border-[#343B41]">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-[#3A4248]">
          {/* Column 1: Brand & Credential Overview */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <BrandIdentity
              variant="footer"
              theme="dark"
              size="lg"
              linkTo="/"
            />

            <p className="font-editorial text-lg text-[#E6C27D] italic">
              {t('tagline')}
            </p>

            <p className="text-xs text-[#D1C5B4] leading-relaxed max-w-sm">
              {language === 'fa'
                ? 'ارائه خدمات ممتاز ترجمه متون مالی، قراردادهای تجاری و بومی‌سازی وب‌سایت با رویکردی کاملاً انسانی، دقت واژگانی آکادمیک و تعهد به عدم افشای اطلاعات.'
                : 'Prestigious English-to-Persian literary localization and high-stakes commercial translation consultancy. Operating with academic rigor and cultural mastery.'}
            </p>

            <div className="flex flex-col gap-2 text-xs text-[#D1C5B4] pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#B79656] shrink-0" />
                <span>Mashhad, Razavi Khorasan, Iran</span>
              </div>
              <div className="flex items-center gap-2">
                <School className="w-4 h-4 text-[#B79656] shrink-0" />
                <span>M.A. in Translation Studies (Islamic Azad University)</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://www.linkedin.com/in/asma-parnianfard-a11b69433"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2C3238] hover:bg-[#B79656] text-[#F8F6F1] hover:text-white text-xs font-medium transition-colors"
              >
                <span>LinkedIn Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="text-xs uppercase tracking-widest text-[#E6C27D] font-bold">
              {language === 'fa' ? 'ناوبری سایت' : 'Navigation'}
            </h4>
            <ul className="flex flex-col gap-2 text-xs text-[#D1C5B4]">
              <li>
                <Link to="/" className="hover:text-white transition-colors">{t('navHome')}</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">{t('navAbout')}</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">{t('navServices')}</Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-white transition-colors">{t('navPortfolio')}</Link>
              </li>
              <li>
                <Link to="/process" className="hover:text-white transition-colors">{t('navProcess')}</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors">{t('navBlog')}</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition-colors">{t('navFaq')}</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">{t('navContact')}</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Practice Areas */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="text-xs uppercase tracking-widest text-[#E6C27D] font-bold">
              {language === 'fa' ? 'حوزه‌های تخصصی' : 'Practice Disciplines'}
            </h4>
            <ul className="flex flex-col gap-2 text-xs text-[#D1C5B4]">
              <li>
                <Link to="/services/financial" className="hover:text-white transition-colors">
                  {t('serviceFinancial')}
                </Link>
              </li>
              <li>
                <Link to="/services/accounting" className="hover:text-white transition-colors">
                  {t('serviceAccounting')}
                </Link>
              </li>
              <li>
                <Link to="/services/business" className="hover:text-white transition-colors">
                  {t('serviceBusiness')}
                </Link>
              </li>
              <li>
                <Link to="/services/proofreading" className="hover:text-white transition-colors">
                  {t('serviceProofreading')}
                </Link>
              </li>
              <li>
                <Link to="/services/localization" className="hover:text-white transition-colors">
                  {t('serviceLocalization')}
                </Link>
              </li>
              <li>
                <Link to="/quote" className="text-[#E6C27D] hover:underline font-medium">
                  {language === 'fa' ? 'درخواست استعلام قیمت فوری ←' : 'Expedited Quotation Request →'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Practice Standards & Quick Inquiry */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="text-xs uppercase tracking-widest text-[#E6C27D] font-bold">
              {language === 'fa' ? 'استانداردهای حرفه‌ای' : 'Practice Standards'}
            </h4>
            <div className="flex flex-col gap-2 text-xs text-[#D1C5B4]">
              <div className="flex items-start gap-2">
                <Shield className="w-4 h-4 text-[#B79656] shrink-0 mt-0.5" />
                <span>Strict Non-Disclosure & Corporate Privacy Guarantee</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#B79656] shrink-0 mt-0.5" />
                <span>100% Certified Human-Only Translation Process</span>
              </div>
              <div className="flex items-start gap-2">
                <Award className="w-4 h-4 text-[#B79656] shrink-0 mt-0.5" />
                <span>Precision Corpus & Terminological Consistency</span>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-[11px] uppercase tracking-wider text-[#A69E90] block mb-1.5 font-medium">
                {t('confidentialInquiry')}
              </span>
              {inquirySent ? (
                <div className="p-2.5 rounded-lg bg-[#2C3238] text-[#E6C27D] text-xs">
                  {language === 'fa' ? 'پیام شما دریافت گردید. سپاسگزاریم.' : 'Inquiry received. We will respond promptly.'}
                </div>
              ) : (
                <form onSubmit={handleQuickInquiry} className="flex items-center gap-1.5">
                  <input
                    type="email"
                    required
                    value={inquiryEmail}
                    onChange={(e) => setInquiryEmail(e.target.value)}
                    placeholder="name@organization.com"
                    className="w-full px-3 py-2 rounded-full bg-[#2C3238] border border-[#3A4248] text-xs text-white placeholder-[#78828A] focus:outline-none focus:border-[#B79656]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-full bg-[#B79656] hover:bg-[#C4A466] text-white text-xs font-semibold shrink-0 transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Bilateral Certification */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#A69E90]">
          <div className="flex flex-wrap items-center gap-4 text-center md:text-left">
            <span>© 2026 ASMA PARNIANFARD. All Rights Reserved.</span>
            <span>Academic Translation & Cross-Cultural Consulting</span>
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-[#2C3238] text-[10px] uppercase tracking-widest text-[#E6C27D] font-bold border border-[#3A4248]">
              EN / FA Bilateral Certified
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
