// app/sports-equipment/team-sports/hockey/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Heart, Filter, Grid, List } from 'lucide-react';

export default function HockeyPage() {
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    priceRange: [],
    brand: []
  });

  const hockeyProducts = [
    {
      id: 1,
      name: 'Professional Hockey Stick',
      price: '$189.99',
      originalPrice: '$249.99',
      image: '/hockey-stick-pro.jpg',
      rating: 4.8,
      reviews: 278,
      category: 'Sticks',
      brand: 'Bauer',
      description: 'Professional composite hockey stick with advanced flex technology',
      isNew: true,
      isBestseller: true,
      features: ['Composite material', 'Advanced flex', 'Pro curve']
    },
    {
      id: 2,
      name: 'Hockey Skates - Elite',
      price: '$299.99',
      originalPrice: '$399.99',
      image: '/hockey-skates.jpg',
      rating: 4.7,
      reviews: 312,
      category: 'Skates',
      brand: 'CCM',
      description: 'Professional hockey skates with custom fit and superior steel',
      isNew: false,
      isBestseller: true,
      features: ['Custom fit', 'Carbon composite', 'Stainless steel']
    },
    {
      id: 3,
      name: 'Full Protective Set',
      price: '$399.99',
      originalPrice: '$549.99',
      image: '/protective-set.jpg',
      rating: 4.6,
      reviews: 189,
      category: 'Protective Gear',
      brand: 'Warrior',
      description: 'Complete protective set including shoulders, elbows, and shins',
      isNew: true,
      isBestseller: true,
      features: ['Complete set', 'Lightweight', 'Maximum protection']
    },
    {
      id: 4,
      name: 'Goalie Leg Pads',
      price: '$599.99',
      originalPrice: '$799.99',
      image: '/goalie-pads.jpg',
      rating: 4.9,
      reviews: 134,
      category: 'Goalie Equipment',
      brand: 'Brian\'s',
      description: 'Professional goalie leg pads with advanced rebound technology',
      isNew: false,
      isBestseller: false,
      features: ['Rebound technology', 'Lightweight', 'Professional grade']
    },
    {
      id: 5,
      name: 'Hockey Helmet with Cage',
      price: '$129.99',
      originalPrice: '$169.99',
      image: '/hockey-helmet.jpg',
      rating: 4.5,
      reviews: 445,
      category: 'Head Protection',
      brand: 'Bauer',
      description: 'Certified hockey helmet with full face cage protection',
      isNew: false,
      isBestseller: true,
      features: ['HECC certified', 'Full cage', 'Adjustable fit']
    },
    {
      id: 6,
      name: 'Hockey Pucks (Set of 12)',
      price: '$24.99',
      originalPrice: '$34.99',
      image: '/hockey-pucks.jpg',
      rating: 4.3,
      reviews: 567,
      category: 'Accessories',
      brand: 'Sher-Wood',
      description: 'Official weight and size hockey pucks for practice and games',
      isNew: false,
      isBestseller: true,
      features: ['Official weight', 'Set of 12', 'Game ready']
    },
    {
      id: 7,
      name: 'Goalie Glove & Blocker',
      price: '$349.99',
      originalPrice: '$449.99',
      image: '/goalie-glove.jpg',
      rating: 4.7,
      reviews: 89,
      category: 'Goalie Equipment',
      brand: 'CCM',
      description: 'Professional goalie catching glove and blocker set',
      isNew: true,
      isBestseller: false,
      features: ['Pro palm', 'Lightweight', 'Maximum protection']
    },
    {
      id: 8,
      name: 'Hockey Bag',
      price: '$89.99',
      originalPrice: '$119.99',
      image: '/hockey-bag.jpg',
      rating: 4.4,
      reviews: 278,
      category: 'Accessories',
      brand: 'Grit',
      description: 'Oversized hockey bag with ventilated compartments',
      isNew: false,
      isBestseller: true,
      features: ['Ventilated', 'Multiple compartments', 'Durable material']
    },
    {
      id: 9,
      name: 'Team Jersey Set (15 players)',
      price: '$799.99',
      originalPrice: '$999.99',
      image: '/hockey-jerseys.jpg',
      rating: 4.5,
      reviews: 67,
      category: 'Apparel',
      brand: 'CCM',
      description: 'Complete team jersey set with custom numbering',
      isNew: false,
      isBestseller: false,
      features: ['Set for 15 players', 'Custom numbering', 'Moisture-wicking']
    },
    {
      id: 10,
      name: 'Shin & Elbow Guards',
      price: '$79.99',
      originalPrice: '$109.99',
      image: '/shin-guards.jpg',
      rating: 4.6,
      reviews: 312,
      category: 'Protective Gear',
      brand: 'Warrior',
      description: 'Professional shin and elbow guard set with advanced protection',
      isNew: false,
      isBestseller: true,
      features: ['Advanced protection', 'Comfortable fit', 'Durable construction']
    },
    {
      id: 11,
      name: 'Hockey Socks & Garters',
      price: '$29.99',
      originalPrice: '$39.99',
      image: '/hockey-socks.jpg',
      rating: 4.2,
      reviews: 189,
      category: 'Apparel',
      brand: 'Bauer',
      description: 'Professional hockey socks with garter system',
      isNew: true,
      isBestseller: false,
      features: ['Breathable material', 'Garter system', 'Team colors']
    },
    {
      id: 12,
      name: 'Stick Tape & Accessories',
      price: '$19.99',
      originalPrice: '$29.99',
      image: '/stick-tape.jpg',
      rating: 4.8,
      reviews: 423,
      category: 'Accessories',
      brand: 'Howies',
      description: 'Complete stick tape kit with wax and accessories',
      isNew: false,
      isBestseller: true,
      features: ['Complete kit', 'Grip tape', 'Wax included']
    }
  ];

  const hockeyCategories = [
    {
      name: 'Sticks',
      icon: '🏒',
      description: 'Player & goalie sticks',
      count: '6 products'
    },
    {
      name: 'Skates',
      icon: '⛸️',
      description: 'Ice & inline skates',
      count: '4 products'
    },
    {
      name: 'Protective Gear',
      icon: '🛡️',
      description: 'Pads & guards',
      count: '5 products'
    },
    {
      name: 'Goalie Equipment',
      icon: '🥅',
      description: 'Full goalie sets',
      count: '4 products'
    },
    {
      name: 'Head Protection',
      icon: '⛑️',
      description: 'Helmets & cages',
      count: '3 products'
    },
    {
      name: 'Accessories',
      icon: '🎒',
      description: 'Bags & equipment',
      count: '6 products'
    }
  ];

  const filters = {
    category: ['Sticks', 'Skates', 'Protective Gear', 'Goalie Equipment', 'Head Protection', 'Apparel', 'Accessories'],
    priceRange: [
      'Under $50',
      '$50 - $100',
      '$100 - $200',
      '$200 - $500',
      'Above $500'
    ],
    brand: ['Bauer', 'CCM', 'Warrior', 'Brian\'s', 'Sher-Wood', 'Grit', 'Howies']
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
      <section className="bg-gradient-to-r from-slate-800 to-blue-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <span className="text-6xl">🏒</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Hockey Equipment
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Professional hockey gear for ice and inline play. From sticks to skates, get everything for your hockey team.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#products"
                className="bg-white text-slate-800 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
              >
                Shop Hockey Gear
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

      {/* Hockey Categories */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Hockey Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {hockeyCategories.map((category, index) => (
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
                Hockey Equipment
              </h2>
              <p className="text-gray-600">
                Showing {hockeyProducts.length} products
              </p>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 lg:mt-0">
              {/* View Mode Toggle */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-slate-700 text-white' : 'bg-white text-gray-600'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-slate-700 text-white' : 'bg-white text-gray-600'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-slate-500"
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
                          className="rounded border-gray-300 text-slate-700 focus:ring-slate-500"
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
                          className="rounded border-gray-300 text-slate-700 focus:ring-slate-500"
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
                          className="rounded border-gray-300 text-slate-700 focus:ring-slate-500"
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
                  {hockeyProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                    >
                      <div className="relative h-64 bg-gradient-to-br from-slate-100 to-blue-100 flex items-center justify-center">
                        {product.isNew && (
                          <span className="absolute top-3 left-3 bg-slate-700 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            New
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="absolute top-3 left-3 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Bestseller
                          </span>
                        )}
                        <div className="text-5xl">🏒</div>
                        <button className="absolute top-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <Heart className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-gray-900">{product.name}</h3>
                          <span className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-full">
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
                          <button className="bg-slate-700 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors duration-200 text-sm font-semibold">
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
                  {hockeyProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex"
                    >
                      <div className="w-48 relative bg-gradient-to-br from-slate-100 to-blue-100 flex items-center justify-center">
                        {product.isNew && (
                          <span className="absolute top-3 left-3 bg-slate-700 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            New
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="absolute top-3 left-3 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Bestseller
                          </span>
                        )}
                        <div className="text-5xl">🏒</div>
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                              <span className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-full">
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
                          <button className="bg-slate-700 text-white px-6 py-3 rounded-lg hover:bg-slate-800 transition-colors duration-200 font-semibold">
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

      {/* Goalie Equipment Special Section */}
      <section className="py-16 bg-gradient-to-r from-red-800 to-rose-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="flex justify-center mb-4">
              <span className="text-4xl">🥅</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">
              Professional Goalie Equipment
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Complete goalie sets including leg pads, gloves, chest protectors, and masks for maximum protection
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-red-800 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors duration-200">
                View Goalie Gear
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200">
                Custom Fitting
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Hockey Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Hockey Solutions
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Everything you need to equip players and goalies for competitive hockey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="text-4xl mb-4">🏒</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Player Equipment</h3>
              <p className="text-gray-600 mb-4">Complete player sets including sticks, skates, and protective gear</p>
              <button className="text-slate-700 font-semibold hover:text-slate-900">
                Explore Player Gear →
              </button>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="text-4xl mb-4">🥅</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Goalie Equipment</h3>
              <p className="text-gray-600 mb-4">Professional goalie sets and specialized protective equipment</p>
              <button className="text-slate-700 font-semibold hover:text-slate-900">
                View Goalie Sets →
              </button>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="text-4xl mb-4">👕</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Team Apparel</h3>
              <p className="text-gray-600 mb-4">Jerseys, socks, and team uniforms for the entire roster</p>
              <button className="text-slate-700 font-semibold hover:text-slate-900">
                Shop Team Wear →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Protective Gear Focus */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-50 to-slate-100 rounded-3xl p-12 text-center">
            <div className="flex justify-center mb-6">
              <span className="text-5xl">🛡️</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Advanced Protective Technology
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              State-of-the-art protective gear featuring impact-absorbing materials and ergonomic designs for maximum safety and mobility
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-slate-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors duration-200">
                View Protective Gear
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200">
                Safety Standards Info
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Hockey Updates
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Get the latest on hockey equipment, safety technology, and exclusive team packages
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-slate-500"
            />
            <button className="bg-slate-700 text-white px-6 py-3 rounded-r-lg hover:bg-slate-800 transition-colors duration-200 font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}