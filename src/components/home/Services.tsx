import { Building2, Lightbulb, Ruler, TreePine } from 'lucide-react';

const services = [
  {
    Icon: Building2,
    title: 'Architecture Design',
    description: 'Innovative architectural solutions tailored to your vision and needs.',
  },
  {
    Icon: Ruler,
    title: 'Interior Planning',
    description: 'Creating functional and beautiful interior spaces that inspire.',
  },
  {
    Icon: TreePine,
    title: 'Landscape Architecture',
    description: 'Harmonizing built environments with natural landscapes.',
  },
  {
    Icon: Lightbulb,
    title: 'Design Consultation',
    description: 'Expert guidance from concept to completion of your project.',
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm text-gray-600 dark:text-gray-400 tracking-widest uppercase mb-2">
            What We Do
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We offer comprehensive architectural services to bring your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:bg-gray-900 dark:hover:bg-white hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-900 dark:from-slate-200 dark:to-slate-400 group-hover:from-white group-hover:to-gray-100 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-all">
                <service.Icon className="w-8 h-8 text-white dark:text-gray-900 group-hover:text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-white dark:group-hover:text-gray-900 mb-3 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-300 dark:group-hover:text-gray-700 transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
