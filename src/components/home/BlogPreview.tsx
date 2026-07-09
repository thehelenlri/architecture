import { ArrowRight, Calendar } from 'lucide-react';

interface BlogPreviewProps {
  onNavigate: (page: 'blog') => void;
}

const posts = [
  {
    id: 1,
    title: 'The Future of Sustainable Architecture',
    excerpt: 'Exploring eco-friendly design principles that are shaping the future of our built environment.',
    date: 'Nov 5, 2026',
    image: 'https://i.pinimg.com/736x/90/5f/a2/905fa23c6f31a123d5d8c31d38db73ce.jpg',
    category: 'Sustainability',
  },
  {
    id: 2,
    title: 'Minimalism in Modern Design',
    excerpt: 'How less can be more when it comes to creating impactful architectural spaces.',
    date: 'Nov 2, 2026',
    image: 'https://i.pinimg.com/1200x/31/f9/92/31f992b54a0dd68cc095393fc3f7f058.jpg',
    category: 'Design',
  },
  {
    id: 3,
    title: 'Urban Planning for Tomorrow',
    excerpt: 'Innovative approaches to creating livable cities that prioritize people and nature.',
    date: 'Oct 28, 2026',
    image: 'https://i.pinimg.com/736x/14/bd/e3/14bde3d948159278c2c7c155e1e54938.jpg',
    category: 'Urban',
  },
];

export default function BlogPreview({ onNavigate }: BlogPreviewProps) {
  return (
    <section className="py-24 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400 tracking-widest uppercase mb-2">
              Latest Insights
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white">
              From Our Blog
            </h2>
          </div>
          <button
            onClick={() => onNavigate('blog')}
            className="group hidden md:flex items-center gap-2 text-gray-900 dark:text-white font-medium hover:gap-4 transition-all"
          >
            Read All Articles
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={post.id}
              className="group cursor-pointer"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-4">
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
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
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

        <button
          onClick={() => onNavigate('blog')}
          className="md:hidden mt-12 w-full py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium flex items-center justify-center gap-2"
        >
          Read All Articles
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
