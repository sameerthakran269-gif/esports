// app/gym-equipment/functional-training/resistance-bands/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, Star, Heart, Filter, Grid, List, Activity, Zap, Users, Target, GitPullRequest, Move3d, Dumbbell, Package } from 'lucide-react';

export default function ResistanceBandsPage() {
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    type: [],
    priceRange: [],
    brand: [],
    features: []
  });

  const resistanceBands = [
    {
      id: 1,
      name: 'Professional Resistance Band Set',
      price: '$89.99',
      originalPrice: '$119.99',
      image: '/pro-resistance-bands.jpg',
      rating: 4.8,
      reviews: 567,
      category: 'Loop Bands',
      brand: 'PowerFlex',
      description: 'Complete 5-band set with varying resistance levels for full-body strength training',
      features: ['5 Resistance Levels', 'Latex Material', 'Color Coded', 'Carry Bag', 'Exercise Guide'],
      specifications: {
        resistance: '10-50lb per band',
        material: 'Natural Latex',
        length: '48 inches',
        levels: '5 Color-coded',
        portability: 'Travel Bag'
      },
      exercises: ['Squats', 'Glute Bridges', 'Chest Press', 'Rows', 'Shoulder Press'],
      isNew: false,
      isBestseller: true,
      inStock: true,
      portable: true,
      set: true
    },
    {
      id: 2,
      name: 'Pull-Up Assistance Bands',
      price: '$49.99',
      originalPrice: '$69.99',
      image: '/pull-up-bands.jpg',
      rating: 4.7,
      reviews: 423,
      category: 'Pull-Up Bands',
      brand: 'LiftAid',
      description: 'Heavy-duty bands for assisted pull-ups, dips, and strength progression',
      features: ['4 Resistance Levels', 'Extra Long', 'Door Anchor', 'Strength Progression'],
      specifications: {
        resistance: '15-120lb assistance',
        length: '61 inches',
        material: 'Natural Rubber',
        levels: '4 Progressive',
        usage: 'Pull-ups, Dips'
      },
      exercises: ['Assisted Pull-ups', 'Dips', 'Push-ups', 'Stretching', 'Mobility'],
      isNew: false,
      isBestseller: true,
      inStock: true,
      portable: true,
      set: true
    },
    {
      id: 3,
      name: 'Resistance Band with Handles',
      price: '$39.99',
      originalPrice: '$49.99',
      image: '/handle-bands.jpg',
      rating: 4.6,
      reviews: 298,
      category: 'Handle Bands',
      brand: 'GripPro',
      description: 'Tube resistance bands with comfortable handles for traditional strength exercises',
      features: ['Comfortable Handles', 'Door Anchor', 'Ankle Straps', 'Multiple Exercises'],
      specifications: {
        resistance: '10-50lb',
        handles: 'Ergonomic Design',
        tube: 'Latex with Fabric',
        anchor: 'Door Attachment',
        accessories: 'Full Set'
      },
      exercises: ['Bicep Curls', 'Tricep Extensions', 'Lat Pulldowns', 'Chest Flyes'],
      isNew: true,
      isBestseller: false,
      inStock: true,
      portable: true,
      set: true
    },
    {
      id: 4,
      name: 'Fabric Resistance Bands',
      price: '$59.99',
      originalPrice: '$79.99',
      image: '/fabric-bands.jpg',
      rating: 4.5,
      reviews: 234,
      category: 'Fabric Bands',
      brand: 'ComfortFlex',
      description: 'Non-slip fabric bands perfect for lower body workouts and physical therapy',
      features: ['Non-slip Fabric', 'No Roll Design', 'Latex-free', 'Washable'],
      specifications: {
        resistance: '15-100lb',
        material: 'Cotton Blend Fabric',
        length: '36 inches',
        latex: 'Latex-free',
        care: 'Machine Washable'
      },
      exercises: ['Hip Thrusts', 'Leg Lifts', 'Clamshells', 'Physical Therapy'],
      isNew: false,
      isBestseller: false,
      inStock: true,
      portable: true,
      set: true
    },
    {
      id: 5,
      name: 'Mini Resistance Bands Set',
      price: '$24.99',
      originalPrice: '$34.99',
      image: '/mini-bands.jpg',
      rating: 4.4,
      reviews: 387,
      category: 'Mini Bands',
      brand: 'BootyBands',
      description: 'Compact mini bands for glute activation, physical therapy, and travel workouts',
      features: ['3 Resistance Levels', 'Ultra Compact', 'Glute Focus', 'Travel Friendly'],
      specifications: {
        resistance: '5-30lb',
        material: 'Natural Latex',
        length: '9 inches',
        levels: '3 Progressive',
        portability: 'Pocket-sized'
      },
      exercises: ['Glute Activation', 'Hip Abductions', 'Warm-ups', 'Physical Therapy'],
      isNew: false,
      isBestseller: true,
      inStock: true,
      portable: true,
      set: true
    },
    {
      id: 6,
      name: 'Power Resistance Band Set',
      price: '$129.99',
      originalPrice: '$169.99',
      image: '/power-bands.jpg',
      rating: 4.9,
      reviews: 156,
      category: 'Power Bands',
      brand: 'EliteFit',
      description: 'Heavy-duty power bands for advanced training, powerlifting, and explosive movements',
      features: ['Extra Heavy Resistance', 'Powerlifting Spec', 'Reinforced Ends', 'Competition Grade'],
      specifications: {
        resistance: '50-200lb',
        material: 'Reinforced Latex',
        length: '41 inches',
        strength: 'Powerlifting',
        usage: 'Advanced Training'
      },
      exercises: ['Band Deadlifts', 'Squat Accommodation', 'Power Cleans', 'Explosive Training'],
      isNew: true,
      isBestseller: false,
      inStock: true,
      portable: false,
      set: true
    },
    {
      id: 7,
      name: 'Resistance Band Door Anchor',
      price: '$19.99',
      originalPrice: '$29.99',
      image: '/door-anchor.jpg',
      rating: 4.3,
      reviews: 278,
      category: 'Accessory',
      brand: 'AnchorPro',
      description: 'Universal door anchor for resistance bands to expand exercise possibilities',
      features: ['Universal Fit', 'Easy Installation', 'Heavy-duty', 'Multiple Anchor Points'],
      specifications: {
        compatibility: 'All Band Types',
        material: 'Nylon Webbing',
        capacity: '300lb+',
        installation: 'Tool-free',
        doors: 'Most Standard'
      },
      exercises: ['Chest Press', 'Rows', 'Lat Pulldowns', 'Rotational Exercises'],
      isNew: false,
      isBestseller: true,
      inStock: true,
      portable: true,
      set: false
    },
    {
      id: 8,
      name: 'Complete Home Gym Band System',
      price: '$199.99',
      originalPrice: '$259.99',
      image: '/gym-system.jpg',
      rating: 4.8,
      reviews: 189,
      category: 'System',
      brand: 'HomeGym Pro',
      description: 'All-in-one resistance band gym system with rack, multiple bands, and accessories',
      features: ['Wall Mount System', '12 Bands Included', 'Pull-up Bar', 'Exercise Charts'],
      specifications: {
        bands: '12 Various Resistance',
        rack: 'Wall Mountable',
        accessories: 'Full Set',
        space: 'Compact Design',
        exercises: '200+ Variations'
      },
      exercises: ['Full Body Workouts', 'Strength Training', 'Cardio Circuits', 'Rehabilitation'],
      isNew: true,
      isBestseller: true,
      inStock: true,
      portable: false,
      set: true
    }
  ];

  const bandCategories = [
    {
      name: 'Loop Bands',
      image: '/loop-bands.jpg',
      description: 'Standard resistance bands',
      count: 12,
      icon: '🔄',
      slug: 'resistance-bands/loop-bands'
    },
    {
      name: 'Pull-Up Bands',
      image: '/pull-up-bands.jpg',
      description: 'Assistance bands',
      count: 8,
      icon: '💪',
      slug: 'resistance-bands/pull-up-bands'
    },
    {
      name: 'Tube Bands',
      image: '/tube-bands.jpg',
      description: 'With handles',
      count: 10,
      icon: '🎯',
      slug: 'resistance-bands/tube-bands'
    },
    {
      name: 'Fabric Bands',
      image: '/fabric-bands-cat.jpg',
      description: 'Non-slip design',
      count: 6,
      icon: '👖',
      slug: 'resistance-bands/fabric-bands'
    },
    {
      name: 'Mini Bands',
      image: '/mini-bands-cat.jpg',
      description: 'Glute & rehab',
      count: 15,
      icon: '🌀',
      slug: 'resistance-bands/mini-bands'
    },
    {
      name: 'Power Bands',
      image: '/power-bands-cat.jpg',
      description: 'Heavy duty',
      count: 7,
      icon: '⚡',
      slug: 'resistance-bands/power-bands'
    },
    {
      name: 'Accessories',
      image: '/band-accessories.jpg',
      description: 'Anchors & more',
      count: 9,
      icon: '🛠️',
      slug: 'resistance-bands/accessories'
    },
    {
      name: 'Complete Systems',
      image: '/band-systems.jpg',
      description: 'Home gym setups',
      count: 5,
      icon: '🏠',
      slug: 'resistance-bands/systems'
    }
  ];

  const filters = {
    type: ['Loop Bands', 'Pull-Up Bands', 'Handle Bands', 'Fabric Bands', 'Mini Bands', 'Power Bands', 'Accessory', 'System'],
    priceRange: [
      'Under $25',
      '$25 - $50',
      '$50 - $100',
      '$100 - $150',
      'Above $150'
    ],
    brand: ['PowerFlex', 'LiftAid', 'GripPro', 'ComfortFlex', 'BootyBands', 'EliteFit', 'AnchorPro', 'HomeGym Pro'],
    features: ['Portable', 'Complete Set', 'Latex-free', 'With Handles', 'Door Anchor', 'Exercise Guide', 'Heavy Duty', 'Travel Bag']
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
      <section className="bg-gradient-to-r from-pink-700 to-rose-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <nav className="flex items-center space-x-2 text-sm text-pink-200 mb-4">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <Link href="/gym-equipment" className="hover:text-white transition-colors">Gym Equipment</Link>
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <Link href="/gym-equipment/functional-training" className="hover:text-white transition-colors">Functional Training</Link>
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <span className="text-white font-medium">Resistance Bands</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Resistance Bands
              </h1>
              <p className="text-xl text-pink-100 max-w-2xl">
                Portable strength training anywhere. Build muscle, improve mobility, 
                and enhance performance with versatile resistance band systems.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="text-6xl">🔄</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-6 bg-gradient-to-r from-pink-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="flex items-center justify-center">
                <GitPullRequest className="w-5 h-5 text-pink-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">10-200lb</span>
              </div>
              <p className="text-sm text-gray-600">Resistance Range</p>
            </div>
            <div>
              <div className="flex items-center justify-center">
                <Move3d className="w-5 h-5 text-rose-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">300+</span>
              </div>
              <p className="text-sm text-gray-600">Exercise Variations</p>
            </div>
            <div>
              <div className="flex items-center justify-center">
                <Package className="w-5 h-5 text-purple-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">Portable</span>
              </div>
              <p className="text-sm text-gray-600">Travel Anywhere</p>
            </div>
            <div>
              <div className="flex items-center justify-center">
                <Dumbbell className="w-5 h-5 text-red-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">All Levels</span>
              </div>
              <p className="text-sm text-gray-600">Beginner to Elite</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Navigation */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Resistance Band Types</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {bandCategories.map((category, index) => (
              <Link
                key={index}
                href={`/gym-equipment/${category.slug}`}
                className="bg-gray-50 rounded-lg p-3 text-center shadow-sm hover:shadow-md transition-shadow duration-200 group border border-gray-200"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-pink-100 to-rose-200 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:from-pink-200 group-hover:to-rose-300 transition-all duration-200">
                  <div className="text-lg">{category.icon}</div>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm group-hover:text-pink-600 transition-colors duration-200">
                  {category.name}
                </h3>
                <p className="text-xs text-gray-500 mt-1">{category.description}</p>
                <span className="inline-block mt-2 text-xs bg-pink-100 text-pink-600 px-1.5 py-0.5 rounded-full">
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
                Resistance Band Training Systems
              </h2>
              <p className="text-gray-600">
                {resistanceBands.length} versatile resistance bands for portable strength training and full-body workouts
              </p>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 lg:mt-0">
              {/* View Mode Toggle */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-pink-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-pink-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest First</option>
                <option value="resistance">Highest Resistance</option>
                <option value="portable">Most Portable</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-72 flex-shrink-0">
              <div className="bg-gray-50 rounded-lg p-6 sticky top-4 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Filter Resistance Bands
                </h3>

                {/* Band Type Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Band Type</h4>
                  <div className="space-y-2">
                    {filters.type.map((type) => (
                      <label key={type} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.type.includes(type)}
                          onChange={() => toggleFilter('type', type)}
                          className="rounded border-gray-300 text-pink-600 focus:ring-pink-500"
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
                          className="rounded border-gray-300 text-pink-600 focus:ring-pink-500"
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
                          className="rounded border-gray-300 text-pink-600 focus:ring-pink-500"
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
                          className="rounded border-gray-300 text-pink-600 focus:ring-pink-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Additional Filters */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Resistance Level</h4>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-pink-600 focus:ring-pink-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Light (5-30lb)</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-pink-600 focus:ring-pink-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Medium (30-80lb)</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-pink-600 focus:ring-pink-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Heavy (80-150lb)</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-pink-600 focus:ring-pink-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Extra Heavy (150lb+)</span>
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
                  {resistanceBands.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100"
                    >
                      <div className="relative h-64 bg-gradient-to-br from-pink-50 to-rose-100 flex items-center justify-center">
                        {product.isNew && (
                          <span className="absolute top-3 left-3 bg-pink-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            New
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="absolute top-3 left-3 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Bestseller
                          </span>
                        )}
                        {product.portable && (
                          <span className="absolute top-3 right-3 bg-pink-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                            <Package className="w-3 h-3 mr-1" />
                            Portable
                          </span>
                        )}
                        {product.set && (
                          <span className="absolute top-12 right-3 bg-rose-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                            <GitPullRequest className="w-3 h-3 mr-1" />
                            Complete Set
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
                          <span className="text-xs bg-pink-100 text-pink-600 px-2 py-1 rounded-full">
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
                              <span key={index} className="text-xs bg-pink-50 text-pink-600 px-2 py-1 rounded">
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
                                ? 'bg-pink-600 text-white hover:bg-pink-700' 
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
                  {resistanceBands.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex border border-gray-100"
                    >
                      <div className="w-48 relative bg-gradient-to-br from-pink-50 to-rose-100 flex items-center justify-center">
                        {product.isNew && (
                          <span className="absolute top-3 left-3 bg-pink-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
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
                              <span className="text-xs bg-pink-100 text-pink-600 px-2 py-1 rounded-full">
                                {product.category}
                              </span>
                              {product.portable && (
                                <span className="text-xs bg-pink-500 text-white px-2 py-1 rounded-full flex items-center">
                                  <Package className="w-3 h-3 mr-1" />
                                  Portable
                                </span>
                              )}
                              {product.set && (
                                <span className="text-xs bg-rose-500 text-white px-2 py-1 rounded-full flex items-center">
                                  <GitPullRequest className="w-3 h-3 mr-1" />
                                  Complete Set
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
                                  <span key={index} className="text-sm bg-pink-50 text-pink-600 px-3 py-1 rounded-full">
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
                                ? 'bg-pink-600 text-white hover:bg-pink-700' 
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
      <section className="py-16 bg-gradient-to-r from-pink-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Resistance Band Training?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Portable, versatile, and effective strength training that adapts to your fitness level and goals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Ultra Portable</h3>
              <p className="text-gray-600 text-sm">
                Train anywhere - home, office, hotel, or outdoors with compact band systems
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GitPullRequest className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Variable Resistance</h3>
              <p className="text-gray-600 text-sm">
                Accommodating resistance matches your strength through the entire movement
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Move3d className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">300+ Exercises</h3>
              <p className="text-gray-600 text-sm">
                Full-body workouts targeting every muscle group with endless variations
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Dumbbell className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">All Fitness Levels</h3>
              <p className="text-gray-600 text-sm">
                From rehabilitation to elite athletic training with progressive resistance
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}