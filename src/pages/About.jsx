import React from 'react';
import { 
  Users, 
  Award, 
  Target, 
  Heart, 
  Clock, 
  MapPin, 
  Star, 
  TrendingUp,
  CheckCircle,
  Lightbulb,
  Globe,
  Coffee
} from 'lucide-react';

const About = () => {
  const stats = [
    { number: "500+", label: "Happy Customers", icon: Users },
    { number: "50+", label: "Menu Items", icon: Coffee },
    { number: "4.8★", label: "Average Rating", icon: Star },
    { number: "3+", label: "Years Experience", icon: Clock }
  ];

  const values = [
    {
      icon: Heart,
      title: "Passion for Food",
      description: "We believe in creating memorable dining experiences through exceptional food and service."
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Constantly evolving and embracing new technologies to enhance the dining experience."
    },
    {
      icon: Users,
      title: "Community",
      description: "Building strong relationships with our customers, staff, and local community."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Maintaining the highest standards in everything we do, from food quality to service."
    }
  ];

  const team = [
    {
      name: "Chef Michael Rodriguez",
      role: "Head Chef",
      image: "👨‍🍳",
      description: "Award-winning chef with 15+ years of culinary experience."
    },
    {
      name: "Sarah Johnson",
      role: "Restaurant Manager",
      image: "👩‍💼",
      description: "Expert in restaurant operations and customer service excellence."
    },
    {
      name: "David Chen",
      role: "Sous Chef",
      image: "👨‍🍳",
      description: "Specialized in Asian fusion cuisine and modern cooking techniques."
    },
    {
      name: "Emily Davis",
      role: "Service Manager",
      image: "👩‍💼",
      description: "Dedicated to creating exceptional dining experiences for every guest."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      {/* Hero Section */}
      <div className="text-center mb-16 lg:mb-20 animate-fade-in">
        <h1 className="text-4xl lg:text-6xl font-bold text-secondary-900 mb-6 leading-tight font-display">
          About <span className="text-gradient">Restaurant QR</span>
        </h1>
        <p className="text-lg lg:text-xl text-secondary-600 max-w-4xl mx-auto leading-relaxed">
          We're passionate about revolutionizing the dining experience through innovative technology 
          and exceptional service. Our journey began with a simple idea: make ordering easier and more enjoyable.
        </p>
      </div>

      {/* Stats Section */}
      <div className="mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="card p-6 text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-primary-600 w-6 h-6" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-primary-600 mb-2">{stat.number}</div>
                <div className="text-secondary-600 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Story Section */}
      <div className="mb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 font-display">Our Story</h2>
            <p className="text-secondary-600 leading-relaxed text-lg">
              Founded in 2021, Restaurant QR was born from a simple observation: traditional restaurant 
              ordering was often slow, inefficient, and sometimes frustrating for both customers and staff.
            </p>
            <p className="text-secondary-600 leading-relaxed text-lg">
              Our founder, a passionate food lover and tech enthusiast, envisioned a solution that would 
              combine the warmth of traditional dining with the convenience of modern technology. 
              The result was our innovative QR code-based ordering system.
            </p>
            <p className="text-secondary-600 leading-relaxed text-lg">
              Today, we're proud to serve hundreds of restaurants and thousands of customers, 
              helping create seamless dining experiences across the country.
            </p>
            <div className="flex items-center space-x-4 pt-4">
              <div className="flex items-center space-x-2">
                <TrendingUp className="text-success-500 w-5 h-5" />
                <span className="text-secondary-700 font-semibold">Growing Strong</span>
              </div>
              <div className="text-secondary-400">•</div>
              <div className="text-secondary-700">Innovation First</div>
            </div>
          </div>
          
          <div className="relative">
            <div className="card p-8 lg:p-12">
              <div className="text-6xl mb-6">🍽️</div>
              <h3 className="text-2xl font-semibold text-secondary-900 mb-4">Our Mission</h3>
              <p className="text-secondary-600 leading-relaxed mb-6">
                To revolutionize the restaurant industry by providing innovative digital solutions 
                that enhance the dining experience for customers and streamline operations for restaurants.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-success-500 w-5 h-5" />
                  <span className="text-secondary-700">Enhance customer experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-success-500 w-5 h-5" />
                  <span className="text-secondary-700">Streamline restaurant operations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-success-500 w-5 h-5" />
                  <span className="text-secondary-700">Reduce wait times</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-success-500 w-5 h-5" />
                  <span className="text-secondary-700">Increase efficiency</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-20">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center text-secondary-900 font-display">
          Our Values
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div 
                key={index}
                className="card card-hover p-8 text-center group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-primary-600 w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-secondary-900">{value.title}</h3>
                <p className="text-secondary-600 leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-20">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center text-secondary-900 font-display">
          Meet Our Team
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div 
              key={index}
              className="card card-hover p-6 text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{member.image}</div>
              <h3 className="text-lg font-semibold mb-2 text-secondary-900">{member.name}</h3>
              <p className="text-primary-600 font-medium mb-3">{member.role}</p>
              <p className="text-secondary-600 text-sm leading-relaxed">{member.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Location & Hours */}
      <div className="mb-20">
        <div className="card p-8 lg:p-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center text-secondary-900 font-display">
            Visit Us
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                  <MapPin className="text-primary-600 w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-2">Location</h3>
                  <p className="text-secondary-600">123 Main Street</p>
                  <p className="text-secondary-600">City, State 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                  <Clock className="text-primary-600 w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-2">Hours</h3>
                  <p className="text-secondary-600">Monday - Sunday</p>
                  <p className="text-secondary-600">11:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                  <Star className="text-primary-600 w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-2">Awards</h3>
                  <p className="text-secondary-600">Best Fine Dining 2023</p>
                  <p className="text-secondary-600">Innovation Award 2022</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                  <Globe className="text-primary-600 w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-2">Online Presence</h3>
                  <p className="text-secondary-600">Website & Social Media</p>
                  <p className="text-secondary-600">Digital Menu Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <div className="gradient-bg rounded-3xl p-8 lg:p-12 border border-primary-100 shadow-professional">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-secondary-900 font-display">
            Experience Our Innovation
          </h3>
          <p className="text-secondary-600 mb-8 text-lg max-w-2xl mx-auto">
            Ready to see how our digital solutions can transform your dining experience? 
            Visit us today or explore our menu online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary inline-flex items-center space-x-3 text-lg px-8 py-4">
              <span>View Menu</span>
            </button>
            <button className="btn-secondary inline-flex items-center space-x-3 text-lg px-8 py-4">
              <span>Contact Us</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 