import React, { useState } from 'react';
import { Calendar, AlertTriangle, Info, CheckCircle, Clock } from 'lucide-react';

interface Notice {
  id: number;
  title: string;
  content: string;
  type: 'info' | 'warning' | 'success' | 'announcement';
  date: string;
  urgent: boolean;
}

const Notices: React.FC = () => {
  const [selectedType, setSelectedType] = useState('all');

  const notices: Notice[] = [
    {
      id: 1,
      title: 'Semester End Examination Schedule',
      content: 'The semester end examinations will begin from December 15th, 2024. Students are advised to prepare accordingly and maintain silence in study areas during examination period.',
      type: 'announcement',
      date: '2024-11-15',
      urgent: true
    },
    {
      id: 2,
      title: 'Maintenance Work - Water Supply',
      content: 'Water supply will be temporarily interrupted on Sunday, November 20th from 10:00 AM to 2:00 PM for essential maintenance work. Please store water in advance.',
      type: 'warning',
      date: '2024-11-18',
      urgent: true
    },
    {
      id: 3,
      title: 'New Gym Equipment Installed',
      content: 'We have added new cardio equipment and weight machines to our fitness center. All residents can now enjoy an enhanced workout experience with the latest equipment.',
      type: 'success',
      date: '2024-11-10',
      urgent: false
    },
    {
      id: 4,
      title: 'Library Hours Extended',
      content: 'Good news! Our library will now be open 24/7 during the examination period (Dec 1-31). Security personnel will be available throughout the night for your safety.',
      type: 'info',
      date: '2024-11-12',
      urgent: false
    },
    {
      id: 5,
      title: 'Cultural Fest Registration Open',
      content: 'Registration for the annual cultural festival "DormFest 2024" is now open. Various competitions including dance, music, drama, and art are available. Register before November 25th.',
      type: 'announcement',
      date: '2024-11-08',
      urgent: false
    },
    {
      id: 6,
      title: 'WiFi Upgrade Completed',
      content: 'We have successfully upgraded our WiFi infrastructure. All residents should now experience faster internet speeds up to 200 Mbps throughout the dormitory.',
      type: 'success',
      date: '2024-11-05',
      urgent: false
    },
    {
      id: 7,
      title: 'Room Allotment for Spring Semester',
      content: 'Room allotment for the upcoming spring semester will begin on December 1st. Current residents will get priority for renewal. Please submit your applications by November 30th.',
      type: 'info',
      date: '2024-11-14',
      urgent: true
    },
    {
      id: 8,
      title: 'Canteen Menu Update',
      content: 'New healthy food options have been added to our canteen menu including salads, smoothies, and gluten-free alternatives. Special diet requirements can be accommodated with advance notice.',
      type: 'announcement',
      date: '2024-11-07',
      urgent: false
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'warning':
        return <AlertTriangle className="h-6 w-6 text-yellow-500" />;
      case 'success':
        return <CheckCircle className="h-6 w-6 text-green-500" />;
      case 'info':
        return <Info className="h-6 w-6 text-blue-500" />;
      case 'announcement':
        return <Calendar className="h-6 w-6 text-purple-500" />;
      default:
        return <Info className="h-6 w-6 text-blue-500" />;
    }
  };

  const getTypeStyle = (type: string) => {
    switch (type) {
      case 'warning':
        return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800';
      case 'success':
        return 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800';
      case 'info':
        return 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800';
      case 'announcement':
        return 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800';
      default:
        return 'bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const filteredNotices = selectedType === 'all' 
    ? notices 
    : notices.filter(notice => notice.type === selectedType);

  const sortedNotices = [...filteredNotices].sort((a, b) => {
    // Sort by urgent first, then by date (newest first)
    if (a.urgent && !b.urgent) return -1;
    if (!a.urgent && b.urgent) return 1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Notices & Announcements
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Stay updated with the latest news, announcements, and important information from DormSpace management.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { value: 'all', label: 'All Notices', count: notices.length },
            { value: 'announcement', label: 'Announcements', count: notices.filter(n => n.type === 'announcement').length },
            { value: 'info', label: 'Information', count: notices.filter(n => n.type === 'info').length },
            { value: 'warning', label: 'Maintenance', count: notices.filter(n => n.type === 'warning').length },
            { value: 'success', label: 'Updates', count: notices.filter(n => n.type === 'success').length }
          ].map((filter) => (
            <button
              key={filter.value}
              onClick={() => setSelectedType(filter.value)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedType === filter.value
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>

        {/* Notices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sortedNotices.map((notice) => (
            <div
              key={notice.id}
              className={`relative rounded-2xl border p-6 transition-all duration-300 hover:shadow-lg ${getTypeStyle(notice.type)}`}
            >
              {notice.urgent && (
                <div className="absolute -top-2 -right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium animate-pulse">
                  Urgent
                </div>
              )}
              
              <div className="flex items-start gap-4">
                <div className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-sm">
                  {getIcon(notice.type)}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {notice.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    {notice.content}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <Clock className="h-4 w-4" />
                      {formatDate(notice.date)}
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium capitalize ${
                      notice.type === 'warning' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300' :
                      notice.type === 'success' ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' :
                      notice.type === 'info' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300' :
                      'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300'
                    }`}>
                      {notice.type}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredNotices.length === 0 && (
          <div className="text-center py-12">
            <Calendar className="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-500 dark:text-gray-400 mb-2">
              No Notices Found
            </h3>
            <p className="text-gray-400 dark:text-gray-500">
              Try selecting a different category to see more notices.
            </p>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Never Miss an Update</h3>
          <p className="text-lg mb-6">
            Subscribe to get important notices and announcements directly in your email.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Notices;