import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Certificates from './pages/Certificates';
import LoadingScreen from './components/LoadingScreen';
import MouseTrail from './components/MouseTrail';
import PageTransition from './components/PageTransition';
import ParticleBackground from './components/ParticleBackground';

const App = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Check user's motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    const handleMotionPreferenceChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleMotionPreferenceChange);

    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      mediaQuery.removeEventListener('change', handleMotionPreferenceChange);
      clearTimeout(timer);
    };
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-[#0A0A1F] flex flex-col relative">
      {!isReducedMotion && (
        <>
          <ParticleBackground />
          <MouseTrail />
        </>
      )}
      <Navigation />
      <main className="flex-grow pt-16 relative z-10">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={
              <PageTransition>
                <Home />
              </PageTransition>
            } />
            <Route path="/about" element={
              <PageTransition>
                <About />
              </PageTransition>
            } />
            <Route path="/skills" element={
              <PageTransition>
                <Skills />
              </PageTransition>
            } />
            <Route path="/projects" element={
              <PageTransition>
                <Projects />
              </PageTransition>
            } />
            <Route path="/certificates" element={
              <PageTransition>
                <Certificates />
              </PageTransition>
            } />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default App;