// app/gym-equipment/cardio-machines/treadmills/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, Star, Heart, Filter, Grid, List, Zap, Battery, Volume2, Gauge, Activity, Users } from 'lucide-react';

export default function TreadmillsPage() {
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    type: [],
    priceRange: [],
    brand: [],
    features: []
  });

  const treadmillProducts = [
    {
      id: 1,
      name: 'AirRunner Commercial Treadmill',
      price: '$2,499.99',
      originalPrice: '$2,999.99',
      image: '/treadmill-commercial.jpg',
      rating: 4.9,
      reviews: 89,
      category: 'Commercial',
      brand: 'CardioMax',
      description: 'Commercial grade treadmill with advanced cushioning and powerful motor',
      features: ['15% Incline', '12 mph Speed', 'Heart Rate Monitor', 'Bluetooth Speakers', 'Foldable'],
      specifications: {
        motor: '4.0 HP',
        display: '10" Touchscreen',
        programs: '30 Built-in',
        weightCapacity: '400 lbs',
        runningArea: '22" x 60"',
        maxSpeed: '12 mph',
        maxIncline: '15%'
      },
      isNew: false,
      isBestseller: true,
      inStock: true,
      energyEfficient: true,
      motorType: 'AC Motor',
      suitableFor: 'Commercial Gym'
    },
    {
      id: 2,
      name: 'Home Fitness Treadmill Pro',
      price: '$1,299.99',
      originalPrice: '$1,599.99',
      image: '/treadmill-home-pro.jpg',
      rating: 4.6,
      reviews: 124,
      category: 'Home',
      brand: 'FitMaster',
      description: 'Professional home treadmill with space-saving foldable design',
      features: ['12% Incline', '10 mph Speed', 'Quick Dial Controls', 'Device Holder', 'Foldable'],
      specifications: {
        motor: '3.0 HP',
        display: '7" LCD',
        programs: '20 Built-in',
        weightCapacity: '300 lbs',
        runningArea: '20" x 55"',
        maxSpeed: '10 mph',
        maxIncline: '12%'
      },
      isNew: true,
      isBestseller: false,
      inStock: true,
      energyEfficient: true,
      motorType: 'DC Motor',
      suitableFor: 'Home Use'
    },
    {
      id: 3,
      name: 'Compact Walking Treadmill',
      price: '$699.99',
      originalPrice: '$899.99',
      image: '/treadmill-compact.jpg',
      rating: 4.4,
      reviews: 156,
      category: 'Compact',
      brand: 'SpaceSaver',
      description: 'Ultra-compact treadmill perfect for walking workouts in small spaces',
      features: ['Under Desk', 'Remote Control', 'LED Display', 'Transport Wheels', 'Quiet Operation'],
      specifications: {
        motor: '2.0 HP',
        display: 'LED Display',
        programs: 'Basic Modes',
        weightCapacity: '220 lbs',
        runningArea: '16" x 47"',
        maxSpeed: '6 mph',
        maxIncline: '0%'
      },
      isNew: false,
      isBestseller: true,
      inStock: true,
      energyEfficient: true,
      motorType: 'DC Motor',
      suitableFor: 'Small Spaces'
    },
    {
      id: 4,
      name: 'Premium Incline Trainer',
      price: '$3,299.99',
      originalPrice: '$3,799.99',
      image: '/treadmill-incline.jpg',
      rating: 4.8,
      reviews: 67,
      category: 'Commercial',
      brand: 'InclinePro',
      description: 'Advanced incline trainer with decline capability for varied terrain simulation',
      features: ['40% Incline', '12% Decline', 'Virtual Training', 'Advanced Cushioning', 'Commercial Build'],
      specifications: {
        motor: '4.5 HP',
        display: '15" Touchscreen',
        programs: '50 Built-in',
        weightCapacity: '400 lbs',
        runningArea: '22" x 62"',
        maxSpeed: '12 mph',
        maxIncline: '40%'
      },
      isNew: true,
      isBestseller: false,
      inStock: true,
      energyEfficient: false,
      motorType: 'AC Motor',
      suitableFor: 'Commercial Gym'
    },
    {
      id: 5,
      name: 'Smart Connected Treadmill',
      price: '$1,899.99',
      originalPrice: '$2,299.99',
      image: '/treadmill-smart.jpg',
      rating: 4.7,
      reviews: 203,
      category: 'Smart',
      brand: 'TechFit',
      description: 'Interactive treadmill with live classes and virtual running routes',
      features: ['Live Classes', 'Virtual Routes', 'Auto Incline', 'Bluetooth Connectivity', 'App Integration'],
      specifications: {
        motor: '3.5 HP',
        display: '12" Touchscreen',
        programs: 'Unlimited Classes',
        weightCapacity: '350 lbs',
        runningArea: '20" x 60"',
        maxSpeed: '12 mph',
        maxIncline: '15%'
      },
      isNew: false,
      isBestseller: true,
      inStock: true,
      energyEfficient: true,
      motorType: 'DC Motor',
      suitableFor: 'Home Use'
    },
    {
      id: 6,
      name: 'Budget Home Treadmill',
      price: '$499.99',
      originalPrice: null,
      image: '/treadmill-budget.jpg',
      rating: 4.2,
      reviews: 289,
      category: 'Home',
      brand: 'ValueRun',
      description: 'Affordable home treadmill with essential features for daily workouts',
      features: ['Manual Incline', 'Basic Display', 'Pulse Sensors', 'Foldable Design', 'Transport Wheels'],
      specifications: {
        motor: '2.5 HP',
        display: '5" LCD',
        programs: '12 Built-in',
        weightCapacity: '250 lbs',
        runningArea: '18" x 50"',
        maxSpeed: '8 mph',
        maxIncline: '10%'
      },
      isNew: false,
      isBestseller: false,
      inStock: true,
      energyEfficient: true,
      motorType: 'DC Motor',
      suitableFor: 'Home Use'
    },
    {
      id: 7,
      name: 'Heavy Duty Commercial Treadmill',
      price: '$4,499.99',
      originalPrice: '$4,999.99',
      image: '/treadmill-heavy-duty.jpg',
      rating: 4.9,
      reviews: 45,
      category: 'Commercial',
      brand: 'ProGym',
      description: 'Heavy-duty commercial treadmill built for high-traffic gym environments',
      features: ['Extra Wide Deck', 'Commercial Warranty', 'Multi-User Profiles', 'Advanced Cooling', 'Durable Frame'],
      specifications: {
        motor: '5.0 HP',
        display: '19" Touchscreen',
        programs: '40 Built-in',
        weightCapacity: '500 lbs',
        runningArea: '24" x 65"',
        maxSpeed: '15 mph',
        maxIncline: '15%'
      },
      isNew: false,
      isBestseller: false,
      inStock: false,
      energyEfficient: false,
      motorType: 'AC Motor',
      suitableFor: 'Commercial Gym'
    },
    {
      id: 8,
      name: 'Foldable Smart Treadmill',
      price: '$1,599.99',
      originalPrice: '$1,899.99',
      image: '/treadmill-foldable-smart.jpg',
      rating: 4.5,
      reviews: 178,
      category: 'Smart',
      brand: 'FlexRun',
      description: 'Space-saving smart treadmill with app connectivity and virtual training',
      features: ['Vertical Storage', 'App Controlled', 'Voice Guidance', 'Workout Tracking', 'Compact Design'],
      specifications: {
        motor: '3.0 HP',
        display: '8" Touchscreen',
        programs: '25 Built-in',
        weightCapacity: '280 lbs',
        runningArea: '18" x 52"',
        maxSpeed: '10 mph',
        maxIncline: '12%'
      },
      isNew: true,
      isBestseller: true,
      inStock: true,
      energyEfficient: true,
      motorType: 'DC Motor',
      suitableFor: 'Home Use'
    }
  ];

  const treadmillTypes = [
    {
      name: 'Commercial',
      image: '/treadmill-commercial.jpg',
      description: 'Heavy-duty for gyms',
      count: 3,
      icon: '🏢'
    },
    {
      name: 'Home',
      image: '/treadmill-home.jpg',
      description: 'Perfect for home use',
      count: 3,
      icon: '🏠'
    },
    {
      name: 'Smart',
      image: '/treadmill-smart.jpg',
      description: 'Connected features',
      count: 2,
      icon: '📱'
    },
    {
      name: 'Compact',
      image: '/treadmill-compact.jpg',
      description: 'Space saving designs',
      count: 2,
      icon: '📦'
    },
    {
      name: 'Incline',
      image: '/treadmill-incline.jpg',
      description: 'Advanced incline',
      count: 1,
      icon: '⛰️'
    },
    {
      name: 'Budget',
      image: '/treadmill-budget.jpg',
      description: 'Affordable options',
      count: 1,
      icon: '💰'
    }
  ];

  const filters = {
    type: ['Commercial', 'Home', 'Smart', 'Compact', 'Incline', 'Budget'],
    priceRange: [
      'Under $500',
      '$500 - $1,000',
      '$1,000 - $2,000',
      '$2,000 - $3,000',
      'Above $3,000'
    ],
    brand: ['CardioMax', 'FitMaster', 'SpaceSaver', 'InclinePro', 'TechFit', 'ValueRun', 'ProGym', 'FlexRun'],
    features: ['Foldable', 'Touchscreen', 'Bluetooth', 'Heart Rate Monitor', 'App Connectivity', 'Live Classes', 'Auto Incline', 'Decline', 'Compact Design']
  };

  const toggleFilter = (filterType, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: (prev )[filterType].includes(value)
        ? (prev )[filterType].filter((item) => item !== value)
        : [...(prev )[filterType], value]
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-900 to-red-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <nav className="flex items-center space-x-2 text-sm text-orange-200 mb-4">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <Link href="/gym-equipment" className="hover:text-white transition-colors">Gym Equipment</Link>
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <Link href="/gym-equipment/cardio-machines" className="hover:text-white transition-colors">Cardio Machines</Link>
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <span className="text-white font-medium">Treadmills</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Treadmills
              </h1>
              <p className="text-xl text-orange-100 max-w-2xl">
                Run, walk, or jog your way to fitness with our premium treadmill collection. 
                From compact home models to commercial-grade machines.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="text-6xl">🏃‍♂️</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-6 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="flex items-center justify-center">
                <Gauge className="w-5 h-5 text-orange-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">15 mph</span>
              </div>
              <p className="text-sm text-gray-600">Max Speed</p>
            </div>
            <div>
              <div className="flex items-center justify-center">
                <Activity className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">40%</span>
              </div>
              <p className="text-sm text-gray-600">Max Incline</p>
            </div>
            <div>
              <div className="flex items-center justify-center">
                <Users className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">500 lbs</span>
              </div>
              <p className="text-sm text-gray-600">Max Capacity</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">3Y</div>
              <p className="text-sm text-gray-600">Warranty</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Navigation */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Treadmill Types</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {treadmillTypes.map((category, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-200 group border border-gray-200 cursor-pointer"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-red-200 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:from-orange-200 group-hover:to-red-300 transition-all duration-200">
                  <div className="text-xl">{category.icon}</div>
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-200">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{category.description}</p>
                <span className="inline-block mt-2 text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full">
                  {category.count} models
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with Controls */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Treadmills Collection
              </h2>
              <p className="text-gray-600">
                {treadmillProducts.length} premium treadmills for every fitness level and space
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
                <option value="speed">Highest Speed</option>
                <option value="incline">Highest Incline</option>
                <option value="capacity">Highest Capacity</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-72 flex-shrink-0">
              <div className="bg-gray-50 rounded-lg p-6 sticky top-4 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Filter Treadmills
                </h3>

                {/* Treadmill Type Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Treadmill Type</h4>
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
                          className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{feature}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Performance Filters */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Performance</h4>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">High Speed (10+ mph)</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">High Incline (12%+)</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Heavy Duty (350+ lbs)</span>
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {treadmillProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100"
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
                        <div className="text-5xl">🏃‍♂️</div>
                        <button className="absolute bottom-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <Heart className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-gray-900 text-lg">{product.name}</h3>
                          <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full">
                            {product.category}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                        
                        {/* Key Specifications */}
                        <div className="grid grid-cols-2 gap-2 mb-3">
                          <div className="text-xs text-gray-500">
                            <strong>Motor:</strong> {product.specifications.motor}
                          </div>
                          <div className="text-xs text-gray-500">
                            <strong>Speed:</strong> {product.specifications.maxSpeed}
                          </div>
                          <div className="text-xs text-gray-500">
                            <strong>Incline:</strong> {product.specifications.maxIncline}
                          </div>
                          <div className="text-xs text-gray-500">
                            <strong>Capacity:</strong> {product.specifications.weightCapacity}
                          </div>
                        </div>

                        {/* Features */}
                        <div className="mb-3">
                          <div className="flex flex-wrap gap-1">
                            {product.features.slice(0, 3).map((feature, index) => (
                              <span key={index} className="text-xs bg-red-50 text-red-600 px-2 py-1 rounded">
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
                                ? 'bg-orange-600 text-white hover:bg-orange-700' 
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
                  {treadmillProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex border border-gray-100"
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
                        <div className="text-4xl">🏃‍♂️</div>
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                              <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full">
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
                                <div className="font-medium text-gray-500">Motor</div>
                                <div className="text-gray-900">{product.specifications.motor}</div>
                              </div>
                              <div className="text-sm">
                                <div className="font-medium text-gray-500">Max Speed</div>
                                <div className="text-gray-900">{product.specifications.maxSpeed}</div>
                              </div>
                              <div className="text-sm">
                                <div className="font-medium text-gray-500">Max Incline</div>
                                <div className="text-gray-900">{product.specifications.maxIncline}</div>
                              </div>
                              <div className="text-sm">
                                <div className="font-medium text-gray-500">Capacity</div>
                                <div className="text-gray-900">{product.specifications.weightCapacity}</div>
                              </div>
                            </div>

                            {/* Features */}
                            <div className="mb-4">
                              <div className="flex flex-wrap gap-2">
                                {product.features.map((feature, index) => (
                                  <span key={index} className="text-sm bg-red-50 text-red-600 px-3 py-1 rounded-full">
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
                          <span className="text-sm text-gray-600 ml-6">Type: {product.motorType}</span>
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
                                ? 'bg-orange-600 text-white hover:bg-orange-700' 
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
      <section className="py-16 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Treadmills?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience superior performance, advanced technology, and unmatched durability with our treadmill collection
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gauge className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Powerful Motors</h3>
              <p className="text-gray-600 text-sm">
                2.0HP to 5.0HP motors for smooth, consistent performance at any speed
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced Cushioning</h3>
              <p className="text-gray-600 text-sm">
                Shock absorption systems to reduce impact on joints during workouts
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Technology</h3>
              <p className="text-gray-600 text-sm">
                Bluetooth, app integration, virtual training, and live classes
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">🏠</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Space Saving</h3>
              <p className="text-gray-600 text-sm">
                Foldable designs and compact footprints perfect for home use
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}