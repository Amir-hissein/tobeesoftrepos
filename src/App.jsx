import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Expertise from './components/Expertise';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useScrollReveal } from './lib/useScrollReveal';

function AppContent() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Process />
      <Expertise />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
