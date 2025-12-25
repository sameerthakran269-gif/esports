// app/gym-equipment/cardio-machines/ellipticals/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, Star, Heart, Filter, Grid, List, Zap, Battery, Volume2, Users, Activity, Shield } from 'lucide-react';

export default function EllipticalsPage() {
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    type: [],
    priceRange: [],
    brand: [],
    features: []
  });

  const ellipticalProducts = [
    {
      id: 1,
      name: 'Commercial Elliptical Trainer',
      price: '$1,299.99',
      originalPrice: '$1,599.99',
      image: '/elliptical-commercial.jpg',
      rating: 4.4,
      reviews: 94,
      category: 'Commercial',
      brand: 'CardioMax',
      description: 'Smooth and quiet elliptical trainer with dual-action arms for full-body workout',
      features: ['20 Resistance Levels', 'Dual Action Arms', 'Heart Rate Sensors', 'Tablet Holder', 'Commercial Build'],
      specifications: {
        stride: '20-inch',
        display: '8" LCD',
        programs: '25 Built-in',
        weightCapacity: '350 lbs',
        resistance: 'Magnetic',
        incline: 'Fixed'
      },
      isNew: false,
      isBestseller: true,
      inStock: true,
      energyEfficient: true,
      ellipticalType: 'Front Drive',
      suitableFor: 'Commercial Gym'
    },
    {
      id: 2,
      name: 'Hybrid Elliptical Trainer',
      price: '$1,899.99',
      originalPrice: '$2,299.99',
      image: '/elliptical-hybrid.jpg',
      rating: 4.7,
      reviews: 92,
      category: 'Hybrid',
      brand: 'FusionFit',
      description: '3-in-1 elliptical with cross-training capabilities and virtual coaching',
      features: ['3-in-1 Design', 'Cross Training', 'Virtual Coaching', 'Bluetooth Audio', 'Adjustable Stride'],
      specifications: {
        stride: '18-22 inch',
        display: '12" Touchscreen',
        programs: '35 Built-in',
        weightCapacity: '375 lbs',
        resistance: 'Magnetic',
        incline: 'Power Incline'
      },
      isNew: true,
      isBestseller: false,
      inStock: true,
      energyEfficient: true,
      ellipticalType: 'Center Drive',
      suitableFor: 'Home Gym'
    },
    {
      id: 3,
      name: 'Compact Elliptical Machine',
      price: '$599.99',
      originalPrice: '$799.99',
      image: '/elliptical-compact.jpg',
      rating: 4.3,
      reviews: 167,
      category: 'Compact',
      brand: 'SpaceSaver',
      description: 'Space-saving elliptical perfect for small homes and apartments',
      features: ['Compact Design', 'Quiet Operation', '8 Resistance Levels', 'Transport Wheels', 'LED Display'],
      specifications: {
        stride: '14-inch',
        display: 'LED Console',
        programs: '8 Built-in',
        weightCapacity: '250 lbs',
        resistance: 'Magnetic',
        incline: 'Fixed'
      },
      isNew: false,
      isBestseller: true,
      inStock: true,
      energyEfficient: true,
      ellipticalType: 'Rear Drive',
      suitableFor: 'Small Spaces'
    },
    {
      id: 4,
      name: 'Premium Incline Elliptical',
      price: '$2,299.99',
      originalPrice: '$2,699.99',
      image: '/elliptical-incline.jpg',
      rating: 4.8,
      reviews: 78,
      category: 'Incline',
      brand: 'InclinePro',
      description: 'Advanced elliptical with power incline for varied workout intensity',
      features: ['Power Incline', '24 Resistance Levels', 'Heart Rate Control', 'Cooling Fan', 'Device Charging'],
      specifications: {
        stride: '22-inch',
        display: '10" Touchscreen',
        programs: '30 Built-in',
        weightCapacity: '400 lbs',
        resistance: 'Magnetic',
        incline: '20% Power Incline'
      },
      isNew: true,
      isBestseller: false,
      inStock: true,
      energyEfficient: false,
      ellipticalType: 'Front Drive',
      suitableFor: 'Serious Training'
    },
    {
      id: 5,
      name: 'Smart Connected Elliptical',
      price: '$1,599.99',
      originalPrice: '$1,999.99',
      image: '/elliptical-smart.jpg',
      rating: 4.6,
      reviews: 134,
      category: 'Smart',
      brand: 'ConnectFit',
      description: 'Interactive elliptical with live classes and virtual trails',
      features: ['Live Classes', 'Virtual Trails', 'Auto Resistance', 'Bluetooth Connectivity', 'Multi-user Profiles'],
      specifications: {
        stride: '20-inch',
        display: '15" Touchscreen',
        programs: 'Unlimited Classes',
        weightCapacity: '350 lbs',
        resistance: 'Magnetic',
        incline: 'Fixed'
      },
      isNew: false,
      isBestseller: true,
      inStock: true,
      energyEfficient: true,
      ellipticalType: 'Center Drive',
      suitableFor: 'Interactive Training'
    },
    {
      id: 6,
      name: 'Heavy Duty Elliptical',
      price: '$2,799.99',
      originalPrice: '$3,199.99',
      image: '/elliptical-heavy-duty.jpg',
      rating: 4.9,
      reviews: 56,
      category: 'Commercial',
      brand: 'ProGym',
      description: 'Commercial-grade elliptical built for high-traffic gym environments',
      features: ['Extra Wide Pedals', 'Commercial Warranty', 'Advanced Cooling', 'Durable Frame', 'Water Bottle Holder'],
      specifications: {
        stride: '24-inch',
        display: '14" LCD',
        programs: '40 Built-in',
        weightCapacity: '450 lbs',
        resistance: 'Electromagnetic',
        incline: 'Fixed'
      },
      isNew: false,
      isBestseller: false,
      inStock: false,
      energyEfficient: false,
      ellipticalType: 'Front Drive',
      suitableFor: 'Commercial Gym'
    },
    {
      id: 7,
      name: 'Foldable Elliptical Trainer',
      price: '$449.99',
      originalPrice: '$599.99',
      image: '/elliptical-foldable.jpg',
      rating: 4.2,
      reviews: 289,
      category: 'Foldable',
      brand: 'FlexTrain',
      description: 'Compact foldable elliptical for ultimate space efficiency',
      features: ['Foldable Design', 'Under Desk Use', 'Quiet Operation', 'Remote Control', 'App Connectivity'],
      specifications: {
        stride: '13-inch',
        display: 'Bluetooth App',
        programs: 'App Controlled',
        weightCapacity: '220 lbs',
        resistance: 'Magnetic',
        incline: 'Fixed'
      },
      isNew: true,
      isBestseller: true,
      inStock: true,
      energyEfficient: true,
      ellipticalType: 'Rear Drive',
      suitableFor: 'Apartments'
    },
    {
      id: 8,
      name: 'Dual Action Elliptical',
      price: '$1,099.99',
      originalPrice: '$1,399.99',
      image: '/elliptical-dual-action.jpg',
      rating: 4.5,
      reviews: 123,
      category: 'Dual Action',
      brand: 'TotalBody',
      description: 'Full-body elliptical with moving handlebars for upper body workout',
      features: ['Upper Body Workout', 'Sync Arms & Legs', '16 Resistance Levels', 'Heart Rate Monitor', 'Performance Tracking'],
      specifications: {
        stride: '18-inch',
        display: '7" LCD',
        programs: '20 Built-in',
        weightCapacity: '300 lbs',
        resistance: 'Magnetic',
        incline: 'Fixed'
      },
      isNew: false,
      isBestseller: false,
      inStock: true,
      energyEfficient: true,
      ellipticalType: 'Front Drive',
      suitableFor: 'Full Body'
    },
    {
      id: 9,
      name: 'Premium Home Elliptical',
      price: '$1,499.99',
      originalPrice: '$1,799.99',
      image: '/elliptical-premium-home.jpg',
      rating: 4.7,
      reviews: 198,
      category: 'Home',
      brand: 'HomeFit',
      description: 'Premium home elliptical with advanced features and quiet operation',
      features: ['Whisper Quiet', '24 Resistance Levels', 'Padded Handles', 'Media Shelf', 'Heart Rate Control'],
      specifications: {
        stride: '20-inch',
        display: '9" LCD',
        programs: '29 Built-in',
        weightCapacity: '325 lbs',
        resistance: 'Magnetic',
        incline: 'Manual Incline'
      },
      isNew: false,
      isBestseller: true,
      inStock: true,
      energyEfficient: true,
      ellipticalType: 'Rear Drive',
      suitableFor: 'Home Use'
    }
  ];

  const ellipticalTypes = [
    {
      name: 'Commercial',
      image: '/elliptical-commercial.jpg',
      description: 'Gym-grade durability',
      count: 2,
      icon: '🏢'
    },
    {
      name: 'Hybrid',
      image: '/elliptical-hybrid.jpg',
      description: 'Multi-functional',
      count: 1,
      icon: '⚡'
    },
    {
      name: 'Compact',
      image: '/elliptical-compact.jpg',
      description: 'Space saving',
      count: 2,
      icon: '📦'
    },
    {
      name: 'Incline',
      image: '/elliptical-incline.jpg',
      description: 'Adjustable intensity',
      count: 1,
      icon: '⛰️'
    },
    {
      name: 'Smart',
      image: '/elliptical-smart.jpg',
      description: 'Connected features',
      count: 1,
      icon: '📱'
    },
    {
      name: 'Foldable',
      image: '/elliptical-foldable.jpg',
      description: 'Easy storage',
      count: 1,
      icon: '🔄'
    }
  ];

  const filters = {
    type: ['Commercial', 'Hybrid', 'Compact', 'Incline', 'Smart', 'Foldable', 'Dual Action', 'Home'],
    priceRange: [
      'Under $500',
      '$500 - $1,000',
      '$1,000 - $1,500',
      '$1,500 - $2,000',
      'Above $2,000'
    ],
    brand: ['CardioMax', 'FusionFit', 'SpaceSaver', 'InclinePro', 'ConnectFit', 'ProGym', 'FlexTrain', 'TotalBody', 'HomeFit'],
    features: ['Power Incline', 'Touchscreen', 'Bluetooth', 'Heart Rate Monitor', 'Live Classes', 'Foldable', 'App Connectivity', 'Dual Action', 'Quiet Operation']
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
                <span className="text-white font-medium">Ellipticals</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Elliptical Trainers
              </h1>
              <p className="text-xl text-purple-100 max-w-2xl">
                Experience smooth, low-impact cardio workouts with our premium elliptical collection. 
                Perfect for full-body training with minimal joint stress.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="text-6xl">👟</div>
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
                <Activity className="w-5 h-5 text-purple-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">24"</span>
              </div>
              <p className="text-sm text-gray-600">Max Stride Length</p>
            </div>
            <div>
              <div className="flex items-center justify-center">
                <Shield className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">450 lbs</span>
              </div>
              <p className="text-sm text-gray-600">Max Capacity</p>
            </div>
            <div>
              <div className="flex items-center justify-center">
                <Volume2 className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">20+</span>
              </div>
              <p className="text-sm text-gray-600">Resistance Levels</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">5Y</div>
              <p className="text-sm text-gray-600">Frame Warranty</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Navigation */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Elliptical Types</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {ellipticalTypes.map((category, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-200 group border border-gray-200 cursor-pointer"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-indigo-200 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:from-purple-200 group-hover:to-indigo-300 transition-all duration-200">
                  <div className="text-xl">{category.icon}</div>
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-200">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{category.description}</p>
                <span className="inline-block mt-2 text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
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
                Elliptical Trainers Collection
              </h2>
              <p className="text-gray-600">
                {ellipticalProducts.length} premium elliptical machines for low-impact full-body workouts
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
                <option value="stride">Longest Stride</option>
                <option value="capacity">Highest Capacity</option>
                <option value="resistance">Most Resistance Levels</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-72 flex-shrink-0">
              <div className="bg-gray-50 rounded-lg p-6 sticky top-4 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Filter Ellipticals
                </h3>

                {/* Elliptical Type Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Elliptical Type</h4>
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

                {/* Performance Filters */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Performance</h4>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Long Stride (20+ inches)</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">High Capacity (300+ lbs)</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Power Incline</span>
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
                  {ellipticalProducts.map((product) => (
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
                        <div className="text-5xl">👟</div>
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
                        
                        {/* Key Specifications */}
                        <div className="grid grid-cols-2 gap-2 mb-3">
                          <div className="text-xs text-gray-500">
                            <strong>Stride:</strong> {product.specifications.stride}
                          </div>
                          <div className="text-xs text-gray-500">
                            <strong>Resistance:</strong> {product.specifications.resistance}
                          </div>
                          <div className="text-xs text-gray-500">
                            <strong>Programs:</strong> {product.specifications.programs}
                          </div>
                          <div className="text-xs text-gray-500">
                            <strong>Capacity:</strong> {product.specifications.weightCapacity}
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
                  {ellipticalProducts.map((product) => (
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
                        <div className="text-4xl">👟</div>
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
                                <div className="font-medium text-gray-500">Stride Length</div>
                                <div className="text-gray-900">{product.specifications.stride}</div>
                              </div>
                              <div className="text-sm">
                                <div className="font-medium text-gray-500">Resistance</div>
                                <div className="text-gray-900">{product.specifications.resistance}</div>
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
                          <span className="text-sm text-gray-600 ml-6">Drive: {product.ellipticalType}</span>
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
              Why Choose Our Elliptical Trainers?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience superior low-impact cardio, full-body workouts, and advanced features with our elliptical collection
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Low Impact</h3>
              <p className="text-gray-600 text-sm">
                Smooth elliptical motion reduces stress on joints while providing effective cardio
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Full Body Workout</h3>
              <p className="text-gray-600 text-sm">
                Engage both upper and lower body muscles with moving handlebars
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Volume2 className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quiet Operation</h3>
              <p className="text-gray-600 text-sm">
                Magnetic resistance systems provide nearly silent workouts perfect for home use
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Durable Construction</h3>
              <p className="text-gray-600 text-sm">
                Commercial-grade frames with weight capacities up to 450 lbs for long-lasting use
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}