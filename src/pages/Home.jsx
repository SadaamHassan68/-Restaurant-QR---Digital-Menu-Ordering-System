import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Clock, MapPin, Sparkles, Users, Zap, Award, Shield, Heart } from 'lucide-react';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center mb-16 lg:mb-20 animate-fade-in">
        <div className="relative mb-8">
          <div className="text-7xl lg:text-8xl mb-6 animate-bounce-gentle">🍽️</div>
          <div className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6">
            <Sparkles className="text-accent-500 w-8 h-8 lg:w-12 lg:h-12 animate-pulse" />
          </div>
          <div className="absolute -bottom-2 -left-4 lg:-bottom-4 lg:-left-6">
            <Heart className="text-error-400 w-6 h-6 lg:w-8 lg:h-8 animate-pulse" />
          </div>
        </div>
        <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-secondary-900 mb-6 leading-tight font-display">
          Welcome to <span className="text-gradient">Restaurant QR</span>
        </h1>
        <p className="text-lg lg:text-xl xl:text-2xl text-secondary-600 mb-10 max-w-4xl mx-auto leading-relaxed">
          Experience the future of dining with our sophisticated digital menu system. 
          Scan the QR code at your table to browse our curated menu and place your order seamlessly.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center mb-12">
          <Link
            to="/menu"
            className="btn-primary inline-flex items-center space-x-3 text-lg px-8 py-4"
          >
            <span>View Our Menu</span>
            <ArrowRight size={24} />
          </Link>
          <div className="text-secondary-500 text-sm lg:text-base bg-white/60 px-4 py-2 rounded-full backdrop-blur-sm border border-secondary-200">
            Or scan the QR code at your table
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">
          <div className="card-glass p-6 border border-white/30">
            <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
            <div className="text-secondary-600 font-medium">Happy Customers</div>
          </div>
          <div className="card-glass p-6 border border-white/30">
            <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
            <div className="text-secondary-600 font-medium">Menu Items</div>
          </div>
          <div className="card-glass p-6 border border-white/30">
            <div className="text-3xl font-bold text-primary-600 mb-2">4.8★</div>
            <div className="text-secondary-600 font-medium">Average Rating</div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mb-20">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center text-secondary-900 font-display">
          Why Choose Our Digital Menu?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          <div className="card card-hover p-8 text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <div className="text-3xl">📱</div>
            </div>
            <h3 className="text-xl lg:text-2xl font-semibold mb-4 text-secondary-900">Digital Menu</h3>
            <p className="text-secondary-600 leading-relaxed">
              Browse our complete menu with detailed descriptions, prices, and beautiful images. 
              No more waiting for paper menus!
            </p>
          </div>
          
          <div className="card card-hover p-8 text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-success-100 to-success-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Zap className="text-success-600 w-8 h-8" />
            </div>
            <h3 className="text-xl lg:text-2xl font-semibold mb-4 text-secondary-900">Quick Ordering</h3>
            <p className="text-secondary-600 leading-relaxed">
              Order directly from your table with our streamlined ordering process. 
              No more flagging down waiters!
            </p>
          </div>
          
          <div className="card card-hover p-8 text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-accent-100 to-accent-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Users className="text-accent-600 w-8 h-8" />
            </div>
            <h3 className="text-xl lg:text-2xl font-semibold mb-4 text-secondary-900">Table Service</h3>
            <p className="text-secondary-600 leading-relaxed">
              Your order is automatically assigned to your table for seamless service. 
              Our staff knows exactly where to deliver!
            </p>
          </div>
        </div>
      </div>

      {/* Restaurant Info */}
      <div className="card p-8 lg:p-12 mb-20">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center text-secondary-900 font-display">About Our Restaurant</h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-secondary-900">Our Story</h3>
            <p className="text-secondary-600 leading-relaxed text-lg">
              We pride ourselves on serving fresh, locally-sourced ingredients in a warm, 
              welcoming atmosphere. Our chefs create memorable dishes that combine traditional 
              flavors with modern culinary techniques.
            </p>
            <p className="text-secondary-600 leading-relaxed text-lg">
              From our signature starters to our decadent desserts, every dish is crafted 
              with care and attention to detail. We believe in creating not just meals, 
              but memorable dining experiences.
            </p>
            <div className="flex items-center space-x-4 pt-4">
              <div className="flex items-center space-x-2">
                <Star className="text-accent-500 w-5 h-5" />
                <span className="text-secondary-700 font-semibold">4.8/5</span>
              </div>
              <div className="text-secondary-400">•</div>
              <div className="text-secondary-700">500+ reviews</div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-secondary-900">Restaurant Details</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-secondary-50 rounded-xl border border-secondary-200">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                  <Clock className="text-primary-600 w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold text-secondary-900">Hours</div>
                  <div className="text-secondary-600">Mon-Sun: 11:00 AM - 10:00 PM</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-secondary-50 rounded-xl border border-secondary-200">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                  <MapPin className="text-primary-600 w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold text-secondary-900">Location</div>
                  <div className="text-secondary-600">123 Main Street, City, State 12345</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-secondary-50 rounded-xl border border-secondary-200">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                  <Award className="text-primary-600 w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold text-secondary-900">Awards</div>
                  <div className="text-secondary-600">Best Fine Dining 2023</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mb-16">
        <div className="gradient-bg rounded-3xl p-8 lg:p-12 border border-primary-100 shadow-professional">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-secondary-900 font-display">Ready to Order?</h3>
          <p className="text-secondary-600 mb-8 text-lg max-w-2xl mx-auto">
            Scan the QR code at your table or click below to view our menu and start your culinary journey.
          </p>
          <Link to="/menu" className="btn-primary inline-flex items-center space-x-3 text-lg px-8 py-4">
            <span>Browse Menu</span>
            <ArrowRight size={24} />
          </Link>
        </div>
      </div>

      {/* Footer Info */}
      <div className="text-center text-secondary-500 text-sm">
        <p>Experience the future of dining today! 🍽️✨</p>
      </div>
    </div>
  );
};

export default Home; 