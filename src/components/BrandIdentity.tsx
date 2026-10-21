import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

export interface BrandIdentityProps {
  /**
   * Layout presentation:
   * - 'header': Horizontal layout optimized for top navigation bar
   * - 'footer': Horizontal layout with richer styling for footer
   * - 'mobile': Compact horizontal layout for mobile drawer
   * - 'admin': Horizontal atelier branding for admin header
   * - 'stacked': Centered vertical layout (monogram on top, name and subtitle centered)
   * - 'inline': Compact horizontal inline layout
   * - 'badge': Icon-centric pill badge
   */
  variant?: 'header' | 'footer' | 'mobile' | 'admin' | 'stacked' | 'inline' | 'badge';

  /**
   * Color theme:
   * - 'dark': For dark backgrounds (charcoal #22272B) - white text, gold accents
   * - 'light': For light backgrounds (ivory #F8F6F1 / white) - charcoal text, gold accents
   * - 'auto': Inferred from variant ('header', 'footer', 'mobile' default to 'dark'; others 'light')
   */
  theme?: 'dark' | 'light' | 'auto';

  /**
   * Monogram icon sizing: 'sm' | 'md' | 'lg' | 'xl'
   */
  size?: 'sm' | 'md' | 'lg' | 'xl';

  /**
   * Whether to show the subtitle (default: true)
   */
  showSubtitle?: boolean;

  /**
   * If true, only render the monogram medallion
   */
  monogramOnly?: boolean;

  /**
   * Destination path for link. If null, renders as non-clickable container. (default: '/')
   */
  linkTo?: string | null;

  /**
   * Optional click handler (e.g. to close mobile navigation)
   */
  onClick?: () => void;

  /**
   * Custom subtitle override (e.g. "ATELIER MANAGEMENT PORTAL")
   */
  customSubtitle?: string;

  /**
   * Force English text even when language is 'fa'
   */
  forceEnglish?: boolean;

  /**
   * Additional custom class names
   */
  className?: string;
}

export const BrandIdentity: React.FC<BrandIdentityProps> = ({
  variant = 'header',
  theme = 'auto',
  size = 'md',
  showSubtitle = true,
  monogramOnly = false,
  linkTo = '/',
  onClick,
  customSubtitle,
  forceEnglish = false,
  className = '',
}) => {
  const { language } = useLanguage();

  // Determine effective theme
  const effectiveTheme: 'dark' | 'light' =
    theme === 'auto'
      ? variant === 'header' || variant === 'footer' || variant === 'mobile'
        ? 'dark'
        : 'light'
      : theme;

  const isFa = !forceEnglish && language === 'fa';

  // Official Brand Texts
  const brandName = isFa ? 'اسماء پرنیان‌فرد' : 'ASMA PARNIANFARD';
  const defaultSubtitle = isFa ? 'ترجمه و بومی‌سازی تخصصی' : 'TRANSLATION & LOCALIZATION';
  const subtitle = customSubtitle || defaultSubtitle;

  // Medallion Sizes
  const medallionSizeClasses = {
    sm: 'w-8 h-8 p-1',
    md: 'w-10 h-10 p-1.5',
    lg: 'w-12 h-12 sm:w-14 sm:h-14 p-2',
    xl: 'w-16 h-16 sm:w-20 sm:h-20 p-2.5',
  }[size];

  // Typography Sizes
  const nameSizeClasses = {
    sm: 'text-sm sm:text-base lg:text-lg',
    md: variant === 'header' ? 'text-base sm:text-xl lg:text-[22px]' : 'text-base sm:text-xl',
    lg: 'text-xl sm:text-2xl lg:text-3xl',
    xl: 'text-2xl sm:text-3xl lg:text-4xl',
  }[size];

  const subtitleSizeClasses = {
    sm: 'text-[8.5px] sm:text-[9.5px]',
    md: 'text-[9px] sm:text-[10px] lg:text-[11px]',
    lg: 'text-[10px] sm:text-[11px] lg:text-xs',
    xl: 'text-xs sm:text-sm',
  }[size];

  // Medallion styling (preserving ivory, charcoal, antique-gold theme)
  const medallionThemeClasses =
    effectiveTheme === 'dark'
      ? 'border border-[#B79656]/40 bg-gradient-to-br from-[#2D3339] via-[#22272B] to-[#1A1E22] shadow-[0_2px_12px_rgba(183,150,86,0.22)] group-hover:border-[#E6C27D] group-hover:shadow-[0_2px_20px_rgba(183,150,86,0.38)]'
      : 'border border-[#B79656]/35 bg-[#FFFFFF] shadow-[0_2px_10px_rgba(34,39,43,0.06)] group-hover:border-[#B79656] group-hover:shadow-[0_4px_16px_rgba(183,150,86,0.22)]';

  // Name Typography & Color
  const nameThemeClasses =
    effectiveTheme === 'dark'
      ? 'text-white group-hover:text-[#E6C27D]'
      : 'text-[#22272B] group-hover:text-[#B79656]';

  // Subtitle Typography & Color
  const subtitleThemeClasses =
    effectiveTheme === 'dark'
      ? 'text-[#D1C5B4] group-hover:text-[#F8F6F1]'
      : 'text-[#5A6268] group-hover:text-[#22272B]';

  // Layout presentation classes
  const isStacked = variant === 'stacked';
  const layoutClasses = isStacked
    ? 'flex flex-col items-center text-center gap-3'
    : 'flex items-center gap-3 sm:gap-3.5';

  const content = (
    <div className={`group inline-flex ${layoutClasses} ${className}`}>
      {/* Golden AP Monogram Medallion */}
      <div
        className={`relative rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${medallionSizeClasses} ${medallionThemeClasses}`}
      >
        <img
          src="/assets/branding/ap-monogram-cropped.png"
          alt="ASMA PARNIANFARD Golden AP Monogram"
          className="w-full h-full object-contain filter drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)] group-hover:scale-105 transition-transform duration-300"
          loading="eager"
        />
        {/* Subtle antique gold rim accent */}
        <div className="absolute inset-0 rounded-full pointer-events-none ring-1 ring-inset ring-[#B79656]/20 group-hover:ring-[#E6C27D]/40 transition-colors" />
      </div>

      {/* Brand Typography Wordmark */}
      {!monogramOnly && (
        <div className={`flex flex-col leading-none ${isStacked ? 'items-center' : 'justify-center'}`}>
          <span
            className={`transition-colors font-bold whitespace-nowrap ${nameSizeClasses} ${nameThemeClasses} ${
              isFa
                ? 'font-persian tracking-normal'
                : 'font-serif uppercase tracking-[0.07em]'
            }`}
          >
            {brandName}
          </span>

          {showSubtitle && (
            <span
              className={`mt-1 sm:mt-1.5 transition-colors font-medium whitespace-nowrap ${subtitleSizeClasses} ${subtitleThemeClasses} ${
                isFa
                  ? 'font-persian tracking-normal'
                  : 'font-sans uppercase tracking-[0.22em]'
              }`}
            >
              {subtitle}
            </span>
          )}
        </div>
      )}
    </div>
  );

  if (linkTo) {
    return (
      <Link
        to={linkTo}
        onClick={onClick}
        className="focus:outline-none focus:ring-1 focus:ring-[#B79656] rounded-sm shrink-0"
        aria-label="ASMA PARNIANFARD — Translation & Localization"
      >
        {content}
      </Link>
    );
  }

  return <div className="shrink-0">{content}</div>;
};

export default BrandIdentity;
