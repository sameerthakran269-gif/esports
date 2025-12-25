// app/sports-equipment/water-sports/swimming/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Heart, Filter, Grid, List } from 'lucide-react';

export default function SwimmingPage() {
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    priceRange: [],
    brand: [],
    skillLevel: [],
    poolType: []
  });

  const swimmingProducts = [
    {
      id: 9,
      name: 'Professional Swim Goggles',
      price: '$34.99',
      originalPrice: '$44.99',
      image: '/swim-goggles.jpg',
      rating: 4.6,
      reviews: 189,
      category: 'Goggles',
      brand: 'AquaPro',
      description: 'Anti-fog competitive swim goggles with UV protection and adjustable strap',
      isNew: false,
      isBestseller: true,
      activityType: 'Competitive',
      skillLevel: 'All Levels',
      poolType: ['Pool', 'Open Water'],
      features: ['Anti-Fog', 'UV Protection', 'Adjustable', 'Competition Fit'],
      waterResistance: 'IP68'
    },
    {
      id: 47,
      name: 'Silicone Swim Cap',
      price: '$14.99',
      originalPrice: '$19.99',
      image: '/swim-cap.jpg',
      rating: 4.4,
      reviews: 234,
      category: 'Caps',
      brand: 'Speedo',
      description: 'Comfortable silicone swim cap for competitive and recreational swimming',
      isNew: true,
      isBestseller: false,
      activityType: 'All Types',
      skillLevel: 'All Levels',
      poolType: ['Pool', 'Open Water'],
      features: ['Silicone', 'Comfort Fit', 'Reduces Drag'],
      waterResistance: 'N/A'
    },
    {
      id: 48,
      name: 'Training Fins',
      price: '$49.99',
      originalPrice: '$64.99',
      image: '/training-fins.jpg',
      rating: 4.7,
      reviews: 156,
      category: 'Training Gear',
      brand: 'Finis',
      description: 'Short blade training fins for improving kick technique and ankle flexibility',
      isNew: false,
      isBestseller: true,
      activityType: 'Training',
      skillLevel: 'Intermediate',
      poolType: ['Pool'],
      features: ['Short Blade', 'Ankle Flexibility', 'Kick Training'],
      waterResistance: 'IP67'
    },
    {
      id: 49,
      name: 'Waterproof MP3 Player',
      price: '$89.99',
      originalPrice: '$119.99',
      image: '/waterproof-mp3.jpg',
      rating: 4.5,
      reviews: 89,
      category: 'Electronics',
      brand: 'SwimAudio',
      description: 'Bone conduction waterproof MP3 player for swimming and training',
      isNew: true,
      isBestseller: false,
      activityType: 'Training',
      skillLevel: 'All Levels',
      poolType: ['Pool', 'Open Water'],
      features: ['Bone Conduction', '8GB Storage', '6hr Battery'],
      waterResistance: 'IP68'
    },
    {
      id: 50,
      name: 'Competition Swimwear',
      price: '$129.99',
      originalPrice: '$159.99',
      image: '/competition-swimwear.jpg',
      rating: 4.8,
      reviews: 67,
      category: 'Swimwear',
      brand: 'Arena',
      description: 'High-performance competition swimsuit with compression and drag reduction',
      isNew: true,
      isBestseller: true,
      activityType: 'Competitive',
      skillLevel: 'Advanced',
      poolType: ['Pool'],
      features: ['Compression Fit', 'Drag Reduction', 'Chlorine Resistant'],
      waterResistance: 'N/A'
    },
    {
      id: 51,
      name: 'Pull Buoy',
      price: '$19.99',
      originalPrice: '$24.99',
      image: '/pull-buoy.jpg',
      rating: 4.6,
      reviews: 178,
      category: 'Training Gear',
      brand: 'Speedo',
      description: 'Foam pull buoy for upper body isolation and swim training',
      isNew: false,
      isBestseller: true,
      activityType: 'Training',
      skillLevel: 'All Levels',
      poolType: ['Pool'],
      features: ['Upper Body Focus', 'Buoyancy Aid', 'Durable Foam'],
      waterResistance: 'N/A'
    },
    {
      id: 52,
      name: 'Kickboard',
      price: '$24.99',
      originalPrice: '$29.99',
      image: '/kickboard.jpg',
      rating: 4.5,
      reviews: 203,
      category: 'Training Gear',
      brand: 'TYR',
      description: 'Professional kickboard for leg training and technique development',
      isNew: false,
      isBestseller: true,
      activityType: 'Training',
      skillLevel: 'All Levels',
      poolType: ['Pool'],
      features: ['Leg Training', 'Comfort Grip', 'Durable EVA'],
      waterResistance: 'N/A'
    },
    {
      id: 53,
      name: 'Swim Snorkel',
      price: '$39.99',
      originalPrice: '$49.99',
      image: '/swim-snorkel.jpg',
      rating: 4.4,
      reviews: 94,
      category: 'Training Gear',
      brand: 'Finis',
      description: 'Center-mounted swim snorkel for focused breathing and stroke technique',
      isNew: true,
      isBestseller: false,
      activityType: 'Training',
      skillLevel: 'Intermediate',
      poolType: ['Pool'],
      features: ['Center Mount', 'Stroke Focus', 'Comfortable Fit'],
      waterResistance: 'IP67'
    },
    {
      id: 54,
      name: 'Waterproof Fitness Tracker',
      price: '$199.99',
      originalPrice: '$249.99',
      image: '/swim-tracker.jpg',
      rating: 4.7,
      reviews: 56,
      category: 'Electronics',
      brand: 'Garmin',
      description: 'Advanced swim tracking with stroke detection and lap counting',
      isNew: true,
      isBestseller: true,
      activityType: 'All Types',
      skillLevel: 'All Levels',
      poolType: ['Pool', 'Open Water'],
      features: ['Stroke Detection', 'Lap Counting', 'Heart Rate'],
      waterResistance: '5ATM'
    },
    {
      id: 55,
      name: 'Paddles Training Set',
      price: '$34.99',
      originalPrice: '$44.99',
      image: '/swim-paddles.jpg',
      rating: 4.6,
      reviews: 112,
      category: 'Training Gear',
      brand: 'Speedo',
      description: 'Hand paddles for building upper body strength and improving technique',
      isNew: false,
      isBestseller: false,
      activityType: 'Training',
      skillLevel: 'Intermediate',
      poolType: ['Pool'],
      features: ['Strength Building', 'Technique Focus', 'Adjustable Strap'],
      waterResistance: 'N/A'
    },
    {
      id: 56,
      name: 'Recreational Goggles',
      price: '$24.99',
      originalPrice: '$29.99',
      image: '/recreational-goggles.jpg',
      rating: 4.3,
      reviews: 267,
      category: 'Goggles',
      brand: 'AquaPro',
      description: 'Comfortable recreational goggles with wide view and soft seals',
      isNew: false,
      isBestseller: true,
      activityType: 'Recreational',
      skillLevel: 'Beginner',
      poolType: ['Pool', 'Open Water'],
      features: ['Wide View', 'Soft Seals', 'Adjustable'],
      waterResistance: 'IP68'
    },
    {
      id: 57,
      name: 'Swim Training Fins',
      price: '$59.99',
      originalPrice: '$79.99',
      image: '/swim-fins.jpg',
      rating: 4.8,
      reviews: 78,
      category: 'Training Gear',
      brand: 'Arena',
      description: 'Full-size swim fins for power training and technique development',
      isNew: true,
      isBestseller: false,
      activityType: 'Training',
      skillLevel: 'Advanced',
      poolType: ['Pool'],
      features: ['Power Training', 'Ankle Support', 'Durable Blade'],
      waterResistance: 'IP67'
    }
  ];

  const swimmingCategories = [
    {
      name: 'Swim Goggles',
      icon: '🥽',
      description: 'Competition & Recreational',
      count: '8 products',
      slug: 'goggles'
    },
    {
      name: 'Swimwear',
      icon: '🩱',
      description: 'Competition & Training',
      count: '6 products',
      slug: 'swimwear'
    },
    {
      name: 'Training Gear',
      icon: '🏊',
      description: 'Fins, Paddles & Buoys',
      count: '12 products',
      slug: 'training-gear'
    },
    {
      name: 'Swim Caps',
      icon: '🧢',
      description: 'Silicone & Latex',
      count: '5 products',
      slug: 'swim-caps'
    },
    {
      name: 'Electronics',
      icon: '🎧',
      description: 'Trackers & Audio',
      count: '3 products',
      slug: 'electronics'
    },
    {
      name: 'Accessories',
      icon: '🎒',
      description: 'Bags & Maintenance',
      count: '7 products',
      slug: 'accessories'
    }
  ];

  const filters = {
    category: ['Goggles', 'Swimwear', 'Training Gear', 'Caps', 'Electronics', 'Accessories'],
    priceRange: [
      'Under $25',
      '$25 - $50',
      '$50 - $100',
      '$100 - $200',
      'Above $200'
    ],
    brand: ['AquaPro', 'Speedo', 'TYR', 'Arena', 'Finis', 'Garmin', 'SwimAudio'],
    skillLevel: ['Beginner', 'Intermediate', 'Advanced', 'Professional', 'All Levels'],
    poolType: ['Pool', 'Open Water', 'Both'],
    activityType: ['Competitive', 'Recreational', 'Training', 'All Types']
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
      <section className="bg-gradient-to-r from-blue-500 to-cyan-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Swimming Equipment
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Dive into peak performance with professional swim gear, training equipment, and accessories for every stroke and skill level.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#products"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
              >
                Shop Swim Gear
              </Link>
              <Link
                href="/sports-equipment/water-sports"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200"
              >
                View Water Sports
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Swimming Categories */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Swimming Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {swimmingCategories.map((category, index) => (
              <Link
                key={index}
                href={`/sports-equipment/water-sports/swimming/${category.slug}`}
                className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-200">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{category.description}</p>
                <span className="text-xs text-blue-600 font-medium">{category.count}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏊‍♂️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Competition Ready</h3>
              <p className="text-gray-600">Professional gear approved for competitive swimming and tournaments.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👁️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Anti-Fog Technology</h3>
              <p className="text-gray-600">Advanced lens coatings prevent fogging for clear vision underwater.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Chlorine Resistant</h3>
              <p className="text-gray-600">Durable materials designed to withstand pool chemicals and saltwater.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section id="products" className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with Controls */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Swimming Equipment
              </h2>
              <p className="text-gray-600">
                Showing {swimmingProducts.length} products
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
                <option value="training">Training Focus</option>
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

                {/* Category Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Category</h4>
                  <div className="space-y-2">
                    {filters.category.map((category) => (
                      <label key={category} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.category.includes(category)}
                          onChange={() => toggleFilter('category', category)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{category}</span>
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

                {/* Activity Type Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Activity Type</h4>
                  <div className="space-y-2">
                    {filters.activityType.map((type) => (
                      <label key={type} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.category.includes(type)}
                          onChange={() => toggleFilter('category', type)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Skill Level Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Skill Level</h4>
                  <div className="space-y-2">
                    {filters.skillLevel.map((level) => (
                      <label key={level} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.skillLevel.includes(level)}
                          onChange={() => toggleFilter('skillLevel', level)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{level}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Pool Type Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Water Type</h4>
                  <div className="space-y-2">
                    {filters.poolType.map((poolType) => (
                      <label key={poolType} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.poolType.includes(poolType)}
                          onChange={() => toggleFilter('poolType', poolType)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{poolType}</span>
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

                {/* Clear Filters */}
                <button
                  onClick={() => setSelectedFilters({ category: [], priceRange: [], brand: [], skillLevel: [], poolType: [] })}
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
                  {swimmingProducts.map((product) => (
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
                        <div className="text-4xl">
                          {product.category === 'Goggles' ? '🥽' : 
                           product.category === 'Swimwear' ? '🩱' :
                           product.category === 'Training Gear' ? '🏊' :
                           product.category === 'Caps' ? '🧢' :
                           product.category === 'Electronics' ? '🎧' : '🎒'}
                        </div>
                        <button className="absolute top-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <Heart className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-gray-900">{product.name}</h3>
                          <div className="flex flex-col gap-1 items-end">
                            <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                              {product.category}
                            </span>
                            <span className="text-xs bg-cyan-100 text-cyan-600 px-2 py-1 rounded-full">
                              {product.skillLevel}
                            </span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                        
                        {/* Features Tags */}
                        <div className="flex flex-wrap gap-1 mb-3">
                          {product.features.slice(0, 3).map((feature, index) => (
                            <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                              {feature}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-amber-400 fill-current" />
                            <span className="ml-1 text-sm text-gray-600">
                              {product.rating} ({product.reviews} reviews)
                            </span>
                          </div>
                          <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                            {product.waterResistance}
                          </span>
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
                          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-semibold">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* List View */
                <div className="space-y-6">
                  {swimmingProducts.map((product) => (
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
                          {product.category === 'Goggles' ? '🥽' : 
                           product.category === 'Swimwear' ? '🩱' :
                           product.category === 'Training Gear' ? '🏊' :
                           product.category === 'Caps' ? '🧢' :
                           product.category === 'Electronics' ? '🎧' : '🎒'}
                        </div>
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                              <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                                {product.category}
                              </span>
                              <span className="text-xs bg-cyan-100 text-cyan-600 px-2 py-1 rounded-full">
                                {product.skillLevel}
                              </span>
                              <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                                {product.waterResistance}
                              </span>
                            </div>
                            <p className="text-gray-600 mb-3">{product.description}</p>
                            
                            {/* Features Tags */}
                            <div className="flex flex-wrap gap-1 mb-3">
                              {product.features.map((feature, index) => (
                                <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                  {feature}
                                </span>
                              ))}
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
                          <span className="mx-2 text-gray-300">•</span>
                          <span className="text-sm text-gray-600">Water Type: {product.poolType.join(', ')}</span>
                          <span className="mx-2 text-gray-300">•</span>
                          <span className="text-sm text-gray-600">Activity: {product.activityType}</span>
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
                          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold">
                            Add to Cart
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

      {/* Training & Technique Section */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-cyan-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Swim Training & Technique
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Improve your strokes, build endurance, and master swimming techniques with professional training gear.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl mb-3">💪</div>
                <h3 className="font-semibold mb-2">Strength Training</h3>
                <p className="text-blue-100 text-sm">Paddles, fins, and resistance gear for power building</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="font-semibold mb-2">Technique Focus</h3>
                <p className="text-blue-100 text-sm">Snorkels, buoys, and boards for perfect form</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl mb-3">📊</div>
                <h3 className="font-semibold mb-2">Performance Tracking</h3>
                <p className="text-blue-100 text-sm">Wearables and tech for data-driven improvement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance & Care Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Gear Maintenance & Care
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Keep your swimming equipment in top condition with proper care and maintenance tips.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-2xl mb-3">🚿</div>
                <h3 className="font-semibold mb-2">Rinse After Use</h3>
                <p className="text-gray-600 text-sm">Always rinse gear with fresh water after swimming</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-2xl mb-3">🌬️</div>
                <h3 className="font-semibold mb-2">Air Dry</h3>
                <p className="text-gray-600 text-sm">Allow equipment to air dry completely before storage</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-2xl mb-3">🧴</div>
                <h3 className="font-semibold mb-2">Anti-Fog Care</h3>
                <p className="text-gray-600 text-sm">Proper cleaning maintains anti-fog coatings</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-2xl mb-3">📦</div>
                <h3 className="font-semibold mb-2">Proper Storage</h3>
                <p className="text-gray-600 text-sm">Store in cool, dry places away from direct sunlight</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Join the Swim Community
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Get training tips, technique guides, and exclusive deals on professional swim gear
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-r-lg hover:bg-blue-700 transition-colors duration-200 font-semibold">
              Dive In
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}