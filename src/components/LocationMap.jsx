import React from 'react';
import { MapPin, Bus, Train, Car, Clock } from 'lucide-react';

const LocationMap = () => {
  const nearbyPlaces = [
    {
      name: 'University Campus',
      distance: '0.5 km',
      time: '5 min walk',
      icon: '🎓'
    },
    {
      name: 'Central Library',
      distance: '0.8 km',
      time: '8 min walk',
      icon: '📚'
    },
    {
      name: 'Shopping Mall',
      distance: '1.2 km',
      time: '12 min walk',
      icon: '🛍️'
    },
    {
      name: 'Metro Station',
      distance: '1.5 km',
      time: '15 min walk',
      icon: '🚇'
    },
    {
      name: 'Hospital',
      distance: '2.0 km',
      time: '5 min drive',
      icon: '🏥'
    },
    {
      name: 'Airport',
      distance: '25 km',
      time: '45 min drive',
      icon: '✈️'
    }
  ];

  const transportOptions = [
    {
      type: 'Bus',
      icon: <Bus className="h-6 w-6" />,
      routes: ['Route 45', 'Route 67', 'Route 89'],
      frequency: 'Every 10 minutes'
    },
    {
      type: 'Metro',
      icon: <Train className="h-6 w-6" />,
      routes: ['Blue Line', 'Green Line'],
      frequency: 'Every 8 minutes'
    },
    {
      type: 'Auto/Taxi',
      icon: <Car className="h-6 w-6" />,
      routes: ['Available 24/7'],
      frequency: 'On demand'
    }
  ];

  return (
    <section id="location" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Prime Location
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Strategically located near the university campus with excellent connectivity and easy access to all amenities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Map */}
          <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg">
            <div className="aspect-w-16 aspect-h-12 h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.854267068709!2d77.59369331482146!3d12.917001190898989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1583c8c35e3b%3A0x5e9d4b67c8c1e3e3!2sBangalore%20University!5e0!3m2!1sen!2sin!4v1629794729405!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dormitory Location"
                className="rounded-2xl"
              ></iframe>
            </div>
          </div>

          {/* Address and Directions */}
          <div className="space-y-8">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Our Address
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    123 University Avenue<br />
                    Education District<br />
                    Near Central Library<br />
                    City, State - 560001<br />
                    India
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Getting Here
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Car className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Ample parking available for visitors
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Train className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700 dark:text-gray-300">
                    15-minute walk from Metro Station
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Bus className="h-5 w-5 text-purple-600" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Multiple bus routes available
                  </span>
                </div>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105">
              Get Directions
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Nearby Places */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Nearby Landmarks
            </h3>
            <div className="space-y-4">
              {nearbyPlaces.map((place, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">{place.icon}</span>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">
                        {place.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {place.distance}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm font-medium">{place.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Transport Options */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Transport Options
            </h3>
            <div className="space-y-6">
              {transportOptions.map((transport, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg text-blue-600 dark:text-blue-400">
                      {transport.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {transport.type}
                    </h4>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        Routes: 
                      </span>
                      <span className="text-sm text-gray-900 dark:text-white ml-1">
                        {transport.routes.join(', ')}
                      </span>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        Frequency: 
                      </span>
                      <span className="text-sm text-gray-900 dark:text-white ml-1">
                        {transport.frequency}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;