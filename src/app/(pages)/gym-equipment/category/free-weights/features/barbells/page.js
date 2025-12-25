// app/gym-equipment/barbells/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, Star, Heart, Filter, Grid, List, Scale, Shield, Truck, Dumbbell } from 'lucide-react';

export default function BarbellsPage() {
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({
    type: [],
    material: [],
    priceRange: [],
    brand: [],
    weight: []
  });

  const barbellProducts = [
    {
      id: 1,
      name: 'Olympic Barbell (7ft) - 1500lb Capacity',
      price: '$299.99',
      originalPrice: '$379.99',
      image: '/olympic-barbell.jpg',
      rating: 4.6,
      reviews: 94,
      category: 'Olympic',
      brand: 'ProFit',
      material: 'Steel',
      description: 'Professional Olympic barbell with chrome finish and needle bearings',
      features: ['1500lb Capacity', 'Chrome Finish', 'Needle Bearings', 'Knurled Grip'],
      specifications: {
        capacity: '1500lb',
        finish: 'Chrome',
        bearings: 'Needle',
        grip: 'Knurled',
        length: '7 feet',
        weight: '45lb'
      },
      weights: ['45lb bar'],
      isNew: false,
      isBestseller: true,
      inStock: true,
      warranty: 'Lifetime'
    },
    {
      id: 2,
      name: 'EZ Curl Bar - 500lb Capacity',
      price: '$89.99',
      originalPrice: '$119.99',
      image: '/ez-curl-bar.jpg',
      rating: 4.5,
      reviews: 134,
      category: 'Specialty',
      brand: 'FlexGrip',
      material: 'Steel',
      description: 'Wavy curl bar for comfortable bicep and tricep workouts',
      features: ['Wavy Design', 'Comfortable Grip', 'Compact Size', 'Chrome Finish'],
      specifications: {
        capacity: '500lb',
        finish: 'Chrome',
        length: '4 feet',
        grip: 'Knurled',
        weight: '20lb'
      },
      weights: ['20lb bar'],
      isNew: false,
      isBestseller: true,
      inStock: true,
      warranty: '10 Years'
    },
    {
      id: 3,
      name: 'Women\'s Olympic Barbell (15kg)',
      price: '$249.99',
      originalPrice: '$299.99',
      image: '/womens-barbell.jpg',
      rating: 4.7,
      reviews: 67,
      category: 'Olympic',
      brand: 'ProFit',
      material: 'Steel',
      description: 'Specifically designed barbell for female athletes with smaller grip diameter',
      features: ['15kg Weight', '25mm Diameter', 'Needle Bearings', 'Chrome Finish'],
      specifications: {
        capacity: '1000lb',
        finish: 'Chrome',
        bearings: 'Needle',
        grip: '25mm Knurled',
        length: '6.5 feet',
        weight: '33lb'
      },
      weights: ['33lb bar'],
      isNew: true,
      isBestseller: false,
      inStock: true,
      warranty: 'Lifetime'
    },
    {
      id: 4,
      name: 'Deadlift Barbell - 1800lb Capacity',
      price: '$399.99',
      originalPrice: '$499.99',
      image: '/deadlift-barbell.jpg',
      rating: 4.8,
      reviews: 89,
      category: 'Specialty',
      brand: 'IronMaster',
      material: 'Steel',
      description: 'High-capacity deadlift bar with aggressive knurling and more whip',
      features: ['1800lb Capacity', 'Aggressive Knurling', 'More Whip', 'Bushing System'],
      specifications: {
        capacity: '1800lb',
        finish: 'Black Zinc',
        bearings: 'Bushings',
        grip: 'Aggressive Knurl',
        length: '7.2 feet',
        weight: '45lb'
      },
      weights: ['45lb bar'],
      isNew: false,
      isBestseller: true,
      inStock: true,
      warranty: 'Lifetime'
    },
    {
      id: 5,
      name: 'Tricep Bar',
      price: '$129.99',
      originalPrice: '$159.99',
      image: '/tricep-bar.jpg',
      rating: 4.4,
      reviews: 56,
      category: 'Specialty',
      brand: 'FlexGrip',
      material: 'Steel',
      description: 'Dual-grip tricep bar for comfortable skull crushers and extensions',
      features: ['Dual Grip', 'Wrist Friendly', 'Compact Design', 'Chrome Finish'],
      specifications: {
        capacity: '400lb',
        finish: 'Chrome',
        design: 'Dual Grip',
        length: '3 feet',
        weight: '15lb'
      },
      weights: ['15lb bar'],
      isNew: true,
      isBestseller: false,
      inStock: true,
      warranty: '5 Years'
    },
    {
      id: 6,
      name: 'Powerlifting Barbell - 2000lb Capacity',
      price: '$449.99',
      originalPrice: '$549.99',
      image: '/powerlifting-barbell.jpg',
      rating: 4.9,
      reviews: 78,
      category: 'Powerlifting',
      brand: 'CompetitionPro',
      material: 'Steel',
      description: 'Competition-grade powerlifting bar with passive knurling and minimal whip',
      features: ['2000lb Capacity', 'Passive Knurling', 'Minimal Whip', 'Competition Grade'],
      specifications: {
        capacity: '2000lb',
        finish: 'Bare Steel',
        bearings: 'Bushings',
        grip: 'Passive Knurl',
        length: '7.2 feet',
        weight: '45lb'
      },
      weights: ['45lb bar'],
      isNew: false,
      isBestseller: true,
      inStock: true,
      warranty: 'Lifetime'
    },
    {
      id: 7,
      name: 'Standard Barbell (1-inch)',
      price: '$79.99',
      originalPrice: '$99.99',
      image: '/standard-barbell.jpg',
      rating: 4.3,
      reviews: 112,
      category: 'Standard',
      brand: 'HomeGym',
      material: 'Steel',
      description: 'Basic standard barbell for home gyms with 1-inch sleeve diameter',
      features: ['1-inch Sleeves', 'Basic Knurling', 'Home Gym Use', 'Black Finish'],
      specifications: {
        capacity: '300lb',
        finish: 'Black Paint',
        sleeves: '1-inch',
        grip: 'Basic Knurl',
        length: '5 feet',
        weight: '15lb'
      },
      weights: ['15lb bar'],
      isNew: false,
      isBestseller: false,
      inStock: true,
      warranty: '2 Years'
    },
    {
      id: 8,
      name: 'Multi-Grip Barbell',
      price: '$179.99',
      originalPrice: '$229.99',
      image: '/multi-grip-bar.jpg',
      rating: 4.6,
      reviews: 45,
      category: 'Specialty',
      brand: 'IronMaster',
      material: 'Steel',
      description: 'Multi-grip bar for varied hand positions and shoulder-friendly pressing',
      features: ['Multiple Grips', 'Shoulder Friendly', 'Versatile', 'Chrome Finish'],
      specifications: {
        capacity: '600lb',
        finish: 'Chrome',
        grips: '5 Positions',
        length: '5.5 feet',
        weight: '25lb'
      },
      weights: ['25lb bar'],
      isNew: true,
      isBestseller: false,
      inStock: true,
      warranty: '10 Years'
    },
    {
      id: 9,
      name: 'Safety Squat Bar',
      price: '$299.99',
      originalPrice: '$379.99',
      image: '/safety-squat-bar.jpg',
      rating: 4.7,
      reviews: 34,
      category: 'Specialty',
      brand: 'PowerFlex',
      material: 'Steel',
      description: 'Specialty squat bar with padded shoulders and cambered design',
      features: ['Padded Shoulders', 'Cambered Design', 'Back Friendly', 'Versatile'],
      specifications: {
        capacity: '1000lb',
        finish: 'Black Zinc',
        padding: 'Padded',
        design: 'Cambered',
        length: '6 feet',
        weight: '35lb'
      },
      weights: ['35lb bar'],
      isNew: false,
      isBestseller: true,
      inStock: true,
      warranty: 'Lifetime'
    },
    {
      id: 10,
      name: 'Olympic Barbell Set with Weights',
      price: '$599.99',
      originalPrice: '$749.99',
      image: '/barbell-set.jpg',
      rating: 4.5,
      reviews: 156,
      category: 'Package',
      brand: 'IronMaster',
      material: 'Steel',
      description: 'Complete Olympic barbell set with bumper plates and storage',
      features: ['300lb Total Weight', 'Bumper Plates', '7ft Olympic Bar', 'Spring Collars'],
      specifications: {
        capacity: '1500lb',
        plates: '300lb Bumper',
        bar: '7ft Olympic',
        storage: 'Included',
        weight: '45lb bar + plates'
      },
      weights: ['45lb bar', '45lb plates', '35lb plates', '25lb plates', '10lb plates', '5lb plates'],
      isNew: false,
      isBestseller: true,
      inStock: true,
      warranty: 'Lifetime'
    },
    {
      id: 11,
      name: 'Hex Trap Bar',
      price: '$199.99',
      originalPrice: '$249.99',
      image: '/trap-bar.jpg',
      rating: 4.8,
      reviews: 89,
      category: 'Specialty',
      brand: 'PowerFlex',
      material: 'Steel',
      description: 'Hexagonal trap bar for deadlifts with elevated handles',
      features: ['Hex Design', 'Elevated Handles', 'Back Friendly', 'Versatile'],
      specifications: {
        capacity: '1000lb',
        finish: 'Black Zinc',
        handles: 'Dual Height',
        design: 'Hexagonal',
        weight: '45lb'
      },
      weights: ['45lb bar'],
      isNew: true,
      isBestseller: false,
      inStock: true,
      warranty: 'Lifetime'
    },
    {
      id: 12,
      name: 'Bamboo Barbell',
      price: '$599.99',
      originalPrice: '$699.99',
      image: '/bamboo-barbell.jpg',
      rating: 4.9,
      reviews: 23,
      category: 'Specialty',
      brand: 'CompetitionPro',
      material: 'Composite',
      description: 'Revolutionary bamboo composite barbell for enhanced whip and shock absorption',
      features: ['Bamboo Composite', 'Enhanced Whip', 'Shock Absorption', 'Competition Grade'],
      specifications: {
        capacity: '1500lb',
        material: 'Bamboo Composite',
        whip: 'Enhanced',
        finish: 'Clear Coat',
        length: '7 feet',
        weight: '35lb'
      },
      weights: ['35lb bar'],
      isNew: true,
      isBestseller: false,
      inStock: true,
      warranty: '5 Years'
    }
  ];

  const barbellTypes = [
    {
      name: 'Olympic Barbells',
      image: '/olympic-barbells-cat.jpg',
      description: 'Standard 2-inch sleeves',
      count: 8,
      icon: '🏋️',
      slug: 'olympic'
    },
    {
      name: 'Powerlifting',
      image: '/powerlifting-barbells-cat.jpg',
      description: 'High capacity bars',
      count: 4,
      icon: '💪'
    },
    {
      name: 'Specialty Bars',
      image: '/specialty-barbells-cat.jpg',
      description: 'EZ curl, trap bars',
      count: 12,
      icon: '🔄'
    },
    {
      name: 'Standard Bars',
      image: '/standard-barbells-cat.jpg',
      description: '1-inch sleeves',
      count: 6,
      icon: '📏'
    },
    {
      name: 'Women\'s Bars',
      image: '/womens-barbells-cat.jpg',
      description: 'Lighter, smaller grip',
      count: 3,
      icon: '♀️'
    },
    {
      name: 'Barbell Sets',
      image: '/barbell-sets-cat.jpg',
      description: 'Complete packages',
      count: 5,
      icon: '📦'
    }
  ];

  const filters = {
    type: ['Olympic', 'Powerlifting', 'Specialty', 'Standard', 'Women\'s', 'Package'],
    material: ['Steel', 'Chrome', 'Black Zinc', 'Bare Steel', 'Composite'],
    priceRange: [
      'Under $100',
      '$100 - $200',
      '$200 - $300',
      '$300 - $500',
      'Above $500'
    ],
    brand: ['ProFit', 'IronMaster', 'CompetitionPro', 'PowerFlex', 'FlexGrip', 'HomeGym'],
    weight: ['Under 20lb', '20-30lb', '30-40lb', '40-50lb', 'Above 50lb']
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
      <section className="bg-gradient-to-r from-gray-800 to-red-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <nav className="flex items-center space-x-2 text-sm text-red-200 mb-4">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <Link href="/gym-equipment" className="hover:text-white transition-colors">Gym Equipment</Link>
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <Link href="/gym-equipment/free-weights" className="hover:text-white transition-colors">Free Weights</Link>
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <span className="text-white font-medium">Barbells</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Barbells
              </h1>
              <p className="text-xl text-red-100 max-w-2xl">
                Lift heavier and smarter with our premium barbell collection. 
                From Olympic bars to specialty designs, find the perfect bar for your strength journey.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="text-6xl">🏋️</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-6 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="flex items-center justify-center">
                <Dumbbell className="w-5 h-5 text-red-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">30+</span>
              </div>
              <p className="text-sm text-gray-600">Barbell Types</p>
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
                <Truck className="w-5 h-5 text-red-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">Free</span>
              </div>
              <p className="text-sm text-gray-600">Shipping Over $150</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">2000lb+</div>
              <p className="text-sm text-gray-600">Max Capacity</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Navigation */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Barbell Types</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {barbellTypes.map((category, index) => (
              <Link
                key={index}
                href={`/gym-equipment/barbells/${category.slug}`}
                className="bg-gray-50 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-200 group border border-gray-200"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:from-red-200 group-hover:to-orange-300 transition-all duration-200">
                  <div className="text-xl">{category.icon}</div>
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-200">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{category.description}</p>
                <span className="inline-block mt-2 text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
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
                Barbell Collection
              </h2>
              <p className="text-gray-600">
                {barbellProducts.length} premium barbells for powerlifting, Olympic lifting, and strength training
              </p>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 lg:mt-0">
              {/* View Mode Toggle */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-red-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-red-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-300"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest First</option>
                <option value="capacity">Weight Capacity</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-72 flex-shrink-0">
              <div className="bg-gray-50 rounded-lg p-6 sticky top-4 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Filter Barbells
                </h3>

                {/* Barbell Type Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Barbell Type</h4>
                  <div className="space-y-2">
                    {filters.type.map((type) => (
                      <label key={type} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.type.includes(type)}
                          onChange={() => toggleFilter('type', type)}
                          className="rounded border-gray-300 text-red-600 focus:ring-red-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Material Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Material & Finish</h4>
                  <div className="space-y-2">
                    {filters.material.map((material) => (
                      <label key={material} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.material.includes(material)}
                          onChange={() => toggleFilter('material', material)}
                          className="rounded border-gray-300 text-red-600 focus:ring-red-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{material}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Weight Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Bar Weight</h4>
                  <div className="space-y-2">
                    {filters.weight.map((weight) => (
                      <label key={weight} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.weight.includes(weight)}
                          onChange={() => toggleFilter('weight', weight)}
                          className="rounded border-gray-300 text-red-600 focus:ring-red-500"
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
                          className="rounded border-gray-300 text-red-600 focus:ring-red-500"
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
                          className="rounded border-gray-300 text-red-600 focus:ring-red-500"
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
                  {barbellProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100"
                    >
                      <div className="relative h-64 bg-gradient-to-br from-red-50 to-orange-100 flex items-center justify-center">
                        {product.isNew && (
                          <span className="absolute top-3 left-3 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            New
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
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
                          {product.category === 'Olympic' ? '🏋️' :
                           product.category === 'Powerlifting' ? '💪' :
                           product.category === 'Specialty' ? '🔄' :
                           product.category === 'Standard' ? '📏' :
                           product.category === 'Women\'s' ? '♀️' : '📦'}
                        </div>
                        <button className="absolute bottom-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <Heart className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-gray-900 text-lg">{product.name}</h3>
                          <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
                            {product.category}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                        
                        {/* Specifications */}
                        <div className="grid grid-cols-2 gap-2 mb-3 text-xs">
                          <div className="text-gray-500">
                            <strong>Capacity:</strong> {product.specifications.capacity}
                          </div>
                          <div className="text-gray-500">
                            <strong>Weight:</strong> {product.specifications.weight}
                          </div>
                          <div className="text-gray-500">
                            <strong>Material:</strong> {product.material}
                          </div>
                          <div className="text-gray-500">
                            <strong>Brand:</strong> {product.brand}
                          </div>
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
                                ? 'bg-red-600 text-white hover:bg-red-700' 
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
                  {barbellProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex border border-gray-100"
                    >
                      <div className="w-48 relative bg-gradient-to-br from-red-50 to-orange-100 flex items-center justify-center">
                        {product.isNew && (
                          <span className="absolute top-3 left-3 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            New
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Bestseller
                          </span>
                        )}
                        <div className="text-4xl">
                          {product.category === 'Olympic' ? '🏋️' :
                           product.category === 'Powerlifting' ? '💪' :
                           product.category === 'Specialty' ? '🔄' :
                           product.category === 'Standard' ? '📏' :
                           product.category === 'Women\'s' ? '♀️' : '📦'}
                        </div>
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                              <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
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
                            
                            {/* Specifications */}
                            <div className="grid grid-cols-2 gap-4 mb-4">
                              <div>
                                <div className="font-medium text-gray-500 text-sm mb-1">Key Specifications</div>
                                <div className="text-sm text-gray-600 space-y-1">
                                  <div>Capacity: {product.specifications.capacity}</div>
                                  <div>Weight: {product.specifications.weight}</div>
                                  <div>Finish: {product.specifications.finish}</div>
                                </div>
                              </div>
                              <div>
                                <div className="font-medium text-gray-500 text-sm mb-1">Additional Info</div>
                                <div className="text-sm text-gray-600">
                                  Material: {product.material} • Brand: {product.brand}
                                  {product.specifications.length && ` • Length: ${product.specifications.length}`}
                                  {product.specifications.bearings && ` • Bearings: ${product.specifications.bearings}`}
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
                                ? 'bg-red-600 text-white hover:bg-red-700' 
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
      <section className="py-16 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Engineered for Maximum Performance
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our barbells are precision-engineered for serious lifters who demand the best
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Scale className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">High Capacity</h3>
              <p className="text-gray-600 text-sm">
                Tested to withstand 2000lb+ for powerlifting and heavy training
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Lifetime Warranty</h3>
              <p className="text-gray-600 text-sm">
                Most barbells come with lifetime warranties against bending or breakage
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Dumbbell className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Precision Knurling</h3>
              <p className="text-gray-600 text-sm">
                Aggressive, passive, or competition-grade knurling for optimal grip
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Free Shipping</h3>
              <p className="text-gray-600 text-sm">
                Free shipping on orders over $150 with specialized barbell packaging
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}