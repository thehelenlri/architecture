import { ArrowRight } from 'lucide-react';

interface FeaturedProjectsProps {
  onNavigate: (page: 'projects') => void;
}

const projects = [
  {
    id: 1,
    title: 'Skyline Tower',
    category: 'Commercial',
    location: 'New York, USA',
    image: 'https://i.pinimg.com/736x/16/11/46/16114602b5e3c8922ab3690c38f1b0bb.jpg',
  },
  {
    id: 2,
    title: 'Ocean Villa',
    category: 'Residential',
    location: 'Miami, USA',
    image: 'https://i.pinimg.com/1200x/bd/b4/69/bdb4695092ce489b0e5f9879bb707f7e.jpg',
  },
  {
    id: 3,
    title: 'Green Office Complex',
    category: 'Sustainable',
    location: 'Seattle, USA',
    image: 'https://i.pinimg.com/736x/36/14/4e/36144e128575b1e6086d55a0a7cfb334.jpg',
  },
  {
    id: 4,
    title: 'Mountain Retreat',
    category: 'Residential',
    location: 'Aspen, USA',
    image: 'https://i.pinimg.com/736x/ae/93/e1/ae93e10c54f66fb72744a9daf16c6ad3.jpg',
  },
  {
    id: 5,
    title: 'Urban Museum',
    category: 'Cultural',
    location: 'Los Angeles, USA',
    image: 'https://i.pinimg.com/736x/14/e7/bd/14e7bd2cd6fe2dcbf2d6f196428478e1.jpg',
  },
  {
    id: 6,
    title: 'Modern Loft',
    category: 'Residential',
    location: 'Chicago, USA',
    image: 'https://i.pinimg.com/736x/4d/fb/68/4dfb685bcbdeae70d6a9fee1e9863b07.jpg',
  },
];

export default function FeaturedProjects({ onNavigate }: FeaturedProjectsProps) {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400 tracking-widest uppercase mb-2">
              Our Work
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white">
              Featured Projects
            </h2>
          </div>
          <button
            onClick={() => onNavigate('projects')}
            className="group hidden md:flex items-center gap-2 text-gray-900 dark:text-white font-medium hover:gap-4 transition-all"
          >
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group cursor-pointer"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-4">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-light text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-white/80 text-sm">{project.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => onNavigate('projects')}
          className="md:hidden mt-12 w-full py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium flex items-center justify-center gap-2"
        >
          View All Projects
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
