// app/gym-equipment/functional-training/suspension-trainers/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, Star, Heart, Filter, Grid, List, Activity, Zap, Users, Target, Shield, Anchor, Clock, Package } from 'lucide-react';

export default function SuspensionTrainersPage() {
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    type: [],
    priceRange: [],
    brand: [],
    features: []
  });

  const suspensionTrainers = [
    {
      id: 1,
      name: 'TRX Pro System',
      price: '$199.99',
      originalPrice: '$249.99',
      image: '/trx-pro-system.jpg',
      rating: 4.8,
      reviews: 342,
      category: 'Professional',
      brand: 'TRX',
      description: 'Professional-grade suspension trainer with enhanced durability and performance',
      features: ['Heavy-duty Straps', 'Military-grade Materials', 'Multiple Anchors', 'Training Guide'],
      specifications: {
        weightLimit: '350lb',
        straps: 'Nylon Webbing',
        anchors: 'Door, Wall, Ceiling',
        length: '8.5ft Adjustable',
        material: 'Military-grade Nylon'
      },
      exercises: ['Atomic Push-ups', 'Bodyweight Rows', 'Pikes', 'Fallouts', 'Suspended Lunges'],
      isNew: false,
      isBestseller: true,
      inStock: true,
      versatile: true,
      professional: true,
      portable: true
    },
    {
      id: 2,
      name: 'Suspension Trainer Pro',
      price: '$149.99',
      originalPrice: '$189.99',
      image: '/suspension-pro.jpg',
      rating: 4.6,
      reviews: 278,
      category: 'Professional',
      brand: 'WodFit',
      description: 'Commercial-grade suspension trainer for intense functional training',
      features: ['Quick-adjust Straps', 'Foam Handles', 'Door Anchor', 'Exercise Cards'],
      specifications: {
        weightLimit: '400lb',
        straps: 'Polyester Webbing',
        anchors: 'Door, Beam, Tree',
        length: '9ft Adjustable',
        material: 'Commercial-grade Polyester'
      },
      exercises: ['TRX Rows', 'Chest Press', 'Hamstring Curls', 'Y-Deltoids', 'Atomic Crunches'],
      isNew: true,
      isBestseller: false,
      inStock: true,
      versatile: true,
      professional: true,
      portable: true
    },
    {
      id: 3,
      name: 'Travel Suspension Trainer',
      price: '$89.99',
      originalPrice: '$119.99',
      image: '/travel-trainer.jpg',
      rating: 4.4,
      reviews: 156,
      category: 'Travel',
      brand: 'FitGo',
      description: 'Ultra-light suspension trainer perfect for travel and outdoor workouts',
      features: ['Ultra Lightweight', 'Compact Design', 'Carry Bag', 'Multi-surface Anchor'],
      specifications: {
        weightLimit: '300lb',
        straps: 'Lightweight Nylon',
        anchors: 'Door, Tree, Pole',
        length: '7.5ft Adjustable',
        weight: '1.2lb'
      },
      exercises: ['Travel Rows', 'Portable Push-ups', 'Mountain Climbers', 'Core Exercises', 'Balance Training'],
      isNew: false,
      isBestseller: true,
      inStock: true,
      versatile: true,
      professional: false,
      portable: true
    },
    {
      id: 4,
      name: 'Dual Handle Suspension System',
      price: '$129.99',
      originalPrice: '$159.99',
      image: '/dual-handle-system.jpg',
      rating: 4.5,
      reviews: 194,
      category: 'Advanced',
      brand: 'ProGrip',
      description: 'Dual handle system for advanced training and rehabilitation exercises',
      features: ['Dual Handles', 'Ankle Straps', 'Rehab Exercises', 'Adjustable Lengths'],
      specifications: {
        weightLimit: '350lb',
        handles: '2 Ergonomic',
        straps: 'Ankle Cuffs Included',
        length: 'Dual 8ft Straps',
        material: 'Medical-grade Materials'
      },
      exercises: ['Bicep Curls', 'Tricep Extensions', 'Leg Curls', 'Hip Abductions', 'Rehab Movements'],
      isNew: false,
      isBestseller: false,
      inStock: true,
      versatile: true,
      professional: true,
      portable: false
    },
    {
      id: 5,
      name: 'Suspension Trainer Kit',
      price: '$179.99',
      originalPrice: '$229.99',
      image: '/trainer-kit.jpg',
      rating: 4.7,
      reviews: 223,
      category: 'Complete Kit',
      brand: 'TotalTrain',
      description: 'Complete suspension training kit with all accessories for full-body workouts',
      features: ['Complete Accessory Set', 'Door Anchor', 'Wall Mount', 'Training Program'],
      specifications: {
        weightLimit: '400lb',
        accessories: 'Full Kit',
        anchors: 'Door, Wall, Ceiling',
        length: '9ft Adjustable',
        includes: 'Straps, Handles, Anchor, Guide'
      },
      exercises: ['Full Body Workouts', 'Strength Training', 'Core Exercises', 'Flexibility Drills'],
      isNew: true,
      isBestseller: true,
      inStock: true,
      versatile: true,
      professional: true,
      portable: false
    },
    {
      id: 6,
      name: 'Basic Suspension Trainer',
      price: '$69.99',
      originalPrice: '$89.99',
      image: '/basic-trainer.jpg',
      rating: 4.3,
      reviews: 187,
      category: 'Beginner',
      brand: 'HomeFit',
      description: 'Entry-level suspension trainer perfect for home workouts and beginners',
      features: ['Easy Setup', 'Basic Exercises', 'Door Anchor', 'Beginner Guide'],
      specifications: {
        weightLimit: '250lb',
        straps: 'Standard Nylon',
        anchors: 'Door Only',
        length: '8ft Fixed',
        material: 'Durable Polyester'
      },
      exercises: ['Basic Rows', 'Push-ups', 'Core Work', 'Leg Exercises', 'Stretching'],
      isNew: false,
      isBestseller: false,
      inStock: true,
      versatile: false,
      professional: false,
      portable: true
    }
  ];

  const suspensionCategories = [
    {
      name: 'Professional Grade',
      image: '/pro-suspension.jpg',
      description: 'Commercial quality trainers',
      count: 4,
      icon: '🏆',
      slug: 'suspension-trainers/professional'
    },
    {
      name: 'Travel & Portable',
      image: '/travel-suspension.jpg',
      description: 'Lightweight for on-the-go',
      count: 3,
      icon: '✈️',
      slug: 'suspension-trainers/travel'
    },
    {
      name: 'Complete Kits',
      image: '/kit-suspension.jpg',
      description: 'Full accessory packages',
      count: 2,
      icon: '📦',
      slug: 'suspension-trainers/kits'
    },
    {
      name: 'Beginner Systems',
      image: '/beginner-suspension.jpg',
      description: 'Entry-level trainers',
      count: 3,
      icon: '👋',
      slug: 'suspension-trainers/beginner'
    },
    {
      name: 'Rehabilitation',
      image: '/rehab-suspension.jpg',
      description: 'Therapy and recovery',
      count: 2,
      icon: '💆',
      slug: 'suspension-trainers/rehabilitation'
    },
    {
      name: 'Advanced Training',
      image: '/advanced-suspension.jpg',
      description: 'Professional features',
      count: 3,
      icon: '⚡',
      slug: 'suspension-trainers/advanced'
    }
  ];

  const filters = {
    type: ['Professional', 'Travel', 'Complete Kit', 'Beginner', 'Advanced', 'Rehabilitation'],
    priceRange: [
      'Under $50',
      '$50 - $100',
      '$100 - $150',
      '$150 - $200',
      'Above $200'
    ],
    brand: ['TRX', 'WodFit', 'FitGo', 'ProGrip', 'TotalTrain', 'HomeFit'],
    features: ['Portable', 'Professional Grade', 'Complete Kit', 'Beginner Friendly', 'Travel Ready', 'Heavy-duty', 'Multiple Anchors']
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
      <section className="bg-gradient-to-r from-blue-800 to-indigo-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <nav className="flex items-center space-x-2 text-sm text-blue-200 mb-4">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <Link href="/gym-equipment" className="hover:text-white transition-colors">Gym Equipment</Link>
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <Link href="/gym-equipment/functional-training" className="hover:text-white transition-colors">Functional Training</Link>
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <span className="text-white font-medium">Suspension Trainers</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Suspension Trainers
              </h1>
              <p className="text-xl text-blue-100 max-w-2xl">
                Transform your body with bodyweight resistance training. Build strength, 
                improve stability, and enhance core conditioning anywhere, anytime.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="text-6xl">🔄</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-6 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="flex items-center justify-center">
                <Shield className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">400lb</span>
              </div>
              <p className="text-sm text-gray-600">Max Weight Capacity</p>
            </div>
            <div>
              <div className="flex items-center justify-center">
                <Anchor className="w-5 h-5 text-indigo-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">Multi-Surface</span>
              </div>
              <p className="text-sm text-gray-600">Anchor Options</p>
            </div>
            <div>
              <div className="flex items-center justify-center">
                <Clock className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">5 Min</span>
              </div>
              <p className="text-sm text-gray-600">Quick Setup</p>
            </div>
            <div>
              <div className="flex items-center justify-center">
                <Package className="w-5 h-5 text-purple-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">Portable</span>
              </div>
              <p className="text-sm text-gray-600">Travel Ready</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Navigation */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Suspension Trainer Types</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {suspensionCategories.map((category, index) => (
              <Link
                key={index}
                href={`/gym-equipment/${category.slug}`}
                className="bg-gray-50 rounded-lg p-3 text-center shadow-sm hover:shadow-md transition-shadow duration-200 group border border-gray-200"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:from-blue-200 group-hover:to-indigo-300 transition-all duration-200">
                  <div className="text-lg">{category.icon}</div>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm group-hover:text-blue-600 transition-colors duration-200">
                  {category.name}
                </h3>
                <p className="text-xs text-gray-500 mt-1">{category.description}</p>
                <span className="inline-block mt-2 text-xs bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded-full">
                  {category.count}
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
                Suspension Training Systems
              </h2>
              <p className="text-gray-600">
                {suspensionTrainers.length} professional suspension trainers for complete bodyweight workouts
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
                <option value="professional">Professional Grade</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-72 flex-shrink-0">
              <div className="bg-gray-50 rounded-lg p-6 sticky top-4 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Filter Trainers
                </h3>

                {/* Trainer Type Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Trainer Type</h4>
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

                {/* Additional Filters */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Training Level</h4>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Beginner Friendly</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Intermediate</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Advanced/Pro</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Rehabilitation</span>
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                  {suspensionTrainers.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100"
                    >
                      <div className="relative h-64 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
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
                        {product.professional && (
                          <span className="absolute top-3 right-3 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                            <Shield className="w-3 h-3 mr-1" />
                            Pro Grade
                          </span>
                        )}
                        {product.portable && (
                          <span className="absolute top-12 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                            <Package className="w-3 h-3 mr-1" />
                            Portable
                          </span>
                        )}
                        {!product.inStock && (
                          <span className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Out of Stock
                          </span>
                        )}
                        <div className="text-5xl">🔄</div>
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
                        
                        {/* Exercises */}
                        <div className="mb-3">
                          <div className="text-xs text-gray-500 mb-1">Sample Exercises:</div>
                          <div className="flex flex-wrap gap-1">
                            {product.exercises.slice(0, 3).map((exercise, index) => (
                              <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                {exercise}
                              </span>
                            ))}
                            {product.exercises.length > 3 && (
                              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                +{product.exercises.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Specifications */}
                        <div className="grid grid-cols-2 gap-2 mb-3 text-xs">
                          {Object.entries(product.specifications).slice(0, 4).map(([key, value], index) => (
                            <div key={index} className="text-gray-500">
                              <strong>{key}:</strong> {value}
                            </div>
                          ))}
                        </div>

                        {/* Features */}
                        <div className="mb-3">
                          <div className="flex flex-wrap gap-1">
                            {product.features.slice(0, 2).map((feature, index) => (
                              <span key={index} className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded">
                                {feature}
                              </span>
                            ))}
                            {product.features.length > 2 && (
                              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                +{product.features.length - 2} more
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
                  {suspensionTrainers.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex border border-gray-100"
                    >
                      <div className="w-48 relative bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
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
                        <div className="text-4xl">🔄</div>
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                              <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                                {product.category}
                              </span>
                              {product.professional && (
                                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full flex items-center">
                                  <Shield className="w-3 h-3 mr-1" />
                                  Pro Grade
                                </span>
                              )}
                              {product.portable && (
                                <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full flex items-center">
                                  <Package className="w-3 h-3 mr-1" />
                                  Portable
                                </span>
                              )}
                              {!product.inStock && (
                                <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
                                  Out of Stock
                                </span>
                              )}
                            </div>
                            <p className="text-gray-600 mb-3">{product.description}</p>
                            
                            {/* Exercises and Specifications */}
                            <div className="grid grid-cols-2 gap-4 mb-4">
                              <div>
                                <div className="font-medium text-gray-500 text-sm mb-1">Sample Exercises</div>
                                <div className="flex flex-wrap gap-1">
                                  {product.exercises.slice(0, 4).map((exercise, index) => (
                                    <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                      {exercise}
                                    </span>
                                  ))}
                                  {product.exercises.length > 4 && (
                                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                      +{product.exercises.length - 4} more
                                    </span>
                                  )}
                                </div>
                              </div>
                              <div>
                                <div className="font-medium text-gray-500 text-sm mb-1">Key Specifications</div>
                                <div className="text-sm text-gray-600 space-y-1">
                                  {Object.entries(product.specifications).slice(0, 3).map(([key, value], index) => (
                                    <div key={index}>
                                      <strong>{key}:</strong> {value}
                                    </div>
                                  ))}
                                </div>
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
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Suspension Training?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Leverage bodyweight resistance to build functional strength, improve core stability, and enhance overall fitness
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Full Body Workout</h3>
              <p className="text-gray-600 text-sm">
                Engage multiple muscle groups simultaneously for efficient total body conditioning
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Core Activation</h3>
              <p className="text-gray-600 text-sm">
                Every exercise engages your core muscles for improved stability and balance
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Portable Training</h3>
              <p className="text-gray-600 text-sm">
                Train anywhere - home, gym, hotel, or outdoors with lightweight portable systems
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Scalable Intensity</h3>
              <p className="text-gray-600 text-sm">
                Adjust difficulty by changing body angle - perfect for all fitness levels
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}