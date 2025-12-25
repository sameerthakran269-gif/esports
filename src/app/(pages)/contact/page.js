// components/ContactPage.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      subtitle: 'Mon-Fri from 8am to 5pm',
      link: 'tel:+15551234567'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: 'support@sportequip.com',
      subtitle: 'We reply within 24 hours',
      link: 'mailto:support@sportequip.com'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Visit Us',
      details: '123 Fitness Street, Sport City, SC 12345',
      subtitle: 'Come say hello at our showroom',
      link: 'https://maps.google.com'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Business Hours',
      details: 'Monday - Friday: 8:00 AM - 8:00 PM',
      subtitle: 'Saturday: 9:00 AM - 6:00 PM',
      link: null
    }
  ];

  const departments = [
    {
      name: 'Sales',
      description: 'Questions about products, pricing, and bulk orders',
      email: 'sales@sportequip.com',
      phone: '+1 (555) 123-4568'
    },
    {
      name: 'Technical Support',
      description: 'Equipment setup, troubleshooting, and warranty claims',
      email: 'support@sportequip.com',
      phone: '+1 (555) 123-4569'
    },
    {
      name: 'Shipping & Returns',
      description: 'Order tracking, delivery issues, and return requests',
      email: 'shipping@sportequip.com',
      phone: '+1 (555) 123-4570'
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto">
              Get in touch with our fitness equipment experts
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center text-blue-600 mb-4">
                  {method.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{method.title}</h3>
                {method.link ? (
                  <Link 
                    href={method.link} 
                    className="text-blue-600 hover:text-blue-700 font-medium block mb-1"
                  >
                    {method.details}
                  </Link>
                ) : (
                  <p className="text-gray-700 font-medium mb-1">{method.details}</p>
                )}
                <p className="text-gray-500 text-sm">{method.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Send us a Message</h2>
                  <p className="text-gray-600">
                    Have questions about our equipment? Need technical support? We're here to help! 
                    Fill out the form below and our team will get back to you within 24 hours.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent Successfully!</h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for contacting us. We'll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        >
                          <option value="">Select a subject</option>
                          <option value="sales">Sales Inquiry</option>
                          <option value="support">Technical Support</option>
                          <option value="shipping">Shipping & Delivery</option>
                          <option value="warranty">Warranty Claim</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Departments */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <MessageCircle className="w-5 h-5 mr-2 text-blue-600" />
                  Contact Departments
                </h3>
                <div className="space-y-6">
                  {departments.map((dept, index) => (
                    <div key={index} className="pb-4 border-b border-gray-200 last:border-b-0 last:pb-0">
                      <h4 className="font-semibold text-gray-900 mb-2">{dept.name}</h4>
                      <p className="text-sm text-gray-600 mb-3">{dept.description}</p>
                      <div className="space-y-1">
                        <Link 
                          href={`mailto:${dept.email}`}
                          className="block text-sm text-blue-600 hover:text-blue-700"
                        >
                          {dept.email}
                        </Link>
                        <Link 
                          href={`tel:${dept.phone}`}
                          className="block text-sm text-blue-600 hover:text-blue-700"
                        >
                          {dept.phone}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ Quick Links */}
              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Quick Help</h3>
                <p className="mb-4 text-blue-100">
                  Check out our frequently asked questions for instant answers to common questions.
                </p>
                <Link
                  href="/faq"
                  className="inline-flex items-center bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Visit FAQ
                </Link>
              </div>

              {/* Live Chat */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Live Chat Support</h3>
                <p className="text-gray-600 mb-4">
                  Need immediate assistance? Chat with our support team in real-time.
                </p>
                <button className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  Start Live Chat
                </button>
                <p className="text-sm text-gray-500 mt-2 text-center">
                  Available 8AM-8PM EST
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Visit Our Showroom
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Come see our equipment in person and get expert advice from our team
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              {/* Map Placeholder */}
              <div className="lg:col-span-2 h-96 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <MapPin className="w-12 h-12 mx-auto mb-4" />
                  <p className="text-lg font-semibold">Interactive Map</p>
                  <p className="text-sm">123 Fitness Street, Sport City, SC 12345</p>
                </div>
              </div>
              
              {/* Location Info */}
              <div className="p-8 bg-gray-900 text-white">
                <h3 className="text-2xl font-bold mb-6">SportEquip Showroom</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-blue-200">Address</p>
                    <p>123 Fitness Street<br />Sport City, SC 12345</p>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-200">Hours</p>
                    <p>Monday - Friday: 8:00 AM - 8:00 PM<br />
                       Saturday: 9:00 AM - 6:00 PM<br />
                       Sunday: Closed</p>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-200">Parking</p>
                    <p>Free parking available in front of building</p>
                  </div>
                  <Link
                    href="https://maps.google.com"
                    target="_blank"
                    className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mt-4"
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    Get Directions
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Training Space?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today for a free equipment consultation
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              href="/gym-equipment"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Browse Products
            </Link>
            <a
              href="tel:+15551234567"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}