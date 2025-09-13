'use client';

import { useState, useEffect } from 'react';

// Import all components
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SignatureDishesSection from '../components/SignatureDishesSection';
import ExperienceSection from '../components/ExperienceSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ReservationSection from '../components/ReservationSection';
import Footer from '../components/Footer';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="relative">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SignatureDishesSection />
      <ExperienceSection />
      <TestimonialsSection />
      <ReservationSection />
      <Footer />
    </main>
  );
}