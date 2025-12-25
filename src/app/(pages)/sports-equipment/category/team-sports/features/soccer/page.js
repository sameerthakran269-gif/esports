// app/sports-equipment/team-sports/soccer/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Heart, Filter, Grid, List } from 'lucide-react';

export default function SoccerPage() {
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    priceRange: [],
    brand: []
  });

  const soccerProducts = [
    {
      id: 1,
      name: 'Professional Match Soccer Ball',
      price: '$129.99',
      originalPrice: '$159.99',
      image: '/soccer-ball-pro.jpg',
      rating: 4.9,
      reviews: 287,
      category: 'Soccer Balls',
      brand: 'Adidas',
      description: 'FIFA approved professional match ball with advanced aerodynamics',
      isNew: true,
      isBestseller: true,
      features: ['FIFA approved', 'Water resistant', 'High visibility']
    },
    {
      id: 2,
      name: 'Professional Soccer Goal Set',
      price: '$399.99',
      originalPrice: '$499.99',
      image: '/soccer-goal.jpg',
      rating: 4.7,
      reviews: 156,
      category: 'Goals & Nets',
      brand: 'Kwik Goal',
      description: 'Full-size professional soccer goal with premium netting',
      isNew: false,
      isBestseller: true,
      features: ['Full-size 8x24ft', 'Professional net', 'Easy assembly']
    },
    {
      id: 3,
      name: 'Soccer Cleats - Elite Series',
      price: '$149.99',
      originalPrice: '$189.99',
      image: '/soccer-cleats.jpg',
      rating: 4.8,
      reviews: 412,
      category: 'Footwear',
      brand: 'Nike',
      description: 'Professional soccer cleats with superior traction and comfort',
      isNew: true,
      isBestseller: true,
      features: ['Firm ground', 'Ankle support', 'Lightweight']
    },
    {
      id: 4,
      name: 'Training Cones & Equipment Set',
      price: '$34.99',
      originalPrice: '$49.99',
      image: '/training-cones.jpg',
      rating: 4.6,
      reviews: 198,
      category: 'Training Equipment',
      brand: 'SKLZ',
      description: 'Complete training set with cones, poles, and agility equipment',
      isNew: false,
      isBestseller: false,
      features: ['50 pieces', 'Durable plastic', 'Carry bag included']
    },
    {
      id: 5,
      name: 'Team Soccer Jerseys (Set of 15)',
      price: '$299.99',
      originalPrice: '$379.99',
      image: '/soccer-jerseys.jpg',
      rating: 4.5,
      reviews: 134,
      category: 'Apparel',
      brand: 'Puma',
      description: 'Complete set of team jerseys with moisture-wicking technology',
      isNew: false,
      isBestseller: true,
      features: ['Set of 15', 'Customizable', 'Breathable fabric']
    },
    {
      id: 6,
      name: 'Goalkeeper Gloves Set',
      price: '$59.99',
      originalPrice: '$79.99',
      image: '/goalkeeper-gloves.jpg',
      rating: 4.7,
      reviews: 223,
      category: 'Goalkeeper Gear',
      brand: 'Reusch',
      description: 'Professional goalkeeper gloves with advanced grip technology',
      isNew: true,
      isBestseller: false,
      features: ['Latex palm', 'Finger protection', 'Adjustable wrist']
    },
    {
      id: 7,
      name: 'Portable Soccer Goal',
      price: '$89.99',
      originalPrice: '$119.99',
      image: '/portable-goal.jpg',
      rating: 4.4,
      reviews: 167,
      category: 'Goals & Nets',
      brand: 'Franklin',
      description: 'Portable pop-up goal for training and recreational play',
      isNew: false,
      isBestseller: true,
      features: ['Pop-up design', 'Lightweight', 'Carry bag included']
    },
    {
      id: 8,
      name: 'Shin Guard Set',
      price: '$24.99',
      originalPrice: '$34.99',
      image: '/shin-guards.jpg',
      rating: 4.3,
      reviews: 345,
      category: 'Protective Gear',
      brand: 'Nike',
      description: 'Professional shin guards with ankle protection',
      isNew: false,
      isBestseller: true,
      features: ['Ankle protection', 'Moisture-wicking', 'Secure fit']
    },
    {
      id: 9,
      name: 'Ball Pump & Accessories Kit',
      price: '$29.99',
      originalPrice: '$39.99',
      image: '/ball-pump-kit.jpg',
      rating: 4.2,
      reviews: 178,
      category: 'Accessories',
      brand: 'Select',
      description: 'Complete ball maintenance kit with pump and repair tools',
      isNew: false,
      isBestseller: false,
      features: ['Pressure gauge', 'Multiple nozzles', 'Repair kit']
    },
    {
      id: 10,
      name: 'Agility Ladder Set',
      price: '$19.99',
      originalPrice: '$29.99',
      image: '/agility-ladder.jpg',
      rating: 4.6,
      reviews: 267,
      category: 'Training Equipment',
      brand: 'Yes4All',
      description: 'Professional agility ladder for speed and footwork training',
      isNew: true,
      isBestseller: true,
      features: ['12 rungs', 'Adjustable', 'Carry bag included']
    },
    {
      id: 11,
      name: 'Soccer Socks (Pack of 10)',
      price: '$39.99',
      originalPrice: '$49.99',
      image: '/soccer-socks.jpg',
      rating: 4.4,
      reviews: 189,
      category: 'Apparel',
      brand: 'Adidas',
      description: 'Professional soccer socks with cushioning and grip',
      isNew: false,
      isBestseller: false,
      features: ['Pack of 10', 'Cushioned sole', 'Moisture-wicking']
    },
    {
      id: 12,
      name: 'Training Bibs Set',
      price: '$22.99',
      originalPrice: '$32.99',
      image: '/training-bibs.jpg',
      rating: 4.5,
      reviews: 156,
      category: 'Training Equipment',
      brand: 'Champion',
      description: 'Set of 12 training bibs in multiple colors',
      isNew: false,
      isBestseller: true,
      features: ['Set of 12', 'Multiple colors', 'Lightweight']
    }
  ];

  const soccerCategories = [
    {
      name: 'Soccer Balls',
      icon: '⚽',
      description: 'Match & training balls',
      count: '8 products'
    },
    {
      name: 'Goals & Nets',
      icon: '🥅',
      description: 'Full-size & portable goals',
      count: '6 products'
    },
    {
      name: 'Footwear',
      icon: '👟',
      description: 'Cleats & turf shoes',
      count: '7 products'
    },
    {
      name: 'Training Gear',
      icon: '🎯',
      description: 'Cones, ladders & equipment',
      count: '9 products'
    },
    {
      name: 'Goalkeeper',
      icon: '🧤',
      description: 'Gloves & special gear',
      count: '5 products'
    },
    {
      name: 'Team Apparel',
      icon: '👕',
      description: 'Jerseys & uniforms',
      count: '4 products'
    }
  ];

  const filters = {
    category: ['Soccer Balls', 'Goals & Nets', 'Footwear', 'Training Equipment', 'Goalkeeper Gear', 'Protective Gear', 'Apparel', 'Accessories'],
    priceRange: [
      'Under $50',
      '$50 - $100',
      '$100 - $200',
      '$200 - $500',
      'Above $500'
    ],
    brand: ['Adidas', 'Nike', 'Puma', 'Kwik Goal', 'Reusch', 'SKLZ', 'Franklin', 'Select', 'Champion']
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
      <section className="bg-gradient-to-r from-green-600 to-emerald-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <span className="text-6xl">⚽</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Soccer Equipment
            </h1>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Professional soccer gear for training, matches, and tournaments. From balls to goals, get everything for your soccer team.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#products"
                className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-200"
              >
                Shop Soccer Gear
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

      {/* Soccer Categories */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Soccer Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {soccerCategories.map((category, index) => (
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
                Soccer Equipment
              </h2>
              <p className="text-gray-600">
                Showing {soccerProducts.length} products
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
                  {soccerProducts.map((product) => (
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
                          <span className="absolute top-3 left-3 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Bestseller
                          </span>
                        )}
                        <div className="text-5xl">⚽</div>
                        <button className="absolute top-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <Heart className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-gray-900">{product.name}</h3>
                          <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
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
                  {soccerProducts.map((product) => (
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
                          <span className="absolute top-3 left-3 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Bestseller
                          </span>
                        )}
                        <div className="text-5xl">⚽</div>
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                              <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
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

      {/* Goalkeeper Special Section */}
      <section className="py-16 bg-gradient-to-r from-gray-800 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="flex justify-center mb-4">
              <span className="text-4xl">🧤</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">
              Goalkeeper Specialists
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Professional goalkeeper equipment including gloves, training gear, and protective equipment
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200">
                View Goalkeeper Gear
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200">
                Training Programs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Field Equipment Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Field Solutions
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Everything you need to equip a professional soccer field and training facility
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="text-4xl mb-4">🥅</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Field Goals</h3>
              <p className="text-gray-600 mb-4">Professional goals, nets, and field equipment</p>
              <button className="text-green-600 font-semibold hover:text-green-700">
                Explore Goals →
              </button>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Training Systems</h3>
              <p className="text-gray-600 mb-4">Advanced training equipment and agility tools</p>
              <button className="text-green-600 font-semibold hover:text-green-700">
                View Training Gear →
              </button>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="text-4xl mb-4">👕</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Team Uniforms</h3>
              <p className="text-gray-600 mb-4">Customizable team kits and apparel packages</p>
              <button className="text-green-600 font-semibold hover:text-green-700">
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
            Soccer Updates
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Get the latest on soccer equipment, training techniques, and exclusive team deals
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-300"
            />
            <button className="bg-green-600 text-white px-6 py-3 rounded-r-lg hover:bg-green-700 transition-colors duration-200 font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}