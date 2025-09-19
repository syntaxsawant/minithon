import React, { useState } from 'react';
import { Calendar, Clock, Star, Utensils, Leaf, Award } from 'lucide-react';

interface MealItem {
  name: string;
  type: 'veg' | 'non-veg' | 'vegan';
  rating: number;
}

interface DayMenu {
  day: string;
  date: string;
  breakfast: MealItem[];
  lunch: MealItem[];
  snacks: MealItem[];
  dinner: MealItem[];
}

const MessMenu: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState(0);

  const weeklyMenu: DayMenu[] = [
    {
      day: 'Monday',
      date: '2024-11-18',
      breakfast: [
        { name: 'Idli Sambhar', type: 'veg', rating: 4.5 },
        { name: 'Coconut Chutney', type: 'veg', rating: 4.2 },
        { name: 'Masala Tea', type: 'veg', rating: 4.8 }
      ],
      lunch: [
        { name: 'Jeera Rice', type: 'veg', rating: 4.3 },
        { name: 'Dal Tadka', type: 'veg', rating: 4.6 },
        { name: 'Chicken Curry', type: 'non-veg', rating: 4.7 },
        { name: 'Mixed Vegetable', type: 'veg', rating: 4.1 },
        { name: 'Chapati', type: 'veg', rating: 4.4 }
      ],
      snacks: [
        { name: 'Samosa', type: 'veg', rating: 4.5 },
        { name: 'Green Chutney', type: 'veg', rating: 4.2 }
      ],
      dinner: [
        { name: 'Vegetable Biryani', type: 'veg', rating: 4.8 },
        { name: 'Raita', type: 'veg', rating: 4.3 },
        { name: 'Pickle', type: 'veg', rating: 4.0 }
      ]
    },
    {
      day: 'Tuesday',
      date: '2024-11-19',
      breakfast: [
        { name: 'Aloo Paratha', type: 'veg', rating: 4.7 },
        { name: 'Curd', type: 'veg', rating: 4.4 },
        { name: 'Coffee', type: 'veg', rating: 4.6 }
      ],
      lunch: [
        { name: 'Steamed Rice', type: 'veg', rating: 4.2 },
        { name: 'Rajma Curry', type: 'veg', rating: 4.8 },
        { name: 'Fish Curry', type: 'non-veg', rating: 4.6 },
        { name: 'Cabbage Sabji', type: 'veg', rating: 4.0 },
        { name: 'Roti', type: 'veg', rating: 4.5 }
      ],
      snacks: [
        { name: 'Bread Pakora', type: 'veg', rating: 4.4 },
        { name: 'Tamarind Sauce', type: 'veg', rating: 4.1 }
      ],
      dinner: [
        { name: 'Paneer Butter Masala', type: 'veg', rating: 4.9 },
        { name: 'Naan', type: 'veg', rating: 4.6 },
        { name: 'Salad', type: 'veg', rating: 4.2 }
      ]
    },
    {
      day: 'Wednesday',
      date: '2024-11-20',
      breakfast: [
        { name: 'Upma', type: 'veg', rating: 4.3 },
        { name: 'Coconut Chutney', type: 'veg', rating: 4.2 },
        { name: 'Masala Tea', type: 'veg', rating: 4.8 }
      ],
      lunch: [
        { name: 'Lemon Rice', type: 'veg', rating: 4.4 },
        { name: 'Moong Dal', type: 'veg', rating: 4.5 },
        { name: 'Mutton Curry', type: 'non-veg', rating: 4.8 },
        { name: 'Bhindi Fry', type: 'veg', rating: 4.3 },
        { name: 'Chapati', type: 'veg', rating: 4.4 }
      ],
      snacks: [
        { name: 'Pani Puri', type: 'veg', rating: 4.7 },
        { name: 'Mint Water', type: 'veg', rating: 4.5 }
      ],
      dinner: [
        { name: 'Chole Bhature', type: 'veg', rating: 4.8 },
        { name: 'Onion Salad', type: 'veg', rating: 4.1 }
      ]
    },
    {
      day: 'Thursday',
      date: '2024-11-21',
      breakfast: [
        { name: 'Poha', type: 'veg', rating: 4.5 },
        { name: 'Jalebi', type: 'veg', rating: 4.6 },
        { name: 'Coffee', type: 'veg', rating: 4.6 }
      ],
      lunch: [
        { name: 'Vegetable Pulao', type: 'veg', rating: 4.6 },
        { name: 'Chana Dal', type: 'veg', rating: 4.4 },
        { name: 'Egg Curry', type: 'non-veg', rating: 4.5 },
        { name: 'Aloo Gobi', type: 'veg', rating: 4.2 },
        { name: 'Roti', type: 'veg', rating: 4.5 }
      ],
      snacks: [
        { name: 'Vada Pav', type: 'veg', rating: 4.6 },
        { name: 'Garlic Chutney', type: 'veg', rating: 4.3 }
      ],
      dinner: [
        { name: 'Dal Khichdi', type: 'veg', rating: 4.4 },
        { name: 'Ghee', type: 'veg', rating: 4.7 },
        { name: 'Pickle', type: 'veg', rating: 4.0 }
      ]
    },
    {
      day: 'Friday',
      date: '2024-11-22',
      breakfast: [
        { name: 'Dosa', type: 'veg', rating: 4.8 },
        { name: 'Sambhar', type: 'veg', rating: 4.5 },
        { name: 'Coconut Chutney', type: 'veg', rating: 4.2 },
        { name: 'Masala Tea', type: 'veg', rating: 4.8 }
      ],
      lunch: [
        { name: 'Biryani', type: 'non-veg', rating: 4.9 },
        { name: 'Boiled Egg', type: 'non-veg', rating: 4.3 },
        { name: 'Raita', type: 'veg', rating: 4.3 },
        { name: 'Pickle', type: 'veg', rating: 4.0 }
      ],
      snacks: [
        { name: 'Bhel Puri', type: 'veg', rating: 4.5 },
        { name: 'Green Chutney', type: 'veg', rating: 4.2 }
      ],
      dinner: [
        { name: 'Palak Paneer', type: 'veg', rating: 4.7 },
        { name: 'Jeera Rice', type: 'veg', rating: 4.3 },
        { name: 'Chapati', type: 'veg', rating: 4.4 }
      ]
    },
    {
      day: 'Saturday',
      date: '2024-11-23',
      breakfast: [
        { name: 'Chole Bhature', type: 'veg', rating: 4.8 },
        { name: 'Lassi', type: 'veg', rating: 4.6 }
      ],
      lunch: [
        { name: 'Punjabi Thali', type: 'veg', rating: 4.7 },
        { name: 'Chicken Tikka', type: 'non-veg', rating: 4.8 },
        { name: 'Naan', type: 'veg', rating: 4.6 },
        { name: 'Salad', type: 'veg', rating: 4.2 }
      ],
      snacks: [
        { name: 'Aloo Tikki', type: 'veg', rating: 4.5 },
        { name: 'Mint Chutney', type: 'veg', rating: 4.3 }
      ],
      dinner: [
        { name: 'Vegetable Fried Rice', type: 'veg', rating: 4.4 },
        { name: 'Manchurian', type: 'veg', rating: 4.3 }
      ]
    },
    {
      day: 'Sunday',
      date: '2024-11-24',
      breakfast: [
        { name: 'Special Breakfast', type: 'veg', rating: 4.9 },
        { name: 'Fresh Juice', type: 'veg', rating: 4.7 }
      ],
      lunch: [
        { name: 'Special Sunday Meal', type: 'non-veg', rating: 4.9 },
        { name: 'Ice Cream', type: 'veg', rating: 4.8 }
      ],
      snacks: [
        { name: 'Special Snacks', type: 'veg', rating: 4.6 }
      ],
      dinner: [
        { name: 'Continental Dinner', type: 'veg', rating: 4.7 }
      ]
    }
  ];

  const mealTimes = [
    { name: 'Breakfast', time: '7:00 AM - 10:00 AM', icon: '☀️' },
    { name: 'Lunch', time: '12:00 PM - 3:00 PM', icon: '🌞' },
    { name: 'Snacks', time: '4:30 PM - 6:30 PM', icon: '🍪' },
    { name: 'Dinner', time: '7:00 PM - 10:00 PM', icon: '🌙' }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'veg':
        return <Leaf className="h-4 w-4 text-green-500" />;
      case 'non-veg':
        return <span className="text-red-500 text-sm">🍖</span>;
      case 'vegan':
        return <span className="text-green-600 text-sm">🌱</span>;
      default:
        return null;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'veg':
        return 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800';
      case 'non-veg':
        return 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800';
      case 'vegan':
        return 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800';
      default:
        return 'bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300';
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-3 w-3 ${
          index < Math.floor(rating)
            ? 'text-yellow-500 fill-current'
            : index < rating
            ? 'text-yellow-500 fill-current opacity-50'
            : 'text-gray-300 dark:text-gray-600'
        }`}
      />
    ));
  };

  const currentMenu = weeklyMenu[selectedDay];

  return (
    <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Weekly Mess Menu
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Delicious, nutritious meals prepared with care. Check out what's cooking this week!
          </p>
        </div>

        {/* Meal Times Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {mealTimes.map((meal, index) => (
            <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 text-center border border-blue-100 dark:border-blue-800">
              <div className="text-3xl mb-3">{meal.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {meal.name}
              </h3>
              <div className="flex items-center justify-center gap-1 text-gray-600 dark:text-gray-400">
                <Clock className="h-4 w-4" />
                <span className="text-sm">{meal.time}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Day Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {weeklyMenu.map((menu, index) => (
            <button
              key={index}
              onClick={() => setSelectedDay(index)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                selectedDay === index
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              <div className="text-center">
                <div className="font-semibold">{menu.day}</div>
                <div className="text-xs opacity-75">{new Date(menu.date).getDate()}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Menu Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Breakfast */}
          <div className="bg-yellow-50 dark:bg-yellow-900/10 rounded-2xl p-6 border border-yellow-200 dark:border-yellow-800">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-yellow-100 dark:bg-yellow-900/30 p-2 rounded-lg">
                <span className="text-2xl">☀️</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Breakfast</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">7:00 AM - 10:00 AM</p>
              </div>
            </div>
            <div className="space-y-4">
              {currentMenu.breakfast.map((item, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900 dark:text-white">{item.name}</h4>
                    {getTypeIcon(item.type)}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getTypeColor(item.type)}`}>
                      {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                    </span>
                    <div className="flex items-center gap-1">
                      {renderStars(item.rating)}
                      <span className="text-xs text-gray-600 dark:text-gray-400 ml-1">
                        {item.rating}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lunch */}
          <div className="bg-orange-50 dark:bg-orange-900/10 rounded-2xl p-6 border border-orange-200 dark:border-orange-800">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-orange-100 dark:bg-orange-900/30 p-2 rounded-lg">
                <span className="text-2xl">🌞</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Lunch</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">12:00 PM - 3:00 PM</p>
              </div>
            </div>
            <div className="space-y-4">
              {currentMenu.lunch.map((item, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900 dark:text-white">{item.name}</h4>
                    {getTypeIcon(item.type)}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getTypeColor(item.type)}`}>
                      {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                    </span>
                    <div className="flex items-center gap-1">
                      {renderStars(item.rating)}
                      <span className="text-xs text-gray-600 dark:text-gray-400 ml-1">
                        {item.rating}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Snacks */}
          <div className="bg-green-50 dark:bg-green-900/10 rounded-2xl p-6 border border-green-200 dark:border-green-800">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                <span className="text-2xl">🍪</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Snacks</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">4:30 PM - 6:30 PM</p>
              </div>
            </div>
            <div className="space-y-4">
              {currentMenu.snacks.map((item, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900 dark:text-white">{item.name}</h4>
                    {getTypeIcon(item.type)}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getTypeColor(item.type)}`}>
                      {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                    </span>
                    <div className="flex items-center gap-1">
                      {renderStars(item.rating)}
                      <span className="text-xs text-gray-600 dark:text-gray-400 ml-1">
                        {item.rating}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dinner */}
          <div className="bg-purple-50 dark:bg-purple-900/10 rounded-2xl p-6 border border-purple-200 dark:border-purple-800">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-lg">
                <span className="text-2xl">🌙</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Dinner</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">7:00 PM - 10:00 PM</p>
              </div>
            </div>
            <div className="space-y-4">
              {currentMenu.dinner.map((item, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900 dark:text-white">{item.name}</h4>
                    {getTypeIcon(item.type)}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getTypeColor(item.type)}`}>
                      {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                    </span>
                    <div className="flex items-center gap-1">
                      {renderStars(item.rating)}
                      <span className="text-xs text-gray-600 dark:text-gray-400 ml-1">
                        {item.rating}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl p-8 text-center">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Utensils className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Hygienic Kitchen
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Our kitchen maintains the highest standards of hygiene and cleanliness.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-2xl p-8 text-center">
            <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Leaf className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Fresh Ingredients
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              We use only fresh, locally sourced ingredients for all our meals.
            </p>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 rounded-2xl p-8 text-center">
            <div className="bg-yellow-100 dark:bg-yellow-900/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Quality Assured
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              All meals are prepared under strict quality control measures.
            </p>
          </div>
        </div>

        {/* Feedback Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Rate Today's Menu</h3>
          <p className="text-lg mb-6">
            Your feedback helps us improve our food quality and service.
          </p>
          <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300">
            Submit Feedback
          </button>
        </div>
      </div>
    </section>
  );
};

export default MessMenu;