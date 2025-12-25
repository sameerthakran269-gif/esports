// app/sports-equipment/winter-sports/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Heart, Filter, Grid, List } from 'lucide-react';

export default function WinterSportsPage() {
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    priceRange: [],
    brand: [],
    skillLevel: [],
    temperatureRating: []
  });

  const winterSportsProducts = [
    {
      id: 11,
      name: 'Professional Skis Set',
      price: '$699.99',
      originalPrice: '$899.99',
      image: '/ski-set.jpg',
      rating: 4.7,
      reviews: 93,
      category: 'Skiing',
      brand: 'SnowPro',
      description: 'Complete ski set with boots, poles, and all-mountain skis for various conditions',
      isNew: false,
      isBestseller: true,
      activityType: 'Skiing',
      skillLevel: 'Advanced',
      temperatureRating: '-20°F',
      features: ['All-Mountain', 'Carbon Fiber', 'Adjustable Bindings']
    },
    {
      id: 12,
      name: 'Snowboard Package',
      price: '$449.99',
      originalPrice: '$549.99',
      image: '/snowboard.jpg',
      rating: 4.5,
      reviews: 124,
      category: 'Snowboarding',
      brand: 'SlopeMaster',
      description: 'Professional snowboard with bindings and carrying case for freestyle riding',
      isNew: true,
      isBestseller: false,
      activityType: 'Snowboarding',
      skillLevel: 'Intermediate',
      temperatureRating: '-15°F',
      features: ['Freestyle Design', 'Medium Flex', 'All-Terrain']
    },
    {
      id: 47,
      name: 'Insulated Snow Boots',
      price: '$189.99',
      originalPrice: '$229.99',
      image: '/snow-boots.jpg',
      rating: 4.6,
      reviews: 178,
      category: 'Footwear',
      brand: 'ArcticGear',
      description: 'Waterproof insulated boots rated for extreme cold weather conditions',
      isNew: true,
      isBestseller: true,
      activityType: 'All Winter Sports',
      skillLevel: 'All Levels',
      temperatureRating: '-40°F',
      features: ['Waterproof', 'Thinsulate', 'Anti-Slip']
    },
    {
      id: 48,
      name: 'Thermal Snowsuit',
      price: '$299.99',
      originalPrice: '$379.99',
      image: '/snowsuit.jpg',
      rating: 4.4,
      reviews: 156,
      category: 'Apparel',
      brand: 'SnowPro',
      description: 'Insulated one-piece snowsuit with waterproof coating and ventilation',
      isNew: false,
      isBestseller: false,
      activityType: 'All Winter Sports',
      skillLevel: 'All Levels',
      temperatureRating: '-30°F',
      features: ['Waterproof', 'Breathable', 'Multiple Pockets']
    },
    {
      id: 49,
      name: 'Ice Skates Professional',
      price: '$229.99',
      originalPrice: '$289.99',
      image: '/ice-skates.jpg',
      rating: 4.7,
      reviews: 89,
      category: 'Ice Skating',
      brand: 'GlidePro',
      description: 'Professional ice skates with stainless steel blades and ankle support',
      isNew: true,
      isBestseller: true,
      activityType: 'Ice Skating',
      skillLevel: 'Intermediate',
      temperatureRating: '-10°F',
      features: ['Stainless Blades', 'Ankle Support', 'Heat-Moldable']
    },
    {
      id: 50,
      name: 'Snowshoe Set',
      price: '$149.99',
      originalPrice: '$189.99',
      image: '/snowshoes.jpg',
      rating: 4.3,
      reviews: 67,
      category: 'Snowshoeing',
      brand: 'TrailMaster',
      description: 'Lightweight aluminum snowshoes with crampons for various snow conditions',
      isNew: false,
      isBestseller: false,
      activityType: 'Snowshoeing',
      skillLevel: 'Beginner',
      temperatureRating: '-20°F',
      features: ['Aluminum Frame', 'Crampons', 'Quick Bindings']
    },
    {
      id: 51,
      name: 'Ski Helmet & Goggles',
      price: '$129.99',
      originalPrice: '$159.99',
      image: '/ski-helmet.jpg',
      rating: 4.8,
      reviews: 234,
      category: 'Safety',
      brand: 'SafeSlope',
      description: 'Certified ski helmet with integrated goggles and ventilation system',
      isNew: true,
      isBestseller: true,
      activityType: 'Skiing',
      skillLevel: 'All Levels',
      temperatureRating: '-20°F',
      features: ['Safety Certified', 'Anti-Fog', 'Adjustable Fit']
    },
    {
      id: 52,
      name: 'Thermal Base Layer Set',
      price: '$79.99',
      originalPrice: '$99.99',
      image: '/base-layer.jpg',
      rating: 4.5,
      reviews: 189,
      category: 'Apparel',
      brand: 'ArcticGear',
      description: 'Merino wool base layer set for maximum warmth and moisture wicking',
      isNew: false,
      isBestseller: true,
      activityType: 'All Winter Sports',
      skillLevel: 'All Levels',
      temperatureRating: '-20°F',
      features: ['Merino Wool', 'Moisture Wicking', 'Odor Resistant']
    },
    {
      id: 53,
      name: 'Ice Climbing Axes',
      price: '$349.99',
      originalPrice: '$429.99',
      image: '/ice-axes.jpg',
      rating: 4.6,
      reviews: 45,
      category: 'Ice Climbing',
      brand: 'SummitPro',
      description: 'Technical ice climbing axes with ergonomic grips and pick systems',
      isNew: true,
      isBestseller: false,
      activityType: 'Ice Climbing',
      skillLevel: 'Advanced',
      temperatureRating: '-25°F',
      features: ['Ergonomic Grip', 'Replaceable Picks', 'Lightweight']
    },
    {
      id: 54,
      name: 'Sled & Toboggan',
      price: '$89.99',
      originalPrice: '$119.99',
      image: '/sled.jpg',
      rating: 4.2,
      reviews: 156,
      category: 'Sledding',
      brand: 'SnowFun',
      description: 'High-speed sled with steering mechanism and comfortable seating',
      isNew: false,
      isBestseller: false,
      activityType: 'Sledding',
      skillLevel: 'Beginner',
      temperatureRating: '-10°F',
      features: ['Steering Mechanism', 'Durable', 'Family Size']
    },
    {
      id: 55,
      name: 'Ski Gloves Professional',
      price: '$69.99',
      originalPrice: '$89.99',
      image: '/ski-gloves.jpg',
      rating: 4.7,
      reviews: 278,
      category: 'Accessories',
      brand: 'SnowPro',
      description: 'Waterproof ski gloves with touchscreen compatibility and insulation',
      isNew: true,
      isBestseller: true,
      activityType: 'Skiing',
      skillLevel: 'All Levels',
      temperatureRating: '-30°F',
      features: ['Waterproof', 'Touchscreen', 'Insulated']
    },
    {
      id: 56,
      name: 'Avalanche Safety Kit',
      price: '$399.99',
      originalPrice: '$499.99',
      image: '/avalanche-kit.jpg',
      rating: 4.9,
      reviews: 34,
      category: 'Safety',
      brand: 'SafeSlope',
      description: 'Complete avalanche safety kit with beacon, probe, and shovel',
      isNew: false,
      isBestseller: true,
      activityType: 'Backcountry',
      skillLevel: 'Advanced',
      temperatureRating: '-20°F',
      features: ['Beacon', 'Probe', 'Shovel', 'Training Included']
    }
  ];

  const winterActivities = [
    {
      name: 'Skiing',
      icon: '⛷️',
      description: 'Skis, Boots & Poles',
      count: '18 products',
      slug:'skiing'
    },
    {
      name: 'Snowboarding',
      icon: '🏂',
      description: 'Boards, Bindings & Gear',
      count: '15 products',
      slug:'snowboarding'
    },
    {
      name: 'Ice Skating',
      icon: '⛸️',
      description: 'Skates & Protective Gear',
      count: '12 products',
      slug:'ice-skating'
    },
    {
      name: 'Snowshoeing',
      icon: '🥾',
      description: 'Snowshoes & Accessories',
      count: '8 products',
      slug:'snowshoeing'
    },
    {
      name: 'Ice Climbing',
      icon: '🧗',
      description: 'Axes, Crampons & Safety',
      count: '6 products',
      slug:'ice-climbing'
    },
    {
      name: 'Sledding',
      icon: '🛷',
      description: 'Sleds & Toboggans',
      count: '10 products',
      slug:'sledding'
    }
  ];

  const filters = {
    category: ['Skiing', 'Snowboarding', 'Ice Skating', 'Snowshoeing', 'Ice Climbing', 'Sledding', 'Apparel', 'Footwear', 'Safety', 'Accessories'],
    priceRange: [
      'Under $50',
      '$50 - $100',
      '$100 - $200',
      '$200 - $500',
      'Above $500'
    ],
    brand: ['SnowPro', 'SlopeMaster', 'ArcticGear', 'GlidePro', 'TrailMaster', 'SafeSlope', 'SummitPro', 'SnowFun'],
    skillLevel: ['Beginner', 'Intermediate', 'Advanced', 'Expert', 'All Levels'],
    temperatureRating: ['-10°F', '-20°F', '-30°F', '-40°F', 'Extreme Cold']
  };

  const toggleFilter = (filterType, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter(item => item !== value)
        : [...prev[filterType], value]
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Winter Sports Equipment
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Conquer the slopes and embrace the cold with premium skiing, snowboarding, and winter adventure gear for every snow condition.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#products"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
              >
                Shop Winter Gear
              </Link>
              <Link
                href="/sports-equipment"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200"
              >
                View All Sports
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Winter Activities */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Winter Sports Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {winterActivities.map((activity, index) => (
              <Link
                key={index}
                href={`/sports-equipment/category/winter-sports/features/${activity.slug}`}
                className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-200">
                  {activity.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{activity.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{activity.description}</p>
                <span className="text-xs text-blue-600 font-medium">{activity.count}</span>
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
                <span className="text-2xl">❄️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Extreme Cold Rated</h3>
              <p className="text-gray-600">All gear tested and certified for performance in sub-zero temperatures.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💧</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Waterproof & Breathable</h3>
              <p className="text-gray-600">Advanced materials that keep you dry while allowing moisture escape.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Safety Certified</h3>
              <p className="text-gray-600">All safety equipment meets international winter sports standards.</p>
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
                Winter Sports Equipment
              </h2>
              <p className="text-gray-600">
                Showing {winterSportsProducts.length} products
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
                <option value="warmth">Warmest First</option>
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

                {/* Activity Type Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Activity Type</h4>
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

                {/* Temperature Rating Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Temperature Rating</h4>
                  <div className="space-y-2">
                    {filters.temperatureRating.map((temp) => (
                      <label key={temp} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.temperatureRating.includes(temp)}
                          onChange={() => toggleFilter('temperatureRating', temp)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{temp}</span>
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
                  onClick={() => setSelectedFilters({ category: [], priceRange: [], brand: [], skillLevel: [], temperatureRating: [] })}
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
                  {winterSportsProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
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
                        <div className="text-4xl">
                          {product.activityType === 'Skiing' ? '⛷️' : 
                           product.activityType === 'Snowboarding' ? '🏂' :
                           product.activityType === 'Ice Skating' ? '⛸️' :
                           product.activityType === 'Snowshoeing' ? '🥾' :
                           product.activityType === 'Ice Climbing' ? '🧗' :
                           product.activityType === 'Sledding' ? '🛷' : '❄️'}
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
                              {product.activityType}
                            </span>
                            <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
                              {product.temperatureRating}
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
                  {winterSportsProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex"
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
                        <div className="text-4xl">
                          {product.activityType === 'Skiing' ? '⛷️' : 
                           product.activityType === 'Snowboarding' ? '🏂' :
                           product.activityType === 'Ice Skating' ? '⛸️' :
                           product.activityType === 'Snowshoeing' ? '🥾' :
                           product.activityType === 'Ice Climbing' ? '🧗' :
                           product.activityType === 'Sledding' ? '🛷' : '❄️'}
                        </div>
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                              <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                                {product.activityType}
                              </span>
                              <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
                                {product.temperatureRating}
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
                          <span className="text-sm text-gray-600">Level: {product.skillLevel}</span>
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

      {/* Safety & Training Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Winter Safety & Training
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Stay safe in extreme conditions with certified equipment and professional training resources.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl mb-3">🛡️</div>
                <h3 className="font-semibold mb-2">Avalanche Safety</h3>
                <p className="text-blue-100 text-sm">Beacons, probes, and safety training for backcountry adventures</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl mb-3">🎓</div>
                <h3 className="font-semibold mb-2">Ski & Snowboard Lessons</h3>
                <p className="text-blue-100 text-sm">Professional instruction for all skill levels and ages</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl mb-3">🔧</div>
                <h3 className="font-semibold mb-2">Gear Maintenance</h3>
                <p className="text-blue-100 text-sm">Waxing, sharpening, and storage tips for winter equipment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Join the Winter Sports Community
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Get snow condition updates, resort recommendations, and exclusive winter gear deals
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-r-lg hover:bg-blue-700 transition-colors duration-200 font-semibold">
              Hit the Slopes
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}