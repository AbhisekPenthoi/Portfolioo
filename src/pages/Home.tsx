import React from 'react';
import Hero from '../components/Hero';
import TechParticles from '../components/TechParticles';

const Home = () => {
  return (
    <div className="min-h-screen w-full overflow-hidden">
      <TechParticles />
      <div className="relative container mx-auto px-4 sm:px-6 py-16">
        <Hero />
      </div>
    </div>
  );
};

export default Home; 