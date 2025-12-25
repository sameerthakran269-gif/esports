// app/gym-equipment/cardio-machines/exercise-bikes/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, Star, Heart, Filter, Grid, List, Zap, Battery, Volume2, Target, Clock, Activity } from 'lucide-react';

export default function ExerciseBikesPage() {
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    type: [],
    priceRange: [],
    brand: [],
    features: []
  });

  const exerciseBikeProducts = [
    {
      id: 1,
      name: 'Smart Spin Bike Pro',
      price: '$1,799.99',
      originalPrice: '$2,199.99',
      image: '/spin-bike-pro.jpg',
      rating: 4.8,
      reviews: 156,
      category: 'Spin Bike',
      brand: 'CycleTech',
      description: 'Professional spin bike with interactive classes and real-time metrics',
      features: ['Live Classes', 'Performance Metrics', 'Silent Operation', 'Adjustable Handlebars', 'Bluetooth'],
      specifications: {
        resistance: 'Magnetic',
        display: '22" Touchscreen',
        programs: 'Unlimited Classes',
        weightCapacity: '330 lbs',
        flywheel: '40 lbs',
        levels: '100 Digital'
      },
      isNew: true,
      isBestseller: true,
      inStock: true,
      energyEfficient: true,
      bikeType: 'Spin Bike',
      suitableFor: 'High Intensity'
    },
    {
      id: 2,
      name: 'Comfort Recumbent Bike',
      price: '$799.99',
      originalPrice: null,
      image: '/recumbent-bike-comfort.jpg',
      rating: 4.3,
      reviews: 145,
      category: 'Recumbent',
      brand: 'ComfortRide',
      description: 'Comfortable recumbent bike with padded seat and back support',
      features: ['Padded Seat', 'Back Support', '24 Resistance Levels', 'Media Shelf', 'Heart Rate Monitor'],
      specifications: {
        resistance: 'Magnetic',
        display: '8" LCD',
        programs: '29 Built-in',
        weightCapacity: '325 lbs',
        flywheel: '18 lbs',
        levels: '24 Levels'
      },
      isNew: false,
      isBestseller: false,
      inStock: true,
      energyEfficient: true,
      bikeType: 'Recumbent',
      suitableFor: 'Rehabilitation'
    },
    {
      id: 3,
      name: 'Air Bike Trainer',
      price: '$699.99',
      originalPrice: '$899.99',
      image: '/air-bike-trainer.jpg',
      rating: 4.7,
      reviews: 112,
      category: 'Air Bike',
      brand: 'AeroBike',
      description: 'High-intensity air bike for full-body workouts with wind resistance',
      features: ['Fan Resistance', 'Full Body Workout', 'LCD Display', 'Adjustable Seat', 'Arm Levers'],
      specifications: {
        resistance: 'Air',
        display: 'Basic LCD',
        programs: 'None',
        weightCapacity: '300 lbs',
        flywheel: 'N/A',
        levels: 'Variable Air'
      },
      isNew: false,
      isBestseller: false,
      inStock: true,
      energyEfficient: false,
      bikeType: 'Air Bike',
      suitableFor: 'CrossFit'
    },
    {
      id: 4,
      name: 'Upright Exercise Bike',
      price: '$499.99',
      originalPrice: '$649.99',
      image: '/upright-bike.jpg',
      rating: 4.5,
      reviews: 98,
      category: 'Upright',
      brand: 'FitRider',
      description: 'Classic upright bike with compact design for home fitness',
      features: ['Compact Design', '8 Resistance Levels', 'Pulse Sensors', 'Transport Wheels', 'Device Holder'],
      specifications: {
        resistance: 'Magnetic',
        display: '5" LCD',
        programs: '12 Built-in',
        weightCapacity: '250 lbs',
        flywheel: '15 lbs',
        levels: '8 Levels'
      },
      isNew: false,
      isBestseller: true,
      inStock: true,
      energyEfficient: true,
      bikeType: 'Upright',
      suitableFor: 'General Fitness'
    },
    {
      id: 5,
      name: 'Commercial Studio Bike',
      price: '$2,299.99',
      originalPrice: '$2,699.99',
      image: '/commercial-studio-bike.jpg',
      rating: 4.9,
      reviews: 87,
      category: 'Studio Bike',
      brand: 'ProCycle',
      description: 'Commercial-grade studio bike for fitness studios and serious athletes',
      features: ['Commercial Grade', 'Micro-adjust Resistance', 'Dual-sided Pedals', 'Water Bottle Holder', 'Stainless Steel'],
      specifications: {
        resistance: 'Felt Pad',
        display: 'Console Compatible',
        programs: 'None',
        weightCapacity: '350 lbs',
        flywheel: '44 lbs',
        levels: 'Infinite'
      },
      isNew: true,
      isBestseller: false,
      inStock: true,
      energyEfficient: false,
      bikeType: 'Studio Bike',
      suitableFor: 'Commercial Use'
    },
    {
      id: 6,
      name: 'Folding Exercise Bike',
      price: '$349.99',
      originalPrice: '$449.99',
      image: '/folding-bike.jpg',
      rating: 4.2,
      reviews: 203,
      category: 'Folding',
      brand: 'SpaceMax',
      description: 'Space-saving folding bike perfect for apartments and small spaces',
      features: ['Foldable Design', 'Quiet Operation', '8 Resistance Levels', 'Digital Monitor', 'Easy Storage'],
      specifications: {
        resistance: 'Magnetic',
        display: 'Basic LCD',
        programs: 'None',
        weightCapacity: '220 lbs',
        flywheel: '10 lbs',
        levels: '8 Levels'
      },
      isNew: false,
      isBestseller: true,
      inStock: true,
      energyEfficient: true,
      bikeType: 'Folding',
      suitableFor: 'Small Spaces'
    },
    {
      id: 7,
      name: 'Dual Action Exercise Bike',
      price: '$899.99',
      originalPrice: '$1,099.99',
      image: '/dual-action-bike.jpg',
      rating: 4.6,
      reviews: 76,
      category: 'Dual Action',
      brand: 'TotalBody',
      description: 'Upper and lower body workout bike with moving handlebars',
      features: ['Upper Body Workout', 'Sync Arms & Legs', '16 Resistance Levels', 'Heart Rate Monitor', 'Performance Tracking'],
      specifications: {
        resistance: 'Magnetic',
        display: '7" LCD',
        programs: '20 Built-in',
        weightCapacity: '280 lbs',
        flywheel: '22 lbs',
        levels: '16 Levels'
      },
      isNew: true,
      isBestseller: false,
      inStock: true,
      energyEfficient: true,
      bikeType: 'Dual Action',
      suitableFor: 'Full Body'
    },
    {
      id: 8,
      name: 'Premium Recumbent Bike',
      price: '$1,299.99',
      originalPrice: '$1,599.99',
      image: '/premium-recumbent.jpg',
      rating: 4.7,
      reviews: 134,
      category: 'Recumbent',
      brand: 'ComfortPlus',
      description: 'Advanced recumbent bike with premium features and enhanced comfort',
      features: ['Ergonomic Seat', 'Ventilated Back', '32 Resistance Levels', 'Bluetooth Speakers', 'Tablet Holder'],
      specifications: {
        resistance: 'Magnetic',
        display: '10" Touchscreen',
        programs: '35 Built-in',
        weightCapacity: '350 lbs',
        flywheel: '25 lbs',
        levels: '32 Levels'
      },
      isNew: false,
      isBestseller: true,
      inStock: true,
      energyEfficient: true,
      bikeType: 'Recumbent',
      suitableFor: 'Senior Fitness'
    },
    {
      id: 9,
      name: 'Smart Indoor Cycling Bike',
      price: '$1,599.99',
      originalPrice: '$1,899.99',
      image: '/smart-indoor-bike.jpg',
      rating: 4.8,
      reviews: 189,
      category: 'Smart Bike',
      brand: 'ConnectFit',
      description: 'Connected indoor bike with virtual rides and social features',
      features: ['Virtual Rides', 'Social Competition', 'Auto Resistance', 'Leaderboards', 'Multi-user Profiles'],
      specifications: {
        resistance: 'Magnetic',
        display: '19" Touchscreen',
        programs: 'Virtual Worlds',
        weightCapacity: '330 lbs',
        flywheel: '38 lbs',
        levels: 'Auto-adjust'
      },
      isNew: true,
      isBestseller: true,
      inStock: true,
      energyEfficient: true,
      bikeType: 'Smart Bike',
      suitableFor: 'Interactive Training'
    }
  ];

  const bikeTypes = [
    {
      name: 'Spin Bikes',
      image: '/spin-bikes.jpg',
      description: 'High-intensity cycling',
      count: 2,
      icon: '💨'
    },
    {
      name: 'Recumbent',
      image: '/recumbent-bikes.jpg',
      description: 'Comfortable seated position',
      count: 2,
      icon: '🪑'
    },
    {
      name: 'Upright',
      image: '/upright-bikes.jpg',
      description: 'Traditional cycling feel',
      count: 1,
      icon: '🚴'
    },
    {
      name: 'Air Bikes',
      image: '/air-bikes.jpg',
      description: 'Full-body workouts',
      count: 1,
      icon: '🌬️'
    },
    {
      name: 'Smart Bikes',
      image: '/smart-bikes.jpg',
      description: 'Connected features',
      count: 2,
      icon: '📱'
    },
    {
      name: 'Folding',
      image: '/folding-bikes.jpg',
      description: 'Space saving designs',
      count: 1,
      icon: '📦'
    }
  ];

  const filters = {
    type: ['Spin Bike', 'Recumbent', 'Upright', 'Air Bike', 'Studio Bike', 'Folding', 'Dual Action', 'Smart Bike'],
    priceRange: [
      'Under $500',
      '$500 - $1,000',
      '$1,000 - $1,500',
      '$1,500 - $2,000',
      'Above $2,000'
    ],
    brand: ['CycleTech', 'ComfortRide', 'AeroBike', 'FitRider', 'ProCycle', 'SpaceMax', 'TotalBody', 'ComfortPlus', 'ConnectFit'],
    features: ['Touchscreen', 'Bluetooth', 'Heart Rate Monitor', 'Live Classes', 'Foldable', 'App Connectivity', 'Virtual Training', 'Water Bottle Holder', 'Media Shelf']
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
      <section className="bg-gradient-to-r from-emerald-900 to-green-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <nav className="flex items-center space-x-2 text-sm text-emerald-200 mb-4">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <Link href="/gym-equipment" className="hover:text-white transition-colors">Gym Equipment</Link>
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <Link href="/gym-equipment/cardio-machines" className="hover:text-white transition-colors">Cardio Machines</Link>
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <span className="text-white font-medium">Exercise Bikes</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Exercise Bikes
              </h1>
              <p className="text-xl text-emerald-100 max-w-2xl">
                Cycle your way to fitness with our diverse range of exercise bikes. 
                From intense spin sessions to comfortable recumbent rides.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="text-6xl">🚴‍♂️</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-6 bg-gradient-to-r from-emerald-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="flex items-center justify-center">
                <Target className="w-5 h-5 text-emerald-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">100+</span>
              </div>
              <p className="text-sm text-gray-600">Resistance Levels</p>
            </div>
            <div>
              <div className="flex items-center justify-center">
                <Clock className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">44 lbs</span>
              </div>
              <p className="text-sm text-gray-600">Heaviest Flywheel</p>
            </div>
            <div>
              <div className="flex items-center justify-center">
                <Activity className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">350 lbs</span>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Exercise Bike Types</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {bikeTypes.map((category, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-200 group border border-gray-200 cursor-pointer"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:from-emerald-200 group-hover:to-green-300 transition-all duration-200">
                  <div className="text-xl">{category.icon}</div>
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors duration-200">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{category.description}</p>
                <span className="inline-block mt-2 text-xs bg-emerald-100 text-emerald-600 px-2 py-1 rounded-full">
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
                Exercise Bikes Collection
              </h2>
              <p className="text-gray-600">
                {exerciseBikeProducts.length} premium exercise bikes for every fitness level and goal
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
                <option value="resistance">Most Resistance Levels</option>
                <option value="capacity">Highest Capacity</option>
                <option value="flywheel">Heaviest Flywheel</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-72 flex-shrink-0">
              <div className="bg-gray-50 rounded-lg p-6 sticky top-4 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Filter Bikes
                </h3>

                {/* Bike Type Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Bike Type</h4>
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
                          className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
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
                        className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">High Resistance (20+ levels)</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Heavy Flywheel (30+ lbs)</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Commercial Grade</span>
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
                  {exerciseBikeProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100"
                    >
                      <div className="relative h-64 bg-gradient-to-br from-emerald-50 to-green-100 flex items-center justify-center">
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
                        <div className="text-5xl">🚴‍♂️</div>
                        <button className="absolute bottom-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <Heart className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-gray-900 text-lg">{product.name}</h3>
                          <span className="text-xs bg-emerald-100 text-emerald-600 px-2 py-1 rounded-full">
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
                            <strong>Levels:</strong> {product.specifications.levels}
                          </div>
                          <div className="text-xs text-gray-500">
                            <strong>Capacity:</strong> {product.specifications.weightCapacity}
                          </div>
                        </div>

                        {/* Features */}
                        <div className="mb-3">
                          <div className="flex flex-wrap gap-1">
                            {product.features.slice(0, 3).map((feature, index) => (
                              <span key={index} className="text-xs bg-green-50 text-green-600 px-2 py-1 rounded">
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
                                ? 'bg-emerald-600 text-white hover:bg-emerald-700' 
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
                  {exerciseBikeProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex border border-gray-100"
                    >
                      <div className="w-48 relative bg-gradient-to-br from-emerald-50 to-green-100 flex items-center justify-center">
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
                        <div className="text-4xl">🚴‍♂️</div>
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                              <span className="text-xs bg-emerald-100 text-emerald-600 px-2 py-1 rounded-full">
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
                                <div className="font-medium text-gray-500">Levels</div>
                                <div className="text-gray-900">{product.specifications.levels}</div>
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
                                  <span key={index} className="text-sm bg-green-50 text-green-600 px-3 py-1 rounded-full">
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
                          <span className="text-sm text-gray-600 ml-6">Type: {product.bikeType}</span>
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
                                ? 'bg-emerald-600 text-white hover:bg-emerald-700' 
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
      <section className="py-16 bg-gradient-to-r from-emerald-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Exercise Bikes?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience superior cycling performance, advanced technology, and unmatched comfort with our exercise bike collection
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Precision Resistance</h3>
              <p className="text-gray-600 text-sm">
                Smooth magnetic and air resistance systems with up to 100 digital levels
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Heavy Flywheels</h3>
              <p className="text-gray-600 text-sm">
                10-44 lb flywheels for smooth, consistent momentum and realistic road feel
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Connectivity</h3>
              <p className="text-gray-600 text-sm">
                Bluetooth, app integration, virtual classes, and performance tracking
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">🎯</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Diverse Options</h3>
              <p className="text-gray-600 text-sm">
                Spin, recumbent, upright, air bikes, and folding models for every need
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}