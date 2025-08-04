import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Home, Menu as MenuIcon, QrCode, Menu as HamburgerMenu, X, Sparkles, Users, Phone, Info, Settings } from 'lucide-react';
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

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/menu', label: 'Menu', icon: MenuIcon },
    { path: '/services', label: 'Services', icon: Settings },
    { path: '/about', label: 'About', icon: Info },
    { path: '/contact', label: 'Contact', icon: Phone },
    { path: '/admin/qr', label: 'QR Generator', icon: QrCode },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-professional border-b border-secondary-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="text-3xl lg:text-4xl group-hover:scale-110 transition-transform duration-300">🍽️</div>
              <div className="absolute -top-1 -right-1">
                <Sparkles className="text-accent-500 w-4 h-4 lg:w-5 lg:h-5 animate-pulse" />
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl lg:text-2xl font-bold text-gradient font-display">Restaurant QR</span>
              <p className="text-xs text-secondary-500 -mt-1 font-medium">Digital Menu & Ordering</p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    isActive(item.path) 
                      ? 'text-primary-600 bg-primary-50 shadow-soft border border-primary-100' 
                      : 'text-secondary-600 hover:text-primary-600 hover:bg-primary-50 hover:border-primary-100 border border-transparent'
                  }`}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Cart and Table Info */}
          <div className="flex items-center space-x-3 lg:space-x-4">
            {tableNumber && (
              <div className="hidden sm:flex items-center space-x-2 bg-gradient-to-r from-success-100 to-success-200 text-success-700 px-3 py-1.5 rounded-full text-sm font-semibold shadow-soft border border-success-200">
                <div className="w-2 h-2 bg-success-500 rounded-full animate-pulse"></div>
                <span>Table {tableNumber}</span>
              </div>
            )}
            
            <Link
              to="/cart"
              className="relative flex items-center space-x-2 px-3 py-2 rounded-xl text-sm font-semibold text-secondary-600 hover:text-primary-600 hover:bg-primary-50 transition-all duration-300 group border border-transparent hover:border-primary-100"
            >
              <ShoppingCart size={20} className="group-hover:scale-110 transition-transform duration-300" />
              <span className="hidden sm:inline">Cart</span>
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-error-500 to-error-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold shadow-professional animate-bounce-gentle">
                  {getTotalItems()}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-xl hover:bg-secondary-100 transition-all duration-300 focus-ring"
            >
              {isMobileMenuOpen ? <X size={24} className="text-secondary-600" /> : <HamburgerMenu size={24} className="text-secondary-600" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-secondary-100 animate-slide-up">
            <div className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                      isActive(item.path) ? 'text-primary-600 bg-primary-50 border border-primary-100' : 'text-secondary-600 hover:text-primary-600 hover:bg-primary-50 hover:border-primary-100 border border-transparent'
                    }`}
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}

              {tableNumber && (
                <div className="flex items-center space-x-3 px-4 py-3 bg-gradient-to-r from-success-100 to-success-200 rounded-xl border border-success-200">
                  <div className="w-2 h-2 bg-success-500 rounded-full animate-pulse"></div>
                  <span className="text-success-700 font-semibold">Table {tableNumber}</span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 