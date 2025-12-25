// app/sports-equipment/category/winter-sports/features/skiing/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Heart, Filter, Grid, List, Snowflake, Shield, Thermometer, Zap } from 'lucide-react';

export default function SkiingPage() {
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    type: [],
    priceRange: [],
    brand: [],
    skillLevel: [],
    temperatureRating: []
  });

  const skiingProducts = [
    {
      id: 11,
      name: 'Professional All-Mountain Skis',
      price: '$699.99',
      originalPrice: '$899.99',
      image: '/all-mountain-skis.jpg',
      rating: 4.7,
      reviews: 93,
      category: 'Skis',
      brand: 'SnowPro',
      description: 'High-performance all-mountain skis with carbon fiber construction for versatile terrain',
      isNew: false,
      isBestseller: true,
      activityType: 'Skiing',
      skillLevel: 'Advanced',
      temperatureRating: '-20°F',
      features: ['Carbon Fiber', 'All-Mountain', 'Adjustable Bindings', 'Quick Edge'],
      type: 'All-Mountain',
      flexRating: 'Stiff',
      waistWidth: '88mm'
    },
    {
      id: 57,
      name: 'Powder Skis - Wide Body',
      price: '$799.99',
      originalPrice: '$999.99',
      image: '/powder-skis.jpg',
      rating: 4.8,
      reviews: 67,
      category: 'Skis',
      brand: 'DeepSnow',
      description: 'Extra-wide powder skis designed for deep snow and off-piste adventures',
      isNew: true,
      isBestseller: false,
      activityType: 'Skiing',
      skillLevel: 'Intermediate',
      temperatureRating: '-25°F',
      features: ['115mm Waist', 'Rockered Tip', 'Powder Specific', 'Lightweight Core'],
      type: 'Powder',
      flexRating: 'Medium-Stiff',
      waistWidth: '115mm'
    },
    {
      id: 58,
      name: 'Racing Skis - Competition',
      price: '$899.99',
      originalPrice: '$1,199.99',
      image: '/racing-skis.jpg',
      rating: 4.9,
      reviews: 45,
      category: 'Skis',
      brand: 'SpeedPro',
      description: 'World Cup racing skis with titanium reinforcement for maximum speed and control',
      isNew: false,
      isBestseller: true,
      activityType: 'Skiing',
      skillLevel: 'Expert',
      temperatureRating: '-15°F',
      features: ['Titanium Layer', 'Race Construction', 'High-Speed Stability', 'World Cup Spec'],
      type: 'Racing',
      flexRating: 'Very Stiff',
      waistWidth: '65mm'
    },
    {
      id: 59,
      name: 'Ski Boots Professional Fit',
      price: '$449.99',
      originalPrice: '$599.99',
      image: '/ski-boots.jpg',
      rating: 4.6,
      reviews: 128,
      category: 'Boots',
      brand: 'SnowPro',
      description: 'Heat-moldable ski boots with customizable fit and advanced walk mode',
      isNew: true,
      isBestseller: true,
      activityType: 'Skiing',
      skillLevel: 'Advanced',
      temperatureRating: '-30°F',
      features: ['Heat-Moldable', '4-Buckle', 'Walk Mode', 'Custom Fit'],
      type: 'Boots',
      flexRating: '130 Flex',
      waistWidth: 'N/A'
    },
    {
      id: 60,
      name: 'Carbon Fiber Ski Poles',
      price: '$129.99',
      originalPrice: '$159.99',
      image: '/ski-poles.jpg',
      rating: 4.5,
      reviews: 89,
      category: 'Poles',
      brand: 'LightSpeed',
      description: 'Ultra-light carbon fiber ski poles with ergonomic grips and quick-release straps',
      isNew: false,
      isBestseller: false,
      activityType: 'Skiing',
      skillLevel: 'All Levels',
      temperatureRating: '-20°F',
      features: ['Carbon Fiber', 'Adjustable', 'Ergonomic Grip', 'Quick Release'],
      type: 'Poles',
      flexRating: 'N/A',
      waistWidth: 'N/A'
    },
    {
      id: 51,
      name: 'Ski Helmet & Goggles Pro',
      price: '$189.99',
      originalPrice: '$229.99',
      image: '/ski-helmet-goggles.jpg',
      rating: 4.8,
      reviews: 234,
      category: 'Safety',
      brand: 'SafeSlope',
      description: 'Certified ski helmet with integrated magnetic goggles and ventilation system',
      isNew: true,
      isBestseller: true,
      activityType: 'Skiing',
      skillLevel: 'All Levels',
      temperatureRating: '-20°F',
      features: ['Magnetic Goggles', 'Safety Certified', 'Anti-Fog', 'Adjustable Fit'],
      type: 'Safety',
      flexRating: 'N/A',
      waistWidth: 'N/A'
    },
    {
      id: 61,
      name: 'Ski Bindings - All Mountain',
      price: '$299.99',
      originalPrice: '$379.99',
      image: '/ski-bindings.jpg',
      rating: 4.7,
      reviews: 76,
      category: 'Bindings',
      brand: 'SnowPro',
      description: 'High-performance bindings with multi-directional release and vibration damping',
      isNew: false,
      isBestseller: true,
      activityType: 'Skiing',
      skillLevel: 'Intermediate',
      temperatureRating: '-20°F',
      features: ['Multi-Release', 'Vibration Damp', 'Easy Step-In', 'DIN Certified'],
      type: 'Bindings',
      flexRating: 'N/A',
      waistWidth: 'N/A'
    },
    {
      id: 55,
      name: 'Professional Ski Gloves',
      price: '$89.99',
      originalPrice: '$119.99',
      image: '/ski-gloves-pro.jpg',
      rating: 4.7,
      reviews: 278,
      category: 'Accessories',
      brand: 'SnowPro',
      description: 'Waterproof ski gloves with touchscreen compatibility and advanced insulation',
      isNew: true,
      isBestseller: true,
      activityType: 'Skiing',
      skillLevel: 'All Levels',
      temperatureRating: '-30°F',
      features: ['Waterproof', 'Touchscreen', 'Advanced Insulation', 'Wrist Strap'],
      type: 'Accessories',
      flexRating: 'N/A',
      waistWidth: 'N/A'
    },
    {
      id: 62,
      name: 'Ski Backpack - Avalanche Airbag',
      price: '$599.99',
      originalPrice: '$749.99',
      image: '/ski-backpack.jpg',
      rating: 4.9,
      reviews: 52,
      category: 'Safety',
      brand: 'SafeSlope',
      description: 'Avalanche airbag backpack with integrated safety system and gear compartments',
      isNew: true,
      isBestseller: false,
      activityType: 'Skiing',
      skillLevel: 'Advanced',
      temperatureRating: '-20°F',
      features: ['Avalanche Airbag', 'Multiple Compartments', 'Hydration Compatible', 'Safety Orange'],
      type: 'Safety',
      flexRating: 'N/A',
      waistWidth: 'N/A'
    },
    {
      id: 63,
      name: 'Ski Tuning Kit Professional',
      price: '$149.99',
      originalPrice: '$199.99',
      image: '/ski-tuning-kit.jpg',
      rating: 4.6,
      reviews: 91,
      category: 'Maintenance',
      brand: 'EdgeMaster',
      description: 'Complete ski tuning kit with edge sharpener, wax, and maintenance tools',
      isNew: false,
      isBestseller: true,
      activityType: 'Skiing',
      skillLevel: 'All Levels',
      temperatureRating: 'N/A',
      features: ['Edge Sharpener', 'Multiple Waxes', 'Scraper', 'Storage Case'],
      type: 'Maintenance',
      flexRating: 'N/A',
      waistWidth: 'N/A'
    },
    {
      id: 64,
      name: 'Ski Bag Travel Case',
      price: '$129.99',
      originalPrice: '$169.99',
      image: '/ski-bag.jpg',
      rating: 4.4,
      reviews: 134,
      category: 'Accessories',
      brand: 'TravelPro',
      description: 'Heavy-duty ski travel bag with wheels and multiple storage compartments',
      isNew: true,
      isBestseller: false,
      activityType: 'Skiing',
      skillLevel: 'All Levels',
      temperatureRating: 'N/A',
      features: ['Wheels', 'Multiple Compartments', 'TSA Approved', 'Water Resistant'],
      type: 'Accessories',
      flexRating: 'N/A',
      waistWidth: 'N/A'
    },
    {
      id: 65,
      name: 'Heated Ski Socks',
      price: '$79.99',
      originalPrice: '$99.99',
      image: '/heated-socks.jpg',
      rating: 4.5,
      reviews: 167,
      category: 'Accessories',
      brand: 'WarmFeet',
      description: 'Battery-powered heated socks with multiple heat settings and moisture wicking',
      isNew: true,
      isBestseller: true,
      activityType: 'Skiing',
      skillLevel: 'All Levels',
      temperatureRating: '-40°F',
      features: ['Battery Powered', '3 Heat Settings', 'Moisture Wicking', 'USB Charging'],
      type: 'Accessories',
      flexRating: 'N/A',
      waistWidth: 'N/A'
    }
  ];

  const skiingCategories = [
    {
      name: 'All-Mountain Skis',
      icon: '⛷️',
      description: 'Versatile skis for all conditions',
      count: '8 products',
      slug: 'all-mountain'
    },
    {
      name: 'Powder Skis',
      icon: '🌨️',
      description: 'Wide skis for deep snow',
      count: '5 products',
      slug: 'powder'
    },
    {
      name: 'Racing Skis',
      icon: '🏆',
      description: 'High-performance competition skis',
      count: '3 products',
      slug: 'racing'
    },
    {
      name: 'Ski Boots',
      icon: '👢',
      description: 'Performance and comfort',
      count: '6 products',
      slug: 'boots'
    },
    {
      name: 'Safety Gear',
      icon: '🛡️',
      description: 'Helmets and protection',
      count: '7 products',
      slug: 'safety'
    },
    {
      name: 'Accessories',
      icon: '🎒',
      description: 'Poles, bags, and more',
      count: '12 products',
      slug: 'accessories'
    }
  ];

  const skiingTypes = [
    'All-Mountain', 'Powder', 'Racing', 'Carving', 'Freestyle', 'Touring'
  ];

  const filters = {
    type: ['Skis', 'Boots', 'Bindings', 'Poles', 'Safety', 'Accessories', 'Maintenance'],
    priceRange: [
      'Under $100',
      '$100 - $250',
      '$250 - $500',
      '$500 - $1,000',
      'Above $1,000'
    ],
    brand: ['SnowPro', 'DeepSnow', 'SpeedPro', 'LightSpeed', 'SafeSlope', 'EdgeMaster', 'TravelPro', 'WarmFeet'],
    skillLevel: ['Beginner', 'Intermediate', 'Advanced', 'Expert', 'All Levels'],
    temperatureRating: ['-10°F', '-20°F', '-30°F', '-40°F', 'Extreme Cold']
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
      {/* Navigation Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/sports-equipment" className="hover:text-blue-600">
              Sports Equipment
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/sports-equipment/winter-sports" className="hover:text-blue-600">
              Winter Sports
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-blue-600 font-semibold">Skiing</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Skiing Equipment
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Conquer the mountains with premium skiing gear. From all-mountain performance to deep powder adventures, 
              find everything you need for the ultimate skiing experience.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#products"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 transform hover:scale-105"
              >
                Shop Ski Gear
              </Link>
              <Link
                href="/sports-equipment/winter-sports"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-200"
              >
                View Winter Sports
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skiing Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Skiing Categories
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Explore our complete range of skiing equipment for every discipline and skill level
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {skiingCategories.map((category, index) => (
              <Link
                key={index}
                href={`#${category.slug}`}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 group hover:transform hover:-translate-y-2"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
                  {category.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{category.description}</p>
                <span className="text-xs text-blue-600 font-semibold">{category.count}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Skiing Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">High Performance</h3>
              <p className="text-gray-600">Engineered for speed, control, and responsiveness on all terrain</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Thermometer className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Extreme Cold Rated</h3>
              <p className="text-gray-600">Tested and certified for performance in sub-zero conditions</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Safety Certified</h3>
              <p className="text-gray-600">All equipment meets international skiing safety standards</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Snowflake className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Tested</h3>
              <p className="text-gray-600">Developed and tested by professional skiers and instructors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Products Section */}
      <section id="products" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with Controls */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">
                Skiing Equipment
              </h2>
              <p className="text-gray-600 text-lg">
                {skiingProducts.length} premium products for every skiing adventure
              </p>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 lg:mt-0">
              {/* View Mode Toggle */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300 min-w-40"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="warmth">Warmest First</option>
                <option value="performance">Highest Performance</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-80 flex-shrink-0">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-4">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Filter className="w-6 h-6 mr-3" />
                  Filter Products
                </h3>

                {/* Product Type Filter */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Product Type</h4>
                  <div className="space-y-3">
                    {filters.type.map((type) => (
                      <label key={type} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.type.includes(type)}
                          onChange={() => toggleFilter('type', type)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-3 text-gray-700">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Skiing Type Filter */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Skiing Type</h4>
                  <div className="space-y-3">
                    {skiingTypes.map((type) => (
                      <label key={type} className="flex items-center">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-3 text-gray-700">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range Filter */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Price Range</h4>
                  <div className="space-y-3">
                    {filters.priceRange.map((range) => (
                      <label key={range} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.priceRange.includes(range)}
                          onChange={() => toggleFilter('priceRange', range)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-3 text-gray-700">{range}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Skill Level Filter */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Skill Level</h4>
                  <div className="space-y-3">
                    {filters.skillLevel.map((level) => (
                      <label key={level} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.skillLevel.includes(level)}
                          onChange={() => toggleFilter('skillLevel', level)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-3 text-gray-700">{level}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                <button
                  onClick={() => setSelectedFilters({ type: [], priceRange: [], brand: [], skillLevel: [], temperatureRating: [] })}
                  className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition-colors duration-200 font-semibold"
                >
                  Clear All Filters
                </button>
              </div>
            </div>

            {/* Products Grid */}
            <div className="flex-1">
              {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                  {skiingProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                    >
                      <div className="relative h-72 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-8">
                        {product.isNew && (
                          <span className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            New
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            Bestseller
                          </span>
                        )}
                        <div className="text-5xl transform group-hover:scale-110 transition-transform duration-300">
                          {product.type === 'Skis' ? '🎿' :
                           product.type === 'Boots' ? '👢' :
                           product.type === 'Safety' ? '🛡️' :
                           product.type === 'Accessories' ? '🧤' : '⛷️'}
                        </div>
                        <button className="absolute top-4 right-4 bg-white/80 hover:bg-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-lg">
                          <Heart className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="font-bold text-lg text-gray-900">{product.name}</h3>
                          <div className="flex flex-col gap-2 items-end">
                            <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full font-semibold">
                              {product.type}
                            </span>
                            <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full font-semibold">
                              {product.temperatureRating}
                            </span>
                          </div>
                        </div>
                        <p className="text-gray-600 mb-4">{product.description}</p>
                        
                        {/* Technical Specs */}
                        {(product.flexRating !== 'N/A' || product.waistWidth !== 'N/A') && (
                          <div className="flex gap-4 mb-4 text-xs">
                            {product.flexRating !== 'N/A' && (
                              <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                Flex: {product.flexRating}
                              </span>
                            )}
                            {product.waistWidth !== 'N/A' && (
                              <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                Width: {product.waistWidth}
                              </span>
                            )}
                          </div>
                        )}
                        
                        {/* Features Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {product.features.slice(0, 3).map((feature, index) => (
                            <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                              {feature}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center mb-4">
                          <div className="flex items-center">
                            <Star className="w-5 h-5 text-amber-400 fill-current" />
                            <span className="ml-1 text-gray-600 font-semibold">
                              {product.rating} ({product.reviews} reviews)
                            </span>
                          </div>
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
                          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold hover:transform hover:scale-105">
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
                  {skiingProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex"
                    >
                      <div className="w-56 relative bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-8">
                        {product.isNew && (
                          <span className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            New
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            Bestseller
                          </span>
                        )}
                        <div className="text-5xl">
                          {product.type === 'Skis' ? '🎿' :
                           product.type === 'Boots' ? '👢' :
                           product.type === 'Safety' ? '🛡️' :
                           product.type === 'Accessories' ? '🧤' : '⛷️'}
                        </div>
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
                              <span className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-semibold">
                                {product.type}
                              </span>
                              <span className="text-sm bg-red-100 text-red-600 px-3 py-1 rounded-full font-semibold">
                                {product.temperatureRating}
                              </span>
                            </div>
                            <p className="text-gray-600 text-lg mb-4">{product.description}</p>
                            
                            {/* Technical Specs */}
                            {(product.flexRating !== 'N/A' || product.waistWidth !== 'N/A') && (
                              <div className="flex gap-4 mb-4">
                                {product.flexRating !== 'N/A' && (
                                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-lg text-sm">
                                    <strong>Flex:</strong> {product.flexRating}
                                  </span>
                                )}
                                {product.waistWidth !== 'N/A' && (
                                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-lg text-sm">
                                    <strong>Width:</strong> {product.waistWidth}
                                  </span>
                                )}
                              </div>
                            )}
                            
                            {/* Features Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                              {product.features.map((feature, index) => (
                                <span key={index} className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>
                          <button className="bg-white hover:bg-gray-50 p-3 rounded-full shadow-lg ml-4">
                            <Heart className="w-5 h-5 text-gray-600" />
                          </button>
                        </div>
                        
                        <div className="flex items-center mb-6">
                          <div className="flex items-center mr-8">
                            <Star className="w-5 h-5 text-amber-400 fill-current" />
                            <span className="ml-2 text-gray-600 font-semibold">
                              {product.rating} ({product.reviews} reviews)
                            </span>
                          </div>
                          <span className="text-gray-600 mr-4"><strong>Brand:</strong> {product.brand}</span>
                          <span className="text-gray-600"><strong>Level:</strong> {product.skillLevel}</span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                            {product.originalPrice && (
                              <span className="ml-3 text-lg text-gray-500 line-through">
                                {product.originalPrice}
                              </span>
                            )}
                          </div>
                          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold text-lg hover:transform hover:scale-105">
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

      {/* Skiing Tips & Guide */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Skiing Pro Tips & Guides
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Elevate your skiing experience with expert advice and professional guidance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="font-bold text-lg mb-3">Gear Selection</h3>
              <p className="text-blue-100">Choose the right equipment based on your skill level and skiing style</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="font-bold text-lg mb-3">Performance Tuning</h3>
              <p className="text-blue-100">Keep your skis in peak condition with proper maintenance</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-3xl mb-4">🛡️</div>
              <h3 className="font-bold text-lg mb-3">Safety First</h3>
              <p className="text-blue-100">Essential safety tips and equipment for mountain adventures</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-3xl mb-4">🏔️</div>
              <h3 className="font-bold text-lg mb-3">Technique Mastery</h3>
              <p className="text-blue-100">Improve your form and conquer challenging terrain</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Join the Skiing Community
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Get the latest gear reviews, mountain conditions, and exclusive skiing deals delivered to your inbox
          </p>
          <div className="flex max-w-md mx-auto shadow-lg rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 border-0 focus:outline-none focus:ring-2 focus:ring-blue-300 text-lg"
            />
            <button className="bg-blue-600 text-white px-8 py-4 hover:bg-blue-700 transition-colors duration-200 font-semibold text-lg">
              Join Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}