import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen  bg-white dark:bg-gray-900 transition-colors">
      <div className="relative h-[100vh] bg-gradient-to-br from-gray-900 to-gray-700 dark:from-black dark:to-gray-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://i.pinimg.com/1200x/4b/4b/dc/4b4bdcc6828e218633c42e40d428e491.jpg"
            alt="Contact"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 text-center text-white space-y-4 px-6">
          <h1 className="text-5xl md:text-6xl font-light">Contact Us</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Let's discuss your next architectural project
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {[
            {
              Icon: Phone,
              title: 'Phone',
              content: '+1 (555) 123-4567',
              subtext: 'Mon-Fri 9am-6pm EST',
            },
            {
              Icon: Mail,
              title: 'Email',
              content: 'hello@archstudio.com',
              subtext: 'We reply within 24 hours',
            },
            {
              Icon: MapPin,
              title: 'Office',
              content: '123 Design Avenue',
              subtext: 'New York, NY 10001',
            },
          ].map((contact, index) => (
            <div
              key={index}
              className="text-center space-y-4"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-900 dark:from-slate-200 dark:to-slate-400 rounded-2xl flex items-center justify-center mx-auto">
                <contact.Icon className="w-8 h-8 text-white dark:text-gray-900" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {contact.title}
                </h3>
                <p className="text-gray-900 dark:text-white font-medium">
                  {contact.content}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {contact.subtext}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-4">
                Send Us a Message
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Fill out the form and we'll get back to you as soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-900 dark:text-white mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-gray-400 dark:focus:border-gray-500 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-900 dark:text-white mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-gray-400 dark:focus:border-gray-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-900 dark:text-white mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-gray-400 dark:focus:border-gray-500 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-900 dark:text-white mb-2"
                  >
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-gray-400 dark:focus:border-gray-500 transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="project">New Project</option>
                    <option value="consultation">Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-900 dark:text-white mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-gray-400 dark:focus:border-gray-500 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium hover:shadow-xl transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>

          <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/search/Immeuble+DE+LA+PHARMACIE+20145+SARI+SOLENZARA/@41.8650727,9.3457485,13z?entry=ttu&g_ep=EgoyMDI1MTEwNS4wIKXMDSoASAFQAw%3D%3D"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
