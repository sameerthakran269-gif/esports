// app/gym-equipment/cardio-machines/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, Star, Heart, Filter, Grid, List, Zap, Battery, Volume2 } from 'lucide-react';

export default function CardioMachinesPage() {
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    type: [],
    priceRange: [],
    brand: [],
    features: []
  });

  const cardioProducts = [
    {
      id: 1,
      name: 'AirRunner Commercial Treadmill',
      price: '$2,499.99',
      originalPrice: '$2,999.99',
      image: '/treadmill.jpg',
      rating: 4.9,
      reviews: 89,
      category: 'Treadmills',
      brand: 'CardioMax',
      description: 'Commercial grade treadmill with advanced cushioning and incline',
      features: ['15% Incline', '12 mph Speed', 'Heart Rate Monitor', 'Bluetooth Speakers'],
      specifications: {
        motor: '4.0 HP',
        display: '10" Touchscreen',
        programs: '30 Built-in',
        weightCapacity: '400 lbs'
      },
      isNew: false,
      isBestseller: true,
      inStock: true,
      energyEfficient: true
    },
    {
      id: 2,
      name: 'Commercial Elliptical Trainer',
      price: '$1,299.99',
      originalPrice: '$1,599.99',
      image: '/elliptical.jpg',
      rating: 4.4,
      reviews: 94,
      category: 'Ellipticals',
      brand: 'CardioMax',
      description: 'Smooth and quiet elliptical trainer with dual-action arms',
      features: ['20 Resistance Levels', 'Dual Action Arms', 'Heart Rate Sensors', 'Tablet Holder'],
      specifications: {
        stride: '20-inch',
        display: '8" LCD',
        programs: '25 Built-in',
        weightCapacity: '350 lbs'
      },
      isNew: false,
      isBestseller: false,
      inStock: true,
      energyEfficient: true
    },
    {
      id: 3,
      name: 'Air Bike Exercise Bike',
      price: '$699.99',
      originalPrice: '$899.99',
      image: '/air-bike.jpg',
      rating: 4.7,
      reviews: 112,
      category: 'Exercise Bikes',
      brand: 'AeroBike',
      description: 'High-intensity air bike for full-body workouts',
      features: ['Fan Resistance', 'Full Body Workout', 'LCD Display', 'Adjustable Seat'],
      specifications: {
        resistance: 'Air',
        display: 'Basic LCD',
        programs: 'None',
        weightCapacity: '300 lbs'
      },
      isNew: true,
      isBestseller: false,
      inStock: true,
      energyEfficient: false
    },
    {
      id: 4,
      name: 'Magnetic Rowing Machine',
      price: '$899.99',
      originalPrice: '$1,099.99',
      image: '/rowing-machine.jpg',
      rating: 4.6,
      reviews: 78,
      category: 'Rowers',
      brand: 'RowPro',
      description: 'Smooth magnetic resistance rower with foldable design',
      features: ['16 Resistance Levels', 'Foldable Design', 'Heart Rate Monitor', 'App Connectivity'],
      specifications: {
        resistance: 'Magnetic',
        display: '5" LCD',
        programs: '12 Built-in',
        weightCapacity: '250 lbs'
      },
      isNew: false,
      isBestseller: true,
      inStock: true,
      energyEfficient: true
    },
    {
      id: 5,
      name: 'Stair Climber Stepper',
      price: '$1,599.99',
      originalPrice: '$1,899.99',
      image: '/stair-climber.jpg',
      rating: 4.5,
      reviews: 63,
      category: 'Climbers',
      brand: 'StepMaster',
      description: 'Commercial stair climber with independent step action',
      features: ['Independent Steps', 'Heart Rate Control', 'Programmable Workouts', 'Space Efficient'],
      specifications: {
        steps: 'Independent',
        display: '7" LCD',
        programs: '20 Built-in',
        weightCapacity: '350 lbs'
      },
      isNew: true,
      isBestseller: false,
      inStock: false,
      energyEfficient: false
    },
    {
      id: 6,
      name: 'Recumbent Exercise Bike',
      price: '$799.99',
      originalPrice: null,
      image: '/recumbent-bike.jpg',
      rating: 4.3,
      reviews: 145,
      category: 'Exercise Bikes',
      brand: 'ComfortRide',
      description: 'Comfortable recumbent bike with padded seat and back support',
      features: ['Padded Seat', 'Back Support', '24 Resistance Levels', 'Media Shelf'],
      specifications: {
        resistance: 'Magnetic',
        display: '8" LCD',
        programs: '29 Built-in',
        weightCapacity: '325 lbs'
      },
      isNew: false,
      isBestseller: false,
      inStock: true,
      energyEfficient: true
    },
    {
      id: 7,
      name: 'Vertical Climber Machine',
      price: '$499.99',
      originalPrice: '$649.99',
      image: '/vertical-climber.jpg',
      rating: 4.2,
      reviews: 87,
      category: 'Climbers',
      brand: 'TotalBody',
      description: 'Full-body vertical climbing machine for intense cardio',
      features: ['Full Body Workout', 'Compact Design', 'Digital Monitor', 'Adjustable Resistance'],
      specifications: {
        resistance: 'Hydraulic',
        display: 'Basic LCD',
        programs: 'None',
        weightCapacity: '280 lbs'
      },
      isNew: false,
      isBestseller: false,
      inStock: true,
      energyEfficient: false
    },
    {
      id: 8,
      name: 'Smart Spin Bike Pro',
      price: '$1,799.99',
      originalPrice: '$2,199.99',
      image: '/spin-bike.jpg',
      rating: 4.8,
      reviews: 156,
      category: 'Exercise Bikes',
      brand: 'CycleTech',
      description: 'Professional spin bike with interactive classes and metrics',
      features: ['Live Classes', 'Performance Metrics', 'Silent Operation', 'Adjustable Handlebars'],
      specifications: {
        resistance: 'Magnetic',
        display: '22" Touchscreen',
        programs: 'Unlimited Classes',
        weightCapacity: '330 lbs'
      },
      isNew: true,
      isBestseller: true,
      inStock: true,
      energyEfficient: true
    },
    {
      id: 9,
      name: 'Hybrid Elliptical Trainer',
      price: '$1,899.99',
      originalPrice: '$2,299.99',
      image: '/hybrid-elliptical.jpg',
      rating: 4.7,
      reviews: 92,
      category: 'Ellipticals',
      brand: 'FusionFit',
      description: '3-in-1 elliptical with cross-training capabilities',
      features: ['3-in-1 Design', 'Cross Training', 'Virtual Coaching', 'Bluetooth Audio'],
      specifications: {
        modes: 'Elliptical, Stepper, Bike',
        display: '12" Touchscreen',
        programs: '35 Built-in',
        weightCapacity: '375 lbs'
      },
      isNew: true,
      isBestseller: false,
      inStock: true,
      energyEfficient: true
    }
  ];

  const cardioCategories = [
    {
      name: 'Treadmills',
      image: '/treadmills.jpg',
      description: 'Running and walking machines',
      count: 8,
      icon: '🏃',
      slug: 'treadmills'
    },
    {
      name: 'Exercise Bikes',
      image: '/exercise-bikes.jpg',
      description: 'Upright and recumbent bikes',
      count: 12,
      icon: '🚴',
      slug: 'exercise-bikes'
    },
    {
      name: 'Ellipticals',
      image: '/ellipticals.jpg',
      description: 'Low-impact cross trainers',
      count: 6,
      icon: '👟',
      slug: 'ellipticals'
    },
    {
      name: 'Rowers',
      image: '/rowers.jpg',
      description: 'Rowing machines',
      count: 4,
      icon: '🚣',
      slug: 'rowers'
    },
    {
      name: 'Climbers',
      image: '/climbers.jpg',
      description: 'Stair and vertical climbers',
      count: 5,
      icon: '🧗',
      slug: 'climbers'
    },
    {
      name: 'Cross Trainers',
      image: '/cross-trainers.jpg',
      description: 'Multi-functional machines',
      count: 3,
      icon: '⚡',
      slug: 'cross-trainers'
    }
  ];

  const filters = {
    type: ['Treadmills', 'Exercise Bikes', 'Ellipticals', 'Rowers', 'Climbers', 'Cross Trainers'],
    priceRange: [
      'Under $500',
      '$500 - $1,000',
      '$1,000 - $2,000',
      '$2,000 - $3,000',
      'Above $3,000'
    ],
    brand: ['CardioMax', 'AeroBike', 'RowPro', 'StepMaster', 'ComfortRide', 'TotalBody', 'CycleTech', 'FusionFit'],
    features: ['Energy Efficient', 'Foldable', 'Touchscreen', 'Bluetooth', 'Heart Rate Monitor', 'App Connectivity', 'Live Classes']
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
      <section className="bg-gradient-to-r from-cyan-900 to-blue-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <nav className="flex items-center space-x-2 text-sm text-cyan-200 mb-4">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <Link href="/gym-equipment" className="hover:text-white transition-colors">Gym Equipment</Link>
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <span className="text-white font-medium">Cardio Machines</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Cardio Machines
              </h1>
              <p className="text-xl text-cyan-100 max-w-2xl">
                Boost your cardiovascular health with our premium selection of treadmills, 
                bikes, ellipticals, and more. Find the perfect machine for your fitness goals.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="text-6xl">🏃‍♂️</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-6 bg-gradient-to-r from-cyan-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="flex items-center justify-center">
                <Zap className="w-5 h-5 text-cyan-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">15+</span>
              </div>
              <p className="text-sm text-gray-600">Machine Types</p>
            </div>
            <div>
              <div className="flex items-center justify-center">
                <Battery className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">12</span>
              </div>
              <p className="text-sm text-gray-600">Energy Efficient</p>
            </div>
            <div>
              <div className="flex items-center justify-center">
                <Volume2 className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">25+</span>
              </div>
              <p className="text-sm text-gray-600">Quiet Operation</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">2Y</div>
              <p className="text-sm text-gray-600">Warranty Included</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Navigation */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Cardio Machine Types</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {cardioCategories.map((category, index) => (
              <Link
                key={index}
                href={`/gym-equipment/category/cardio-machines/features/${category.slug}`}
                className="bg-gray-50 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-200 group border border-gray-200"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:from-cyan-200 group-hover:to-blue-300 transition-all duration-200">
                  <div className="text-xl">{category.icon}</div>
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-cyan-600 transition-colors duration-200">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{category.description}</p>
                <span className="inline-block mt-2 text-xs bg-cyan-100 text-cyan-600 px-2 py-1 rounded-full">
                  {category.count} models
                </span>
              </Link>
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
                Cardio Machines Collection
              </h2>
              <p className="text-gray-600">
                {cardioProducts.length} premium cardio machines for home and commercial use
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
                  Filter Machines
                </h3>

                {/* Machine Type Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Machine Type</h4>
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
                          className="rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
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
                        className="rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Energy Efficient</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">In Stock</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {cardioProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100"
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
                          {product.category === 'Treadmills' ? '🏃' :
                           product.category === 'Exercise Bikes' ? '🚴' :
                           product.category === 'Ellipticals' ? '👟' :
                           product.category === 'Rowers' ? '🚣' :
                           product.category === 'Climbers' ? '🧗' : '⚡'}
                        </div>
                        <button className="absolute bottom-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <Heart className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-gray-900 text-lg">{product.name}</h3>
                          <span className="text-xs bg-cyan-100 text-cyan-600 px-2 py-1 rounded-full">
                            {product.category}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                        
                        {/* Specifications */}
                        <div className="grid grid-cols-2 gap-2 mb-3">
                          <div className="text-xs text-gray-500">
                            <strong>Motor:</strong> {product.specifications.motor}
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

                        {/* Features */}
                        <div className="mb-3">
                          <div className="flex flex-wrap gap-1">
                            {product.features.slice(0, 3).map((feature, index) => (
                              <span key={index} className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded">
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
                                ? 'bg-cyan-600 text-white hover:bg-cyan-700' 
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
                  {cardioProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex border border-gray-100"
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
                          {product.category === 'Treadmills' ? '🏃' :
                           product.category === 'Exercise Bikes' ? '🚴' :
                           product.category === 'Ellipticals' ? '👟' :
                           product.category === 'Rowers' ? '🚣' :
                           product.category === 'Climbers' ? '🧗' : '⚡'}
                        </div>
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                              <span className="text-xs bg-cyan-100 text-cyan-600 px-2 py-1 rounded-full">
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

                            {/* Features */}
                            <div className="mb-4">
                              <div className="flex flex-wrap gap-2">
                                {product.features.map((feature, index) => (
                                  <span key={index} className="text-sm bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
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
                                ? 'bg-cyan-600 text-white hover:bg-cyan-700' 
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
      <section className="py-16 bg-gradient-to-r from-cyan-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Cardio Machines?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience premium quality, advanced features, and unbeatable performance with our cardio equipment collection
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Energy Efficient</h3>
              <p className="text-gray-600 text-sm">
                Many models feature self-powered operation and low energy consumption
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Volume2 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quiet Operation</h3>
              <p className="text-gray-600 text-sm">
                Advanced noise reduction technology for peaceful home workouts
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Battery className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Technology</h3>
              <p className="text-gray-600 text-sm">
                Bluetooth connectivity, app integration, and virtual coaching
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">🏠</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Home Friendly</h3>
              <p className="text-gray-600 text-sm">
                Compact designs and foldable options for space-saving storage
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}