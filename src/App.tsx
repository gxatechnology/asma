import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './i18n/LanguageContext';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesOverviewPage from './pages/ServicesOverviewPage';
import ProcessPage from './pages/ProcessPage';
import QuotePage from './pages/QuotePage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import ThankYouPage from './pages/ThankYouPage';
import PersianEditionPage from './pages/PersianEditionPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-[#F8F6F1] text-[#22272B] selection:bg-[#B79656]/20 selection:text-[#22272B]">
          <Navbar />
          <main className="flex-grow pt-20">
            <Routes>
              {/* Confirmed Primary Routes */}
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesOverviewPage />} />
              <Route path="/process" element={<ProcessPage />} />
              <Route path="/quote" element={<QuotePage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy" element={<PrivacyPolicyPage />} />
              <Route path="/terms" element={<TermsOfServicePage />} />
              <Route path="/thank-you" element={<ThankYouPage />} />
              <Route path="/fa" element={<PersianEditionPage />} />
              <Route path="/admin" element={<AdminDashboardPage />} />

              {/* Graceful Redirects for Removed Services & Portfolio Routes */}
              <Route path="/portfolio" element={<Navigate to="/" replace />} />
              <Route path="/portfolio/*" element={<Navigate to="/" replace />} />
              <Route path="/services/financial" element={<Navigate to="/services" replace />} />
              <Route path="/services/accounting" element={<Navigate to="/services" replace />} />
              <Route path="/services/business" element={<Navigate to="/services" replace />} />
              <Route path="/services/proofreading" element={<Navigate to="/services" replace />} />
              <Route path="/services/localization" element={<Navigate to="/services" replace />} />
              <Route path="/services/translation" element={<Navigate to="/services" replace />} />

              {/* 404 Fallback */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}
