// app/sports-equipment/team-sports/volleyball/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Heart, Filter, Grid, List } from 'lucide-react';

export default function VolleyballPage() {
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    priceRange: [],
    brand: []
  });

  const volleyballProducts = [
    {
      id: 1,
      name: 'Professional Volleyball Net System',
      price: '$299.99',
      originalPrice: '$399.99',
      image: '/volleyball-net-pro.jpg',
      rating: 4.8,
      reviews: 167,
      category: 'Net Systems',
      brand: 'Park & Sun',
      description: 'Professional volleyball net system with adjustable poles and premium net',
      isNew: true,
      isBestseller: true,
      features: ['Adjustable height', 'Professional net', 'Easy setup']
    },
    {
      id: 2,
      name: 'Official Game Volleyball',
      price: '$69.99',
      originalPrice: '$89.99',
      image: '/volleyball-official.jpg',
      rating: 4.7,
      reviews: 234,
      category: 'Volleyballs',
      brand: 'Mikasa',
      description: 'Official game volleyball with premium leather and perfect grip',
      isNew: false,
      isBestseller: true,
      features: ['Official size', 'Premium leather', 'Perfect grip']
    },
    {
      id: 3,
      name: 'Volleyball Knee Pads',
      price: '$34.99',
      originalPrice: '$49.99',
      image: '/knee-pads.jpg',
      rating: 4.6,
      reviews: 312,
      category: 'Protective Gear',
      brand: 'Mizuno',
      description: 'Professional volleyball knee pads with advanced cushioning',
      isNew: true,
      isBestseller: true,
      features: ['Gel cushioning', 'Breathable material', 'Secure fit']
    },
    {
      id: 4,
      name: 'Volleyball Shoes',
      price: '$119.99',
      originalPrice: '$149.99',
      image: '/volleyball-shoes.jpg',
      rating: 4.5,
      reviews: 278,
      category: 'Footwear',
      brand: 'ASICS',
      description: 'Professional volleyball shoes with superior court grip and support',
      isNew: false,
      isBestseller: true,
      features: ['Gum rubber sole', 'Ankle support', 'Lightweight']
    },
    {
      id: 5,
      name: 'Team Uniform Set (12 players)',
      price: '$499.99',
      originalPrice: '$649.99',
      image: '/volleyball-uniforms.jpg',
      rating: 4.4,
      reviews: 89,
      category: 'Apparel',
      brand: 'Nike',
      description: 'Complete team uniform set including jerseys and shorts',
      isNew: false,
      isBestseller: false,
      features: ['Set for 12 players', 'Moisture-wicking', 'Customizable']
    },
    {
      id: 6,
      name: 'Portable Net Set',
      price: '$149.99',
      originalPrice: '$199.99',
      image: '/portable-net.jpg',
      rating: 4.3,
      reviews: 156,
      category: 'Net Systems',
      brand: 'Franklin',
      description: 'Portable volleyball net set for beach and outdoor play',
      isNew: false,
      isBestseller: true,
      features: ['Portable design', 'Beach ready', 'Quick setup']
    },
    {
      id: 7,
      name: 'Training Volleyballs (Set of 6)',
      price: '$199.99',
      originalPrice: '$259.99',
      image: '/training-volleyballs.jpg',
      rating: 4.7,
      reviews: 134,
      category: 'Volleyballs',
      brand: 'Tachikara',
      description: 'Set of 6 training volleyballs for team practice sessions',
      isNew: true,
      isBestseller: false,
      features: ['Set of 6', 'Durable construction', 'Practice quality']
    },
    {
      id: 8,
      name: 'Ankle Braces Pair',
      price: '$49.99',
      originalPrice: '$69.99',
      image: '/ankle-braces.jpg',
      rating: 4.2,
      reviews: 189,
      category: 'Protective Gear',
      brand: 'McDavid',
      description: 'Professional ankle braces for maximum support and protection',
      isNew: false,
      isBestseller: true,
      features: ['Maximum support', 'Comfortable fit', 'Washable']
    },
    {
      id: 9,
      name: 'Court Boundary Lines',
      price: '$89.99',
      originalPrice: '$119.99',
      image: '/court-lines.jpg',
      rating: 4.1,
      reviews: 67,
      category: 'Court Equipment',
      brand: 'Victory',
      description: 'Professional court boundary lines with stakes and carry case',
      isNew: false,
      isBestseller: false,
      features: ['Complete set', 'Weather resistant', 'Easy storage']
    },
    {
      id: 10,
      name: 'Volleyball Bag',
      price: '$59.99',
      originalPrice: '$79.99',
      image: '/volleyball-bag.jpg',
      rating: 4.5,
      reviews: 223,
      category: 'Accessories',
      brand: 'Under Armour',
      description: 'Oversized volleyball bag with separate compartments',
      isNew: false,
      isBestseller: true,
      features: ['Oversized', 'Wet/dry compartments', 'Durable material']
    },
    {
      id: 11,
      name: 'Training Resistance Bands',
      price: '$29.99',
      originalPrice: '$39.99',
      image: '/resistance-bands.jpg',
      rating: 4.4,
      reviews: 178,
      category: 'Training Equipment',
      brand: 'SKLZ',
      description: 'Set of resistance bands for vertical jump and strength training',
      isNew: true,
      isBestseller: false,
      features: ['Set of 5', 'Variable resistance', 'Exercise guide']
    },
    {
      id: 12,
      name: 'Ball Cart',
      price: '$129.99',
      originalPrice: '$169.99',
      image: '/ball-cart.jpg',
      rating: 4.6,
      reviews: 45,
      category: 'Court Equipment',
      brand: 'Baden',
      description: 'Professional ball cart for easy transportation of volleyballs',
      isNew: false,
      isBestseller: true,
      features: ['Holds 24 balls', 'Easy maneuver', 'Durable construction']
    }
  ];

  const volleyballCategories = [
    {
      name: 'Net Systems',
      icon: '🏐',
      description: 'Indoor & outdoor nets',
      count: '4 products'
    },
    {
      name: 'Volleyballs',
      icon: '🔴',
      description: 'Game & practice balls',
      count: '5 products'
    },
    {
      name: 'Protective Gear',
      icon: '🛡️',
      description: 'Knee pads & braces',
      count: '4 products'
    },
    {
      name: 'Footwear',
      icon: '👟',
      description: 'Volleyball shoes',
      count: '3 products'
    },
    {
      name: 'Training',
      icon: '🎯',
      description: 'Practice equipment',
      count: '5 products'
    },
    {
      name: 'Court Equipment',
      icon: '⛰️',
      description: 'Court setup gear',
      count: '3 products'
    }
  ];

  const filters = {
    category: ['Net Systems', 'Volleyballs', 'Protective Gear', 'Footwear', 'Training Equipment', 'Apparel', 'Accessories', 'Court Equipment'],
    priceRange: [
      'Under $50',
      '$50 - $100',
      '$100 - $200',
      '$200 - $500',
      'Above $500'
    ],
    brand: ['Mikasa', 'Mizuno', 'ASICS', 'Nike', 'Park & Sun', 'Tachikara', 'Under Armour', 'McDavid', 'Franklin']
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
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <span className="text-6xl">🏐</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Volleyball Equipment
            </h1>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Professional volleyball gear for indoor courts and beach play. From nets to knee pads, get everything for your volleyball team.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#products"
                className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors duration-200"
              >
                Shop Volleyball Gear
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

      {/* Volleyball Categories */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Volleyball Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {volleyballCategories.map((category, index) => (
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
                Volleyball Equipment
              </h2>
              <p className="text-gray-600">
                Showing {volleyballProducts.length} products
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
                          className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
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
                          className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
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
                          className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
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
                  {volleyballProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                    >
                      <div className="relative h-64 bg-gradient-to-br from-purple-50 to-pink-100 flex items-center justify-center">
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
                        <div className="text-5xl">🏐</div>
                        <button className="absolute top-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <Heart className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-gray-900">{product.name}</h3>
                          <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
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
                          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200 text-sm font-semibold">
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
                  {volleyballProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex"
                    >
                      <div className="w-48 relative bg-gradient-to-br from-purple-50 to-pink-100 flex items-center justify-center">
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
                        <div className="text-5xl">🏐</div>
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                              <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
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
                          <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-200 font-semibold">
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

      {/* Beach Volleyball Special Section */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="flex justify-center mb-4">
              <span className="text-4xl">🏖️</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">
              Beach Volleyball Gear
            </h2>
            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
              Specialized equipment for beach volleyball including portable nets, outdoor balls, and beach court equipment
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors duration-200">
                View Beach Gear
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200">
                Outdoor Equipment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Court Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Volleyball Solutions
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Everything you need to equip indoor courts, beach venues, and training facilities
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="text-4xl mb-4">🏐</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Net Systems</h3>
              <p className="text-gray-600 mb-4">Professional indoor and outdoor net systems</p>
              <button className="text-purple-600 font-semibold hover:text-purple-700">
                Explore Nets →
              </button>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Protective Gear</h3>
              <p className="text-gray-600 mb-4">Knee pads, ankle braces, and safety equipment</p>
              <button className="text-purple-600 font-semibold hover:text-purple-700">
                View Safety Gear →
              </button>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Training Equipment</h3>
              <p className="text-gray-600 mb-4">Practice balls, training aids, and court equipment</p>
              <button className="text-purple-600 font-semibold hover:text-purple-700">
                Shop Training Gear →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Protective Gear Focus */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-3xl p-12 text-center">
            <div className="flex justify-center mb-6">
              <span className="text-5xl">🌟</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Premium Protective Gear
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Advanced knee pads, ankle supports, and protective equipment designed for volleyball's dynamic movements
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200">
                View Protective Gear
              </button>
              <button className="border-2 border-pink-600 text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-pink-600 hover:text-white transition-colors duration-200">
                Team Safety Packages
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Volleyball Updates
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Get the latest on volleyball equipment, training techniques, and exclusive team deals
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
            <button className="bg-purple-600 text-white px-6 py-3 rounded-r-lg hover:bg-purple-700 transition-colors duration-200 font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}