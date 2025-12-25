// app/gym-equipment/strength-training/machines/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, Star, Heart, Filter, Grid, List } from 'lucide-react';

export default function MachinesPage() {
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    type: [],
    priceRange: [],
    brand: []
  });

  const machineProducts = [
    {
      id: 1,
      name: 'Commercial Smith Machine',
      price: '$1,899.99',
      originalPrice: '$2,299.99',
      image: '/commercial-smith-machine.jpg',
      rating: 4.8,
      reviews: 124,
      category: 'Smith Machines',
      brand: 'GymPro',
      description: 'Professional smith machine with guided barbell system',
      features: ['300lb weight capacity', '7ft Olympic bar', 'Safety stops', 'Laser alignment'],
      isNew: true,
      isBestseller: true,
      inStock: true,
      weightCapacity: '300 lbs',
      dimensions: '84" H x 72" W x 96" L',
      weightStack: 'Not Applicable',
      warranty: '5 Years'
    },
    {
      id: 2,
      name: 'Functional Trainer Cable Machine',
      price: '$2,499.99',
      originalPrice: '$2,999.99',
      image: '/functional-trainer.jpg',
      rating: 4.9,
      reviews: 89,
      category: 'Cable Machines',
      brand: 'ProFit',
      description: 'Dual pulley system for complete functional training',
      features: ['Dual 200lb weight stacks', 'Independent pulleys', '15 attachments included'],
      isNew: true,
      isBestseller: false,
      inStock: true,
      weightCapacity: '400 lbs',
      dimensions: '83" H x 56" W x 80" L',
      weightStack: '200 lbs x 2',
      warranty: 'Lifetime'
    },
    {
      id: 3,
      name: 'Leg Press & Hack Squat Combo',
      price: '$2,799.99',
      originalPrice: '$3,299.99',
      image: '/leg-press-hack-squat.jpg',
      rating: 4.7,
      reviews: 67,
      category: 'Leg Machines',
      brand: 'IronMaster',
      description: 'Commercial leg press and hack squat combination machine',
      features: ['1000lb capacity', 'Sled system', 'Comfortable back pad'],
      isNew: false,
      isBestseller: true,
      inStock: true,
      weightCapacity: '1000 lbs',
      dimensions: '65" H x 55" W x 90" L',
      weightStack: 'Plate Loaded',
      warranty: '10 Years'
    },
    {
      id: 4,
      name: 'Lat Pulldown & Low Row Machine',
      price: '$1,299.99',
      originalPrice: '$1,599.99',
      image: '/lat-pulldown-machine.jpg',
      rating: 4.6,
      reviews: 156,
      category: 'Cable Machines',
      brand: 'PowerFlex',
      description: 'Dual function lat pulldown and seated row station',
      features: ['210lb weight stack', 'Adjustable seat', 'Multiple grip options'],
      isNew: false,
      isBestseller: true,
      inStock: true,
      weightCapacity: '300 lbs',
      dimensions: '84" H x 48" W x 70" L',
      weightStack: '210 lbs',
      warranty: '7 Years'
    },
    {
      id: 5,
      name: 'Pec Deck & Rear Delt Machine',
      price: '$899.99',
      originalPrice: null,
      image: '/pec-deck-machine.jpg',
      rating: 4.4,
      reviews: 78,
      category: 'Isolation Machines',
      brand: 'ProFit',
      description: 'Butterfly machine for chest and rear delt development',
      features: ['Adjustable arms', 'Padded seats', 'Counter-balanced movement'],
      isNew: true,
      isBestseller: false,
      inStock: true,
      weightCapacity: '250 lbs',
      dimensions: '52" H x 48" W x 60" L',
      weightStack: 'Plate Loaded',
      warranty: '5 Years'
    },
    {
      id: 6,
      name: 'Leg Extension & Curl Machine',
      price: '$1,199.99',
      originalPrice: '$1,499.99',
      image: '/leg-extension-curl.jpg',
      rating: 4.5,
      reviews: 92,
      category: 'Leg Machines',
      brand: 'GymPro',
      description: 'Dual station for leg extensions and lying leg curls',
      features: ['Quick change seats', 'Adjustable pad positions', 'Smooth bearing system'],
      isNew: false,
      isBestseller: false,
      inStock: false,
      weightCapacity: '350 lbs',
      dimensions: '50" H x 48" W x 72" L',
      weightStack: 'Plate Loaded',
      warranty: '5 Years'
    },
    {
      id: 7,
      name: 'Multi-Station Home Gym',
      price: '$3,299.99',
      originalPrice: '$3,899.99',
      image: '/multi-station-gym.jpg',
      rating: 4.8,
      reviews: 203,
      category: 'Multi-Station',
      brand: 'IronMaster',
      description: 'Complete 10-station home gym for full-body workouts',
      features: ['10 workout stations', '200lb weight stack', 'Lat tower', 'Leg developer'],
      isNew: false,
      isBestseller: true,
      inStock: true,
      weightCapacity: '400 lbs',
      dimensions: '84" H x 96" W x 78" L',
      weightStack: '200 lbs',
      warranty: 'Lifetime'
    },
    {
      id: 8,
      name: 'Cable Crossover Machine',
      price: '$1,899.99',
      originalPrice: '$2,299.99',
      image: '/cable-crossover.jpg',
      rating: 4.7,
      reviews: 45,
      category: 'Cable Machines',
      brand: 'PowerFlex',
      description: 'Commercial cable crossover with dual weight stacks',
      features: ['Dual 180lb stacks', 'High-low pulleys', 'Smooth ball bearing system'],
      isNew: true,
      isBestseller: false,
      inStock: true,
      weightCapacity: '300 lbs',
      dimensions: '90" H x 96" W x 48" L',
      weightStack: '180 lbs x 2',
      warranty: '10 Years'
    },
    {
      id: 9,
      name: 'Adjustable Decline Bench Press',
      price: '$1,499.99',
      originalPrice: '$1,799.99',
      image: '/decline-bench-press.jpg',
      rating: 4.3,
      reviews: 34,
      category: 'Press Machines',
      brand: 'GymPro',
      description: 'Plate-loaded decline press for lower chest development',
      features: ['Adjustable decline angle', 'Olympic sleeve compatible', 'Safety catches'],
      isNew: false,
      isBestseller: false,
      inStock: true,
      weightCapacity: '500 lbs',
      dimensions: '60" H x 48" W x 72" L',
      weightStack: 'Plate Loaded',
      warranty: '7 Years'
    },
    {
      id: 10,
      name: 'Hammer Strength Shoulder Press',
      price: '$1,699.99',
      originalPrice: '$1,999.99',
      image: '/shoulder-press-machine.jpg',
      rating: 4.6,
      reviews: 67,
      category: 'Press Machines',
      brand: 'ProFit',
      description: 'Plate-loaded shoulder press with ergonomic design',
      features: ['Linear bearing system', 'Adjustable seat', 'Counter-balanced movement'],
      isNew: true,
      isBestseller: false,
      inStock: true,
      weightCapacity: '400 lbs',
      dimensions: '72" H x 48" W x 60" L',
      weightStack: 'Plate Loaded',
      warranty: 'Lifetime'
    }
  ];

  const machineTypes = [
    {
      name: 'Smith Machines',
      image: '/smith-machines.jpg',
      description: 'Guided barbell systems',
      count: 8,
      slug: 'smith-machines'
    },
    {
      name: 'Cable Machines',
      image: '/cable-machines.jpg',
      description: 'Pulley systems & functional trainers',
      count: 12,
      slug: 'cable-machines'
    },
    {
      name: 'Leg Machines',
      image: '/leg-machines.jpg',
      description: 'Presses, extensions & curls',
      count: 15,
      slug: 'leg-machines'
    },
    {
      name: 'Press Machines',
      image: '/press-machines.jpg',
      description: 'Chest & shoulder presses',
      count: 9,
      slug: 'press-machines'
    },
    {
      name: 'Isolation Machines',
      image: '/isolation-machines.jpg',
      description: 'Single muscle group focus',
      count: 11,
      slug: 'isolation-machines'
    },
    {
      name: 'Multi-Station',
      image: '/multi-station.jpg',
      description: 'All-in-one gym systems',
      count: 6,
      slug: 'multi-station'
    }
  ];

  const filters = {
    type: ['Smith Machines', 'Cable Machines', 'Leg Machines', 'Press Machines', 'Isolation Machines', 'Multi-Station', 'Plate Loaded', 'Weight Stack'],
    priceRange: [
      'Under $1,000',
      '$1,000 - $2,000',
      '$2,000 - $3,000',
      '$3,000 - $5,000',
      'Above $5,000'
    ],
    brand: ['ProFit', 'IronMaster', 'GymPro', 'PowerFlex', 'Hammer Strength', 'Cybex', 'Life Fitness'],
    weightStack: ['Plate Loaded', 'Weight Stack', 'Both'],
    capacity: ['Under 300 lbs', '300-500 lbs', '500-800 lbs', 'Above 800 lbs']
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
      <section className="bg-gradient-to-r from-gray-900 to-blue-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <nav className="flex items-center space-x-2 text-sm text-gray-300 mb-4">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <Link href="/gym-equipment" className="hover:text-white transition-colors">Gym Equipment</Link>
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <Link href="/gym-equipment/strength-training" className="hover:text-white transition-colors">Strength Training</Link>
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <span className="text-white font-medium">Machines</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Strength Machines
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl">
                Professional-grade strength machines for commercial and home use. 
                Experience smooth, guided movements and targeted muscle isolation.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="text-6xl">🏗️</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Navigation */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Machine Types</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {machineTypes.map((type, index) => (
              <Link
                key={index}
                href={`/gym-equipment/strength-training/machines/${type.slug}`}
                className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-200 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-cyan-200 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:from-blue-200 group-hover:to-cyan-300 transition-all duration-200">
                  <div className="text-xl">
                    {type.name === 'Smith Machines' ? '🔧' :
                     type.name === 'Cable Machines' ? '🎯' :
                     type.name === 'Leg Machines' ? '🦵' :
                     type.name === 'Press Machines' ? '💪' :
                     type.name === 'Isolation Machines' ? '🎯' : '⚡'}
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                  {type.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{type.description}</p>
                <span className="inline-block mt-2 text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                  {type.count} items
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
                All Strength Machines
              </h2>
              <p className="text-gray-600">
                Showing {machineProducts.length} products
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
                <option value="capacity">Weight Capacity</option>
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

                {/* Weight System Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Weight System</h4>
                  <div className="space-y-2">
                    {filters.weightStack.map((system) => (
                      <label key={system} className="flex items-center">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{system}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Weight Capacity Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Weight Capacity</h4>
                  <div className="space-y-2">
                    {filters.capacity.map((capacity) => (
                      <label key={capacity} className="flex items-center">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{capacity}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Features Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Features</h4>
                  <div className="space-y-2">
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
                      <span className="ml-2 text-sm text-gray-700">Weight Stack</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Plate Loaded</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Adjustable</span>
                    </label>
                  </div>
                </div>

                {/* Clear Filters */}
                <button
                  onClick={() => setSelectedFilters({ type: [], priceRange: [], brand: [] })}
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
                  {machineProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                    >
                      <div className="relative h-64 bg-gradient-to-br from-blue-50 to-cyan-100 flex items-center justify-center">
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
                        {!product.inStock && (
                          <span className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Out of Stock
                          </span>
                        )}
                        <div className="text-4xl">
                          {product.category === 'Smith Machines' ? '🔧' :
                           product.category === 'Cable Machines' ? '🎯' :
                           product.category === 'Leg Machines' ? '🦵' :
                           product.category === 'Press Machines' ? '💪' :
                           product.category === 'Isolation Machines' ? '🎯' : '⚡'}
                        </div>
                        <button className="absolute top-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <Heart className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-gray-900">{product.name}</h3>
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                            {product.category}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                        
                        {/* Specifications */}
                        <div className="mb-3 space-y-1">
                          <div className="flex items-center text-sm text-gray-600">
                            <span className="font-medium">Capacity:</span>
                            <span className="ml-2">{product.weightCapacity}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <span className="font-medium">Weight System:</span>
                            <span className="ml-2">{product.weightStack}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <span className="font-medium">Warranty:</span>
                            <span className="ml-2">{product.warranty}</span>
                          </div>
                        </div>

                        {/* Features */}
                        <div className="mb-3">
                          <div className="flex flex-wrap gap-1">
                            {product.features.map((feature, index) => (
                              <span key={index} className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded">
                                {feature}
                              </span>
                            ))}
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
                  {machineProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex"
                    >
                      <div className="w-48 relative bg-gradient-to-br from-blue-50 to-cyan-100 flex items-center justify-center">
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
                        <div className="text-4xl">
                          {product.category === 'Smith Machines' ? '🔧' :
                           product.category === 'Cable Machines' ? '🎯' :
                           product.category === 'Leg Machines' ? '🦵' :
                           product.category === 'Press Machines' ? '💪' :
                           product.category === 'Isolation Machines' ? '🎯' : '⚡'}
                        </div>
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                {product.category}
                              </span>
                              {!product.inStock && (
                                <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
                                  Out of Stock
                                </span>
                              )}
                            </div>
                            <p className="text-gray-600 mb-3">{product.description}</p>
                            
                            {/* Specifications */}
                            <div className="grid grid-cols-2 gap-4 mb-4">
                              <div>
                                <span className="text-sm font-medium text-gray-700">Weight Capacity:</span>
                                <span className="text-sm text-gray-600 ml-2">{product.weightCapacity}</span>
                              </div>
                              <div>
                                <span className="text-sm font-medium text-gray-700">Dimensions:</span>
                                <span className="text-sm text-gray-600 ml-2">{product.dimensions}</span>
                              </div>
                              <div>
                                <span className="text-sm font-medium text-gray-700">Weight System:</span>
                                <span className="text-sm text-gray-600 ml-2">{product.weightStack}</span>
                              </div>
                              <div>
                                <span className="text-sm font-medium text-gray-700">Warranty:</span>
                                <span className="text-sm text-gray-600 ml-2">{product.warranty}</span>
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Strength Machines?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional-grade equipment designed for safety, performance, and long-term durability
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">🏭</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Commercial Grade</h3>
              <p className="text-gray-600">
                Built to commercial standards with heavy-duty steel and industrial components
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">🛡️</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Safety First</h3>
              <p className="text-gray-600">
                Engineered with safety stops, secure locking mechanisms, and stable bases
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">⚡</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Smooth Operation</h3>
              <p className="text-gray-600">
                Precision bearings and quality pulleys ensure smooth, consistent movement
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}