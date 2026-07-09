// import { useState, useEffect } from 'react';
// import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect } from 'react';
import HeroSlider from '../components/home/HeroSlider';
import FeaturedProjects from '../components/home/FeaturedProjects';
import Services from '../components/home/Services';
import AboutSection from '../components/home/AboutSection';
import BlogPreview from '../components/home/BlogPreview';
import Testimonials from '../components/home/Testimonials';
import ContactSection from '../components/home/ContactSection';

interface HomePageProps {
  onNavigate: (page: 'home' | 'projects' | 'about' | 'blog' | 'contact') => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-hidden">
      <HeroSlider onNavigate={onNavigate} />
      <FeaturedProjects onNavigate={onNavigate} />
      <Services />
      <AboutSection onNavigate={onNavigate} />
      <BlogPreview onNavigate={onNavigate} />
      <Testimonials />
      <ContactSection onNavigate={onNavigate} />
    </div>
  );
}
