// app/sports-equipment/racket-sports/badminton/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Heart, Filter, Grid, List } from 'lucide-react';

export default function BadmintonPage() {
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    type: [],
    priceRange: [],
    brand: [],
    skillLevel: []
  });

  const badmintonProducts = [
    {
      id: 5,
      name: 'Professional Badminton Racket',
      price: '$129.99',
      originalPrice: '$159.99',
      image: '/badminton-racket.jpg',
      rating: 4.7,
      reviews: 56,
      category: 'Rackets',
      brand: 'ShuttleMaster',
      description: 'Carbon fiber badminton racket with enhanced string tension',
      isNew: false,
      isBestseller: true,
      type: 'Racket',
      skillLevel: 'Professional'
    },
    {
      id: 19,
      name: 'Badminton Set',
      price: '$79.99',
      originalPrice: '$99.99',
      image: '/badminton-set.jpg',
      rating: 4.4,
      reviews: 167,
      category: 'Sets',
      brand: 'ShuttleMaster',
      description: 'Complete badminton set with net, rackets, and shuttlecocks',
      isNew: false,
      isBestseller: false,
      type: 'Complete Set',
      skillLevel: 'Intermediate'
    },
    {
      id: 25,
      name: 'Badminton Stringing Machine',
      price: '$199.99',
      originalPrice: '$249.99',
      image: '/stringing-machine.jpg',
      rating: 4.4,
      reviews: 23,
      category: 'Equipment',
      brand: 'StringMaster',
      description: 'Professional badminton racket stringing machine',
      isNew: true,
      isBestseller: false,
      type: 'Equipment',
      skillLevel: 'Professional'
    },
    {
      id: 36,
      name: 'Beginner Badminton Racket',
      price: '$49.99',
      originalPrice: '$69.99',
      image: '/badminton-beginner.jpg',
      rating: 4.5,
      reviews: 89,
      category: 'Rackets',
      brand: 'FeatherLight',
      description: 'Lightweight aluminum racket perfect for beginners',
      isNew: true,
      isBestseller: true,
      type: 'Racket',
      skillLevel: 'Beginner'
    },
    {
      id: 37,
      name: 'Tournament Shuttlecocks (12 tubes)',
      price: '$89.99',
      originalPrice: '$109.99',
      image: '/shuttlecocks.jpg',
      rating: 4.8,
      reviews: 134,
      category: 'Shuttlecocks',
      brand: 'AeroFlight',
      description: 'Professional grade feather shuttlecocks - 12 tubes',
      isNew: false,
      isBestseller: true,
      type: 'Shuttlecocks',
      skillLevel: 'Professional'
    },
    {
      id: 38,
      name: 'Badminton Net & Posts',
      price: '$129.99',
      originalPrice: '$159.99',
      image: '/badminton-net.jpg',
      rating: 4.6,
      reviews: 67,
      category: 'Court Equipment',
      brand: 'NetPro',
      description: 'Professional badminton net with tension adjustment',
      isNew: false,
      isBestseller: false,
      type: 'Court Equipment',
      skillLevel: 'All Levels'
    },
    {
      id: 39,
      name: 'Badminton Bag Pro',
      price: '$69.99',
      originalPrice: '$89.99',
      image: '/badminton-bag.jpg',
      rating: 4.5,
      reviews: 78,
      category: 'Accessories',
      brand: 'ShuttleMaster',
      description: '6-racket capacity thermal badminton bag',
      isNew: true,
      isBestseller: false,
      type: 'Accessories',
      skillLevel: 'All Levels'
    },
    {
      id: 40,
      name: 'Synthetic Shuttlecocks (24 pack)',
      price: '$24.99',
      originalPrice: '$34.99',
      image: '/synthetic-shuttlecocks.jpg',
      rating: 4.3,
      reviews: 156,
      category: 'Shuttlecocks',
      brand: 'DuraFlight',
      description: 'Durable synthetic shuttlecocks for practice',
      isNew: false,
      isBestseller: true,
      type: 'Shuttlecocks',
      skillLevel: 'All Levels'
    },
    {
      id: 41,
      name: 'Badminton Overgrips (20 pack)',
      price: '$19.99',
      originalPrice: '$29.99',
      image: '/badminton-grips.jpg',
      rating: 4.7,
      reviews: 203,
      category: 'Accessories',
      brand: 'GripMaster',
      description: '20-pack of professional badminton overgrips',
      isNew: false,
      isBestseller: false,
      type: 'Accessories',
      skillLevel: 'All Levels'
    },
    {
      id: 42,
      name: 'Badminton String Reel',
      price: '$79.99',
      originalPrice: '$99.99',
      image: '/badminton-string.jpg',
      rating: 4.4,
      reviews: 45,
      category: 'Accessories',
      brand: 'StringMaster',
      description: 'Professional badminton string reel - 100m',
      isNew: true,
      isBestseller: false,
      type: 'Accessories',
      skillLevel: 'Professional'
    },
    {
      id: 43,
      name: 'Badminton Court Mat',
      price: '$199.99',
      originalPrice: '$249.99',
      image: '/badminton-mat.jpg',
      rating: 4.2,
      reviews: 34,
      category: 'Court Equipment',
      brand: 'CourtPro',
      description: 'Professional badminton court mat for indoor play',
      isNew: true,
      isBestseller: false,
      type: 'Court Equipment',
      skillLevel: 'All Levels'
    },
    {
      id: 44,
      name: 'Badminton Wrist Support',
      price: '$15.99',
      originalPrice: '$22.99',
      image: '/wrist-support.jpg',
      rating: 4.1,
      reviews: 89,
      category: 'Accessories',
      brand: 'SupportPro',
      description: 'Professional wrist support for badminton players',
      isNew: false,
      isBestseller: false,
      type: 'Accessories',
      skillLevel: 'All Levels'
    }
  ];

  const badmintonCategories = [
    {
      name: 'Badminton Rackets',
      icon: '🏸',
      description: 'Professional & Beginner Rackets',
      count: '6 products',
      slug: 'rackets'
    },
    {
      name: 'Shuttlecocks',
      icon: '🪶',
      description: 'Feather & Synthetic Shuttlecocks',
      count: '8 products',
      slug: 'shuttlecocks'
    },
    {
      name: 'Court Equipment',
      icon: '🏟️',
      description: 'Nets, Posts & Mats',
      count: '4 products',
      slug: 'court-equipment'
    },
    {
      name: 'Accessories',
      icon: '🎒',
      description: 'Bags, Grips & Strings',
      count: '10 products',
      slug: 'accessories'
    },
    {
      name: 'Complete Sets',
      icon: '📦',
      description: 'Starter & Family Sets',
      count: '3 products',
      slug: 'sets'
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
    type: ['Racket', 'Shuttlecocks', 'Complete Set', 'Court Equipment', 'Accessories', 'Equipment'],
    priceRange: [
      'Under $30',
      '$30 - $60',
      '$60 - $120',
      '$120 - $200',
      'Above $200'
    ],
    brand: ['ShuttleMaster', 'FeatherLight', 'AeroFlight', 'NetPro', 'DuraFlight', 'GripMaster', 'StringMaster', 'CourtPro', 'SupportPro'],
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
      <section className="bg-gradient-to-r from-orange-500 to-red-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Badminton Equipment
            </h1>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Premium badminton rackets, shuttlecocks, and gear for players of all levels. Experience the speed and precision of professional badminton.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#products"
                className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-200"
              >
                Shop Badminton Gear
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

      {/* Badminton Categories */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Badminton Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {badmintonCategories.map((category, index) => (
              <Link
                key={index}
                href={`/sports-equipment/racket-sports/badminton/${category.slug}`}
                className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-200">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{category.description}</p>
                <span className="text-xs text-orange-600 font-medium">{category.count}</span>
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
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏸</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Stringing</h3>
              <p className="text-gray-600">Professional racket stringing with precise tension for optimal performance.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Shipping</h3>
              <p className="text-gray-600">Free delivery on orders over $75. Get court-ready in 2-3 days.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍💼</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Player Matching</h3>
              <p className="text-gray-600">Find the perfect racket balance and weight for your playing style.</p>
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
                Badminton Equipment
              </h2>
              <p className="text-gray-600">
                Showing {badmintonProducts.length} products
              </p>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 lg:mt-0">
              {/* View Mode Toggle */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-orange-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-orange-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300"
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
                          className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
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
                          className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
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
                          className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
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
                          className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
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
                  {badmintonProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                    >
                      <div className="relative h-64 bg-gradient-to-br from-orange-50 to-red-100 flex items-center justify-center">
                        {product.isNew && (
                          <span className="absolute top-3 left-3 bg-orange-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            New
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="absolute top-3 left-3 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Bestseller
                          </span>
                        )}
                        <div className="text-4xl">
                          🏸
                        </div>
                        <button className="absolute top-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <Heart className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-gray-900">{product.name}</h3>
                          <div className="flex flex-col gap-1 items-end">
                            <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full">
                              {product.type}
                            </span>
                            <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
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
                          <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors duration-200 text-sm font-semibold">
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
                  {badmintonProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex"
                    >
                      <div className="w-48 relative bg-gradient-to-br from-orange-50 to-red-100 flex items-center justify-center">
                        {product.isNew && (
                          <span className="absolute top-3 left-3 bg-orange-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            New
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="absolute top-3 left-3 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Bestseller
                          </span>
                        )}
                        <div className="text-4xl">
                          🏸
                        </div>
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                              <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full">
                                {product.type}
                              </span>
                              <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
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
                          <button className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors duration-200 font-semibold">
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
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Professional Badminton Services
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Comprehensive badminton services to enhance your game performance and equipment longevity.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl mb-3">🔧</div>
                <h3 className="font-semibold mb-2">Racket Stringing</h3>
                <p className="text-orange-100 text-sm">Professional stringing with high-precision tension control</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl mb-3">🏸</div>
                <h3 className="font-semibold mb-2">Grip Replacement</h3>
                <p className="text-orange-100 text-sm">Custom grip installation for better feel and control</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl mb-3">👨‍💼</div>
                <h3 className="font-semibold mb-2">Player Consultation</h3>
                <p className="text-orange-100 text-sm">Expert advice on racket selection and string tension</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Badminton Tips Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Badminton Pro Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-2xl mb-3">🎯</div>
              <h3 className="font-semibold text-gray-900 mb-2">Racket Weight</h3>
              <p className="text-sm text-gray-600">Choose lighter rackets for speed, heavier for power in your smashes.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-2xl mb-3">🔄</div>
              <h3 className="font-semibold text-gray-900 mb-2">String Tension</h3>
              <p className="text-sm text-gray-600">Higher tension for control, lower tension for power in your shots.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-2xl mb-3">🪶</div>
              <h3 className="font-semibold text-gray-900 mb-2">Shuttlecock Choice</h3>
              <p className="text-sm text-gray-600">Feather for tournaments, synthetic for practice and durability.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-2xl mb-3">👟</div>
              <h3 className="font-semibold text-gray-900 mb-2">Footwear</h3>
              <p className="text-sm text-gray-600">Use court shoes with good grip for quick directional changes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Badminton Community
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Join our badminton community for training tips, local tournaments, and exclusive gear deals
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-300"
            />
            <button className="bg-orange-600 text-white px-6 py-3 rounded-r-lg hover:bg-orange-700 transition-colors duration-200 font-semibold">
              Join Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}