// app/gym-equipment/strength-training/dumbbells/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, Star, Heart, Filter, Grid, List } from 'lucide-react';

export default function DumbbellsPage() {
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    type: [],
    priceRange: [],
    brand: []
  });

  const dumbbellProducts = [
    {
      id: 1,
      name: 'Rubber Hex Dumbbell Set (5-50lb)',
      price: '$1,199.99',
      originalPrice: '$1,499.99',
      image: '/rubber-hex-set.jpg',
      rating: 4.8,
      reviews: 234,
      category: 'Rubber Dumbbells',
      brand: 'IronMaster',
      description: 'Complete rubber hex dumbbell set with storage rack',
      features: ['5-50lb range', 'Durable rubber coating', 'Hex shape prevents rolling', 'Includes storage rack'],
      isNew: true,
      isBestseller: true,
      inStock: true,
      weightRange: '5-50 lbs',
      material: 'Rubber Coated',
      setIncludes: '17 pairs + rack',
      individualWeights: true
    },
    {
      id: 2,
      name: 'Adjustable Dumbbell Set (5-50lb)',
      price: '$699.99',
      originalPrice: '$899.99',
      image: '/adjustable-dumbbell-set.jpg',
      rating: 4.7,
      reviews: 189,
      category: 'Adjustable Dumbbells',
      brand: 'PowerBlock',
      description: 'Space-saving adjustable dumbbells with quick change system',
      features: ['5-50lb per hand', 'Quick change plates', 'Compact design', 'No rack needed'],
      isNew: false,
      isBestseller: true,
      inStock: true,
      weightRange: '5-50 lbs',
      material: 'Steel with Plastic',
      setIncludes: '2 handles + plates',
      individualWeights: false
    },
    {
      id: 3,
      name: 'Chrome Dumbbell Set (10-100lb)',
      price: '$2,499.99',
      originalPrice: '$2,999.99',
      image: '/chrome-dumbbell-set.jpg',
      rating: 4.9,
      reviews: 156,
      category: 'Chrome Dumbbells',
      brand: 'ProFit',
      description: 'Professional chrome dumbbell set for commercial gyms',
      features: ['10-100lb in 5lb increments', 'Mirror chrome finish', 'Knurled handles', 'Commercial grade'],
      isNew: false,
      isBestseller: false,
      inStock: true,
      weightRange: '10-100 lbs',
      material: 'Chrome Plated Steel',
      setIncludes: '19 pairs',
      individualWeights: true
    },
    {
      id: 4,
      name: 'Urethane Dumbbells (5-75lb)',
      price: '$1,899.99',
      originalPrice: '$2,299.99',
      image: '/urethane-dumbbells.jpg',
      rating: 4.6,
      reviews: 98,
      category: 'Urethane Dumbbells',
      brand: 'Rogue',
      description: 'Premium urethane dumbbells with superior durability',
      features: ['5-75lb range', 'Urethane coating', 'Quiet and floor-friendly', 'Lifetime warranty'],
      isNew: true,
      isBestseller: false,
      inStock: true,
      weightRange: '5-75 lbs',
      material: 'Urethane Coated',
      setIncludes: '15 pairs',
      individualWeights: true
    },
    {
      id: 5,
      name: 'Adjustable Spinlock Dumbbells',
      price: '$149.99',
      originalPrice: '$199.99',
      image: '/spinlock-dumbbells.jpg',
      rating: 4.3,
      reviews: 267,
      category: 'Adjustable Dumbbells',
      brand: 'PowerFlex',
      description: 'Budget-friendly spinlock adjustable dumbbell set',
      features: ['Adjustable weight', 'Spinlock collars', 'Includes weight plates', 'Great for beginners'],
      isNew: false,
      isBestseller: true,
      inStock: true,
      weightRange: '5-25 lbs',
      material: 'Steel',
      setIncludes: '2 bars + plates + collars',
      individualWeights: false
    },
    {
      id: 6,
      name: 'Neoprene Coated Dumbbell Set',
      price: '$399.99',
      originalPrice: '$499.99',
      image: '/neoprene-dumbbells.jpg',
      rating: 4.4,
      reviews: 178,
      category: 'Coated Dumbbells',
      brand: 'ProFit',
      description: 'Color-coded neoprene dumbbells for home gyms',
      features: ['Color coded by weight', 'Neoprene coating', 'Protects floors', 'Beginner friendly'],
      isNew: false,
      isBestseller: false,
      inStock: true,
      weightRange: '3-20 lbs',
      material: 'Neoprene Coated',
      setIncludes: '8 pairs',
      individualWeights: true
    },
    {
      id: 7,
      name: 'Heavy Duty Adjustable Dumbbells',
      price: '$899.99',
      originalPrice: null,
      image: '/heavy-duty-adjustable.jpg',
      rating: 4.7,
      reviews: 134,
      category: 'Adjustable Dumbbells',
      brand: 'IronMaster',
      description: 'Quick-Lock adjustable dumbbells with heavy-duty construction',
      features: ['5-75lb range', 'Quick-lock system', 'Steel construction', 'Compact storage'],
      isNew: true,
      isBestseller: false,
      inStock: false,
      weightRange: '5-75 lbs',
      material: 'Steel',
      setIncludes: '2 handles + plates',
      individualWeights: false
    },
    {
      id: 8,
      name: 'Commercial Rubber Dumbbells (100-150lb)',
      price: '$1,799.99',
      originalPrice: '$2,099.99',
      image: '/commercial-rubber.jpg',
      rating: 4.8,
      reviews: 67,
      category: 'Rubber Dumbbells',
      brand: 'Rogue',
      description: 'Heavy-duty rubber dumbbells for commercial use',
      features: ['100-150lb pairs', 'Full rubber encasement', 'Hex shape', 'Commercial warranty'],
      isNew: false,
      isBestseller: false,
      inStock: true,
      weightRange: '100-150 lbs',
      material: 'Solid Rubber',
      setIncludes: '6 pairs',
      individualWeights: true
    },
    {
      id: 9,
      name: 'Vinyl Dumbbell Set with Rack',
      price: '$299.99',
      originalPrice: '$379.99',
      image: '/vinyl-dumbbell-set.jpg',
      rating: 4.2,
      reviews: 89,
      category: 'Coated Dumbbells',
      brand: 'PowerFlex',
      description: 'Complete vinyl dumbbell set perfect for home use',
      features: ['3-15lb range', 'Vinyl coating', 'Includes storage rack', 'Space efficient'],
      isNew: false,
      isBestseller: true,
      inStock: true,
      weightRange: '3-15 lbs',
      material: 'Vinyl Coated',
      setIncludes: '7 pairs + rack',
      individualWeights: true
    },
    {
      id: 10,
      name: 'Pro Grade Adjustable Dumbbell System',
      price: '$1,299.99',
      originalPrice: '$1,599.99',
      image: '/pro-adjustable-system.jpg',
      rating: 4.9,
      reviews: 203,
      category: 'Adjustable Dumbbells',
      brand: 'GymPro',
      description: 'Advanced adjustable dumbbell system with digital display',
      features: ['5-90lb range', 'Digital weight display', 'One-click adjustments', 'App connectivity'],
      isNew: true,
      isBestseller: true,
      inStock: true,
      weightRange: '5-90 lbs',
      material: 'Steel with Digital',
      setIncludes: 'Base unit + accessories',
      individualWeights: false
    }
  ];

  const dumbbellTypes = [
    {
      name: 'Rubber Dumbbells',
      image: '/rubber-dumbbells.jpg',
      description: 'Durable rubber coated',
      count: 12,
      slug: 'rubber-dumbbells'
    },
    {
      name: 'Adjustable Dumbbells',
      image: '/adjustable-dumbbells.jpg',
      description: 'Space saving sets',
      count: 8,
      slug: 'adjustable-dumbbells'
    },
    {
      name: 'Chrome Dumbbells',
      image: '/chrome-dumbbells.jpg',
      description: 'Professional finish',
      count: 6,
      slug: 'chrome-dumbbells'
    },
    {
      name: 'Urethane Dumbbells',
      image: '/urethane-dumbbells.jpg',
      description: 'Premium protection',
      count: 4,
      slug: 'urethane-dumbbells'
    },
    {
      name: 'Coated Dumbbells',
      image: '/coated-dumbbells.jpg',
      description: 'Neoprene & vinyl',
      count: 10,
      slug: 'coated-dumbbells'
    },
    {
      name: 'Heavy Dumbbells',
      image: '/heavy-dumbbells.jpg',
      description: '75lbs and above',
      count: 7,
      slug: 'heavy-dumbbells'
    }
  ];

  const filters = {
    type: ['Rubber Dumbbells', 'Adjustable Dumbbells', 'Chrome Dumbbells', 'Urethane Dumbbells', 'Coated Dumbbells', 'Heavy Dumbbells', 'Pro Style'],
    priceRange: [
      'Under $100',
      '$100 - $300',
      '$300 - $600',
      '$600 - $1,000',
      'Above $1,000'
    ],
    brand: ['IronMaster', 'PowerBlock', 'ProFit', 'Rogue', 'PowerFlex', 'GymPro', 'Bowflex', 'CAP'],
    weightRange: [
      'Under 10 lbs',
      '10-25 lbs',
      '25-50 lbs',
      '50-75 lbs',
      '75-100 lbs',
      'Above 100 lbs'
    ],
    material: ['Rubber', 'Chrome', 'Urethane', 'Neoprene', 'Vinyl', 'Steel']
  };

  const toggleFilter = (filterType, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter((item) => item !== value)
        : [...prev[filterType], value]
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
                <span className="text-white font-medium">Dumbbells</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Dumbbells
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl">
                Build strength with our complete range of dumbbells. From adjustable sets to commercial rubber hex, find the perfect weights for your goals.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="text-6xl">💪</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Navigation */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Dumbbell Types</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {dumbbellTypes.map((type, index) => (
              <Link
                key={index}
                href={`/gym-equipment/strength-training/dumbbells/${type.slug}`}
                className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-200 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-cyan-200 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:from-blue-200 group-hover:to-cyan-300 transition-all duration-200">
                  <div className="text-xl">
                    {type.name === 'Rubber Dumbbells' ? '🛡️' :
                     type.name === 'Adjustable Dumbbells' ? '🔄' :
                     type.name === 'Chrome Dumbbells' ? '✨' :
                     type.name === 'Urethane Dumbbells' ? '🌟' :
                     type.name === 'Coated Dumbbells' ? '🎨' : '🏋️'}
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
                All Dumbbells
              </h2>
              <p className="text-gray-600">
                Showing {dumbbellProducts.length} products
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
                <option value="weight">Weight Range</option>
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

                {/* Dumbbell Type Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Dumbbell Type</h4>
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

                {/* Weight Range Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Weight Range</h4>
                  <div className="space-y-2">
                    {filters.weightRange.map((range) => (
                      <label key={range} className="flex items-center">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{range}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Material Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Material</h4>
                  <div className="space-y-2">
                    {filters.material.map((material) => (
                      <label key={material} className="flex items-center">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{material}</span>
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
                      <span className="ml-2 text-sm text-gray-700">Includes Rack</span>
                    </label>
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
                      <span className="ml-2 text-sm text-gray-700">Hex Shape</span>
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
                  {dumbbellProducts.map((product) => (
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
                          {product.category === 'Rubber Dumbbells' ? '🛡️' :
                           product.category === 'Adjustable Dumbbells' ? '🔄' :
                           product.category === 'Chrome Dumbbells' ? '✨' :
                           product.category === 'Urethane Dumbbells' ? '🌟' : '🎨'}
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
                        <div className="mb-3 space-y-1">
                          <div className="flex items-center text-sm text-gray-600">
                            <span className="font-medium">Weight Range:</span>
                            <span className="ml-2">{product.weightRange}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <span className="font-medium">Material:</span>
                            <span className="ml-2">{product.material}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <span className="font-medium">Includes:</span>
                            <span className="ml-2">{product.setIncludes}</span>
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
                  {dumbbellProducts.map((product) => (
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
                          {product.category === 'Rubber Dumbbells' ? '🛡️' :
                           product.category === 'Adjustable Dumbbells' ? '🔄' :
                           product.category === 'Chrome Dumbbells' ? '✨' :
                           product.category === 'Urethane Dumbbells' ? '🌟' : '🎨'}
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
                                <span className="text-sm font-medium text-gray-700">Weight Range:</span>
                                <span className="text-sm text-gray-600 ml-2">{product.weightRange}</span>
                              </div>
                              <div>
                                <span className="text-sm font-medium text-gray-700">Material:</span>
                                <span className="text-sm text-gray-600 ml-2">{product.material}</span>
                              </div>
                              <div>
                                <span className="text-sm font-medium text-gray-700">Set Includes:</span>
                                <span className="text-sm text-gray-600 ml-2">{product.setIncludes}</span>
                              </div>
                              <div>
                                <span className="text-sm font-medium text-gray-700">Type:</span>
                                <span className="text-sm text-gray-600 ml-2">
                                  {product.individualWeights ? 'Individual Weights' : 'Adjustable System'}
                                </span>
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
                          <span className="text-sm text-gray-600">Brand: {product.brand}</span>
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
              Why Choose Our Dumbbells?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From beginner sets to commercial grade equipment, our dumbbells are built for performance and durability
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">🏋️</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Versatile Training</h3>
              <p className="text-gray-600">
                Perfect for strength training, muscle building, toning, and rehabilitation exercises
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">💎</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Materials</h3>
              <p className="text-gray-600">
                Choose from rubber, chrome, urethane, and coated options for every need and budget
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">📦</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Space Solutions</h3>
              <p className="text-gray-600">
                Adjustable sets and compact designs perfect for home gyms and limited spaces
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}