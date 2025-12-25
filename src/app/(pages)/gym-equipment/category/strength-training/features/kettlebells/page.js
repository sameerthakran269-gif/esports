// app/gym-equipment/strength-training/kettlebells/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, Star, Heart, Filter, Grid, List } from 'lucide-react';

export default function KettlebellsPage() {
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    type: [],
    priceRange: [],
    brand: []
  });

  const kettlebellProducts = [
    {
      id: 1,
      name: 'Competition Kettlebell Set (9-32kg)',
      price: '$899.99',
      originalPrice: '$1,099.99',
      image: '/competition-kettlebell-set.jpg',
      rating: 4.9,
      reviews: 167,
      category: 'Competition Kettlebells',
      brand: 'Rogue',
      description: 'Professional competition kettlebells with uniform dimensions',
      features: ['9-32kg range', 'Uniform size', 'Competition standard', 'Color coded'],
      isNew: true,
      isBestseller: true,
      inStock: true,
      weightRange: '9-32kg',
      material: 'Cast Iron with E-coat',
      handleDiameter: '35mm',
      finish: 'Powder Coated'
    },
    {
      id: 2,
      name: 'Cast Iron Kettlebell Set (5-40lb)',
      price: '$499.99',
      originalPrice: '$649.99',
      image: '/cast-iron-kettlebell-set.jpg',
      rating: 4.7,
      reviews: 234,
      category: 'Cast Iron Kettlebells',
      brand: 'ProFit',
      description: 'Classic cast iron kettlebells with enamel finish',
      features: ['5-40lb range', 'Enamel finish', 'Textured handle', 'Beginner friendly'],
      isNew: false,
      isBestseller: true,
      inStock: true,
      weightRange: '5-40 lbs',
      material: 'Cast Iron',
      handleDiameter: '33mm',
      finish: 'Enamel Coated'
    },
    {
      id: 3,
      name: 'Adjustable Competition Kettlebell',
      price: '$299.99',
      originalPrice: '$379.99',
      image: '/adjustable-competition-kb.jpg',
      rating: 4.6,
      reviews: 189,
      category: 'Adjustable Kettlebells',
      brand: 'Kettlebell Kings',
      description: 'Space-saving adjustable competition kettlebell',
      features: ['12-32kg adjustable', 'Competition specs', 'Quick change plates', 'Compact storage'],
      isNew: true,
      isBestseller: false,
      inStock: true,
      weightRange: '12-32kg',
      material: 'Steel with Plastic',
      handleDiameter: '35mm',
      finish: 'Powder Coated'
    },
    {
      id: 4,
      name: 'Vinyl Coated Kettlebell Set',
      price: '$349.99',
      originalPrice: '$449.99',
      image: '/vinyl-coated-kettlebells.jpg',
      rating: 4.4,
      reviews: 156,
      category: 'Coated Kettlebells',
      brand: 'PowerFlex',
      description: 'Colorful vinyl coated kettlebells for home use',
      features: ['Color coded', 'Floor friendly', 'Rust resistant', 'Comfortable grip'],
      isNew: false,
      isBestseller: false,
      inStock: true,
      weightRange: '8-35 lbs',
      material: 'Cast Iron with Vinyl',
      handleDiameter: '32mm',
      finish: 'Vinyl Coated'
    },
    {
      id: 5,
      name: 'Hardstyle Kettlebell (12-48kg)',
      price: '$699.99',
      originalPrice: '$849.99',
      image: '/hardstyle-kettlebells.jpg',
      rating: 4.8,
      reviews: 278,
      category: 'Hardstyle Kettlebells',
      brand: 'Dragon Door',
      description: 'Traditional hardstyle kettlebells for classic kettlebell training',
      features: ['Wide handle base', 'Flat bottom', 'Rounded horns', 'Authentic design'],
      isNew: false,
      isBestseller: true,
      inStock: true,
      weightRange: '12-48kg',
      material: 'Cast Iron',
      handleDiameter: '38mm',
      finish: 'Black E-coat'
    },
    {
      id: 6,
      name: 'Soft Kettlebell Set (4-20kg)',
      price: '$399.99',
      originalPrice: null,
      image: '/soft-kettlebells.jpg',
      rating: 4.3,
      reviews: 89,
      category: 'Soft Kettlebells',
      brand: 'ProFit',
      description: 'Soft shell kettlebells perfect for group fitness and rehabilitation',
      features: ['Soft exterior', 'Sand filled', 'Color coded', 'Safe for floors'],
      isNew: true,
      isBestseller: false,
      inStock: true,
      weightRange: '4-20kg',
      material: 'PVC Shell with Sand',
      handleDiameter: '36mm',
      finish: 'Soft PVC'
    },
    {
      id: 7,
      name: 'Competition Kettlebell (4-48kg)',
      price: '$1,299.99',
      originalPrice: '$1,599.99',
      image: '/full-competition-set.jpg',
      rating: 4.9,
      reviews: 134,
      category: 'Competition Kettlebells',
      brand: 'Kettlebell Kings',
      description: 'Complete competition set for serious athletes and gyms',
      features: ['Full 4-48kg range', 'IPF standard', 'Color coded', 'Lifetime warranty'],
      isNew: false,
      isBestseller: false,
      inStock: false,
      weightRange: '4-48kg',
      material: 'Cast Iron with E-coat',
      handleDiameter: '35mm',
      finish: 'Competition Paint'
    },
    {
      id: 8,
      name: 'Adjustable Kettlebell (10-40lb)',
      price: '$199.99',
      originalPrice: '$249.99',
      image: '/adjustable-kettlebell.jpg',
      rating: 4.5,
      reviews: 312,
      category: 'Adjustable Kettlebells',
      brand: 'Bowflex',
      description: 'Space-efficient adjustable kettlebell for home workouts',
      features: ['10-40lb range', 'Dial adjustment', 'Compact design', 'Includes case'],
      isNew: false,
      isBestseller: true,
      inStock: true,
      weightRange: '10-40 lbs',
      material: 'Steel and Plastic',
      handleDiameter: '34mm',
      finish: 'Matte Black'
    },
    {
      id: 9,
      name: 'Eco-Friendly Rubber Kettlebell',
      price: '$279.99',
      originalPrice: '$349.99',
      image: '/rubber-kettlebell.jpg',
      rating: 4.6,
      reviews: 167,
      category: 'Rubber Kettlebells',
      brand: 'Yes4All',
      description: '100% recycled rubber kettlebells with steel core',
      features: ['Eco-friendly', 'Quiet training', 'Floor protection', 'Durable construction'],
      isNew: true,
      isBestseller: false,
      inStock: true,
      weightRange: '10-50 lbs',
      material: 'Recycled Rubber',
      handleDiameter: '35mm',
      finish: 'Natural Rubber'
    },
    {
      id: 10,
      name: 'Professional Steel Kettlebell',
      price: '$899.99',
      originalPrice: '$1,099.99',
      image: '/steel-kettlebell.jpg',
      rating: 4.7,
      reviews: 78,
      category: 'Steel Kettlebells',
      brand: 'Rogue',
      description: 'Machined steel kettlebells for precision and durability',
      features: ['Machined steel', 'Perfect balance', 'Smooth handle', 'Commercial grade'],
      isNew: false,
      isBestseller: false,
      inStock: true,
      weightRange: '8-48kg',
      material: 'Solid Steel',
      handleDiameter: '35mm',
      finish: 'Chrome Plated'
    },
    {
      id: 11,
      name: 'Beginner Kettlebell Set (5-25lb)',
      price: '$229.99',
      originalPrice: '$299.99',
      image: '/beginner-kettlebell-set.jpg',
      rating: 4.4,
      reviews: 189,
      category: 'Cast Iron Kettlebells',
      brand: 'PowerFlex',
      description: 'Perfect starter set for kettlebell beginners',
      features: ['Beginner weights', 'Comfortable handles', 'Includes workout guide', 'Rack not included'],
      isNew: false,
      isBestseller: true,
      inStock: true,
      weightRange: '5-25 lbs',
      material: 'Cast Iron',
      handleDiameter: '32mm',
      finish: 'Vinyl Coated'
    },
    {
      id: 12,
      name: 'Heavy Duty Competition Bell (40-48kg)',
      price: '$599.99',
      originalPrice: '$749.99',
      image: '/heavy-competition-kb.jpg',
      rating: 4.8,
      reviews: 45,
      category: 'Competition Kettlebells',
      brand: 'Kettlebell Kings',
      description: 'Heavy competition kettlebells for advanced athletes',
      features: ['40-48kg range', 'Competition standard', 'Reinforced handle', 'Professional grade'],
      isNew: true,
      isBestseller: false,
      inStock: true,
      weightRange: '40-48kg',
      material: 'Cast Iron with E-coat',
      handleDiameter: '35mm',
      finish: 'Color Coded'
    }
  ];

  const kettlebellTypes = [
    {
      name: 'Competition',
      image: '/competition-kettlebells.jpg',
      description: 'Professional grade',
      count: 8,
      slug: 'competition'
    },
    {
      name: 'Cast Iron',
      image: '/cast-iron-kettlebells.jpg',
      description: 'Classic design',
      count: 15,
      slug: 'cast-iron'
    },
    {
      name: 'Adjustable',
      image: '/adjustable-kettlebells.jpg',
      description: 'Space saving',
      count: 6,
      slug: 'adjustable'
    },
    {
      name: 'Hardstyle',
      image: '/hardstyle-kettlebells.jpg',
      description: 'Traditional training',
      count: 10,
      slug: 'hardstyle'
    },
    {
      name: 'Coated',
      image: '/coated-kettlebells.jpg',
      description: 'Protected finish',
      count: 12,
      slug: 'coated'
    },
    {
      name: 'Soft Shell',
      image: '/soft-kettlebells.jpg',
      description: 'Group fitness',
      count: 5,
      slug: 'soft-shell'
    }
  ];

  const filters = {
    type: ['Competition Kettlebells', 'Cast Iron Kettlebells', 'Adjustable Kettlebells', 'Hardstyle Kettlebells', 'Coated Kettlebells', 'Soft Kettlebells', 'Rubber Kettlebells', 'Steel Kettlebells'],
    priceRange: [
      'Under $50',
      '$50 - $100',
      '$100 - $200',
      '$200 - $400',
      '$400 - $700',
      'Above $700'
    ],
    brand: ['Rogue', 'Kettlebell Kings', 'ProFit', 'PowerFlex', 'Dragon Door', 'Bowflex', 'Yes4All', 'CAP'],
    weightRange: [
      'Under 10 lbs',
      '10-20 lbs',
      '20-35 lbs',
      '35-53 lbs',
      '53-70 lbs',
      'Above 70 lbs'
    ],
    material: ['Cast Iron', 'Steel', 'Rubber', 'Vinyl Coated', 'Powder Coated', 'Enamel', 'PVC']
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
                <Link href="/gym-equipment/strength-training" className="hover:text-white transition-colors">Strength Training</Link>
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <span className="text-white font-medium">Kettlebells</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Kettlebells
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl">
                Unleash your strength with our premium kettlebells. From competition standards to beginner-friendly options, perfect for swings, snatches, and full-body workouts.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="text-6xl">🏺</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Navigation */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Kettlebell Types</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {kettlebellTypes.map((type, index) => (
              <Link
                key={index}
                href={`/gym-equipment/strength-training/kettlebells/${type.slug}`}
                className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-200 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-cyan-200 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:from-blue-200 group-hover:to-cyan-300 transition-all duration-200">
                  <div className="text-xl">
                    {type.name === 'Competition' ? '🏆' :
                     type.name === 'Cast Iron' ? '🛡️' :
                     type.name === 'Adjustable' ? '🔄' :
                     type.name === 'Hardstyle' ? '💪' :
                     type.name === 'Coated' ? '🎨' : '🛋️'}
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
                All Kettlebells
              </h2>
              <p className="text-gray-600">
                Showing {kettlebellProducts.length} products
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

                {/* Kettlebell Type Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Kettlebell Type</h4>
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
                      <span className="ml-2 text-sm text-gray-700">Competition Standard</span>
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
                      <span className="ml-2 text-sm text-gray-700">Color Coded</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Floor Friendly</span>
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
                  {kettlebellProducts.map((product) => (
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
                          {product.category === 'Competition Kettlebells' ? '🏆' :
                           product.category === 'Cast Iron Kettlebells' ? '🛡️' :
                           product.category === 'Adjustable Kettlebells' ? '🔄' :
                           product.category === 'Hardstyle Kettlebells' ? '💪' :
                           product.category === 'Coated Kettlebells' ? '🎨' : '🛋️'}
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
                            <span className="font-medium">Handle:</span>
                            <span className="ml-2">{product.handleDiameter}</span>
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
                  {kettlebellProducts.map((product) => (
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
                          {product.category === 'Competition Kettlebells' ? '🏆' :
                           product.category === 'Cast Iron Kettlebells' ? '🛡️' :
                           product.category === 'Adjustable Kettlebells' ? '🔄' :
                           product.category === 'Hardstyle Kettlebells' ? '💪' :
                           product.category === 'Coated Kettlebells' ? '🎨' : '🛋️'}
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
                                <span className="text-sm font-medium text-gray-700">Handle Diameter:</span>
                                <span className="text-sm text-gray-600 ml-2">{product.handleDiameter}</span>
                              </div>
                              <div>
                                <span className="text-sm font-medium text-gray-700">Finish:</span>
                                <span className="text-sm text-gray-600 ml-2">{product.finish}</span>
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
              Why Choose Our Kettlebells?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Engineered for performance, durability, and the perfect swing. Transform your workouts with premium kettlebells designed for every fitness level.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">⚖️</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Precision Balanced</h3>
              <p className="text-gray-600">
                Perfectly balanced for smooth swings, snatches, and Turkish get-ups with consistent performance
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">🔧</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Durable Construction</h3>
              <p className="text-gray-600">
                Built from high-quality materials that withstand intense training and maintain their finish
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">🎯</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Competition Ready</h3>
              <p className="text-gray-600">
                IPF standard kettlebells with uniform dimensions for serious athletes and competitions
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}