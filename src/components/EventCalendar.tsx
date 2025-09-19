import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, ChevronLeft, ChevronRight, Plus } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: 'cultural' | 'academic' | 'sports' | 'social';
  attendees: number;
  maxAttendees?: number;
  image: string;
}

const EventCalendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedCategory, setSelectedCategory] = useState('all');

  const events: Event[] = [
    {
      id: 1,
      title: 'Annual Cultural Fest - DormFest 2024',
      description: 'Join us for our biggest cultural celebration featuring dance, music, drama, and art competitions. Prizes worth ₹50,000 to be won!',
      date: '2024-11-25',
      time: '6:00 PM - 11:00 PM',
      location: 'Main Auditorium',
      category: 'cultural',
      attendees: 156,
      maxAttendees: 300,
      image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      title: 'Career Guidance Workshop',
      description: 'Interactive session with industry experts on career planning, resume building, and interview skills.',
      date: '2024-11-22',
      time: '2:00 PM - 5:00 PM',
      location: 'Conference Hall',
      category: 'academic',
      attendees: 89,
      maxAttendees: 100,
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      title: 'Inter-Floor Football Tournament',
      description: 'Exciting football matches between different floors. Come support your floor team!',
      date: '2024-11-24',
      time: '4:00 PM - 7:00 PM',
      location: 'Sports Ground',
      category: 'sports',
      attendees: 42,
      maxAttendees: 60,
      image: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 4,
      title: 'Movie Night - Popular Picks',
      description: 'Outdoor movie screening with popcorn and drinks. This week featuring action blockbusters!',
      date: '2024-11-23',
      time: '8:00 PM - 11:00 PM',
      location: 'Terrace Garden',
      category: 'social',
      attendees: 78,
      maxAttendees: 120,
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 5,
      title: 'Study Group - Mathematics',
      description: 'Collaborative study session for calculus and linear algebra. All levels welcome!',
      date: '2024-11-21',
      time: '7:00 PM - 9:00 PM',
      location: 'Study Hall',
      category: 'academic',
      attendees: 25,
      maxAttendees: 30,
      image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 6,
      title: 'Photography Exhibition',
      description: 'Showcase of amazing photography by our talented residents. Theme: "Campus Life"',
      date: '2024-11-26',
      time: '10:00 AM - 6:00 PM',
      location: 'Gallery Space',
      category: 'cultural',
      attendees: 67,
      image: 'https://images.pexels.com/photos/1263986/pexels-photo-1263986.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Events', color: 'bg-gray-500' },
    { value: 'cultural', label: 'Cultural', color: 'bg-purple-500' },
    { value: 'academic', label: 'Academic', color: 'bg-blue-500' },
    { value: 'sports', label: 'Sports', color: 'bg-green-500' },
    { value: 'social', label: 'Social', color: 'bg-pink-500' }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'cultural':
        return 'bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-800';
      case 'academic':
        return 'bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800';
      case 'sports':
        return 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300 border-green-200 dark:border-green-800';
      case 'social':
        return 'bg-pink-100 dark:bg-pink-900/20 text-pink-800 dark:text-pink-300 border-pink-200 dark:border-pink-800';
      default:
        return 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const isToday = (dateString: string) => {
    const today = new Date().toDateString();
    const eventDate = new Date(dateString).toDateString();
    return today === eventDate;
  };

  const isUpcoming = (dateString: string) => {
    const today = new Date();
    const eventDate = new Date(dateString);
    return eventDate > today;
  };

  const filteredEvents = selectedCategory === 'all' 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  const sortedEvents = [...filteredEvents].sort((a, b) => 
    new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Upcoming Events
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Stay connected with our vibrant community through exciting events, workshops, and activities.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === category.value
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
              }`}
            >
              <span className={`w-3 h-3 rounded-full ${category.color}`}></span>
              {category.label}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {sortedEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getCategoryColor(event.category)}`}>
                    {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                  </span>
                  {isToday(event.date) && (
                    <span className="px-3 py-1 bg-red-500 text-white text-sm font-medium rounded-full animate-pulse">
                      Today
                    </span>
                  )}
                  {isUpcoming(event.date) && !isToday(event.date) && (
                    <span className="px-3 py-1 bg-green-500 text-white text-sm font-medium rounded-full">
                      Upcoming
                    </span>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {event.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {event.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <Users className="h-4 w-4" />
                    <span className="text-sm">
                      {event.attendees} attending
                      {event.maxAttendees && ` / ${event.maxAttendees} max`}
                    </span>
                  </div>
                </div>

                {event.maxAttendees && (
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
                      <span>Registration</span>
                      <span>{event.attendees}/{event.maxAttendees}</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                        style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105">
                  {event.maxAttendees && event.attendees >= event.maxAttendees ? 'Full - Join Waitlist' : 'Register Now'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <Calendar className="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-500 dark:text-gray-400 mb-2">
              No Events Found
            </h3>
            <p className="text-gray-400 dark:text-gray-500">
              Try selecting a different category to see more events.
            </p>
          </div>
        )}

        {/* Event Suggestions */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Have an Event Idea?</h3>
          <p className="text-lg mb-6">
            We love hearing from our residents! Share your event ideas and help us make our community even better.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300">
              <Plus className="h-5 w-5" />
              Suggest an Event
            </button>
            <button className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white font-semibold px-8 py-3 rounded-full hover:bg-white/20 transition-colors duration-300">
              <Calendar className="h-5 w-5" />
              View Full Calendar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventCalendar;