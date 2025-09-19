import React, { useState } from 'react';
import { ChevronDown, Search, HelpCircle } from 'lucide-react';

interface FAQItem {
  id: number;
  category: string;
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([1]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const faqItems: FAQItem[] = [
    {
      id: 1,
      category: 'general',
      question: 'What documents are required for admission?',
      answer: 'You need to provide a valid ID proof (Aadhaar/Passport), admission letter from your institution, 2 passport-size photographs, and a security deposit. Additional documents may be required based on your specific situation.'
    },
    {
      id: 2,
      category: 'payment',
      question: 'What payment methods do you accept?',
      answer: 'We accept cash, bank transfers, UPI payments, credit/debit cards, and online banking. Monthly rent can be paid in advance, and we also offer semester-wise payment options with discounts.'
    },
    {
      id: 3,
      category: 'rules',
      question: 'What are the visiting hours and guest policies?',
      answer: 'Guests are allowed between 9 AM to 9 PM with prior registration at the reception. Overnight guests require special permission and must be registered 24 hours in advance. All visitors must provide valid ID proof.'
    },
    {
      id: 4,
      category: 'facilities',
      question: 'Is Wi-Fi available throughout the dormitory?',
      answer: 'Yes, we provide high-speed Wi-Fi (100+ Mbps) throughout the dormitory including all rooms and common areas. The connection is available 24/7 with minimal downtime for maintenance.'
    },
    {
      id: 5,
      category: 'payment',
      question: 'Is there a security deposit? Is it refundable?',
      answer: 'Yes, there is a refundable security deposit equivalent to one month\'s rent. It will be refunded within 30 days of checkout after deducting any damages or pending dues.'
    },
    {
      id: 6,
      category: 'facilities',
      question: 'Are meals included in the rent?',
      answer: 'Meals are available at our in-house mess facility for an additional cost. We offer various meal plans ranging from ₹3,000 to ₹5,000 per month. The mess serves vegetarian and non-vegetarian options.'
    },
    {
      id: 7,
      category: 'rules',
      question: 'What are the curfew timings?',
      answer: 'The main gate closes at 11 PM and opens at 6 AM. Late entries require prior permission and a valid reason. Students with genuine academic or emergency reasons can get special passes.'
    },
    {
      id: 8,
      category: 'general',
      question: 'Can I change rooms after admission?',
      answer: 'Room changes are possible based on availability and valid reasons. There may be a nominal processing fee for room changes. Priority is given to students with genuine academic or medical requirements.'
    },
    {
      id: 9,
      category: 'facilities',
      question: 'Is laundry service available?',
      answer: 'Yes, we have self-service washing machines and dryers available 24/7. There\'s also a professional laundry service for dry cleaning and ironing at reasonable rates.'
    },
    {
      id: 10,
      category: 'rules',
      question: 'Are pets allowed in the dormitory?',
      answer: 'Pets are generally not allowed in the dormitory due to health and safety regulations. However, service animals are permitted with proper documentation and prior approval.'
    },
    {
      id: 11,
      category: 'payment',
      question: 'What happens if I want to vacate early?',
      answer: 'Early vacation requires 30 days prior notice. The security deposit will be refunded after adjusting any pending dues. However, monthly rent is non-refundable for the current month.'
    },
    {
      id: 12,
      category: 'facilities',
      question: 'Is parking available for vehicles?',
      answer: 'Yes, we provide covered parking for both two-wheelers and four-wheelers. Two-wheeler parking is free, while four-wheeler parking has a nominal monthly charge of ₹500.'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'general', label: 'General' },
    { value: 'payment', label: 'Payment & Fees' },
    { value: 'rules', label: 'Rules & Policies' },
    { value: 'facilities', label: 'Facilities & Services' }
  ];

  const filteredFAQs = faqItems.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Got questions? We've got answers! Find everything you need to know about living at DormSpace.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 mb-12">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
            >
              {categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* FAQ Items */}
        {filteredFAQs.length > 0 ? (
          <div className="space-y-4">
            {filteredFAQs.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset rounded-2xl"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-8">
                      {item.question}
                    </h3>
                    <ChevronDown
                      className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
                        openItems.includes(item.id) ? 'transform rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>
                {openItems.includes(item.id) && (
                  <div className="px-6 pb-5">
                    <div className="pt-2 border-t border-gray-100 dark:border-gray-700">
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <HelpCircle className="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-500 dark:text-gray-400 mb-2">
              No FAQs Found
            </h3>
            <p className="text-gray-400 dark:text-gray-500">
              Try adjusting your search terms or category filter.
            </p>
          </div>
        )}

        {/* Still Have Questions CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
          <p className="text-lg mb-6">
            Can't find what you're looking for? Our friendly staff is here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300"
            >
              Contact Us
            </a>
            <a
              href="tel:+919876543210"
              className="inline-block bg-white/10 border border-white/20 text-white font-semibold px-8 py-3 rounded-full hover:bg-white/20 transition-colors duration-300"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;