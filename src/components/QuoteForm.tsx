import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { ServiceCategory } from '../types';
import { Upload, CheckCircle2, AlertCircle, FileText, X, Lock, ShieldCheck, ArrowRight } from 'lucide-react';

export const QuoteForm: React.FC = () => {
  const { language, t } = useLanguage();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [service, setService] = useState<ServiceCategory>('financial');
  const [sourceLanguage, setSourceLanguage] = useState('English');
  const [targetLanguage, setTargetLanguage] = useState('Persian');
  const [documentType, setDocumentType] = useState('Audited Balance Sheet & P&L');
  const [wordCount, setWordCount] = useState<number>(3500);
  const [deadline, setDeadline] = useState('');
  const [urgency, setUrgency] = useState<'standard' | 'urgent' | 'enterprise'>('standard');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(true);

  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

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
      setService(qService);
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
      return;
    }
    if (!consent) {
      setErrorMessage(language === 'fa' ? 'لطفاً موافقت با پروتکل محرمانگی را تأیید نمایید.' : 'Please acknowledge the privacy and confidentiality agreement.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

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

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit quote request');
      }

      // Navigate to confirmation page
      navigate(`/thank-you?id=${data.quoteId}&name=${encodeURIComponent(fullName)}&type=quote`);
    } catch (err: any) {
      console.error(err);
      setErrorMessage(err.message || 'Error transmitting quote request. Please try again or reach out directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-white border border-[#E8E2D5] rounded-2xl p-6 sm:p-10 shadow-sm">
      <div className="mb-8">
        <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-[#B79656] mb-2">
          <ShieldCheck className="w-4 h-4 text-[#788A78]" />
          <span>{language === 'fa' ? 'سامانه امن و محرمانه استعلام قیمت' : 'Secure Encrypted Intake'}</span>
        </div>
        <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#22272B] mb-2">
          {t('quoteFormTitle')}
        </h2>
        <p className="text-sm text-[#5A6268] leading-relaxed max-w-2xl">
          {t('quoteFormSubtitle')}
        </p>
      </div>

      {errorMessage && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
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
              placeholder="e.g. Dr. Arash Rafiee"
              className="w-full px-4 py-2.5 rounded-xl border border-[#D8CEBE] bg-[#FDFCF9] text-sm text-[#22272B] focus:outline-none focus:border-[#B79656] focus:ring-1 focus:ring-[#B79656]"
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
              placeholder="corporate@institution.com"
              className="w-full px-4 py-2.5 rounded-xl border border-[#D8CEBE] bg-[#FDFCF9] text-sm text-[#22272B] focus:outline-none focus:border-[#B79656] focus:ring-1 focus:ring-[#B79656]"
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
              placeholder="e.g. Alborz Holdings P.J.S.C."
              className="w-full px-4 py-2.5 rounded-xl border border-[#D8CEBE] bg-[#FDFCF9] text-sm text-[#22272B] focus:outline-none focus:border-[#B79656] focus:ring-1 focus:ring-[#B79656]"
            />
          </div>
        </div>

        {/* Translation Disciplines & Languages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#22272B] mb-1.5">
              {t('serviceSelect')} *
            </label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value as ServiceCategory)}
              className="w-full px-4 py-2.5 rounded-xl border border-[#D8CEBE] bg-[#FDFCF9] text-sm text-[#22272B] focus:outline-none focus:border-[#B79656]"
            >
              <option value="financial">Financial Translation (IFRS & Statements)</option>
              <option value="accounting">Accounting & Statutory Audit</option>
              <option value="business">Commercial & Business Contracts</option>
              <option value="proofreading">Academic Proofreading & Editorial</option>
              <option value="localization">Website & Software Localization</option>
              <option value="translation">General English-to-Persian Translation</option>
            </select>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#22272B] mb-1.5">
              {t('sourceLang')} / {t('targetLang')}
            </label>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                value={sourceLanguage}
                onChange={(e) => setSourceLanguage(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-[#D8CEBE] bg-[#FDFCF9] text-xs text-[#22272B] text-center"
              />
              <input
                type="text"
                value={targetLanguage}
                onChange={(e) => setTargetLanguage(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-[#D8CEBE] bg-[#FDFCF9] text-xs text-[#22272B] text-center"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#22272B] mb-1.5">
              Document Category
            </label>
            <select
              value={documentType}
              onChange={(e) => setDocumentType(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-[#D8CEBE] bg-[#FDFCF9] text-sm text-[#22272B] focus:outline-none focus:border-[#B79656]"
            >
              <option>Audited Balance Sheet & P&L</option>
              <option>Annual Corporate Disclosures / MD&A</option>
              <option>Cross-Border Commercial Contract</option>
              <option>Independent Auditor Report</option>
              <option>Academic Journal Paper / Monograph</option>
              <option>Software Strings (JSON / XLIFF)</option>
              <option>Other Executive Correspondence</option>
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
              min="100"
              step="100"
              value={wordCount}
              onChange={(e) => setWordCount(parseInt(e.target.value) || 0)}
              className="w-full px-4 py-2.5 rounded-xl border border-[#D8CEBE] bg-[#FDFCF9] text-sm text-[#22272B] focus:outline-none focus:border-[#B79656]"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#22272B] mb-1.5">
              {language === 'fa' ? 'تاریخ مهلت تحویل (در صورت وجود)' : 'Target Delivery Deadline'}
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
              {t('urgencySelect')}
            </label>
            <select
              value={urgency}
              onChange={(e) => setUrgency(e.target.value as any)}
              className="w-full px-4 py-2.5 rounded-xl border border-[#D8CEBE] bg-[#FDFCF9] text-sm text-[#22272B] focus:outline-none focus:border-[#B79656]"
            >
              <option value="standard">{t('standardUrgency')}</option>
              <option value="urgent">{t('expeditedUrgency')}</option>
              <option value="enterprise">{t('enterpriseUrgency')}</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-[#22272B] mb-1.5">
            {t('message')}
          </label>
          <textarea
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={
              language === 'fa'
                ? 'توضیحات تکمیلی، سبک نگارش مورد نظر، ارجاعات خاص یا اصطلاح‌نامه‌های شرکتی خود را قید نمایید...'
                : 'Specify terminology guidelines, target audience, formatting requirements, or background context...'
            }
            className="w-full px-4 py-3 rounded-xl border border-[#D8CEBE] bg-[#FDFCF9] text-sm text-[#22272B] focus:outline-none focus:border-[#B79656]"
          />
        </div>

        {/* Secure File Upload Zone */}
        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-[#22272B] mb-1.5">
            {t('uploadDocument')}
          </label>
          <div className="border-2 border-dashed border-[#D8CEBE] hover:border-[#B79656] rounded-2xl p-6 text-center bg-[#FDFCF9] transition-colors relative">
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <div className="flex flex-col items-center justify-center pointer-events-none">
              <Upload className="w-8 h-8 text-[#B79656] mb-2" />
              <p className="text-xs font-semibold text-[#22272B]">
                {language === 'fa' ? 'فایل‌های خود را به اینجا بکشید یا برای انتخاب کلیک کنید' : 'Click to select documents or drag and drop'}
              </p>
              <span className="text-[11px] text-[#78828A] mt-1">
                PDF, Word (.docx), Excel (.xlsx), XLIFF, JSON (Up to 25MB each)
              </span>
            </div>
          </div>

          {/* Selected File Badges */}
          {files.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {files.map((f, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#F8F6F1] border border-[#E8E2D5] text-xs text-[#22272B]"
                >
                  <FileText className="w-3.5 h-3.5 text-[#B79656]" />
                  <span className="font-medium truncate max-w-[180px]">{f.name}</span>
                  <span className="text-[10px] text-[#78828A]">({Math.round(f.size / 1024)} KB)</span>
                  <button
                    type="button"
                    onClick={() => removeFile(idx)}
                    className="text-red-500 hover:text-red-700 ml-1"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Privacy & NDA Consent Checkbox */}
        <div className="p-4 rounded-xl bg-[#F8F6F1] border border-[#E8E2D5] flex items-start gap-3">
          <input
            type="checkbox"
            id="quote-consent"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-1 w-4 h-4 text-[#B79656] rounded border-[#D8CEBE] focus:ring-[#B79656] accent-[#B79656]"
          />
          <label htmlFor="quote-consent" className="text-xs text-[#3A4248] leading-relaxed cursor-pointer">
            <span className="font-semibold text-[#22272B] block mb-0.5">
              {language === 'fa' ? 'تضمین محرمانگی و پروتکل رازداری آکادمیک' : 'Strict Non-Disclosure & Corporate Privacy Guarantee'}
            </span>
            {t('privacyConsent')}
          </label>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center gap-2 py-4 px-8 rounded-full bg-[#B79656] hover:bg-[#C4A466] text-white text-sm font-semibold tracking-wide shadow-md transition-all duration-300 disabled:opacity-50"
          >
            {isSubmitting ? (
              <span>{t('submitting')}</span>
            ) : (
              <>
                <span>{t('submitQuote')}</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </>
            )}
          </button>
          <div className="mt-3 flex items-center justify-center gap-4 text-[11px] text-[#78828A]">
            <span className="flex items-center gap-1">
              <Lock className="w-3.5 h-3.5 text-[#788A78]" />
              TLS 1.3 Air-Gapped Storage
            </span>
            <span>·</span>
            <span>Response within 4 business hours</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default QuoteForm;
