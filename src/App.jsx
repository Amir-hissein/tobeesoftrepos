import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';

// Layout
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Sections
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Process from './components/sections/Process';
import Expertise from './components/sections/Expertise';
import FAQ from './components/sections/FAQ';
import Contact from './components/sections/Contact';

import { useScrollReveal } from './lib/useScrollReveal';

function AppContent() {
  useScrollReveal();

  return (
    <div className="bg-theme-primary text-theme-primary min-h-screen selection:bg-primary-500/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Expertise />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
