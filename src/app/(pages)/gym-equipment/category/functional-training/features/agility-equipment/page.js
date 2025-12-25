// app/gym-equipment/functional-training/agility-equipment/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, Star, Heart, Filter, Grid, List, Activity, Zap, Users, Target, Footprints, Timer, Cone, ArrowRightLeft } from 'lucide-react';

export default function AgilityEquipmentPage() {
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    type: [],
    priceRange: [],
    brand: [],
    features: []
  });

  const agilityEquipment = [
    {
      id: 1,
      name: 'Professional Agility Ladder',
      price: '$34.99',
      originalPrice: '$49.99',
      image: '/pro-agility-ladder.jpg',
      rating: 4.8,
      reviews: 456,
      category: 'Agility Ladder',
      brand: 'SpeedFit',
      description: '20-foot professional agility ladder with adjustable rungs for footwork training',
      features: ['Adjustable Rungs', 'Durable Nylon', 'Quick Setup', 'Carry Bag', 'Training Guide'],
      specifications: {
        length: '20 feet',
        rungs: '12 Adjustable',
        material: 'Heavy-duty Nylon',
        setup: '30 Seconds',
        storage: 'Carry Bag Included'
      },
      exercises: ['High Knees', 'Lateral Steps', 'In-in Out-out', 'Hop Scotch', 'Icky Shuffle'],
      isNew: false,
      isBestseller: true,
      inStock: true,
      portable: true,
      adjustable: true
    },
    {
      id: 2,
      name: 'Agility Cone Set (20 pieces)',
      price: '$29.99',
      originalPrice: '$39.99',
      image: '/agility-cones.jpg',
      rating: 4.7,
      reviews: 389,
      category: 'Agility Cones',
      brand: 'ConePro',
      description: 'Professional agility cone set with multiple sizes for versatile training setups',
      features: ['5 Sizes', 'Stackable Design', 'Durable Plastic', 'Carry Bag', 'Multiple Colors'],
      specifications: {
        cones: '20 Pieces',
        sizes: '5 Different Heights',
        material: 'Flexible Plastic',
        colors: 'Bright Orange',
        storage: 'Mesh Carry Bag'
      },
      exercises: ['Cone Drills', 'Slalom Runs', 'Boundary Markers', 'Obstacle Courses', 'Speed Training'],
      isNew: false,
      isBestseller: true,
      inStock: true,
      portable: true,
      adjustable: false
    },
    {
      id: 3,
      name: 'Agility Hurdle Set (6 hurdles)',
      price: '$89.99',
      originalPrice: '$119.99',
      image: '/agility-hurdles.jpg',
      rating: 4.6,
      reviews: 234,
      category: 'Agility Hurdles',
      brand: 'JumpMaster',
      description: 'Adjustable agility hurdles for speed and coordination training',
      features: ['Adjustable Height', 'Quick Setup', 'Stable Base', 'Interlocking Design'],
      specifications: {
        hurdles: '6 Pieces',
        heightRange: '6-12 inches',
        material: 'PVC Construction',
        base: 'Wide Stability',
        setup: 'Tool-free'
      },
      exercises: ['Hurdle Hops', 'Lateral Jumps', 'Speed Drills', 'Coordination Training'],
      isNew: true,
      isBestseller: false,
      inStock: true,
      portable: true,
      adjustable: true
    },
    {
      id: 4,
      name: 'Speed Chute Training System',
      price: '$49.99',
      originalPrice: '$69.99',
      image: '/speed-chute.jpg',
      rating: 4.5,
      reviews: 198,
      category: 'Speed Chute',
      brand: 'SpeedChute Pro',
      description: 'Resistance parachute for developing explosive speed and acceleration',
      features: ['Adjustable Resistance', 'Quick Release', 'Durable Nylon', 'Waist Belt'],
      specifications: {
        resistance: '15-25lb',
        material: 'Ripstop Nylon',
        release: 'Quick Detach',
        belt: 'Adjustable Waist',
        storage: 'Compact Bag'
      },
      exercises: ['Sprint Training', 'Acceleration Drills', 'Speed Development', 'Explosive Starts'],
      isNew: false,
      isBestseller: false,
      inStock: true,
      portable: true,
      adjustable: true
    },
    {
      id: 5,
      name: 'Agility Dot Drill Mat',
      price: '$79.99',
      originalPrice: '$99.99',
      image: '/dot-drill-mat.jpg',
      rating: 4.7,
      reviews: 167,
      category: 'Dot Mat',
      brand: 'FootworkPro',
      description: 'Professional dot drill mat with numbered circles for footwork patterns',
      features: ['Numbered Dots', 'Non-slip Backing', 'Durable Vinyl', 'Training Guide'],
      specifications: {
        dots: '15 Numbered',
        material: 'Heavy-duty Vinyl',
        size: '5x5 feet',
        backing: 'Non-slip Rubber',
        patterns: '20+ Drills'
      },
      exercises: ['Dot Drills', 'Footwork Patterns', 'Coordination Training', 'Reaction Drills'],
      isNew: false,
      isBestseller: true,
      inStock: true,
      portable: true,
      adjustable: false
    },
    {
      id: 6,
      name: 'Reaction Ball Set',
      price: '$24.99',
      originalPrice: '$34.99',
      image: '/reaction-balls.jpg',
      rating: 4.4,
      reviews: 278,
      category: 'Reaction Balls',
      brand: 'ReactPro',
      description: 'Multi-surface reaction balls that bounce unpredictably to improve reflexes',
      features: ['Unpredictable Bounce', '6-sided Design', 'Durable Rubber', 'Multiple Sizes'],
      specifications: {
        balls: '3 Different Sizes',
        material: 'High-bounce Rubber',
        surfaces: '6 Uneven Sides',
        sizes: 'Small, Medium, Large',
        training: 'Reflex Development'
      },
      exercises: ['Reaction Drills', 'Hand-eye Coordination', 'Catching Practice', 'Reflex Training'],
      isNew: true,
      isBestseller: false,
      inStock: true,
      portable: true,
      adjustable: false
    },
    {
      id: 7,
      name: 'Agility Pole Set',
      price: '$59.99',
      originalPrice: '$79.99',
      image: '/agility-poles.jpg',
      rating: 4.6,
      reviews: 145,
      category: 'Agility Poles',
      brand: 'PoleMaster',
      description: 'Flexible agility poles for slalom drills and change of direction training',
      features: ['Flexible Design', 'Quick Setup', 'Interchangeable Bases', 'Carry Case'],
      specifications: {
        poles: '8 Pieces',
        height: '48 inches',
        material: 'Fiberglass + PVC',
        bases: 'Weighted Design',
        storage: 'Carry Case'
      },
      exercises: ['Slalom Drills', 'Change of Direction', 'Lateral Movement', 'Sports Training'],
      isNew: false,
      isBestseller: false,
      inStock: true,
      portable: true,
      adjustable: false
    },
    {
      id: 8,
      name: 'Complete Agility Training Kit',
      price: '$149.99',
      originalPrice: '$199.99',
      image: '/agility-kit.jpg',
      rating: 4.9,
      reviews: 189,
      category: 'Training Kit',
      brand: 'AgilityPro',
      description: 'Complete agility training system with ladder, cones, hurdles, and accessories',
      features: ['All-in-One System', 'Professional Grade', 'Carry Bag', 'Training Program'],
      specifications: {
        components: 'Ladder, Cones, Hurdles',
        accessories: 'Full Set Included',
        storage: 'Large Carry Bag',
        guide: 'Training Program',
        level: 'All Skill Levels'
      },
      exercises: ['Complete Workouts', 'Sports Training', 'Footwork Drills', 'Speed Development'],
      isNew: true,
      isBestseller: true,
      inStock: true,
      portable: true,
      adjustable: true
    }
  ];

  const agilityCategories = [
    {
      name: 'Agility Ladders',
      image: '/agility-ladders.jpg',
      description: 'Footwork training',
      count: 8,
      icon: '🪜',
      slug: 'agility-equipment/ladders'
    },
    {
      name: 'Agility Cones',
      image: '/agility-cones-cat.jpg',
      description: 'Markers & drills',
      count: 12,
      icon: '🔺',
      slug: 'agility-equipment/cones'
    },
    {
      name: 'Agility Hurdles',
      image: '/agility-hurdles-cat.jpg',
      description: 'Jump training',
      count: 6,
      icon: '🎯',
      slug: 'agility-equipment/hurdles'
    },
    {
      name: 'Speed Chutes',
      image: '/speed-chutes.jpg',
      description: 'Resistance training',
      count: 4,
      icon: '🪂',
      slug: 'agility-equipment/speed-chutes'
    },
    {
      name: 'Dot Mats',
      image: '/dot-mats.jpg',
      description: 'Footwork patterns',
      count: 5,
      icon: '⚫',
      slug: 'agility-equipment/dot-mats'
    },
    {
      name: 'Reaction Balls',
      image: '/reaction-balls-cat.jpg',
      description: 'Reflex training',
      count: 7,
      icon: '🎾',
      slug: 'agility-equipment/reaction-balls'
    },
    {
      name: 'Agility Poles',
      image: '/agility-poles-cat.jpg',
      description: 'Slalom training',
      count: 4,
      icon: '🎋',
      slug: 'agility-equipment/poles'
    },
    {
      name: 'Training Kits',
      image: '/agility-kits.jpg',
      description: 'Complete systems',
      count: 6,
      icon: '📦',
      slug: 'agility-equipment/kits'
    }
  ];

  const filters = {
    type: ['Agility Ladder', 'Agility Cones', 'Agility Hurdles', 'Speed Chute', 'Dot Mat', 'Reaction Balls', 'Agility Poles', 'Training Kit'],
    priceRange: [
      'Under $25',
      '$25 - $50',
      '$50 - $100',
      '$100 - $150',
      'Above $150'
    ],
    brand: ['SpeedFit', 'ConePro', 'JumpMaster', 'SpeedChute Pro', 'FootworkPro', 'ReactPro', 'PoleMaster', 'AgilityPro'],
    features: ['Portable', 'Adjustable', 'Complete Set', 'Training Guide', 'Carry Bag', 'Quick Setup', 'Professional Grade', 'Multi-sport']
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
      <section className="bg-gradient-to-r from-cyan-700 to-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <nav className="flex items-center space-x-2 text-sm text-cyan-200 mb-4">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <Link href="/gym-equipment" className="hover:text-white transition-colors">Gym Equipment</Link>
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <Link href="/gym-equipment/functional-training" className="hover:text-white transition-colors">Functional Training</Link>
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <span className="text-white font-medium">Agility Equipment</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Agility Equipment
              </h1>
              <p className="text-xl text-cyan-100 max-w-2xl">
                Lightning-fast footwork and razor-sharp reflexes. Develop speed, coordination, 
                and athletic performance with professional agility training equipment.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="text-6xl">⚡</div>
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
                <Footprints className="w-5 h-5 text-cyan-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">0.2s</span>
              </div>
              <p className="text-sm text-gray-600">Reaction Time Gain</p>
            </div>
            <div>
              <div className="flex items-center justify-center">
                <Timer className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">15%</span>
              </div>
              <p className="text-sm text-gray-600">Speed Improvement</p>
            </div>
            <div>
              <div className="flex items-center justify-center">
                <Cone className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">50+</span>
              </div>
              <p className="text-sm text-gray-600">Drill Variations</p>
            </div>
            <div>
              <div className="flex items-center justify-center">
                <ArrowRightLeft className="w-5 h-5 text-purple-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">Portable</span>
              </div>
              <p className="text-sm text-gray-600">Anywhere Training</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Navigation */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Agility Equipment Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {agilityCategories.map((category, index) => (
              <Link
                key={index}
                href={`/gym-equipment/${category.slug}`}
                className="bg-gray-50 rounded-lg p-3 text-center shadow-sm hover:shadow-md transition-shadow duration-200 group border border-gray-200"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:from-cyan-200 group-hover:to-blue-300 transition-all duration-200">
                  <div className="text-lg">{category.icon}</div>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm group-hover:text-cyan-600 transition-colors duration-200">
                  {category.name}
                </h3>
                <p className="text-xs text-gray-500 mt-1">{category.description}</p>
                <span className="inline-block mt-2 text-xs bg-cyan-100 text-cyan-600 px-1.5 py-0.5 rounded-full">
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
                Agility Training Equipment
              </h2>
              <p className="text-gray-600">
                {agilityEquipment.length} professional agility tools for speed, coordination, and athletic performance
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
                <option value="portable">Most Portable</option>
                <option value="complete-set">Complete Kits</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-72 flex-shrink-0">
              <div className="bg-gray-50 rounded-lg p-6 sticky top-4 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Filter Agility Equipment
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

                {/* Additional Filters */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Training Focus</h4>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Footwork & Speed</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Reaction & Reflexes</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Change of Direction</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Sports Specific</span>
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
                  {agilityEquipment.map((product) => (
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
                        {product.portable && (
                          <span className="absolute top-3 right-3 bg-cyan-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                            <ArrowRightLeft className="w-3 h-3 mr-1" />
                            Portable
                          </span>
                        )}
                        {product.adjustable && (
                          <span className="absolute top-12 right-3 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                            <Footprints className="w-3 h-3 mr-1" />
                            Adjustable
                          </span>
                        )}
                        {!product.inStock && (
                          <span className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Out of Stock
                          </span>
                        )}
                        <div className="text-5xl">⚡</div>
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
                              <span key={index} className="text-xs bg-cyan-50 text-cyan-600 px-2 py-1 rounded">
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
                  {agilityEquipment.map((product) => (
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
                        <div className="text-4xl">⚡</div>
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                              <span className="text-xs bg-cyan-100 text-cyan-600 px-2 py-1 rounded-full">
                                {product.category}
                              </span>
                              {product.portable && (
                                <span className="text-xs bg-cyan-500 text-white px-2 py-1 rounded-full flex items-center">
                                  <ArrowRightLeft className="w-3 h-3 mr-1" />
                                  Portable
                                </span>
                              )}
                              {product.adjustable && (
                                <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full flex items-center">
                                  <Footprints className="w-3 h-3 mr-1" />
                                  Adjustable
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
                                  <span key={index} className="text-sm bg-cyan-50 text-cyan-600 px-3 py-1 rounded-full">
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
              Why Agility Training?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Develop lightning-fast reflexes, improve coordination, and enhance athletic performance with targeted agility training
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Footprints className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Lightning Footwork</h3>
              <p className="text-gray-600 text-sm">
                Improve quickness and foot speed for better athletic performance
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Timer className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Faster Reaction Time</h3>
              <p className="text-gray-600 text-sm">
                Sharpen reflexes and improve decision-making speed in sports
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cone className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Better Coordination</h3>
              <p className="text-gray-600 text-sm">
                Enhance body control and movement efficiency in all directions
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRightLeft className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Portable Training</h3>
              <p className="text-gray-600 text-sm">
                Train anywhere with lightweight, portable agility equipment
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}