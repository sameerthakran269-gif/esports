// components/AboutPage.tsx
'use client';

import Link from 'next/link';
import { Check, Award, Users, Target, Heart, Globe } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { number: '50,000+', label: 'Happy Customers' },
    { number: '15+', label: 'Years Experience' },
    { number: '500+', label: 'Products' },
    { number: '24/7', label: 'Customer Support' }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Quality First',
      description: 'We never compromise on quality. Every product is tested and certified for excellence.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Customer Focused',
      description: 'Your satisfaction is our priority. We go above and beyond to exceed expectations.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Expert Guidance',
      description: 'Our team of fitness experts helps you make the right choices for your goals.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Sustainable Future',
      description: 'Committed to eco-friendly practices and sustainable manufacturing processes.'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: '/api/placeholder/200/200',
      bio: 'Former professional athlete with 20+ years in fitness industry'
    },
    {
      name: 'Mike Chen',
      role: 'Head of Product',
      image: '/api/placeholder/200/200',
      bio: 'Strength training specialist and equipment design expert'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Customer Success',
      image: '/api/placeholder/200/200',
      bio: 'Dedicated to ensuring every customer has an exceptional experience'
    },
    {
      name: 'David Kim',
      role: 'Technical Support',
      image: '/api/placeholder/200/200',
      bio: 'Fitness equipment technician with 15 years of experience'
    }
  ];

  const milestones = [
    { year: '2008', event: 'Founded SportEquip with a single storefront' },
    { year: '2012', event: 'Launched e-commerce platform' },
    { year: '2015', event: 'Expanded to international markets' },
    { year: '2018', event: 'Introduced premium equipment line' },
    { year: '2021', event: 'Reached 50,000 customers milestone' },
    { year: '2023', event: 'Launched sustainable product initiative' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About SportEquip</h1>
            <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto">
              Empowering athletes and fitness enthusiasts with premium equipment since 2008
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At SportEquip, we believe that everyone deserves access to high-quality fitness equipment that inspires performance, ensures safety, and stands the test of time.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Founded in 2008 by former professional athlete Sarah Johnson, we've grown from a single storefront to a trusted international supplier, serving everyone from home gym enthusiasts to professional sports teams.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Check className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Premium quality materials and construction</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Rigorous testing and certification</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Sustainable and ethical manufacturing</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Lifetime customer support</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-2xl p-8">
              <div className="aspect-w-16 aspect-h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center h-96">
                <span className="text-white text-2xl font-semibold">Our Story</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at SportEquip
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex justify-center text-blue-600 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Passionate experts dedicated to your fitness journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                  <span className="text-gray-600 font-semibold">Team Member</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600">Milestones in our growth and development</p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-200 h-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <p className="text-gray-700">{milestone.event}</p>
                    </div>
                  </div>
                  
                  {/* Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  
                  {/* Empty space for alternating sides */}
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Fitness Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join the SportEquip family and experience the difference quality equipment makes
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              href="/gym-equipment"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Shop Equipment
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
