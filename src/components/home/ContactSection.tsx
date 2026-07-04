import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

interface ContactSectionProps {
  onNavigate: (page: 'contact') => void;
}

export default function ContactSection({ onNavigate }: ContactSectionProps) {
  return (
    <section className="py-24 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 tracking-widest uppercase mb-2">
                Get In Touch
              </p>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6">
                Let's Start Your Project
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Ready to bring your architectural vision to life? Contact us today
                to discuss your project and discover how we can help.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  Icon: Phone,
                  label: 'phone',
                  value: '+1 (555) 123-4567',
                },
                {
                  Icon: Mail,
                  label: 'Email',
                  value: 'hello@archstudio.com',
                },
                {
                  Icon: MapPin,
                  label: 'Address',
                  value: '123 Design Avenue, New York, NY 10001',
                },
              ].map((contact, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <div className="w-12 h-12 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <contact.Icon className="w-6 h-6 text-white dark:text-gray-900" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                      {contact.label}
                    </p>
                    <p className="text-gray-900 dark:text-white font-medium">
                      {contact.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => onNavigate('contact')}
              className="group inline-flex items-center gap-2 px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium hover:shadow-xl transform hover:-translate-y-1 transition-all"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
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
    </section>
  );
}
