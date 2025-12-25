// app/sports-equipment/water-sports/paddleboarding/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Heart, Filter, Grid, List } from 'lucide-react';

export default function PaddleboardingPage() {
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    priceRange: [],
    brand: [],
    skillLevel: [],
    boardType: [],
    waterType: []
  });

  const paddleboardingProducts = [
    {
      id: 10,
      name: 'Inflatable Stand Up Paddleboard',
      price: '$599.99',
      originalPrice: '$749.99',
      image: '/paddleboard.jpg',
      rating: 4.8,
      reviews: 67,
      category: 'SUP Boards',
      brand: 'WaveRider',
      description: 'Premium inflatable SUP with adjustable paddle and carry bag',
      isNew: true,
      isBestseller: false,
      activityType: 'All-Around',
      skillLevel: 'Intermediate',
      boardType: 'Inflatable',
      waterType: ['Lake', 'Ocean', 'River'],
      features: ['Inflatable', 'Non-Slip Deck', 'Carry Bag', 'Adjustable Paddle'],
      dimensions: '10\'6" x 32" x 6"',
      weightCapacity: '285 lbs'
    },
    {
      id: 58,
      name: 'Touring Paddleboard',
      price: '$899.99',
      originalPrice: '$1,099.99',
      image: '/touring-sup.jpg',
      rating: 4.7,
      reviews: 45,
      category: 'SUP Boards',
      brand: 'BlueWater',
      description: 'Fast touring SUP designed for long distance paddling and speed',
      isNew: false,
      isBestseller: true,
      activityType: 'Touring',
      skillLevel: 'Advanced',
      boardType: 'Hard Board',
      waterType: ['Lake', 'Ocean'],
      features: ['Displacement Hull', 'Tracking Fin', 'Lightweight', 'Fast'],
      dimensions: '12\'6" x 30" x 6"',
      weightCapacity: '250 lbs'
    },
    {
      id: 59,
      name: 'Yoga Paddleboard',
      price: '$699.99',
      originalPrice: '$849.99',
      image: '/yoga-sup.jpg',
      rating: 4.6,
      reviews: 89,
      category: 'SUP Boards',
      brand: 'PeacePaddle',
      description: 'Extra wide and stable board perfect for yoga and fitness',
      isNew: true,
      isBestseller: false,
      activityType: 'Yoga',
      skillLevel: 'Beginner',
      boardType: 'Inflatable',
      waterType: ['Lake', 'Calm Ocean'],
      features: ['Extra Wide', 'Soft Deck', 'Yoga Mat', 'Stable'],
      dimensions: '11\' x 34" x 6"',
      weightCapacity: '300 lbs'
    },
    {
      id: 60,
      name: 'Carbon Fiber Paddle',
      price: '$249.99',
      originalPrice: '$299.99',
      image: '/carbon-paddle.jpg',
      rating: 4.9,
      reviews: 34,
      category: 'Paddles',
      brand: 'ProPaddle',
      description: 'Ultra-light carbon fiber adjustable paddle with ergonomic grip',
      isNew: true,
      isBestseller: true,
      activityType: 'All Types',
      skillLevel: 'All Levels',
      boardType: 'Accessory',
      waterType: ['All Water Types'],
      features: ['Carbon Fiber', 'Adjustable', 'Lightweight', 'Ergonomic'],
      dimensions: 'Adjustable 72-86"',
      weight: '1.2 lbs'
    },
    {
      id: 61,
      name: 'Fishing Paddleboard',
      price: '$1,199.99',
      originalPrice: '$1,499.99',
      image: '/fishing-sup.jpg',
      rating: 4.5,
      reviews: 56,
      category: 'SUP Boards',
      brand: 'AnglerPro',
      description: 'Fishing SUP with rod holders, cooler attachment, and anchor system',
      isNew: false,
      isBestseller: true,
      activityType: 'Fishing',
      skillLevel: 'Intermediate',
      boardType: 'Inflatable',
      waterType: ['Lake', 'River', 'Calm Ocean'],
      features: ['Rod Holders', 'Anchor System', 'Cooler Mount', 'Stable Platform'],
      dimensions: '11\'6" x 36" x 6"',
      weightCapacity: '400 lbs'
    },
    {
      id: 62,
      name: 'SUP Leash & PFD',
      price: '$79.99',
      originalPrice: '$99.99',
      image: '/sup-safety.jpg',
      rating: 4.7,
      reviews: 123,
      category: 'Safety Gear',
      brand: 'SafeWater',
      description: 'Safety kit including coiled leash and USCG-approved PFD',
      isNew: false,
      isBestseller: true,
      activityType: 'All Types',
      skillLevel: 'All Levels',
      boardType: 'Accessory',
      waterType: ['All Water Types'],
      features: ['Coiled Leash', 'USCG PFD', 'Quick Release', 'Comfort Fit'],
      dimensions: 'Universal Fit',
      weight: '2.5 lbs'
    },
    {
      id: 63,
      name: 'Kids Paddleboard',
      price: '$349.99',
      originalPrice: '$429.99',
      image: '/kids-sup.jpg',
      rating: 4.8,
      reviews: 78,
      category: 'SUP Boards',
      brand: 'WaveRider',
      description: 'Smaller, stable inflatable SUP designed for children and youth',
      isNew: true,
      isBestseller: false,
      activityType: 'Recreational',
      skillLevel: 'Beginner',
      boardType: 'Inflatable',
      waterType: ['Lake', 'Calm Water'],
      features: ['Kid Size', 'Extra Stable', 'Safety Handle', 'Bright Colors'],
      dimensions: '8\' x 30" x 5"',
      weightCapacity: '150 lbs'
    },
    {
      id: 64,
      name: 'SUP Roof Rack',
      price: '$129.99',
      originalPrice: '$159.99',
      image: '/sup-rack.jpg',
      rating: 4.4,
      reviews: 67,
      category: 'Transport',
      brand: 'CarryPro',
      description: 'Universal roof rack system for secure board transportation',
      isNew: false,
      isBestseller: true,
      activityType: 'All Types',
      skillLevel: 'All Levels',
      boardType: 'Accessory',
      waterType: ['N/A'],
      features: ['Universal Fit', 'Locking System', 'Padding', 'Easy Install'],
      dimensions: 'Adjustable',
      weightCapacity: '150 lbs'
    },
    {
      id: 65,
      name: 'Electric SUP Pump',
      price: '$149.99',
      originalPrice: '$189.99',
      image: '/sup-pump.jpg',
      rating: 4.6,
      reviews: 89,
      category: 'Accessories',
      brand: 'AirFlow',
      description: 'High-speed electric pump for quick and easy board inflation',
      isNew: true,
      isBestseller: false,
      activityType: 'All Types',
      skillLevel: 'All Levels',
      boardType: 'Accessory',
      waterType: ['N/A'],
      features: ['Fast Inflation', 'Auto Stop', '12V DC', 'Portable'],
      dimensions: '8" x 6" x 4"',
      weight: '3.8 lbs'
    },
    {
      id: 66,
      name: 'SUP Dry Bag',
      price: '$39.99',
      originalPrice: '$49.99',
      image: '/sup-drybag.jpg',
      rating: 4.5,
      reviews: 156,
      category: 'Accessories',
      brand: 'DryTech',
      description: 'Waterproof dry bag with shoulder strap for gear protection',
      isNew: false,
      isBestseller: true,
      activityType: 'All Types',
      skillLevel: 'All Levels',
      boardType: 'Accessory',
      waterType: ['All Water Types'],
      features: ['20L Capacity', 'Waterproof', 'Shoulder Strap', 'Transparent'],
      dimensions: '18" x 10"',
      weight: '0.6 lbs'
    },
    {
      id: 67,
      name: 'Whitewater Paddleboard',
      price: '$1,099.99',
      originalPrice: '$1,299.99',
      image: '/whitewater-sup.jpg',
      rating: 4.7,
      reviews: 23,
      category: 'SUP Boards',
      brand: 'RapidRider',
      description: 'Durable board designed for river running and whitewater adventures',
      isNew: true,
      isBestseller: false,
      activityType: 'Whitewater',
      skillLevel: 'Advanced',
      boardType: 'Hard Board',
      waterType: ['River', 'Rapids'],
      features: ['Reinforced', 'Maneuverable', 'Grab Handles', 'Durable'],
      dimensions: '9\'6" x 34" x 5"',
      weightCapacity: '275 lbs'
    },
    {
      id: 68,
      name: 'SUP Repair Kit',
      price: '$29.99',
      originalPrice: '$39.99',
      image: '/repair-kit.jpg',
      rating: 4.3,
      reviews: 45,
      category: 'Accessories',
      brand: 'FixIt',
      description: 'Complete repair kit for inflatable SUP punctures and damage',
      isNew: false,
      isBestseller: true,
      activityType: 'All Types',
      skillLevel: 'All Levels',
      boardType: 'Accessory',
      waterType: ['N/A'],
      features: ['Patch Kit', 'Glue', 'Valve Tool', 'Instructions'],
      dimensions: '6" x 4" x 2"',
      weight: '0.8 lbs'
    }
  ];

  const paddleboardingCategories = [
    {
      name: 'SUP Boards',
      icon: '🛶',
      description: 'Inflatable & Hard Boards',
      count: '7 products',
      slug: 'sup-boards'
    },
    {
      name: 'Paddles',
      icon: '🚣',
      description: 'Carbon & Aluminum',
      count: '5 products',
      slug: 'paddles'
    },
    {
      name: 'Safety Gear',
      icon: '🛡️',
      description: 'PFDs & Leashes',
      count: '8 products',
      slug: 'safety-gear'
    },
    {
      name: 'Accessories',
      icon: '🎒',
      description: 'Pumps & Bags',
      count: '12 products',
      slug: 'accessories'
    },
    {
      name: 'Transport',
      icon: '🚗',
      description: 'Racks & Carts',
      count: '4 products',
      slug: 'transport'
    },
    {
      name: 'Apparel',
      icon: '👕',
      description: 'Rash Guards & Shoes',
      count: '6 products',
      slug: 'apparel'
    }
  ];

  const filters = {
    category: ['SUP Boards', 'Paddles', 'Safety Gear', 'Accessories', 'Transport', 'Apparel'],
    priceRange: [
      'Under $100',
      '$100 - $300',
      '$300 - $600',
      '$600 - $1,000',
      'Above $1,000'
    ],
    brand: ['WaveRider', 'BlueWater', 'PeacePaddle', 'ProPaddle', 'AnglerPro', 'SafeWater', 'RapidRider'],
    skillLevel: ['Beginner', 'Intermediate', 'Advanced', 'All Levels'],
    boardType: ['Inflatable', 'Hard Board', 'All-Around', 'Touring', 'Yoga', 'Fishing', 'Whitewater'],
    waterType: ['Lake', 'Ocean', 'River', 'Calm Water', 'Whitewater', 'All Water Types'],
    activityType: ['All-Around', 'Touring', 'Yoga', 'Fishing', 'Whitewater', 'Recreational']
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
      <section className="bg-gradient-to-r from-teal-600 to-emerald-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Paddleboarding Equipment
            </h1>
            <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
              Glide across the water with premium paddleboards, paddles, and gear for every adventure - from serene lakes to ocean waves.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#products"
                className="bg-white text-teal-600 px-6 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors duration-200"
              >
                Shop Paddleboards
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

      {/* Paddleboarding Categories */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Paddleboarding Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {paddleboardingCategories.map((category, index) => (
              <Link
                key={index}
                href={`/sports-equipment/water-sports/paddleboarding/${category.slug}`}
                className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-200">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{category.description}</p>
                <span className="text-xs text-teal-600 font-medium">{category.count}</span>
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
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎒</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Portable & Inflatable</h3>
              <p className="text-gray-600">High-pressure inflatable boards that pack down for easy transport and storage.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Setup</h3>
              <p className="text-gray-600">Electric pumps and easy assembly get you on the water in minutes.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Safety Included</h3>
              <p className="text-gray-600">All boards include or recommend proper safety gear and leashes.</p>
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
                Paddleboarding Equipment
              </h2>
              <p className="text-gray-600">
                Showing {paddleboardingProducts.length} products
              </p>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 lg:mt-0">
              {/* View Mode Toggle */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-teal-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-teal-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-300"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="stability">Stability Rating</option>
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
                          className="rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Board Type Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Board Type</h4>
                  <div className="space-y-2">
                    {filters.boardType.map((type) => (
                      <label key={type} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.boardType.includes(type)}
                          onChange={() => toggleFilter('boardType', type)}
                          className="rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{type}</span>
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
                          className="rounded border-gray-300 text-teal-600 focus:ring-teal-500"
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
                          className="rounded border-gray-300 text-teal-600 focus:ring-teal-500"
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
                          className="rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{level}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Water Type Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Water Type</h4>
                  <div className="space-y-2">
                    {filters.waterType.map((waterType) => (
                      <label key={waterType} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.waterType.includes(waterType)}
                          onChange={() => toggleFilter('waterType', waterType)}
                          className="rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{waterType}</span>
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
                          className="rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                <button
                  onClick={() => setSelectedFilters({ category: [], priceRange: [], brand: [], skillLevel: [], boardType: [], waterType: [] })}
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
                  {paddleboardingProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                    >
                      <div className="relative h-64 bg-gradient-to-br from-teal-50 to-emerald-100 flex items-center justify-center">
                        {product.isNew && (
                          <span className="absolute top-3 left-3 bg-teal-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            New
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="absolute top-3 left-3 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Bestseller
                          </span>
                        )}
                        <div className="text-4xl">
                          {product.category === 'SUP Boards' ? '🛶' : 
                           product.category === 'Paddles' ? '🚣' :
                           product.category === 'Safety Gear' ? '🛡️' :
                           product.category === 'Accessories' ? '🎒' :
                           product.category === 'Transport' ? '🚗' : '👕'}
                        </div>
                        <button className="absolute top-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <Heart className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-gray-900">{product.name}</h3>
                          <div className="flex flex-col gap-1 items-end">
                            <span className="text-xs bg-teal-100 text-teal-600 px-2 py-1 rounded-full">
                              {product.category}
                            </span>
                            <span className="text-xs bg-emerald-100 text-emerald-600 px-2 py-1 rounded-full">
                              {product.skillLevel}
                            </span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                        
                        {/* Specifications */}
                        <div className="grid grid-cols-2 gap-2 mb-3 text-xs text-gray-500">
                          {product.dimensions && (
                            <div>Size: {product.dimensions}</div>
                          )}
                          {product.weightCapacity && (
                            <div>Capacity: {product.weightCapacity}</div>
                          )}
                          {product.weight && (
                            <div>Weight: {product.weight}</div>
                          )}
                        </div>
                        
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
                          <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                            {product.boardType}
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
                          <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors duration-200 text-sm font-semibold">
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
                  {paddleboardingProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex"
                    >
                      <div className="w-48 relative bg-gradient-to-br from-teal-50 to-emerald-100 flex items-center justify-center">
                        {product.isNew && (
                          <span className="absolute top-3 left-3 bg-teal-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            New
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="absolute top-3 left-3 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Bestseller
                          </span>
                        )}
                        <div className="text-4xl">
                          {product.category === 'SUP Boards' ? '🛶' : 
                           product.category === 'Paddles' ? '🚣' :
                           product.category === 'Safety Gear' ? '🛡️' :
                           product.category === 'Accessories' ? '🎒' :
                           product.category === 'Transport' ? '🚗' : '👕'}
                        </div>
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                              <span className="text-xs bg-teal-100 text-teal-600 px-2 py-1 rounded-full">
                                {product.category}
                              </span>
                              <span className="text-xs bg-emerald-100 text-emerald-600 px-2 py-1 rounded-full">
                                {product.skillLevel}
                              </span>
                              <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                                {product.boardType}
                              </span>
                            </div>
                            <p className="text-gray-600 mb-3">{product.description}</p>
                            
                            {/* Specifications */}
                            <div className="grid grid-cols-3 gap-4 mb-3 text-sm text-gray-500">
                              {product.dimensions && (
                                <div><strong>Size:</strong> {product.dimensions}</div>
                              )}
                              {product.weightCapacity && (
                                <div><strong>Capacity:</strong> {product.weightCapacity}</div>
                              )}
                              {product.weight && (
                                <div><strong>Weight:</strong> {product.weight}</div>
                              )}
                            </div>
                            
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
                          <span className="text-sm text-gray-600">Water Type: {product.waterType.join(', ')}</span>
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
                          <button className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors duration-200 font-semibold">
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

      {/* Types of Paddleboarding Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-emerald-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Types of Paddleboarding
            </h2>
            <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
              Discover the perfect paddleboarding style for your adventure and skill level.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl mb-3">🌊</div>
                <h3 className="font-semibold mb-2">All-Around</h3>
                <p className="text-teal-100 text-sm">Versatile boards perfect for beginners and casual paddling</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl mb-3">🚀</div>
                <h3 className="font-semibold mb-2">Touring</h3>
                <p className="text-teal-100 text-sm">Long, fast boards designed for distance and speed</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl mb-3">🧘</div>
                <h3 className="font-semibold mb-2">Yoga & Fitness</h3>
                <p className="text-teal-100 text-sm">Extra wide, stable platforms for yoga and exercises</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl mb-3">🎣</div>
                <h3 className="font-semibold mb-2">Fishing</h3>
                <p className="text-teal-100 text-sm">Stable boards with fishing accessories and mounts</p>
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
              Paddleboard Care & Maintenance
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Keep your paddleboard in perfect condition with these essential care tips.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-2xl mb-3">💧</div>
                <h3 className="font-semibold mb-2">Rinse After Use</h3>
                <p className="text-gray-600 text-sm">Always rinse with fresh water, especially after saltwater use</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-2xl mb-3">🌬️</div>
                <h3 className="font-semibold mb-2">Proper Drying</h3>
                <p className="text-gray-600 text-sm">Fully dry before storage to prevent mold and mildew</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-2xl mb-3">🛡️</div>
                <h3 className="font-semibold mb-2">UV Protection</h3>
                <p className="text-gray-600 text-sm">Store away from direct sunlight to prevent material degradation</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-2xl mb-3">🔧</div>
                <h3 className="font-semibold mb-2">Regular Inspection</h3>
                <p className="text-gray-600 text-sm">Check for leaks, wear, and valve maintenance regularly</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Join the Paddleboarding Community
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Get paddling tips, destination guides, and exclusive deals on the latest paddleboarding gear
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-300"
            />
            <button className="bg-teal-600 text-white px-6 py-3 rounded-r-lg hover:bg-teal-700 transition-colors duration-200 font-semibold">
              Paddle On
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}