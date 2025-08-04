import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Heart,
  ArrowUp,
  QrCode,
  Users,
  Award,
  Shield
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="text-3xl">🍽️</div>
              <div>
                <h3 className="text-xl font-bold font-display">Restaurant QR</h3>
                <p className="text-secondary-300 text-sm">Digital Menu & Ordering</p>
              </div>
            </div>
            <p className="text-secondary-300 mb-6 leading-relaxed">
              Experience the future of dining with our sophisticated digital menu system. 
              We bring innovation to traditional restaurant service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-secondary-700 hover:bg-primary-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary-700 hover:bg-primary-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary-700 hover:bg-primary-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary-700 hover:bg-primary-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-6 font-display">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-secondary-300 hover:text-white transition-colors duration-300 flex items-center space-x-2">
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-secondary-300 hover:text-white transition-colors duration-300 flex items-center space-x-2">
                  <span>Our Menu</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-secondary-300 hover:text-white transition-colors duration-300 flex items-center space-x-2">
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-secondary-300 hover:text-white transition-colors duration-300 flex items-center space-x-2">
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary-300 hover:text-white transition-colors duration-300 flex items-center space-x-2">
                  <span>Contact</span>
                </Link>
              </li>
              <li>
                <Link to="/admin/qr" className="text-secondary-300 hover:text-white transition-colors duration-300 flex items-center space-x-2">
                  <QrCode size={16} />
                  <span>QR Generator</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-6 font-display">Our Services</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-secondary-300">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span>Digital Menu System</span>
              </li>
              <li className="flex items-center space-x-2 text-secondary-300">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span>QR Code Ordering</span>
              </li>
              <li className="flex items-center space-x-2 text-secondary-300">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span>Table Management</span>
              </li>
              <li className="flex items-center space-x-2 text-secondary-300">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span>Online Reservations</span>
              </li>
              <li className="flex items-center space-x-2 text-secondary-300">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span>Delivery Service</span>
              </li>
              <li className="flex items-center space-x-2 text-secondary-300">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span>Catering Events</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-6 font-display">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-primary-400 w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-secondary-300">123 Main Street</p>
                  <p className="text-secondary-300">City, State 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-primary-400 w-5 h-5 flex-shrink-0" />
                <span className="text-secondary-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-primary-400 w-5 h-5 flex-shrink-0" />
                <span className="text-secondary-300">info@restaurantqr.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="text-primary-400 w-5 h-5 flex-shrink-0" />
                <div>
                  <p className="text-secondary-300">Mon-Sun: 11:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-12 pt-8 border-t border-secondary-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
                <Shield className="text-white w-5 h-5" />
              </div>
              <div>
                <h5 className="font-semibold">Secure Ordering</h5>
                <p className="text-secondary-300 text-sm">Safe and secure transactions</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-success-600 rounded-full flex items-center justify-center">
                <Users className="text-white w-5 h-5" />
              </div>
              <div>
                <h5 className="font-semibold">24/7 Support</h5>
                <p className="text-secondary-300 text-sm">Always here to help you</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-accent-600 rounded-full flex items-center justify-center">
                <Award className="text-white w-5 h-5" />
              </div>
              <div>
                <h5 className="font-semibold">Best Quality</h5>
                <p className="text-secondary-300 text-sm">Premium ingredients & service</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-secondary-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-secondary-300">
              <span>© 2024 Restaurant QR. Made with</span>
              <Heart className="text-error-400 w-4 h-4 animate-pulse" />
              <span>for amazing dining experiences.</span>
            </div>
            <div className="flex items-center space-x-6">
              <Link to="/privacy" className="text-secondary-300 hover:text-white transition-colors duration-300 text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-secondary-300 hover:text-white transition-colors duration-300 text-sm">
                Terms of Service
              </Link>
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-primary-600 hover:bg-primary-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <ArrowUp size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 