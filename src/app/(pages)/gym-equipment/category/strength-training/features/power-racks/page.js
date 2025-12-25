// app/gym-equipment/strength-training/power-racks/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, Star, Heart, Filter, Grid, List, Shield, Truck, Wrench } from 'lucide-react';

export default function PowerRacksPage() {
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    type: [],
    priceRange: [],
    brand: []
  });

  const powerRackProducts = [
    {
      id: 1,
      name: 'Pro Power Rack with Lat Pulldown',
      price: '$899.99',
      originalPrice: '$1,099.99',
      image: '/power-rack-pro.jpg',
      rating: 4.8,
      reviews: 142,
      category: 'Power Racks',
      brand: 'ProFit',
      description: 'Professional grade power rack with integrated lat pulldown system',
      features: ['1000lb capacity', 'Lat pulldown attachment', 'Dip bars included', 'Pull-up bar'],
      specifications: {
        material: '3x3" 11-gauge steel',
        weightCapacity: '1000 lbs',
        dimensions: '90" H x 48" W x 48" D',
        finish: 'Powder coated black'
      },
      isNew: true,
      isBestseller: true,
      inStock: true,
      delivery: 'Free shipping'
    },
    {
      id: 2,
      name: 'Commercial Power Cage',
      price: '$1,499.99',
      originalPrice: '$1,799.99',
      image: '/power-cage-commercial.jpg',
      rating: 4.9,
      reviews: 89,
      category: 'Power Racks',
      brand: 'Rogue',
      description: 'Heavy-duty commercial power cage for serious training',
      features: ['1500lb capacity', 'Laser-cut numbering', 'Westside hole spacing', 'Multiple attachments'],
      specifications: {
        material: '3x3" 11-gauge steel',
        weightCapacity: '1500 lbs',
        dimensions: '92" H x 49" W x 48" D',
        finish: 'Black zinc coating'
      },
      isNew: false,
      isBestseller: true,
      inStock: true,
      delivery: 'Free shipping'
    },
    {
      id: 3,
      name: 'Compact Home Power Rack',
      price: '$599.99',
      originalPrice: '$749.99',
      image: '/power-rack-compact.jpg',
      rating: 4.6,
      reviews: 203,
      category: 'Power Racks',
      brand: 'ProFit',
      description: 'Space-saving power rack perfect for home gyms',
      features: ['700lb capacity', 'Compact design', 'Pull-up bar', 'Safety bars'],
      specifications: {
        material: '2x2" 12-gauge steel',
        weightCapacity: '700 lbs',
        dimensions: '84" H x 44" W x 44" D',
        finish: 'Powder coated'
      },
      isNew: false,
      isBestseller: false,
      inStock: true,
      delivery: 'Free shipping'
    },
    {
      id: 4,
      name: 'Half Power Rack with Plate Storage',
      price: '$699.99',
      originalPrice: null,
      image: '/half-power-rack.jpg',
      rating: 4.5,
      reviews: 67,
      category: 'Power Racks',
      brand: 'IronMaster',
      description: 'Half rack with integrated plate storage and pull-up bar',
      features: ['800lb capacity', 'Plate storage', 'Pull-up bar', 'J-hooks included'],
      specifications: {
        material: '3x3" 11-gauge steel',
        weightCapacity: '800 lbs',
        dimensions: '86" H x 52" W x 50" D',
        finish: 'Black powder coat'
      },
      isNew: true,
      isBestseller: false,
      inStock: true,
      delivery: 'Free shipping'
    },
    {
      id: 5,
      name: 'Wall-Mounted Power Rack',
      price: '$799.99',
      originalPrice: '$949.99',
      image: '/wall-mounted-rack.jpg',
      rating: 4.4,
      reviews: 94,
      category: 'Power Racks',
      brand: 'Rogue',
      description: 'Space-efficient wall-mounted power rack for limited spaces',
      features: ['1000lb capacity', 'Wall mounted', 'Foldable design', 'Safety arms'],
      specifications: {
        material: '3x3" 11-gauge steel',
        weightCapacity: '1000 lbs',
        dimensions: '90" H x 52" W (folded: 24" from wall)',
        finish: 'Powder coated'
      },
      isNew: false,
      isBestseller: false,
      inStock: false,
      delivery: 'Free shipping'
    },
    {
      id: 6,
      name: 'Power Rack with Cable System',
      price: '$1,299.99',
      originalPrice: '$1,599.99',
      image: '/power-rack-cable.jpg',
      rating: 4.7,
      reviews: 56,
      category: 'Power Racks',
      brand: 'GymPro',
      description: 'Complete power rack with integrated high-low cable system',
      features: ['1200lb capacity', 'Cable crossover', 'Weight stack', 'Multiple attachments'],
      specifications: {
        material: '3x3" 11-gauge steel',
        weightCapacity: '1200 lbs',
        dimensions: '90" H x 96" W x 48" D',
        finish: 'Commercial chrome'
      },
      isNew: true,
      isBestseller: false,
      inStock: true,
      delivery: 'White glove delivery'
    }
  ];

  const powerRackTypes = [
    {
      name: 'Full Power Racks',
      image: '/full-racks.jpg',
      description: 'Complete cages with full safety',
      count: 8
    },
    {
      name: 'Half Racks',
      image: '/half-racks.jpg',
      description: 'Space-efficient half racks',
      count: 5
    },
    {
      name: 'Wall Mounted',
      image: '/wall-racks.jpg',
      description: 'Foldable wall-mounted racks',
      count: 3
    },
    {
      name: 'Compact Racks',
      image: '/compact-racks.jpg',
      description: 'Space-saving designs',
      count: 6
    },
    {
      name: 'Commercial Racks',
      image: '/commercial-racks.jpg',
      description: 'Heavy-duty commercial grade',
      count: 4
    },
    {
      name: 'Rack Systems',
      image: '/rack-systems.jpg',
      description: 'Racks with attachments',
      count: 7
    }
  ];

  const filters = {
    type: ['Full Power Racks', 'Half Racks', 'Wall Mounted', 'Compact Racks', 'Commercial Racks', 'Rack Systems'],
    priceRange: [
      'Under $500',
      '$500 - $1,000',
      '$1,000 - $1,500',
      '$1,500 - $2,000',
      'Above $2,000'
    ],
    brand: ['ProFit', 'Rogue', 'IronMaster', 'GymPro', 'Rep Fitness', 'Body-Solid', 'EliteFTS']
  };

  const toggleFilter = (filterType, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: (prev)[filterType].includes(value)
        ? (prev)[filterType].filter((item) => item !== value)
        : [...(prev )[filterType], value]
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
                <span className="text-white font-medium">Power Racks</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Power Racks & Cages
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl">
                Professional power racks and cages for serious strength training. 
                Built to last with commercial-grade materials and safety features.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="text-6xl">🔩</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Navigation */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Types of Power Racks</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {powerRackTypes.map((type, index) => (
              <Link
                key={index}
                href={`/gym-equipment/strength-training/power-racks/${type.name.toLowerCase().replace(' ', '-')}`}
                className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-200 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-cyan-200 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:from-blue-200 group-hover:to-cyan-300 transition-all duration-200">
                  <div className="text-xl">
                    {type.name === 'Full Power Racks' ? '🏗️' :
                     type.name === 'Half Racks' ? '⚡' :
                     type.name === 'Wall Mounted' ? '📌' :
                     type.name === 'Compact Racks' ? '📦' :
                     type.name === 'Commercial Racks' ? '💪' : '🔧'}
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
                Power Racks & Cages
              </h2>
              <p className="text-gray-600">
                Showing {powerRackProducts.length} products
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

                {/* Rack Type Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Rack Type</h4>
                  <div className="space-y-2">
                    {filters.type.map((type) => (
                      <label key={type} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={(selectedFilters.type).includes(type)}
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
                          checked={(selectedFilters.priceRange).includes(range)}
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
                          checked={(selectedFilters.brand).includes(brand)}
                          onChange={() => toggleFilter('brand', brand)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Capacity Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Weight Capacity</h4>
                  <div className="space-y-2">
                    {['Under 500 lbs', '500-800 lbs', '800-1200 lbs', 'Above 1200 lbs'].map((capacity) => (
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {powerRackProducts.map((product) => (
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
                        <div className="text-5xl">🔩</div>
                        <button className="absolute top-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <Heart className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-gray-900 text-lg">{product.name}</h3>
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                            {product.brand}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                        
                        {/* Specifications */}
                        <div className="mb-3">
                          <div className="grid grid-cols-2 gap-2 text-xs">
                            <div className="text-gray-500">Capacity:</div>
                            <div className="text-gray-900 font-medium">{product.specifications.weightCapacity}</div>
                            <div className="text-gray-500">Material:</div>
                            <div className="text-gray-900 font-medium">{product.specifications.material}</div>
                          </div>
                        </div>

                        {/* Features */}
                        <div className="mb-3">
                          <div className="flex flex-wrap gap-1">
                            {product.features.slice(0, 3).map((feature, index) => (
                              <span key={index} className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded">
                                {feature}
                              </span>
                            ))}
                            {product.features.length > 3 && (
                              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                +{product.features.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center mb-3">
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-amber-400 fill-current" />
                            <span className="ml-1 text-sm text-gray-600">
                              {product.rating} ({product.reviews} reviews)
                            </span>
                          </div>
                          <span className="mx-2 text-gray-300">•</span>
                          <span className="text-xs text-green-600 font-medium">{product.delivery}</span>
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
                  {powerRackProducts.map((product) => (
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
                        <div className="text-4xl">🔩</div>
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                {product.brand}
                              </span>
                              {!product.inStock && (
                                <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
                                  Out of Stock
                                </span>
                              )}
                            </div>
                            <p className="text-gray-600 mb-3">{product.description}</p>
                            
                            {/* Specifications */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                              <div>
                                <div className="text-sm text-gray-500">Capacity</div>
                                <div className="text-sm font-semibold">{product.specifications.weightCapacity}</div>
                              </div>
                              <div>
                                <div className="text-sm text-gray-500">Material</div>
                                <div className="text-sm font-semibold">{product.specifications.material.split(' ')[0]}</div>
                              </div>
                              <div>
                                <div className="text-sm text-gray-500">Dimensions</div>
                                <div className="text-sm font-semibold">{product.specifications.dimensions.split(' ')[0]}</div>
                              </div>
                              <div>
                                <div className="text-sm text-gray-500">Delivery</div>
                                <div className="text-sm font-semibold text-green-600">{product.delivery}</div>
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
              Why Choose Our Power Racks?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built to professional standards with safety and durability as our top priorities
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Maximum Safety</h3>
              <p className="text-gray-600">
                Built with safety bars and secure locking mechanisms to protect during heavy lifts
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Free Assembly</h3>
              <p className="text-gray-600">
                Professional assembly included with all power rack purchases
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Lifetime Warranty</h3>
              <p className="text-gray-600">
                Lifetime warranty on all frames and 10-year warranty on attachments
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Technical Specifications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Understanding what makes our power racks stand out
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 mb-2">1000+ lbs</div>
              <div className="text-gray-600">Average Weight Capacity</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 mb-2">3x3"</div>
              <div className="text-gray-600">Steel Tube Standard</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 mb-2">11-Gauge</div>
              <div className="text-gray-600">Steel Thickness</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 mb-2">2"</div>
              <div className="text-gray-600">Westside Spacing</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}