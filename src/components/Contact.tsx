import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            Visit Us
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            We'd love to have you as our guest
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-amber-600 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-1">Location</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  123 abc colony<br />
                  Foodie District<br />
                  Hyderabad, TG 50001
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-amber-600 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-1">Hours</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Monday - Friday: 11:30 AM - 10:00 PM<br />
                  Saturday - Sunday: 10:00 AM - 11:00 PM
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-amber-600 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-1">Phone</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  (+91) 9988774455
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-amber-600 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-1">Email</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  reservations@savore.com
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-gray-900 dark:text-white mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {[
                  { icon: Instagram, link: 'https://www.instagram.com/' },
                  { icon: Facebook, link: 'https://www.facebook.com/' },
                  { icon: Twitter, link: 'https://x.com/' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 
                      hover:bg-amber-100 dark:hover:bg-amber-900 transition-colors duration-300"
                  >
                    <social.icon className="w-6 h-6 text-amber-600" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="h-[400px] rounded-lg overflow-hidden">
            <iframe
              title="Restaurant Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4401.207616840387!2d78.4080455!3d17.4123487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7:0xae93b78392bafbc2!2sHyderabad,+Telangana!5e0!3m2!1sen!2sin!4v1646822092259!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}