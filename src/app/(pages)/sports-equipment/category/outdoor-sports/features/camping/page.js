// app/sports-equipment/category/outdoor-sports/features/camping/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Heart, Filter, Grid, List, MapPin, Users, Thermometer } from 'lucide-react';

export default function CampingPage() {
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    priceRange: [],
    brand: [],
    capacity: [],
    season: []
  });

  const campingProducts = [
    {
      id: 7,
      name: 'Professional Camping Tent',
      price: '$299.99',
      originalPrice: '$379.99',
      image: '/camping-tent.jpg',
      rating: 4.7,
      reviews: 145,
      category: 'Tents',
      brand: 'TrailMaster',
      description: '4-person waterproof camping tent with UV protection and ventilation',
      isNew: false,
      isBestseller: true,
      activityType: 'Camping',
      weight: '8.2 lbs',
      capacity: '4 people',
      season: '3-Season',
      features: ['Waterproof', 'UV Protection', 'Ventilation', 'Easy Setup']
    },
    {
      id: 27,
      name: 'Sleeping Bag System',
      price: '$149.99',
      originalPrice: '$189.99',
      image: '/sleeping-bag.jpg',
      rating: 4.6,
      reviews: 178,
      category: 'Sleeping Bags',
      brand: 'TrailMaster',
      description: 'All-weather sleeping bag rated for -20°F with compression sack',
      isNew: true,
      isBestseller: true,
      activityType: 'Camping',
      weight: '3.8 lbs',
      temperature: '-20°F',
      season: '4-Season',
      features: ['-20°F Rating', 'Compression Sack', 'Water-Resistant']
    },
    {
      id: 28,
      name: 'Portable Camping Stove',
      price: '$79.99',
      originalPrice: '$99.99',
      image: '/camping-stove.jpg',
      rating: 4.4,
      reviews: 234,
      category: 'Cooking',
      brand: 'FlamePro',
      description: 'Compact propane stove with wind shield and adjustable flame',
      isNew: false,
      isBestseller: false,
      activityType: 'Camping',
      weight: '2.1 lbs',
      fuel: 'Propane',
      season: 'All-Season',
      features: ['Wind Shield', 'Adjustable Flame', 'Compact']
    },
    {
      id: 34,
      name: 'Portable Hammock',
      price: '$49.99',
      originalPrice: '$69.99',
      image: '/hammock.jpg',
      rating: 4.4,
      reviews: 267,
      category: 'Comfort',
      brand: 'RelaxGear',
      description: 'Lightweight parachute nylon hammock with carabiners',
      isNew: true,
      isBestseller: false,
      activityType: 'Camping',
      weight: '1.5 lbs',
      capacity: '400 lbs',
      season: '3-Season',
      features: ['Lightweight', 'Includes Carabiners', 'Compact']
    },
    {
      id: 36,
      name: 'Camping Cook Set',
      price: '$69.99',
      originalPrice: '$89.99',
      image: '/cook-set.jpg',
      rating: 4.3,
      reviews: 189,
      category: 'Cooking',
      brand: 'TrailMaster',
      description: '12-piece camping cookware set with non-stick coating',
      isNew: true,
      isBestseller: false,
      activityType: 'Camping',
      weight: '3.2 lbs',
      pieces: '12',
      season: 'All-Season',
      features: ['Non-Stick', '12 Pieces', 'Nestable Design']
    },
    {
      id: 37,
      name: 'Camping Lantern',
      price: '$39.99',
      originalPrice: '$49.99',
      image: '/camping-lantern.jpg',
      rating: 4.5,
      reviews: 312,
      category: 'Lighting',
      brand: 'LumenGear',
      description: 'Solar-powered LED lantern with multiple brightness settings',
      isNew: false,
      isBestseller: true,
      activityType: 'Camping',
      weight: '1.2 lbs',
      power: 'Solar/USB',
      season: 'All-Season',
      features: ['Solar Powered', 'Multiple Settings', 'Waterproof']
    },
    {
      id: 38,
      name: 'Cooler Box',
      price: '$129.99',
      originalPrice: '$159.99',
      image: '/cooler.jpg',
      rating: 4.6,
      reviews: 198,
      category: 'Food Storage',
      brand: 'ChillPro',
      description: '50-quart rotomolded cooler with 7-day ice retention',
      isNew: true,
      isBestseller: false,
      activityType: 'Camping',
      weight: '12.5 lbs',
      capacity: '50 qt',
      season: 'All-Season',
      features: ['7-Day Ice Retention', 'Rotomolded', 'Bear-Resistant']
    },
    {
      id: 39,
      name: 'Camping Chair',
      price: '$59.99',
      originalPrice: '$79.99',
      image: '/camping-chair.jpg',
      rating: 4.4,
      reviews: 423,
      category: 'Comfort',
      brand: 'ComfortGear',
      description: 'Foldable camping chair with cup holder and side pocket',
      isNew: false,
      isBestseller: true,
      activityType: 'Camping',
      weight: '4.8 lbs',
      capacity: '300 lbs',
      season: 'All-Season',
      features: ['Cup Holder', 'Side Pocket', 'Compact Fold']
    },
    {
      id: 40,
      name: 'First Aid Kit',
      price: '$34.99',
      originalPrice: '$44.99',
      image: '/first-aid-kit.jpg',
      rating: 4.7,
      reviews: 156,
      category: 'Safety',
      brand: 'SafeTrail',
      description: 'Comprehensive 100-piece first aid kit for outdoor emergencies',
      isNew: true,
      isBestseller: false,
      activityType: 'Camping',
      weight: '1.8 lbs',
      pieces: '100',
      season: 'All-Season',
      features: ['100 Pieces', 'Waterproof Case', 'Comprehensive']
    }
  ];

  const campingCategories = [
    {
      name: 'Tents & Shelters',
      icon: '🏕️',
      description: 'Family tents to ultralight shelters',
      count: '12 products',
      slug: 'tents'
    },
    {
      name: 'Sleeping Gear',
      icon: '🛌',
      description: 'Bags, pads & pillows',
      count: '8 products',
      slug: 'sleeping'
    },
    {
      name: 'Camp Kitchen',
      icon: '🍳',
      description: 'Stoves, cookware & utensils',
      count: '15 products',
      slug: 'kitchen'
    },
    {
      name: 'Lighting',
      icon: '💡',
      description: 'Lanterns, headlamps & flashlights',
      count: '10 products',
      slug: 'lighting'
    },
    {
      name: 'Furniture',
      icon: '🪑',
      description: 'Chairs, tables & hammocks',
      count: '7 products',
      slug: 'furniture'
    },
    {
      name: 'Safety & Navigation',
      icon: '🧭',
      description: 'First aid, GPS & tools',
      count: '9 products',
      slug: 'safety'
    }
  ];

  const filters = {
    category: ['Tents', 'Sleeping Bags', 'Cooking', 'Lighting', 'Comfort', 'Food Storage', 'Safety'],
    priceRange: [
      'Under $50',
      '$50 - $100',
      '$100 - $200',
      '$200 - $500',
      'Above $500'
    ],
    brand: ['TrailMaster', 'FlamePro', 'RelaxGear', 'LumenGear', 'ChillPro', 'ComfortGear', 'SafeTrail'],
    capacity: ['1-2 Person', '3-4 Person', '5-6 Person', '7+ Person'],
    season: ['1-Season', '2-Season', '3-Season', '4-Season', 'All-Season']
  };

  const toggleFilter = (filterType, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType ].includes(value)
        ? prev[filterType ].filter((item) => item !== value)
        : [...prev[filterType ], value]
    }));
  };

  const campingTips = [
    {
      title: 'Site Selection',
      description: 'Choose level ground away from dead trees and water sources',
      icon: '📍'
    },
    {
      title: 'Weather Prep',
      description: 'Always check forecasts and pack for unexpected conditions',
      icon: '🌦️'
    },
    {
      title: 'Leave No Trace',
      description: 'Pack out all trash and minimize environmental impact',
      icon: '🌿'
    },
    {
      title: 'Food Safety',
      description: 'Store food properly to avoid attracting wildlife',
      icon: '🐻'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Camping Gear & Equipment
            </h1>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Everything you need for comfortable and safe camping adventures, from family camping to backcountry expeditions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#products"
                className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-200"
              >
                Shop Camping Gear
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

      {/* Camping Categories */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Camping Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {campingCategories.map((category, index) => (
              <Link
                key={index}
                href={`/sports-equipment/category/outdoor-sports/features/camping/${category.slug}`}
                className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-200">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{category.description}</p>
                <span className="text-xs text-green-600 font-medium">{category.count}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Camping Tips */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Essential Camping Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {campingTips.map((tip, index) => (
              <div key={index} className="bg-green-50 rounded-xl p-6 text-center">
                <div className="text-3xl mb-3">{tip.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{tip.title}</h3>
                <p className="text-sm text-gray-600">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Thermometer className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">All-Weather Protection</h3>
              <p className="text-gray-600">Gear tested for rain, wind, and extreme temperature conditions.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Family & Solo Options</h3>
              <p className="text-gray-600">Perfect gear for family camping or solo backcountry adventures.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Lightweight & Portable</h3>
              <p className="text-gray-600">Easy-to-carry equipment designed for hiking to your campsite.</p>
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
                Camping Equipment
              </h2>
              <p className="text-gray-600">
                Showing {campingProducts.length} products for your outdoor adventures
              </p>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 lg:mt-0">
              {/* View Mode Toggle */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-green-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-green-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-300"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="weight">Lightest First</option>
                <option value="capacity">Capacity</option>
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
                          className="rounded border-gray-300 text-green-600 focus:ring-green-500"
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
                          className="rounded border-gray-300 text-green-600 focus:ring-green-500"
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
                          className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Capacity Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Capacity</h4>
                  <div className="space-y-2">
                    {filters.capacity.map((capacity) => (
                      <label key={capacity} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.capacity.includes(capacity)}
                          onChange={() => toggleFilter('capacity', capacity)}
                          className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{capacity}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Season Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Season</h4>
                  <div className="space-y-2">
                    {filters.season.map((season) => (
                      <label key={season} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.season.includes(season)}
                          onChange={() => toggleFilter('season', season)}
                          className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{season}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                <button
                  onClick={() => setSelectedFilters({ category: [], priceRange: [], brand: [], capacity: [], season: [] })}
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
                  {campingProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                    >
                      <div className="relative h-64 bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center">
                        {product.isNew && (
                          <span className="absolute top-3 left-3 bg-green-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            New
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Bestseller
                          </span>
                        )}
                        <div className="text-4xl">
                          {product.category === 'Tents' ? '🏕️' : 
                           product.category === 'Sleeping Bags' ? '🛌' :
                           product.category === 'Cooking' ? '🍳' :
                           product.category === 'Lighting' ? '💡' :
                           product.category === 'Comfort' ? '🪑' :
                           product.category === 'Food Storage' ? '🧊' : '⚕️'}
                        </div>
                        <button className="absolute top-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <Heart className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-gray-900">{product.name}</h3>
                          <div className="flex flex-col gap-1 items-end">
                            <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                              {product.category}
                            </span>
                            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                              {product.weight}
                            </span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                        
                        {/* Features */}
                        <div className="flex flex-wrap gap-1 mb-3">
                          {product.features?.slice(0, 3).map((feature, index) => (
                            <span key={index} className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded">
                              {feature}
                            </span>
                          ))}
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
                          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 text-sm font-semibold">
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
                  {campingProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex"
                    >
                      <div className="w-48 relative bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center">
                        {product.isNew && (
                          <span className="absolute top-3 left-3 bg-green-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            New
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Bestseller
                          </span>
                        )}
                        <div className="text-4xl">
                          {product.category === 'Tents' ? '🏕️' : 
                           product.category === 'Sleeping Bags' ? '🛌' :
                           product.category === 'Cooking' ? '🍳' :
                           product.category === 'Lighting' ? '💡' :
                           product.category === 'Comfort' ? '🪑' :
                           product.category === 'Food Storage' ? '🧊' : '⚕️'}
                        </div>
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                              <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                                {product.category}
                              </span>
                              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                {product.weight}
                              </span>
                            </div>
                            <p className="text-gray-600 mb-3">{product.description}</p>
                            
                            {/* Features */}
                            <div className="flex flex-wrap gap-1 mb-3">
                              {product.features?.map((feature, index) => (
                                <span key={index} className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded">
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
                          <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 font-semibold">
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

      {/* Camping Guide Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Camping Guides & Resources
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Everything you need to know for successful camping trips in any season.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl mb-3">⛺</div>
                <h3 className="font-semibold mb-2">Campsite Setup</h3>
                <p className="text-green-100 text-sm">Tent pitching, site selection, and camp organization</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl mb-3">🍳</div>
                <h3 className="font-semibold mb-2">Camp Cooking</h3>
                <p className="text-green-100 text-sm">Meal planning, recipes, and cooking techniques</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl mb-3">🌙</div>
                <h3 className="font-semibold mb-2">Overnight Tips</h3>
                <p className="text-green-100 text-sm">Sleeping comfort, temperature management, safety</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Join the Camping Community
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Get camping tips, gear reviews, and exclusive deals for outdoor enthusiasts
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-300"
            />
            <button className="bg-green-600 text-white px-6 py-3 rounded-r-lg hover:bg-green-700 transition-colors duration-200 font-semibold">
              Join Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}