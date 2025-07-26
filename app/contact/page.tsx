import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'contact | florianlammert',
  description: 'Get in touch with Florian Lammert for collaboration and inquiries.',
};

export default function ContactPage() {
    return (
        <div className="min-h-screen w-full bg-white">
          <div className="max-w-6xl mx-auto px-6 pt-4 pb-32">
            <h1 className="text-7xl md:text-7xl pt-4 font-bold text-left my-8">
              Contact
            </h1>
            
            {/* Main contact section */}
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">
                    Let's work together!
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    I'm always open to discussing new ideas, 
                    interesting projects and collaborations.
                  </p>
                </div>
                
                {/* Contact methods */}
                <div className="space-y-6">
                  <div className="group">
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
                      Email
                    </h3>
                    <a 
                      href="mailto:hello@florianlammert.com"
                      className="text-xl font-medium text-gray-900 hover:text-black transition-colors duration-200 group-hover:underline"
                    >
                      hello@florianlammert.com
                    </a>
                  </div>
                  
                  <div className="group">
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
                      GitHub
                    </h3>
                    <a 
                      href="https://github.com/lflorian"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-medium text-gray-900 hover:text-black transition-colors duration-200 group-hover:underline"
                    >
                      @lflorian
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Image section */}
              <div className="w-full md:w-auto">
                <div className="aspect-square bg-white rounded-3xl shadow-lg overflow-hidden max-w-md mx-auto">
                  <Image
                    src="/contact.jpg"
                    alt="Contact Florian Lammert"
                    width={600}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}