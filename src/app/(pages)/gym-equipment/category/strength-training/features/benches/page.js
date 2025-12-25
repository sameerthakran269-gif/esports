// app/gym-equipment/strength-training/benches/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, Star, Heart, Filter, Grid, List } from 'lucide-react';

export default function BenchesPage() {
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    type: [],
    priceRange: [],
    brand: []
  });

  const benchProducts = [
    {
      id: 1,
      name: 'Pro Adjustable Weight Bench',
      price: '$349.99',
      originalPrice: '$449.99',
      image: '/pro-adjustable-bench.jpg',
      rating: 4.8,
      reviews: 156,
      category: 'Adjustable Benches',
      brand: 'ProFit',
      description: 'Commercial grade adjustable bench with 10 back positions',
      features: ['1000lb capacity', '10 back positions', '3 seat positions', 'Wheels for mobility'],
      isNew: true,
      isBestseller: true,
      inStock: true,
      weightCapacity: '1000 lbs',
      dimensions: '52" L x 24" W x 17" H',
      material: '3" Steel Frame with 2" Padding'
    },
    {
      id: 2,
      name: 'Flat Utility Bench',
      price: '$129.99',
      originalPrice: '$169.99',
      image: '/flat-utility-bench.jpg',
      rating: 4.6,
      reviews: 203,
      category: 'Flat Benches',
      brand: 'IronMaster',
      description: 'Heavy-duty flat bench for basic lifting exercises',
      features: ['500lb capacity', 'Commercial padding', 'Non-slip feet'],
      isNew: false,
      isBestseller: true,
      inStock: true,
      weightCapacity: '500 lbs',
      dimensions: '48" L x 22" W x 16" H',
      material: '2" Steel Frame with 1.5" Padding'
    },
    {
      id: 3,
      name: 'FID Adjustable Bench',
      price: '$429.99',
      originalPrice: '$549.99',
      image: '/fid-bench.jpg',
      rating: 4.7,
      reviews: 89,
      category: 'FID Benches',
      brand: 'GymPro',
      description: 'Flat-Incline-Decline bench for complete workout versatility',
      features: ['7 back positions', '3 decline positions', 'Quick-adjust mechanism'],
      isNew: true,
      isBestseller: false,
      inStock: true,
      weightCapacity: '800 lbs',
      dimensions: '55" L x 26" W x 18" H',
      material: 'Commercial Grade Vinyl'
    },
    {
      id: 4,
      name: 'Olympic Weight Bench with Leg Developer',
      price: '$299.99',
      originalPrice: null,
      image: '/olympic-bench-leg-dev.jpg',
      rating: 4.4,
      reviews: 67,
      category: 'Specialty Benches',
      brand: 'PowerFlex',
      description: 'Multi-functional bench with integrated leg developer',
      features: ['Leg developer', 'Preacher curl attachment', '6 back positions'],
      isNew: false,
      isBestseller: false,
      inStock: true,
      weightCapacity: '600 lbs',
      dimensions: '58" L x 28" W x 20" H',
      material: '2.5" Steel Frame'
    },
    {
      id: 5,
      name: 'Commercial Abdominal Bench',
      price: '$199.99',
      originalPrice: '$249.99',
      image: '/ab-bench.jpg',
      rating: 4.3,
      reviews: 94,
      category: 'Specialty Benches',
      brand: 'ProFit',
      description: 'Dedicated abdominal bench for core workouts',
      features: ['Adjustable angle', 'Ankle rollers', 'Compact design'],
      isNew: false,
      isBestseller: false,
      inStock: true,
      weightCapacity: '300 lbs',
      dimensions: '42" L x 20" W x 15" H',
      material: 'Padded Vinyl with Foam Rollers'
    },
    {
      id: 6,
      name: 'Heavy Duty Power Rack Bench',
      price: '$379.99',
      originalPrice: '$459.99',
      image: '/power-rack-bench.jpg',
      rating: 4.9,
      reviews: 45,
      category: 'Adjustable Benches',
      brand: 'IronMaster',
      description: 'Extra wide bench designed specifically for power racks',
      features: ['Extra wide pad', 'Low profile', 'Reinforced frame'],
      isNew: true,
      isBestseller: false,
      inStock: false,
      weightCapacity: '1200 lbs',
      dimensions: '54" L x 30" W x 16" H',
      material: '4" Steel Frame with 3" Padding'
    },
    {
      id: 7,
      name: 'Compact Folding Bench',
      price: '$179.99',
      originalPrice: '$229.99',
      image: '/folding-bench.jpg',
      rating: 4.5,
      reviews: 78,
      category: 'Flat Benches',
      brand: 'SpaceSaver',
      description: 'Space-saving foldable bench for home gyms',
      features: ['Folds for storage', 'Lightweight', 'Easy transport'],
      isNew: false,
      isBestseller: true,
      inStock: true,
      weightCapacity: '400 lbs',
      dimensions: '46" L x 20" W x 16" H (Folded: 24" x 20" x 6")',
      material: 'Aluminum Frame with Foam Padding'
    },
    {
      id: 8,
      name: 'Professional Preacher Curl Bench',
      price: '$249.99',
      originalPrice: '$299.99',
      image: '/preacher-bench.jpg',
      rating: 4.6,
      reviews: 112,
      category: 'Specialty Benches',
      brand: 'GymPro',
      description: 'Dedicated preacher curl bench for arm development',
      features: ['Adjustable pad height', 'Comfortable padding', 'Stable base'],
      isNew: false,
      isBestseller: false,
      inStock: true,
      weightCapacity: '350 lbs',
      dimensions: '36" L x 24" W x 32" H',
      material: 'Steel Frame with Contoured Pad'
    }
  ];

  const benchTypes = [
    {
      name: 'Adjustable Benches',
      image: '/adjustable-benches.jpg',
      description: 'Multi-position benches',
      count: 8,
      slug: 'adjustable-benches'
    },
    {
      name: 'Flat Benches',
      image: '/flat-benches.jpg',
      description: 'Basic flat design',
      count: 6,
      slug: 'flat-benches'
    },
    {
      name: 'FID Benches',
      image: '/fid-benches.jpg',
      description: 'Flat-Incline-Decline',
      count: 4,
      slug: 'fid-benches'
    },
    {
      name: 'Specialty Benches',
      image: '/specialty-benches.jpg',
      description: 'Dedicated function benches',
      count: 7,
      slug: 'specialty-benches'
    }
  ];

  const filters = {
    type: ['Adjustable Benches', 'Flat Benches', 'FID Benches', 'Specialty Benches', 'Commercial Benches'],
    priceRange: [
      'Under $100',
      '$100 - $200',
      '$200 - $300',
      '$300 - $500',
      'Above $500'
    ],
    brand: ['ProFit', 'IronMaster', 'GymPro', 'PowerFlex', 'SpaceSaver', 'Body-Solid', 'Rogue'],
    capacity: ['Under 300 lbs', '300-500 lbs', '500-800 lbs', '800-1000 lbs', 'Above 1000 lbs']
  };

  const toggleFilter = (filterType, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType ].includes(value)
        ? prev[filterType ].filter((item) => item !== value)
        : [...prev[filterType ] , value]
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
                <Link href="/gym-equipment/strength-training" className="hover:text-white transition-colors">Strength Training</Link>
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <span className="text-white font-medium">Benches</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Weight Benches
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl">
                From basic flat benches to advanced adjustable models. Find the perfect bench for your strength training needs.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="text-6xl">🛋️</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Navigation */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Bench Types</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {benchTypes.map((type, index) => (
              <Link
                key={index}
                href={`/gym-equipment/strength-training/benches/${type.slug}`}
                className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-200 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-cyan-200 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:from-blue-200 group-hover:to-cyan-300 transition-all duration-200">
                  <div className="text-xl">
                    {type.name === 'Adjustable Benches' ? '🔄' :
                     type.name === 'Flat Benches' ? '📏' :
                     type.name === 'FID Benches' ? '⚡' : '🎯'}
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                  {type.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{type.description}</p>
                <span className="inline-block mt-2 text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                  {type.count} items
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
                All Weight Benches
              </h2>
              <p className="text-gray-600">
                Showing {benchProducts.length} products
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
                <option value="capacity">Weight Capacity</option>
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

                {/* Bench Type Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Bench Type</h4>
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

                {/* Weight Capacity Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Weight Capacity</h4>
                  <div className="space-y-2">
                    {filters.capacity.map((capacity) => (
                      <label key={capacity} className="flex items-center">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{capacity}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Features Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Features</h4>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Adjustable</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Foldable</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Wheels</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Commercial Grade</span>
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
                  {benchProducts.map((product) => (
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
                          {product.category === 'Adjustable Benches' ? '🔄' :
                           product.category === 'Flat Benches' ? '📏' :
                           product.category === 'FID Benches' ? '⚡' : '🎯'}
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
                        
                        {/* Specifications */}
                        <div className="mb-3">
                          <div className="flex items-center text-sm text-gray-600 mb-1">
                            <span className="font-medium">Capacity:</span>
                            <span className="ml-2">{product.weightCapacity}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <span className="font-medium">Material:</span>
                            <span className="ml-2">{product.material}</span>
                          </div>
                        </div>

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
                  {benchProducts.map((product) => (
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
                          {product.category === 'Adjustable Benches' ? '🔄' :
                           product.category === 'Flat Benches' ? '📏' :
                           product.category === 'FID Benches' ? '⚡' : '🎯'}
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
                            
                            {/* Specifications */}
                            <div className="grid grid-cols-2 gap-4 mb-4">
                              <div>
                                <span className="text-sm font-medium text-gray-700">Weight Capacity:</span>
                                <span className="text-sm text-gray-600 ml-2">{product.weightCapacity}</span>
                              </div>
                              <div>
                                <span className="text-sm font-medium text-gray-700">Dimensions:</span>
                                <span className="text-sm text-gray-600 ml-2">{product.dimensions}</span>
                              </div>
                              <div>
                                <span className="text-sm font-medium text-gray-700">Material:</span>
                                <span className="text-sm text-gray-600 ml-2">{product.material}</span>
                              </div>
                              <div>
                                <span className="text-sm font-medium text-gray-700">Brand:</span>
                                <span className="text-sm text-gray-600 ml-2">{product.brand}</span>
                              </div>
                            </div>

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
              Why Choose Our Weight Benches?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built for comfort, durability, and performance. Our benches are designed to support your heaviest lifts.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">💪</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Heavy Duty Construction</h3>
              <p className="text-gray-600">
                Commercial-grade steel frames with weight capacities up to 1200 lbs for ultimate safety
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">🛋️</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Padding</h3>
              <p className="text-gray-600">
                High-density foam with commercial vinyl for maximum comfort and durability
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">⚙️</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy Adjustments</h3>
              <p className="text-gray-600">
                Quick-adjust mechanisms for seamless transitions between exercises
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}