import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Clock, MapPin, Sparkles, Users, Zap } from 'lucide-react';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center mb-16 lg:mb-20 animate-fade-in">
        <div className="relative">
          <div className="text-7xl lg:text-8xl mb-6 animate-bounce">🍽️</div>
          <div className="absolute -top-2 -right-2 lg:-top-4 lg:-right-4">
            <Sparkles className="text-primary-400 w-8 h-8 lg:w-12 lg:h-12 animate-pulse" />
          </div>
        </div>
        <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-800 mb-6 leading-tight">
          Welcome to <span className="text-gradient">Restaurant QR</span>
        </h1>
        <p className="text-lg lg:text-xl xl:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
          Experience the future of dining with our digital menu system. 
          Scan the QR code at your table to browse our delicious menu and place your order seamlessly.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center mb-12">
          <Link
            to="/menu"
            className="btn-primary inline-flex items-center space-x-3 text-lg px-8 py-4"
          >
            <span>View Our Menu</span>
            <ArrowRight size={24} />
          </Link>
          <div className="text-gray-500 text-sm lg:text-base bg-white/50 px-4 py-2 rounded-full backdrop-blur-sm">
            Or scan the QR code at your table
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
            <div className="text-gray-600">Menu Items</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-primary-600 mb-2">4.8★</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mb-20">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-gray-800">
          Why Choose Our Digital Menu?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          <div className="card card-hover p-8 text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <div className="text-3xl">📱</div>
            </div>
            <h3 className="text-xl lg:text-2xl font-semibold mb-4 text-gray-800">Digital Menu</h3>
            <p className="text-gray-600 leading-relaxed">
              Browse our complete menu with detailed descriptions, prices, and beautiful images. 
              No more waiting for paper menus!
            </p>
          </div>
          
          <div className="card card-hover p-8 text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Zap className="text-white w-8 h-8" />
            </div>
            <h3 className="text-xl lg:text-2xl font-semibold mb-4 text-gray-800">Quick Ordering</h3>
            <p className="text-gray-600 leading-relaxed">
              Order directly from your table with our streamlined ordering process. 
              No more flagging down waiters!
            </p>
          </div>
          
          <div className="card card-hover p-8 text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Users className="text-white w-8 h-8" />
            </div>
            <h3 className="text-xl lg:text-2xl font-semibold mb-4 text-gray-800">Table Service</h3>
            <p className="text-gray-600 leading-relaxed">
              Your order is automatically assigned to your table for seamless service. 
              Our staff knows exactly where to deliver!
