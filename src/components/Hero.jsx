import React from 'react';
import { ArrowRight, Star, MapPin, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Your Perfect
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Home Away From Home
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            Discover comfortable, modern living spaces designed for students. 
            Premium amenities, unbeatable location, and a vibrant community await you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#rooms"
              className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Explore Rooms
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            
            <a
              href="#contact"
              className="group inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full backdrop-blur-md border border-white/20 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-full mx-auto mb-4">
                <Users className="h-6 w-6 text-blue-300" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">500+</div>
              <div className="text-gray-300">Happy Residents</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-center w-12 h-12 bg-yellow-500/20 rounded-full mx-auto mb-4">
                <Star className="h-6 w-6 text-yellow-300" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">4.8/5</div>
              <div className="text-gray-300">Average Rating</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-full mx-auto mb-4">
                <MapPin className="h-6 w-6 text-green-300" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">Prime</div>
              <div className="text-gray-300">Location</div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-400/20 rounded-full animate-bounce"></div>
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-yellow-400/20 rounded-full animate-ping"></div>
    </section>
  );
};

export default Hero;