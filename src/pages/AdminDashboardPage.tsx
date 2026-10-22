import React, { useState, useEffect } from 'react';
import {
  Lock,
  LogOut,
  CheckCircle2,
  Clock,
  FileText,
  Download,
  Search,
  Filter,
  AlertCircle,
  Building2,
  User,
  Mail,
  Calendar,
  DollarSign,
  RefreshCw,
  ShieldCheck,
  Layers,
  Eye,
  FolderLock
} from 'lucide-react';
import { QuoteRequest, GeneralEnquiry, PortfolioItem, BlogPost, EnquiryStatus } from '../types';
import BrandIdentity from '../components/BrandIdentity';

export default function AdminDashboardPage() {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('asma_admin_token'));
  const [username, setUsername] = useState('asma.admin');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);

  // Dashboard Tabs
  const [activeTab, setActiveTab] = useState<'quotes' | 'enquiries' | 'portfolio' | 'blog' | 'files' | 'settings'>('quotes');

  // Data states
  const [stats, setStats] = useState<{
    totalEnquiries: number;
    pendingQuotes: number;
    completedProjects: number;
    totalWordsQuoted: number;
    totalRevenueQuoted: number;
  }>({
    totalEnquiries: 0,
    pendingQuotes: 0,
    completedProjects: 0,
    totalWordsQuoted: 0,
    totalRevenueQuoted: 0,
  });

  const [quotes, setQuotes] = useState<QuoteRequest[]>([]);
  const [enquiries, setEnquiries] = useState<GeneralEnquiry[]>([]);
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([]);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [files, setFiles] = useState<{ filename: string; originalname: string; size: number; path: string; uploaded_at: string; enquiryId?: string }[]>([]);

  const [loadingData, setLoadingData] = useState(false);
  const [searchFilter, setSearchFilter] = useState('');
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null);
  const [updateMessage, setUpdateMessage] = useState('');

  // Handle Login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    setLoginLoading(true);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Invalid credentials');
      }

      localStorage.setItem('asma_admin_token', data.token);
      setToken(data.token);
    } catch (err: any) {
      setLoginError(err.message || 'Login failed. Please check credentials.');
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('asma_admin_token');
    setToken(null);
  };

  // Fetch Dashboard Data
  const fetchData = async () => {
    if (!token) return;
    setLoadingData(true);

    const headers = { Authorization: `Bearer ${token}` };

    try {
      const [statsRes, quotesRes, enquiriesRes, portRes, blogRes, filesRes] = await Promise.all([
        fetch('/api/admin/stats', { headers }).then(r => r.ok ? r.json() : null),
        fetch('/api/quotes', { headers }).then(r => r.ok ? r.json() : []),
        fetch('/api/enquiries', { headers }).then(r => r.ok ? r.json() : []),
        fetch('/api/portfolio').then(r => r.ok ? r.json() : []),
        fetch('/api/blog').then(r => r.ok ? r.json() : []),
        fetch('/api/admin/files', { headers }).then(r => r.ok ? r.json() : []),
      ]);

      if (statsRes) setStats(statsRes);
      if (Array.isArray(quotesRes)) setQuotes(quotesRes);
      if (Array.isArray(enquiriesRes)) setEnquiries(enquiriesRes);
      if (Array.isArray(portRes)) setPortfolio(portRes);
      if (Array.isArray(blogRes)) setBlogPosts(blogRes);
      if (Array.isArray(filesRes)) setFiles(filesRes);
    } catch (err) {
      console.error('Failed to load admin data', err);
    } finally {
      setLoadingData(false);
    }
  };

  useEffect(() => {
    if (token) {
      fetchData();
    }
  }, [token]);

  // Update Quote Status & Notes
  const handleUpdateQuote = async (id: string, updates: { status?: EnquiryStatus; internalNotes?: string; quotedAmount?: number }) => {
    if (!token) return;
    try {
      const res = await fetch(`/api/quotes/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updates),
      });

      if (!res.ok) throw new Error('Update failed');
      const updated = await res.json();

      setQuotes(prev => prev.map(q => q.id === id ? { ...q, ...updates } : q));
      if (selectedQuote && selectedQuote.id === id) {
        setSelectedQuote(prev => prev ? { ...prev, ...updates } : null);
      }
      setUpdateMessage('Saved successfully');
      setTimeout(() => setUpdateMessage(''), 3000);
    } catch (err: any) {
      alert('Error updating quote: ' + err.message);
    }
  };

  // IF NOT AUTHENTICATED: SHOW SECURE LOGIN
  if (!token) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
        <div className="max-w-md w-full bg-white border border-[#22272B]/10 p-8 shadow-xl space-y-6">
          <div className="text-center space-y-3 pb-2 border-b border-[#22272B]/10">
            <BrandIdentity
              variant="stacked"
              theme="light"
              size="lg"
              forceEnglish
              customSubtitle="ATELIER MANAGEMENT PORTAL"
              linkTo={null}
            />
            <p className="text-[11px] text-[#22272B]/60 font-sans tracking-wide">
              Restricted administrative access for Lead Translator
            </p>
          </div>

          {loginError && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-mono uppercase text-[#22272B]/70 block font-semibold">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full px-3 py-2 bg-[#F8F6F1] border border-[#22272B]/20 text-xs focus:outline-none focus:border-[#B79656]"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-mono uppercase text-[#22272B]/70 block font-semibold">
                Password
              </label>
              <input
                type="password"
                value={password}
                placeholder="••••••••••••"
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3 py-2 bg-[#F8F6F1] border border-[#22272B]/20 text-xs focus:outline-none focus:border-[#B79656]"
              />
              <span className="text-[10px] text-[#22272B]/50 font-mono block">
                Official Credential: asma.admin / Parnianfard@2025!
              </span>
            </div>

            <button
              type="submit"
              disabled={loginLoading}
              className="w-full py-2.5 bg-[#22272B] text-white hover:bg-[#B79656] transition-colors text-xs font-semibold uppercase tracking-wider"
            >
              {loginLoading ? 'Authenticating...' : 'Sign In to Portal'}
            </button>
          </form>

          <div className="pt-4 border-t border-[#22272B]/10 text-center text-[11px] text-[#22272B]/50 font-sans">
            Encrypted session • Unlisted route
          </div>
        </div>
      </div>
    );
  }

  // AUTHENTICATED ADMIN DASHBOARD
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">

      {/* TOP HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#22272B]/10">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <BrandIdentity
            variant="admin"
            theme="light"
            size="md"
            forceEnglish
            customSubtitle="ATELIER PORTAL • MASHHAD, IRAN"
            linkTo="/admin"
          />
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 border border-emerald-200 rounded-full text-[11px] text-emerald-800 font-medium w-fit">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Active Session: asma.admin</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={fetchData}
            disabled={loadingData}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[#22272B]/20 text-xs font-medium hover:border-[#B79656] text-[#22272B] transition-colors"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loadingData ? 'animate-spin' : ''}`} />
            <span>Refresh</span>
          </button>

          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#22272B] text-white text-xs font-medium hover:bg-red-700 transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>

      {/* METRICS ROW */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white border border-[#22272B]/10 p-5 space-y-1">
          <span className="text-[11px] font-mono uppercase text-[#22272B]/50 block">Pending Quotes</span>
          <span className="text-2xl font-serif font-bold text-[#B79656]">
            {quotes.filter(q => q.status === 'New' || q.status === 'In Review').length}
          </span>
          <span className="text-[10px] text-[#22272B]/60 block">Requiring client proposal</span>
        </div>

        <div className="bg-white border border-[#22272B]/10 p-5 space-y-1">
          <span className="text-[11px] font-mono uppercase text-[#22272B]/50 block">Total Inquiries</span>
          <span className="text-2xl font-serif font-bold text-[#22272B]">
            {quotes.length + enquiries.length}
          </span>
          <span className="text-[10px] text-[#22272B]/60 block">{quotes.length} quotes, {enquiries.length} general</span>
        </div>

        <div className="bg-white border border-[#22272B]/10 p-5 space-y-1">
          <span className="text-[11px] font-mono uppercase text-[#22272B]/50 block">Quoted Volume</span>
          <span className="text-2xl font-serif font-bold text-[#22272B]">
            {quotes.reduce((acc, q) => acc + (q.wordCount || 0), 0).toLocaleString()}
          </span>
          <span className="text-[10px] text-[#22272B]/60 block">Estimated source words</span>
        </div>

        <div className="bg-white border border-[#22272B]/10 p-5 space-y-1">
          <span className="text-[11px] font-mono uppercase text-[#22272B]/50 block">Total Quoted Value</span>
          <span className="text-2xl font-serif font-bold text-[#788A78]">
            ${quotes.reduce((acc, q) => acc + (q.quotedAmount || 0), 0).toLocaleString()}
          </span>
          <span className="text-[10px] text-[#22272B]/60 block">Approved fee proposals</span>
        </div>
      </div>

      {/* TABS NAVIGATION */}
      <div className="border-b border-[#22272B]/10 flex flex-wrap gap-2">
        {[
          { id: 'quotes', label: `Quotes (${quotes.length})` },
          { id: 'enquiries', label: `General Inquiries (${enquiries.length})` },
          { id: 'files', label: `Document Vault (${files.length})` },

          { id: 'blog', label: `Journal Articles (${blogPosts.length})` },
          { id: 'settings', label: 'System & Security' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors border-b-2 -mb-[1px] ${
              activeTab === tab.id
                ? 'border-[#B79656] text-[#22272B] bg-[#F8F6F1]'
                : 'border-transparent text-[#22272B]/60 hover:text-[#22272B]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* TAB 1: QUOTES MANAGEMENT */}
      {activeTab === 'quotes' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-lg font-serif font-bold text-[#22272B]">
              Client Quotation Dossiers
            </h2>
            <div className="relative w-64">
              <Search className="w-3.5 h-3.5 text-[#22272B]/40 absolute left-2.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Filter quotes by client or org..."
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 bg-white border border-[#22272B]/20 text-xs focus:outline-none focus:border-[#B79656]"
              />
            </div>
          </div>

          <div className="bg-white border border-[#22272B]/10 overflow-x-auto shadow-sm">
            <table className="w-full text-left text-xs font-sans">
              <thead className="bg-[#F8F6F1] border-b border-[#22272B]/10 font-mono uppercase text-[#22272B]/60 text-[10px]">
                <tr>
                  <th className="p-3">Ref ID</th>
                  <th className="p-3">Client / Organization</th>
                  <th className="p-3">Service</th>
                  <th className="p-3">Volume</th>
                  <th className="p-3">Urgency</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Quote ($)</th>
                  <th className="p-3">Files</th>
                  <th className="p-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#22272B]/10">
                {quotes
                  .filter(q =>
                    !searchFilter ||
                    q.fullName.toLowerCase().includes(searchFilter.toLowerCase()) ||
                    (q.organization && q.organization.toLowerCase().includes(searchFilter.toLowerCase())) ||
                    q.id.toLowerCase().includes(searchFilter.toLowerCase())
                  )
                  .map((q) => (
                    <tr key={q.id} className="hover:bg-[#F8F6F1]/50 transition-colors">
                      <td className="p-3 font-mono font-semibold text-[#B79656]">{q.id}</td>
                      <td className="p-3">
                        <div className="font-semibold text-[#22272B]">{q.fullName}</div>
                        <div className="text-[11px] text-[#22272B]/60">{q.organization || q.email}</div>
                      </td>
                      <td className="p-3 font-mono uppercase text-[11px]">{q.service}</td>
                      <td className="p-3 font-mono">{q.wordCount?.toLocaleString() || 'N/A'} w</td>
                      <td className="p-3">
                        <span className={`px-2 py-0.5 text-[10px] font-mono uppercase font-semibold ${
                          q.urgency === 'urgent' ? 'bg-amber-100 text-amber-800' : 'bg-gray-100 text-gray-800'
                        }`}>
                          {q.urgency}
                        </span>
                      </td>
                      <td className="p-3">
                        <select
                          value={q.status}
                          onChange={(e) => handleUpdateQuote(q.id, { status: e.target.value as EnquiryStatus })}
                          className="bg-transparent border border-[#22272B]/20 px-2 py-1 text-[11px] font-mono focus:outline-none focus:border-[#B79656]"
                        >
                          {['New', 'In Review', 'Quoted', 'Accepted', 'Completed', 'Closed'].map(s => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </td>
                      <td className="p-3 font-mono font-bold text-[#788A78]">
                        {q.quotedAmount ? `$${q.quotedAmount}` : '—'}
                      </td>
                      <td className="p-3">
                        {q.attachments && q.attachments.length > 0 ? (
                          <span className="inline-flex items-center gap-1 text-[11px] font-mono text-[#B79656]">
                            <FileText className="w-3 h-3" /> {q.attachments.length}
                          </span>
                        ) : (
                          <span className="text-[#22272B]/40 text-[11px]">—</span>
                        )}
                      </td>
                      <td className="p-3 text-right">
                        <button
                          onClick={() => setSelectedQuote(q)}
                          className="px-2.5 py-1 bg-[#22272B] text-white hover:bg-[#B79656] transition-colors text-[11px] font-medium"
                        >
                          Review
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* SELECTED QUOTE DETAIL MODAL */}
      {selectedQuote && (
        <div className="fixed inset-0 z-50 bg-[#22272B]/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white border border-[#22272B]/20 max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative my-8">
            <div className="flex items-center justify-between border-b border-[#22272B]/10 pb-4">
              <div>
                <span className="text-[11px] font-mono uppercase text-[#B79656] font-bold">
                  Quote Review • {selectedQuote.id}
                </span>
                <h3 className="text-xl font-serif font-bold text-[#22272B]">
                  {selectedQuote.fullName}
                </h3>
              </div>
              <button
                onClick={() => setSelectedQuote(null)}
                className="text-[#22272B]/40 hover:text-[#22272B] text-xl font-bold"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs font-mono">
              <div>
                <span className="text-[#22272B]/50 block">Organization:</span>
                <span className="font-semibold text-[#22272B]">{selectedQuote.organization || 'Independent'}</span>
              </div>
              <div>
                <span className="text-[#22272B]/50 block">Email Address:</span>
                <a href={`mailto:${selectedQuote.email}`} className="text-[#B79656] underline">{selectedQuote.email}</a>
              </div>
              <div>
                <span className="text-[#22272B]/50 block">Service Category:</span>
                <span className="font-semibold text-[#22272B] uppercase">{selectedQuote.service}</span>
              </div>
              <div>
                <span className="text-[#22272B]/50 block">Word Count & Urgency:</span>
                <span className="font-semibold text-[#22272B]">{selectedQuote.wordCount} words ({selectedQuote.urgency})</span>
              </div>
            </div>

            {selectedQuote.message && (
              <div className="p-4 bg-[#F8F6F1] border border-[#22272B]/10 text-xs space-y-1">
                <span className="font-mono uppercase text-[#22272B]/60 font-bold block">Client Message:</span>
                <p className="text-[#22272B]/85 font-sans leading-relaxed">{selectedQuote.message}</p>
              </div>
            )}

            {/* ATTACHMENTS LIST & DOWNLOAD */}
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase text-[#22272B]/60 font-bold block">
                Uploaded Client Documents ({selectedQuote.attachments?.length || 0}):
              </span>
              {selectedQuote.attachments && selectedQuote.attachments.length > 0 ? (
                <div className="space-y-2">
                  {selectedQuote.attachments.map((att) => (
                    <div key={att.id} className="p-3 bg-white border border-[#22272B]/15 flex items-center justify-between text-xs font-mono">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-[#B79656]" />
                        <span>{att.originalname}</span>
                        <span className="text-[#22272B]/40">({(att.size / 1024).toFixed(0)} KB)</span>
                      </div>
                      <a
                        href={`/api/files/${att.filename}`}
                        download={att.originalname}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#22272B] text-white hover:bg-[#B79656] transition-colors text-[11px]"
                      >
                        <Download className="w-3 h-3" />
                        <span>Download</span>
                      </a>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-[#22272B]/40 italic">No files attached to this request.</p>
              )}
            </div>

            {/* STATUS & INTERNAL NOTES EDITOR */}
            <div className="space-y-3 pt-4 border-t border-[#22272B]/10">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-mono uppercase text-[#22272B]/70 block font-semibold">
                    Proposal Status
                  </label>
                  <select
                    value={selectedQuote.status}
                    onChange={(e) => handleUpdateQuote(selectedQuote.id, { status: e.target.value as EnquiryStatus })}
                    className="w-full p-2 bg-[#F8F6F1] border border-[#22272B]/20 text-xs font-mono"
                  >
                    {['New', 'In Review', 'Quoted', 'Accepted', 'Completed', 'Closed'].map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono uppercase text-[#22272B]/70 block font-semibold">
                    Quoted Fee ($ USD)
                  </label>
                  <input
                    type="number"
                    value={selectedQuote.quotedAmount || ''}
                    placeholder="e.g. 1250"
                    onChange={(e) => handleUpdateQuote(selectedQuote.id, { quotedAmount: parseFloat(e.target.value) || 0 })}
                    className="w-full p-2 bg-[#F8F6F1] border border-[#22272B]/20 text-xs font-mono"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono uppercase text-[#22272B]/70 block font-semibold">
                  Translator Internal Notes (Confidential)
                </label>
                <textarea
                  rows={3}
                  value={selectedQuote.internalNotes || ''}
                  placeholder="Terminology notes, concordance review status, NDA tracking..."
                  onChange={(e) => setSelectedQuote({ ...selectedQuote, internalNotes: e.target.value })}
                  onBlur={() => handleUpdateQuote(selectedQuote.id, { internalNotes: selectedQuote.internalNotes })}
                  className="w-full p-2.5 bg-[#F8F6F1] border border-[#22272B]/20 text-xs font-sans focus:outline-none focus:border-[#B79656]"
                />
              </div>

              {updateMessage && (
                <p className="text-xs font-mono text-emerald-600 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> {updateMessage}
                </p>
              )}
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedQuote(null)}
                className="px-5 py-2 bg-[#22272B] text-white hover:bg-[#B79656] text-xs font-medium"
              >
                Close Review
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: GENERAL INQUIRIES */}
      {activeTab === 'enquiries' && (
        <div className="space-y-6">
          <h2 className="text-lg font-serif font-bold text-[#22272B]">
            General Inquiries & Consultation Messages
          </h2>

          <div className="bg-white border border-[#22272B]/10 overflow-x-auto shadow-sm">
            <table className="w-full text-left text-xs font-sans">
              <thead className="bg-[#F8F6F1] border-b border-[#22272B]/10 font-mono uppercase text-[#22272B]/60 text-[10px]">
                <tr>
                  <th className="p-3">Ref ID</th>
                  <th className="p-3">Sender Name</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Subject</th>
                  <th className="p-3">Date</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#22272B]/10">
                {enquiries.map((enq) => (
                  <tr key={enq.id} className="hover:bg-[#F8F6F1]/50">
                    <td className="p-3 font-mono font-semibold text-[#B79656]">{enq.id}</td>
                    <td className="p-3 font-semibold text-[#22272B]">{enq.fullName}</td>
                    <td className="p-3 font-mono">{enq.email}</td>
                    <td className="p-3">{enq.subject}</td>
                    <td className="p-3 font-mono text-[11px]">{new Date(enq.created_at).toLocaleDateString()}</td>
                    <td className="p-3">
                      <span className="px-2 py-0.5 bg-[#F8F6F1] border border-[#22272B]/15 text-[10px] font-mono">
                        {enq.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 3: FILE VAULT */}
      {activeTab === 'files' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-serif font-bold text-[#22272B]">
              Encrypted Client Document Repository
            </h2>
            <span className="text-xs font-mono text-[#788A78]">
              Storage Location: /data/uploads/
            </span>
          </div>

          <div className="bg-white border border-[#22272B]/10 p-4 space-y-3">
            {files.length === 0 ? (
              <p className="text-xs text-[#22272B]/50 italic">No files currently in repository.</p>
            ) : (
              <div className="divide-y divide-[#22272B]/10">
                {files.map((f, idx) => (
                  <div key={idx} className="py-3 flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-3">
                      <FileText className="w-4 h-4 text-[#B79656]" />
                      <div>
                        <span className="font-semibold text-[#22272B] block">{f.originalname}</span>
                        <span className="text-[10px] text-[#22272B]/50">{f.filename} • {(f.size / 1024).toFixed(0)} KB</span>
                      </div>
                    </div>

                    <a
                      href={`/api/files/${f.filename}`}
                      download={f.originalname}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#22272B] text-white hover:bg-[#B79656] text-[11px] font-medium"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download</span>
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 4: PORTFOLIO MANAGER */}
      {activeTab === 'portfolio' && (
        <div className="space-y-6">
          <h2 className="text-lg font-serif font-bold text-[#22272B]">
            Portfolio Case Studies ({portfolio.length})
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {portfolio.map((p) => (
              <div key={p.id} className="p-4 bg-white border border-[#22272B]/10 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[#B79656] font-bold uppercase">{p.category}</span>
                  <span className="text-emerald-700 font-mono text-[10px] bg-emerald-50 px-2 py-0.5 border border-emerald-200">
                    Live Public
                  </span>
                </div>
                <h4 className="font-serif font-bold text-sm text-[#22272B]">{p.title}</h4>
                <p className="text-[#22272B]/70 font-sans line-clamp-2">{p.description}</p>
                <div className="pt-2 flex justify-between items-center text-[11px] font-mono border-t border-[#22272B]/10">
                  <span>{p.wordCountApprox} words</span>
                  <a href={`/portfolio/${p.slug}`} target="_blank" rel="noreferrer" className="text-[#B79656] hover:underline">
                    View Live Page →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 5: BLOG MANAGER */}
      {activeTab === 'blog' && (
        <div className="space-y-6">
          <h2 className="text-lg font-serif font-bold text-[#22272B]">
            Journal Articles ({blogPosts.length})
          </h2>

          <div className="space-y-3">
            {blogPosts.map((post) => (
              <div key={post.id} className="p-4 bg-white border border-[#22272B]/10 flex items-center justify-between text-xs">
                <div className="space-y-1">
                  <span className="font-mono text-[11px] text-[#B79656] uppercase">{post.category} • {post.publishedAt}</span>
                  <h4 className="font-serif font-bold text-sm text-[#22272B]">{post.title}</h4>
                </div>
                <a
                  href={`/blog/${post.slug}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 bg-[#F8F6F1] border border-[#22272B]/20 text-[#22272B] hover:border-[#B79656] text-xs font-medium"
                >
                  View Article
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 6: SETTINGS & SECURITY */}
      {activeTab === 'settings' && (
        <div className="max-w-2xl bg-white border border-[#22272B]/10 p-6 space-y-6 text-xs">
          <div className="space-y-2">
            <h3 className="font-serif text-base font-bold text-[#22272B]">
              Atelier Profile & Verification Data
            </h3>
            <p className="text-[#22272B]/70 font-sans">
              Configured official practitioner parameters for Asma Parnianfard.
            </p>
          </div>

          <div className="space-y-3 font-mono">
            <div className="flex items-center justify-between p-2 bg-[#F8F6F1]">
              <span className="text-[#22272B]/60">Practitioner Name:</span>
              <span className="font-bold text-[#22272B]">Asma Parnianfard (اسماء پرنیان‌فرد)</span>
            </div>

            <div className="flex items-center justify-between p-2 bg-[#F8F6F1]">
              <span className="text-[#22272B]/60">Educational Credential:</span>
              <span className="font-bold text-[#22272B]">M.A. Language Interpretation & Translation (Azad University)</span>
            </div>

            <div className="flex items-center justify-between p-2 bg-[#F8F6F1]">
              <span className="text-[#22272B]/60">Location / Timezone:</span>
              <span className="font-bold text-[#22272B]">Mashhad, Razavi Khorasan, Iran (IRST / UTC+3:30)</span>
            </div>

            <div className="flex items-center justify-between p-2 bg-[#F8F6F1]">
              <span className="text-[#22272B]/60">LinkedIn Profile:</span>
              <a href="https://www.linkedin.com/in/asma-parnianfard-a11b69433" target="_blank" rel="noreferrer" className="text-[#B79656] underline">
                linkedin.com/in/asma-parnianfard-a11b69433
              </a>
            </div>

            <div className="flex items-center justify-between p-2 bg-[#F8F6F1]">
              <span className="text-[#22272B]/60">Database Persistence:</span>
              <span className="text-emerald-700 font-bold">Active (/data/db.json) + Supabase Schema Ready</span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
