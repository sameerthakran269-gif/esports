// app/sports-equipment/team-sports/football/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Heart, Filter, Grid, List } from 'lucide-react';

export default function FootballPage() {
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    priceRange: [],
    brand: []
  });

  const footballProducts = [
    {
      id: 1,
      name: 'Professional Football Helmet',
      price: '$299.99',
      originalPrice: '$379.99',
      image: '/football-helmet-pro.jpg',
      rating: 4.8,
      reviews: 234,
      category: 'Protective Gear',
      brand: 'Riddell',
      description: 'NFL-approved professional football helmet with advanced protection',
      isNew: true,
      isBestseller: true,
      features: ['NFL approved', 'Advanced impact protection', 'Custom fit']
    },
    {
      id: 2,
      name: 'Shoulder Pad Set',
      price: '$189.99',
      originalPrice: '$239.99',
      image: '/shoulder-pads.jpg',
      rating: 4.7,
      reviews: 167,
      category: 'Protective Gear',
      brand: 'Schutt',
      description: 'Professional shoulder pads with maximum protection and mobility',
      isNew: false,
      isBestseller: true,
      features: ['Maximum protection', 'Lightweight design', 'Adjustable fit']
    },
    {
      id: 3,
      name: 'Official Game Football',
      price: '$99.99',
      originalPrice: '$129.99',
      image: '/football-official.jpg',
      rating: 4.9,
      reviews: 312,
      category: 'Football Equipment',
      brand: 'Wilson',
      description: 'Official NFL game football with premium leather',
      isNew: false,
      isBestseller: true,
      features: ['Official NFL', 'Premium leather', 'Perfect grip']
    },
    {
      id: 4,
      name: 'Football Cleats - Elite',
      price: '$139.99',
      originalPrice: '$179.99',
      image: '/football-cleats.jpg',
      rating: 4.6,
      reviews: 278,
      category: 'Footwear',
      brand: 'Nike',
      description: 'Professional football cleats with superior traction and support',
      isNew: true,
      isBestseller: true,
      features: ['Ankle support', 'Molded cleats', 'Lightweight']
    },
    {
      id: 5,
      name: 'Complete Uniform Set (15 players)',
      price: '$899.99',
      originalPrice: '$1,199.99',
      image: '/football-uniforms.jpg',
      rating: 4.5,
      reviews: 89,
      category: 'Apparel',
      brand: 'Under Armour',
      description: 'Complete team uniform set including jerseys and pants',
      isNew: false,
      isBestseller: false,
      features: ['Set for 15 players', 'Moisture-wicking', 'Customizable']
    },
    {
      id: 6,
      name: 'Practice Equipment Set',
      price: '$249.99',
      originalPrice: '$329.99',
      image: '/practice-equipment.jpg',
      rating: 4.4,
      reviews: 145,
      category: 'Training Equipment',
      brand: 'Champro',
      description: 'Complete practice set with bags, dummies, and equipment',
      isNew: true,
      isBestseller: false,
      features: ['Complete set', 'Durable materials', 'Storage bags']
    },
    {
      id: 7,
      name: 'Mouth Guard (Multi-pack)',
      price: '$24.99',
      originalPrice: '$34.99',
      image: '/mouth-guards.jpg',
      rating: 4.3,
      reviews: 412,
      category: 'Protective Gear',
      brand: 'Shock Doctor',
      description: 'Professional mouth guards with advanced protection',
      isNew: false,
      isBestseller: true,
      features: ['Multi-pack', 'Advanced protection', 'Comfort fit']
    },
    {
      id: 8,
      name: 'Football Gloves',
      price: '$49.99',
      originalPrice: '$69.99',
      image: '/football-gloves.jpg',
      rating: 4.7,
      reviews: 323,
      category: 'Accessories',
      brand: 'Cutters',
      description: 'Professional receiver gloves with superior grip',
      isNew: false,
      isBestseller: true,
      features: ['Superior grip', 'Breathable', 'Durable']
    },
    {
      id: 9,
      name: 'Tackling Dummy',
      price: '$79.99',
      originalPrice: '$99.99',
      image: '/tackling-dummy.jpg',
      rating: 4.2,
      reviews: 78,
      category: 'Training Equipment',
      brand: 'Baden',
      description: 'Professional tackling dummy for training drills',
      isNew: false,
      isBestseller: false,
      features: ['Heavy-duty', 'Weather resistant', 'Easy to carry']
    },
    {
      id: 10,
      name: 'Field Goal Set',
      price: '$599.99',
      originalPrice: '$749.99',
      image: '/field-goal-set.jpg',
      rating: 4.6,
      reviews: 56,
      category: 'Field Equipment',
      brand: 'Jaypro',
      description: 'Professional field goal set with padding and net',
      isNew: true,
      isBestseller: false,
      features: ['Professional grade', 'Safety padding', 'Easy setup']
    },
    {
      id: 11,
      name: 'Hip & Tailbone Pads',
      price: '$39.99',
      originalPrice: '$49.99',
      image: '/hip-pads.jpg',
      rating: 4.4,
      reviews: 189,
      category: 'Protective Gear',
      brand: 'McDavid',
      description: 'Protective hip and tailbone pads for maximum safety',
      isNew: false,
      isBestseller: true,
      features: ['Shock absorbing', 'Comfortable', 'Washable']
    },
    {
      id: 12,
      name: 'Equipment Bag',
      price: '$89.99',
      originalPrice: '$119.99',
      image: '/equipment-bag.jpg',
      rating: 4.5,
      reviews: 234,
      category: 'Accessories',
      brand: 'Athletic',
      description: 'Oversized equipment bag with multiple compartments',
      isNew: false,
      isBestseller: true,
      features: ['Oversized', 'Multiple compartments', 'Durable material']
    }
  ];

  const footballCategories = [
    {
      name: 'Protective Gear',
      icon: '🛡️',
      description: 'Helmets & pads',
      count: '6 products'
    },
    {
      name: 'Footwear',
      icon: '👟',
      description: 'Cleats & shoes',
      count: '4 products'
    },
    {
      name: 'Training',
      icon: '🎯',
      description: 'Practice equipment',
      count: '5 products'
    },
    {
      name: 'Apparel',
      icon: '👕',
      description: 'Uniforms & clothing',
      count: '3 products'
    },
    {
      name: 'Accessories',
      icon: '🧤',
      description: 'Gloves & gear',
      count: '4 products'
    },
    {
      name: 'Field Equipment',
      icon: '🥅',
      description: 'Goals & markers',
      count: '2 products'
    }
  ];

  const filters = {
    category: ['Protective Gear', 'Football Equipment', 'Footwear', 'Training Equipment', 'Apparel', 'Accessories', 'Field Equipment'],
    priceRange: [
      'Under $50',
      '$50 - $100',
      '$100 - $200',
      '$200 - $500',
      'Above $500'
    ],
    brand: ['Riddell', 'Schutt', 'Wilson', 'Nike', 'Under Armour', 'Cutters', 'Shock Doctor', 'McDavid', 'Champro']
  };

  const toggleFilter = (filterType, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType ].includes(value)
        ? prev[filterType ].filter((item) => item !== value)
        : [...prev[filterType ], value]
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brown-600 to-amber-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <span className="text-6xl">🏈</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Football Equipment
            </h1>
            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
              Professional football gear for maximum protection and performance. From helmets to cleats, get everything for your football team.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#products"
                className="bg-white text-brown-600 px-6 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors duration-200"
              >
                Shop Football Gear
              </Link>
              <Link
                href="/sports-equipment/team-sports"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200"
              >
                View All Team Sports
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Football Categories */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Football Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {footballCategories.map((category, index) => (
              <Link
                key={index}
                href={`#${category.name.toLowerCase().replace(' ', '-')}`}
                className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-200">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{category.description}</p>
                <span className="text-xs text-green-600 font-medium">{category.count}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section id="products" className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with Controls */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Football Equipment
              </h2>
              <p className="text-gray-600">
                Showing {footballProducts.length} products
              </p>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 lg:mt-0">
              {/* View Mode Toggle */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-brown-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-brown-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brown-300"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest First</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="bg-gray-50 rounded-lg p-6 sticky top-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Filters
                </h3>

                {/* Category Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Category</h4>
                  <div className="space-y-2">
                    {filters.category.map((category) => (
                      <label key={category} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.category.includes(category)}
                          onChange={() => toggleFilter('category', category)}
                          className="rounded border-gray-300 text-brown-600 focus:ring-brown-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Price Range</h4>
                  <div className="space-y-2">
                    {filters.priceRange.map((range) => (
                      <label key={range} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.priceRange.includes(range)}
                          onChange={() => toggleFilter('priceRange', range)}
                          className="rounded border-gray-300 text-brown-600 focus:ring-brown-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{range}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Brand Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Brand</h4>
                  <div className="space-y-2">
                    {filters.brand.map((brand) => (
                      <label key={brand} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.brand.includes(brand)}
                          onChange={() => toggleFilter('brand', brand)}
                          className="rounded border-gray-300 text-brown-600 focus:ring-brown-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                <button
                  onClick={() => setSelectedFilters({ category: [], priceRange: [], brand: [] })}
                  className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition-colors duration-200 font-medium"
                >
                  Clear All Filters
                </button>
              </div>
            </div>

            {/* Products Grid */}
            <div className="flex-1">
              {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {footballProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                    >
                      <div className="relative h-64 bg-gradient-to-br from-amber-50 to-brown-100 flex items-center justify-center">
                        {product.isNew && (
                          <span className="absolute top-3 left-3 bg-brown-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            New
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="absolute top-3 left-3 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Bestseller
                          </span>
                        )}
                        <div className="text-5xl">🏈</div>
                        <button className="absolute top-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <Heart className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-gray-900">{product.name}</h3>
                          <span className="text-xs bg-amber-100 text-brown-600 px-2 py-1 rounded-full">
                            {product.category}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                        <div className="flex items-center mb-3">
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-amber-400 fill-current" />
                            <span className="ml-1 text-sm text-gray-600">
                              {product.rating} ({product.reviews} reviews)
                            </span>
                          </div>
                        </div>
                        <div className="mb-3">
                          <p className="text-xs text-gray-500 font-medium">Brand: {product.brand}</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-lg font-bold text-gray-900">{product.price}</span>
                            {product.originalPrice && (
                              <span className="ml-2 text-sm text-gray-500 line-through">
                                {product.originalPrice}
                              </span>
                            )}
                          </div>
                          <button className="bg-brown-600 text-white px-4 py-2 rounded-lg hover:bg-brown-700 transition-colors duration-200 text-sm font-semibold">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* List View */
                <div className="space-y-6">
                  {footballProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex"
                    >
                      <div className="w-48 relative bg-gradient-to-br from-amber-50 to-brown-100 flex items-center justify-center">
                        {product.isNew && (
                          <span className="absolute top-3 left-3 bg-brown-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            New
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="absolute top-3 left-3 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Bestseller
                          </span>
                        )}
                        <div className="text-5xl">🏈</div>
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                              <span className="text-xs bg-amber-100 text-brown-600 px-2 py-1 rounded-full">
                                {product.category}
                              </span>
                            </div>
                            <p className="text-gray-600 mb-3">{product.description}</p>
                            <div className="mb-2">
                              <p className="text-sm text-gray-600 font-medium">Features:</p>
                              <ul className="text-sm text-gray-500 list-disc list-inside">
                                {product.features.map((feature, index) => (
                                  <li key={index} className="inline-block mr-4">{feature}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <button className="bg-white/80 hover:bg-white p-2 rounded-full">
                            <Heart className="w-5 h-5 text-gray-600" />
                          </button>
                        </div>
                        
                        <div className="flex items-center mb-4">
                          <div className="flex items-center mr-6">
                            <Star className="w-4 h-4 text-amber-400 fill-current" />
                            <span className="ml-1 text-sm text-gray-600">
                              {product.rating} ({product.reviews} reviews)
                            </span>
                          </div>
                          <span className="text-sm text-gray-600">Brand: {product.brand}</span>
                          <span className="mx-2 text-gray-300">•</span>
                          <span className="text-sm text-gray-600">Category: {product.category}</span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-xl font-bold text-gray-900">{product.price}</span>
                            {product.originalPrice && (
                              <span className="ml-2 text-sm text-gray-500 line-through">
                                {product.originalPrice}
                              </span>
                            )}
                          </div>
                          <button className="bg-brown-600 text-white px-6 py-3 rounded-lg hover:bg-brown-700 transition-colors duration-200 font-semibold">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Protective Gear Special Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="flex justify-center mb-4">
              <span className="text-4xl">🛡️</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">
              Advanced Protective Gear
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              State-of-the-art protective equipment meeting the highest safety standards for football players
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-brown-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-brown-700 transition-colors duration-200">
                View Protective Gear
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200">
                Safety Standards
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Equipment Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Team Solutions
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Everything you need to equip a professional football team from head to toe
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Protective Equipment</h3>
              <p className="text-gray-600 mb-4">Helmets, pads, and safety gear for maximum protection</p>
              <button className="text-brown-600 font-semibold hover:text-brown-700">
                Explore Safety Gear →
              </button>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Training Systems</h3>
              <p className="text-gray-600 mb-4">Advanced training equipment and practice gear</p>
              <button className="text-brown-600 font-semibold hover:text-brown-700">
                View Training Gear →
              </button>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="text-4xl mb-4">👕</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Team Uniforms</h3>
              <p className="text-gray-600 mb-4">Complete uniform packages for the entire team</p>
              <button className="text-brown-600 font-semibold hover:text-brown-700">
                Shop Apparel →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Football Updates
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Get the latest on football equipment, safety standards, and exclusive team packages
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brown-300"
            />
            <button className="bg-brown-600 text-white px-6 py-3 rounded-r-lg hover:bg-brown-700 transition-colors duration-200 font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}