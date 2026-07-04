import { useState, useEffect } from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Sustainable Architecture',
    excerpt: 'Exploring eco-friendly design principles that are shaping the future of our built environment and creating spaces that work in harmony with nature.',
    content: 'Full article content here...',
    date: 'Nov 5, 2026',
    author: 'Sarah Mitchell',
    category: 'Sustainability',
    image: 'https://i.pinimg.com/736x/14/bd/e3/14bde3d948159278c2c7c155e1e54938.jpg',
  },
  {
    id: 2,
    title: 'Minimalism in Modern Design',
    excerpt: 'How less can be more when it comes to creating impactful architectural spaces that focus on essential elements and functionality.',
    content: 'Full article content here...',
    date: 'Nov 2, 2026',
    author: 'David Chen',
    category: 'Design',
    image: 'https://i.pinimg.com/736x/90/5f/a2/905fa23c6f31a123d5d8c31d38db73ce.jpg',
  },
  {
    id: 3,
    title: 'Urban Planning for Tomorrow',
    excerpt: 'Innovative approaches to creating livable cities that prioritize people, nature, and sustainable transportation systems.',
    content: 'Full article content here...',
    date: 'Oct 28, 2026',
    author: 'Emily Rodriguez',
    category: 'Urban',
    image: 'https://i.pinimg.com/1200x/31/f9/92/31f992b54a0dd68cc095393fc3f7f058.jpg',
  },
  {
    id: 4,
    title: 'The Rise of Smart Buildings',
    excerpt: 'How technology is transforming the way we design, build, and interact with our living and working spaces.',
    content: 'Full article content here...',
    date: 'Oct 25, 2026',
    author: 'Michael Thompson',
    category: 'Technology',
    image: 'https://i.pinimg.com/1200x/a1/ad/80/a1ad80cdf6b0224a7b261949dfe2158a.jpg',
  },
  {
    id: 5,
    title: 'Biophilic Design Principles',
    excerpt: 'Connecting people with nature through architectural design to improve wellbeing and productivity.',
    content: 'Full article content here...',
    date: 'Oct 20, 2026',
    author: 'Lisa Anderson',
    category: 'Design',
    image: 'https://i.pinimg.com/1200x/5d/d0/15/5dd015a8af66651e7a70907f5f082a1b.jpg',
  },
  {
    id: 6,
    title: 'Adaptive Reuse in Architecture',
    excerpt: 'Transforming old buildings into modern spaces while preserving historical character and reducing environmental impact.',
    content: 'Full article content here...',
    date: 'Oct 15, 2026',
    author: 'James Wilson',
    category: 'Sustainability',
    image: 'https://i.pinimg.com/736x/bb/13/37/bb1337ac47581f71484301c59aefbbb3.jpg',
  },
];

const categories = ['All', 'Design', 'Sustainability', 'Urban', 'Technology'];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredPosts(blogPosts);
    } else {
      setFilteredPosts(
        blogPosts.filter((post) => post.category === selectedCategory)
      );
    }
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="relative h-[100vh] bg-gradient-to-br from-gray-900 to-gray-700 dark:from-black dark:to-gray-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://i.pinimg.com/1200x/9a/8e/b9/9a8eb9bba5dede200d96d4be155aecec.jpg"
            alt="Blog"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 text-center text-white space-y-4 px-6">
          <h1 className="text-5xl md:text-6xl font-light">Our Blog</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Insights, ideas, and inspiration from the world of architecture
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-lg'
                  : 'bg-white dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <article
              key={post.id}
              className="group cursor-pointer bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-xs rounded-full font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 line-clamp-3">
                  {post.excerpt}
                </p>

                <button className="group/btn inline-flex items-center gap-2 text-gray-900 dark:text-white font-medium text-sm hover:gap-4 transition-all">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
