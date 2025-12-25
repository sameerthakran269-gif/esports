// app/sports-equipment/racket-sports/pickleball/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Heart, Filter, Grid, List } from 'lucide-react';

export default function PickleballPage() {
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    type: [],
    priceRange: [],
    brand: [],
    skillLevel: []
  });

  const pickleballProducts = [
    {
      id: 23,
      name: 'Pickleball Paddle Set Pro',
      price: '$69.99',
      originalPrice: '$89.99',
      image: '/pickleball-paddles.jpg',
      rating: 4.7,
      reviews: 134,
      category: 'Paddles',
      brand: 'PaddlePro',
      description: 'Set of 4 composite pickleball paddles with balls and carrying case',
      isNew: true,
      isBestseller: true,
      type: 'Paddle Set',
      skillLevel: 'All Levels'
    },
    {
      id: 76,
      name: 'Professional Pickleball Paddle',
      price: '$149.99',
      originalPrice: '$189.99',
      image: '/pickleball-paddle-pro.jpg',
      rating: 4.8,
      reviews: 89,
      category: 'Paddles',
      brand: 'Selkirk',
      description: 'Carbon fiber pickleball paddle with polymer core for maximum control',
      isNew: true,
      isBestseller: false,
      type: 'Paddle',
      skillLevel: 'Professional'
    },
    {
      id: 77,
      name: 'Pickleball Balls (12 pack)',
      price: '$19.99',
      originalPrice: '$29.99',
      image: '/pickleball-balls.jpg',
      rating: 4.6,
      reviews: 267,
      category: 'Balls',
      brand: 'Dura',
      description: 'Official outdoor pickleball balls - 12 pack with carrying case',
      isNew: false,
      isBestseller: true,
      type: 'Balls',
      skillLevel: 'All Levels'
    },
    {
      id: 78,
      name: 'Portable Pickleball Net',
      price: '$129.99',
      originalPrice: '$169.99',
      image: '/pickleball-net.jpg',
      rating: 4.5,
      reviews: 156,
      category: 'Nets',
      brand: 'Onix',
      description: 'Professional portable net with quick setup and official height adjustment',
      isNew: false,
      isBestseller: true,
      type: 'Net',
      skillLevel: 'All Levels'
    },
    {
      id: 79,
      name: 'Pickleball Court Kit',
      price: '$249.99',
      originalPrice: '$329.99',
      image: '/pickleball-court-kit.jpg',
      rating: 4.4,
      reviews: 78,
      category: 'Court Equipment',
      brand: 'PaddlePro',
      description: 'Complete court setup with net, boundary lines, and court markers',
      isNew: true,
      isBestseller: false,
      type: 'Court Kit',
      skillLevel: 'All Levels'
    },
    {
      id: 80,
      name: 'Pickleball Bag Tournament',
      price: '$59.99',
      originalPrice: '$79.99',
      image: '/pickleball-bag.jpg',
      rating: 4.3,
      reviews: 112,
      category: 'Accessories',
      brand: 'Gamma',
      description: 'Tournament bag with 4-paddle capacity and ball storage',
      isNew: false,
      isBestseller: false,
      type: 'Bag',
      skillLevel: 'All Levels'
    },
    {
      id: 81,
      name: 'Pickleball Overgrips (12 pack)',
      price: '$14.99',
      originalPrice: '$19.99',
      image: '/pickleball-grips.jpg',
      rating: 4.7,
      reviews: 189,
      category: 'Accessories',
      brand: 'Tourna',
      description: '12-pack of professional pickleball overgrips for better control',
      isNew: false,
      isBestseller: true,
      type: 'Grips',
      skillLevel: 'All Levels'
    },
    {
      id: 82,
      name: 'Pickleball Paddle Cover',
      price: '$12.99',
      originalPrice: '$17.99',
      image: '/paddle-cover.jpg',
      rating: 4.2,
      reviews: 203,
      category: 'Accessories',
      brand: 'Selkirk',
      description: 'Protective paddle cover with ventilation and carrying handle',
      isNew: true,
      isBestseller: false,
      type: 'Cover',
      skillLevel: 'All Levels'
    },
    {
      id: 83,
      name: 'Indoor Pickleball Balls (12 pack)',
      price: '$17.99',
      originalPrice: '$24.99',
      image: '/pickleball-balls-indoor.jpg',
      rating: 4.5,
      reviews: 134,
      category: 'Balls',
      brand: 'Onix',
      description: 'Official indoor pickleball balls with 26 holes for controlled play',
      isNew: false,
      isBestseller: true,
      type: 'Balls',
      skillLevel: 'All Levels'
    },
    {
      id: 84,
      name: 'Pickleball Court Shoes',
      price: '$89.99',
      originalPrice: '$119.99',
      image: '/pickleball-shoes.jpg',
      rating: 4.6,
      reviews: 98,
      category: 'Footwear',
      brand: 'ASICS',
      description: 'Court shoes with gum rubber soles for pickleball-specific movements',
      isNew: true,
      isBestseller: false,
      type: 'Shoes',
      skillLevel: 'All Levels'
    },
    {
      id: 85,
      name: 'Beginner Pickleball Set',
      price: '$49.99',
      originalPrice: '$69.99',
      image: '/pickleball-beginner-set.jpg',
      rating: 4.4,
      reviews: 267,
      category: 'Starter Sets',
      brand: 'PaddlePro',
      description: 'Complete beginner set with 2 paddles, 4 balls, and carrying bag',
      isNew: false,
      isBestseller: true,
      type: 'Starter Set',
      skillLevel: 'Beginner'
    },
    {
      id: 86,
      name: 'Pickleball Scorekeeper',
      price: '$24.99',
      originalPrice: '$34.99',
      image: '/pickleball-scorekeeper.jpg',
      rating: 4.3,
      reviews: 67,
      category: 'Accessories',
      brand: 'Gamma',
      description: 'Digital scorekeeper with magnetic backing for net attachment',
      isNew: true,
      isBestseller: false,
      type: 'Accessories',
      skillLevel: 'All Levels'
    }
  ];

  const pickleballCategories = [
    {
      name: 'Pickleball Paddles',
      icon: '🥒',
      description: 'Composite & Graphite Paddles',
      count: '8 products',
      slug: 'paddles'
    },
    {
      name: 'Pickleball Balls',
      icon: '⚪',
      description: 'Indoor & Outdoor Balls',
      count: '6 products',
      slug: 'balls'
    },
    {
      name: 'Nets & Courts',
      icon: '🏐',
      description: 'Portable Nets & Court Kits',
      count: '4 products',
      slug: 'nets'
    },
    {
      name: 'Accessories',
      icon: '🎒',
      description: 'Bags, Grips & Covers',
      count: '9 products',
      slug: 'accessories'
    },
    {
      name: 'Starter Sets',
      icon: '📦',
      description: 'Complete Beginner Kits',
      count: '3 products',
      slug: 'starter-sets'
    },
    {
      name: 'Apparel',
      icon: '👟',
      description: 'Shoes & Clothing',
      count: '2 products',
      slug: 'apparel'
    }
  ];

  const filters = {
    type: ['Paddle', 'Paddle Set', 'Balls', 'Net', 'Court Kit', 'Bag', 'Grips', 'Cover', 'Shoes', 'Starter Set', 'Accessories'],
    priceRange: [
      'Under $25',
      '$25 - $50',
      '$50 - $100',
      '$100 - $200',
      'Above $200'
    ],
    brand: ['PaddlePro', 'Selkirk', 'Dura', 'Onix', 'Gamma', 'Tourna'],
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
      <section className="bg-gradient-to-r from-lime-600 to-green-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Pickleball Equipment
            </h1>
            <p className="text-xl text-lime-100 mb-8 max-w-2xl mx-auto">
              America's fastest-growing sport! Premium paddles, balls, and gear for players of all ages and skill levels.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#products"
                className="bg-white text-lime-600 px-6 py-3 rounded-lg font-semibold hover:bg-lime-50 transition-colors duration-200"
              >
                Shop Pickleball Gear
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

      {/* Pickleball Categories */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Pickleball Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {pickleballCategories.map((category, index) => (
              <Link
                key={index}
                href={`/sports-equipment/racket-sports/pickleball/${category.slug}`}
                className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-200">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{category.description}</p>
                <span className="text-xs text-lime-600 font-medium">{category.count}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Pickleball Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Pickleball?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍👩‍👧‍👦</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">All Ages</h3>
              <p className="text-gray-600 text-sm">Perfect for kids, adults, and seniors alike</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💨</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Easy to Learn</h3>
              <p className="text-gray-600 text-sm">Simple rules, quick to pick up and play</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏃‍♂️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Great Exercise</h3>
              <p className="text-gray-600 text-sm">Low-impact cardio with social benefits</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Strategic Play</h3>
              <p className="text-gray-600 text-sm">Mix of power, finesse, and strategy</p>
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
                Pickleball Equipment
              </h2>
              <p className="text-gray-600">
                Showing {pickleballProducts.length} products
              </p>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 lg:mt-0">
              {/* View Mode Toggle */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-lime-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-lime-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-lime-300"
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
                          className="rounded border-gray-300 text-lime-600 focus:ring-lime-500"
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
                          className="rounded border-gray-300 text-lime-600 focus:ring-lime-500"
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
                          className="rounded border-gray-300 text-lime-600 focus:ring-lime-500"
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
                          className="rounded border-gray-300 text-lime-600 focus:ring-lime-500"
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
                  {pickleballProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                    >
                      <div className="relative h-64 bg-gradient-to-br from-lime-50 to-green-100 flex items-center justify-center">
                        {product.isNew && (
                          <span className="absolute top-3 left-3 bg-lime-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            New
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="absolute top-3 left-3 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Bestseller
                          </span>
                        )}
                        <div className="text-4xl">
                          🥒
                        </div>
                        <button className="absolute top-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <Heart className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-gray-900">{product.name}</h3>
                          <div className="flex flex-col gap-1 items-end">
                            <span className="text-xs bg-lime-100 text-lime-600 px-2 py-1 rounded-full">
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
                          <button className="bg-lime-600 text-white px-4 py-2 rounded-lg hover:bg-lime-700 transition-colors duration-200 text-sm font-semibold">
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
                  {pickleballProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex"
                    >
                      <div className="w-48 relative bg-gradient-to-br from-lime-50 to-green-100 flex items-center justify-center">
                        {product.isNew && (
                          <span className="absolute top-3 left-3 bg-lime-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            New
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="absolute top-3 left-3 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Bestseller
                          </span>
                        )}
                        <div className="text-4xl">
                          🥒
                        </div>
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                              <span className="text-xs bg-lime-100 text-lime-600 px-2 py-1 rounded-full">
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
                          <button className="bg-lime-600 text-white px-6 py-3 rounded-lg hover:bg-lime-700 transition-colors duration-200 font-semibold">
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
      <section className="py-16 bg-gradient-to-r from-lime-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Pickleball Services & Community
            </h2>
            <p className="text-xl text-lime-100 mb-8 max-w-2xl mx-auto">
              Everything you need to start and improve your pickleball journey.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl mb-3">🎓</div>
                <h3 className="font-semibold mb-2">Beginner Clinics</h3>
                <p className="text-lime-100 text-sm">Learn the basics with certified instructors</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl mb-3">🏆</div>
                <h3 className="font-semibold mb-2">Tournaments</h3>
                <p className="text-lime-100 text-sm">Local and regional competitive events</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl mb-3">👥</div>
                <h3 className="font-semibold mb-2">Social Play</h3>
                <p className="text-lime-100 text-sm">Regular meetups and round robin events</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pickleball Guide */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Pickleball Equipment Guide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6">
              <div className="text-2xl mb-3">🥒</div>
              <h3 className="font-semibold text-gray-900 mb-3">Paddle Selection</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Composite for power</li>
                <li>• Graphite for control</li>
                <li>• Polymer core for touch</li>
                <li>• Choose weight carefully</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6">
              <div className="text-2xl mb-3">⚪</div>
              <h3 className="font-semibold text-gray-900 mb-3">Ball Types</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Outdoor: 40 holes</li>
                <li>• Indoor: 26 holes</li>
                <li>• Choose by playing surface</li>
                <li>• Official tournament balls</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6">
              <div className="text-2xl mb-3">🏐</div>
              <h3 className="font-semibold text-gray-900 mb-3">Court Setup</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Portable nets available</li>
                <li>• Official height: 36" sides</li>
                <li>• Court tape for boundaries</li>
                <li>• Quick setup systems</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6">
              <div className="text-2xl mb-3">👟</div>
              <h3 className="font-semibold text-gray-900 mb-3">Footwear</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Court shoes recommended</li>
                <li>• Good lateral support</li>
                <li>• Non-marking soles</li>
                <li>• Cushioning important</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Starter Kits Spotlight */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Perfect for Beginners
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📦</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Complete Sets</h3>
              <p className="text-gray-600 mb-4">Everything you need to start playing in one convenient package.</p>
              <Link href="/sports-equipment/racket-sports/pickleball/starter-sets" className="text-lime-600 font-semibold hover:text-lime-700">
                View Starter Sets →
              </Link>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Home Courts</h3>
              <p className="text-gray-600 mb-4">Create your own pickleball court in driveway or backyard.</p>
              <Link href="/sports-equipment/racket-sports/pickleball/nets" className="text-lime-600 font-semibold hover:text-lime-700">
                View Court Kits →
              </Link>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👨‍👩‍👧‍👦</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Family Fun</h3>
              <p className="text-gray-600 mb-4">Multi-paddle sets perfect for family games and social play.</p>
              <Link href="/sports-equipment/racket-sports/pickleball/paddles" className="text-lime-600 font-semibold hover:text-lime-700">
                View Family Sets →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Join the Pickleball Revolution
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Stay updated on the latest gear, local events, clinics, and community news
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-300"
            />
            <button className="bg-lime-600 text-white px-6 py-3 rounded-r-lg hover:bg-lime-700 transition-colors duration-200 font-semibold">
              Join Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}