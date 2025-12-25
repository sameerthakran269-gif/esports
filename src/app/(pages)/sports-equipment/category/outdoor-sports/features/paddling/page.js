// app/sports-equipment/outdoor-sports/paddling/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Heart, Filter, Grid, List } from 'lucide-react';

export default function PaddlingPage() {
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    priceRange: [],
    brand: [],
    waterType: []
  });

  const paddlingProducts = [
    {
      id: 32,
      name: 'Recreational Kayak Package',
      price: '$499.99',
      originalPrice: '$649.99',
      image: '/kayak.jpg',
      rating: 4.6,
      reviews: 112,
      category: 'Kayaks',
      brand: 'PaddlePro',
      description: '10-foot recreational kayak with paddle and life vest included',
      isNew: true,
      isBestseller: false,
      activityType: 'Recreational',
      weight: '42 lbs',
      capacity: '300 lbs',
      waterType: 'Lakes/Rivers',
      length: '10 ft'
    },
    {
      id: 48,
      name: 'Touring Sea Kayak',
      price: '$899.99',
      originalPrice: '$1,199.99',
      image: '/sea-kayak.jpg',
      rating: 4.8,
      reviews: 67,
      category: 'Kayaks',
      brand: 'OceanMaster',
      description: '16-foot touring kayak with rudder system for open water',
      isNew: false,
      isBestseller: true,
      activityType: 'Touring',
      weight: '55 lbs',
      capacity: '350 lbs',
      waterType: 'Ocean/Bays',
      length: '16 ft'
    },
    {
      id: 49,
      name: 'Inflatable Stand Up Paddleboard',
      price: '$399.99',
      originalPrice: '$499.99',
      image: '/sup-board.jpg',
      rating: 4.5,
      reviews: 189,
      category: 'SUP Boards',
      brand: 'FlowRider',
      description: '10.6" inflatable SUP with adjustable paddle and pump',
      isNew: true,
      isBestseller: true,
      activityType: 'SUP',
      weight: '28 lbs',
      capacity: '285 lbs',
      waterType: 'All Waters',
      length: '10.6 ft'
    },
    {
      id: 50,
      name: 'Carbon Fiber Kayak Paddle',
      price: '$149.99',
      originalPrice: '$189.99',
      image: '/kayak-paddle.jpg',
      rating: 4.7,
      reviews: 94,
      category: 'Paddles',
      brand: 'PaddlePro',
      description: 'Lightweight carbon fiber paddle with adjustable feathering',
      isNew: false,
      isBestseller: false,
      activityType: 'Kayaking',
      weight: '2.1 lbs',
      material: 'Carbon Fiber',
      length: 'Adjustable'
    },
    {
      id: 51,
      name: '2-Person Canoe',
      price: '$699.99',
      originalPrice: '$849.99',
      image: '/canoe.jpg',
      rating: 4.4,
      reviews: 78,
      category: 'Canoes',
      brand: 'RiverCraft',
      description: 'Royalex construction canoe with comfortable seating for two',
      isNew: false,
      isBestseller: true,
      activityType: 'Canoeing',
      weight: '68 lbs',
      capacity: '600 lbs',
      waterType: 'Rivers/Lakes',
      length: '14 ft'
    },
    {
      id: 52,
      name: 'Kayak Spray Skirt',
      price: '$79.99',
      originalPrice: '$99.99',
      image: '/spray-skirt.jpg',
      rating: 4.3,
      reviews: 145,
      category: 'Accessories',
      brand: 'DryTop',
      description: 'Neoprene spray skirt with tunnel and deck for kayaking',
      isNew: true,
      isBestseller: false,
      activityType: 'Kayaking',
      weight: '1.8 lbs',
      size: 'Medium',
      material: 'Neoprene'
    },
    {
      id: 53,
      name: 'Fishing Kayak with Pedal Drive',
      price: '$1,299.99',
      originalPrice: '$1,599.99',
      image: '/fishing-kayak.jpg',
      rating: 4.9,
      reviews: 56,
      category: 'Kayaks',
      brand: 'AnglerPro',
      description: 'Pedal-driven fishing kayak with rod holders and storage',
      isNew: false,
      isBestseller: true,
      activityType: 'Fishing',
      weight: '85 lbs',
      capacity: '400 lbs',
      waterType: 'Lakes/Ocean',
      length: '12.5 ft'
    },
    {
      id: 54,
      name: 'Dry Bag Set (3-pack)',
      price: '$49.99',
      originalPrice: '$69.99',
      image: '/dry-bags.jpg',
      rating: 4.6,
      reviews: 234,
      category: 'Accessories',
      brand: 'AquaSeal',
      description: 'Waterproof dry bags in 5L, 10L, and 20L sizes',
      isNew: false,
      isBestseller: true,
      activityType: 'All Paddling',
      weight: '1.2 lbs',
      capacity: '35L total',
      material: 'PVC'
    },
    {
      id: 55,
      name: 'Kayak Roof Rack System',
      price: '$199.99',
      originalPrice: '$249.99',
      image: '/roof-rack.jpg',
      rating: 4.5,
      reviews: 89,
      category: 'Transport',
      brand: 'CarrySafe',
      description: 'Universal kayak roof rack with locking straps and pads',
      isNew: true,
      isBestseller: false,
      activityType: 'Transport',
      weight: '8.5 lbs',
      capacity: '150 lbs',
      fit: 'Universal'
    },
    {
      id: 56,
      name: 'Whitewater Kayak',
      price: '$799.99',
      originalPrice: '$999.99',
      image: '/whitewater-kayak.jpg',
      rating: 4.7,
      reviews: 45,
      category: 'Kayaks',
      brand: 'RapidRider',
      description: 'Playboat for whitewater with planing hull and edges',
      isNew: false,
      isBestseller: false,
      activityType: 'Whitewater',
      weight: '38 lbs',
      capacity: '250 lbs',
      waterType: 'Rivers',
      length: '6.5 ft'
    },
    {
      id: 57,
      name: 'PFD Life Vest - Comfort Series',
      price: '$89.99',
      originalPrice: '$119.99',
      image: '/life-vest.jpg',
      rating: 4.8,
      reviews: 167,
      category: 'Safety Gear',
      brand: 'SafeFloat',
      description: 'USCG-approved Type III PFD with multiple pockets',
      isNew: true,
      isBestseller: true,
      activityType: 'Safety',
      weight: '2.3 lbs',
      size: 'Adult Universal',
      certification: 'USCG Type III'
    },
    {
      id: 58,
      name: 'SUP Anchor Kit',
      price: '$59.99',
      originalPrice: '$79.99',
      image: '/sup-anchor.jpg',
      rating: 4.4,
      reviews: 78,
      category: 'Accessories',
      brand: 'AnchorPro',
      description: 'Folding anchor with rope and bag for SUP fishing',
      isNew: false,
      isBestseller: false,
      activityType: 'SUP Fishing',
      weight: '3.1 lbs',
      anchorWeight: '3.5 lbs',
      ropeLength: '50 ft'
    }
  ];

  const paddlingTypes = [
    {
      name: 'Kayaking',
      icon: '🛶',
      description: 'Kayaks, Paddles & Gear',
      count: '25 products',
      slug: 'kayaking'
    },
    {
      name: 'SUP',
      icon: '🏄',
      description: 'Stand Up Paddleboards',
      count: '18 products',
      slug: 'sup'
    },
    {
      name: 'Canoeing',
      icon: '🛶',
      description: 'Canoes & Traditional Gear',
      count: '12 products',
      slug: 'canoeing'
    },
    {
      name: 'Whitewater',
      icon: '🌊',
      description: 'Whitewater Kayaks & Safety',
      count: '15 products',
      slug: 'whitewater'
    },
    {
      name: 'Touring',
      icon: '🧭',
      description: 'Sea Kayaks & Navigation',
      count: '10 products',
      slug: 'touring'
    },
    {
      name: 'Fishing',
      icon: '🎣',
      description: 'Fishing Kayaks & Accessories',
      count: '20 products',
      slug: 'fishing'
    }
  ];

  const filters = {
    category: ['Kayaks', 'SUP Boards', 'Canoes', 'Paddles', 'Safety Gear', 'Accessories', 'Transport'],
    priceRange: [
      'Under $100',
      '$100 - $300',
      '$300 - $600',
      '$600 - $1,000',
      'Above $1,000'
    ],
    brand: ['PaddlePro', 'OceanMaster', 'FlowRider', 'RiverCraft', 'DryTop', 'AnglerPro', 'AquaSeal', 'CarrySafe', 'RapidRider', 'SafeFloat', 'AnchorPro'],
    waterType: ['Lakes/Rivers', 'Ocean/Bays', 'Whitewater', 'All Waters']
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
      <section className="bg-gradient-to-r from-blue-600 to-teal-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Paddling & Water Sports
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Discover the perfect kayak, SUP, or canoe for your next water adventure. Quality gear for every paddle stroke.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#products"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
              >
                Shop Paddling Gear
              </Link>
              <Link
                href="/sports-equipment/outdoor-sports"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200"
              >
                View All Outdoor Sports
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Paddling Categories */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Paddling Adventures
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {paddlingTypes.map((paddlingType, index) => (
              <Link
                key={index}
                href={`/sports-equipment/outdoor-sports/paddling/${paddlingType.slug}`}
                className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-200">
                  {paddlingType.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{paddlingType.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{paddlingType.description}</p>
                <span className="text-xs text-blue-600 font-medium">{paddlingType.count}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Built for the Water
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our paddling equipment is designed for performance, safety, and comfort on every water adventure.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Safety Certified</h3>
              <p className="text-gray-600">All safety gear meets USCG and international standards for water sports.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Lightweight & Durable</h3>
              <p className="text-gray-600">Advanced materials that balance performance with portability and strength.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎒</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Easy Transport</h3>
              <p className="text-gray-600">Inflatable options and transport systems make getting to water easy.</p>
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
                Paddling Equipment
              </h2>
              <p className="text-gray-600">
                Showing {paddlingProducts.length} products
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
                <option value="weight">Lightest First</option>
                <option value="capacity">Highest Capacity</option>
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

                {/* Water Type Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Water Type</h4>
                  <div className="space-y-2">
                    {filters.waterType.map((type) => (
                      <label key={type} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.waterType.includes(type)}
                          onChange={() => toggleFilter('waterType', type)}
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

                {/* Clear Filters */}
                <button
                  onClick={() => setSelectedFilters({ category: [], priceRange: [], brand: [], waterType: [] })}
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
                  {paddlingProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                    >
                      <div className="relative h-64 bg-gradient-to-br from-blue-50 to-teal-100 flex items-center justify-center">
                        {product.isNew && (
                          <span className="absolute top-3 left-3 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            New
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="absolute top-3 left-3 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Bestseller
                          </span>
                        )}
                        <div className="text-4xl">
                          {product.category === 'Kayaks' ? '🛶' : 
                           product.category === 'SUP Boards' ? '🏄' :
                           product.category === 'Canoes' ? '🛶' :
                           product.category === 'Paddles' ? '🚣' :
                           product.category === 'Safety Gear' ? '🛡️' :
                           product.category === 'Accessories' ? '🎒' : '🚗'}
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
                              {product.waterType}
                            </span>
                            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                              {product.weight}
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
                  {paddlingProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex"
                    >
                      <div className="w-48 relative bg-gradient-to-br from-blue-50 to-teal-100 flex items-center justify-center">
                        {product.isNew && (
                          <span className="absolute top-3 left-3 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            New
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="absolute top-3 left-3 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Bestseller
                          </span>
                        )}
                        <div className="text-4xl">
                          {product.category === 'Kayaks' ? '🛶' : 
                           product.category === 'SUP Boards' ? '🏄' :
                           product.category === 'Canoes' ? '🛶' :
                           product.category === 'Paddles' ? '🚣' :
                           product.category === 'Safety Gear' ? '🛡️' :
                           product.category === 'Accessories' ? '🎒' : '🚗'}
                        </div>
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                              <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                                {product.waterType}
                              </span>
                              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                {product.weight}
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
                          <span className="text-sm text-gray-600">Capacity: {product.capacity}</span>
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

      {/* Safety & Education Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Paddling Safety & Education
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Learn proper techniques and safety protocols for all water conditions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl mb-3">🎓</div>
                <h3 className="font-semibold mb-2">Paddling Courses</h3>
                <p className="text-blue-100 text-sm">ACA certified instruction for all skill levels</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl mb-3">🛡️</div>
                <h3 className="font-semibold mb-2">Safety Gear Guides</h3>
                <p className="text-blue-100 text-sm">Learn proper PFD use and safety equipment</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl mb-3">🗺️</div>
                <h3 className="font-semibold mb-2">Waterway Maps</h3>
                <p className="text-blue-100 text-sm">Access to detailed paddling routes and conditions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Join the Paddling Community
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Get waterway recommendations, safety tips, and exclusive paddling gear deals
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