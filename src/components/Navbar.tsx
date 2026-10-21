import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { Menu, X, ChevronDown, Globe, ArrowRight, ChevronRight } from 'lucide-react';
import BrandIdentity from './BrandIdentity';

export const Navbar: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);

  const isRTL = language === 'fa';

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  // Lock background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        closeMenu();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Close mobile drawer on route changes
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#22272B]/95 backdrop-blur-md border-b border-[#343B41] text-[#F8F6F1] h-20">
        <div className="w-full max-w-[1320px] mx-auto px-3 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-2 sm:gap-4 lg:gap-6">
          
          {/* Zone 1: Brand Wordmark (Responsive and fluid) */}
          <div className="min-w-0 flex-1 sm:flex-initial flex items-center">
            <BrandIdentity
              variant="header"
              theme="dark"
              size="md"
              linkTo="/"
              onClick={closeMenu}
            />
          </div>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-medium text-[#D1C5B4]">
            <Link
              to="/"
              className={`transition-colors py-1 hover:text-white ${
                isActive('/') ? 'text-[#E6C27D] font-semibold' : ''
              }`}
            >
              {t('navHome')}
            </Link>

            <Link
              to="/about"
              className={`transition-colors py-1 hover:text-white ${
                isActive('/about') ? 'text-[#E6C27D] font-semibold' : ''
              }`}
            >
              {t('navAbout')}
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <Link
                to="/services"
                className={`inline-flex items-center gap-1 transition-colors py-1 hover:text-white ${
                  isActive('/services') ? 'text-[#E6C27D] font-semibold' : ''
                }`}
              >
                <span>{t('navServices')}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-[#E6C27D]' : ''}`} />
              </Link>

              {servicesDropdownOpen && (
                <div className={`absolute top-full ${isRTL ? 'right-0' : 'left-0'} w-72 pt-2 z-50`}>
                  <div className="bg-[#22272B] border border-[#3A4248] rounded-xl p-2 shadow-2xl space-y-1">
                    <Link
                      to="/services/translation"
                      onClick={() => setServicesDropdownOpen(false)}
                      className="block px-3 py-2 rounded-lg text-xs hover:bg-[#2C3238] text-[#E0D8CB] hover:text-white transition-colors"
                    >
                      <p className="font-semibold text-white">
                        {language === 'fa' ? 'ترجمه انگلیسی به فارسی' : 'English-to-Persian Translation'}
                      </p>
                      <span className="text-[11px] text-[#A69E90]">
                        {language === 'fa' ? 'متون دانشگاهی، سازمانی و مقالات پژوهشی' : 'Scholarly, corporate & publication texts'}
                      </span>
                    </Link>

                    <Link
                      to="/services/financial"
                      onClick={() => setServicesDropdownOpen(false)}
                      className="block px-3 py-2 rounded-lg text-xs hover:bg-[#2C3238] text-[#E0D8CB] hover:text-white transition-colors"
                    >
                      <p className="font-semibold text-white">{t('serviceFinancial')}</p>
                      <span className="text-[11px] text-[#A69E90]">IFRS, balance sheets & audit notes</span>
                    </Link>

                    <Link
                      to="/services/accounting"
                      onClick={() => setServicesDropdownOpen(false)}
                      className="block px-3 py-2 rounded-lg text-xs hover:bg-[#2C3238] text-[#E0D8CB] hover:text-white transition-colors"
                    >
                      <p className="font-semibold text-white">{t('serviceAccounting')}</p>
                      <span className="text-[11px] text-[#A69E90]">Auditor opinions, general ledgers & tax</span>
                    </Link>

                    <Link
                      to="/services/business"
                      onClick={() => setServicesDropdownOpen(false)}
                      className="block px-3 py-2 rounded-lg text-xs hover:bg-[#2C3238] text-[#E0D8CB] hover:text-white transition-colors"
                    >
                      <p className="font-semibold text-white">{t('serviceBusiness')}</p>
                      <span className="text-[11px] text-[#A69E90]">Commercial agreements, charters & bylaws</span>
                    </Link>

                    <Link
                      to="/services/proofreading"
                      onClick={() => setServicesDropdownOpen(false)}
                      className="block px-3 py-2 rounded-lg text-xs hover:bg-[#2C3238] text-[#E0D8CB] hover:text-white transition-colors"
                    >
                      <p className="font-semibold text-white">{t('serviceProofreading')}</p>
                      <span className="text-[11px] text-[#A69E90]">Substantive editing & concordance audit</span>
                    </Link>

                    <Link
                      to="/services/localization"
                      onClick={() => setServicesDropdownOpen(false)}
                      className="block px-3 py-2 rounded-lg text-xs hover:bg-[#2C3238] text-[#E0D8CB] hover:text-white transition-colors"
                    >
                      <p className="font-semibold text-white">{t('serviceLocalization')}</p>
                      <span className="text-[11px] text-[#A69E90]">Software, web & RTL UI adaptation</span>
                    </Link>

                    <div className="border-t border-[#3A4248] pt-1">
                      <Link
                        to="/services"
                        onClick={() => setServicesDropdownOpen(false)}
                        className="block px-3 py-1.5 text-[11px] text-[#E6C27D] hover:underline"
                      >
                        {language === 'fa' ? 'مشاهده تمامی ۶ حوزه خدمات →' : 'View all 6 practice disciplines →'}
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/portfolio"
              className={`transition-colors py-1 hover:text-white ${
                isActive('/portfolio') ? 'text-[#E6C27D] font-semibold' : ''
              }`}
            >
              {t('navPortfolio')}
            </Link>

            <Link
              to="/process"
              className={`transition-colors py-1 hover:text-white ${
                isActive('/process') ? 'text-[#E6C27D] font-semibold' : ''
              }`}
            >
              {t('navProcess')}
            </Link>

            <Link
              to="/blog"
              className={`transition-colors py-1 hover:text-white ${
                isActive('/blog') ? 'text-[#E6C27D] font-semibold' : ''
              }`}
            >
              {t('navBlog')}
            </Link>

            <Link
              to="/faq"
              className={`transition-colors py-1 hover:text-white ${
                isActive('/faq') ? 'text-[#E6C27D] font-semibold' : ''
              }`}
            >
              {t('navFaq')}
            </Link>

            <Link
              to="/contact"
              className={`transition-colors py-1 hover:text-white ${
                isActive('/contact') ? 'text-[#E6C27D] font-semibold' : ''
              }`}
            >
              {t('navContact')}
            </Link>
          </nav>

          {/* Zone 3: Actions (Always visible, never squeezed or clipped) */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Language Toggle Button */}
            <button
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full text-xs font-semibold bg-[#2C3238] hover:bg-[#384047] text-[#E6C27D] border border-[#3E474F] transition-all min-h-[38px]"
              title={language === 'en' ? 'Switch to Persian (RTL)' : 'Switch to English'}
              aria-label={language === 'en' ? 'Switch to Persian' : 'Switch to English'}
            >
              <Globe className="w-3.5 h-3.5 text-[#B79656] shrink-0" />
              <span className="font-medium">{language === 'en' ? 'فارسی' : 'English'}</span>
            </button>

            {/* Desktop Request Quote Button (hidden on mobile to prevent crowding) */}
            <Link
              to="/quote"
              className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#B79656] hover:bg-[#C4A466] text-white text-xs font-medium tracking-wide shadow-[0_0_20px_rgba(183,150,86,0.25)] transition-all duration-300 transform hover:scale-[1.02]"
            >
              <span>{t('requestQuote')}</span>
              <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'mr-1.5 rotate-180' : 'ml-1.5'}`} />
            </Link>

            {/* Mobile Hamburger Menu Button (High contrast, clearly visible on all mobile devices) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 p-2.5 rounded-lg bg-[#2C3238] hover:bg-[#384047] text-[#F8F6F1] border border-[#48525A] focus:outline-none focus:ring-2 focus:ring-[#B79656] shadow-sm transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#E6C27D]" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE NAVIGATION DRAWER & BACKDROP */}
      {mobileMenuOpen && (
        <div id="mobile-navigation-drawer" className="lg:hidden fixed inset-0 z-[100]">
          {/* Backdrop (tap outside to close) */}
          <div
            className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
            onClick={closeMenu}
            aria-hidden="true"
          />

          {/* Slide-in Drawer Container */}
          <div
            className={`fixed top-0 bottom-0 ${isRTL ? 'left-0' : 'right-0'} w-[88vw] max-w-[360px] bg-[#22272B] border-l border-r border-[#3A4248] shadow-2xl flex flex-col z-[101] overflow-hidden`}
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            {/* Drawer Top Bar */}
            <div className="p-4 border-b border-[#3A4248] flex items-center justify-between gap-3 bg-[#1B1E22]">
              <BrandIdentity
                variant="mobile"
                theme="dark"
                size="sm"
                linkTo="/"
                onClick={closeMenu}
              />
              <button
                type="button"
                onClick={closeMenu}
                className="w-10 h-10 p-2 rounded-lg bg-[#2C3238] hover:bg-[#384047] text-[#D1C5B4] hover:text-white border border-[#48525A] flex items-center justify-center shrink-0 transition-colors"
                aria-label="Close navigation menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Nav Links (scrollable) */}
            <div className="flex-1 overflow-y-auto px-5 py-6 space-y-4">
              <Link
                to="/"
                onClick={closeMenu}
                className={`flex items-center justify-between py-2 text-base font-medium border-b border-[#343B41]/50 ${
                  isActive('/') ? 'text-[#E6C27D] font-bold' : 'text-slate-200 hover:text-white'
                }`}
              >
                <span>{t('navHome')}</span>
                <ChevronRight className={`w-4 h-4 text-[#8C98A4] ${isRTL ? 'rotate-180' : ''}`} />
              </Link>

              <Link
                to="/about"
                onClick={closeMenu}
                className={`flex items-center justify-between py-2 text-base font-medium border-b border-[#343B41]/50 ${
                  isActive('/about') ? 'text-[#E6C27D] font-bold' : 'text-slate-200 hover:text-white'
                }`}
              >
                <span>{t('navAbout')}</span>
                <ChevronRight className={`w-4 h-4 text-[#8C98A4] ${isRTL ? 'rotate-180' : ''}`} />
              </Link>

              {/* Services Submenu Section */}
              <div className="border-b border-[#343B41]/50 pb-2">
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between py-2 text-base font-semibold text-[#E6C27D]"
                >
                  <span>{t('navServices')}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>

                {mobileServicesOpen && (
                  <div className={`space-y-1.5 pt-1 pb-2 ${isRTL ? 'pr-3 border-r-2 border-[#B79656]/40' : 'pl-3 border-l-2 border-[#B79656]/40'}`}>
                    <Link
                      to="/services/translation"
                      onClick={closeMenu}
                      className="block py-1.5 text-xs text-slate-300 hover:text-white"
                    >
                      • {language === 'fa' ? 'ترجمه عمومی و تخصصی' : 'English-to-Persian Translation'}
                    </Link>
                    <Link
                      to="/services/financial"
                      onClick={closeMenu}
                      className="block py-1.5 text-xs text-slate-300 hover:text-white"
                    >
                      • {t('serviceFinancial')}
                    </Link>
                    <Link
                      to="/services/accounting"
                      onClick={closeMenu}
                      className="block py-1.5 text-xs text-slate-300 hover:text-white"
                    >
                      • {t('serviceAccounting')}
                    </Link>
                    <Link
                      to="/services/business"
                      onClick={closeMenu}
                      className="block py-1.5 text-xs text-slate-300 hover:text-white"
                    >
                      • {t('serviceBusiness')}
                    </Link>
                    <Link
                      to="/services/proofreading"
                      onClick={closeMenu}
                      className="block py-1.5 text-xs text-slate-300 hover:text-white"
                    >
                      • {t('serviceProofreading')}
                    </Link>
                    <Link
                      to="/services/localization"
                      onClick={closeMenu}
                      className="block py-1.5 text-xs text-slate-300 hover:text-white"
                    >
                      • {t('serviceLocalization')}
                    </Link>
                    <Link
                      to="/services"
                      onClick={closeMenu}
                      className="block pt-2 text-xs text-[#E6C27D] font-semibold underline"
                    >
                      {language === 'fa' ? 'نمای کلی همه خدمات ←' : 'View Services Overview →'}
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/portfolio"
                onClick={closeMenu}
                className={`flex items-center justify-between py-2 text-base font-medium border-b border-[#343B41]/50 ${
                  isActive('/portfolio') ? 'text-[#E6C27D] font-bold' : 'text-slate-200 hover:text-white'
                }`}
              >
                <span>{t('navPortfolio')}</span>
                <ChevronRight className={`w-4 h-4 text-[#8C98A4] ${isRTL ? 'rotate-180' : ''}`} />
              </Link>

              <Link
                to="/process"
                onClick={closeMenu}
                className={`flex items-center justify-between py-2 text-base font-medium border-b border-[#343B41]/50 ${
                  isActive('/process') ? 'text-[#E6C27D] font-bold' : 'text-slate-200 hover:text-white'
                }`}
              >
                <span>{t('navProcess')}</span>
                <ChevronRight className={`w-4 h-4 text-[#8C98A4] ${isRTL ? 'rotate-180' : ''}`} />
              </Link>

              <Link
                to="/blog"
                onClick={closeMenu}
                className={`flex items-center justify-between py-2 text-base font-medium border-b border-[#343B41]/50 ${
                  isActive('/blog') ? 'text-[#E6C27D] font-bold' : 'text-slate-200 hover:text-white'
                }`}
              >
                <span>{t('navBlog')}</span>
                <ChevronRight className={`w-4 h-4 text-[#8C98A4] ${isRTL ? 'rotate-180' : ''}`} />
              </Link>

              <Link
                to="/faq"
                onClick={closeMenu}
                className={`flex items-center justify-between py-2 text-base font-medium border-b border-[#343B41]/50 ${
                  isActive('/faq') ? 'text-[#E6C27D] font-bold' : 'text-slate-200 hover:text-white'
                }`}
              >
                <span>{t('navFaq')}</span>
                <ChevronRight className={`w-4 h-4 text-[#8C98A4] ${isRTL ? 'rotate-180' : ''}`} />
              </Link>

              <Link
                to="/contact"
                onClick={closeMenu}
                className={`flex items-center justify-between py-2 text-base font-medium border-b border-[#343B41]/50 ${
                  isActive('/contact') ? 'text-[#E6C27D] font-bold' : 'text-slate-200 hover:text-white'
                }`}
              >
                <span>{t('navContact')}</span>
                <ChevronRight className={`w-4 h-4 text-[#8C98A4] ${isRTL ? 'rotate-180' : ''}`} />
              </Link>
            </div>

            {/* Drawer Bottom Action (Prominent Request a Quote Button) */}
            <div className="p-5 border-t border-[#3A4248] bg-[#1B1E22] space-y-3">
              <Link
                to="/quote"
                onClick={closeMenu}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#B79656] hover:bg-[#C4A466] text-white text-sm font-semibold tracking-wide shadow-lg transition-colors"
              >
                <span>{t('requestQuote')}</span>
                <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
              </Link>

              <button
                type="button"
                onClick={() => {
                  toggleLanguage();
                  closeMenu();
                }}
                className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 rounded-full bg-[#2C3238] hover:bg-[#384047] text-[#E6C27D] border border-[#3E474F] text-xs font-medium transition-colors"
              >
                <Globe className="w-3.5 h-3.5 text-[#B79656]" />
                <span>{language === 'en' ? 'تغییر زبان به فارسی' : 'Switch Language to English'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
