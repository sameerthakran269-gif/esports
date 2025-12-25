'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ShoppingBag, User, Search } from 'lucide-react';


export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { 
      name: 'Gym Equipment', 
      href: '/gym-equipment', 
      subLinks: [
        { name: 'Strength Training', href: '/gym-equipment/category/strength-training' },
        { name: 'Cardio Machines', href: '/gym-equipment/category/cardio-machines' },
        { name: 'Free Weights', href: '/gym-equipment/category/free-weights' },
        { name: 'Functional Training', href: '/gym-equipment/category/functional-training' },
        { name: 'Accessories', href: '/gym-equipment/category/accessories' }
      ]
    },
    { 
      name: 'Sports Equipment', 
      href: '/sports-equipment', 
      subLinks: [
        { name: 'Team Sports', href: '/sports-equipment/category/team-sports' },
        { name: 'Racket Sports', href: '/sports-equipment/category/racket-sports' },
        { name: 'Outdoor Sports', href: '/sports-equipment/category/outdoor-sports' },
        { name: 'Water Sports', href: '/sports-equipment/category/water-sports' },
        { name: 'Winter Sports', href: '/sports-equipment/category/winter-sports' }
      ]
    },
    { name: 'Brands', href: '/brands' },
    { name: 'New Arrivals', href: '/new-arrivals' },
    { name: 'Deals', href: '/deals' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-blue-600 text-white py-2 px-4 text-center text-sm">
        🏋️‍♂️ Free Shipping on Orders Above $99 | 30-Day Money Back Guarantee
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">SE</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">SportEquip</h1>
                <p className="text-xs text-gray-600 -mt-1">Premium Fitness Gear</p>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  <Link 
                    href={link.href}
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                  {/* Dropdown Menu */}
                  {link.subLinks && (
                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border">
                      {link.subLinks.map((subLink) => (
                        <Link
                          key={subLink.name}
                          href={subLink.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 border-b last:border-b-0"
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-4">
              {/* Search Icon */}
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Search size={20} />
              </button>

              {/* Login & Register Links */}
              <div className="hidden md:flex items-center space-x-3">
                <Link 
                  href="/login" 
                  className="text-gray-600 hover:text-blue-600 transition-colors font-medium text-sm"
                >
                  Login
                </Link>
                <span className="text-gray-300">|</span>
                <Link 
                  href="/register" 
                  className="text-gray-600 hover:text-blue-600 transition-colors font-medium text-sm"
                >
                  Register
                </Link>
              </div>

              {/* Mobile User Icon */}
              <Link href="/login" className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors">
                <User size={20} />
              </Link>

              {/* Cart */}
              <Link href="/cart" className="p-2 text-gray-600 hover:text-blue-600 transition-colors relative">
                <ShoppingBag size={20} />
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Search Bar */}
          {isSearchOpen && (
            <div className="border-t border-gray-200 py-4">
              <div className="relative max-w-md mx-auto">
                <input
                  type="text"
                  placeholder="Search for gym equipment, sports gear, and more..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
              </div>
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-2 space-y-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    href={link.href}
                    className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {/* Mobile Sub Links */}
                  {link.subLinks && (
                    <div className="ml-4 space-y-1">
                      {link.subLinks.map((subLink) => (
                        <Link
                          key={subLink.name}
                          href={subLink.href}
                          className="block px-3 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile Login & Register Links */}
              <div className="border-t border-gray-200 pt-2 mt-2">
                <Link
                  href="/login"
                  className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}