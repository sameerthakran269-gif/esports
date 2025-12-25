// app/sports-equipment/racket-sports/tennis/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Heart, Filter, Grid, List } from 'lucide-react';

export default function TennisPage() {
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    type: [],
    priceRange: [],
    brand: [],
    skillLevel: []
  });

  const tennisProducts = [
    {
      id: 4,
      name: 'Professional Tennis Racket',
      price: '$189.99',
      originalPrice: '$229.99',
      image: '/tennis-racket.jpg',
      rating: 4.9,
      reviews: 134,
      category: 'Rackets',
      brand: 'AcePro',
      description: 'Carbon fiber tennis racket with premium grip and vibration dampening technology',
      isNew: true,
      isBestseller: true,
      type: 'Racket',
      skillLevel: 'Professional'
    },
    {
      id: 18,
      name: 'Advanced Tennis Racket',
      price: '$249.99',
      originalPrice: '$299.99',
      image: '/tennis-racket-pro.jpg',
      rating: 4.8,
      reviews: 89,
      category: 'Rackets',
      brand: 'AcePro',
      description: 'Advanced graphite tennis racket for competitive players',
      isNew: true,
      isBestseller: false,
      type: 'Racket',
      skillLevel: 'Advanced'
    },
    {
      id: 24,
      name: 'Tennis Ball Machine',
      price: '$399.99',
      originalPrice: '$499.99',
      image: '/tennis-ball-machine.jpg',
      rating: 4.8,
      reviews: 67,
      category: 'Training',
      brand: 'AcePro',
      description: 'Automatic tennis ball machine with remote control',
      isNew: false,
      isBestseller: false,
      type: 'Training Equipment',
      skillLevel: 'All Levels'
    },
    {
      id: 27,
      name: 'Beginner Tennis Racket Set',
      price: '$79.99',
      originalPrice: '$99.99',
      image: '/tennis-beginner-set.jpg',
      rating: 4.5,
      reviews: 203,
      category: 'Rackets',
      brand: 'TennisStart',
      description: 'Complete beginner set with racket, balls, and case',
      isNew: false,
      isBestseller: true,
      type: 'Racket',
      skillLevel: 'Beginner'
    },
    {
      id: 28,
      name: 'Professional Tennis Balls (12 cans)',
      price: '$59.99',
      originalPrice: '$74.99',
      image: '/tennis-balls.jpg',
      rating: 4.7,
      reviews: 156,
      category: 'Accessories',
      brand: 'Champion',
      description: 'Professional grade tennis balls - 12 cans',
      isNew: false,
      isBestseller: true,
      type: 'Balls',
      skillLevel: 'All Levels'
    },
    {
      id: 29,
      name: 'Tennis Net & Posts Set',
      price: '$199.99',
      originalPrice: '$249.99',
      image: '/tennis-net.jpg',
      rating: 4.4,
      reviews: 78,
      category: 'Court Equipment',
      brand: 'CourtMaster',
      description: 'Professional tennis net with adjustable posts',
      isNew: true,
      isBestseller: false,
      type: 'Court Equipment',
      skillLevel: 'All Levels'
    },
    {
      id: 30,
      name: 'Tennis Bag Pro',
      price: '$89.99',
      originalPrice: '$119.99',
      image: '/tennis-bag.jpg',
      rating: 4.6,
      reviews: 92,
      category: 'Accessories',
      brand: 'AcePro',
      description: 'Professional tennis bag with thermal lining',
      isNew: false,
      isBestseller: true,
      type: 'Accessories',
      skillLevel: 'All Levels'
    },
    {
      id: 31,
      name: 'Vibration Dampeners (Set of 6)',
      price: '$12.99',
      originalPrice: '$16.99',
      image: '/vibration-dampeners.jpg',
      rating: 4.3,
      reviews: 267,
      category: 'Accessories',
      brand: 'AcePro',
      description: 'Set of 6 professional vibration dampeners',
      isNew: false,
      isBestseller: false,
      type: 'Accessories',
      skillLevel: 'All Levels'
    },
    {
      id: 32,
      name: 'Tennis Overgrips (30 pack)',
      price: '$24.99',
      originalPrice: '$32.99',
      image: '/tennis-overgrips.jpg',
      rating: 4.8,
      reviews: 189,
      category: 'Accessories',
      brand: 'GripMaster',
      description: '30-pack of professional tennis overgrips',
      isNew: true,
      isBestseller: false,
      type: 'Accessories',
      skillLevel: 'All Levels'
    },
    {
      id: 33,
      name: 'Tennis String Reel',
      price: '$149.99',
      originalPrice: '$189.99',
      image: '/tennis-string.jpg',
      rating: 4.5,
      reviews: 45,
      category: 'Accessories',
      brand: 'StringMaster',
      description: 'Professional tennis string reel - 200m',
      isNew: false,
      isBestseller: false,
      type: 'Accessories',
      skillLevel: 'Professional'
    },
    {
      id: 34,
      name: 'Tennis Ball Hopper',
      price: '$49.99',
      originalPrice: '$64.99',
      image: '/tennis-hopper.jpg',
      rating: 4.4,
      reviews: 134,
      category: 'Training',
      brand: 'CourtMaster',
      description: '150-ball capacity tennis ball hopper',
      isNew: false,
      isBestseller: true,
      type: 'Training Equipment',
      skillLevel: 'All Levels'
    },
    {
      id: 35,
      name: 'Tennis Elbow Support',
      price: '$19.99',
      originalPrice: '$24.99',
      image: '/tennis-elbow-support.jpg',
      rating: 4.2,
      reviews: 178,
      category: 'Accessories',
      brand: 'SupportPro',
      description: 'Professional tennis elbow support brace',
      isNew: true,
      isBestseller: false,
      type: 'Accessories',
      skillLevel: 'All Levels'
    }
  ];

  const tennisCategories = [
    {
      name: 'Tennis Rackets',
      icon: '🎾',
      description: 'Professional & Beginner Rackets',
      count: '8 products',
      slug: 'rackets'
    },
    {
      name: 'Tennis Balls',
      icon: '⚪',
      description: 'Practice & Match Balls',
      count: '6 products',
      slug: 'balls'
    },
    {
      name: 'Training Equipment',
      icon: '🎯',
      description: 'Ball Machines & Trainers',
      count: '4 products',
      slug: 'training'
    },
    {
      name: 'Court Equipment',
      icon: '🏟️',
      description: 'Nets, Posts & Accessories',
      count: '3 products',
      slug: 'court-equipment'
    },
    {
      name: 'Accessories',
      icon: '🎒',
      description: 'Bags, Grips & Dampeners',
      count: '12 products',
      slug: 'accessories'
    },
    {
      name: 'Stringing Services',
      icon: '🔧',
      description: 'Professional Stringing',
      count: 'Service',
      slug: 'stringing'
    }
  ];

  const filters = {
    type: ['Racket', 'Balls', 'Training Equipment', 'Court Equipment', 'Accessories'],
    priceRange: [
      'Under $50',
      '$50 - $100',
      '$100 - $200',
      '$200 - $500',
      'Above $500'
    ],
    brand: ['AcePro', 'TennisStart', 'Champion', 'CourtMaster', 'GripMaster', 'StringMaster', 'SupportPro'],
    skillLevel: ['Beginner', 'Intermediate', 'Advanced', 'Professional', 'All Levels']
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
      <section className="bg-gradient-to-r from-blue-600 to-green-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Tennis Equipment
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Premium tennis rackets, balls, and accessories for players of all levels. From beginner sets to professional gear.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#products"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
              >
                Shop Tennis Gear
              </Link>
              <Link
                href="/sports-equipment/racket-sports"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200"
              >
                View All Racket Sports
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tennis Categories */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Tennis Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {tennisCategories.map((category, index) => (
              <Link
                key={index}
                href={`/sports-equipment/racket-sports/tennis/${category.slug}`}
                className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-200">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{category.description}</p>
                <span className="text-xs text-blue-600 font-medium">{category.count}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎾</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Stringing</h3>
              <p className="text-gray-600">Professional racket stringing with custom tension for your playing style.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Shipping</h3>
              <p className="text-gray-600">Free delivery on orders over $100. Get court-ready in 2-3 days.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍💼</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Player Matching</h3>
              <p className="text-gray-600">We help you find the perfect racket for your skill level and style.</p>
            </div>
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
                Tennis Equipment
              </h2>
              <p className="text-gray-600">
                Showing {tennisProducts.length} products
              </p>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 lg:mt-0">
              {/* View Mode Toggle */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
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

                {/* Type Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Product Type</h4>
                  <div className="space-y-2">
                    {filters.type.map((type) => (
                      <label key={type} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.type.includes(type)}
                          onChange={() => toggleFilter('type', type)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{type}</span>
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
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
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
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Skill Level Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Skill Level</h4>
                  <div className="space-y-2">
                    {filters.skillLevel.map((level) => (
                      <label key={level} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.skillLevel.includes(level)}
                          onChange={() => toggleFilter('skillLevel', level)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{level}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                <button
                  onClick={() => setSelectedFilters({ type: [], priceRange: [], brand: [], skillLevel: [] })}
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
                  {tennisProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                    >
                      <div className="relative h-64 bg-gradient-to-br from-blue-50 to-green-100 flex items-center justify-center">
                        {product.isNew && (
                          <span className="absolute top-3 left-3 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            New
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="absolute top-3 left-3 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Bestseller
                          </span>
                        )}
                        <div className="text-4xl">
                          🎾
                        </div>
                        <button className="absolute top-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <Heart className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-gray-900">{product.name}</h3>
                          <div className="flex flex-col gap-1 items-end">
                            <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                              {product.type}
                            </span>
                            <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                              {product.skillLevel}
                            </span>
                          </div>
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
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-lg font-bold text-gray-900">{product.price}</span>
                            {product.originalPrice && (
                              <span className="ml-2 text-sm text-gray-500 line-through">
                                {product.originalPrice}
                              </span>
                            )}
                          </div>
                          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-semibold">
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
                  {tennisProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex"
                    >
                      <div className="w-48 relative bg-gradient-to-br from-blue-50 to-green-100 flex items-center justify-center">
                        {product.isNew && (
                          <span className="absolute top-3 left-3 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            New
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="absolute top-3 left-3 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Bestseller
                          </span>
                        )}
                        <div className="text-4xl">
                          🎾
                        </div>
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                              <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                                {product.type}
                              </span>
                              <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                                {product.skillLevel}
                              </span>
                            </div>
                            <p className="text-gray-600 mb-3">{product.description}</p>
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
                          <span className="text-sm text-gray-600">Level: {product.skillLevel}</span>
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
                          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold">
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

      {/* Services Banner */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Professional Tennis Services
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Comprehensive tennis services to keep you at the top of your game.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl mb-3">🔧</div>
                <h3 className="font-semibold mb-2">Racket Stringing</h3>
                <p className="text-blue-100 text-sm">Professional stringing with custom tension options</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl mb-3">🎾</div>
                <h3 className="font-semibold mb-2">Grip Replacement</h3>
                <p className="text-blue-100 text-sm">Custom grip installation for better control</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl mb-3">👨‍💼</div>
                <h3 className="font-semibold mb-2">Player Consultation</h3>
                <p className="text-blue-100 text-sm">Expert advice on racket selection and customization</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Tennis Community
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Join our tennis community for tips, local tournaments, and exclusive tennis gear deals
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-r-lg hover:bg-blue-700 transition-colors duration-200 font-semibold">
              Join Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}