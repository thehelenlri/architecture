import { useState, useEffect } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';

const allProjects = [
  {
    id: 1,
    title: 'Skyline Tower',
    category: 'Commercial',
    location: 'New York, USA',
    year: '2023',
    image: 'https://i.pinimg.com/736x/16/11/46/16114602b5e3c8922ab3690c38f1b0bb.jpg',
  },
  {
    id: 2,
    title: 'Ocean Villa',
    category: 'Residential',
    location: 'Miami, USA',
    year: '2023',
    image: 'https://i.pinimg.com/1200x/bd/b4/69/bdb4695092ce489b0e5f9879bb707f7e.jpg',
  },
  {
    id: 3,
    title: 'Green Office Complex',
    category: 'Sustainable',
    location: 'Seattle, USA',
    year: '2023',
    image: 'https://i.pinimg.com/736x/36/14/4e/36144e128575b1e6086d55a0a7cfb334.jpg',
  },
  {
    id: 4,
    title: 'Mountain Retreat',
    category: 'Residential',
    location: 'Aspen, USA',
    year: '2022',
    image: 'https://i.pinimg.com/736x/ae/93/e1/ae93e10c54f66fb72744a9daf16c6ad3.jpg',
  },
  {
    id: 5,
    title: 'Urban Museum',
    category: 'Cultural',
    location: 'Los Angeles, USA',
    year: '2023',
    image: 'https://i.pinimg.com/736x/14/e7/bd/14e7bd2cd6fe2dcbf2d6f196428478e1.jpg',
  },
  {
    id: 6,
    title: 'Modern Loft',
    category: 'Residential',
    location: 'Chicago, USA',
    year: '2022',
    image: 'https://i.pinimg.com/736x/4d/fb/68/4dfb685bcbdeae70d6a9fee1e9863b07.jpg',
  },
  {
    id: 7,
    title: 'Tech Campus',
    category: 'Commercial',
    location: 'San Francisco, USA',
    year: '2023',
    image: 'https://i.pinimg.com/736x/8b/66/e9/8b66e9791002dd222de1909b54126783.jpg',
  },
  {
    id: 8,
    title: 'Eco Resort',
    category: 'Sustainable',
    location: 'Portland, USA',
    year: '2022',
    image: 'https://i.pinimg.com/736x/1f/d6/de/1fd6de07ffd4a362042e98ebb9e2ac54.jpg',
  },
  {
    id: 9,
    title: 'Art Gallery',
    category: 'Cultural',
    location: 'Boston, USA',
    year: '2023',
    image: 'https://i.pinimg.com/736x/39/8d/f7/398df7ecc3151f869b65f65f5fe56d80.jpg',
  },
];

const categories = ['All', 'Residential', 'Commercial', 'Sustainable', 'Cultural'];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProjects, setFilteredProjects] = useState(allProjects);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let filtered = allProjects;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter((project) => project.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProjects(filtered);
  }, [selectedCategory, searchTerm]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="relative h-[100vh] bg-gradient-to-br from-gray-900 to-gray-700 dark:from-black dark:to-gray-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://i.pinimg.com/736x/57/99/82/579982a29e3ce2ac94535395e2962848.jpg"
            alt="Projects"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 text-center text-white space-y-4 px-6">
          <h1 className="text-5xl md:text-6xl font-light">Our Projects</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Explore our portfolio of innovative architectural designs
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-12 space-y-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-gray-400 dark:focus:border-gray-500 transition-colors"
            />
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category
                  ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-lg'
                  : 'bg-white dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
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
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full">
                        {project.category}
                      </span>
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full">
                        {project.year}
                      </span>
                    </div>
                    <h3 className="text-2xl font-light text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-white/80 text-sm">{project.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <SlidersHorizontal className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-2">
              No projects found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try adjusting your filters or search term
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
