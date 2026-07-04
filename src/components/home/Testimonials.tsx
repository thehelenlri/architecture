import { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, TechCorp',
    content: 'ArchStudio transformed our office space into a modern, inspiring environment that perfectly reflects our company culture. Their attention to detail and innovative approach exceeded our expectations.',
    image: 'https://i.pinimg.com/736x/a3/d3/15/a3d315cb76787fb7f22d670e07cc0be0.jpg',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Homeowner',
    content: 'Working with ArchStudio on our dream home was an incredible experience. They listened to our needs and created a design that was both beautiful and functional. We could not be happier.',
    image: 'https://i.pinimg.com/736x/b8/35/16/b835167383cd3c677fdf7d0136522eb2.jpg',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Director, City Museum',
    content: 'The team at ArchStudio brought our vision for a contemporary museum space to life. Their creativity and professionalism throughout the project were outstanding.',
    image: 'https://i.pinimg.com/1200x/20/78/07/2078074b30c475dce1624ba1f2a30890.jpg',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-gray-900 dark:bg-black text-white transition-colors">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm text-gray-400 tracking-widest uppercase mb-2">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-light">
            What Our Clients Say
          </h2>
        </div>

        <div className="relative">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`transition-all duration-500 ${
                index === current
                  ? 'opacity-100 relative'
                  : 'opacity-0 absolute inset-0 pointer-events-none'
              }`}
            >
              <div className="text-center space-y-8">
                <Quote className="w-16 h-16 text-gray-700 dark:text-gray-800 mx-auto" />
                <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-100">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center justify-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div className="text-left">
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={handlePrev}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === current ? 'w-8 bg-white' : 'w-2 bg-white/30'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
