// app/sports-equipment/team-sports/basketball/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Heart, Filter, Grid, List } from 'lucide-react';

export default function BasketballPage() {
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    priceRange: [],
    brand: []
  });

  const basketballProducts = [
    {
      id: 1,
      name: 'Professional Basketball Set',
      price: '$299.99',
      originalPrice: '$399.99',
      image: '/basketball-set.jpg',
      rating: 4.8,
      reviews: 156,
      category: 'Complete Sets',
      brand: 'ProCourt',
      description: 'Complete basketball set with adjustable hoop, premium ball, and court markers',
      isNew: true,
      isBestseller: true,
      features: ['Adjustable height', 'Weather resistant', 'Professional grip ball']
    },
    {
      id: 2,
      name: 'Professional Game Basketball',
      price: '$89.99',
      originalPrice: '$119.99',
      image: '/basketball-ball.jpg',
      rating: 4.7,
      reviews: 203,
      category: 'Balls',
      brand: 'Spalding',
      description: 'Official NBA game basketball with premium leather',
      isNew: false,
      isBestseller: true,
      features: ['Official size', 'Premium leather', 'Moisture-wicking']
    },
    {
      id: 3,
      name: 'Adjustable Basketball Hoop',
      price: '$499.99',
      originalPrice: '$599.99',
      image: '/basketball-hoop.jpg',
      rating: 4.6,
      reviews: 89,
      category: 'Hoops & Goals',
      brand: 'Lifetime',
      description: 'Professional-grade adjustable hoop with tempered glass backboard',
      isNew: false,
      isBestseller: false,
      features: ['Tempered glass', 'Height adjustable', 'Professional breakaway rim']
    },
    {
      id: 4,
      name: 'Basketball Shoes - Pro Model',
      price: '$129.99',
      originalPrice: '$159.99',
      image: '/basketball-shoes.jpg',
      rating: 4.5,
      reviews: 312,
      category: 'Footwear',
      brand: 'Nike',
      description: 'High-performance basketball shoes with superior ankle support',
      isNew: true,
      isBestseller: true,
      features: ['Ankle support', 'Cushioned sole', 'Breathable material']
    },
    {
      id: 5,
      name: 'Team Basketball Jerseys (Set of 12)',
      price: '$199.99',
      originalPrice: '$249.99',
      image: '/basketball-jerseys.jpg',
      rating: 4.4,
      reviews: 67,
      category: 'Apparel',
      brand: 'Champion',
      description: 'Complete set of team jerseys with moisture-wicking technology',
      isNew: false,
      isBestseller: false,
      features: ['Moisture-wicking', 'Customizable', 'Set of 12']
    },
    {
      id: 6,
      name: 'Portable Basketball System',
      price: '$179.99',
      originalPrice: '$229.99',
      image: '/portable-hoop.jpg',
      rating: 4.3,
      reviews: 145,
      category: 'Hoops & Goals',
      brand: 'Spalding',
      description: 'Portable basketball system with base for easy mobility',
      isNew: false,
      isBestseller: true,
      features: ['Portable base', 'Easy assembly', 'All-weather net']
    },
    {
      id: 7,
      name: 'Basketball Training Cones',
      price: '$24.99',
      originalPrice: '$34.99',
      image: '/training-cones.jpg',
      rating: 4.7,
      reviews: 89,
      category: 'Training Equipment',
      brand: 'ProActive',
      description: 'Set of 12 training cones for agility and dribbling drills',
      isNew: true,
      isBestseller: false,
      features: ['Set of 12', 'Durable plastic', 'Stackable design']
    },
    {
      id: 8,
      name: 'Basketball Pump with Gauge',
      price: '$19.99',
      originalPrice: '$29.99',
      image: '/basketball-pump.jpg',
      rating: 4.2,
      reviews: 178,
      category: 'Accessories',
      brand: 'Wilson',
      description: 'Professional air pump with pressure gauge for perfect ball inflation',
      isNew: false,
      isBestseller: true,
      features: ['Pressure gauge', 'Multiple nozzles', 'Compact design']
    },
    {
      id: 9,
      name: 'Elbow & Knee Pads Set',
      price: '$39.99',
      originalPrice: '$49.99',
      image: '/protective-pads.jpg',
      rating: 4.5,
      reviews: 93,
      category: 'Protective Gear',
      brand: 'McDavid',
      description: 'Professional protective pads for elbows and knees',
      isNew: false,
      isBestseller: false,
      features: ['Shock absorbing', 'Breathable', 'Adjustable straps']
    }
  ];

  const basketballCategories = [
    {
      name: 'Complete Sets',
      icon: '🏀',
      description: 'Full basketball setups',
      count: '3 products'
    },
    {
      name: 'Hoops & Goals',
      icon: '⛹️',
      description: 'Backboards and rims',
      count: '5 products'
    },
    {
      name: 'Balls',
      icon: '🔴',
      description: 'Game and practice balls',
      count: '8 products'
    },
    {
      name: 'Footwear',
      icon: '👟',
      description: 'Basketball shoes',
      count: '6 products'
    },
    {
      name: 'Apparel',
      icon: '👕',
      description: 'Jerseys and uniforms',
      count: '4 products'
    },
    {
      name: 'Training',
      icon: '🎯',
      description: 'Training equipment',
      count: '7 products'
    }
  ];

  const filters = {
    category: ['Complete Sets', 'Hoops & Goals', 'Balls', 'Footwear', 'Apparel', 'Training Equipment', 'Protective Gear', 'Accessories'],
    priceRange: [
      'Under $50',
      '$50 - $100',
      '$100 - $200',
      '$200 - $500',
      'Above $500'
    ],
    brand: ['Spalding', 'Wilson', 'Nike', 'ProCourt', 'Lifetime', 'Champion', 'McDavid', 'ProActive']
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
      <section className="bg-gradient-to-r from-orange-600 to-red-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <span className="text-6xl">🏀</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Basketball Equipment
            </h1>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Professional basketball gear for courts, training, and games. From hoops to shoes, get everything for your basketball journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#products"
                className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-200"
              >
                Shop Basketball Gear
              </Link>
              <Link
                href="/sports-equipment/team-sports"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200"
              >
                View All Team Sports
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Basketball Categories */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Basketball Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {basketballCategories.map((category, index) => (
              <Link
                key={index}
                href={`#${category.name.toLowerCase().replace(' ', '-')}`}
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

      {/* Main Content */}
      <section id="products" className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with Controls */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Basketball Equipment
              </h2>
              <p className="text-gray-600">
                Showing {basketballProducts.length} products
              </p>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 lg:mt-0">
              {/* View Mode Toggle */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-orange-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-orange-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
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
                          className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
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
                          className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
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
                          className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                <button
                  onClick={() => setSelectedFilters({ category: [], priceRange: [], brand: [] })}
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
                  {basketballProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                    >
                      <div className="relative h-64 bg-gradient-to-br from-orange-50 to-red-100 flex items-center justify-center">
                        {product.isNew && (
                          <span className="absolute top-3 left-3 bg-orange-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            New
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="absolute top-3 left-3 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Bestseller
                          </span>
                        )}
                        <div className="text-5xl">🏀</div>
                        <button className="absolute top-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <Heart className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-gray-900">{product.name}</h3>
                          <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full">
                            {product.category}
                          </span>
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
                        <div className="mb-3">
                          <p className="text-xs text-gray-500 font-medium">Brand: {product.brand}</p>
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
                          <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors duration-200 text-sm font-semibold">
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
                  {basketballProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex"
                    >
                      <div className="w-48 relative bg-gradient-to-br from-orange-50 to-red-100 flex items-center justify-center">
                        {product.isNew && (
                          <span className="absolute top-3 left-3 bg-orange-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            New
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="absolute top-3 left-3 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Bestseller
                          </span>
                        )}
                        <div className="text-5xl">🏀</div>
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                              <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full">
                                {product.category}
                              </span>
                            </div>
                            <p className="text-gray-600 mb-3">{product.description}</p>
                            <div className="mb-2">
                              <p className="text-sm text-gray-600 font-medium">Features:</p>
                              <ul className="text-sm text-gray-500 list-disc list-inside">
                                {product.features.map((feature, index) => (
                                  <li key={index} className="inline-block mr-4">{feature}</li>
                                ))}
                              </ul>
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
                          <button className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors duration-200 font-semibold">
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

      {/* Basketball Training Banner */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Basketball Training Programs
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Enhance your skills with professional training equipment and coaching resources. From beginner to pro level.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200">
                View Training Equipment
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200">
                Coaching Resources
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Court Equipment Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Court Solutions
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Everything you need to build and maintain a professional basketball court
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="text-4xl mb-4">🏟️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Court Equipment</h3>
              <p className="text-gray-600 mb-4">Professional hoops, backboards, and court flooring solutions</p>
              <button className="text-orange-600 font-semibold hover:text-orange-700">
                Explore Court Gear →
              </button>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Training Systems</h3>
              <p className="text-gray-600 mb-4">Advanced training equipment for skill development</p>
              <button className="text-orange-600 font-semibold hover:text-orange-700">
                View Training Gear →
              </button>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="text-4xl mb-4">👕</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Team Uniforms</h3>
              <p className="text-gray-600 mb-4">Customizable team jerseys and apparel</p>
              <button className="text-orange-600 font-semibold hover:text-orange-700">
                Shop Apparel →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Basketball Updates
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Get the latest on basketball equipment, training tips, and exclusive deals
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-300"
            />
            <button className="bg-orange-600 text-white px-6 py-3 rounded-r-lg hover:bg-orange-700 transition-colors duration-200 font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}