// app/gym-equipment/free-weights/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, Star, Heart, Filter, Grid, List, Scale, Shield, Truck } from 'lucide-react';

export default function FreeWeightsPage() {
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    type: [],
    material: [],
    priceRange: [],
    brand: [],
    weight: []
  });

  const freeWeightProducts = [
    {
      id: 1,
      name: 'Olympic Weight Set (300lb)',
      price: '$599.99',
      originalPrice: '$749.99',
      image: '/weight-set.jpg',
      rating: 4.7,
      reviews: 203,
      category: 'Weight Sets',
      brand: 'IronMaster',
      material: 'Rubber',
      description: 'Complete Olympic weight set with bumper plates and 7ft barbell',
      features: ['300lb Total Weight', 'Bumper Plates', '7ft Olympic Bar', 'Spring Collars'],
      specifications: {
        plateTypes: 'Bumper',
        barLength: '7 feet',
        collarType: 'Spring',
        storage: 'Included'
      },
      weights: ['45lb', '35lb', '25lb', '10lb', '5lb', '2.5lb'],
      isNew: false,
      isBestseller: true,
      inStock: true,
      warranty: 'Lifetime'
    },
    {
      id: 2,
      name: 'Adjustable Dumbbell Set (5-50lb)',
      price: '$399.99',
      originalPrice: '$499.99',
      image: '/dumbbells.jpg',
      rating: 4.5,
      reviews: 156,
      category: 'Dumbbells',
      brand: 'QuickFit',
      material: 'Steel',
      description: 'Space-saving adjustable dumbbell set with quick change mechanism',
      features: ['5-50lb Range', 'Quick Change', 'Compact Design', 'Storage Tray'],
      specifications: {
        weightRange: '5-50lb',
        adjustment: '2.5lb increments',
        mechanism: 'Dial System',
        storage: 'Tray Included'
      },
      weights: ['5-50lb adjustable'],
      isNew: false,
      isBestseller: false,
      inStock: true,
      warranty: '10 Years'
    },
    {
      id: 3,
      name: 'Rubber Hex Dumbbell Set (5-50lb)',
      price: '$899.99',
      originalPrice: '$1,099.99',
      image: '/hex-dumbbells.jpg',
      rating: 4.8,
      reviews: 178,
      category: 'Dumbbells',
      brand: 'IronMaster',
      material: 'Rubber',
      description: 'Professional rubber hex dumbbell set with rack',
      features: ['5-50lb Pairs', 'Hex Shape', 'Rubber Coating', 'Dumbbell Rack'],
      specifications: {
        weightRange: '5-50lb pairs',
        shape: 'Hexagonal',
        coating: 'Rubber',
        storage: 'Rack Included'
      },
      weights: ['5lb', '10lb', '15lb', '20lb', '25lb', '30lb', '35lb', '40lb', '45lb', '50lb'],
      isNew: true,
      isBestseller: true,
      inStock: true,
      warranty: 'Lifetime'
    },
    {
      id: 4,
      name: 'Kettlebell Set (10-40lb)',
      price: '$349.99',
      originalPrice: '$449.99',
      image: '/kettlebell-set.jpg',
      rating: 4.7,
      reviews: 123,
      category: 'Kettlebells',
      brand: 'PowerFlex',
      material: 'Vinyl',
      description: 'Vinyl-coated kettlebell set with color-coded weights',
      features: ['10-40lb Range', 'Color Coded', 'Vinyl Coating', 'Storage Rack'],
      specifications: {
        weightRange: '10-40lb',
        coating: 'Vinyl',
        handle: 'Wide Grip',
        storage: 'Rack Included'
      },
      weights: ['10lb', '15lb', '20lb', '25lb', '30lb', '35lb', '40lb'],
      isNew: false,
      isBestseller: true,
      inStock: true,
      warranty: '5 Years'
    },
    {
      id: 5,
      name: 'Olympic Barbell (7ft)',
      price: '$299.99',
      originalPrice: '$379.99',
      image: '/barbell.jpg',
      rating: 4.6,
      reviews: 94,
      category: 'Barbells',
      brand: 'ProFit',
      material: 'Steel',
      description: 'Professional Olympic barbell with chrome finish',
      features: ['1500lb Capacity', 'Chrome Finish', 'Needle Bearings', 'Knurled Grip'],
      specifications: {
        capacity: '1500lb',
        finish: 'Chrome',
        bearings: 'Needle',
        grip: 'Knurled'
      },
      weights: ['45lb bar'],
      isNew: false,
      isBestseller: false,
      inStock: true,
      warranty: 'Lifetime'
    },
    {
      id: 6,
      name: 'Cast Iron Plate Set (255lb)',
      price: '$299.99',
      originalPrice: '$399.99',
      image: '/iron-plates.jpg',
      rating: 4.4,
      reviews: 87,
      category: 'Weight Plates',
      brand: 'IronWorks',
      material: 'Cast Iron',
      description: 'Classic cast iron weight plates with Olympic center hole',
      features: ['255lb Total', 'Cast Iron', 'Olympic Hole', 'Grip Handles'],
      specifications: {
        plateTypes: 'Cast Iron',
        holeSize: '2-inch Olympic',
        finish: 'Black Oxide',
        edges: 'Diamond Pattern'
      },
      weights: ['45lb', '35lb', '25lb', '10lb', '5lb'],
      isNew: false,
      isBestseller: false,
      inStock: true,
      warranty: 'Lifetime'
    },
    {
      id: 7,
      name: 'Competition Kettlebells',
      price: '$49.99',
      originalPrice: '$69.99',
      image: '/competition-kettlebell.jpg',
      rating: 4.9,
      reviews: 67,
      category: 'Kettlebells',
      brand: 'CompetitionPro',
      material: 'Steel',
      description: 'Competition-grade kettlebells with uniform dimensions',
      features: ['Competition Standard', 'Uniform Size', 'Steel Construction', 'Color Coded'],
      specifications: {
        standard: 'Competition',
        size: 'Uniform',
        material: 'Steel',
        finish: 'Powder Coat'
      },
      weights: ['9lb', '13lb', '18lb', '26lb', '35lb', '44lb', '53lb', '70lb'],
      isNew: true,
      isBestseller: false,
      inStock: true,
      warranty: 'Lifetime'
    },
    {
      id: 8,
      name: 'EZ Curl Bar',
      price: '$89.99',
      originalPrice: '$119.99',
      image: '/ez-curl-bar.jpg',
      rating: 4.5,
      reviews: 134,
      category: 'Barbells',
      brand: 'FlexGrip',
      material: 'Steel',
      description: 'Wavy curl bar for comfortable bicep and tricep workouts',
      features: ['Wavy Design', 'Comfortable Grip', 'Compact Size', 'Chrome Finish'],
      specifications: {
        capacity: '500lb',
        finish: 'Chrome',
        length: '4 feet',
        grip: 'Knurled'
      },
      weights: ['20lb bar'],
      isNew: false,
      isBestseller: true,
      inStock: true,
      warranty: '10 Years'
    },
    {
      id: 9,
      name: 'Micro Gainz Plate Set',
      price: '$39.99',
      originalPrice: '$49.99',
      image: '/micro-plates.jpg',
      rating: 4.6,
      reviews: 89,
      category: 'Weight Plates',
      brand: 'PrecisionLift',
      material: 'Steel',
      description: 'Small weight plates for incremental strength progression',
      features: ['Small Increments', 'Steel Construction', 'Color Coded', 'Magnetic'],
      specifications: {
        increments: '0.5lb - 2.5lb',
        material: 'Steel',
        attachment: 'Magnetic',
        use: 'Progressive Overload'
      },
      weights: ['0.5lb', '1lb', '1.5lb', '2lb', '2.5lb'],
      isNew: true,
      isBestseller: false,
      inStock: true,
      warranty: '5 Years'
    },
    {
      id: 10,
      name: 'Weight Plate Tree',
      price: '$149.99',
      originalPrice: '$199.99',
      image: '/plate-tree.jpg',
      rating: 4.7,
      reviews: 76,
      category: 'Storage',
      brand: 'RackMaster',
      material: 'Steel',
      description: 'Heavy-duty weight plate storage tree with 6 pegs',
      features: ['6 Storage Pegs', 'Steel Construction', 'Wheel Base', '500lb Capacity'],
      specifications: {
        pegs: '6',
        capacity: '500lb',
        base: 'Wheeled',
        finish: 'Black Powder Coat'
      },
      weights: ['Storage only'],
      isNew: false,
      isBestseller: false,
      inStock: true,
      warranty: '5 Years'
    },
    {
      id: 11,
      name: 'Dumbbell Rack',
      price: '$199.99',
      originalPrice: '$249.99',
      image: '/dumbbell-rack.jpg',
      rating: 4.4,
      reviews: 112,
      category: 'Storage',
      brand: 'OrganizeFit',
      material: 'Steel',
      description: 'Commercial dumbbell rack with tiered design',
      features: ['Tiered Design', 'Steel Construction', '1000lb Capacity', 'Easy Access'],
      specifications: {
        capacity: '1000lb',
        design: 'Tiered',
        finish: 'Commercial Black',
        assembly: 'Tool-Free'
      },
      weights: ['Storage only'],
      isNew: false,
      isBestseller: true,
      inStock: true,
      warranty: '10 Years'
    },
    {
      id: 12,
      name: 'Weightlifting Belt',
      price: '$69.99',
      originalPrice: '$89.99',
      image: '/weight-belt.jpg',
      rating: 4.8,
      reviews: 203,
      category: 'Accessories',
      brand: 'LiftPro',
      material: 'Leather',
      description: 'Professional weightlifting belt with lever buckle',
      features: ['Genuine Leather', 'Lever Buckle', '4-inch Width', 'Lower Back Support'],
      specifications: {
        material: 'Leather',
        buckle: 'Lever',
        width: '4 inches',
        sizes: 'XS-XXL'
      },
      weights: ['N/A'],
      isNew: false,
      isBestseller: true,
      inStock: true,
      warranty: '2 Years'
    }
  ];

  const freeWeightCategories = [
    {
      name: 'Dumbbells',
      image: '/dumbbells-cat.jpg',
      description: 'Fixed and adjustable',
      count: 24,
      icon: '💪',
      slug: 'strength-training/features/dumbbells'
    },
    {
      name: 'Barbells',
      image: '/barbells-cat.jpg',
      description: 'Olympic and standard',
      count: 8,
      icon: '🏋️',
      slug: 'free-weights/features/barbells'
    },
    {
      name: 'Weight Plates',
      image: '/plates-cat.jpg',
      description: 'Rubber, iron, bumper',
      count: 15,
      icon: '⚖️',
      slug: 'free-weights/features/weight-plates'
    },
    {
      name: 'Kettlebells',
      image: '/kettlebells-cat.jpg',
      description: 'Cast iron and competition',
      count: 12,
      icon: '🏺',
      slug: 'strength-training/features/kettlebells'
    },
    {
      name: 'Weight Sets',
      image: '/sets-cat.jpg',
      description: 'Complete packages',
      count: 6,
      icon: '📦',
      slug: 'strength-training/features/weight-sets'
    },
    {
      name: 'Storage',
      image: '/storage-cat.jpg',
      description: 'Racks and trees',
      count: 8,
      icon: '🗄️',
      slug: 'free-weights/features/storage'
    }
  ];

  const filters = {
    type: ['Dumbbells', 'Barbells', 'Weight Plates', 'Kettlebells', 'Weight Sets', 'Storage', 'Accessories'],
    material: ['Rubber', 'Steel', 'Cast Iron', 'Vinyl', 'Leather', 'Chrome'],
    priceRange: [
      'Under $50',
      '$50 - $100',
      '$100 - $200',
      '$200 - $500',
      'Above $500'
    ],
    brand: ['IronMaster', 'QuickFit', 'PowerFlex', 'ProFit', 'IronWorks', 'CompetitionPro', 'FlexGrip', 'PrecisionLift', 'RackMaster', 'OrganizeFit', 'LiftPro'],
    weight: ['Under 10lb', '10-25lb', '25-50lb', '50-100lb', 'Above 100lb', 'Adjustable']
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
      <section className="bg-gradient-to-r from-gray-800 to-amber-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <nav className="flex items-center space-x-2 text-sm text-amber-200 mb-4">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <Link href="/gym-equipment" className="hover:text-white transition-colors">Gym Equipment</Link>
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <span className="text-white font-medium">Free Weights</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Free Weights
              </h1>
              <p className="text-xl text-amber-100 max-w-2xl">
                Build raw strength with our premium free weights collection. 
                From dumbbells to barbells, get the tools for serious muscle building.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="text-6xl">💪</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-6 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="flex items-center justify-center">
                <Scale className="w-5 h-5 text-amber-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">50+</span>
              </div>
              <p className="text-sm text-gray-600">Weight Options</p>
            </div>
            <div>
              <div className="flex items-center justify-center">
                <Shield className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">Lifetime</span>
              </div>
              <p className="text-sm text-gray-600">Warranty</p>
            </div>
            <div>
              <div className="flex items-center justify-center">
                <Truck className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">Free</span>
              </div>
              <p className="text-sm text-gray-600">Shipping Over $100</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">24/7</div>
              <p className="text-sm text-gray-600">Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Navigation */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Free Weight Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {freeWeightCategories.map((category, index) => (
              <Link
                key={index}
                href={`/gym-equipment/category/${category.slug}`}
                className="bg-gray-50 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-200 group border border-gray-200"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:from-amber-200 group-hover:to-orange-300 transition-all duration-200">
                  <div className="text-xl">{category.icon}</div>
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-amber-600 transition-colors duration-200">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{category.description}</p>
                <span className="inline-block mt-2 text-xs bg-amber-100 text-amber-600 px-2 py-1 rounded-full">
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
                Free Weights Collection
              </h2>
              <p className="text-gray-600">
                {freeWeightProducts.length} premium free weight products for serious training
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
                <option value="newest">Newest First</option>
                <option value="weight">Weight</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-72 flex-shrink-0">
              <div className="bg-gray-50 rounded-lg p-6 sticky top-4 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Filter Weights
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
                          className="rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{type}</span>
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
                          checked={selectedFilters.material.includes(material)}
                          onChange={() => toggleFilter('material', material)}
                          className="rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{material}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Weight Range Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Weight Range</h4>
                  <div className="space-y-2">
                    {filters.weight.map((weight) => (
                      <label key={weight} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.weight.includes(weight)}
                          onChange={() => toggleFilter('weight', weight)}
                          className="rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{weight}</span>
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

                {/* Clear Filters */}
                <button
                  onClick={() => setSelectedFilters({ type: [], material: [], priceRange: [], brand: [], weight: [] })}
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
                  {freeWeightProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100"
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
                        {product.warranty === 'Lifetime' && (
                          <span className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                            <Shield className="w-3 h-3 mr-1" />
                            Lifetime
                          </span>
                        )}
                        {!product.inStock && (
                          <span className="absolute top-12 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Out of Stock
                          </span>
                        )}
                        <div className="text-5xl">
                          {product.category === 'Dumbbells' ? '💪' :
                           product.category === 'Barbells' ? '🏋️' :
                           product.category === 'Weight Plates' ? '⚖️' :
                           product.category === 'Kettlebells' ? '🏺' :
                           product.category === 'Weight Sets' ? '📦' : '🗄️'}
                        </div>
                        <button className="absolute bottom-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <Heart className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-gray-900 text-lg">{product.name}</h3>
                          <span className="text-xs bg-amber-100 text-amber-600 px-2 py-1 rounded-full">
                            {product.category}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                        
                        {/* Weights */}
                        <div className="mb-3">
                          <div className="flex flex-wrap gap-1 mb-2">
                            {product.weights.slice(0, 4).map((weight, index) => (
                              <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                {weight}
                              </span>
                            ))}
                            {product.weights.length > 4 && (
                              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                +{product.weights.length - 4} more
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Specifications */}
                        <div className="grid grid-cols-2 gap-2 mb-3 text-xs">
                          <div className="text-gray-500">
                            <strong>Material:</strong> {product.material}
                          </div>
                          <div className="text-gray-500">
                            <strong>Brand:</strong> {product.brand}
                          </div>
                          {product.specifications.capacity && (
                            <div className="text-gray-500">
                              <strong>Capacity:</strong> {product.specifications.capacity}
                            </div>
                          )}
                          {product.specifications.finish && (
                            <div className="text-gray-500">
                              <strong>Finish:</strong> {product.specifications.finish}
                            </div>
                          )}
                        </div>

                        {/* Features */}
                        <div className="mb-3">
                          <div className="flex flex-wrap gap-1">
                            {product.features.slice(0, 2).map((feature, index) => (
                              <span key={index} className="text-xs bg-orange-50 text-orange-600 px-2 py-1 rounded">
                                {feature}
                              </span>
                            ))}
                            {product.features.length > 2 && (
                              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                +{product.features.length - 2} more
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
                  {freeWeightProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex border border-gray-100"
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
                          {product.category === 'Dumbbells' ? '💪' :
                           product.category === 'Barbells' ? '🏋️' :
                           product.category === 'Weight Plates' ? '⚖️' :
                           product.category === 'Kettlebells' ? '🏺' :
                           product.category === 'Weight Sets' ? '📦' : '🗄️'}
                        </div>
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                              <span className="text-xs bg-amber-100 text-amber-600 px-2 py-1 rounded-full">
                                {product.category}
                              </span>
                              {product.warranty === 'Lifetime' && (
                                <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full flex items-center">
                                  <Shield className="w-3 h-3 mr-1" />
                                  Lifetime Warranty
                                </span>
                              )}
                              {!product.inStock && (
                                <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
                                  Out of Stock
                                </span>
                              )}
                            </div>
                            <p className="text-gray-600 mb-3">{product.description}</p>
                            
                            {/* Weights and Specifications */}
                            <div className="grid grid-cols-2 gap-4 mb-4">
                              <div>
                                <div className="font-medium text-gray-500 text-sm mb-1">Weights Included</div>
                                <div className="flex flex-wrap gap-1">
                                  {product.weights.slice(0, 6).map((weight, index) => (
                                    <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                      {weight}
                                    </span>
                                  ))}
                                  {product.weights.length > 6 && (
                                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                      +{product.weights.length - 6} more
                                    </span>
                                  )}
                                </div>
                              </div>
                              <div>
                                <div className="font-medium text-gray-500 text-sm mb-1">Specifications</div>
                                <div className="text-sm text-gray-600">
                                  Material: {product.material} • Brand: {product.brand}
                                  {product.specifications.capacity && ` • Capacity: ${product.specifications.capacity}`}
                                </div>
                              </div>
                            </div>

                            {/* Features */}
                            <div className="mb-4">
                              <div className="flex flex-wrap gap-2">
                                {product.features.map((feature, index) => (
                                  <span key={index} className="text-sm bg-orange-50 text-orange-600 px-3 py-1 rounded-full">
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
                          <span className="text-sm text-gray-600">Warranty: {product.warranty}</span>
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
      <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Built for Serious Strength Training
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our free weights are engineered for durability, precision, and maximum performance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Lifetime Warranty</h3>
              <p className="text-gray-600 text-sm">
                Most products come with lifetime warranties against defects
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Scale className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Precision Weight</h3>
              <p className="text-gray-600 text-sm">
                Accurate weight calibration within 1% tolerance for consistent training
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Free Shipping</h3>
              <p className="text-gray-600 text-sm">
                Free shipping on orders over $100 with secure packaging
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">🏭</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Commercial Grade</h3>
              <p className="text-gray-600 text-sm">
                Built to withstand heavy use in commercial and home gyms
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}