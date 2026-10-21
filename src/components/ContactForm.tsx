import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Send, CheckCircle2, AlertCircle, ShieldCheck } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const { language, t } = useLanguage();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(true);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !message) {
      setErrorMessage(language === 'fa' ? 'لطفاً نام، ایمیل و پیام خود را تکمیل نمایید.' : 'Please provide your name, email, and message.');
      return;
    }
    if (!consent) {
      setErrorMessage(language === 'fa' ? 'لطفاً موافقت با حفظ محرمانگی را علامت بزنید.' : 'Please agree to confidentiality terms.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          email,
          organization,
          subject: subject || 'General Advisory & Collaboration',
          message,
          consent,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to submit inquiry');

      setIsSuccess(true);
      setFullName('');
      setEmail('');
      setOrganization('');
      setSubject('');
      setMessage('');
    } catch (err: any) {
      setErrorMessage(err.message || 'Submission error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-white border border-[#E8E2D5] rounded-2xl p-6 sm:p-8 shadow-sm">
      <div className="mb-6">
        <span className="text-xs uppercase tracking-wider font-bold text-[#B79656] block mb-1">
          {language === 'fa' ? 'مکاتبه و مشاوره مستقیم' : 'Direct Inquiry & Advisory'}
        </span>
        <h3 className="font-editorial text-2xl font-bold text-[#22272B]">
          {language === 'fa' ? 'ارسال پیام یا طرح پرسش' : 'Send an Inquiry to Asma Parnianfard'}
        </h3>
      </div>

      {isSuccess ? (
        <div className="p-6 rounded-xl bg-green-50 border border-green-200 text-green-900 text-sm space-y-2">
          <div className="flex items-center gap-2 font-bold text-base">
            <CheckCircle2 className="w-5 h-5 text-green-700" />
            <span>{language === 'fa' ? 'پیام شما با موفقیت دریافت گردید.' : 'Inquiry Submitted Successfully'}</span>
          </div>
          <p className="text-xs text-green-800 leading-relaxed">
            {language === 'fa'
              ? 'سپاسگزاریم. اسماء پرنیان‌فرد درخواست شما را بررسی نموده و ظرف ۴ ساعت کاری با شما تماس خواهد گرفت.'
              : 'Thank you for reaching out. Asma Parnianfard will personally review your inquiry and respond within 4 business hours.'}
          </p>
          <button
            onClick={() => setIsSuccess(false)}
            className="mt-3 text-xs font-semibold text-green-800 underline hover:text-green-950"
          >
            {language === 'fa' ? 'ارسال پیام دیگر' : 'Send another inquiry'}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {errorMessage && (
            <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-[#22272B] mb-1">
                {t('fullName')} *
              </label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Dr. / Mr. / Ms. Full Name"
                className="w-full px-3.5 py-2 rounded-xl border border-[#D8CEBE] bg-[#FDFCF9] text-xs text-[#22272B] focus:outline-none focus:border-[#B79656]"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-[#22272B] mb-1">
                {t('emailAddress')} *
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="client@organization.com"
                className="w-full px-3.5 py-2 rounded-xl border border-[#D8CEBE] bg-[#FDFCF9] text-xs text-[#22272B] focus:outline-none focus:border-[#B79656]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-[#22272B] mb-1">
                {t('organization')}
              </label>
              <input
                type="text"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                placeholder="Law Firm / Translation Agency / Enterprise"
                className="w-full px-3.5 py-2 rounded-xl border border-[#D8CEBE] bg-[#FDFCF9] text-xs text-[#22272B] focus:outline-none focus:border-[#B79656]"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-[#22272B] mb-1">
                Subject
              </label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="e.g. Agency Retainer / IFRS Project"
                className="w-full px-3.5 py-2 rounded-xl border border-[#D8CEBE] bg-[#FDFCF9] text-xs text-[#22272B] focus:outline-none focus:border-[#B79656]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#22272B] mb-1">
              Message *
            </label>
            <textarea
              rows={4}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={
                language === 'fa'
                  ? 'شرح مختصری از پروژه، زمان‌بندی مد نظر و پرسش‌های خود را بنویسید...'
                  : 'Describe your inquiry, translation volume, or partnership proposal...'
              }
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8CEBE] bg-[#FDFCF9] text-xs text-[#22272B] focus:outline-none focus:border-[#B79656]"
            />
          </div>

          <div className="flex items-start gap-2.5 pt-1">
            <input
              type="checkbox"
              id="contact-consent"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-0.5 w-4 h-4 text-[#B79656] rounded border-[#D8CEBE] accent-[#B79656]"
            />
            <label htmlFor="contact-consent" className="text-[11px] text-[#5A6268] cursor-pointer">
              {t('privacyConsent')}
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 rounded-full bg-[#22272B] hover:bg-[#B79656] text-white text-xs font-semibold tracking-wide shadow-sm transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isSubmitting ? (
              <span>{t('submitting')}</span>
            ) : (
              <>
                <Send className="w-3.5 h-3.5" />
                <span>{language === 'fa' ? 'ارسال پیام' : 'Send Message'}</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
