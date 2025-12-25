// app/sports-equipment/outdoor-sports/climbing/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Heart, Filter, Grid, List } from 'lucide-react';

export default function ClimbingPage() {
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    priceRange: [],
    brand: [],
    skillLevel: []
  });

  const climbingProducts = [
    {
      id: 33,
      name: 'Professional Climbing Harness',
      price: '$119.99',
      originalPrice: '$149.99',
      image: '/climbing-harness.jpg',
      rating: 4.7,
      reviews: 78,
      category: 'Safety Gear',
      brand: 'SummitPro',
      description: 'Professional climbing harness with gear loops and adjustable leg loops',
      isNew: false,
      isBestseller: true,
      activityType: 'Rock Climbing',
      weight: '1.8 lbs',
      size: 'Adjustable',
      skillLevel: 'Intermediate'
    },
    {
      id: 37,
      name: 'Dynamic Climbing Rope (60m)',
      price: '$249.99',
      originalPrice: '$299.99',
      image: '/climbing-rope.jpg',
      rating: 4.8,
      reviews: 45,
      category: 'Ropes',
      brand: 'PeakPerformance',
      description: '10.2mm dynamic climbing rope with UIAA certification',
      isNew: true,
      isBestseller: false,
      activityType: 'Rock Climbing',
      weight: '7.2 lbs',
      length: '60m',
      skillLevel: 'Advanced'
    },
    {
      id: 38,
      name: 'Climbing Shoes - Technical',
      price: '$159.99',
      originalPrice: '$189.99',
      image: '/climbing-shoes.jpg',
      rating: 4.6,
      reviews: 112,
      category: 'Footwear',
      brand: 'Vertigo',
      description: 'Aggressive downturn shoes for technical climbing and bouldering',
      isNew: false,
      isBestseller: true,
      activityType: 'Rock Climbing',
      weight: '1.1 lbs/pair',
      sizes: 'EU 36-46',
      skillLevel: 'Advanced'
    },
    {
      id: 39,
      name: 'Quickdraw Set (12-pack)',
      price: '$129.99',
      originalPrice: '$159.99',
      image: '/quickdraws.jpg',
      rating: 4.5,
      reviews: 67,
      category: 'Hardware',
      brand: 'SummitPro',
      description: '12-pack of wiregate quickdraws with durable dogbone material',
      isNew: true,
      isBestseller: false,
      activityType: 'Sport Climbing',
      weight: '2.4 lbs',
      length: '12cm',
      skillLevel: 'Intermediate'
    },
    {
      id: 40,
      name: 'Belay Device with Anti-Panic',
      price: '$49.99',
      originalPrice: '$64.99',
      image: '/belay-device.jpg',
      rating: 4.7,
      reviews: 89,
      category: 'Safety Gear',
      brand: 'SafeClimb',
      description: 'Assisted braking belay device with anti-panic mechanism',
      isNew: false,
      isBestseller: true,
      activityType: 'Rock Climbing',
      weight: '0.4 lbs',
      skillLevel: 'Beginner'
    },
    {
      id: 41,
      name: 'Climbing Helmet',
      price: '$89.99',
      originalPrice: '$109.99',
      image: '/climbing-helmet.jpg',
      rating: 4.4,
      reviews: 134,
      category: 'Safety Gear',
      brand: 'CraniumGuard',
      description: 'Lightweight climbing helmet with adjustable ventilation',
      isNew: true,
      isBestseller: false,
      activityType: 'Rock Climbing',
      weight: '0.9 lbs',
      sizes: 'S-XXL',
      skillLevel: 'All Levels'
    },
    {
      id: 42,
      name: 'Chalk Bag with Belt',
      price: '$24.99',
      originalPrice: '$34.99',
      image: '/chalk-bag.jpg',
      rating: 4.3,
      reviews: 156,
      category: 'Accessories',
      brand: 'GripMaster',
      description: 'Chalk bag with belt, brush, and zip closure',
      isNew: false,
      isBestseller: true,
      activityType: 'Bouldering',
      weight: '0.3 lbs',
      capacity: '1.5L',
      skillLevel: 'All Levels'
    },
    {
      id: 43,
      name: 'Camming Device Set',
      price: '$299.99',
      originalPrice: '$379.99',
      image: '/camming-devices.jpg',
      rating: 4.8,
      reviews: 23,
      category: 'Hardware',
      brand: 'TradMaster',
      description: 'Set of 6 camming devices for traditional climbing',
      isNew: false,
      isBestseller: false,
      activityType: 'Trad Climbing',
      weight: '3.2 lbs',
      range: '#0.5-3',
      skillLevel: 'Advanced'
    },
    {
      id: 44,
      name: 'Portable Crash Pad',
      price: '$199.99',
      originalPrice: '$249.99',
      image: '/crash-pad.jpg',
      rating: 4.6,
      reviews: 78,
      category: 'Safety Gear',
      brand: 'BoulderPro',
      description: 'Foldable crash pad for bouldering with comfortable backpack straps',
      isNew: true,
      isBestseller: true,
      activityType: 'Bouldering',
      weight: '12.5 lbs',
      thickness: '4 inches',
      skillLevel: 'All Levels'
    },
    {
      id: 45,
      name: 'Climbing Anchor Kit',
      price: '$179.99',
      originalPrice: '$219.99',
      image: '/anchor-kit.jpg',
      rating: 4.7,
      reviews: 34,
      category: 'Hardware',
      brand: 'SummitPro',
      description: 'Complete anchor building kit with slings, carabiners, and cordelette',
      isNew: false,
      isBestseller: false,
      activityType: 'Multi-pitch',
      weight: '2.1 lbs',
      skillLevel: 'Advanced'
    },
    {
      id: 46,
      name: 'Climbing Gloves',
      price: '$34.99',
      originalPrice: '$44.99',
      image: '/climbing-gloves.jpg',
      rating: 4.2,
      reviews: 89,
      category: 'Accessories',
      brand: 'GripTech',
      description: 'Durable climbing gloves with reinforced palms',
      isNew: true,
      isBestseller: false,
      activityType: 'Rock Climbing',
      weight: '0.4 lbs',
      sizes: 'S-XL',
      skillLevel: 'All Levels'
    },
    {
      id: 47,
      name: 'Multi-pitch Backpack',
      price: '$149.99',
      originalPrice: '$189.99',
      image: '/climbing-pack.jpg',
      rating: 4.5,
      reviews: 56,
      category: 'Bags',
      brand: 'SummitPro',
      description: '35L technical climbing backpack with gear loops and rope carry',
      isNew: false,
      isBestseller: true,
      activityType: 'Multi-pitch',
      weight: '2.8 lbs',
      capacity: '35L',
      skillLevel: 'Intermediate'
    }
  ];

  const climbingTypes = [
    {
      name: 'Rock Climbing',
      icon: '🧗',
      description: 'Harnesses, Ropes & Hardware',
      count: '28 products',
      slug: 'rock-climbing'
    },
    {
      name: 'Bouldering',
      icon: '🪨',
      description: 'Crash Pads & Climbing Shoes',
      count: '15 products',
      slug: 'bouldering'
    },
    {
      name: 'Sport Climbing',
      icon: '🔩',
      description: 'Quickdraws & Bolting Gear',
      count: '18 products',
      slug: 'sport-climbing'
    },
    {
      name: 'Trad Climbing',
      icon: '🧰',
      description: 'Cams, Nuts & Protection',
      count: '12 products',
      slug: 'trad-climbing'
    },
    {
      name: 'Ice Climbing',
      icon: '❄️',
      description: 'Ice Tools & Crampons',
      count: '8 products',
      slug: 'ice-climbing'
    },
    {
      name: 'Mountaineering',
      icon: '🏔️',
      description: 'Alpine Gear & Equipment',
      count: '10 products',
      slug: 'mountaineering'
    }
  ];

  const filters = {
    category: ['Safety Gear', 'Ropes', 'Footwear', 'Hardware', 'Accessories', 'Bags'],
    priceRange: [
      'Under $50',
      '$50 - $100',
      '$100 - $200',
      '$200 - $300',
      'Above $300'
    ],
    brand: ['SummitPro', 'PeakPerformance', 'Vertigo', 'SafeClimb', 'CraniumGuard', 'GripMaster', 'TradMaster', 'BoulderPro', 'GripTech'],
    skillLevel: ['Beginner', 'Intermediate', 'Advanced', 'All Levels']
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
      <section className="bg-gradient-to-r from-slate-800 to-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Climbing & Mountaineering Gear
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Professional climbing equipment for rock, ice, and alpine adventures. Safety-certified gear for every ascent.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#products"
                className="bg-white text-slate-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Shop Climbing Gear
              </Link>
              <Link
                href="/sports-equipment/outdoor-sports"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200"
              >
                View All Outdoor Sports
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Climbing Categories */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Climbing Disciplines
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {climbingTypes.map((climbingType, index) => (
              <Link
                key={index}
                href={`/sports-equipment/outdoor-sports/climbing/${climbingType.slug}`}
                className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-200">
                  {climbingType.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{climbingType.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{climbingType.description}</p>
                <span className="text-xs text-slate-600 font-medium">{climbingType.count}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Features Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Certified Safety & Performance
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              All our climbing gear meets or exceeds UIAA and CE safety standards for your protection.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">UIAA Certified</h3>
              <p className="text-gray-600">All equipment meets International Climbing and Mountaineering Federation standards.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Lightweight & Durable</h3>
              <p className="text-gray-600">Advanced materials that reduce weight while maintaining strength and reliability.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌧️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">All-Weather Ready</h3>
              <p className="text-gray-600">Gear designed to perform in various conditions from dry rock to ice climbing.</p>
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
                Climbing Equipment
              </h2>
              <p className="text-gray-600">
                Showing {climbingProducts.length} products
              </p>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 lg:mt-0">
              {/* View Mode Toggle */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-slate-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-slate-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-slate-300"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="weight">Lightest First</option>
                <option value="safety">Safety Rating</option>
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
                          className="rounded border-gray-300 text-slate-600 focus:ring-slate-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{level}</span>
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
                          className="rounded border-gray-300 text-slate-600 focus:ring-slate-500"
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
                          className="rounded border-gray-300 text-slate-600 focus:ring-slate-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>

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
                          className="rounded border-gray-300 text-slate-600 focus:ring-slate-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                <button
                  onClick={() => setSelectedFilters({ category: [], priceRange: [], brand: [], skillLevel: [] })}
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
                  {climbingProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                    >
                      <div className="relative h-64 bg-gradient-to-br from-slate-50 to-gray-100 flex items-center justify-center">
                        {product.isNew && (
                          <span className="absolute top-3 left-3 bg-slate-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            New
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="absolute top-3 left-3 bg-slate-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Bestseller
                          </span>
                        )}
                        <div className="text-4xl">
                          {product.category === 'Safety Gear' ? '🛡️' : 
                           product.category === 'Ropes' ? '🧵' :
                           product.category === 'Footwear' ? '👟' :
                           product.category === 'Hardware' ? '🔩' :
                           product.category === 'Accessories' ? '🎒' : '🧰'}
                        </div>
                        <button className="absolute top-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <Heart className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-gray-900">{product.name}</h3>
                          <div className="flex flex-col gap-1 items-end">
                            <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full">
                              {product.skillLevel}
                            </span>
                            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                              {product.weight}
                            </span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{product.description}</p>
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
                          <button className="bg-slate-600 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors duration-200 text-sm font-semibold">
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
                  {climbingProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex"
                    >
                      <div className="w-48 relative bg-gradient-to-br from-slate-50 to-gray-100 flex items-center justify-center">
                        {product.isNew && (
                          <span className="absolute top-3 left-3 bg-slate-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            New
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="absolute top-3 left-3 bg-slate-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Bestseller
                          </span>
                        )}
                        <div className="text-4xl">
                          {product.category === 'Safety Gear' ? '🛡️' : 
                           product.category === 'Ropes' ? '🧵' :
                           product.category === 'Footwear' ? '👟' :
                           product.category === 'Hardware' ? '🔩' :
                           product.category === 'Accessories' ? '🎒' : '🧰'}
                        </div>
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                              <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full">
                                {product.skillLevel}
                              </span>
                              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                {product.weight}
                              </span>
                            </div>
                            <p className="text-gray-600 mb-3">{product.description}</p>
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
                          <span className="text-sm text-gray-600">Category: {product.category}</span>
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
                          <button className="bg-slate-600 text-white px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors duration-200 font-semibold">
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

      {/* Safety & Training Section */}
      <section className="py-16 bg-gradient-to-r from-slate-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Climbing Safety & Education
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Learn proper techniques and safety protocols from certified instructors.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl mb-3">🎓</div>
                <h3 className="font-semibold mb-2">Certification Courses</h3>
                <p className="text-gray-300 text-sm">Learn from AMGA certified guides and instructors</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl mb-3">📋</div>
                <h3 className="font-semibold mb-2">Gear Inspection</h3>
                <p className="text-gray-300 text-sm">Learn how to inspect and maintain your equipment</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl mb-3">🗺️</div>
                <h3 className="font-semibold mb-2">Route Planning</h3>
                <p className="text-gray-300 text-sm">Access to detailed route descriptions and beta</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Join the Climbing Community
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Get route recommendations, safety tips, and exclusive climbing gear deals
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-slate-300"
            />
            <button className="bg-slate-600 text-white px-6 py-3 rounded-r-lg hover:bg-slate-700 transition-colors duration-200 font-semibold">
              Join Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}