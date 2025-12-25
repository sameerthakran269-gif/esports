// app/sports-equipment/racket-sports/table-tennis/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Heart, Filter, Grid, List } from 'lucide-react';

export default function TableTennisPage() {
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    type: [],
    priceRange: [],
    brand: [],
    skillLevel: []
  });

  const tableTennisProducts = [
    {
      id: 6,
      name: 'Professional Table Tennis Table',
      price: '$499.99',
      originalPrice: '$599.99',
      image: '/ping-pong-table.jpg',
      rating: 4.6,
      reviews: 78,
      category: 'Tables',
      brand: 'PaddlePro',
      description: 'Professional foldable table tennis table with net and paddles',
      isNew: true,
      isBestseller: false,
      type: 'Table',
      skillLevel: 'All Levels'
    },
    {
      id: 20,
      name: 'Table Tennis Racket Set',
      price: '$49.99',
      originalPrice: '$69.99',
      image: '/ping-pong-paddles.jpg',
      rating: 4.5,
      reviews: 203,
      category: 'Rackets',
      brand: 'PaddlePro',
      description: 'Set of 4 professional table tennis rackets with case',
      isNew: false,
      isBestseller: true,
      type: 'Racket Set',
      skillLevel: 'Intermediate'
    },
    {
      id: 26,
      name: 'Table Tennis Robot',
      price: '$299.99',
      originalPrice: '$379.99',
      image: '/ping-pong-robot.jpg',
      rating: 4.6,
      reviews: 41,
      category: 'Training',
      brand: 'PaddlePro',
      description: 'Automatic table tennis ball launcher for training',
      isNew: false,
      isBestseller: true,
      type: 'Training Equipment',
      skillLevel: 'All Levels'
    },
    {
      id: 45,
      name: 'Professional Table Tennis Racket',
      price: '$89.99',
      originalPrice: '$119.99',
      image: '/table-tennis-racket-pro.jpg',
      rating: 4.7,
      reviews: 156,
      category: 'Rackets',
      brand: 'Butterfly',
      description: 'Professional racket with carbon blade and premium rubber',
      isNew: true,
      isBestseller: true,
      type: 'Racket',
      skillLevel: 'Professional'
    },
    {
      id: 46,
      name: 'Table Tennis Balls (6 packs)',
      price: '$15.99',
      originalPrice: '$22.99',
      image: '/table-tennis-balls.jpg',
      rating: 4.4,
      reviews: 289,
      category: 'Balls',
      brand: 'DHS',
      description: '6 packs of 3-star professional table tennis balls',
      isNew: false,
      isBestseller: true,
      type: 'Balls',
      skillLevel: 'All Levels'
    },
    {
      id: 47,
      name: 'Table Tennis Net & Post Set',
      price: '$29.99',
      originalPrice: '$39.99',
      image: '/table-tennis-net.jpg',
      rating: 4.3,
      reviews: 134,
      category: 'Accessories',
      brand: 'PaddlePro',
      description: 'Professional net with clamp-on posts for any table',
      isNew: false,
      isBestseller: false,
      type: 'Net & Posts',
      skillLevel: 'All Levels'
    },
    {
      id: 48,
      name: 'Table Tennis Rubber Sheets',
      price: '$34.99',
      originalPrice: '$49.99',
      image: '/table-tennis-rubber.jpg',
      rating: 4.6,
      reviews: 89,
      category: 'Accessories',
      brand: 'Butterfly',
      description: 'Professional rubber sheets for racket customization',
      isNew: true,
      isBestseller: false,
      type: 'Rubber',
      skillLevel: 'Advanced'
    },
    {
      id: 49,
      name: 'Table Tennis Ball Pickup Net',
      price: '$19.99',
      originalPrice: '$29.99',
      image: '/ball-pickup-net.jpg',
      rating: 4.2,
      reviews: 167,
      category: 'Training',
      brand: 'TrainSmart',
      description: 'Large net for easy ball collection during practice',
      isNew: false,
      isBestseller: true,
      type: 'Training Equipment',
      skillLevel: 'All Levels'
    },
    {
      id: 50,
      name: 'Table Tennis Table Cover',
      price: '$39.99',
      originalPrice: '$54.99',
      image: '/table-cover.jpg',
      rating: 4.5,
      reviews: 78,
      category: 'Accessories',
      brand: 'TableGuard',
      description: 'Waterproof cover for outdoor table protection',
      isNew: true,
      isBestseller: false,
      type: 'Accessories',
      skillLevel: 'All Levels'
    },
    {
      id: 51,
      name: 'Table Tennis Shoes',
      price: '$79.99',
      originalPrice: '$99.99',
      image: '/table-tennis-shoes.jpg',
      rating: 4.4,
      reviews: 112,
      category: 'Apparel',
      brand: 'Mizuno',
      description: 'Professional table tennis shoes with excellent grip',
      isNew: false,
      isBestseller: true,
      type: 'Shoes',
      skillLevel: 'All Levels'
    },
    {
      id: 52,
      name: 'Table Tennis Robot Balls (100 pack)',
      price: '$24.99',
      originalPrice: '$34.99',
      image: '/robot-balls.jpg',
      rating: 4.3,
      reviews: 56,
      category: 'Balls',
      brand: 'PaddlePro',
      description: '100 practice balls compatible with training robots',
      isNew: false,
      isBestseller: false,
      type: 'Balls',
      skillLevel: 'All Levels'
    },
    {
      id: 53,
      name: 'Table Tennis Edge Tape',
      price: '$8.99',
      originalPrice: '$12.99',
      image: '/edge-tape.jpg',
      rating: 4.1,
      reviews: 203,
      category: 'Accessories',
      brand: 'Butterfly',
      description: 'Protective edge tape for racket blade protection',
      isNew: false,
      isBestseller: true,
      type: 'Accessories',
      skillLevel: 'All Levels'
    }
  ];

  const tableTennisCategories = [
    {
      name: 'Tables',
      icon: '🏓',
      description: 'Indoor & Outdoor Tables',
      count: '5 products',
      slug: 'tables'
    },
    {
      name: 'Rackets',
      icon: '🎯',
      description: 'Paddles & Blades',
      count: '12 products',
      slug: 'rackets'
    },
    {
      name: 'Balls',
      icon: '⚪',
      description: 'Practice & Match Balls',
      count: '8 products',
      slug: 'balls'
    },
    {
      name: 'Training Equipment',
      icon: '🤖',
      description: 'Robots & Trainers',
      count: '6 products',
      slug: 'training'
    },
    {
      name: 'Accessories',
      icon: '📦',
      description: 'Nets, Rubbers & More',
      count: '15 products',
      slug: 'accessories'
    },
    {
      name: 'Apparel',
      icon: '👟',
      description: 'Shoes & Clothing',
      count: '4 products',
      slug: 'apparel'
    }
  ];

  const filters = {
    type: ['Table', 'Racket', 'Racket Set', 'Balls', 'Net & Posts', 'Rubber', 'Training Equipment', 'Shoes', 'Accessories'],
    priceRange: [
      'Under $20',
      '$20 - $50',
      '$50 - $100',
      '$100 - $300',
      'Above $300'
    ],
    brand: ['PaddlePro', 'Butterfly', 'DHS', 'Stiga', 'TrainSmart', 'TableGuard', 'Mizuno'],
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
      <section className="bg-gradient-to-r from-cyan-500 to-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Table Tennis Equipment
            </h1>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Premium tables, rackets, and gear for ping pong enthusiasts. From recreational play to professional tournaments.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#products"
                className="bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-colors duration-200"
              >
                Shop Table Tennis
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

      {/* Table Tennis Categories */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Table Tennis Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {tableTennisCategories.map((category, index) => (
              <Link
                key={index}
                href={`/sports-equipment/racket-sports/table-tennis/${category.slug}`}
                className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-200">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{category.description}</p>
                <span className="text-xs text-cyan-600 font-medium">{category.count}</span>
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
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏓</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Assembly</h3>
              <p className="text-gray-600">Professional table assembly and setup service available.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Shipping</h3>
              <p className="text-gray-600">Free delivery on orders over $100. Quick table delivery available.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Racket Customization</h3>
              <p className="text-gray-600">Professional rubber cutting and racket assembly service.</p>
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
                Table Tennis Equipment
              </h2>
              <p className="text-gray-600">
                Showing {tableTennisProducts.length} products
              </p>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 lg:mt-0">
              {/* View Mode Toggle */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-cyan-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-cyan-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-300"
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
                          className="rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
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
                          className="rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
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
                          className="rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
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
                          className="rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
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
                  {tableTennisProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                    >
                      <div className="relative h-64 bg-gradient-to-br from-cyan-50 to-blue-100 flex items-center justify-center">
                        {product.isNew && (
                          <span className="absolute top-3 left-3 bg-cyan-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            New
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="absolute top-3 left-3 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Bestseller
                          </span>
                        )}
                        <div className="text-4xl">
                          🏓
                        </div>
                        <button className="absolute top-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <Heart className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-gray-900">{product.name}</h3>
                          <div className="flex flex-col gap-1 items-end">
                            <span className="text-xs bg-cyan-100 text-cyan-600 px-2 py-1 rounded-full">
                              {product.type}
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
                          <button className="bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 transition-colors duration-200 text-sm font-semibold">
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
                  {tableTennisProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex"
                    >
                      <div className="w-48 relative bg-gradient-to-br from-cyan-50 to-blue-100 flex items-center justify-center">
                        {product.isNew && (
                          <span className="absolute top-3 left-3 bg-cyan-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            New
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="absolute top-3 left-3 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Bestseller
                          </span>
                        )}
                        <div className="text-4xl">
                          🏓
                        </div>
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                              <span className="text-xs bg-cyan-100 text-cyan-600 px-2 py-1 rounded-full">
                                {product.type}
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
                          <button className="bg-cyan-600 text-white px-6 py-3 rounded-lg hover:bg-cyan-700 transition-colors duration-200 font-semibold">
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
      <section className="py-16 bg-gradient-to-r from-cyan-500 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Professional Table Tennis Services
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Comprehensive table tennis services to enhance your playing experience and equipment performance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl mb-3">🔧</div>
                <h3 className="font-semibold mb-2">Table Assembly</h3>
                <p className="text-cyan-100 text-sm">Professional table assembly and leveling service</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl mb-3">🏓</div>
                <h3 className="font-semibold mb-2">Racket Customization</h3>
                <p className="text-cyan-100 text-sm">Professional rubber cutting and racket assembly</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl mb-3">👨‍💼</div>
                <h3 className="font-semibold mb-2">Player Consultation</h3>
                <p className="text-cyan-100 text-sm">Expert advice on equipment selection and setup</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Table Tennis Tips Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Table Tennis Pro Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-2xl mb-3">🎯</div>
              <h3 className="font-semibold text-gray-900 mb-2">Rubber Selection</h3>
              <p className="text-sm text-gray-600">Choose pimpled rubber for spin, smooth for speed in your game.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-2xl mb-3">⚖️</div>
              <h3 className="font-semibold text-gray-900 mb-2">Blade Weight</h3>
              <p className="text-sm text-gray-600">Lighter blades for control, heavier for power in your shots.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-2xl mb-3">🔄</div>
              <h3 className="font-semibold text-gray-900 mb-2">Ball Quality</h3>
              <p className="text-sm text-gray-600">Use 3-star balls for matches, 1-star for practice sessions.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-2xl mb-3">👟</div>
              <h3 className="font-semibold text-gray-900 mb-2">Footwork</h3>
              <p className="text-sm text-gray-600">Proper court shoes ensure quick lateral movements and stability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Equipment Spotlight */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Training Equipment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Ball Robots</h3>
              <p className="text-gray-600 mb-4">Automated ball launchers for solo practice with adjustable spin and speed.</p>
              <Link href="/sports-equipment/racket-sports/table-tennis/training" className="text-cyan-600 font-semibold hover:text-cyan-700">
                View Robots →
              </Link>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Target Mats</h3>
              <p className="text-gray-600 mb-4">Precision training mats to improve your ball placement and accuracy.</p>
              <Link href="/sports-equipment/racket-sports/table-tennis/training" className="text-cyan-600 font-semibold hover:text-cyan-700">
                View Mats →
              </Link>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔄</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Ball Reel</h3>
              <p className="text-gray-600 mb-4">Practice ball reels for continuous play without ball collection breaks.</p>
              <Link href="/sports-equipment/racket-sports/table-tennis/training" className="text-cyan-600 font-semibold hover:text-cyan-700">
                View Reels →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Table Tennis Community
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Join our table tennis community for training tips, local tournaments, and exclusive gear deals
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-300"
            />
            <button className="bg-cyan-600 text-white px-6 py-3 rounded-r-lg hover:bg-cyan-700 transition-colors duration-200 font-semibold">
              Join Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}