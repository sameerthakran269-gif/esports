// app/gym-equipment/functional-training/cages-racks/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, Star, Heart, Filter, Grid, List, Activity, Zap, Users, Target, Shield, Package, Settings, Dumbbell } from 'lucide-react';

export default function CagesRacksPage() {
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    type: [],
    priceRange: [],
    brand: [],
    features: []
  });

  const cagesRacks = [
    {
      id: 1,
      name: 'Pro Power Cage Rack',
      price: '$899.99',
      originalPrice: '$1,199.99',
      image: '/pro-power-cage.jpg',
      rating: 4.9,
      reviews: 267,
      category: 'Power Cage',
      brand: 'RackMaster',
      description: 'Commercial-grade power cage with multi-grip pull-up bar and safety system',
      features: ['Pull-up Bar', 'Safety Bars', 'J-Hooks', 'Landmine Attachment', 'Dip Bars'],
      specifications: {
        capacity: '1500lb',
        height: '84 inches',
        footprint: '48x48 inches',
        material: '3x3 11-gauge Steel',
        finish: 'Powder Coated'
      },
      exercises: ['Squats', 'Bench Press', 'Pull-ups', 'Rack Pulls', 'Dips', 'Landmine Exercises'],
      isNew: false,
      isBestseller: true,
      inStock: true,
      commercial: true,
      attachments: true
    },
    {
      id: 2,
      name: 'Half Power Rack',
      price: '$599.99',
      originalPrice: '$799.99',
      image: '/half-power-rack.jpg',
      rating: 4.7,
      reviews: 189,
      category: 'Half Rack',
      brand: 'PowerFrame',
      description: 'Space-efficient half rack with spotter arms and storage options',
      features: ['Spotter Arms', 'Plate Storage', 'Pull-up Bar', 'Adjustable J-Cups'],
      specifications: {
        capacity: '1000lb',
        height: '82 inches',
        footprint: '48x36 inches',
        material: '2x3 11-gauge Steel',
        storage: '6 Plate Pegs'
      },
      exercises: ['Squats', 'Overhead Press', 'Pull-ups', 'Rack Pulls', 'Deadlifts'],
      isNew: true,
      isBestseller: false,
      inStock: true,
      commercial: false,
      attachments: true
    },
    {
      id: 3,
      name: 'Wall-Mounted Squat Rack',
      price: '$349.99',
      originalPrice: '$449.99',
      image: '/wall-mounted-rack.jpg',
      rating: 4.5,
      reviews: 143,
      category: 'Wall Rack',
      brand: 'SpaceSaver',
      description: 'Space-saving wall-mounted rack perfect for home gyms and garages',
      features: ['Wall Mounted', 'Folding Design', 'Safety Arms', 'Adjustable Height'],
      specifications: {
        capacity: '800lb',
        height: 'Adjustable',
        footprint: 'Folds to 12 inches',
        material: '2x2 Steel',
        mounting: 'Wall Stud Required'
      },
      exercises: ['Squats', 'Bench Press', 'Overhead Press', 'Rack Pulls'],
      isNew: false,
      isBestseller: true,
      inStock: true,
      commercial: false,
      attachments: false
    },
    {
      id: 4,
      name: 'Commercial Power Rack',
      price: '$1,299.99',
      originalPrice: '$1,599.99',
      image: '/commercial-rack.jpg',
      rating: 4.8,
      reviews: 94,
      category: 'Commercial Cage',
      brand: 'GymPro',
      description: 'Heavy-duty commercial power rack for gyms and serious lifters',
      features: ['Laser Cut Numbering', 'Multi-grip Pull-up Bar', 'Weight Storage', 'Lat Pulldown'],
      specifications: {
        capacity: '2000lb',
        height: '92 inches',
        footprint: '52x52 inches',
        material: '3x3 7-gauge Steel',
        warranty: 'Commercial'
      },
      exercises: ['All Compound Lifts', 'Pull-ups', 'Lat Pulldowns', 'Cable Exercises'],
      isNew: true,
      isBestseller: false,
      inStock: true,
      commercial: true,
      attachments: true
    },
    {
      id: 5,
      name: 'Adjustable Squat Stands',
      price: '$249.99',
      originalPrice: '$329.99',
      image: '/squat-stands.jpg',
      rating: 4.4,
      reviews: 178,
      category: 'Squat Stands',
      brand: 'LiftRight',
      description: 'Pair of adjustable squat stands with spotter arms and base stability',
      features: ['Adjustable Height', 'Spotter Arms', 'Wide Base', 'Transport Wheels'],
      specifications: {
        capacity: '700lb',
        height: 'Adjustable 48-84"',
        base: '24x36 inches',
        material: '2x2 Steel',
        mobility: 'Transport Wheels'
      },
      exercises: ['Squats', 'Bench Press', 'Overhead Press', 'Rack Pulls'],
      isNew: false,
      isBestseller: false,
      inStock: true,
      commercial: false,
      attachments: false
    },
    {
      id: 6,
      name: 'Power Rack with Cable System',
      price: '$1,499.99',
      originalPrice: '$1,899.99',
      image: '/cable-rack.jpg',
      rating: 4.9,
      reviews: 112,
      category: 'Integrated System',
      brand: 'AllInOne',
      description: 'Complete training system with power rack and integrated cable machine',
      features: ['Integrated Cable', 'Weight Stack', 'Multiple Attachments', 'Pull-up Bar'],
      specifications: {
        capacity: '1600lb',
        cableWeight: '200lb Stack',
        height: '96 inches',
        footprint: '60x60 inches',
        attachments: 'Full Set Included'
      },
      exercises: ['All Cage Exercises', 'Cable Crossovers', 'Lat Pulldowns', 'Cable Rows'],
      isNew: true,
      isBestseller: true,
      inStock: true,
      commercial: true,
      attachments: true
    },
    {
      id: 7,
      name: 'Compact Power Rack',
      price: '$499.99',
      originalPrice: '$649.99',
      image: '/compact-rack.jpg',
      rating: 4.6,
      reviews: 156,
      category: 'Compact Cage',
      brand: 'HomeGym',
      description: 'Space-efficient power rack designed for home gyms with full functionality',
      features: ['Compact Design', 'Safety Bars', 'Pull-up Bar', 'Adjustable Height'],
      specifications: {
        capacity: '800lb',
        height: '80 inches',
        footprint: '42x42 inches',
        material: '2x2 11-gauge Steel',
        ceiling: 'Low Ceiling Friendly'
      },
      exercises: ['Squats', 'Bench Press', 'Pull-ups', 'Rack Pulls'],
      isNew: false,
      isBestseller: true,
      inStock: true,
      commercial: false,
      attachments: true
    },
    {
      id: 8,
      name: 'Weight Storage Rack',
      price: '$179.99',
      originalPrice: '$229.99',
      image: '/weight-rack.jpg',
      rating: 4.7,
      reviews: 234,
      category: 'Storage Rack',
      brand: 'PlateMaster',
      description: 'Heavy-duty weight plate and barbell storage rack for organized gym space',
      features: ['Plate Storage', 'Barbell Storage', 'Dumbbell Shelf', 'Wheel Kit'],
      specifications: {
        capacity: '1500lb',
        platePegs: '6 Adjustable',
        barbellHolders: '4 Positions',
        material: '2x2 Steel',
        mobility: 'Optional Wheels'
      },
      exercises: ['Storage Only', 'Organization', 'Space Management'],
      isNew: false,
      isBestseller: false,
      inStock: true,
      commercial: true,
      attachments: false
    }
  ];

  const cageCategories = [
    {
      name: 'Power Cages',
      image: '/power-cages.jpg',
      description: 'Full power cages',
      count: 6,
      icon: '🏗️',
      slug: 'cages-racks/power-cages'
    },
    {
      name: 'Half Racks',
      image: '/half-racks.jpg',
      description: 'Space-efficient racks',
      count: 4,
      icon: '⚡',
      slug: 'cages-racks/half-racks'
    },
    {
      name: 'Wall Mounted',
      image: '/wall-racks.jpg',
      description: 'Space saving designs',
      count: 3,
      icon: '📏',
      slug: 'cages-racks/wall-mounted'
    },
    {
      name: 'Squat Stands',
      image: '/squat-stands-cat.jpg',
      description: 'Adjustable stands',
      count: 5,
      icon: '🎯',
      slug: 'cages-racks/squat-stands'
    },
    {
      name: 'Commercial Grade',
      image: '/commercial-cages.jpg',
      description: 'Gym quality equipment',
      count: 4,
      icon: '🏢',
      slug: 'cages-racks/commercial'
    },
    {
      name: 'Storage Racks',
      image: '/storage-racks.jpg',
      description: 'Weight organization',
      count: 8,
      icon: '🗄️',
      slug: 'cages-racks/storage'
    },
    {
      name: 'Integrated Systems',
      image: '/integrated-racks.jpg',
      description: 'All-in-one solutions',
      count: 3,
      icon: '🔧',
      slug: 'cages-racks/integrated'
    },
    {
      name: 'Compact Racks',
      image: '/compact-cages.jpg',
      description: 'Small space solutions',
      count: 5,
      icon: '🏠',
      slug: 'cages-racks/compact'
    }
  ];

  const filters = {
    type: ['Power Cage', 'Half Rack', 'Wall Rack', 'Squat Stands', 'Commercial Cage', 'Storage Rack', 'Compact Cage', 'Integrated System'],
    priceRange: [
      'Under $300',
      '$300 - $600',
      '$600 - $1,000',
      '$1,000 - $1,500',
      'Above $1,500'
    ],
    brand: ['RackMaster', 'PowerFrame', 'SpaceSaver', 'GymPro', 'LiftRight', 'AllInOne', 'HomeGym', 'PlateMaster'],
    features: ['Commercial Grade', 'Space Saving', 'Weight Storage', 'Cable System', 'Folding Design', 'Wall Mounted', 'Transport Wheels', 'Multiple Attachments']
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
      <section className="bg-gradient-to-r from-gray-800 to-gray-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <nav className="flex items-center space-x-2 text-sm text-gray-300 mb-4">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <Link href="/gym-equipment" className="hover:text-white transition-colors">Gym Equipment</Link>
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <Link href="/gym-equipment/functional-training" className="hover:text-white transition-colors">Functional Training</Link>
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <span className="text-white font-medium">Cages & Racks</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Cages & Racks
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl">
                Build your ultimate strength training sanctuary. Professional power cages, 
                racks, and storage solutions for serious lifters and home gym enthusiasts.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="text-6xl">🏗️</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-6 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="flex items-center justify-center">
                <Shield className="w-5 h-5 text-gray-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">2000lb</span>
              </div>
              <p className="text-sm text-gray-600">Max Weight Capacity</p>
            </div>
            <div>
              <div className="flex items-center justify-center">
                <Package className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">Space-Saving</span>
              </div>
              <p className="text-sm text-gray-600">Wall & Compact Designs</p>
            </div>
            <div>
              <div className="flex items-center justify-center">
                <Settings className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">Multi-Functional</span>
              </div>
              <p className="text-sm text-gray-600">Integrated Systems</p>
            </div>
            <div>
              <div className="flex items-center justify-center">
                <Dumbbell className="w-5 h-5 text-red-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">Commercial</span>
              </div>
              <p className="text-sm text-gray-600">Gym Grade Quality</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Navigation */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Cages & Racks Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {cageCategories.map((category, index) => (
              <Link
                key={index}
                href={`/gym-equipment/${category.slug}`}
                className="bg-gray-50 rounded-lg p-3 text-center shadow-sm hover:shadow-md transition-shadow duration-200 group border border-gray-200"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:from-gray-200 group-hover:to-gray-300 transition-all duration-200">
                  <div className="text-lg">{category.icon}</div>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm group-hover:text-gray-700 transition-colors duration-200">
                  {category.name}
                </h3>
                <p className="text-xs text-gray-500 mt-1">{category.description}</p>
                <span className="inline-block mt-2 text-xs bg-gray-200 text-gray-700 px-1.5 py-0.5 rounded-full">
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
                Strength Training Cages & Racks
              </h2>
              <p className="text-gray-600">
                {cagesRacks.length} professional strength training systems for safe and effective workouts
              </p>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 lg:mt-0">
              {/* View Mode Toggle */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-gray-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-gray-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest First</option>
                <option value="capacity">Highest Capacity</option>
                <option value="commercial">Commercial Grade</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-72 flex-shrink-0">
              <div className="bg-gray-50 rounded-lg p-6 sticky top-4 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Filter Equipment
                </h3>

                {/* Equipment Type Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Equipment Type</h4>
                  <div className="space-y-2">
                    {filters.type.map((type) => (
                      <label key={type} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.type.includes(type)}
                          onChange={() => toggleFilter('type', type)}
                          className="rounded border-gray-300 text-gray-600 focus:ring-gray-500"
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
                          className="rounded border-gray-300 text-gray-600 focus:ring-gray-500"
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
                          className="rounded border-gray-300 text-gray-600 focus:ring-gray-500"
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
                          className="rounded border-gray-300 text-gray-600 focus:ring-gray-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Additional Filters */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Usage Type</h4>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-gray-600 focus:ring-gray-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Home Gym</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-gray-600 focus:ring-gray-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Commercial Gym</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-gray-600 focus:ring-gray-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Garage Gym</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-gray-600 focus:ring-gray-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">CrossFit Box</span>
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
                  {cagesRacks.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100"
                    >
                      <div className="relative h-64 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
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
                        {product.commercial && (
                          <span className="absolute top-3 right-3 bg-gray-600 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                            <Shield className="w-3 h-3 mr-1" />
                            Commercial
                          </span>
                        )}
                        {product.attachments && (
                          <span className="absolute top-12 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                            <Settings className="w-3 h-3 mr-1" />
                            Attachments
                          </span>
                        )}
                        {!product.inStock && (
                          <span className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Out of Stock
                          </span>
                        )}
                        <div className="text-5xl">🏗️</div>
                        <button className="absolute bottom-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <Heart className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-gray-900 text-lg">{product.name}</h3>
                          <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
                            {product.category}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                        
                        {/* Exercises */}
                        <div className="mb-3">
                          <div className="text-xs text-gray-500 mb-1">Primary Exercises:</div>
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
                              <span key={index} className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">
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
                                ? 'bg-gray-600 text-white hover:bg-gray-700' 
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
                  {cagesRacks.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex border border-gray-100"
                    >
                      <div className="w-48 relative bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
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
                        <div className="text-4xl">🏗️</div>
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                              <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
                                {product.category}
                              </span>
                              {product.commercial && (
                                <span className="text-xs bg-gray-600 text-white px-2 py-1 rounded-full flex items-center">
                                  <Shield className="w-3 h-3 mr-1" />
                                  Commercial
                                </span>
                              )}
                              {product.attachments && (
                                <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full flex items-center">
                                  <Settings className="w-3 h-3 mr-1" />
                                  Attachments
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
                                <div className="font-medium text-gray-500 text-sm mb-1">Primary Exercises</div>
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
                                  <span key={index} className="text-sm bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
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
                                ? 'bg-gray-600 text-white hover:bg-gray-700' 
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
      <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Invest in Quality Cages & Racks?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional strength training equipment designed for safety, durability, and maximum performance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Maximum Safety</h3>
              <p className="text-gray-600 text-sm">
                Built-in safety bars and spotter arms protect you during heavy lifts and failed reps
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Versatile Training</h3>
              <p className="text-gray-600 text-sm">
                Multiple attachment points and accessories for endless exercise variations
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Space Efficient</h3>
              <p className="text-gray-600 text-sm">
                Wall-mounted and compact designs maximize your training space
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Dumbbell className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Commercial Durability</h3>
              <p className="text-gray-600 text-sm">
                Heavy-duty steel construction built to withstand years of intense training
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}