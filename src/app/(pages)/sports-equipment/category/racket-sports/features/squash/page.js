// app/sports-equipment/racket-sports/squash/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Heart, Filter, Grid, List } from 'lucide-react';

export default function SquashPage() {
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    type: [],
    priceRange: [],
    brand: [],
    skillLevel: []
  });

  const squashProducts = [
    {
      id: 21,
      name: 'Professional Squash Racket',
      price: '$149.99',
      originalPrice: '$189.99',
      image: '/squash-racket.jpg',
      rating: 4.6,
      reviews: 45,
      category: 'Rackets',
      brand: 'CourtMaster',
      description: 'Professional squash racket with tear-drop shape and carbon fiber construction',
      isNew: true,
      isBestseller: false,
      type: 'Racket',
      skillLevel: 'Advanced'
    },
    {
      id: 54,
      name: 'Squash Ball Set (12 balls)',
      price: '$24.99',
      originalPrice: '$34.99',
      image: '/squash-balls.jpg',
      rating: 4.5,
      reviews: 89,
      category: 'Balls',
      brand: 'Dunlop',
      description: 'Professional squash balls in various speeds - 12 ball set',
      isNew: false,
      isBestseller: true,
      type: 'Balls',
      skillLevel: 'All Levels'
    },
    {
      id: 55,
      name: 'Squash Protective Eyewear',
      price: '$39.99',
      originalPrice: '$54.99',
      image: '/squash-goggles.jpg',
      rating: 4.7,
      reviews: 156,
      category: 'Protective Gear',
      brand: 'Bollé',
      description: 'Professional protective eyewear with anti-fog coating',
      isNew: true,
      isBestseller: true,
      type: 'Protective Gear',
      skillLevel: 'All Levels'
    },
    {
      id: 56,
      name: 'Squash Shoes Pro',
      price: '$129.99',
      originalPrice: '$159.99',
      image: '/squash-shoes.jpg',
      rating: 4.8,
      reviews: 78,
      category: 'Footwear',
      brand: 'ASICS',
      description: 'Professional squash shoes with gum rubber soles for court grip',
      isNew: false,
      isBestseller: true,
      type: 'Shoes',
      skillLevel: 'All Levels'
    },
    {
      id: 57,
      name: 'Beginner Squash Racket Set',
      price: '$79.99',
      originalPrice: '$99.99',
      image: '/squash-beginner-set.jpg',
      rating: 4.3,
      reviews: 134,
      category: 'Rackets',
      brand: 'Head',
      description: 'Complete beginner set with racket, balls, and protective eyewear',
      isNew: false,
      isBestseller: false,
      type: 'Starter Set',
      skillLevel: 'Beginner'
    },
    {
      id: 58,
      name: 'Squash Bag Tournament',
      price: '$89.99',
      originalPrice: '$119.99',
      image: '/squash-bag.jpg',
      rating: 4.4,
      reviews: 67,
      category: 'Accessories',
      brand: 'CourtMaster',
      description: 'Tournament squash bag with thermal compartment and shoe storage',
      isNew: true,
      isBestseller: false,
      type: 'Bag',
      skillLevel: 'All Levels'
    },
    {
      id: 59,
      name: 'Squash Overgrips (12 pack)',
      price: '$14.99',
      originalPrice: '$19.99',
      image: '/squash-grips.jpg',
      rating: 4.6,
      reviews: 203,
      category: 'Accessories',
      brand: 'Wilson',
      description: '12-pack of professional squash overgrips for better control',
      isNew: false,
      isBestseller: true,
      type: 'Grips',
      skillLevel: 'All Levels'
    },
    {
      id: 60,
      name: 'Squash String Reel',
      price: '$69.99',
      originalPrice: '$89.99',
      image: '/squash-string.jpg',
      rating: 4.5,
      reviews: 45,
      category: 'Accessories',
      brand: 'Ashaway',
      description: 'Professional squash string reel - 120 meters',
      isNew: false,
      isBestseller: false,
      type: 'String',
      skillLevel: 'Professional'
    },
    {
      id: 61,
      name: 'Squash Dampeners (6 pack)',
      price: '$9.99',
      originalPrice: '$14.99',
      image: '/squash-dampeners.jpg',
      rating: 4.2,
      reviews: 178,
      category: 'Accessories',
      brand: 'CourtMaster',
      description: 'Vibration dampeners to reduce racket shock and noise',
      isNew: false,
      isBestseller: false,
      type: 'Dampeners',
      skillLevel: 'All Levels'
    },
    {
      id: 62,
      name: 'Squash Wristbands (3 pairs)',
      price: '$12.99',
      originalPrice: '$17.99',
      image: '/squash-wristbands.jpg',
      rating: 4.3,
      reviews: 92,
      category: 'Apparel',
      brand: 'Nike',
      description: 'Moisture-wicking wristbands for better grip and sweat control',
      isNew: true,
      isBestseller: false,
      type: 'Apparel',
      skillLevel: 'All Levels'
    },
    {
      id: 63,
      name: 'Squash Training Balls (Slow)',
      price: '$19.99',
      originalPrice: '$29.99',
      image: '/squash-training-balls.jpg',
      rating: 4.4,
      reviews: 56,
      category: 'Training',
      brand: 'Dunlop',
      description: 'Slow-speed training balls perfect for beginners and practice',
      isNew: false,
      isBestseller: true,
      type: 'Training Balls',
      skillLevel: 'Beginner'
    },
    {
      id: 64,
      name: 'Squash Ball Machine',
      price: '$899.99',
      originalPrice: '$1,199.99',
      image: '/squash-ball-machine.jpg',
      rating: 4.7,
      reviews: 23,
      category: 'Training',
      brand: 'Lobster',
      description: 'Professional squash ball machine with remote control and oscillation',
      isNew: true,
      isBestseller: false,
      type: 'Training Equipment',
      skillLevel: 'Professional'
    }
  ];

  const squashCategories = [
    {
      name: 'Squash Rackets',
      icon: '🎯',
      description: 'Professional & Beginner Rackets',
      count: '8 products',
      slug: 'rackets'
    },
    {
      name: 'Squash Balls',
      icon: '🔵',
      description: 'Match & Training Balls',
      count: '6 products',
      slug: 'balls'
    },
    {
      name: 'Protective Gear',
      icon: '🥽',
      description: 'Eyewear & Safety Equipment',
      count: '5 products',
      slug: 'protective-gear'
    },
    {
      name: 'Squash Shoes',
      icon: '👟',
      description: 'Court Shoes & Footwear',
      count: '4 products',
      slug: 'shoes'
    },
    {
      name: 'Accessories',
      icon: '🎒',
      description: 'Bags, Grips & Strings',
      count: '12 products',
      slug: 'accessories'
    },
    {
      name: 'Training Equipment',
      icon: '🤖',
      description: 'Ball Machines & Trainers',
      count: '3 products',
      slug: 'training'
    }
  ];

  const filters = {
    type: ['Racket', 'Balls', 'Protective Gear', 'Shoes', 'Starter Set', 'Bag', 'Grips', 'String', 'Dampeners', 'Apparel', 'Training Balls', 'Training Equipment'],
    priceRange: [
      'Under $30',
      '$30 - $80',
      '$80 - $150',
      '$150 - $300',
      'Above $300'
    ],
    brand: ['CourtMaster', 'Dunlop', 'Bollé', 'ASICS', 'Head', 'Wilson', 'Ashaway', 'Nike', 'Lobster'],
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
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Squash Equipment
            </h1>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Professional squash rackets, balls, and protective gear for intense court action. Dominate the court with precision equipment.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#products"
                className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors duration-200"
              >
                Shop Squash Gear
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

      {/* Squash Categories */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Squash Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {squashCategories.map((category, index) => (
              <Link
                key={index}
                href={`/sports-equipment/racket-sports/squash/${category.slug}`}
                className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-200">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{category.description}</p>
                <span className="text-xs text-emerald-600 font-medium">{category.count}</span>
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
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Stringing</h3>
              <p className="text-gray-600">Professional squash racket stringing with precise tension control.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Shipping</h3>
              <p className="text-gray-600">Free delivery on orders over $100. Get court-ready quickly.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Safety First</h3>
              <p className="text-gray-600">Complete range of protective eyewear and safety equipment.</p>
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
                Squash Equipment
              </h2>
              <p className="text-gray-600">
                Showing {squashProducts.length} products
              </p>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 lg:mt-0">
              {/* View Mode Toggle */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-emerald-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-emerald-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-300"
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
                          className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
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
                          className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
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
                          className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
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
                          className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
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
                  {squashProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                    >
                      <div className="relative h-64 bg-gradient-to-br from-emerald-50 to-teal-100 flex items-center justify-center">
                        {product.isNew && (
                          <span className="absolute top-3 left-3 bg-emerald-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            New
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="absolute top-3 left-3 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Bestseller
                          </span>
                        )}
                        <div className="text-4xl">
                          🎯
                        </div>
                        <button className="absolute top-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <Heart className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-gray-900">{product.name}</h3>
                          <div className="flex flex-col gap-1 items-end">
                            <span className="text-xs bg-emerald-100 text-emerald-600 px-2 py-1 rounded-full">
                              {product.type}
                            </span>
                            <span className="text-xs bg-teal-100 text-teal-600 px-2 py-1 rounded-full">
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
                          <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors duration-200 text-sm font-semibold">
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
                  {squashProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex"
                    >
                      <div className="w-48 relative bg-gradient-to-br from-emerald-50 to-teal-100 flex items-center justify-center">
                        {product.isNew && (
                          <span className="absolute top-3 left-3 bg-emerald-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            New
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="absolute top-3 left-3 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Bestseller
                          </span>
                        )}
                        <div className="text-4xl">
                          🎯
                        </div>
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                              <span className="text-xs bg-emerald-100 text-emerald-600 px-2 py-1 rounded-full">
                                {product.type}
                              </span>
                              <span className="text-xs bg-teal-100 text-teal-600 px-2 py-1 rounded-full">
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
                          <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors duration-200 font-semibold">
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
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Professional Squash Services
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Comprehensive squash services to enhance your game performance and equipment longevity.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl mb-3">🔧</div>
                <h3 className="font-semibold mb-2">Racket Stringing</h3>
                <p className="text-emerald-100 text-sm">Professional stringing with high-precision tension control</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="font-semibold mb-2">Grip Replacement</h3>
                <p className="text-emerald-100 text-sm">Custom grip installation for better feel and control</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl mb-3">👨‍💼</div>
                <h3 className="font-semibold mb-2">Player Consultation</h3>
                <p className="text-emerald-100 text-sm">Expert advice on racket selection and string tension</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Squash Ball Guide */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Squash Ball Speed Guide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <div className="w-12 h-12 bg-blue-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white font-bold text-sm">BLUE</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Super Slow</h3>
              <p className="text-sm text-gray-600 mb-2">Double Yellow Dot</p>
              <p className="text-xs text-gray-500">Professional & Advanced</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <div className="w-12 h-12 bg-green-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white font-bold text-sm">GREEN</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Slow</h3>
              <p className="text-sm text-gray-600 mb-2">Single Yellow Dot</p>
              <p className="text-xs text-gray-500">Intermediate</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <div className="w-12 h-12 bg-red-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white font-bold text-sm">RED</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Medium</h3>
              <p className="text-sm text-gray-600 mb-2">Single Red Dot</p>
              <p className="text-xs text-gray-500">Beginner</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <div className="w-12 h-12 bg-blue-300 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white font-bold text-sm">BLUE</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Fast</h3>
              <p className="text-sm text-gray-600 mb-2">Single Blue Dot</p>
              <p className="text-xs text-gray-500">Juniors & Beginners</p>
            </div>
          </div>
        </div>
      </section>

      {/* Protective Gear Spotlight */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Essential Protective Gear
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🥽</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Protective Eyewear</h3>
              <p className="text-gray-600 mb-4">Mandatory safety equipment to protect your eyes from fast-moving balls.</p>
              <Link href="/sports-equipment/racket-sports/squash/protective-gear" className="text-emerald-600 font-semibold hover:text-emerald-700">
                View Eyewear →
              </Link>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👟</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Court Shoes</h3>
              <p className="text-gray-600 mb-4">Specialized non-marking shoes for optimal grip and quick movements.</p>
              <Link href="/sports-equipment/racket-sports/squash/shoes" className="text-emerald-600 font-semibold hover:text-emerald-700">
                View Shoes →
              </Link>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🧦</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sports Apparel</h3>
              <p className="text-gray-600 mb-4">Moisture-wicking clothing for maximum comfort during intense matches.</p>
              <Link href="/sports-equipment/racket-sports/squash/apparel" className="text-emerald-600 font-semibold hover:text-emerald-700">
                View Apparel →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Squash Community
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Join our squash community for training tips, local tournaments, and exclusive gear deals
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-300"
            />
            <button className="bg-emerald-600 text-white px-6 py-3 rounded-r-lg hover:bg-emerald-700 transition-colors duration-200 font-semibold">
              Join Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}