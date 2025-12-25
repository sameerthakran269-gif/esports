// app/sports-equipment/team-sports/baseball/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Heart, Filter, Grid, List } from 'lucide-react';

export default function BaseballPage() {
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    priceRange: [],
    brand: []
  });

  const baseballProducts = [
    {
      id: 1,
      name: 'Professional Baseball Bat',
      price: '$199.99',
      originalPrice: '$249.99',
      image: '/baseball-bat-pro.jpg',
      rating: 4.8,
      reviews: 312,
      category: 'Bats',
      brand: 'Louisville Slugger',
      description: 'Professional-grade baseball bat with premium alloy construction',
      isNew: true,
      isBestseller: true,
      features: ['Premium alloy', 'Balanced swing', 'Pro endorsement']
    },
    {
      id: 2,
      name: 'Baseball Glove - Professional',
      price: '$179.99',
      originalPrice: '$229.99',
      image: '/baseball-glove.jpg',
      rating: 4.7,
      reviews: 267,
      category: 'Gloves & Mitts',
      brand: 'Rawlings',
      description: 'Professional baseball glove with premium leather and perfect break-in',
      isNew: false,
      isBestseller: true,
      features: ['Premium leather', 'Quick break-in', 'Custom fit']
    },
    {
      id: 3,
      name: 'Official MLB Baseballs (Dozen)',
      price: '$89.99',
      originalPrice: '$119.99',
      image: '/baseballs-official.jpg',
      rating: 4.9,
      reviews: 445,
      category: 'Baseballs',
      brand: 'Rawlings',
      description: 'Official MLB baseballs in a dozen pack for games and practice',
      isNew: false,
      isBestseller: true,
      features: ['Official MLB', 'Dozen pack', 'Consistent quality']
    },
    {
      id: 4,
      name: 'Batting Helmet',
      price: '$49.99',
      originalPrice: '$69.99',
      image: '/batting-helmet.jpg',
      rating: 4.6,
      reviews: 189,
      category: 'Protective Gear',
      brand: 'Easton',
      description: 'Professional batting helmet with face guard and padding',
      isNew: true,
      isBestseller: false,
      features: ['Face guard', 'Adjustable fit', 'NOCSAE certified']
    },
    {
      id: 5,
      name: 'Catcher Equipment Set',
      price: '$299.99',
      originalPrice: '$399.99',
      image: '/catcher-gear.jpg',
      rating: 4.5,
      reviews: 134,
      category: 'Protective Gear',
      brand: 'All-Star',
      description: 'Complete catcher set with chest protector, leg guards, and helmet',
      isNew: false,
      isBestseller: true,
      features: ['Complete set', 'Professional grade', 'Maximum protection']
    },
    {
      id: 6,
      name: 'Baseball Cleats',
      price: '$119.99',
      originalPrice: '$149.99',
      image: '/baseball-cleats.jpg',
      rating: 4.4,
      reviews: 278,
      category: 'Footwear',
      brand: 'Nike',
      description: 'Professional baseball cleats with molded spikes and ankle support',
      isNew: false,
      isBestseller: true,
      features: ['Molded spikes', 'Ankle support', 'Lightweight']
    },
    {
      id: 7,
      name: 'Batting Tee',
      price: '$39.99',
      originalPrice: '$59.99',
      image: '/batting-tee.jpg',
      rating: 4.3,
      reviews: 223,
      category: 'Training Equipment',
      brand: 'SKLZ',
      description: 'Professional batting tee for swing practice and training',
      isNew: false,
      isBestseller: false,
      features: ['Adjustable height', 'Durable base', 'Portable']
    },
    {
      id: 8,
      name: 'Pitching Machine',
      price: '$499.99',
      originalPrice: '$649.99',
      image: '/pitching-machine.jpg',
      rating: 4.7,
      reviews: 89,
      category: 'Training Equipment',
      brand: 'Heater',
      description: 'Professional pitching machine with variable speed and settings',
      isNew: true,
      isBestseller: false,
      features: ['Variable speed', 'Multiple pitches', 'Portable design']
    },
    {
      id: 9,
      name: 'Team Uniform Set (15 players)',
      price: '$699.99',
      originalPrice: '$899.99',
      image: '/baseball-uniforms.jpg',
      rating: 4.5,
      reviews: 78,
      category: 'Apparel',
      brand: 'Majestic',
      description: 'Complete team uniform set including jerseys and pants',
      isNew: false,
      isBestseller: false,
      features: ['Set for 15 players', 'Moisture-wicking', 'Customizable']
    },
    {
      id: 10,
      name: 'Batting Gloves',
      price: '$29.99',
      originalPrice: '$39.99',
      image: '/batting-gloves.jpg',
      rating: 4.6,
      reviews: 412,
      category: 'Accessories',
      brand: 'Franklin',
      description: 'Professional batting gloves with enhanced grip and comfort',
      isNew: false,
      isBestseller: true,
      features: ['Enhanced grip', 'Breathable', 'Durable']
    },
    {
      id: 11,
      name: 'Equipment Bag',
      price: '$79.99',
      originalPrice: '$99.99',
      image: '/baseball-bag.jpg',
      rating: 4.4,
      reviews: 156,
      category: 'Accessories',
      brand: 'DeMarini',
      description: 'Oversized equipment bag with separate compartments',
      isNew: false,
      isBestseller: true,
      features: ['Oversized', 'Multiple compartments', 'Durable material']
    },
    {
      id: 12,
      name: 'Field Maintenance Kit',
      price: '$149.99',
      originalPrice: '$199.99',
      image: '/field-kit.jpg',
      rating: 4.2,
      reviews: 67,
      category: 'Field Equipment',
      brand: 'TruGround',
      description: 'Complete field maintenance kit for baseball diamonds',
      isNew: true,
      isBestseller: false,
      features: ['Complete kit', 'Professional tools', 'Storage case']
    }
  ];

  const baseballCategories = [
    {
      name: 'Bats',
      icon: '🦇',
      description: 'Wood & alloy bats',
      count: '8 products'
    },
    {
      name: 'Gloves & Mitts',
      icon: '🧤',
      description: 'Fielding gloves',
      count: '6 products'
    },
    {
      name: 'Protective Gear',
      icon: '🛡️',
      description: 'Helmets & pads',
      count: '5 products'
    },
    {
      name: 'Training',
      icon: '🎯',
      description: 'Practice equipment',
      count: '7 products'
    },
    {
      name: 'Apparel',
      icon: '👕',
      description: 'Uniforms & clothing',
      count: '4 products'
    },
    {
      name: 'Accessories',
      icon: '🎒',
      description: 'Bags & gear',
      count: '6 products'
    }
  ];

  const filters = {
    category: ['Bats', 'Gloves & Mitts', 'Baseballs', 'Protective Gear', 'Footwear', 'Training Equipment', 'Apparel', 'Accessories', 'Field Equipment'],
    priceRange: [
      'Under $50',
      '$50 - $100',
      '$100 - $200',
      '$200 - $500',
      'Above $500'
    ],
    brand: ['Louisville Slugger', 'Rawlings', 'Easton', 'All-Star', 'Nike', 'DeMarini', 'Franklin', 'Majestic', 'SKLZ']
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
      <section className="bg-gradient-to-r from-blue-700 to-red-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <span className="text-6xl">⚾</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Baseball Equipment
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Professional baseball gear for hitting, fielding, and pitching. From bats to gloves, get everything for your baseball team.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#products"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
              >
                Shop Baseball Gear
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

      {/* Baseball Categories */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Baseball Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {baseballCategories.map((category, index) => (
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
                Baseball Equipment
              </h2>
              <p className="text-gray-600">
                Showing {baseballProducts.length} products
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
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
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
                  {baseballProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                    >
                      <div className="relative h-64 bg-gradient-to-br from-blue-50 to-red-100 flex items-center justify-center">
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
                        <div className="text-5xl">⚾</div>
                        <button className="absolute top-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <Heart className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-gray-900">{product.name}</h3>
                          <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
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
                  {baseballProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex"
                    >
                      <div className="w-48 relative bg-gradient-to-br from-blue-50 to-red-100 flex items-center justify-center">
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
                        <div className="text-5xl">⚾</div>
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                              <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
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

      {/* Batting & Pitching Special Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="flex justify-center mb-4">
              <span className="text-4xl">🎯</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">
              Batting & Pitching Excellence
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Professional-grade batting and pitching equipment designed for peak performance and skill development
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                View Batting Gear
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200">
                Pitching Equipment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Baseball Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Baseball Solutions
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Everything you need to equip a professional baseball team from batting practice to field maintenance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="text-4xl mb-4">🦇</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Batting Equipment</h3>
              <p className="text-gray-600 mb-4">Professional bats, tees, and training gear for hitters</p>
              <button className="text-blue-600 font-semibold hover:text-blue-700">
                Explore Bats & Gear →
              </button>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="text-4xl mb-4">🧤</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fielding Gear</h3>
              <p className="text-gray-600 mb-4">Gloves, mitts, and protective equipment for fielders</p>
              <button className="text-blue-600 font-semibold hover:text-blue-700">
                View Gloves & Mitts →
              </button>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="text-4xl mb-4">👕</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Team Uniforms</h3>
              <p className="text-gray-600 mb-4">Complete uniform packages and team apparel</p>
              <button className="text-blue-600 font-semibold hover:text-blue-700">
                Shop Apparel →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Catcher Equipment Focus */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-red-50 to-blue-50 rounded-3xl p-12 text-center">
            <div className="flex justify-center mb-6">
              <span className="text-5xl">⚡</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Catcher Packages
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Professional catcher equipment sets including chest protectors, leg guards, helmets, and mitts
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200">
                View Catcher Gear
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200">
                Custom Team Sets
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Baseball Updates
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Get the latest on baseball equipment, training techniques, and exclusive team deals
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-r-lg hover:bg-blue-700 transition-colors duration-200 font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}