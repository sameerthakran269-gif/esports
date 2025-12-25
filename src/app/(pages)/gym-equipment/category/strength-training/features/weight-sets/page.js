// app/gym-equipment/strength-training/weight-sets/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, Star, Heart, Filter, Grid, List } from 'lucide-react';

export default function WeightSetsPage() {
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    type: [],
    priceRange: [],
    brand: []
  });

  const weightSets = [
    {
      id: 1,
      name: 'Olympic Weight Set (300lb)',
      price: '$599.99',
      originalPrice: '$749.99',
      image: '/weight-set-olympic.jpg',
      rating: 4.7,
      reviews: 203,
      category: 'Olympic Sets',
      brand: 'IronMaster',
      description: 'Complete Olympic weight set with bumper plates and 7ft Olympic bar',
      features: ['300lb total weight', 'Bumper plates', '7ft Olympic bar', 'Spring collars'],
      weightRange: '45lb-2.5lb',
      plateType: 'Bumper',
      barIncluded: true,
      isNew: false,
      isBestseller: true,
      inStock: true
    },
    {
      id: 2,
      name: 'Rubber Hex Dumbbell Set (5-50lb)',
      price: '$1,199.99',
      originalPrice: '$1,499.99',
      image: '/dumbbell-set-rubber.jpg',
      rating: 4.4,
      reviews: 94,
      category: 'Dumbbell Sets',
      brand: 'IronMaster',
      description: 'Complete rubber hex dumbbell set with storage rack',
      features: ['5-50lb set', 'Rubber coating', 'Storage rack included', 'Lifetime warranty'],
      weightRange: '5lb-50lb',
      plateType: 'Rubber Hex',
      barIncluded: false,
      isNew: false,
      isBestseller: false,
      inStock: true
    },
    {
      id: 3,
      name: 'Professional Bumper Plate Set',
      price: '$899.99',
      originalPrice: '$1,099.99',
      image: '/bumper-plate-set.jpg',
      rating: 4.8,
      reviews: 156,
      category: 'Bumper Plates',
      brand: 'Rogue',
      description: 'Competition-grade bumper plates with precise weight accuracy',
      features: ['Competition grade', 'Color coded', 'Precision calibrated', '2-year warranty'],
      weightRange: '10lb-55lb',
      plateType: 'Competition Bumper',
      barIncluded: false,
      isNew: true,
      isBestseller: true,
      inStock: true
    },
    {
      id: 4,
      name: 'Adjustable Dumbbell Set (5-50lb)',
      price: '$449.99',
      originalPrice: '$599.99',
      image: '/adjustable-dumbbell.jpg',
      rating: 4.6,
      reviews: 278,
      category: 'Adjustable Sets',
      brand: 'PowerBlock',
      description: 'Space-saving adjustable dumbbell set with quick weight changes',
      features: ['5-50lb per hand', 'Quick change', 'Space saving', 'Steel construction'],
      weightRange: '5lb-50lb',
      plateType: 'Adjustable',
      barIncluded: false,
      isNew: false,
      isBestseller: true,
      inStock: true
    },
    {
      id: 5,
      name: 'Cast Iron Plate Set (255lb)',
      price: '$349.99',
      originalPrice: '$429.99',
      image: '/cast-iron-set.jpg',
      rating: 4.3,
      reviews: 89,
      category: 'Cast Iron Sets',
      brand: 'ProFit',
      description: 'Classic cast iron weight plates with machined holes',
      features: ['255lb total', 'Cast iron', 'Machined holes', 'Rust-resistant coating'],
      weightRange: '45lb-5lb',
      plateType: 'Cast Iron',
      barIncluded: false,
      isNew: false,
      isBestseller: false,
      inStock: true
    },
    {
      id: 6,
      name: 'Competition Kettlebell Set',
      price: '$679.99',
      originalPrice: null,
      image: '/kettlebell-set-competition.jpg',
      rating: 4.7,
      reviews: 134,
      category: 'Kettlebell Sets',
      brand: 'Rogue',
      description: 'Professional competition kettlebells with uniform dimensions',
      features: ['Competition standard', 'Uniform size', 'Color coded', 'Steel construction'],
      weightRange: '9kg-32kg',
      plateType: 'Competition',
      barIncluded: false,
      isNew: true,
      isBestseller: false,
      inStock: true
    },
    {
      id: 7,
      name: 'Home Gym Starter Set',
      price: '$799.99',
      originalPrice: '$999.99',
      image: '/home-gym-starter.jpg',
      rating: 4.5,
      reviews: 167,
      category: 'Starter Sets',
      brand: 'ProFit',
      description: 'Complete home gym starter set with everything you need to begin',
      features: ['Olympic bar', '255lb plates', 'Dumbbells', 'Storage rack'],
      weightRange: 'Multiple',
      plateType: 'Mixed',
      barIncluded: true,
      isNew: false,
      isBestseller: true,
      inStock: true
    },
    {
      id: 8,
      name: 'Elite Color Bumper Plate Set',
      price: '$1,299.99',
      originalPrice: '$1,599.99',
      image: '/color-bumper-set.jpg',
      rating: 4.9,
      reviews: 72,
      category: 'Bumper Plates',
      brand: 'Rogue',
      description: 'High-visibility color bumper plates with reinforced steel hubs',
      features: ['Reinforced hubs', 'Color coded', 'Competition ready', '10-year warranty'],
      weightRange: '10lb-55lb',
      plateType: 'Elite Bumper',
      barIncluded: false,
      isNew: false,
      isBestseller: false,
      inStock: false
    }
  ];

  const weightSetTypes = [
    {
      name: 'Olympic Sets',
      image: '/olympic-sets.jpg',
      description: 'Full Olympic bar and plate sets',
      count: 8,
      slug: 'olympic-sets'
    },
    {
      name: 'Dumbbell Sets',
      image: '/dumbbell-sets.jpg',
      description: 'Fixed weight dumbbell collections',
      count: 12,
      slug: 'dumbbell-sets'
    },
    {
      name: 'Bumper Plates',
      image: '/bumper-plates.jpg',
      description: 'Rubber bumper weight plates',
      count: 6,
      slug: 'bumper-plates'
    },
    {
      name: 'Adjustable Sets',
      image: '/adjustable-sets.jpg',
      description: 'Space-saving adjustable weights',
      count: 4,
      slug: 'adjustable-sets'
    },
    {
      name: 'Cast Iron Sets',
      image: '/cast-iron-sets.jpg',
      description: 'Traditional cast iron plates',
      count: 7,
      slug: 'cast-iron-sets'
    },
    {
      name: 'Kettlebell Sets',
      image: '/kettlebell-sets.jpg',
      description: 'Complete kettlebell collections',
      count: 5,
      slug: 'kettlebell-sets'
    }
  ];

  const filters = {
    type: ['Olympic Sets', 'Dumbbell Sets', 'Bumper Plates', 'Adjustable Sets', 'Cast Iron Sets', 'Kettlebell Sets', 'Starter Sets'],
    priceRange: [
      'Under $100',
      '$100 - $300',
      '$300 - $600',
      '$600 - $1,000',
      'Above $1,000'
    ],
    brand: ['IronMaster', 'Rogue', 'ProFit', 'PowerBlock', 'Rep Fitness', 'Body-Solid', 'CAP Barbell'],
    plateType: ['Bumper', 'Competition Bumper', 'Rubber Hex', 'Cast Iron', 'Adjustable', 'Competition'],
    weightRange: ['Under 100lb', '100-200lb', '200-300lb', '300-400lb', 'Above 400lb']
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
      <section className="bg-gradient-to-r from-gray-900 to-amber-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <nav className="flex items-center space-x-2 text-sm text-gray-300 mb-4">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <Link href="/gym-equipment" className="hover:text-white transition-colors">Gym Equipment</Link>
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <Link href="/gym-equipment/strength-training" className="hover:text-white transition-colors">Strength Training</Link>
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <span className="text-white font-medium">Weight Sets</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Weight Sets & Collections
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl">
                Complete weight sets for every training need. From Olympic barbell sets to adjustable dumbbells, 
                find the perfect weight collection for your home gym.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="text-6xl">⚖️</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Navigation */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Types of Weight Sets</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {weightSetTypes.map((category, index) => (
              <Link
                key={index}
                href={`/gym-equipment/strength-training/weight-sets/${category.slug}`}
                className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-200 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:from-amber-200 group-hover:to-orange-300 transition-all duration-200">
                  <div className="text-xl">
                    {category.name === 'Olympic Sets' ? '🏋️' :
                     category.name === 'Dumbbell Sets' ? '💪' :
                     category.name === 'Bumper Plates' ? '🛞' :
                     category.name === 'Adjustable Sets' ? '🔄' :
                     category.name === 'Cast Iron Sets' ? '⚙️' : '🏺'}
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-amber-600 transition-colors duration-200">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{category.description}</p>
                <span className="inline-block mt-2 text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                  {category.count} sets
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
                All Weight Sets
              </h2>
              <p className="text-gray-600">
                Showing {weightSets.length} weight sets
              </p>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 lg:mt-0">
              {/* View Mode Toggle */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-amber-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-amber-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-300"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="weight">Heaviest First</option>
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

                {/* Set Type Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Set Type</h4>
                  <div className="space-y-2">
                    {filters.type.map((type) => (
                      <label key={type} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.type.includes(type)}
                          onChange={() => toggleFilter('type', type)}
                          className="rounded border-gray-300 text-amber-600 focus:ring-amber-500"
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
                          className="rounded border-gray-300 text-amber-600 focus:ring-amber-500"
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
                          className="rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Plate Type Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Plate Type</h4>
                  <div className="space-y-2">
                    {filters.plateType.map((type) => (
                      <label key={type} className="flex items-center">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Weight Range Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Total Weight</h4>
                  <div className="space-y-2">
                    {filters.weightRange.map((range) => (
                      <label key={range} className="flex items-center">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{range}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Additional Filters */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Features</h4>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Bar Included</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Storage Rack</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Lifetime Warranty</span>
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
                  {weightSets.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                    >
                      <div className="relative h-64 bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center">
                        {product.isNew && (
                          <span className="absolute top-3 left-3 bg-amber-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
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
                          {product.category === 'Olympic Sets' ? '🏋️' :
                           product.category === 'Dumbbell Sets' ? '💪' :
                           product.category === 'Bumper Plates' ? '🛞' :
                           product.category === 'Adjustable Sets' ? '🔄' :
                           product.category === 'Cast Iron Sets' ? '⚙️' : '🏺'}
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
                        
                        {/* Weight Info */}
                        <div className="mb-3">
                          <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                            <span>Weight Range: <strong>{product.weightRange}</strong></span>
                            <span>Type: <strong>{product.plateType}</strong></span>
                          </div>
                          {product.barIncluded && (
                            <span className="inline-block text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                              Bar Included
                            </span>
                          )}
                        </div>

                        {/* Features */}
                        <div className="mb-3">
                          <div className="flex flex-wrap gap-1">
                            {product.features.map((feature, index) => (
                              <span key={index} className="text-xs bg-amber-50 text-amber-600 px-2 py-1 rounded">
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
                                ? 'bg-amber-600 text-white hover:bg-amber-700' 
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
                  {weightSets.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex"
                    >
                      <div className="w-48 relative bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center">
                        {product.isNew && (
                          <span className="absolute top-3 left-3 bg-amber-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            New
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="absolute top-3 left-3 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Bestseller
                          </span>
                        )}
                        <div className="text-4xl">
                          {product.category === 'Olympic Sets' ? '🏋️' :
                           product.category === 'Dumbbell Sets' ? '💪' :
                           product.category === 'Bumper Plates' ? '🛞' :
                           product.category === 'Adjustable Sets' ? '🔄' :
                           product.category === 'Cast Iron Sets' ? '⚙️' : '🏺'}
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
                              {product.barIncluded && (
                                <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                                  Bar Included
                                </span>
                              )}
                            </div>
                            <p className="text-gray-600 mb-3">{product.description}</p>
                            
                            {/* Weight Info */}
                            <div className="mb-3">
                              <div className="flex items-center gap-4 text-sm text-gray-600">
                                <span><strong>Weight:</strong> {product.weightRange}</span>
                                <span><strong>Type:</strong> {product.plateType}</span>
                                <span><strong>Brand:</strong> {product.brand}</span>
                              </div>
                            </div>

                            {/* Features */}
                            <div className="mb-4">
                              <div className="flex flex-wrap gap-2">
                                {product.features.map((feature, index) => (
                                  <span key={index} className="text-sm bg-amber-50 text-amber-600 px-3 py-1 rounded-full">
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
                                ? 'bg-amber-600 text-white hover:bg-amber-700' 
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
              Why Choose Our Weight Sets?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get the perfect weight collection with professional quality and home gym convenience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">🎯</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Precision Weight Accuracy</h3>
              <p className="text-gray-600">
                All weights are precision calibrated to ensure exact weight specifications for consistent training
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">🛡️</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Durable Construction</h3>
              <p className="text-gray-600">
                Built with high-quality materials that withstand years of heavy use and maintain their condition
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">📦</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Complete Sets</h3>
              <p className="text-gray-600">
                Everything you need in one package - no additional purchases required to start training
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}