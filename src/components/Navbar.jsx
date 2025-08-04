import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Home, Menu as MenuIcon, QrCode, Menu as HamburgerMenu, X } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useTable } from '../contexts/TableContext';

const Navbar = () => {
  const { getTotalItems } = useCart();
  const { tableNumber } = useTable();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="text-3xl lg:text-4xl group-hover:scale-110 transition-transform duration-200">🍽️</div>
            <div className="hidden sm:block">
              <span className="text-xl lg:text-2xl font-bold text-gradient">Restaurant QR</span>
              <p className="text-xs text-gray-500 -mt-1">Digital Menu & Ordering</p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link
              to="/"
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                isActive('/') 
                  ? 'text-primary-600 bg-primary-50 shadow-sm' 
                  : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
              }`}
            >
              <Home size={18} />
              <span>Home</span>
            </Link>
            
            <Link
              to="/menu"
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                isActive('/menu') 
                  ? 'text-primary-600 bg-primary-50 shadow-sm' 
                  : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
              }`}
            >
              <MenuIcon size={18} />
              <span>Menu</span>
            </Link>

            <Link
              to="/admin/qr"
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                isActive('/admin/qr') 
                  ? 'text-primary-600 bg-primary-50 shadow-sm' 
                  : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
              }`}
            >
              <QrCode size={18} />
              <span>QR Generator</span>
            </Link>
          </div>

          {/* Cart and Table Info */}
          <div className="flex items-center space-x-3 lg:space-x-4">
            {tableNumber && (
              <div className="hidden sm:flex items-center space-x-2 bg-gradient-to-r from-primary-100 to-primary-200 text-primary-700 px-3 py-1.5 rounded-full text-sm font-medium shadow-sm">
                <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
                <span>Table {tableNumber}</span>
              </div>
            )}
            
            <Link
              to="/cart"
              className="relative flex items-center space-x-2 px-3 py-2 rounded-xl text-sm font-medium text-gray-600 hover:text-primary-600 hover:bg-gray-50 transition-all duration-200 group"
            >
              <ShoppingCart size={20} className="group-hover:scale-110 transition-transform duration-200" />
              <span className="hidden sm:inline">Cart</span>
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold shadow-lg animate-bounce">
                  {getTotalItems()}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X size={24} /> : <HamburgerMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100 animate-slide-up">
            <div className="space-y-2">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`fl