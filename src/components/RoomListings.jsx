import React, { useState } from 'react';
import { Filter, Grid, List, Star, Users, Wifi, Car, Utensils } from 'lucide-react';

const RoomListings = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [filterType, setFilterType] = useState('all');
  const [sortBy, setSortBy] = useState('price');

  const rooms = [
    {
      id: 1,
      title: 'Deluxe Single Room',
      price: 8000,
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'single',
      capacity: 1,
      amenities: ['WiFi', 'AC', 'Study Desk', 'Wardrobe'],
      rating: 4.8,
      reviews: 124,
      available: true
    },
    {
      id: 2,
      title: 'Twin Sharing Room',
      price: 6000,
      image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'double',
      capacity: 2,
      amenities: ['WiFi', 'AC', 'Study Desk', 'Shared Bathroom'],
      rating: 4.6,
      reviews: 98,
      available: true
    },
    {
      id: 3,
      title: 'Premium Suite',
      price: 12000,
      image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'suite',
      capacity: 1,
      amenities: ['WiFi', 'AC', 'Private Bathroom', 'Balcony', 'Mini Fridge'],
      rating: 4.9,
      reviews: 156,
      available: false
    },
    {
      id: 4,
      title: 'Economy Double Room',
      price: 4500,
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'double',
      capacity: 2,
      amenities: ['WiFi', 'Fan', 'Study Desk'],
      rating: 4.3,
      reviews: 67,
      available: true
    },
    {
      id: 5,
      title: 'Luxury Single Room',
      price: 10000,
      image: 'https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'single',
      capacity: 1,
      amenities: ['WiFi', 'AC', 'Private Bathroom', 'Study Desk', 'Smart TV'],
      rating: 4.7,
      reviews: 89,
      available: true
    },
    {
      id: 6,
      title: 'Triple Sharing Room',
      price: 4000,
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'triple',
      capacity: 3,
      amenities: ['WiFi', 'Fan', 'Study Desk', 'Shared Bathroom'],
      rating: 4.2,
      reviews: 45,
      available: true
    }
  ];

  const filteredRooms = rooms
    .filter(room => filterType === 'all' || room.type === filterType)
    .sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price - b.price;
        case 'rating':
          return b.rating - a.rating;
        case 'name':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

  const getAmenityIcon = (amenity) => {
    switch (amenity.toLowerCase()) {
      case 'wifi':
        return <Wifi className="h-4 w-4" />;
      case 'ac':
        return <span className="text-sm">❄️</span>;
      default:
        return <span className="text-sm">✨</span>;
    }
  };

  return (
    <section id="rooms" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Find Your Perfect Room
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Choose from our variety of comfortable, well-equipped rooms designed to meet every student's needs and budget.
          </p>
        </div>

        {/* Filters and Controls */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-8 border border-gray-200 dark:border-gray-700">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex flex-wrap gap-4">
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Room Types</option>
                <option value="single">Single Rooms</option>
                <option value="double">Double Rooms</option>
                <option value="triple">Triple Rooms</option>
                <option value="suite">Suites</option>
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="price">Sort by Price</option>
                <option value="rating">Sort by Rating</option>
                <option value="name">Sort by Name</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Room Grid/List */}
        <div className={`${viewMode === 'grid' 
          ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' 
          : 'space-y-6'
        }`}>
          {filteredRooms.map((room) => (
            <div
              key={room.id}
              className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200 dark:border-gray-700 overflow-hidden ${
                viewMode === 'list' ? 'flex flex-col md:flex-row' : ''
              }`}
            >
              <div className={`relative ${viewMode === 'list' ? 'md:w-1/3' : ''}`}>
                <img
                  src={room.image}
                  alt={room.title}
                  className={`w-full object-cover ${viewMode === 'list' ? 'h-48 md:h-full' : 'h-48'}`}
                />
                <div className="absolute top-4 left-4">
                  {room.available ? (
                    <span className="px-3 py-1 bg-green-500 text-white text-sm font-medium rounded-full">
                      Available
                    </span>
                  ) : (
                    <span className="px-3 py-1 bg-red-500 text-white text-sm font-medium rounded-full">
                      Occupied
                    </span>
                  )}
                </div>
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 px-2 py-1 rounded-lg flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium">{room.rating}</span>
                </div>
              </div>

              <div className={`p-6 ${viewMode === 'list' ? 'md:w-2/3' : ''}`}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {room.title}
                  </h3>
                  <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                    <Users className="h-4 w-4" />
                    <span className="text-sm">{room.capacity}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {room.amenities.map((amenity, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                    >
                      {getAmenityIcon(amenity)}
                      {amenity}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                      ₹{room.price.toLocaleString()}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 ml-1">/month</span>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {room.reviews} reviews
                    </div>
                  </div>
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-105">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomListings;