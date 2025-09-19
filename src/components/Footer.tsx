import React from 'react';
import { Home, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Room Types', href: '#rooms' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
    { name: 'FAQ', href: '#faq' }
  ];

  const services = [
    { name: 'Room Booking', href: '#booking' },
    { name: 'Meal Plans', href: '#mess' },
    { name: 'Laundry Service', href: '#laundry' },
    { name: 'Transportation', href: '#transport' },
    { name: 'Study Facilities', href: '#study' },
    { name: 'Recreation', href: '#recreation' }
  ];

  const policies = [
    { name: 'Terms & Conditions', href: '#terms' },
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Refund Policy', href: '#refund' },
    { name: 'House Rules', href: '#rules' },
    { name: 'Safety Guidelines', href: '#safety' },
    { name: 'Guest Policy', href: '#guests' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-xl">
                <Home className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                DormSpace
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your perfect home away from home. We provide comfortable, modern living spaces 
              designed specifically for students, with premium amenities and a vibrant community.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">info@dormspace.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1" />
                <span className="text-gray-300">
                  123 University Avenue<br />
                  Education District<br />
                  City, State - 560001
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies & Social */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-6">Policies</h3>
              <ul className="space-y-3">
                {policies.map((policy) => (
                  <li key={policy.name}>
                    <a
                      href={policy.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block"
                    >
                      {policy.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-blue-600 p-3 rounded-lg transition-all duration-300 transform hover:scale-110"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-pink-600 p-3 rounded-lg transition-all duration-300 transform hover:scale-110"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-blue-400 p-3 rounded-lg transition-all duration-300 transform hover:scale-110"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-blue-700 p-3 rounded-lg transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 mt-12 pt-12">
          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              Get the latest news, events, and special offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
              />
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 DormSpace. All rights reserved.
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              Made with <Heart className="h-4 w-4 text-red-500 fill-current" /> for students by students
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;