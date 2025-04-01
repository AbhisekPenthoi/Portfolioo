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
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    const handleMotionPreferenceChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleMotionPreferenceChange);

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
    <div className="relative min-h-screen w-full">
      <ParticleBackground />
      
      <div className="relative flex flex-col min-h-screen z-[5]">
        <Navigation />
        <main className="flex-grow pt-16">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={
                <PageTransition>
                  <div className="bg-transparent">
                    <Home />
                  </div>
                </PageTransition>
              } />
              <Route path="/about" element={
                <PageTransition>
                  <div className="bg-transparent">
                    <About />
                  </div>
                </PageTransition>
              } />
              <Route path="/skills" element={
                <PageTransition>
                  <div className="bg-transparent">
                    <Skills />
                  </div>
                </PageTransition>
              } />
              <Route path="/projects" element={
                <PageTransition>
                  <div className="bg-transparent">
                    <Projects />
                  </div>
                </PageTransition>
              } />
              <Route path="/certificates" element={
                <PageTransition>
                  <div className="bg-transparent">
                    <Certificates />
                  </div>
                </PageTransition>
              } />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>

      {!isReducedMotion && <MouseTrail />}
    </div>
  );
};

export default App;