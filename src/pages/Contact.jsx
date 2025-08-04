import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  MessageSquare,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Main Street", "City, State 12345"],
      color: "from-primary-500 to-primary-600"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      color: "from-success-500 to-success-600"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@restaurantqr.com", "support@restaurantqr.com"],
      color: "from-accent-500 to-accent-600"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Sunday", "11:00 AM - 10:00 PM"],
      color: "from-warning-500 to-warning-600"
    }
  ];

  const faqs = [
    {
      question: "How do I place an order using QR codes?",
      answer: "Simply scan the QR code at your table with your smartphone camera, and it will open our digital menu where you can browse and place your order."
    },
    {
      question: "Can I make reservations online?",
      answer: "Yes! You can make reservations through our website or by calling us directly. We also accept walk-ins based on availability."
    },
    {
      question: "Do you offer delivery services?",
      answer: "We offer delivery through our partner delivery services. You can place delivery orders through our website or mobile app."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, cash, and digital payments including Apple Pay and Google Pay."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      {/* Hero Section */}
      <div className="text-center mb-16 lg:mb-20 animate-fade-in">
        <h1 className="text-4xl lg:text-6xl font-bold text-secondary-900 mb-6 leading-tight font-display">
          Get in <span className="text-gradient">Touch</span>
        </h1>
        <p className="text-lg lg:text-xl text-secondary-600 max-w-4xl mx-auto leading-relaxed">
          Have questions, feedback, or want to make a reservation? We'd love to hear from you. 
          Our team is here to help and ensure you have the best dining experience.
        </p>
      </div>

      {/* Contact Info Cards */}
      <div className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div 
                key={index}
                className="card card-hover p-6 text-center group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-soft`}>
                  <Icon className="text-white w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-secondary-900">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-secondary-600 text-sm">{detail}</p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Contact Form & Map Section */}
      <div className="mb-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="card p-8 lg:p-12">
            <h2 className="text-3xl font-bold mb-8 text-secondary-900 font-display">Send us a Message</h2>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-success-50 border border-success-200 rounded-xl flex items-center space-x-3">
                <CheckCircle className="text-success-600 w-5 h-5" />
                <div>
                  <h3 className="font-semibold text-success-800">Message Sent!</h3>
                  <p className="text-success-700 text-sm">Thank you for contacting us. We'll get back to you soon.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-secondary-700 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="input-field"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-secondary-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="input-field"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-secondary-700 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="input-field"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-secondary-700 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="input-field resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full btn-primary inline-flex items-center justify-center space-x-2 ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Map & Additional Info */}
          <div className="space-y-8">
            {/* Map Placeholder */}
            <div className="card p-8 lg:p-12">
              <h3 className="text-2xl font-bold mb-6 text-secondary-900 font-display">Find Us</h3>
              <div className="bg-secondary-100 rounded-xl h-64 flex items-center justify-center mb-6">
                <div className="text-center">
                  <MapPin className="text-secondary-400 w-12 h-12 mx-auto mb-4" />
                  <p className="text-secondary-600">Interactive Map</p>
                  <p className="text-secondary-500 text-sm">123 Main Street, City, State 12345</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-secondary-600">Free parking available</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-secondary-600">Wheelchair accessible</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-secondary-600">Public transportation nearby</span>
                </div>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-4 text-secondary-900">Need Immediate Help?</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="text-primary-600 w-5 h-5" />
                  <span className="text-secondary-600">Call us: +1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageSquare className="text-primary-600 w-5 h-5" />
                  <span className="text-secondary-600">Live chat available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-20">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center text-secondary-900 font-display">
          Frequently Asked Questions
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="card p-6 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-lg font-semibold mb-3 text-secondary-900">{faq.question}</h3>
              <p className="text-secondary-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <div className="gradient-bg rounded-3xl p-8 lg:p-12 border border-primary-100 shadow-professional">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-secondary-900 font-display">
            Ready to Visit Us?
          </h3>
          <p className="text-secondary-600 mb-8 text-lg max-w-2xl mx-auto">
            Experience our innovative dining system firsthand. Make a reservation or simply walk in - 
            we can't wait to serve you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary inline-flex items-center space-x-3 text-lg px-8 py-4">
              <span>Make Reservation</span>
            </button>
            <button className="btn-secondary inline-flex items-center space-x-3 text-lg px-8 py-4">
              <span>View Menu</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 