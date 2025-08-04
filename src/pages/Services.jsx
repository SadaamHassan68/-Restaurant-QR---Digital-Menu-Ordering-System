import React from 'react';
import { 
  QrCode, 
  Smartphone, 
  Users, 
  Clock, 
  Shield, 
  Award, 
  Zap, 
  Globe, 
  Settings, 
  BarChart3,
  Headphones,
  Truck,
  Calendar,
  Star
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: QrCode,
      title: "Digital Menu System",
      description: "Transform your traditional menu into an interactive digital experience with QR codes.",
      features: ["Easy to update", "Cost-effective", "Environmentally friendly", "Real-time updates"],
      color: "from-primary-500 to-primary-600"
    },
    {
      icon: Smartphone,
      title: "Mobile Ordering",
      description: "Enable customers to order directly from their smartphones with our intuitive interface.",
      features: ["User-friendly design", "Fast ordering", "Secure payments", "Order tracking"],
      color: "from-success-500 to-success-600"
    },
    {
      icon: Users,
      title: "Table Management",
      description: "Efficiently manage your restaurant tables and optimize seating arrangements.",
      features: ["Real-time status", "Reservation system", "Waitlist management", "Table assignments"],
      color: "from-accent-500 to-accent-600"
    },
    {
      icon: Clock,
      title: "24/7 Online Reservations",
      description: "Allow customers to book tables anytime, anywhere with our online reservation system.",
      features: ["Instant confirmation", "Email notifications", "Calendar integration", "Special requests"],
      color: "from-warning-500 to-warning-600"
    },
    {
      icon: Truck,
      title: "Delivery Service",
      description: "Expand your reach with our integrated delivery and takeout ordering system.",
      features: ["Delivery tracking", "Multiple payment options", "Delivery zones", "Driver management"],
      color: "from-error-500 to-error-600"
    },
    {
      icon: Calendar,
      title: "Catering & Events",
      description: "Handle large orders and special events with our comprehensive catering management.",
      features: ["Event planning", "Bulk ordering", "Custom menus", "Event coordination"],
      color: "from-purple-500 to-purple-600"
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Bank-level security for all transactions and customer data protection."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance ensures quick loading times and smooth user experience."
    },
    {
      icon: Globe,
      title: "Multi-Platform",
      description: "Works seamlessly across all devices - mobile, tablet, and desktop."
    },
    {
      icon: Settings,
      title: "Easy Integration",
      description: "Simple setup and integration with your existing restaurant management systems."
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Comprehensive reporting and analytics to help you make data-driven decisions."
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock customer support to help you succeed."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      {/* Hero Section */}
      <div className="text-center mb-16 lg:mb-20 animate-fade-in">
        <h1 className="text-4xl lg:text-6xl font-bold text-secondary-900 mb-6 leading-tight font-display">
          Our <span className="text-gradient">Services</span>
        </h1>
        <p className="text-lg lg:text-xl text-secondary-600 max-w-4xl mx-auto leading-relaxed">
          Discover our comprehensive range of digital solutions designed to transform your restaurant 
          operations and enhance customer experience.
        </p>
      </div>

      {/* Services Grid */}
      <div className="mb-20">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center text-secondary-900 font-display">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="card card-hover p-8 text-center group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-soft`}>
                  <Icon className="text-white w-8 h-8" />
                </div>
                <h3 className="text-xl lg:text-2xl font-semibold mb-4 text-secondary-900">{service.title}</h3>
                <p className="text-secondary-600 leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-2 text-left">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-secondary-600">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {/* Features Section */}
      <div className="mb-20">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center text-secondary-900 font-display">
          Why Choose Our Platform?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="flex items-start space-x-4 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/30 hover:shadow-medium transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="text-primary-600 w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary-900 mb-2">{feature.title}</h3>
                  <p className="text-secondary-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pricing Section */}
      <div className="mb-20">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center text-secondary-900 font-display">
          Simple Pricing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="card p-8 text-center">
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">Starter</h3>
            <div className="text-4xl font-bold text-primary-600 mb-6">$29<span className="text-lg text-secondary-500">/month</span></div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center space-x-2">
                <Star className="text-success-500 w-4 h-4" />
                <span className="text-secondary-600">Digital Menu System</span>
              </li>
              <li className="flex items-center space-x-2">
                <Star className="text-success-500 w-4 h-4" />
                <span className="text-secondary-600">QR Code Generation</span>
              </li>
              <li className="flex items-center space-x-2">
                <Star className="text-success-500 w-4 h-4" />
                <span className="text-secondary-600">Basic Analytics</span>
              </li>
              <li className="flex items-center space-x-2">
                <Star className="text-success-500 w-4 h-4" />
                <span className="text-secondary-600">Email Support</span>
              </li>
            </ul>
            <button className="btn-secondary w-full">Get Started</button>
          </div>

          <div className="card p-8 text-center border-2 border-primary-200 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
            </div>
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">Professional</h3>
            <div className="text-4xl font-bold text-primary-600 mb-6">$79<span className="text-lg text-secondary-500">/month</span></div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center space-x-2">
                <Star className="text-success-500 w-4 h-4" />
                <span className="text-secondary-600">Everything in Starter</span>
              </li>
              <li className="flex items-center space-x-2">
                <Star className="text-success-500 w-4 h-4" />
                <span className="text-secondary-600">Mobile Ordering</span>
              </li>
              <li className="flex items-center space-x-2">
                <Star className="text-success-500 w-4 h-4" />
                <span className="text-secondary-600">Table Management</span>
              </li>
              <li className="flex items-center space-x-2">
                <Star className="text-success-500 w-4 h-4" />
                <span className="text-secondary-600">Online Reservations</span>
              </li>
              <li className="flex items-center space-x-2">
                <Star className="text-success-500 w-4 h-4" />
                <span className="text-secondary-600">Priority Support</span>
              </li>
            </ul>
            <button className="btn-primary w-full">Get Started</button>
          </div>

          <div className="card p-8 text-center">
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">Enterprise</h3>
            <div className="text-4xl font-bold text-primary-600 mb-6">$199<span className="text-lg text-secondary-500">/month</span></div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center space-x-2">
                <Star className="text-success-500 w-4 h-4" />
                <span className="text-secondary-600">Everything in Professional</span>
              </li>
              <li className="flex items-center space-x-2">
                <Star className="text-success-500 w-4 h-4" />
                <span className="text-secondary-600">Delivery Management</span>
              </li>
              <li className="flex items-center space-x-2">
                <Star className="text-success-500 w-4 h-4" />
                <span className="text-secondary-600">Catering System</span>
              </li>
              <li className="flex items-center space-x-2">
                <Star className="text-success-500 w-4 h-4" />
                <span className="text-secondary-600">Advanced Analytics</span>
              </li>
              <li className="flex items-center space-x-2">
                <Star className="text-success-500 w-4 h-4" />
                <span className="text-secondary-600">24/7 Phone Support</span>
              </li>
            </ul>
            <button className="btn-secondary w-full">Contact Sales</button>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <div className="gradient-bg rounded-3xl p-8 lg:p-12 border border-primary-100 shadow-professional">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-secondary-900 font-display">
            Ready to Transform Your Restaurant?
          </h3>
          <p className="text-secondary-600 mb-8 text-lg max-w-2xl mx-auto">
            Join thousands of restaurants that have already modernized their operations with our digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary inline-flex items-center space-x-3 text-lg px-8 py-4">
              <span>Start Free Trial</span>
            </button>
            <button className="btn-secondary inline-flex items-center space-x-3 text-lg px-8 py-4">
              <span>Schedule Demo</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services; 