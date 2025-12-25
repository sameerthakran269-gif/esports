// app/sports-equipment/racket-sports/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Heart, Filter, Grid, List } from 'lucide-react';

export default function RacketSportsPage() {
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    sport: [],
    priceRange: [],
    brand: [],
    skillLevel: []
  });

  const racketSportsProducts = [
    {
      id: 4,
      name: 'Professional Tennis Racket',
      price: '$189.99',
      originalPrice: '$229.99',
      image: '/tennis-racket.jpg',
      rating: 4.9,
      reviews: 134,
      category: 'Tennis',
      brand: 'AcePro',
      description: 'Carbon fiber tennis racket with premium grip and vibration dampening technology',
      isNew: true,
      isBestseller: true,
      sport: 'Tennis',
      skillLevel: 'Professional'
    },
    {
      id: 5,
      name: 'Badminton Set',
      price: '$79.99',
      originalPrice: '$99.99',
      image: '/badminton-set.jpg',
      rating: 4.4,
      reviews: 167,
      category: 'Badminton',
      brand: 'ShuttleMaster',
      description: 'Complete badminton set with net, rackets, and shuttlecocks',
      isNew: false,
      isBestseller: false,
      sport: 'Badminton',
      skillLevel: 'Intermediate'
    },
    {
      id: 6,
      name: 'Table Tennis Table',
      price: '$499.99',
      originalPrice: '$599.99',
      image: '/ping-pong-table.jpg',
      rating: 4.6,
      reviews: 78,
      category: 'Table Tennis',
      brand: 'PaddlePro',
      description: 'Professional foldable table tennis table with net and paddles',
      isNew: true,
      isBestseller: false,
      sport: 'Table Tennis',
      skillLevel: 'All Levels'
    },
    {
      id: 18,
      name: 'Advanced Tennis Racket',
      price: '$249.99',
      originalPrice: '$299.99',
      image: '/tennis-racket-pro.jpg',
      rating: 4.8,
      reviews: 89,
      category: 'Tennis',
      brand: 'AcePro',
      description: 'Advanced graphite tennis racket for competitive players',
      isNew: true,
      isBestseller: false,
      sport: 'Tennis',
      skillLevel: 'Advanced'
    },
    {
      id: 19,
      name: 'Professional Badminton Racket',
      price: '$129.99',
      originalPrice: '$159.99',
      image: '/badminton-racket.jpg',
      rating: 4.7,
      reviews: 56,
      category: 'Badminton',
      brand: 'ShuttleMaster',
      description: 'Carbon fiber badminton racket with enhanced string tension',
      isNew: false,
      isBestseller: true,
      sport: 'Badminton',
      skillLevel: 'Professional'
    },
    {
      id: 20,
      name: 'Table Tennis Racket Set',
      price: '$49.99',
      originalPrice: '$69.99',
      image: '/ping-pong-paddles.jpg',
      rating: 4.5,
      reviews: 203,
      category: 'Table Tennis',
      brand: 'PaddlePro',
      description: 'Set of 4 professional table tennis rackets with case',
      isNew: false,
      isBestseller: true,
      sport: 'Table Tennis',
      skillLevel: 'Intermediate'
    },
    {
      id: 21,
      name: 'Squash Racket Professional',
      price: '$149.99',
      originalPrice: '$189.99',
      image: '/squash-racket.jpg',
      rating: 4.6,
      reviews: 45,
      category: 'Squash',
      brand: 'CourtMaster',
      description: 'Professional squash racket with tear-drop shape',
      isNew: true,
      isBestseller: false,
      sport: 'Squash',
      skillLevel: 'Advanced'
    },
    {
      id: 22,
      name: 'Racquetball Set',
      price: '$89.99',
      originalPrice: '$119.99',
      image: '/racquetball-set.jpg',
      rating: 4.3,
      reviews: 78,
      category: 'Racquetball',
      brand: 'SpeedPro',
      description: 'Complete racquetball set with rackets and balls',
      isNew: false,
      isBestseller: false,
      sport: 'Racquetball',
      skillLevel: 'Beginner'
    },
    {
      id: 23,
      name: 'Pickleball Paddle Set',
      price: '$69.99',
      originalPrice: '$89.99',
      image: '/pickleball-paddles.jpg',
      rating: 4.7,
      reviews: 134,
      category: 'Pickleball',
      brand: 'PaddlePro',
      description: 'Set of 4 composite pickleball paddles with balls',
      isNew: true,
      isBestseller: true,
      sport: 'Pickleball',
      skillLevel: 'All Levels'
    },
    {
      id: 24,
      name: 'Tennis Ball Machine',
      price: '$399.99',
      originalPrice: '$499.99',
      image: '/tennis-ball-machine.jpg',
      rating: 4.8,
      reviews: 67,
      category: 'Tennis',
      brand: 'AcePro',
      description: 'Automatic tennis ball machine with remote control',
      isNew: false,
      isBestseller: false,
      sport: 'Tennis',
      skillLevel: 'All Levels'
    },
    {
      id: 25,
      name: 'Badminton Stringing Machine',
      price: '$199.99',
      originalPrice: '$249.99',
      image: '/stringing-machine.jpg',
      rating: 4.4,
      reviews: 23,
      category: 'Badminton',
      brand: 'StringMaster',
      description: 'Professional badminton racket stringing machine',
      isNew: true,
      isBestseller: false,
      sport: 'Badminton',
      skillLevel: 'Professional'
    },
    {
      id: 26,
      name: 'Table Tennis Robot',
      price: '$299.99',
      originalPrice: '$379.99',
      image: '/ping-pong-robot.jpg',
      rating: 4.6,
      reviews: 41,
      category: 'Table Tennis',
      brand: 'PaddlePro',
      description: 'Automatic table tennis ball launcher for training',
      isNew: false,
      isBestseller: true,
      sport: 'Table Tennis',
      skillLevel: 'All Levels'
    }
  ];

  const racketSports = [
    {
      name: 'Tennis',
      icon: '🎾',
      description: 'Rackets, Balls & Equipment',
      count: '15 products',
      slug: 'tennis'
    },
    {
      name: 'Badminton',
      icon: '🏸',
      description: 'Rackets, Shuttlecocks & Nets',
      count: '12 products',
      slug: 'badmintan'
    },
    {
      name: 'Table Tennis',
      icon: '🏓',
      description: 'Tables, Paddles & Balls',
      count: '18 products',
      slug: 'table-tennis'
    },
    {
      name: 'Squash',
      icon: '🎯',
      description: 'Rackets, Balls & Eyewear',
      count: '8 products',
      slug: 'squash'
    },
    {
      name: 'Racquetball',
      icon: '🔴',
      description: 'Rackets & Protective Gear',
      count: '6 products',
      slug: 'racquetball'
    },
    {
      name: 'Pickleball',
      icon: '🥒',
      description: 'Paddles, Nets & Balls',
      count: '10 products',
      slug: 'pickleball'
    }
  ];

  const filters = {
    sport: ['Tennis', 'Badminton', 'Table Tennis', 'Squash', 'Racquetball', 'Pickleball'],
    priceRange: [
      'Under $50',
      '$50 - $100',
      '$100 - $200',
      '$200 - $500',
      'Above $500'
    ],
    brand: ['AcePro', 'ShuttleMaster', 'PaddlePro', 'CourtMaster', 'SpeedPro', 'StringMaster'],
    skillLevel: ['Beginner', 'Intermediate', 'Advanced', 'Professional', 'All Levels']
  };

  const toggleFilter = (filterType, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter(item => item !== value)
        : [...prev[filterType], value]
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Racket Sports Equipment
            </h1>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Premium rackets, paddles, and gear for tennis, badminton, table tennis, and more. Elevate your game with professional equipment.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#products"
                className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors duration-200"
              >
                Shop Rackets
              </Link>
              <Link
                href="/sports-equipment"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200"
              >
                View All Sports
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sports Categories */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Racket Sports Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {racketSports.map((sport, index) => (
              <Link
                key={index}
                href={`/sports-equipment/category/racket-sports/features/${sport.slug}`}
                className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-200">
                  {sport.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{sport.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{sport.description}</p>
                <span className="text-xs text-purple-600 font-medium">{sport.count}</span>
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
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Shipping</h3>
              <p className="text-gray-600">Free delivery on orders over $100. Get your gear in 2-3 days.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Stringing</h3>
              <p className="text-gray-600">Professional racket stringing service available for all racket types.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
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
                Racket Sports Equipment
              </h2>
              <p className="text-gray-600">
                Showing {racketSportsProducts.length} products
              </p>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 lg:mt-0">
              {/* View Mode Toggle */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-purple-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-purple-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300"
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

                {/* Sport Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Sport Type</h4>
                  <div className="space-y-2">
                    {filters.sport.map((sport) => (
                      <label key={sport} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.sport.includes(sport)}
                          onChange={() => toggleFilter('sport', sport)}
                          className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{sport}</span>
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
                          className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
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
                          className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
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
                          className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{level}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                <button
                  onClick={() => setSelectedFilters({ sport: [], priceRange: [], brand: [], skillLevel: [] })}
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
                  {racketSportsProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                    >
                      <div className="relative h-64 bg-gradient-to-br from-purple-50 to-pink-100 flex items-center justify-center">
                        {product.isNew && (
                          <span className="absolute top-3 left-3 bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            New
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="absolute top-3 left-3 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Bestseller
                          </span>
                        )}
                        <div className="text-4xl">
                          {product.sport === 'Tennis' ? '🎾' : 
                           product.sport === 'Badminton' ? '🏸' :
                           product.sport === 'Table Tennis' ? '🏓' :
                           product.sport === 'Squash' ? '🎯' :
                           product.sport === 'Racquetball' ? '🔴' : '🥒'}
                        </div>
                        <button className="absolute top-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <Heart className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-gray-900">{product.name}</h3>
                          <div className="flex flex-col gap-1 items-end">
                            <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
                              {product.sport}
                            </span>
                            <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
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
                          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200 text-sm font-semibold">
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
                  {racketSportsProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex"
                    >
                      <div className="w-48 relative bg-gradient-to-br from-purple-50 to-pink-100 flex items-center justify-center">
                        {product.isNew && (
                          <span className="absolute top-3 left-3 bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            New
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="absolute top-3 left-3 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Bestseller
                          </span>
                        )}
                        <div className="text-4xl">
                          {product.sport === 'Tennis' ? '🎾' : 
                           product.sport === 'Badminton' ? '🏸' :
                           product.sport === 'Table Tennis' ? '🏓' :
                           product.sport === 'Squash' ? '🎯' :
                           product.sport === 'Racquetball' ? '🔴' : '🥒'}
                        </div>
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                              <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
                                {product.sport}
                              </span>
                              <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
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
                          <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-200 font-semibold">
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
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Professional Racket Services
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Get your rackets professionally strung, grip replaced, or customized to your playing style.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl mb-3">🎾</div>
                <h3 className="font-semibold mb-2">Racket Stringing</h3>
                <p className="text-purple-100 text-sm">Professional stringing with various tension options</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl mb-3">🔧</div>
                <h3 className="font-semibold mb-2">Grip Replacement</h3>
                <p className="text-purple-100 text-sm">Custom grip installation for better control</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="font-semibold mb-2">Player Consultation</h3>
                <p className="text-purple-100 text-sm">Expert advice on racket selection and customization</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Racket Sports Community
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Join our community for tips, tournaments, and exclusive racket sports deals
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
            <button className="bg-purple-600 text-white px-6 py-3 rounded-r-lg hover:bg-purple-700 transition-colors duration-200 font-semibold">
              Join Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}