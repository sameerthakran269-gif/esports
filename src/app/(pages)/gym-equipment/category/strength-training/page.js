// app/gym-equipment/strength-training/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, Star, Heart, Filter, Grid, List } from 'lucide-react';
import { features } from 'process';

export default function StrengthTrainingPage() {
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    type: [],
    priceRange: [],
    brand: []
  });

  const strengthProducts = [
    {
      id: 1,
      name: 'Pro Power Rack with Lat Pulldown',
      price: '$899.99',
      originalPrice: '$1,099.99',
      image: '/power-rack.jpg',
      rating: 4.8,
      reviews: 142,
      category: 'Power Racks',
      brand: 'ProFit',
      description: 'Professional grade power rack with integrated lat pulldown system',
      features: ['1000lb capacity', 'Lat pulldown attachment', 'Dip bars included'],
      isNew: true,
      isBestseller: true,
      inStock: true
    },
    {
      id: 2,
      name: 'Olympic Weight Set (300lb)',
      price: '$599.99',
      originalPrice: '$749.99',
      image: '/weight-set.jpg',
      rating: 4.7,
      reviews: 203,
      category: 'Weight Sets',
      brand: 'IronMaster',
      description: 'Complete Olympic weight set with bumper plates',
      features: ['300lb total weight', 'Bumper plates', '7ft Olympic bar'],
      isNew: false,
      isBestseller: true,
      inStock: true
    },
    {
      id: 3,
      name: 'Adjustable Weight Bench',
      price: '$299.99',
      originalPrice: '$399.99',
      image: '/bench.jpg',
      rating: 4.5,
      reviews: 178,
      category: 'Benches',
      brand: 'ProFit',
      description: 'Multi-functional weight bench with 7 back positions',
      features: ['1000lb capacity', '7 back positions', '3 seat positions'],
      isNew: false,
      isBestseller: false,
      inStock: true
    },
    {
      id: 4,
      name: 'Smith Machine System',
      price: '$1,299.99',
      originalPrice: '$1,599.99',
      image: '/smith-machine.jpg',
      rating: 4.6,
      reviews: 87,
      category: 'Machines',
      brand: 'GymPro',
      description: 'Commercial smith machine with cable crossover',
      features: ['Smith machine', 'Cable crossover', 'Butterfly attachment'],
      isNew: true,
      isBestseller: false,
      inStock: false
    },
    {
      id: 5,
      name: 'Dumbbell Rack Set (5-50lb)',
      price: '$1,199.99',
      originalPrice: '$1,499.99',
      image: '/dumbbell-rack.jpg',
      rating: 4.4,
      reviews: 94,
      category: 'Dumbbells',
      brand: 'IronMaster',
      description: 'Complete rubber hex dumbbell set with storage rack',
      features: ['5-50lb set', 'Rubber coating', 'Storage rack included'],
      isNew: false,
      isBestseller: false,
      inStock: true
    },
    {
      id: 6,
      name: 'Cable Machine Tower',
      price: '$799.99',
      originalPrice: null,
      image: '/cable-machine.jpg',
      rating: 4.3,
      reviews: 56,
      category: 'Machines',
      brand: 'ProFit',
      description: 'Functional trainer with dual weight stacks',
      features: ['200lb weight stack', 'Dual pulleys', 'Multiple attachments'],
      isNew: true,
      isBestseller: false,
      inStock: true
    },
    {
      id: 7,
      name: 'Kettlebell Set (5-40lb)',
      price: '$349.99',
      originalPrice: '$449.99',
      image: '/kettlebell-set.jpg',
      rating: 4.7,
      reviews: 123,
      category: 'Kettlebells',
      brand: 'PowerFlex',
      description: 'Vinyl-coated kettlebell set with storage rack',
      features: ['5-40lb range', 'Vinyl coating', 'Storage rack'],
      isNew: false,
      isBestseller: true,
      inStock: true
    },
    {
      id: 8,
      name: 'Leg Press Hack Squat Machine',
      price: '$2,199.99',
      originalPrice: '$2,599.99',
      image: '/leg-press.jpg',
      rating: 4.9,
      reviews: 67,
      category: 'Machines',
      brand: 'GymPro',
      description: 'Commercial leg press and hack squat combo machine',
      features: ['Combo machine', '1000lb capacity', 'Commercial grade'],
      isNew: false,
      isBestseller: false,
      inStock: true
    }
  ];

  const strengthCategories = [
    {
      name: 'Power Racks',
      image: '/power-racks.jpg',
      description: 'Full power racks and cages',
      count: 12,
      slug: 'power-racks'
    },
    {
      name: 'Weight Sets',
      image: '/weight-sets.jpg',
      description: 'Olympic and standard sets',
      count: 8,
      slug: 'weight-sets'
    },
    {
      name: 'Benches',
      image: '/benches.jpg',
      description: 'Adjustable weight benches',
      count: 15,
      slug: 'benches'
    },
    {
      name: 'Machines',
      image: '/machines.jpg',
      description: 'Smith and cable machines',
      count: 6,
      slug: 'machines'
    },
    {
      name: 'Dumbbells',
      image: '/dumbbells.jpg',
      description: 'Fixed and adjustable',
      count: 20,
      slug: 'dumbbells'
    },
    {
      name: 'Kettlebells',
      image: '/kettlebells.jpg',
      description: 'Various weights and types',
      count: 14,
      slug: 'kettlebells'
    }
  ];

  const filters = {
    type: ['Power Racks', 'Weight Sets', 'Benches', 'Machines', 'Dumbbells', 'Kettlebells', 'Barbells', 'Plate Loaded'],
    priceRange: [
      'Under $100',
      '$100 - $500',
      '$500 - $1,000',
      '$1,000 - $2,000',
      'Above $2,000'
    ],
    brand: ['ProFit', 'IronMaster', 'GymPro', 'PowerFlex', 'Rogue', 'Rep Fitness', 'Body-Solid']
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
      <section className="bg-gradient-to-r from-gray-900 to-blue-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <nav className="flex items-center space-x-2 text-sm text-gray-300 mb-4">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <Link href="/gym-equipment" className="hover:text-white transition-colors">Gym Equipment</Link>
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <span className="text-white font-medium">Strength Training</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Strength Training Equipment
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl">
                Build your ultimate home gym with professional-grade strength equipment. 
                From power racks to weight sets, we have everything you need.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="text-6xl">🏋️‍♂️</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Navigation */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {strengthCategories.map((category, index) => (
              <Link
                key={index}
                href={`/gym-equipment/category/strength-training/features/${category.slug}`}
                className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-200 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-cyan-200 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:from-blue-200 group-hover:to-cyan-300 transition-all duration-200">
                  <div className="text-xl">
                    {category.name === 'Power Racks' ? '🔩' :
                     category.name === 'Weight Sets' ? '⚖️' :
                     category.name === 'Benches' ? '🛋️' :
                     category.name === 'Machines' ? '🏗️' :
                     category.name === 'Dumbbells' ? '💪' : '🏺'}
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{category.description}</p>
                <span className="inline-block mt-2 text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                  {category.count} items
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with Controls */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Strength Training Equipment
              </h2>
              <p className="text-gray-600">
                Showing {strengthProducts.length} products
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

                {/* Equipment Type Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Equipment Type</h4>
                  <div className="space-y-2">
                    {filters.type.map((type) => (
                      <label key={type} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.type.includes(type)}
                          onChange={() => toggleFilter('type', type)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
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

                {/* Stock Status */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Availability</h4>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">In Stock</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">On Sale</span>
                    </label>
                  </div>
                </div>

                {/* Clear Filters */}
                <button
                  onClick={() => setSelectedFilters({ type: [], priceRange: [], brand: [] })}
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
                  {strengthProducts.map((product) => (
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
                        {!product.inStock && (
                          <span className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Out of Stock
                          </span>
                        )}
                        <div className="text-4xl">
                          {product.category === 'Power Racks' ? '🔩' :
                           product.category === 'Weight Sets' ? '⚖️' :
                           product.category === 'Benches' ? '🛋️' :
                           product.category === 'Machines' ? '🏗️' :
                           product.category === 'Dumbbells' ? '💪' : '🏺'}
                        </div>
                        <button className="absolute top-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <Heart className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-gray-900">{product.name}</h3>
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                            {product.category}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                        
                        {/* Features */}
                        <div className="mb-3">
                          <div className="flex flex-wrap gap-1">
                            {product.features.map((feature, index) => (
                              <span key={index} className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded">
                                {feature}
                              </span>
                            ))}
                          </div>
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
                          <button 
                            className={`px-4 py-2 rounded-lg transition-colors duration-200 text-sm font-semibold ${
                              product.inStock 
                                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            }`}
                            disabled={!product.inStock}
                          >
                            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* List View */
                <div className="space-y-6">
                  {strengthProducts.map((product) => (
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
                          {product.category === 'Power Racks' ? '🔩' :
                           product.category === 'Weight Sets' ? '⚖️' :
                           product.category === 'Benches' ? '🛋️' :
                           product.category === 'Machines' ? '🏗️' :
                           product.category === 'Dumbbells' ? '💪' : '🏺'}
                        </div>
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                {product.category}
                              </span>
                              {!product.inStock && (
                                <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
                                  Out of Stock
                                </span>
                              )}
                            </div>
                            <p className="text-gray-600 mb-3">{product.description}</p>
                            
                            {/* Features */}
                            <div className="mb-4">
                              <div className="flex flex-wrap gap-2">
                                {product.features.map((feature, index) => (
                                  <span key={index} className="text-sm bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
                                    {feature}
                                  </span>
                                ))}
                              </div>
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
                          <button 
                            className={`px-6 py-3 rounded-lg transition-colors duration-200 font-semibold ${
                              product.inStock 
                                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            }`}
                            disabled={!product.inStock}
                          >
                            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
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

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Strength Equipment?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional quality meets home convenience with our carefully curated strength training collection
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">🛡️</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Commercial Grade</h3>
              <p className="text-gray-600">
                Built to withstand heavy use with industrial-grade materials and construction
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">🚚</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Free Shipping</h3>
              <p className="text-gray-600">
                Free shipping on all orders over $500 with white-glove delivery service
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">🔧</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Assembly Service</h3>
              <p className="text-gray-600">
                Professional assembly available for all large equipment purchases
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
