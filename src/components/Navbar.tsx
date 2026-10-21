import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { Menu, X, ChevronDown, Globe, Shield, ArrowRight } from 'lucide-react';
import BrandIdentity from './BrandIdentity';

export const Navbar: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#22272B]/95 backdrop-blur-md border-b border-[#343B41] text-[#F8F6F1]">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-3 sm:gap-6">
        {/* Zone 1: Brand Wordmark */}
        <BrandIdentity
          variant="header"
          theme="dark"
          size="md"
          linkTo="/"
          onClick={closeMenu}
        />

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#D1C5B4]">
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

          {/* Services Menu with clean dropdown */}
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
              <div className="absolute top-full left-0 w-72 pt-2 z-50">
                <div className="bg-[#22272B] border border-[#3A4248] rounded-xl p-2 shadow-2xl space-y-1">
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
                    <span className="text-[11px] text-[#A69E90]">Joint venture contracts & bylaws</span>
                  </Link>
                  <Link
                    to="/services/proofreading"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="block px-3 py-2 rounded-lg text-xs hover:bg-[#2C3238] text-[#E0D8CB] hover:text-white transition-colors"
                  >
                    <p className="font-semibold text-white">{t('serviceProofreading')}</p>
                    <span className="text-[11px] text-[#A69E90]">Peer-reviewed academic editing</span>
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

        {/* Zone 3: Actions (Language Switcher + Quote CTA) */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Language Toggle Button */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#2C3238] hover:bg-[#384047] text-[#E6C27D] border border-[#3E474F] transition-all"
            title={language === 'en' ? 'Switch to Persian (RTL)' : 'Switch to English'}
          >
            <Globe className="w-3.5 h-3.5 text-[#B79656]" />
            <span className="font-medium">{language === 'en' ? 'فارسی' : 'English'}</span>
          </button>

          {/* Primary CTA */}
          <Link
            to="/quote"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#B79656] hover:bg-[#C4A466] text-white text-xs font-medium tracking-wide shadow-[0_0_20px_rgba(183,150,86,0.25)] transition-all duration-300 transform hover:scale-[1.02]"
          >
            <span>{t('requestQuote')}</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#D1C5B4] hover:text-white hover:bg-[#2C3238] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#22272B] border-b border-[#3A4248] px-4 pt-3 pb-6 space-y-3">
          <div className="pb-3 border-b border-[#3A4248]/70">
            <BrandIdentity
              variant="mobile"
              theme="dark"
              size="sm"
              linkTo="/"
              onClick={closeMenu}
            />
          </div>
          <Link
            to="/"
            onClick={closeMenu}
            className={`block py-2 text-sm font-medium ${isActive('/') ? 'text-[#E6C27D]' : 'text-slate-200'}`}
          >
            {t('navHome')}
          </Link>
          <Link
            to="/about"
            onClick={closeMenu}
            className={`block py-2 text-sm font-medium ${isActive('/about') ? 'text-[#E6C27D]' : 'text-slate-200'}`}
          >
            {t('navAbout')}
          </Link>
          <div className="space-y-1 pl-3 border-l border-[#3A4248]">
            <Link to="/services" onClick={closeMenu} className="block py-1 text-sm text-[#E6C27D] font-semibold">
              {t('navServices')}
            </Link>
            <Link to="/services/financial" onClick={closeMenu} className="block py-1 text-xs text-slate-300">
              • {t('serviceFinancial')}
            </Link>
            <Link to="/services/accounting" onClick={closeMenu} className="block py-1 text-xs text-slate-300">
              • {t('serviceAccounting')}
            </Link>
            <Link to="/services/business" onClick={closeMenu} className="block py-1 text-xs text-slate-300">
              • {t('serviceBusiness')}
            </Link>
            <Link to="/services/proofreading" onClick={closeMenu} className="block py-1 text-xs text-slate-300">
              • {t('serviceProofreading')}
            </Link>
            <Link to="/services/localization" onClick={closeMenu} className="block py-1 text-xs text-slate-300">
              • {t('serviceLocalization')}
            </Link>
          </div>
          <Link
            to="/portfolio"
            onClick={closeMenu}
            className={`block py-2 text-sm font-medium ${isActive('/portfolio') ? 'text-[#E6C27D]' : 'text-slate-200'}`}
          >
            {t('navPortfolio')}
          </Link>
          <Link
            to="/process"
            onClick={closeMenu}
            className={`block py-2 text-sm font-medium ${isActive('/process') ? 'text-[#E6C27D]' : 'text-slate-200'}`}
          >
            {t('navProcess')}
          </Link>
          <Link
            to="/blog"
            onClick={closeMenu}
            className={`block py-2 text-sm font-medium ${isActive('/blog') ? 'text-[#E6C27D]' : 'text-slate-200'}`}
          >
            {t('navBlog')}
          </Link>
          <Link
            to="/faq"
            onClick={closeMenu}
            className={`block py-2 text-sm font-medium ${isActive('/faq') ? 'text-[#E6C27D]' : 'text-slate-200'}`}
          >
            {t('navFaq')}
          </Link>
          <Link
            to="/contact"
            onClick={closeMenu}
            className={`block py-2 text-sm font-medium ${isActive('/contact') ? 'text-[#E6C27D]' : 'text-slate-200'}`}
          >
            {t('navContact')}
          </Link>
          <div className="pt-2">
            <Link
              to="/quote"
              onClick={closeMenu}
              className="w-full inline-flex items-center justify-center py-3 rounded-full bg-[#B79656] text-white text-sm font-semibold shadow-md"
            >
              {t('requestQuote')}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
