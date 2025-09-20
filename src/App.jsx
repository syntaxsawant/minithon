import React, { useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RoomListings from './components/RoomListings';
import PhotoGallery from './components/PhotoGallery';
import ContactForm from './components/ContactForm';
import LocationMap from './components/LocationMap';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Notices from './components/Notices';
import MessMenu from './components/MessMenu';
import EventCalendar from './components/EventCalendar';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <Hero />
        <RoomListings />
        <PhotoGallery />
        <ContactForm />
        <LocationMap />
        <Testimonials />
        <FAQ />
        <Notices />
        <MessMenu />
        <EventCalendar />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;