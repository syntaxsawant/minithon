import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  room: string;
  rating: number;
  review: string;
  date: string;
  avatar: string;
}

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews: Review[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      room: 'Deluxe Single Room',
      rating: 5,
      review: 'Living at DormSpace has been an amazing experience! The facilities are top-notch, the staff is incredibly helpful, and the location is perfect for my studies. The WiFi is super fast, and my room is always clean and comfortable.',
      date: '2 weeks ago',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 2,
      name: 'Michael Chen',
      room: 'Twin Sharing Room',
      rating: 5,
      review: 'The best dormitory I have ever stayed in! Great community, excellent facilities, and very affordable. The study lounge is perfect for group projects, and the mess food is surprisingly good. Highly recommend to all students!',
      date: '1 month ago',
      avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 3,
      name: 'Priya Patel',
      room: 'Premium Suite',
      rating: 5,
      review: 'DormSpace exceeded all my expectations! The premium suite is spacious and well-furnished. The 24/7 security makes me feel safe, and the maintenance team is very responsive. The location is unbeatable - so close to campus!',
      date: '3 weeks ago',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 4,
      name: 'David Wilson',
      room: 'Economy Double Room',
      rating: 4,
      review: 'Great value for money! The economy room has everything I need as a student. The common areas are well-maintained, and there are plenty of opportunities to socialize with other residents. The laundry facility is convenient and affordable.',
      date: '1 week ago',
      avatar: 'https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 5,
      name: 'Emma Thompson',
      room: 'Luxury Single Room',
      rating: 5,
      review: 'Absolutely love my stay here! The luxury single room is perfect for focused studying. The fitness center is well-equipped, and the recreational areas are great for unwinding. The management team is professional and caring.',
      date: '2 months ago',
      avatar: 'https://images.pexels.com/photos/1036620/pexels-photo-1036620.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 6,
      name: 'Alex Rodriguez',
      room: 'Triple Sharing Room',
      rating: 4,
      review: 'Living with roommates has been a great experience! The triple sharing room is spacious enough for three people, and we have become great friends. The common kitchen is well-equipped, and the wifi never fails during online classes.',
      date: '5 days ago',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating
            ? 'text-yellow-500 fill-current'
            : 'text-gray-300 dark:text-gray-600'
        }`}
      />
    ));
  };

  const getVisibleReviews = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      result.push(reviews[(currentIndex + i) % reviews.length]);
    }
    return result;
  };

  return (
    <section id="reviews" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            What Our Residents Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our current and past residents have to say about their experience.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">4.8</div>
            <div className="text-gray-600 dark:text-gray-400">Average Rating</div>
            <div className="flex justify-center mt-2">
              {renderStars(5)}
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">500+</div>
            <div className="text-gray-600 dark:text-gray-400">Happy Residents</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">95%</div>
            <div className="text-gray-600 dark:text-gray-400">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">200+</div>
            <div className="text-gray-600 dark:text-gray-400">Reviews</div>
          </div>
        </div>

        {/* Reviews Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getVisibleReviews().map((review, index) => (
              <div
                key={review.id}
                className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700 transition-all duration-300 ${
                  index === 1 ? 'transform scale-105 shadow-xl' : ''
                }`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {review.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {review.room}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  {renderStars(review.rating)}
                  <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">
                    {review.date}
                  </span>
                </div>

                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-blue-200 dark:text-blue-800" />
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed pl-6">
                    {review.review}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevReview}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600 dark:text-gray-400" />
          </button>

          <button
            onClick={nextReview}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
          >
            <ChevronRight className="h-6 w-6 text-gray-600 dark:text-gray-400" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-12 gap-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-blue-600 dark:bg-blue-400'
                  : 'bg-gray-300 dark:bg-gray-600'
              }`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Join Our Community?</h3>
            <p className="text-lg mb-6">
              Experience the difference for yourself. Book a room tour today!
            </p>
            <a
              href="#contact"
              className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300"
            >
              Schedule a Visit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;