import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { ServiceCategory } from '../types';
import { Upload, AlertCircle, FileText, X, ShieldCheck, ArrowRight, ExternalLink } from 'lucide-react';

export const QuoteForm: React.FC = () => {
  const { language, t } = useLanguage();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [service, setService] = useState<ServiceCategory>('translation');
  const [sourceLanguage, setSourceLanguage] = useState('English');
  const [targetLanguage, setTargetLanguage] = useState('Persian');
  const [documentType, setDocumentType] = useState('Article / Essay');
  const [wordCount, setWordCount] = useState<number>(3000);
  const [deadline, setDeadline] = useState('');
  const [urgency, setUrgency] = useState<'standard' | 'urgent' | 'enterprise'>('standard');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(true);

  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submissionFailed, setSubmissionFailed] = useState(false);

  // Initialize from query param if available
  useEffect(() => {
    const qWords = searchParams.get('words');
    if (qWords) {
      const parsed = parseInt(qWords, 10);
      if (!isNaN(parsed) && parsed > 0) {
        setWordCount(parsed);
      }
    }
    const qService = searchParams.get('service') as ServiceCategory | null;
    if (qService) {
      if (['translation', 'article', 'general'].includes(qService)) {
        setService(qService);
      } else {
        setService('translation');
      }
    }
  }, [searchParams]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...newFiles].slice(0, 5));
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) {
      setErrorMessage(language === 'fa' ? 'لطفاً نام و آدرس ایمیل خود را وارد نمایید.' : 'Please provide your full name and email.');
      setSubmissionFailed(false);
      return;
    }
    if (!consent) {
      setErrorMessage(language === 'fa' ? 'لطفاً موافقت با حفظ محرمانگی را تأیید نمایید.' : 'Please acknowledge the confidentiality agreement.');
      setSubmissionFailed(false);
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);
    setSubmissionFailed(false);

    try {
      const formData = new FormData();
      formData.append('fullName', fullName);
      formData.append('email', email);
      formData.append('organization', organization);
      formData.append('service', service);
      formData.append('sourceLanguage', sourceLanguage);
      formData.append('targetLanguage', targetLanguage);
      formData.append('documentType', documentType);
      formData.append('wordCount', wordCount.toString());
      formData.append('deadline', deadline);
      formData.append('urgency', urgency);
      formData.append('message', message);
      formData.append('consent', consent.toString());

      files.forEach((file) => {
        formData.append('attachments', file);
      });

      const res = await fetch('/api/quotes', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json().catch(() => null);
      if (!res.ok || !data?.quoteId) {
        throw new Error(data?.error || 'Server did not accept quote intake.');
      }

      // Navigate to confirmation page ONLY with verified backend quoteId
      navigate('/thank-you', {
        state: { referenceId: data.quoteId, type: 'quote', email: email },
      });
    } catch (err: any) {
      console.warn('Quote submission error or server offline:', err);
      // Strictly avoid fabricating fake reference codes or false thank-you states
      setSubmissionFailed(true);
      setErrorMessage(
        language === 'fa'
          ? 'سامانه آنلاین ارسال استعلام با خطا مواجه شد و فایل شما در سرور ذخیره نگردید. لطفاً برای ارزیابی متن و دریافت برآورد قیمت، مستقیماً از طریق پروفایل رسمی لینکدین با اسماء پرنیان‌فرد در تماس باشید.'
          : 'Unable to deliver quote request: the automated intake server is currently offline or unreachable. Your submission has not been recorded. Please share your project details directly with Asma Parnianfard via LinkedIn.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-white border border-[#E8E2D5] rounded-2xl p-6 sm:p-10 shadow-sm">
      <div className="mb-8">
        <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-[#B79656] mb-2">
          <ShieldCheck className="w-4 h-4 text-[#788A78]" />
          <span>{language === 'fa' ? 'بررسی محرمانه اسناد و استعلام قیمت' : 'Confidential Intake & Quotation'}</span>
        </div>
        <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#22272B] mb-2">
          {t('quoteFormTitle')}
        </h2>
        <p className="text-sm text-[#5A6268] leading-relaxed max-w-2xl">
          {t('quoteFormSubtitle')}
        </p>
      </div>

      {errorMessage && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs space-y-2">
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
                <span>{language === 'fa' ? 'مکاتبه مستقیم در لینکدین' : 'Message on LinkedIn'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Contact Info Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
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

          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#22272B] mb-1.5">
              {t('organization')}
            </label>
            <input
              type="text"
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
              placeholder={language === 'fa' ? 'دانشگاه، مرکز یا ناشر (اختیاری)' : 'University or Publisher (Optional)'}
              className="w-full px-4 py-2.5 rounded-xl border border-[#D8CEBE] bg-[#FDFCF9] text-sm text-[#22272B] focus:outline-none focus:border-[#B79656]"
            />
          </div>
        </div>

        {/* Translation Service & Category Selection */}
        <div className="space-y-3">
          <label className="block text-xs uppercase tracking-wider font-semibold text-[#22272B]">
            {t('serviceSelect')} *
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              {
                id: 'translation' as ServiceCategory,
                title: language === 'fa' ? 'ترجمه متون انگلیسی به فارسی' : 'English-to-Persian Translation',
                desc: language === 'fa' ? 'ترجمه کتبی با تکیه بر روانی و درک مفهوم' : 'Written translation with natural phrasing',
              },
              {
                id: 'article' as ServiceCategory,
                title: language === 'fa' ? 'ترجمه مقالات' : 'Article Translation',
                desc: language === 'fa' ? 'ترجمه مقالات و متون ترویجی و تحلیلی' : 'Articles, essays, and written content',
              },
              {
                id: 'general' as ServiceCategory,
                title: language === 'fa' ? 'ترجمه متون عمومی' : 'General Text Translation',
                desc: language === 'fa' ? 'ترجمه انواع متون نوشتاری عمومی و کاربردی' : 'General written materials & communications',
              },
            ].map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setService(s.id)}
                className={`p-4 rounded-xl border text-left transition-all ${
                  service === s.id
                    ? 'border-[#B79656] bg-[#F8F6F1] ring-1 ring-[#B79656]'
                    : 'border-[#E8E2D5] bg-[#FDFCF9] hover:border-[#B79656]/50'
                }`}
                style={{ textAlign: language === 'fa' ? 'right' : 'left' }}
              >
                <div className="font-semibold text-xs text-[#22272B] mb-1">{s.title}</div>
                <div className="text-[11px] text-[#78828A] leading-relaxed">{s.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Language Direction & Document Category */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#22272B] mb-1.5">
              {t('sourceLang')}
            </label>
            <input
              type="text"
              readOnly
              value={language === 'fa' ? 'انگلیسی (مبدا)' : 'English (Source)'}
              className="w-full px-4 py-2.5 rounded-xl border border-[#D8CEBE] bg-[#EAE2D6]/30 text-sm text-[#22272B] cursor-not-allowed font-medium"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#22272B] mb-1.5">
              {t('targetLang')}
            </label>
            <input
              type="text"
              readOnly
              value={language === 'fa' ? 'فارسی (مقصد)' : 'Persian (Target)'}
              className="w-full px-4 py-2.5 rounded-xl border border-[#D8CEBE] bg-[#EAE2D6]/30 text-sm text-[#22272B] cursor-not-allowed font-medium"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#22272B] mb-1.5">
              {t('docType')}
            </label>
            <select
              value={documentType}
              onChange={(e) => setDocumentType(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-[#D8CEBE] bg-[#FDFCF9] text-sm text-[#22272B] focus:outline-none focus:border-[#B79656]"
            >
              <option>{language === 'fa' ? 'مقاله یا یادداشت' : 'Article / Essay'}</option>
              <option>{language === 'fa' ? 'مقاله موضوعی یا تخصصی' : 'Thematic / Specialized Article'}</option>
              <option>{language === 'fa' ? 'محتوای آموزشی و رسانه‌ای' : 'Informational / Media Content'}</option>
              <option>{language === 'fa' ? 'گزارش متنی عمومی' : 'General Written Report'}</option>
              <option>{language === 'fa' ? 'سایر متون نوشتاری' : 'Other Written Material'}</option>
            </select>
          </div>
        </div>

        {/* Word Count, Deadline & Urgency */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#22272B] mb-1.5">
              {t('approxWords')}
            </label>
            <input
              type="number"
              min={100}
              max={500000}
              step={100}
              value={wordCount}
              onChange={(e) => setWordCount(parseInt(e.target.value) || 0)}
              className="w-full px-4 py-2.5 rounded-xl border border-[#D8CEBE] bg-[#FDFCF9] text-sm text-[#22272B] focus:outline-none focus:border-[#B79656]"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#22272B] mb-1.5">
              {t('deadline')}
            </label>
            <input
              type="date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-[#D8CEBE] bg-[#FDFCF9] text-sm text-[#22272B] focus:outline-none focus:border-[#B79656]"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#22272B] mb-1.5">
              {t('urgencyTier')}
            </label>
            <select
              value={urgency}
              onChange={(e) => setUrgency(e.target.value as any)}
              className="w-full px-4 py-2.5 rounded-xl border border-[#D8CEBE] bg-[#FDFCF9] text-sm text-[#22272B] focus:outline-none focus:border-[#B79656]"
            >
              <option value="standard">{language === 'fa' ? 'تحویل استاندارد' : 'Standard Schedule'}</option>
              <option value="urgent">{language === 'fa' ? 'تحویل فوری (با هماهنگی)' : 'Expedited Track (Priority)'}</option>
            </select>
          </div>
        </div>

        {/* Notes / Context */}
        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-[#22272B] mb-1.5">
            {t('projectNotes')}
          </label>
          <textarea
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={
              language === 'fa'
                ? 'توضیحات تکمیلی، سبک نگارش مد نظر، یا اصطلاحات کلیدی...'
                : 'Any contextual requirements, publication aims, or specific instructions...'
            }
            className="w-full px-4 py-2.5 rounded-xl border border-[#D8CEBE] bg-[#FDFCF9] text-sm text-[#22272B] focus:outline-none focus:border-[#B79656]"
          />
        </div>

        {/* File Attachments */}
        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-[#22272B] mb-1.5">
            {t('uploadDocs')}
          </label>

          <div className="border-2 border-dashed border-[#D8CEBE] rounded-xl p-6 text-center hover:border-[#B79656] transition-colors bg-[#FDFCF9]">
            <Upload className="w-8 h-8 text-[#B79656] mx-auto mb-2" />
            <div className="text-xs text-[#22272B] font-medium mb-1">
              {language === 'fa' ? 'فایل‌های خود را اینجا بکشید یا انتخاب کنید' : 'Click to upload or drag and drop source files'}
            </div>
            <p className="text-[11px] text-[#78828A] mb-3">
              PDF, Word (.docx, .doc), TXT (Max 25MB total)
            </p>
            <label className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#22272B] text-white text-xs font-semibold cursor-pointer hover:bg-[#B79656] transition-colors">
              <span>{language === 'fa' ? 'انتخاب فایل از دستگاه' : 'Browse Local Files'}</span>
              <input
                type="file"
                multiple
                accept=".pdf,.docx,.doc,.txt,.rtf"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          </div>

          {files.length > 0 && (
            <div className="mt-3 space-y-2">
              {files.map((file, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-2.5 rounded-lg bg-[#F8F6F1] border border-[#E8E2D5] text-xs"
                >
                  <div className="flex items-center gap-2 overflow-hidden">
                    <FileText className="w-4 h-4 text-[#B79656] shrink-0" />
                    <span className="truncate text-[#22272B] font-medium">{file.name}</span>
                    <span className="text-[10px] text-[#78828A]">({(file.size / 1024).toFixed(1)} KB)</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeFile(idx)}
                    className="text-[#78828A] hover:text-red-600 p-1"
                    aria-label="Remove attached file"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Privacy Consent Checkbox */}
        <div className="pt-2">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-0.5 rounded border-[#D8CEBE] text-[#B79656] focus:ring-[#B79656]"
            />
            <span className="text-xs text-[#5A6268] leading-relaxed">
              {t('privacyConsent')}
            </span>
          </label>
        </div>

        {/* Submit Button & Direct Alternative Link */}
        <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#B79656] hover:bg-[#C4A466] text-white text-sm font-semibold tracking-wide shadow-md transition-colors disabled:opacity-50"
          >
            <span>{isSubmitting ? t('submitting') : t('submitQuote')}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="https://www.linkedin.com/in/asma-parnianfard-a11b69433"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#78828A] hover:text-[#B79656] inline-flex items-center justify-center gap-1.5 transition-colors"
          >
            <span>{language === 'fa' ? 'یا ارسال مستقیم مشخصات در لینکدین' : 'Or inquire directly on LinkedIn'}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </form>
    </div>
  );
};

export default QuoteForm;
