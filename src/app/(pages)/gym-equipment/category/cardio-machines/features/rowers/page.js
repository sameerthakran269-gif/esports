// app/gym-equipment/cardio-machines/rowers/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { 
  ChevronLeft, 
  Star, 
  Heart, 
  Filter, 
  Grid, 
  List, 
  Zap, 
  Battery, 
  Volume2, 
  Droplets, 
  Gauge, 
  Activity 
} from 'lucide-react';

export default function RowersPage() {
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    type: [],
    priceRange: [],
    brand: [],
    features: []
  });

  const rowerProducts = [
    {
      id: 1,
      name: 'Magnetic Rowing Machine',
      price: '$899.99',
      originalPrice: '$1,099.99',
      image: '/magnetic-rower.jpg',
      rating: 4.6,
      reviews: 78,
      category: 'Magnetic',
      brand: 'RowPro',
      description: 'Smooth magnetic resistance rower with foldable design and quiet operation',
      features: ['16 Resistance Levels', 'Foldable Design', 'Heart Rate Monitor', 'App Connectivity', 'Quiet Operation'],
      specifications: {
        resistance: 'Magnetic',
        display: '5" LCD',
        programs: '12 Built-in',
        weightCapacity: '250 lbs',
        flywheel: '8 lbs',
        levels: '16 Levels'
      },
      isNew: false,
      isBestseller: true,
      inStock: true,
      energyEfficient: true,
      rowerType: 'Magnetic',
      suitableFor: 'Home Use'
    },
    {
      id: 2,
      name: 'Water Rowing Machine',
      price: '$1,299.99',
      originalPrice: '$1,599.99',
      image: '/water-rower.jpg',
      rating: 4.8,
      reviews: 145,
      category: 'Water',
      brand: 'AquaRow',
      description: 'Authentic water resistance that mimics real rowing with soothing water sound',
      features: ['Water Resistance', 'Natural Motion', 'Wooden Construction', 'Self-regulating', 'Soothing Sound'],
      specifications: {
        resistance: 'Water',
        display: 'Smartphone App',
        programs: 'App Controlled',
        weightCapacity: '300 lbs',
        flywheel: 'Water Tank',
        levels: 'Self-regulating'
      },
      isNew: true,
      isBestseller: true,
      inStock: true,
      energyEfficient: false,
      rowerType: 'Water',
      suitableFor: 'Realistic Rowing'
    },
    {
      id: 3,
      name: 'Air Rowing Machine',
      price: '$1,099.99',
      originalPrice: '$1,299.99',
      image: '/air-rower.jpg',
      rating: 4.7,
      reviews: 203,
      category: 'Air',
      brand: 'Concept2',
      description: 'Commercial-grade air rower used by athletes and fitness centers worldwide',
      features: ['Air Resistance', 'Performance Monitor', 'Commercial Grade', 'Durable Construction', 'Accurate Metrics'],
      specifications: {
        resistance: 'Air',
        display: 'Performance Monitor 5',
        programs: 'Customizable',
        weightCapacity: '500 lbs',
        flywheel: 'Air',
        levels: 'Variable Air'
      },
      isNew: false,
      isBestseller: false,
      inStock: true,
      energyEfficient: false,
      rowerType: 'Air',
      suitableFor: 'Commercial & Home'
    },
    {
      id: 4,
      name: 'Hydraulic Rowing Machine',
      price: '$499.99',
      originalPrice: '$649.99',
      image: '/hydraulic-rower.jpg',
      rating: 4.2,
      reviews: 189,
      category: 'Hydraulic',
      brand: 'BudgetRow',
      description: 'Compact and affordable hydraulic rower perfect for beginners and small spaces',
      features: ['Compact Design', 'Hydraulic Pistons', 'Foldable', 'Basic Monitor', 'Affordable'],
      specifications: {
        resistance: 'Hydraulic',
        display: 'Basic LCD',
        programs: 'None',
        weightCapacity: '220 lbs',
        flywheel: 'N/A',
        levels: 'Adjustable Pistons'
      },
      isNew: false,
      isBestseller: true,
      inStock: true,
      energyEfficient: true,
      rowerType: 'Hydraulic',
      suitableFor: 'Beginners'
    },
    {
      id: 5,
      name: 'Smart Connected Rower',
      price: '$2,199.99',
      originalPrice: '$2,599.99',
      image: '/smart-rower.jpg',
      rating: 4.9,
      reviews: 96,
      category: 'Smart',
      brand: 'NordicTrack',
      description: 'Interactive smart rower with live coaching and virtual rowing experiences',
      features: ['Live Coaching', 'Virtual Rowing', 'Auto Resistance', '22" Touchscreen', 'iFit Compatibility'],
      specifications: {
        resistance: 'Magnetic',
        display: '22" Touchscreen',
        programs: 'Unlimited iFit',
        weightCapacity: '350 lbs',
        flywheel: '15 lbs',
        levels: '26 Digital'
      },
      isNew: true,
      isBestseller: false,
      inStock: true,
      energyEfficient: true,
      rowerType: 'Smart',
      suitableFor: 'Interactive Training'
    },
    {
      id: 6,
      name: 'Commercial Air Rower',
      price: '$1,499.99',
      originalPrice: '$1,799.99',
      image: '/commercial-air-rower.jpg',
      rating: 4.8,
      reviews: 67,
      category: 'Commercial',
      brand: 'ProRow',
      description: 'Heavy-duty commercial air rower built for gyms and training facilities',
      features: ['Commercial Build', 'High Weight Capacity', 'Performance Tracking', 'Durable Frame', 'Easy Maintenance'],
      specifications: {
        resistance: 'Air',
        display: 'Advanced PM5',
        programs: 'Custom Workouts',
        weightCapacity: '550 lbs',
        flywheel: 'Commercial Air',
        levels: 'Variable'
      },
      isNew: false,
      isBestseller: false,
      inStock: true,
      energyEfficient: false,
      rowerType: 'Air',
      suitableFor: 'Commercial Gyms'
    },
    {
      id: 7,
      name: 'Foldable Magnetic Rower',
      price: '$699.99',
      originalPrice: '$899.99',
      image: '/foldable-rower.jpg',
      rating: 4.5,
      reviews: 234,
      category: 'Foldable',
      brand: 'SpaceSaver',
      description: 'Space-efficient foldable rower with magnetic resistance for apartment living',
      features: ['Vertical Storage', 'Magnetic Resistance', 'Quiet Operation', 'Transport Wheels', 'Compact Design'],
      specifications: {
        resistance: 'Magnetic',
        display: 'LED Console',
        programs: '8 Built-in',
        weightCapacity: '240 lbs',
        flywheel: '6 lbs',
        levels: '12 Levels'
      },
      isNew: true,
      isBestseller: true,
      inStock: true,
      energyEfficient: true,
      rowerType: 'Magnetic',
      suitableFor: 'Small Spaces'
    },
    {
      id: 8,
      name: 'Premium Water Rower',
      price: '$1,799.99',
      originalPrice: '$2,099.99',
      image: '/premium-water-rower.jpg',
      rating: 4.7,
      reviews: 89,
      category: 'Water',
      brand: 'WaterRower',
      description: 'Premium wooden water rower with natural oak finish and superior craftsmanship',
      features: ['Solid Oak Construction', 'Water Resistance', 'Silent Operation', 'Natural Motion', 'Lifetime Warranty'],
      specifications: {
        resistance: 'Water',
        display: 'S4 Monitor',
        programs: 'Basic Metrics',
        weightCapacity: '350 lbs',
        flywheel: 'Water Tank',
        levels: 'Self-regulating'
      },
      isNew: false,
      isBestseller: false,
      inStock: false,
      energyEfficient: false,
      rowerType: 'Water',
      suitableFor: 'Premium Home'
    },
    {
      id: 9,
      name: 'Hybrid Resistance Rower',
      price: '$1,599.99',
      originalPrice: '$1,899.99',
      image: '/hybrid-rower.jpg',
      rating: 4.6,
      reviews: 112,
      category: 'Hybrid',
      brand: 'MultiRow',
      description: 'Dual resistance system combining magnetic and air resistance for versatile workouts',
      features: ['Dual Resistance', 'Customizable Workouts', 'Bluetooth Connectivity', 'Ergonomic Seat', 'Multi-grip Handle'],
      specifications: {
        resistance: 'Magnetic + Air',
        display: '10" Touchscreen',
        programs: '30 Built-in',
        weightCapacity: '325 lbs',
        flywheel: '12 lbs',
        levels: '24 Levels'
      },
      isNew: true,
      isBestseller: true,
      inStock: true,
      energyEfficient: true,
      rowerType: 'Hybrid',
      suitableFor: 'Versatile Training'
    }
  ];

  const rowerTypes = [
    {
      name: 'Magnetic',
      image: '/magnetic-rowers.jpg',
      description: 'Smooth and quiet',
      count: 3,
      icon: '🧲'
    },
    {
      name: 'Water',
      image: '/water-rowers.jpg',
      description: 'Authentic feel',
      count: 2,
      icon: '💧'
    },
    {
      name: 'Air',
      image: '/air-rowers.jpg',
      description: 'High intensity',
      count: 2,
      icon: '💨'
    },
    {
      name: 'Smart',
      image: '/smart-rowers.jpg',
      description: 'Connected features',
      count: 1,
      icon: '📱'
    },
    {
      name: 'Foldable',
      image: '/foldable-rowers.jpg',
      description: 'Space saving',
      count: 1,
      icon: '📦'
    },
    {
      name: 'Hydraulic',
      image: '/hydraulic-rowers.jpg',
      description: 'Budget friendly',
      count: 1,
      icon: '⚙️'
    }
  ];

  const filters = {
    type: ['Magnetic', 'Water', 'Air', 'Hydraulic', 'Smart', 'Foldable', 'Hybrid', 'Commercial'],
    priceRange: [
      'Under $500',
      '$500 - $1,000',
      '$1,000 - $1,500',
      '$1,500 - $2,000',
      'Above $2,000'
    ],
    brand: ['RowPro', 'AquaRow', 'Concept2', 'BudgetRow', 'NordicTrack', 'ProRow', 'SpaceSaver', 'WaterRower', 'MultiRow'],
    features: ['Foldable', 'Touchscreen', 'Bluetooth', 'Heart Rate Monitor', 'Live Classes', 'App Connectivity', 'Water Resistance', 'Commercial Grade', 'Quiet Operation']
  };

  const toggleFilter = (filterType, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter((item) => item !== value)
        : [...prev[filterType], value]
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-teal-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <nav className="flex items-center space-x-2 text-sm text-blue-200 mb-4">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <Link href="/gym-equipment" className="hover:text-white transition-colors">Gym Equipment</Link>
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <Link href="/gym-equipment/cardio-machines" className="hover:text-white transition-colors">Cardio Machines</Link>
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <span className="text-white font-medium">Rowers</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Rowing Machines
              </h1>
              <p className="text-xl text-blue-100 max-w-2xl">
                Experience the ultimate full-body workout with our premium rowing machines. 
                Perfect for cardio, strength, and endurance training in one smooth motion.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="text-6xl">🚣‍♂️</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-6 bg-gradient-to-r from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="flex items-center justify-center">
                <Droplets className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">4</span>
              </div>
              <p className="text-sm text-gray-600">Resistance Types</p>
            </div>
            <div>
              <div className="flex items-center justify-center">
                <Gauge className="w-5 h-5 text-teal-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">550 lbs</span>
              </div>
              <p className="text-sm text-gray-600">Max Capacity</p>
            </div>
            <div>
              <div className="flex items-center justify-center">
                <Activity className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">85%</span>
              </div>
              <p className="text-sm text-gray-600">Muscle Engagement</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">5Y</div>
              <p className="text-sm text-gray-600">Warranty</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Navigation */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Rowing Machine Types</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {rowerTypes.map((category, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-200 group border border-gray-200 cursor-pointer"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-teal-200 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:from-blue-200 group-hover:to-teal-300 transition-all duration-200">
                  <div className="text-xl">{category.icon}</div>
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{category.description}</p>
                <span className="inline-block mt-2 text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
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
                Rowing Machines Collection
              </h2>
              <p className="text-gray-600">
                {rowerProducts.length} premium rowing machines for full-body workouts and cardiovascular health
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
                <option value="capacity">Highest Capacity</option>
                <option value="resistance">Most Resistance Levels</option>
                <option value="water">Water Resistance</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-72 flex-shrink-0">
              <div className="bg-gray-50 rounded-lg p-6 sticky top-4 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Filter Rowers
                </h3>

                {/* Rower Type Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Rower Type</h4>
                  <div className="space-y-2">
                    {filters.type.map((type) => (
                      <label key={type} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.type.includes(type)}
                          onChange={() => toggleFilter('type', type)}
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
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
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
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">High Capacity (300+ lbs)</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Commercial Grade</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Foldable Design</span>
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
                  {rowerProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100"
                    >
                      <div className="relative h-64 bg-gradient-to-br from-blue-50 to-teal-100 flex items-center justify-center">
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
                        <div className="text-5xl">🚣‍♂️</div>
                        <button className="absolute bottom-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <Heart className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-gray-900 text-lg">{product.name}</h3>
                          <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                            {product.category}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                        
                        {/* Key Specifications */}
                        <div className="grid grid-cols-2 gap-2 mb-3">
                          <div className="text-xs text-gray-500">
                            <strong>Resistance:</strong> {product.specifications.resistance}
                          </div>
                          <div className="text-xs text-gray-500">
                            <strong>Flywheel:</strong> {product.specifications.flywheel}
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
                              <span key={index} className="text-xs bg-teal-50 text-teal-600 px-2 py-1 rounded">
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
                                ? 'bg-blue-600 text-white hover:bg-blue-700' 
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
                  {rowerProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex border border-gray-100"
                    >
                      <div className="w-48 relative bg-gradient-to-br from-blue-50 to-teal-100 flex items-center justify-center">
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
                        <div className="text-4xl">🚣‍♂️</div>
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                              <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
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
                                <div className="font-medium text-gray-500">Resistance</div>
                                <div className="text-gray-900">{product.specifications.resistance}</div>
                              </div>
                              <div className="text-sm">
                                <div className="font-medium text-gray-500">Flywheel</div>
                                <div className="text-gray-900">{product.specifications.flywheel}</div>
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
                                  <span key={index} className="text-sm bg-teal-50 text-teal-600 px-3 py-1 rounded-full">
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
                          <span className="text-sm text-gray-600 ml-6">Type: {product.rowerType}</span>
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
                                ? 'bg-blue-600 text-white hover:bg-blue-700' 
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
      <section className="py-16 bg-gradient-to-r from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Rowing Machines?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the most efficient full-body workout with our premium rowing machine collection
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Full Body Workout</h3>
              <p className="text-gray-600 text-sm">
                Engage 85% of your muscles in one smooth, coordinated motion for maximum efficiency
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Multiple Resistance Types</h3>
              <p className="text-gray-600 text-sm">
                Choose from magnetic, water, air, and hydraulic resistance systems for your preferred feel
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Volume2 className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Low Impact</h3>
              <p className="text-gray-600 text-sm">
                Smooth rowing motion is gentle on joints while providing intense cardiovascular exercise
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">🚣‍♀️</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Space Efficient</h3>
              <p className="text-gray-600 text-sm">
                Many models feature foldable designs and vertical storage for compact home gyms
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}