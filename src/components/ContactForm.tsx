import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Send, CheckCircle2, AlertCircle, ExternalLink } from 'lucide-react';

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
  const [submissionFailed, setSubmissionFailed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !message) {
      setErrorMessage(
        language === 'fa'
          ? 'لطفاً نام، ایمیل و پیام خود را تکمیل نمایید.'
          : 'Please provide your name, email, and message.'
      );
      setSubmissionFailed(false);
      return;
    }
    if (!consent) {
      setErrorMessage(
        language === 'fa'
          ? 'لطفاً موافقت با حفظ محرمانگی را علامت بزنید.'
          : 'Please agree to confidentiality terms.'
      );
      setSubmissionFailed(false);
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);
    setSubmissionFailed(false);

    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          email,
          organization,
          subject: subject || 'General Inquiry & Collaboration',
          message,
          consent,
        }),
      });

      const data = await res.json().catch(() => null);
      if (!res.ok || !data?.success) {
        throw new Error(data?.error || 'Inquiry submission rejected by server.');
      }

      // Verified backend success only
      setIsSuccess(true);
      setFullName('');
      setEmail('');
      setOrganization('');
      setSubject('');
      setMessage('');
    } catch (err: any) {
      console.warn('Inquiry submission rejected or offline server:', err);
      // Strictly avoid simulating success if server has not accepted the message
      setIsSuccess(false);
      setSubmissionFailed(true);
      setErrorMessage(
        language === 'fa'
          ? 'سامانه ارسال آنلاین فرم در حال حاضر به سرور فعال متصل نیست و پیام شما ثبت نگردید. لطفاً برای ارتباط مستقیم و بررسی درخواست خود، از طریق صفحه رسمی لینکدین با اسماء پرنیان‌فرد در تماس باشید.'
          : 'Unable to deliver message: the online submission backend is currently unreachable. Your inquiry has not been recorded. Please reach out directly to Asma Parnianfard via LinkedIn.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-white border border-[#E8E2D5] rounded-2xl p-6 sm:p-8 shadow-sm">
      <div className="mb-6">
        <span className="text-xs uppercase tracking-wider font-bold text-[#B79656] block mb-1">
          {language === 'fa' ? 'مکاتبه و ارسال پیام' : 'Direct Inquiry'}
        </span>
        <h3 className="font-editorial text-2xl font-bold text-[#22272B]">
          {language === 'fa' ? 'ارسال پیام به اسماء پرنیان‌فرد' : 'Send a Message to Asma Parnianfard'}
        </h3>
      </div>

      {isSuccess ? (
        <div className="p-6 rounded-xl bg-green-50 border border-green-200 text-green-900 text-sm space-y-2">
          <div className="flex items-center gap-2 font-bold text-base">
            <CheckCircle2 className="w-5 h-5 text-green-700" />
            <span>{language === 'fa' ? 'پیام شما با موفقیت دریافت گردید.' : 'Inquiry Received'}</span>
          </div>
          <p className="text-xs text-green-800 leading-relaxed">
            {language === 'fa'
              ? 'سپاسگزاریم. پیام شما در سرور ثبت گردید و اسماء پرنیان‌فرد آن را بررسی خواهد نمود.'
              : 'Thank you for reaching out. Your inquiry was received by the server and will be reviewed directly by Asma Parnianfard.'}
          </p>
          <button
            onClick={() => setIsSuccess(false)}
            className="mt-3 text-xs font-semibold text-green-800 underline hover:text-green-950"
          >
            {language === 'fa' ? 'ارسال پیام دیگر' : 'Send another message'}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {errorMessage && (
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs space-y-2">
              <div className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{errorMessage}</span>
              </div>
              {submissionFailed && (
                <div className="pt-2">
                  <a
                    href="https://www.linkedin.com/in/asma-parnianfard-a11b69433"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#22272B] hover:bg-[#B79656] text-white text-xs font-semibold transition-colors"
                  >
                    <span>{language === 'fa' ? 'ارتباط مستقیم در لینکدین' : 'Message on LinkedIn'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-[#22272B] mb-1.5">
                {t('fullName')} *
              </label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. Zahra Alavi"
                className="w-full px-4 py-2.5 rounded-xl border border-[#D8CEBE] bg-[#FDFCF9] text-sm text-[#22272B] focus:outline-none focus:border-[#B79656]"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-[#22272B] mb-1.5">
                {t('emailAddress')} *
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="client@example.com"
                className="w-full px-4 py-2.5 rounded-xl border border-[#D8CEBE] bg-[#FDFCF9] text-sm text-[#22272B] focus:outline-none focus:border-[#B79656]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-[#22272B] mb-1.5">
                {t('organization')}
              </label>
              <input
                type="text"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                placeholder={language === 'fa' ? 'دانشگاه، مرکز یا سازمان (اختیاری)' : 'University or Organization (Optional)'}
                className="w-full px-4 py-2.5 rounded-xl border border-[#D8CEBE] bg-[#FDFCF9] text-sm text-[#22272B] focus:outline-none focus:border-[#B79656]"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-[#22272B] mb-1.5">
                {language === 'fa' ? 'موضوع پیام' : 'Subject'}
              </label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder={language === 'fa' ? 'مثلاً استعلام ترجمه مقاله' : 'e.g. Article Translation Inquiry'}
                className="w-full px-4 py-2.5 rounded-xl border border-[#D8CEBE] bg-[#FDFCF9] text-sm text-[#22272B] focus:outline-none focus:border-[#B79656]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#22272B] mb-1.5">
              {language === 'fa' ? 'متن پیام یا توضیحات' : 'Message'} *
            </label>
            <textarea
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={
                language === 'fa'
                  ? 'پیام، پرسش یا مشخصات متن مورد نظر خود را بنویسید...'
                  : 'Please describe your translation request or questions...'
              }
              className="w-full px-4 py-2.5 rounded-xl border border-[#D8CEBE] bg-[#FDFCF9] text-sm text-[#22272B] focus:outline-none focus:border-[#B79656]"
            />
          </div>

          <div>
            <label className="flex items-start gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-0.5 rounded border-[#D8CEBE] text-[#B79656] focus:ring-[#B79656]"
              />
              <span className="text-xs text-[#5A6268]">
                {language === 'fa'
                  ? 'موافقت می‌نمایم که اطلاعات و متون ارسالی مشمول تعهد حفظ محرمانگی باشد.'
                  : 'I agree that submitted inquiries are handled under professional confidentiality.'}
              </span>
            </label>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#B79656] hover:bg-[#C4A466] text-white text-xs font-semibold tracking-wide shadow-sm transition-colors disabled:opacity-50"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{isSubmitting ? t('submitting') : language === 'fa' ? 'ارسال پیام' : 'Send Message'}</span>
            </button>

            <a
              href="https://www.linkedin.com/in/asma-parnianfard-a11b69433"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#78828A] hover:text-[#B79656] inline-flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>{language === 'fa' ? 'یا مکاتبه مستقیم در لینکدین' : 'Or connect on LinkedIn'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
