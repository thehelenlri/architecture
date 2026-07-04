import { useEffect } from 'react';
import { Award, Users, Target, Heart } from 'lucide-react';

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      Icon: Target,
      title: 'Innovation',
      description: 'Pushing boundaries to create groundbreaking architectural solutions.',
    },
    {
      Icon: Heart,
      title: 'Sustainability',
      description: 'Committed to eco-friendly designs that respect our environment.',
    },
    {
      Icon: Award,
      title: 'Excellence',
      description: 'Delivering exceptional quality in every project we undertake.',
    },
    {
      Icon: Users,
      title: 'Collaboration',
      description: 'Working closely with clients to bring their vision to life.',
    },
  ];

  const team = [
    {
      name: 'David Anderson',
      role: 'Principal Architect',
      image: 'https://i.pinimg.com/736x/1e/39/ad/1e39ade3bd173b23dd683159e9b6387f.jpg',
    },
    {
      name: 'Lisa Martinez',
      role: 'Lead Designer',
      image: 'https://i.pinimg.com/736x/39/b5/09/39b5093a93348c70a68cfa1ab9d60dfd.jpg',
    },
    {
      name: 'James Wilson',
      role: 'Project Manager',
      image: 'https://i.pinimg.com/736x/d6/23/c3/d623c3326d716065f6af05f66e82b6ee.jpg',
    },
    {
      name: 'Sophie Brown',
      role: 'Sustainability Specialist',
      image: 'https://i.pinimg.com/736x/be/5b/79/be5b79b9421e125013162d6d3ac18e0b.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <div className="relative h-[100vh] bg-gradient-to-br from-gray-900 to-gray-700 dark:from-black dark:to-gray-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://i.pinimg.com/1200x/ff/d1/e5/ffd1e53016f61606cc39af894bd17411.jpg"
            alt="About us"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 text-center text-white space-y-4 px-6">
          <h1 className="text-5xl md:text-6xl font-light">About ArchStudio</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Shaping the future of architecture through innovation and design excellence
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-6">
            <h2 className="text-4xl font-light text-gray-900 dark:text-white">
              Our Story
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                Founded in 2000, ArchStudio began with a simple vision: to create
                architectural spaces that inspire and endure. Over two decades later,
                we've grown into one of the most respected architectural firms in the
                country.
              </p>
              <p>
                Our journey has been marked by numerous award-winning projects,
                from sustainable residential homes to iconic commercial structures.
                Each project reflects our commitment to excellence, innovation, and
                sustainability.
              </p> 
              <p>
                Today, our team of over 50 talented professionals continues to push
                the boundaries of architectural design, creating spaces that not only
                meet our clients' needs but exceed their wildest expectations.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://i.pinimg.com/1200x/c4/00/9f/c4009f8f14e12074370d0fbfed4e9c6c.jpg"
                alt="Our team"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-gradient-to-br from-slate-700 to-slate-900 dark:from-slate-200 dark:to-slate-400 rounded-2xl -z-0" />
          </div>
        </div>

        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 dark:text-white mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center space-y-4"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-slate-700 to-slate-900 dark:from-slate-200 dark:to-slate-400 rounded-2xl flex items-center justify-center mx-auto">
                  <value.Icon className="w-10 h-10 text-white dark:text-gray-900" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 dark:text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The talented individuals behind our success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group text-center"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="relative overflow-hidden rounded-2xl aspect-square mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1 ">
                  {member.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
