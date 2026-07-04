import { ArrowRight, Award, Users, Briefcase } from 'lucide-react';

interface AboutSectionProps {
  onNavigate: (page: 'about') => void;
}

export default function AboutSection({ onNavigate }: AboutSectionProps) {
  const stats = [
    { Icon: Briefcase, value: '200+', label: 'Projects Completed' },
    { Icon: Award, value: '25+', label: 'Awards Won' },
    { Icon: Users, value: '50+', label: 'Team Members' },
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://i.pinimg.com/1200x/f6/25/2f/f6252f4a388702cd8821cec2de3f688c.jpg"
                alt="Architecture studio"
                className="w-full h-[500px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gradient-to-br from-slate-700 to-slate-900 dark:from-slate-200 dark:to-slate-400 rounded-2xl -z-0" />
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 tracking-widest uppercase mb-2">
                About Us
              </p>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6">
                Crafting Spaces That Inspire
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  For over two decades, ArchStudio has been at the forefront of
                  architectural innovation, creating spaces that seamlessly blend
                  form and function.
                </p>
                <p>
                  Our team of award-winning architects and designers work
                  collaboratively to deliver projects that exceed expectations and
                  stand the test of time.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <div className="w-12 h-12 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center mx-auto mb-3">
                    <stat.Icon className="w-6 h-6 text-white dark:text-gray-900" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <button
              onClick={() => onNavigate('about')}
              className="group inline-flex items-center gap-2 px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium hover:shadow-xl transform hover:-translate-y-1 transition-all"
            >
              Learn More About Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
