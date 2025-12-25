// app/gym-equipment/cardio-machines/climbers/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, Star, Heart, Filter, Grid, List, Zap, Battery, Volume2, ArrowRight } from 'lucide-react';

export default function ClimbersPage() {
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    type: [],
    priceRange: [],
    brand: [],
    features: []
  });

  const climberProducts = [
    {
      id: 1,
      name: 'Commercial Stair Climber Pro',
      price: '$2,199.99',
      originalPrice: '$2,599.99',
      image: '/stair-climber-pro.jpg',
      rating: 4.8,
      reviews: 67,
      category: 'Stair Climbers',
      brand: 'StepMaster',
      description: 'Commercial-grade stair climber with independent step action and advanced metrics',
      features: ['Independent Steps', 'Heart Rate Control', 'Programmable Workouts', 'Space Efficient', 'Calorie Counter'],
      specifications: {
        steps: 'Independent Hydraulic',
        display: '10" Touchscreen',
        programs: '25 Built-in',
        weightCapacity: '400 lbs',
        stride: '14-inch adjustable'
      },
      isNew: true,
      isBestseller: true,
      inStock: true,
      energyEfficient: true,
      dimensions: '58" L x 28" W x 68" H'
    },
    {
      id: 2,
      name: 'Vertical Climber Max',
      price: '$599.99',
      originalPrice: '$749.99',
      image: '/vertical-climber-max.jpg',
      rating: 4.5,
      reviews: 124,
      category: 'Vertical Climbers',
      brand: 'TotalBody',
      description: 'Full-body vertical climbing machine for intense cardio and strength training',
      features: ['Full Body Workout', 'Compact Design', 'Digital Monitor', 'Adjustable Resistance', 'Foldable'],
      specifications: {
        resistance: 'Hydraulic Piston',
        display: 'LCD Console',
        programs: '8 Built-in',
        weightCapacity: '300 lbs',
        stride: 'Fixed'
      },
      isNew: false,
      isBestseller: true,
      inStock: true,
      energyEfficient: false,
      dimensions: '42" L x 24" W x 84" H'
    },
    {
      id: 3,
      name: 'Hybrid Climber Trainer',
      price: '$1,899.99',
      originalPrice: '$2,299.99',
      image: '/hybrid-climber.jpg',
      rating: 4.7,
      reviews: 89,
      category: 'Hybrid Climbers',
      brand: 'FusionFit',
      description: '3-in-1 climber that combines stair stepping, elliptical, and upper body training',
      features: ['3-in-1 Design', 'Upper Body Arms', 'Virtual Coaching', 'Bluetooth Audio', 'App Connectivity'],
      specifications: {
        modes: 'Climber, Elliptical, Stepper',
        display: '12" Touchscreen',
        programs: '30 Built-in',
        weightCapacity: '350 lbs',
        stride: '16-inch'
      },
      isNew: true,
      isBestseller: false,
      inStock: true,
      energyEfficient: true,
      dimensions: '62" L x 32" W x 70" H'
    },
    {
      id: 4,
      name: 'Compact Stepper Machine',
      price: '$349.99',
      originalPrice: '$449.99',
      image: '/compact-stepper.jpg',
      rating: 4.3,
      reviews: 156,
      category: 'Stair Climbers',
      brand: 'SpaceSaver',
      description: 'Mini stepper perfect for small spaces with adjustable hydraulic resistance',
      features: ['Compact Design', 'Adjustable Resistance', 'LCD Display', 'Portable', 'Under-Desk Use'],
      specifications: {
        resistance: 'Adjustable Hydraulic',
        display: 'Basic LCD',
        programs: 'None',
        weightCapacity: '250 lbs',
        stride: '8-inch'
      },
      isNew: false,
      isBestseller: false,
      inStock: true,
      energyEfficient: true,
      dimensions: '24" L x 18" W x 12" H'
    },
    {
      id: 5,
      name: 'Commercial Jacob\'s Ladder',
      price: '$3,499.99',
      originalPrice: '$3,999.99',
      image: '/jacobs-ladder.jpg',
      rating: 4.9,
      reviews: 42,
      category: 'Ladder Climbers',
      brand: 'AeroClimb',
      description: 'Professional ladder climbing machine for the ultimate full-body cardio workout',
      features: ['Self-Powered', 'Full Body Engagement', 'Commercial Grade', 'Low Impact', 'Calorie Torch'],
      specifications: {
        resistance: 'Self-Powered',
        display: 'Advanced Console',
        programs: '15 Built-in',
        weightCapacity: '400 lbs',
        stride: 'Continuous Ladder'
      },
      isNew: false,
      isBestseller: true,
      inStock: false,
      energyEfficient: true,
      dimensions: '72" L x 36" W x 88" H'
    },
    {
      id: 6,
      name: 'Mountain Climber Pro',
      price: '$899.99',
      originalPrice: '$1,099.99',
      image: '/mountain-climber.jpg',
      rating: 4.4,
      reviews: 78,
      category: 'Hybrid Climbers',
      brand: 'PeakPerformance',
      description: 'Simulates mountain climbing motion with adjustable incline and resistance levels',
      features: ['Adjustable Incline', 'Magnetic Resistance', 'Heart Rate Monitor', 'Foldable Design', 'Transport Wheels'],
      specifications: {
        resistance: 'Magnetic',
        display: '7" LCD',
        programs: '20 Built-in',
        weightCapacity: '325 lbs',
        stride: 'Adjustable 10-16"'
      },
      isNew: true,
      isBestseller: false,
      inStock: true,
      energyEfficient: true,
      dimensions: '55" L x 26" W x 52" H'
    }
  ];

  const climberTypes = [
    {
      name: 'Stair Climbers',
      image: '/stair-climbers.jpg',
      description: 'Simulate stair climbing motion',
      count: 4,
      icon: '🏢',
      benefits: ['Lower body focus', 'Calorie intensive', 'Low impact']
    },
    {
      name: 'Vertical Climbers',
      image: '/vertical-climbers.jpg',
      description: 'Full-body vertical climbing',
      count: 3,
      icon: '🧗',
      benefits: ['Full body workout', 'High intensity', 'Compact design']
    },
    {
      name: 'Hybrid Climbers',
      image: '/hybrid-climbers.jpg',
      description: 'Multi-functional climbing machines',
      count: 2,
      icon: '⚡',
      benefits: ['Versatile workouts', 'Upper body engagement', 'Multiple modes']
    },
    {
      name: 'Ladder Climbers',
      image: '/ladder-climbers.jpg',
      description: 'Continuous ladder climbing motion',
      count: 1,
      icon: '🪜',
      benefits: ['Maximum intensity', 'Self-powered', 'Commercial grade']
    }
  ];

  const filters = {
    type: ['Stair Climbers', 'Vertical Climbers', 'Hybrid Climbers', 'Ladder Climbers'],
    priceRange: [
      'Under $500',
      '$500 - $1,000',
      '$1,000 - $2,000',
      '$2,000 - $3,000',
      'Above $3,000'
    ],
    brand: ['StepMaster', 'TotalBody', 'FusionFit', 'SpaceSaver', 'AeroClimb', 'PeakPerformance'],
    features: ['Energy Efficient', 'Foldable', 'Touchscreen', 'Bluetooth', 'Heart Rate Monitor', 'App Connectivity', 'Commercial Grade', 'Compact Design']
  };

  const toggleFilter = (filterType, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: (prev )[filterType].includes(value)
        ? (prev )[filterType].filter((item) => item !== value)
        : [...(prev )[filterType], value]
    }));
  };

  const benefits = [
    {
      title: 'Full Body Workout',
      description: 'Engage multiple muscle groups simultaneously for efficient training',
      icon: '💪'
    },
    {
      title: 'Low Impact',
      description: 'Gentle on joints while providing intense cardiovascular exercise',
      icon: '🦵'
    },
    {
      title: 'Space Efficient',
      description: 'Many climbers feature compact designs perfect for home gyms',
      icon: '🏠'
    },
    {
      title: 'Calorie Torch',
      description: 'Burn maximum calories in minimal time with high-intensity climbing',
      icon: '🔥'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-indigo-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <nav className="flex items-center space-x-2 text-sm text-purple-200 mb-4">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <Link href="/gym-equipment" className="hover:text-white transition-colors">Gym Equipment</Link>
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <Link href="/gym-equipment/cardio-machines" className="hover:text-white transition-colors">Cardio Machines</Link>
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <span className="text-white font-medium">Climbers</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Climbing Machines
              </h1>
              <p className="text-xl text-purple-100 max-w-2xl">
                Scale new heights in your fitness journey with our premium climbing machines. 
                Experience full-body workouts that torch calories and build endurance.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="text-6xl">🧗‍♂️</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-6 bg-gradient-to-r from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="flex items-center justify-center">
                <Zap className="w-5 h-5 text-purple-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">600+</span>
              </div>
              <p className="text-sm text-gray-600">Calories/Hour Burn</p>
            </div>
            <div>
              <div className="flex items-center justify-center">
                <Battery className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">8</span>
              </div>
              <p className="text-sm text-gray-600">Energy Efficient Models</p>
            </div>
            <div>
              <div className="flex items-center justify-center">
                <Volume2 className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">12</span>
              </div>
              <p className="text-sm text-gray-600">Quiet Operation</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">3Y</div>
              <p className="text-sm text-gray-600">Frame Warranty</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Climbing Machines?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-indigo-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-purple-200 group-hover:to-indigo-300 transition-all duration-300">
                  <div className="text-2xl">{benefit.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Climber Types */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Types of Climbing Machines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {climberTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-indigo-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl">{type.icon}</div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 text-center mb-2">{type.name}</h3>
                <p className="text-gray-600 text-sm text-center mb-4">{type.description}</p>
                <div className="space-y-2 mb-4">
                  {type.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                      {benefit}
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <span className="inline-block bg-purple-100 text-purple-600 text-xs px-3 py-1 rounded-full">
                    {type.count} models
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Products Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with Controls */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Climbing Machines Collection
              </h2>
              <p className="text-gray-600">
                {climberProducts.length} premium climbing machines for full-body cardio workouts
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
                <option value="energy-efficient">Energy Efficient</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-72 flex-shrink-0">
              <div className="bg-gray-50 rounded-lg p-6 sticky top-4 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Filter Climbers
                </h3>

                {/* Machine Type Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Climber Type</h4>
                  <div className="space-y-2">
                    {filters.type.map((type) => (
                      <label key={type} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.type.includes(type)}
                          onChange={() => toggleFilter('type', type)}
                          className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
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

                {/* Features Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Features</h4>
                  <div className="space-y-2">
                    {filters.features.map((feature) => (
                      <label key={feature} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.features.includes(feature)}
                          onChange={() => toggleFilter('features', feature)}
                          className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{feature}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Additional Filters */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Additional Options</h4>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Energy Efficient</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">In Stock</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">On Sale</span>
                    </label>
                  </div>
                </div>

                {/* Clear Filters */}
                <button
                  onClick={() => setSelectedFilters({ type: [], priceRange: [], brand: [], features: [] })}
                  className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition-colors duration-200 font-medium"
                >
                  Clear All Filters
                </button>
              </div>
            </div>

            {/* Products Grid */}
            <div className="flex-1">
              {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
                  {climberProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100"
                    >
                      <div className="relative h-64 bg-gradient-to-br from-purple-50 to-indigo-100 flex items-center justify-center">
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
                        {product.energyEfficient && (
                          <span className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                            <Zap className="w-3 h-3 mr-1" />
                            Eco
                          </span>
                        )}
                        {!product.inStock && (
                          <span className="absolute top-12 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Out of Stock
                          </span>
                        )}
                        <div className="text-5xl">
                          {product.category === 'Stair Climbers' ? '🏢' :
                           product.category === 'Vertical Climbers' ? '🧗' :
                           product.category === 'Hybrid Climbers' ? '⚡' :
                           product.category === 'Ladder Climbers' ? '🪜' : '🏃'}
                        </div>
                        <button className="absolute bottom-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <Heart className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-gray-900 text-lg">{product.name}</h3>
                          <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
                            {product.category}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                        
                        {/* Specifications */}
                        <div className="grid grid-cols-2 gap-2 mb-3">
                          <div className="text-xs text-gray-500">
                            <strong>Type:</strong> {product.specifications.resistance || product.specifications.steps}
                          </div>
                          <div className="text-xs text-gray-500">
                            <strong>Display:</strong> {product.specifications.display}
                          </div>
                          <div className="text-xs text-gray-500">
                            <strong>Programs:</strong> {product.specifications.programs}
                          </div>
                          <div className="text-xs text-gray-500">
                            <strong>Capacity:</strong> {product.specifications.weightCapacity}
                          </div>
                        </div>

                        {/* Dimensions */}
                        <div className="mb-3">
                          <div className="text-xs text-gray-500">
                            <strong>Dimensions:</strong> {product.dimensions}
                          </div>
                        </div>

                        {/* Features */}
                        <div className="mb-3">
                          <div className="flex flex-wrap gap-1">
                            {product.features.slice(0, 3).map((feature, index) => (
                              <span key={index} className="text-xs bg-indigo-50 text-indigo-600 px-2 py-1 rounded">
                                {feature}
                              </span>
                            ))}
                            {product.features.length > 3 && (
                              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                +{product.features.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>

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
                          <button 
                            className={`px-4 py-2 rounded-lg transition-colors duration-200 text-sm font-semibold ${
                              product.inStock 
                                ? 'bg-purple-600 text-white hover:bg-purple-700' 
                                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            }`}
                            disabled={!product.inStock}
                          >
                            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* List View */
                <div className="space-y-6">
                  {climberProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex border border-gray-100"
                    >
                      <div className="w-48 relative bg-gradient-to-br from-purple-50 to-indigo-100 flex items-center justify-center">
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
                          {product.category === 'Stair Climbers' ? '🏢' :
                           product.category === 'Vertical Climbers' ? '🧗' :
                           product.category === 'Hybrid Climbers' ? '⚡' :
                           product.category === 'Ladder Climbers' ? '🪜' : '🏃'}
                        </div>
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                              <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
                                {product.category}
                              </span>
                              {product.energyEfficient && (
                                <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full flex items-center">
                                  <Zap className="w-3 h-3 mr-1" />
                                  Energy Efficient
                                </span>
                              )}
                              {!product.inStock && (
                                <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
                                  Out of Stock
                                </span>
                              )}
                            </div>
                            <p className="text-gray-600 mb-3">{product.description}</p>
                            
                            {/* Specifications */}
                            <div className="grid grid-cols-4 gap-4 mb-4">
                              <div className="text-sm">
                                <div className="font-medium text-gray-500">Type</div>
                                <div className="text-gray-900">{product.specifications.resistance || product.specifications.steps}</div>
                              </div>
                              <div className="text-sm">
                                <div className="font-medium text-gray-500">Display</div>
                                <div className="text-gray-900">{product.specifications.display}</div>
                              </div>
                              <div className="text-sm">
                                <div className="font-medium text-gray-500">Programs</div>
                                <div className="text-gray-900">{product.specifications.programs}</div>
                              </div>
                              <div className="text-sm">
                                <div className="font-medium text-gray-500">Capacity</div>
                                <div className="text-gray-900">{product.specifications.weightCapacity}</div>
                              </div>
                            </div>

                            {/* Dimensions */}
                            <div className="mb-4">
                              <div className="text-sm">
                                <div className="font-medium text-gray-500">Dimensions</div>
                                <div className="text-gray-900">{product.dimensions}</div>
                              </div>
                            </div>

                            {/* Features */}
                            <div className="mb-4">
                              <div className="flex flex-wrap gap-2">
                                {product.features.map((feature, index) => (
                                  <span key={index} className="text-sm bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full">
                                    {feature}
                                  </span>
                                ))}
                              </div>
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
                          <button 
                            className={`px-6 py-3 rounded-lg transition-colors duration-200 font-semibold ${
                              product.inStock 
                                ? 'bg-purple-600 text-white hover:bg-purple-700' 
                                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            }`}
                            disabled={!product.inStock}
                          >
                            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
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

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Climbing Machines?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the ultimate full-body workout with our premium climbing equipment designed for maximum results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Maximum Calorie Burn</h3>
              <p className="text-gray-600 text-sm">
                Burn up to 600+ calories per hour with high-intensity climbing workouts
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Volume2 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quiet Operation</h3>
              <p className="text-gray-600 text-sm">
                Smooth, quiet hydraulic and magnetic resistance systems
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Battery className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Space Saving</h3>
              <p className="text-gray-600 text-sm">
                Compact designs and foldable options perfect for home gyms
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">💪</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Full Body Engagement</h3>
              <p className="text-gray-600 text-sm">
                Work multiple muscle groups simultaneously for efficient training
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Take Your Workouts to New Heights?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of satisfied customers who have transformed their fitness with our climbing machines
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/gym-equipment/cardio-machines"
              className="inline-flex items-center px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Explore All Cardio Machines
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <button className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors duration-200">
              Contact Expert
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}