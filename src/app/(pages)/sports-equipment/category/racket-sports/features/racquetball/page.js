// app/sports-equipment/racket-sports/racquetball/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Heart, Filter, Grid, List } from 'lucide-react';

export default function RacquetballPage() {
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    type: [],
    priceRange: [],
    brand: [],
    skillLevel: []
  });

  const racquetballProducts = [
    {
      id: 22,
      name: 'Racquetball Set Pro',
      price: '$89.99',
      originalPrice: '$119.99',
      image: '/racquetball-set.jpg',
      rating: 4.3,
      reviews: 78,
      category: 'Starter Sets',
      brand: 'SpeedPro',
      description: 'Complete racquetball set with rackets, balls, and protective eyewear',
      isNew: false,
      isBestseller: false,
      type: 'Starter Set',
      skillLevel: 'Beginner'
    },
    {
      id: 65,
      name: 'Professional Racquetball Racket',
      price: '$129.99',
      originalPrice: '$159.99',
      image: '/racquetball-racket-pro.jpg',
      rating: 4.7,
      reviews: 112,
      category: 'Rackets',
      brand: 'Ektelon',
      description: 'Professional racquetball racket with quadra-form shape and tear-drop design',
      isNew: true,
      isBestseller: true,
      type: 'Racket',
      skillLevel: 'Professional'
    },
    {
      id: 66,
      name: 'Racquetball Balls (12 cans)',
      price: '$34.99',
      originalPrice: '$44.99',
      image: '/racquetball-balls.jpg',
      rating: 4.5,
      reviews: 203,
      category: 'Balls',
      brand: 'Penn',
      description: 'Professional grade racquetball balls - 12 cans of 3 balls each',
      isNew: false,
      isBestseller: true,
      type: 'Balls',
      skillLevel: 'All Levels'
    },
    {
      id: 67,
      name: 'Racquetball Protective Goggles',
      price: '$29.99',
      originalPrice: '$39.99',
      image: '/racquetball-goggles.jpg',
      rating: 4.6,
      reviews: 156,
      category: 'Protective Gear',
      brand: 'Head',
      description: 'Anti-fog protective goggles with adjustable strap and ventilation',
      isNew: true,
      isBestseller: true,
      type: 'Protective Gear',
      skillLevel: 'All Levels'
    },
    {
      id: 68,
      name: 'Racquetball Gloves (Pair)',
      price: '$19.99',
      originalPrice: '$29.99',
      image: '/racquetball-gloves.jpg',
      rating: 4.4,
      reviews: 189,
      category: 'Accessories',
      brand: 'Wilson',
      description: 'Professional racquetball gloves with enhanced grip and breathability',
      isNew: false,
      isBestseller: false,
      type: 'Gloves',
      skillLevel: 'All Levels'
    },
    {
      id: 69,
      name: 'Racquetball Bag Tournament',
      price: '$79.99',
      originalPrice: '$99.99',
      image: '/racquetball-bag.jpg',
      rating: 4.3,
      reviews: 67,
      category: 'Accessories',
      brand: 'Gearbox',
      description: 'Tournament bag with ventilated compartment and racket protection',
      isNew: true,
      isBestseller: false,
      type: 'Bag',
      skillLevel: 'All Levels'
    },
    {
      id: 70,
      name: 'Racquetball Overgrips (10 pack)',
      price: '$12.99',
      originalPrice: '$17.99',
      image: '/racquetball-grips.jpg',
      rating: 4.5,
      reviews: 234,
      category: 'Accessories',
      brand: 'Tourna',
      description: '10-pack of professional racquetball overgrips for better control',
      isNew: false,
      isBestseller: true,
      type: 'Grips',
      skillLevel: 'All Levels'
    },
    {
      id: 71,
      name: 'Racquetball String Reel',
      price: '$59.99',
      originalPrice: '$79.99',
      image: '/racquetball-string.jpg',
      rating: 4.4,
      reviews: 45,
      category: 'Accessories',
      brand: 'Ashaway',
      description: 'Professional racquetball string reel - 100 meters',
      isNew: false,
      isBestseller: false,
      type: 'String',
      skillLevel: 'Professional'
    },
    {
      id: 72,
      name: 'Racquetball Dampeners (6 pack)',
      price: '$8.99',
      originalPrice: '$12.99',
      image: '/racquetball-dampeners.jpg',
      rating: 4.2,
      reviews: 167,
      category: 'Accessories',
      brand: 'Gamma',
      description: 'Vibration dampeners to reduce racket shock and improve comfort',
      isNew: false,
      isBestseller: false,
      type: 'Dampeners',
      skillLevel: 'All Levels'
    },
    {
      id: 73,
      name: 'Racquetball Wristbands (3 pairs)',
      price: '$14.99',
      originalPrice: '$19.99',
      image: '/racquetball-wristbands.jpg',
      rating: 4.3,
      reviews: 98,
      category: 'Apparel',
      brand: 'Nike',
      description: 'Moisture-wicking wristbands for sweat control and better grip',
      isNew: true,
      isBestseller: false,
      type: 'Apparel',
      skillLevel: 'All Levels'
    },
    {
      id: 74,
      name: 'Racquetball Court Shoes',
      price: '$109.99',
      originalPrice: '$139.99',
      image: '/racquetball-shoes.jpg',
      rating: 4.7,
      reviews: 89,
      category: 'Footwear',
      brand: 'ASICS',
      description: 'Professional racquetball court shoes with gum rubber soles',
      isNew: false,
      isBestseller: true,
      type: 'Shoes',
      skillLevel: 'All Levels'
    },
    {
      id: 75,
      name: 'Racquetball Ball Machine',
      price: '$799.99',
      originalPrice: '$999.99',
      image: '/racquetball-machine.jpg',
      rating: 4.8,
      reviews: 34,
      category: 'Training',
      brand: 'Sports Tutor',
      description: 'Professional racquetball ball machine with remote control',
      isNew: true,
      isBestseller: false,
      type: 'Training Equipment',
      skillLevel: 'Professional'
    }
  ];

  const racquetballCategories = [
    {
      name: 'Racquetball Rackets',
      icon: '🔴',
      description: 'Professional & Beginner Rackets',
      count: '7 products',
      slug: 'rackets'
    },
    {
      name: 'Racquetball Balls',
      icon: '🎾',
      description: 'Match & Practice Balls',
      count: '5 products',
      slug: 'balls'
    },
    {
      name: 'Protective Gear',
      icon: '🥽',
      description: 'Goggles & Safety Equipment',
      count: '4 products',
      slug: 'protective-gear'
    },
    {
      name: 'Court Shoes',
      icon: '👟',
      description: 'Specialized Court Footwear',
      count: '3 products',
      slug: 'shoes'
    },
    {
      name: 'Accessories',
      icon: '🎒',
      description: 'Bags, Gloves & Grips',
      count: '10 products',
      slug: 'accessories'
    },
    {
      name: 'Training Equipment',
      icon: '🤖',
      description: 'Ball Machines & Trainers',
      count: '2 products',
      slug: 'training'
    }
  ];

  const filters = {
    type: ['Racket', 'Balls', 'Protective Gear', 'Gloves', 'Bag', 'Grips', 'String', 'Dampeners', 'Apparel', 'Shoes', 'Training Equipment', 'Starter Set'],
    priceRange: [
      'Under $20',
      '$20 - $50',
      '$50 - $100',
      '$100 - $200',
      'Above $200'
    ],
    brand: ['SpeedPro', 'Ektelon', 'Penn', 'Head', 'Wilson', 'Gearbox', 'Tourna', 'Ashaway', 'Gamma', 'Nike', 'ASICS', 'Sports Tutor'],
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
      <section className="bg-gradient-to-r from-red-600 to-orange-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Racquetball Equipment
            </h1>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              High-performance racquetball gear for fast-paced court action. Experience the speed and power of professional racquetball.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#products"
                className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors duration-200"
              >
                Shop Racquetball Gear
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

      {/* Racquetball Categories */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Racquetball Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {racquetballCategories.map((category, index) => (
              <Link
                key={index}
                href={`/sports-equipment/racket-sports/racquetball/${category.slug}`}
                className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-200">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{category.description}</p>
                <span className="text-xs text-red-600 font-medium">{category.count}</span>
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
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Rackets designed for maximum swing speed and power.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Safety First</h3>
              <p className="text-gray-600">Mandatory protective eyewear for all skill levels.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Precision Control</h3>
              <p className="text-gray-600">Equipment engineered for pinpoint accuracy and control.</p>
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
                Racquetball Equipment
              </h2>
              <p className="text-gray-600">
                Showing {racquetballProducts.length} products
              </p>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 lg:mt-0">
              {/* View Mode Toggle */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-red-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-red-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-300"
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
                          className="rounded border-gray-300 text-red-600 focus:ring-red-500"
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
                          className="rounded border-gray-300 text-red-600 focus:ring-red-500"
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
                          className="rounded border-gray-300 text-red-600 focus:ring-red-500"
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
                          className="rounded border-gray-300 text-red-600 focus:ring-red-500"
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
                  {racquetballProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                    >
                      <div className="relative h-64 bg-gradient-to-br from-red-50 to-orange-100 flex items-center justify-center">
                        {product.isNew && (
                          <span className="absolute top-3 left-3 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            New
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="absolute top-3 left-3 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Bestseller
                          </span>
                        )}
                        <div className="text-4xl">
                          🔴
                        </div>
                        <button className="absolute top-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <Heart className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-gray-900">{product.name}</h3>
                          <div className="flex flex-col gap-1 items-end">
                            <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
                              {product.type}
                            </span>
                            <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full">
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
                          <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200 text-sm font-semibold">
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
                  {racquetballProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex"
                    >
                      <div className="w-48 relative bg-gradient-to-br from-red-50 to-orange-100 flex items-center justify-center">
                        {product.isNew && (
                          <span className="absolute top-3 left-3 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            New
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="absolute top-3 left-3 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Bestseller
                          </span>
                        )}
                        <div className="text-4xl">
                          🔴
                        </div>
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                              <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
                                {product.type}
                              </span>
                              <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full">
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
                          <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors duration-200 font-semibold">
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
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Professional Racquetball Services
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Comprehensive racquetball services to enhance your game performance and equipment longevity.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl mb-3">🔧</div>
                <h3 className="font-semibold mb-2">Racket Stringing</h3>
                <p className="text-red-100 text-sm">Professional stringing with high-precision tension control</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl mb-3">🔴</div>
                <h3 className="font-semibold mb-2">Grip Replacement</h3>
                <p className="text-red-100 text-sm">Custom grip installation for better feel and control</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl mb-3">👨‍💼</div>
                <h3 className="font-semibold mb-2">Player Consultation</h3>
                <p className="text-red-100 text-sm">Expert advice on racket selection and string tension</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Racquetball Ball Guide */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Racquetball Ball Types
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">Blue</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Professional</h3>
              <p className="text-gray-600 mb-4">Fastest ball speed for professional and advanced players. Maximum bounce and speed.</p>
              <div className="text-sm text-gray-500">
                <strong>Ideal for:</strong> Tournaments & Advanced Play
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">Green</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Intermediate</h3>
              <p className="text-gray-600 mb-4">Medium ball speed perfect for club players and intermediate skill levels.</p>
              <div className="text-sm text-gray-500">
                <strong>Ideal for:</strong> Club Play & Practice
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <div className="w-16 h-16 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">Red</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Beginner</h3>
              <p className="text-gray-600 mb-4">Slowest ball speed designed for beginners and recreational players.</p>
              <div className="text-sm text-gray-500">
                <strong>Ideal for:</strong> Beginners & Casual Play
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Essential Gear Spotlight */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Essential Racquetball Gear
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🥽</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Protective Eyewear</h3>
              <p className="text-gray-600 mb-4">Mandatory safety equipment. Protects eyes from 150+ mph ball speeds.</p>
              <Link href="/sports-equipment/racket-sports/racquetball/protective-gear" className="text-red-600 font-semibold hover:text-red-700">
                View Eyewear →
              </Link>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🧤</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Racquetball Gloves</h3>
              <p className="text-gray-600 mb-4">Essential for grip and sweat control during intense matches.</p>
              <Link href="/sports-equipment/racket-sports/racquetball/accessories" className="text-red-600 font-semibold hover:text-red-700">
                View Gloves →
              </Link>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👟</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Court Shoes</h3>
              <p className="text-gray-600 mb-4">Non-marking soles designed for quick lateral movements and stops.</p>
              <Link href="/sports-equipment/racket-sports/racquetball/shoes" className="text-red-600 font-semibold hover:text-red-700">
                View Shoes →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Racquetball Community
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Join our racquetball community for training tips, local tournaments, and exclusive gear deals
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-300"
            />
            <button className="bg-red-600 text-white px-6 py-3 rounded-r-lg hover:bg-red-700 transition-colors duration-200 font-semibold">
              Join Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}