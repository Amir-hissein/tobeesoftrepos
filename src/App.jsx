import { useLayoutEffect, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { initGA, pageview } from './lib/analytics';

// Layout
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';
import Contact from './components/sections/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Track page views in Google Analytics
  useEffect(() => {
    pageview(pathname);
  }, [pathname]);

  return null;
}

function AppContent() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white dark:bg-slate-900 selection:bg-primary-500/30 selection:text-primary-900 font-sans flex flex-col overflow-x-hidden">
        <Navbar />
        <main className="relative z-10 flex-grow overflow-x-hidden w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

function App() {
  // Initialize Google Analytics on app mount
  useEffect(() => {
    initGA();
  }, []);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
