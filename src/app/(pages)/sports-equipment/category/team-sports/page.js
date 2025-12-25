// app/sports-equipment/team-sports/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Heart, Filter, Grid, List } from 'lucide-react';

export default function TeamSportsPage() {
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    sport: [],
    priceRange: [],
    brand: []
  });

  const teamSportsProducts = [
    {
      id: 1,
      name: 'Professional Basketball Set',
      price: '$299.99',
      originalPrice: '$399.99',
      image: '/basketball-set.jpg',
      rating: 4.8,
      reviews: 156,
      category: 'Basketball',
      brand: 'ProCourt',
      description: 'Complete basketball set with adjustable hoop and premium ball',
      isNew: true,
      isBestseller: true,
      sport: 'Basketball'
    },
    {
      id: 2,
      name: 'Professional Soccer Ball',
      price: '$89.99',
      originalPrice: '$119.99',
      image: '/soccer-ball.jpg',
      rating: 4.7,
      reviews: 203,
      category: 'Soccer',
      brand: 'KickMaster',
      description: 'FIFA approved professional soccer ball',
      isNew: false,
      isBestseller: true,
      sport: 'Soccer'
    },
    {
      id: 3,
      name: 'Volleyball Net System',
      price: '$199.99',
      originalPrice: '$249.99',
      image: '/volleyball-net.jpg',
      rating: 4.5,
      reviews: 89,
      category: 'Volleyball',
      brand: 'NetPro',
      description: 'Professional volleyball net with adjustable poles',
      isNew: false,
      isBestseller: false,
      sport: 'Volleyball'
    },
    {
      id: 13,
      name: 'Football Helmet Set',
      price: '$159.99',
      originalPrice: '$199.99',
      image: '/football-helmet.jpg',
      rating: 4.6,
      reviews: 78,
      category: 'Football',
      brand: 'GridironPro',
      description: 'Professional football helmet with face guard',
      isNew: true,
      isBestseller: false,
      sport: 'Football'
    },
    {
      id: 14,
      name: 'Baseball Bat Set',
      price: '$129.99',
      originalPrice: '$159.99',
      image: '/baseball-bat.jpg',
      rating: 4.4,
      reviews: 112,
      category: 'Baseball',
      brand: 'DiamondPro',
      description: 'Professional aluminum baseball bats set',
      isNew: false,
      isBestseller: true,
      sport: 'Baseball'
    },
    {
      id: 15,
      name: 'Hockey Stick Pack',
      price: '$89.99',
      originalPrice: '$109.99',
      image: '/hockey-stick.jpg',
      rating: 4.3,
      reviews: 67,
      category: 'Hockey',
      brand: 'IceMaster',
      description: 'Set of 2 professional hockey sticks',
      isNew: false,
      isBestseller: false,
      sport: 'Hockey'
    },
    {
      id: 16,
      name: 'Rugball Ball Set',
      price: '$69.99',
      originalPrice: '$89.99',
      image: '/rugby-ball.jpg',
      rating: 4.5,
      reviews: 45,
      category: 'Rugby',
      brand: 'ScrumPro',
      description: 'Professional rugby balls for training and matches',
      isNew: true,
      isBestseller: false,
      sport: 'Rugby'
    },
    {
      id: 17,
      name: 'Team Uniform Set',
      price: '$249.99',
      originalPrice: '$299.99',
      image: '/team-uniform.jpg',
      rating: 4.7,
      reviews: 134,
      category: 'Apparel',
      brand: 'TeamGear',
      description: 'Complete team uniform set for 12 players',
      isNew: false,
      isBestseller: true,
      sport: 'All Sports'
    }
  ];

  const teamSports = [
    {
      name: 'Basketball',
      icon: '🏀',
      description: 'Hoops, Balls & Accessories',
      count: '12 products',
      slug: 'basketball'
    },
    {
      name: 'Soccer',
      icon: '⚽',
      description: 'Balls, Goals & Equipment',
      count: '15 products',
      slug: 'soccer'
    },
    {
      name: 'Football',
      icon: '🏈',
      description: 'Helmets, Pads & Gear',
      count: '8 products',
      slug: 'football'
    },
    {
      name: 'Baseball',
      icon: '⚾',
      description: 'Bats, Gloves & Equipment',
      count: '10 products',
      slug: 'baseball'
    },
    {
      name: 'Volleyball',
      icon: '🏐',
      description: 'Nets, Balls & Court Gear',
      count: '6 products',
      slug: 'volleyball'
    },
    {
      name: 'Hockey',
      icon: '🏒',
      description: 'Sticks, Pucks & Protective Gear',
      count: '7 products',
      slug: 'hockey'
    }
  ];

  const filters = {
    sport: ['Basketball', 'Soccer', 'Football', 'Baseball', 'Volleyball', 'Hockey', 'Rugby', 'All Sports'],
    priceRange: [
      'Under $50',
      '$50 - $100',
      '$100 - $200',
      '$200 - $500',
      'Above $500'
    ],
    brand: ['ProCourt', 'KickMaster', 'NetPro', 'GridironPro', 'DiamondPro', 'IceMaster', 'ScrumPro', 'TeamGear']
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
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Team Sports Equipment
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Professional gear for basketball, soccer, football, and more. Everything your team needs to compete and win.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#products"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
              >
                Shop Equipment
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

      {/* Sports Categories */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Popular Team Sports
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {teamSports.map((sport, index) => (
              <Link
                key={index}
                href={`/sports-equipment/category/team-sports/features/${sport.slug}`}
                className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-200">
                  {sport.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{sport.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{sport.description}</p>
                <span className="text-xs text-green-600 font-medium">{sport.count}</span>
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
                Team Sports Equipment
              </h2>
              <p className="text-gray-600">
                Showing {teamSportsProducts.length} products
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

                {/* Sport Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Sport Type</h4>
                  <div className="space-y-2">
                    {filters.sport.map((sport) => (
                      <label key={sport} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.sport.includes(sport)}
                          onChange={() => toggleFilter('sport', sport)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{sport}</span>
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
                  onClick={() => setSelectedFilters({ sport: [], priceRange: [], brand: [] })}
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
                  {teamSportsProducts.map((product) => (
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
                          {product.sport === 'Basketball' ? '🏀' : 
                           product.sport === 'Soccer' ? '⚽' :
                           product.sport === 'Football' ? '🏈' :
                           product.sport === 'Baseball' ? '⚾' :
                           product.sport === 'Volleyball' ? '🏐' :
                           product.sport === 'Hockey' ? '🏒' : '👕'}
                        </div>
                        <button className="absolute top-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <Heart className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-gray-900">{product.name}</h3>
                          <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                            {product.sport}
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
                  {teamSportsProducts.map((product) => (
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
                          {product.sport === 'Basketball' ? '🏀' : 
                           product.sport === 'Soccer' ? '⚽' :
                           product.sport === 'Football' ? '🏈' :
                           product.sport === 'Baseball' ? '⚾' :
                           product.sport === 'Volleyball' ? '🏐' :
                           product.sport === 'Hockey' ? '🏒' : '👕'}
                        </div>
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                              <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                                {product.sport}
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
                          <span className="text-sm text-gray-600">Sport: {product.sport}</span>
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

      {/* Team Deals Banner */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Team & Bulk Order Discounts
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Get special pricing for team orders, schools, and sports clubs. Save up to 25% on bulk purchases.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-200">
                Request Team Quote
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Team Sports Updates
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Get the latest on team sports equipment, seasonal deals, and coaching resources
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-r-lg hover:bg-blue-700 transition-colors duration-200 font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}