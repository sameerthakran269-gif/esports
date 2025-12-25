// app/gym-equipment/functional-training/plyo-boxes/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, Star, Heart, Filter, Grid, List, Activity, Zap, Users, Target, Box, Layers, TrendingUp, Shield } from 'lucide-react';

export default function PlyoBoxesPage() {
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    type: [],
    priceRange: [],
    brand: [],
    features: []
  });

  const plyoBoxes = [
    {
      id: 1,
      name: '3-in-1 Adjustable Plyo Box',
      price: '$249.99',
      originalPrice: '$329.99',
      image: '/adjustable-plyo-box.jpg',
      rating: 4.8,
      reviews: 287,
      category: 'Adjustable',
      brand: 'JumpPro',
      description: 'Versatile 3-height plyometric box for progressive jump training and box workouts',
      features: ['3 Heights (20", 24", 30")', 'Non-slip Surface', 'Steel Frame', 'Foam Padding', 'Easy Adjustment'],
      specifications: {
        heights: '20", 24", 30"',
        capacity: '400lb',
        material: 'Steel Frame + Foam',
        surface: 'Non-slip Rubber',
        weight: '45lb'
      },
      exercises: ['Box Jumps', 'Step-ups', 'Depth Jumps', 'Box Squats', 'Plyo Push-ups'],
      isNew: false,
      isBestseller: true,
      inStock: true,
      adjustable: true,
      commercial: true
    },
    {
      id: 2,
      name: 'Solid Wood Plyo Box Set',
      price: '$349.99',
      originalPrice: '$449.99',
      image: '/wood-plyo-box.jpg',
      rating: 4.9,
      reviews: 156,
      category: 'Wood',
      brand: 'WoodFit',
      description: 'Premium solid wood plyo boxes built for durability and stability',
      features: ['Solid Wood Construction', '3 Box Set', 'Reinforced Corners', 'Smooth Finish'],
      specifications: {
        heights: '12", 20", 24"',
        capacity: '500lb+',
        material: 'Birch Wood',
        finish: 'Smooth Protective',
        warranty: '5 Years'
      },
      exercises: ['Heavy Box Jumps', 'Weighted Step-ups', 'Plyometric Training', 'Strength Work'],
      isNew: true,
      isBestseller: false,
      inStock: true,
      adjustable: false,
      commercial: true
    },
    {
      id: 3,
      name: 'Foam Plyo Box Set',
      price: '$199.99',
      originalPrice: '$259.99',
      image: '/foam-plyo-box.jpg',
      rating: 4.6,
      reviews: 234,
      category: 'Foam',
      brand: 'SoftJump',
      description: 'Lightweight foam boxes perfect for beginners and rehabilitation training',
      features: ['Soft Foam Construction', 'Lightweight', 'Injury Prevention', 'Quiet Landing'],
      specifications: {
        heights: '12", 16", 20"',
        capacity: '300lb',
        material: 'High-density Foam',
        weight: '8lb per box',
        safety: 'Beginner Friendly'
      },
      exercises: ['Beginner Jumps', 'Rehab Training', 'Youth Training', 'Technical Practice'],
      isNew: false,
      isBestseller: true,
      inStock: true,
      adjustable: false,
      commercial: false
    },
    {
      id: 4,
      name: 'Competition Plyo Box',
      price: '$189.99',
      originalPrice: '$239.99',
      image: '/competition-plyo-box.jpg',
      rating: 4.7,
      reviews: 178,
      category: 'Competition',
      brand: 'CompFit',
      description: 'Professional competition-grade plyo box meeting official standards',
      features: ['Competition Spec', 'Reinforced Design', 'Grip Surface', 'Portable'],
      specifications: {
        heights: '20", 24", 30"',
        capacity: '450lb',
        material: 'Steel + Wood Composite',
        standards: 'Competition Approved',
        portability: 'Handle Included'
      },
      exercises: ['Competition Training', 'High-Intensity WODs', 'Advanced Plyometrics'],
      isNew: false,
      isBestseller: false,
      inStock: true,
      adjustable: false,
      commercial: true
    },
    {
      id: 5,
      name: 'Folding Plyo Box',
      price: '$179.99',
      originalPrice: '$229.99',
      image: '/folding-plyo-box.jpg',
      rating: 4.5,
      reviews: 198,
      category: 'Folding',
      brand: 'SpaceSaver',
      description: 'Space-saving folding plyo box perfect for home gyms and limited spaces',
      features: ['Folding Design', 'Quick Setup', 'Compact Storage', 'Durable Hinges'],
      specifications: {
        heights: '20", 24"',
        capacity: '350lb',
        material: 'Steel Frame + Wood',
        storage: 'Folds to 4" thick',
        setup: '30 Seconds'
      },
      exercises: ['Space-efficient Training', 'Home Gym Workouts', 'Travel Workouts'],
      isNew: true,
      isBestseller: true,
      inStock: true,
      adjustable: false,
      commercial: false
    },
    {
      id: 6,
      name: 'Multi-height Training Box',
      price: '$299.99',
      originalPrice: '$379.99',
      image: '/multi-height-box.jpg',
      rating: 4.8,
      reviews: 143,
      category: 'Multi-height',
      brand: 'VersaBox',
      description: 'Advanced training box with multiple height options and attachment points',
      features: ['5 Height Options', 'Attachment Points', 'Non-slip Surface', 'Carry Handles'],
      specifications: {
        heights: '16", 20", 24", 28", 32"',
        capacity: '400lb',
        material: 'Aluminum Frame',
        attachments: 'Band Pegs Included',
        versatility: 'Multi-functional'
      },
      exercises: ['Progressive Jumps', 'Band-resisted Jumps', 'Step Variations', 'Box Drills'],
      isNew: true,
      isBestseller: false,
      inStock: true,
      adjustable: true,
      commercial: true
    },
    {
      id: 7,
      name: 'Soft Plyo Box (Single)',
      price: '$89.99',
      originalPrice: '$119.99',
      image: '/soft-plyo-box.jpg',
      rating: 4.4,
      reviews: 267,
      category: 'Soft',
      brand: 'SafeJump',
      description: 'Soft-sided plyo box for maximum safety and comfort during training',
      features: ['Soft Sides', 'Stable Base', 'Lightweight', 'Easy to Move'],
      specifications: {
        heights: '20"',
        capacity: '250lb',
        material: 'Foam + Vinyl Cover',
        weight: '12lb',
        safety: 'Maximum Protection'
      },
      exercises: ['Safe Jump Practice', 'Recovery Training', 'Technical Work', 'Group Classes'],
      isNew: false,
      isBestseller: false,
      inStock: true,
      adjustable: false,
      commercial: false
    },
    {
      id: 8,
      name: 'Plyo Box Platform Set',
      price: '$159.99',
      originalPrice: '$199.99',
      image: '/platform-set.jpg',
      rating: 4.6,
      reviews: 134,
      category: 'Platform',
      brand: 'StackFit',
      description: 'Modular platform system for creating custom box heights and configurations',
      features: ['Modular Design', 'Stackable', 'Multiple Configurations', 'Non-slip Surface'],
      specifications: {
        platformHeight: '4" each',
        maxHeight: '32"',
        capacity: '300lb per platform',
        material: 'ABS Plastic',
        configurations: '8+ Variations'
      },
      exercises: ['Custom Heights', 'Progressive Overload', 'Creative Workouts', 'Skill Development'],
      isNew: false,
      isBestseller: true,
      inStock: true,
      adjustable: true,
      commercial: false
    }
  ];

  const plyoCategories = [
    {
      name: 'Adjustable',
      image: '/adjustable-boxes.jpg',
      description: 'Multi-height boxes',
      count: 4,
      icon: '🔄',
      slug: 'plyo-boxes/adjustable'
    },
    {
      name: 'Wood Boxes',
      image: '/wood-boxes.jpg',
      description: 'Solid wood construction',
      count: 6,
      icon: '🪵',
      slug: 'plyo-boxes/wood'
    },
    {
      name: 'Foam Boxes',
      image: '/foam-boxes.jpg',
      description: 'Soft and safe',
      count: 5,
      icon: '🧩',
      slug: 'plyo-boxes/foam'
    },
    {
      name: 'Folding',
      image: '/folding-boxes.jpg',
      description: 'Space saving',
      count: 3,
      icon: '📐',
      slug: 'plyo-boxes/folding'
    },
    {
      name: 'Competition',
      image: '/competition-boxes.jpg',
      description: 'Professional grade',
      count: 4,
      icon: '🏆',
      slug: 'plyo-boxes/competition'
    },
    {
      name: 'Soft Sided',
      image: '/soft-boxes.jpg',
      description: 'Maximum safety',
      count: 5,
      icon: '🛡️',
      slug: 'plyo-boxes/soft'
    },
    {
      name: 'Platform Systems',
      image: '/platform-boxes.jpg',
      description: 'Modular design',
      count: 3,
      icon: '🧱',
      slug: 'plyo-boxes/platform'
    },
    {
      name: 'Box Sets',
      image: '/box-sets.jpg',
      description: 'Multiple boxes',
      count: 7,
      icon: '📦',
      slug: 'plyo-boxes/sets'
    }
  ];

  const filters = {
    type: ['Adjustable', 'Wood', 'Foam', 'Folding', 'Competition', 'Soft', 'Platform', 'Multi-height'],
    priceRange: [
      'Under $100',
      '$100 - $200',
      '$200 - $300',
      '$300 - $400',
      'Above $400'
    ],
    brand: ['JumpPro', 'WoodFit', 'SoftJump', 'CompFit', 'SpaceSaver', 'VersaBox', 'SafeJump', 'StackFit'],
    features: ['Adjustable', 'Commercial Grade', 'Space Saving', 'Beginner Friendly', 'Competition Spec', 'Non-slip Surface', 'Portable', 'Stackable']
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
      <section className="bg-gradient-to-r from-purple-800 to-indigo-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <nav className="flex items-center space-x-2 text-sm text-purple-200 mb-4">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <Link href="/gym-equipment" className="hover:text-white transition-colors">Gym Equipment</Link>
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <Link href="/gym-equipment/functional-training" className="hover:text-white transition-colors">Functional Training</Link>
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <span className="text-white font-medium">Plyo Boxes</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Plyo Boxes
              </h1>
              <p className="text-xl text-purple-100 max-w-2xl">
                Explosive power and athletic performance. Build lower body strength, 
                improve vertical jump, and enhance coordination with professional plyometric boxes.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="text-6xl">📦</div>
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
                <TrendingUp className="w-5 h-5 text-purple-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">+8"</span>
              </div>
              <p className="text-sm text-gray-600">Vertical Jump Gain</p>
            </div>
            <div>
              <div className="flex items-center justify-center">
                <Box className="w-5 h-5 text-indigo-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">500lb</span>
              </div>
              <p className="text-sm text-gray-600">Weight Capacity</p>
            </div>
            <div>
              <div className="flex items-center justify-center">
                <Layers className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">Multi-Height</span>
              </div>
              <p className="text-sm text-gray-600">Adjustable Options</p>
            </div>
            <div>
              <div className="flex items-center justify-center">
                <Shield className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">Safe</span>
              </div>
              <p className="text-sm text-gray-600">Stable Design</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Navigation */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Plyo Box Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {plyoCategories.map((category, index) => (
              <Link
                key={index}
                href={`/gym-equipment/${category.slug}`}
                className="bg-gray-50 rounded-lg p-3 text-center shadow-sm hover:shadow-md transition-shadow duration-200 group border border-gray-200"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-indigo-200 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:from-purple-200 group-hover:to-indigo-300 transition-all duration-200">
                  <div className="text-lg">{category.icon}</div>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm group-hover:text-purple-600 transition-colors duration-200">
                  {category.name}
                </h3>
                <p className="text-xs text-gray-500 mt-1">{category.description}</p>
                <span className="inline-block mt-2 text-xs bg-purple-100 text-purple-600 px-1.5 py-0.5 rounded-full">
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
                Plyometric Training Boxes
              </h2>
              <p className="text-gray-600">
                {plyoBoxes.length} professional plyo boxes for explosive power development and athletic training
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
                <option value="height">Tallest Box</option>
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
                  Filter Plyo Boxes
                </h3>

                {/* Box Type Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Box Type</h4>
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

                {/* Additional Filters */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Box Height</h4>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">12-16" (Beginner)</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">18-22" (Intermediate)</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">24-30" (Advanced)</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">32"+ (Elite)</span>
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
                  {plyoBoxes.map((product) => (
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
                        {product.adjustable && (
                          <span className="absolute top-3 right-3 bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                            <Layers className="w-3 h-3 mr-1" />
                            Adjustable
                          </span>
                        )}
                        {product.commercial && (
                          <span className="absolute top-12 right-3 bg-indigo-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                            <Shield className="w-3 h-3 mr-1" />
                            Commercial
                          </span>
                        )}
                        {!product.inStock && (
                          <span className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Out of Stock
                          </span>
                        )}
                        <div className="text-5xl">📦</div>
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
                              <span key={index} className="text-xs bg-purple-50 text-purple-600 px-2 py-1 rounded">
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
                  {plyoBoxes.map((product) => (
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
                        <div className="text-4xl">📦</div>
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                              <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
                                {product.category}
                              </span>
                              {product.adjustable && (
                                <span className="text-xs bg-purple-500 text-white px-2 py-1 rounded-full flex items-center">
                                  <Layers className="w-3 h-3 mr-1" />
                                  Adjustable
                                </span>
                              )}
                              {product.commercial && (
                                <span className="text-xs bg-indigo-500 text-white px-2 py-1 rounded-full flex items-center">
                                  <Shield className="w-3 h-3 mr-1" />
                                  Commercial
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
                                  <span key={index} className="text-sm bg-purple-50 text-purple-600 px-3 py-1 rounded-full">
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
              Why Plyometric Box Training?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Develop explosive power, improve athletic performance, and build functional strength with targeted box training
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Explosive Power</h3>
              <p className="text-gray-600 text-sm">
                Develop fast-twitch muscle fibers and increase vertical jump height
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Box className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Progressive Training</h3>
              <p className="text-gray-600 text-sm">
                Adjustable heights allow for systematic progression and skill development
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Layers className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Versatile Workouts</h3>
              <p className="text-gray-600 text-sm">
                Hundreds of exercise variations for full-body conditioning
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Safe & Stable</h3>
              <p className="text-gray-600 text-sm">
                Professional construction ensures stability and injury prevention
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}