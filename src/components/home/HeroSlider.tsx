import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

interface HeroSliderProps {
  onNavigate: (page: 'projects' | 'contact') => void;
}

const slides = [
  {
    title: 'Modern Architecture',
    subtitle: 'Redefining Urban Spaces',
    description: 'Creating innovative designs that shape the future of living',
    image: 'https://i.pinimg.com/1200x/a4/52/fc/a452fc83df778e029123298aa781ebdb.jpg',
  },
  {
    title: 'Sustainable Design',
    subtitle: 'Building Tomorrow, Today',
    description: 'Eco-friendly solutions for a bette environment',
    image: 'https://i.pinimg.com/1200x/95/58/28/95582844291eae54d7450b4c2f2d576e.jpg',
  },
  {
    title: 'Timeless Elegance',
    subtitle: 'Where Art Meets Function',
    description: 'Crafting spaces that inspire and endure',
    image: 'https://i.pinimg.com/1200x/33/f6/92/33f692846221b8380f3c6087d0d08148.jpg',
  },
];

export default function HeroSlider({ onNavigate }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 700);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 700);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-700 ${index === currentSlide
            ? 'opacity-100 scale-100'
            : 'opacity-0 scale-105'
            }`}
          style={{ pointerEvents: index === currentSlide ? 'auto' : 'none' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
            loading={index === 0 ? 'eager' : 'lazy'}
          />

          <div className="absolute inset-0 z-20 flex items-center">
            <div className="max-w-7xl mx-auto px-6 w-full">
              <div className="max-w-2xl space-y-6 animate-fadeInUp">
                <div className="space-y-2">
                  <p className="text-white/90 text-sm md:text-base tracking-widest uppercase font-light">
                    {slide.subtitle}
                  </p>
                  <h1 className="text-5xl md:text-7xl font-light text-white leading-tight">
                    {slide.title}
                  </h1>
                </div>
                <p className="text-white/80 text-lg md:text-xl max-w-xl">
                  {slide.description}
                </p>
                <div className="flex gap-4 pt-4">
                  <button
                    onClick={() => onNavigate('projects')}
                    className="group px-8 py-3 bg-white text-gray-900 rounded-lg font-medium hover:shadow-2xl transform hover:-translate-y-1 transition-all flex items-center gap-2"
                  >
                    View Projects
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="px-8 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-gray-900 transition-all"
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={handlePrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full transition-all group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white group-hover:-translate-x-1 transition-transform" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full transition-all group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true);
                setCurrentSlide(index);
                setTimeout(() => setIsAnimating(false), 700);
              }
            }}
            className={`h-1 rounded-full transition-all ${index === currentSlide
              ? 'w-12 bg-white'
              : 'w-8 bg-white/50 hover:bg-white/75'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
