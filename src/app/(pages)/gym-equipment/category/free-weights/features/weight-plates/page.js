// app/gym-equipment/weight-plates/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, Star, Heart, Filter, Grid, List, Scale, Shield, Truck } from 'lucide-react';

export default function WeightPlatesPage() {
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    type: [],
    material: [],
    priceRange: [],
    brand: [],
    weight: []
  });

  const weightPlateProducts = [
    {
      id: 1,
      name: 'Olympic Bumper Plate Set (300lb)',
      price: '$599.99',
      originalPrice: '$749.99',
      image: '/bumper-plate-set.jpg',
      rating: 4.7,
      reviews: 203,
      category: 'Bumper Plates',
      brand: 'IronMaster',
      material: 'Rubber',
      description: 'Complete Olympic bumper plate set with color-coded training plates',
      features: ['300lb Total Weight', 'Color Coded', 'Bounce Reduction', 'Steel Hub'],
      specifications: {
        holeSize: '2-inch Olympic',
        accuracy: '±1%',
        finish: 'Color Rubber',
        hub: 'Steel Insert'
      },
      weights: ['45lb (4)', '35lb (2)', '25lb (2)', '10lb (4)', '5lb (2)', '2.5lb (2)'],
      isNew: false,
      isBestseller: true,
      inStock: true,
      warranty: 'Lifetime'
    },
    {
      id: 2,
      name: 'Cast Iron Plate Set (255lb)',
      price: '$299.99',
      originalPrice: '$399.99',
      image: '/iron-plates.jpg',
      rating: 4.4,
      reviews: 87,
      category: 'Cast Iron',
      brand: 'IronWorks',
      material: 'Cast Iron',
      description: 'Classic cast iron weight plates with Olympic center hole',
      features: ['255lb Total', 'Cast Iron', 'Olympic Hole', 'Grip Handles'],
      specifications: {
        holeSize: '2-inch Olympic',
        accuracy: '±2%',
        finish: 'Black Oxide',
        edges: 'Diamond Pattern'
      },
      weights: ['45lb (2)', '35lb (2)', '25lb (2)', '10lb (2)', '5lb (2)'],
      isNew: false,
      isBestseller: false,
      inStock: true,
      warranty: 'Lifetime'
    },
    {
      id: 3,
      name: 'Competition Bumper Plates',
      price: '$49.99',
      originalPrice: '$69.99',
      image: '/competition-plates.jpg',
      rating: 4.9,
      reviews: 156,
      category: 'Competition',
      brand: 'CompetitionPro',
      material: 'Rubber',
      description: 'IWF competition-grade bumper plates with precision calibration',
      features: ['IWF Certified', 'Precision Calibrated', 'Color Coded', 'Low Bounce'],
      specifications: {
        holeSize: '2-inch Olympic',
        accuracy: '±0.5%',
        standard: 'IWF Competition',
        bounce: 'Low'
      },
      weights: ['25kg', '20kg', '15kg', '10kg', '5kg', '2.5kg', '1.25kg'],
      isNew: true,
      isBestseller: false,
      inStock: true,
      warranty: 'Lifetime'
    },
    {
      id: 4,
      name: 'Micro Gainz Plate Set',
      price: '$39.99',
      originalPrice: '$49.99',
      image: '/micro-plates.jpg',
      rating: 4.6,
      reviews: 89,
      category: 'Micro Plates',
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
      id: 5,
      name: 'Rubber Grip Plates',
      price: '$19.99',
      originalPrice: '$24.99',
      image: '/grip-plates.jpg',
      rating: 4.3,
      reviews: 234,
      category: 'Grip Plates',
      brand: 'HomeGym',
      material: 'Rubber',
      description: 'Rubber coated plates with easy-grip handles for comfortable use',
      features: ['Grip Handles', 'Rubber Coated', 'Quiet', 'Durable'],
      specifications: {
        holeSize: '1-inch Standard',
        accuracy: '±3%',
        coating: 'Rubber',
        design: '3-Handle'
      },
      weights: ['2.5lb', '5lb', '10lb', '25lb'],
      isNew: false,
      isBestseller: true,
      inStock: true,
      warranty: '2 Years'
    },
    {
      id: 6,
      name: 'Urethane Bumper Plates',
      price: '$79.99',
      originalPrice: '$99.99',
      image: '/urethane-plates.jpg',
      rating: 4.8,
      reviews: 67,
      category: 'Urethane',
      brand: 'ProFit',
      material: 'Urethane',
      description: 'Premium urethane bumper plates with superior durability and quiet operation',
      features: ['Urethane Coating', 'Virtually Silent', 'Long Lasting', 'Color Coded'],
      specifications: {
        holeSize: '2-inch Olympic',
        accuracy: '±1%',
        coating: 'Urethane',
        noise: 'Minimal'
      },
      weights: ['10lb', '25lb', '35lb', '45lb'],
      isNew: false,
      isBestseller: true,
      inStock: true,
      warranty: '10 Years'
    },
    {
      id: 7,
      name: 'Fractional Plate Set',
      price: '$29.99',
      originalPrice: '$39.99',
      image: '/fractional-plates.jpg',
      rating: 4.5,
      reviews: 178,
      category: 'Micro Plates',
      brand: 'PrecisionLift',
      material: 'Steel',
      description: 'Tiny weight plates for precise strength progression in small increments',
      features: ['Tiny Increments', 'Steel Construction', 'Color Coded', 'Easy Storage'],
      specifications: {
        increments: '0.25lb - 1lb',
        material: 'Steel',
        finish: 'Color Coated',
        use: 'Precision Training'
      },
      weights: ['0.25lb', '0.5lb', '0.75lb', '1lb'],
      isNew: false,
      isBestseller: false,
      inStock: true,
      warranty: '3 Years'
    },
    {
      id: 8,
      name: 'Hi-Temp Bumper Plates',
      price: '$69.99',
      originalPrice: '$89.99',
      image: '/hi-temp-plates.jpg',
      rating: 4.7,
      reviews: 94,
      category: 'Bumper Plates',
      brand: 'PowerFlex',
      material: 'Rubber',
      description: 'High-temperature rubber bumper plates with extreme durability',
      features: ['High-Temp Rubber', 'Extreme Durability', 'Color Coded', 'Great Bounce'],
      specifications: {
        holeSize: '2-inch Olympic',
        accuracy: '±2%',
        material: 'High-Temp Rubber',
        temperature: '-40°F to 140°F'
      },
      weights: ['10lb', '15lb', '25lb', '35lb', '45lb', '55lb'],
      isNew: true,
      isBestseller: false,
      inStock: true,
      warranty: 'Lifetime'
    },
    {
      id: 9,
      name: 'Standard Weight Plate Set',
      price: '$199.99',
      originalPrice: '$249.99',
      image: '/standard-plates.jpg',
      rating: 4.2,
      reviews: 156,
      category: 'Cast Iron',
      brand: 'HomeGym',
      material: 'Cast Iron',
      description: 'Complete standard weight plate set for home gym equipment',
      features: ['1-inch Hole', 'Cast Iron', 'Complete Set', 'Budget Friendly'],
      specifications: {
        holeSize: '1-inch Standard',
        accuracy: '±3%',
        finish: 'Black Paint',
        edges: 'Smooth'
      },
      weights: ['2.5lb (4)', '5lb (4)', '10lb (4)', '25lb (2)'],
      isNew: false,
      isBestseller: true,
      inStock: true,
      warranty: '1 Year'
    },
    {
      id: 10,
      name: 'Color Training Plates',
      price: '$34.99',
      originalPrice: '$44.99',
      image: '/color-plates.jpg',
      rating: 4.6,
      reviews: 203,
      category: 'Training Plates',
      brand: 'FitnessFirst',
      material: 'Rubber',
      description: 'Brightly colored training plates perfect for group fitness and commercial gyms',
      features: ['Bright Colors', 'Rubber Coated', 'Easy Identification', 'Durable'],
      specifications: {
        holeSize: '2-inch Olympic',
        accuracy: '±2%',
        colors: 'Weight Specific',
        coating: 'Rubber'
      },
      weights: ['5lb', '10lb', '15lb', '25lb', '35lb', '45lb'],
      isNew: false,
      isBestseller: true,
      inStock: true,
      warranty: '5 Years'
    },
    {
      id: 11,
      name: 'Calibrated Steel Plates',
      price: '$129.99',
      originalPrice: '$159.99',
      image: '/calibrated-plates.jpg',
      rating: 4.9,
      reviews: 45,
      category: 'Competition',
      brand: 'CompetitionPro',
      material: 'Steel',
      description: 'Precision calibrated steel plates for competition and serious training',
      features: ['Precision Calibrated', 'Steel Construction', 'Laser Etched', 'Competition Grade'],
      specifications: {
        holeSize: '2-inch Olympic',
        accuracy: '±0.25%',
        material: 'Machined Steel',
        marking: 'Laser Etched'
      },
      weights: ['25kg', '20kg', '15kg', '10kg', '5kg'],
      isNew: true,
      isBestseller: false,
      inStock: true,
      warranty: 'Lifetime'
    },
    {
      id: 12,
      name: 'Plate Storage Tree',
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
    }
  ];

  const plateTypes = [
    {
      name: 'Bumper Plates',
      image: '/bumper-plates-cat.jpg',
      description: 'Rubber, drop-safe',
      count: 15,
      icon: '🛡️',
      slug: 'bumper'
    },
    {
      name: 'Cast Iron',
      image: '/iron-plates-cat.jpg',
      description: 'Classic & durable',
      count: 12,
      icon: '⚙️'
    },
    {
      name: 'Competition',
      image: '/competition-plates-cat.jpg',
      description: 'Precision calibrated',
      count: 8,
      icon: '🏆'
    },
    {
      name: 'Micro Plates',
      image: '/micro-plates-cat.jpg',
      description: 'Small increments',
      count: 6,
      icon: '📊'
    },
    {
      name: 'Urethane',
      image: '/urethane-plates-cat.jpg',
      description: 'Quiet & premium',
      count: 4,
      icon: '🔇'
    },
    {
      name: 'Plate Storage',
      image: '/plate-storage-cat.jpg',
      description: 'Racks & trees',
      count: 7,
      icon: '🗄️'
    }
  ];

  const filters = {
    type: ['Bumper Plates', 'Cast Iron', 'Competition', 'Micro Plates', 'Urethane', 'Grip Plates', 'Training Plates', 'Storage'],
    material: ['Rubber', 'Cast Iron', 'Steel', 'Urethane', 'Vinyl'],
    priceRange: [
      'Under $50',
      '$50 - $100',
      '$100 - $200',
      '$200 - $500',
      'Above $500'
    ],
    brand: ['IronMaster', 'IronWorks', 'CompetitionPro', 'PrecisionLift', 'HomeGym', 'ProFit', 'PowerFlex', 'FitnessFirst', 'RackMaster'],
    weight: ['Under 10lb', '10-25lb', '25-45lb', '45lb+', 'Micro Weights', 'KG Weights']
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
      <section className="bg-gradient-to-r from-green-800 to-teal-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <nav className="flex items-center space-x-2 text-sm text-green-200 mb-4">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <Link href="/gym-equipment" className="hover:text-white transition-colors">Gym Equipment</Link>
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <Link href="/gym-equipment/free-weights" className="hover:text-white transition-colors">Free Weights</Link>
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <span className="text-white font-medium">Weight Plates</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Weight Plates
              </h1>
              <p className="text-xl text-green-100 max-w-2xl">
                Precision-calibrated weight plates for every training need. 
                From bumper plates to competition standards, build your perfect weight set.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="text-6xl">⚖️</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-6 bg-gradient-to-r from-green-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="flex items-center justify-center">
                <Scale className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">±0.25%</span>
              </div>
              <p className="text-sm text-gray-600">Precision Accuracy</p>
            </div>
            <div>
              <div className="flex items-center justify-center">
                <Shield className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">Lifetime</span>
              </div>
              <p className="text-sm text-gray-600">Warranty Available</p>
            </div>
            <div>
              <div className="flex items-center justify-center">
                <Truck className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">Free</span>
              </div>
              <p className="text-sm text-gray-600">Shipping Over $100</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">50+</div>
              <p className="text-sm text-gray-600">Plate Varieties</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Navigation */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Plate Types</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {plateTypes.map((category, index) => (
              <Link
                key={index}
                href={`/gym-equipment/weight-plates/${category.slug}`}
                className="bg-gray-50 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-200 group border border-gray-200"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-teal-200 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:from-green-200 group-hover:to-teal-300 transition-all duration-200">
                  <div className="text-xl">{category.icon}</div>
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-200">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{category.description}</p>
                <span className="inline-block mt-2 text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
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
                Weight Plate Collection
              </h2>
              <p className="text-gray-600">
                {weightPlateProducts.length} premium weight plates for Olympic, standard, and competition use
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
                <option value="weight">Weight</option>
                <option value="accuracy">Precision Accuracy</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-72 flex-shrink-0">
              <div className="bg-gray-50 rounded-lg p-6 sticky top-4 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Filter Plates
                </h3>

                {/* Plate Type Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Plate Type</h4>
                  <div className="space-y-2">
                    {filters.type.map((type) => (
                      <label key={type} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.type.includes(type)}
                          onChange={() => toggleFilter('type', type)}
                          className="rounded border-gray-300 text-green-600 focus:ring-green-500"
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
                          className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{material}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Weight Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Weight Range</h4>
                  <div className="space-y-2">
                    {filters.weight.map((weight) => (
                      <label key={weight} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.weight.includes(weight)}
                          onChange={() => toggleFilter('weight', weight)}
                          className="rounded border-gray-300 text-green-600 focus:ring-green-500"
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
                  {weightPlateProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100"
                    >
                      <div className="relative h-64 bg-gradient-to-br from-green-50 to-teal-100 flex items-center justify-center">
                        {product.isNew && (
                          <span className="absolute top-3 left-3 bg-green-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            New
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
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
                          {product.category === 'Bumper Plates' ? '🛡️' :
                           product.category === 'Cast Iron' ? '⚙️' :
                           product.category === 'Competition' ? '🏆' :
                           product.category === 'Micro Plates' ? '📊' :
                           product.category === 'Urethane' ? '🔇' :
                           product.category === 'Grip Plates' ? '👐' :
                           product.category === 'Training Plates' ? '🎨' : '🗄️'}
                        </div>
                        <button className="absolute bottom-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <Heart className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-gray-900 text-lg">{product.name}</h3>
                          <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
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
                            <strong>Accuracy:</strong> {product.specifications.accuracy}
                          </div>
                          <div className="text-gray-500">
                            <strong>Material:</strong> {product.material}
                          </div>
                          <div className="text-gray-500">
                            <strong>Hole Size:</strong> {product.specifications.holeSize}
                          </div>
                          <div className="text-gray-500">
                            <strong>Brand:</strong> {product.brand}
                          </div>
                        </div>

                        {/* Features */}
                        <div className="mb-3">
                          <div className="flex flex-wrap gap-1">
                            {product.features.slice(0, 2).map((feature, index) => (
                              <span key={index} className="text-xs bg-teal-50 text-teal-600 px-2 py-1 rounded">
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
                                ? 'bg-green-600 text-white hover:bg-green-700' 
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
                  {weightPlateProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex border border-gray-100"
                    >
                      <div className="w-48 relative bg-gradient-to-br from-green-50 to-teal-100 flex items-center justify-center">
                        {product.isNew && (
                          <span className="absolute top-3 left-3 bg-green-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            New
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Bestseller
                          </span>
                        )}
                        <div className="text-4xl">
                          {product.category === 'Bumper Plates' ? '🛡️' :
                           product.category === 'Cast Iron' ? '⚙️' :
                           product.category === 'Competition' ? '🏆' :
                           product.category === 'Micro Plates' ? '📊' :
                           product.category === 'Urethane' ? '🔇' :
                           product.category === 'Grip Plates' ? '👐' :
                           product.category === 'Training Plates' ? '🎨' : '🗄️'}
                        </div>
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                              <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
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
                                <div className="text-sm text-gray-600 space-y-1">
                                  <div>Accuracy: {product.specifications.accuracy}</div>
                                  <div>Hole Size: {product.specifications.holeSize}</div>
                                  <div>Material: {product.material}</div>
                                </div>
                              </div>
                            </div>

                            {/* Features */}
                            <div className="mb-4">
                              <div className="flex flex-wrap gap-2">
                                {product.features.map((feature, index) => (
                                  <span key={index} className="text-sm bg-teal-50 text-teal-600 px-3 py-1 rounded-full">
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
                                ? 'bg-green-600 text-white hover:bg-green-700' 
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
      <section className="py-16 bg-gradient-to-r from-green-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Precision Engineering for Serious Training
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our weight plates are manufactured to exacting standards for consistent performance and durability
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Scale className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Precision Calibrated</h3>
              <p className="text-gray-600 text-sm">
                Competition plates accurate within 0.25% for serious training and meets
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Drop Tested</h3>
              <p className="text-gray-600 text-sm">
                Bumper plates tested to withstand thousands of drops from overhead
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">🎯</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Color Coded</h3>
              <p className="text-gray-600 text-sm">
                Easy weight identification with standardized color coding system
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Free Shipping</h3>
              <p className="text-gray-600 text-sm">
                Free shipping on orders over $100 with protective plate packaging
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}